import { getProductsFromGoogleSheets } from "./services/googleSheets.js";

const PLACEHOLDER = "/images/placeholders/educore-placeholder.webp";
const categoryLabels = {
  stationery: "Stationery",
  furniture: "Office Furniture",
  ppe: "PPE & Safety",
  cleaning: "Cleaning & Hygiene",
  hospital: "Hospital Equipment"
};

let products = [];
let preparedProducts = null;

function setCounts(count) {
  ["pdfProductCount", "pdfProductCount2", "featureProductCount"].forEach(id => {
    const element = document.getElementById(id);
    if (element) element.textContent = count;
  });
}

function setStatus(message, progress = null) {
  const status = document.getElementById("pdf-status");
  const bar = document.getElementById("pdf-progress-bar");
  if (status) status.textContent = message;
  if (bar && progress !== null) bar.style.width = `${Math.max(0, Math.min(100, progress))}%`;
}

function blobToCompressedDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const objectUrl = URL.createObjectURL(blob);
    const image = new Image();
    image.onload = () => {
      const maximumWidth = 420;
      const maximumHeight = 280;
      const scale = Math.min(maximumWidth / image.width, maximumHeight / image.height, 1);
      const width = Math.max(1, Math.round(image.width * scale));
      const height = Math.max(1, Math.round(image.height * scale));
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext("2d");
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, width, height);
      context.drawImage(image, 0, 0, width, height);
      URL.revokeObjectURL(objectUrl);
      resolve(canvas.toDataURL("image/jpeg", 0.68));
    };
    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("Image could not be decoded"));
    };
    image.src = objectUrl;
  });
}

async function fetchImageData(product) {
  const candidates = [...new Set([product.image, product.localImage, PLACEHOLDER].filter(Boolean))];
  for (const source of candidates) {
    try {
      const response = await fetch(source);
      if (!response.ok) continue;
      return await blobToCompressedDataUrl(await response.blob());
    } catch (error) {
      console.warn(`Catalogue image failed: ${source}`, error);
    }
  }
  return null;
}

async function prepareProducts() {
  if (preparedProducts) return preparedProducts;
  const prepared = new Array(products.length);
  let completed = 0;
  const concurrency = 5;
  let nextIndex = 0;

  async function worker() {
    while (nextIndex < products.length) {
      const index = nextIndex++;
      prepared[index] = { ...products[index], pdfImage: await fetchImageData(products[index]) };
      completed += 1;
      setStatus(`Preparing product images: ${completed} of ${products.length}`, (completed / products.length) * 100);
    }
  }

  await Promise.all(Array.from({ length: Math.min(concurrency, products.length) }, worker));
  preparedProducts = prepared;
  return prepared;
}

function productCell(product) {
  const features = (product.features || []).slice(0, 4).join(" • ");
  const stack = [];
  if (product.pdfImage) stack.push({ image: product.pdfImage, fit: [225, 125], alignment: "center", margin: [0, 0, 0, 8] });
  stack.push(
    { text: product.name, bold: true, fontSize: 12, color: "#1A2B4C", margin: [0, 0, 0, 4] },
    { columns: [
      { text: product.price || "Request Quote", bold: true, color: "#F05A28", fontSize: 11 },
      { text: `SKU: ${product.sku || "N/A"}`, alignment: "right", color: "#64748B", fontSize: 8 }
    ] },
    { text: product.description || "Contact EDUCORE for product specifications.", fontSize: 8.5, color: "#475569", margin: [0, 6, 0, 4] }
  );
  if (features) stack.push({ text: features, fontSize: 7.5, color: "#64748B", margin: [0, 2, 0, 0] });
  stack.push({ text: `Unit: ${product.unit || "Each"}`, fontSize: 8, bold: true, color: "#1A2B4C", margin: [0, 5, 0, 0] });
  return { stack, margin: [8, 8, 8, 8], fillColor: "#FFFFFF" };
}

function productRows(categoryProducts) {
  const rows = [];
  for (let index = 0; index < categoryProducts.length; index += 2) {
    rows.push([
      productCell(categoryProducts[index]),
      categoryProducts[index + 1] ? productCell(categoryProducts[index + 1]) : { text: "", fillColor: "#FFFFFF" }
    ]);
  }
  return rows;
}

function buildDocument(prepared) {
  const categories = [...new Set(prepared.map(product => product.category))];
  const content = [{
    stack: [
      { text: "EDUCORE", fontSize: 34, bold: true, color: "#1A2B4C" },
      { text: "PRODUCT CATALOGUE 2026", fontSize: 22, bold: true, color: "#F05A28", margin: [0, 8, 0, 16] },
      { text: "Stationery • Office Furniture • PPE • Cleaning & Hygiene • Hospital Equipment", fontSize: 12, color: "#475569" },
      { text: `${prepared.length} products • Bulk supply • Nationwide delivery • Tender ready`, fontSize: 11, color: "#64748B", margin: [0, 10, 0, 30] },
      { text: "104 Donnelly Street, Turffontein, Johannesburg, 2190", fontSize: 10 },
      { text: "071 945 0220  |  info@educore.co.za", fontSize: 10, margin: [0, 5, 0, 0] }
    ],
    alignment: "center",
    margin: [30, 100, 30, 0]
  }];

  categories.forEach(category => {
    const categoryProducts = prepared.filter(product => product.category === category);
    content.push({ text: categoryLabels[category] || category, pageBreak: "before", fontSize: 22, bold: true, color: "#1A2B4C", margin: [0, 0, 0, 10] });
    content.push({
      table: { widths: ["*", "*"], body: productRows(categoryProducts), dontBreakRows: true },
      layout: { hLineColor: () => "#E2E8F0", vLineColor: () => "#E2E8F0", paddingLeft: () => 3, paddingRight: () => 3, paddingTop: () => 3, paddingBottom: () => 3 }
    });
  });

  return {
    pageSize: "A4",
    pageOrientation: "landscape",
    pageMargins: [30, 52, 30, 38],
    header: currentPage => currentPage === 1 ? null : ({ columns: [{ text: "EDUCORE PRODUCT CATALOGUE", bold: true, color: "#1A2B4C" }, { text: "2026", alignment: "right", color: "#F05A28" }], margin: [30, 20, 30, 0], fontSize: 9 }),
    footer: (currentPage, pageCount) => ({ columns: [{ text: "info@educore.co.za  |  071 945 0220", color: "#64748B" }, { text: `Page ${currentPage} of ${pageCount}`, alignment: "right", color: "#64748B" }], margin: [30, 10, 30, 0], fontSize: 8 }),
    content,
    defaultStyle: { font: "Roboto" }
  };
}

async function createPdf(action, button) {
  if (!window.pdfMake) return alert("The PDF library could not be loaded.");
  if (!products.length) return alert("Products are still loading. Please try again.");
  const original = button.innerHTML;
  button.disabled = true;
  document.querySelectorAll("#generatePdfBtn, #printPdfBtn").forEach(item => item.disabled = true);
  try {
    const prepared = await prepareProducts();
    setStatus("Building your image catalogue…", 100);
    const pdf = window.pdfMake.createPdf(buildDocument(prepared));
    if (action === "download") pdf.download("educore-product-catalogue-2026.pdf");
    else pdf.open();
    setStatus("Catalogue ready. All available product images were included.", 100);
  } catch (error) {
    console.error("Catalogue PDF failed", error);
    setStatus("Catalogue generation failed. Please refresh and try again.", 0);
    alert(`Catalogue generation failed: ${error.message}`);
  } finally {
    button.innerHTML = original;
    document.querySelectorAll("#generatePdfBtn, #printPdfBtn").forEach(item => item.disabled = false);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    setStatus("Loading live product catalogue…", 5);
    products = await getProductsFromGoogleSheets();
    setCounts(products.length);
    setStatus(`${products.length} products loaded. Images will be prepared when you download or print.`, 0);
  } catch (error) {
    console.error(error);
    setStatus("Products could not be loaded. Please refresh the page.", 0);
  }

  document.getElementById("generatePdfBtn")?.addEventListener("click", event => createPdf("download", event.currentTarget));
  document.getElementById("printPdfBtn")?.addEventListener("click", event => createPdf("print", event.currentTarget));
});
