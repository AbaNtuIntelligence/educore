import { getProductsFromGoogleSheets } from "./services/googleSheets.js";

const PLACEHOLDER =
  "/images/placeholders/educore-placeholder.webp";

const CATALOGUE_LOGO =
  "/images/hero/logo.jpeg";

const WEBSITE_URL =
  "https://www.educorestationery-hygiene-ppe.co.za";

const BUSINESS_EMAIL =
  "info@educorestationery-hygiene-ppe.co.za";

const BUSINESS_PHONE =
  "071 945 0220";

const BUSINESS_ADDRESS =
  "104 Donnelly Street, Turffontein, Johannesburg, 2190";

const EMAIL_LINK =
  `mailto:${BUSINESS_EMAIL}`;

const WHATSAPP_LINK =
  "https://wa.me/27719450220";

const MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(BUSINESS_ADDRESS);

const PDF_ICONS = {
  address: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill="#F05A28"
        d="M12 2C7.6 2 4 5.6 4 10c0 5.7 8 12 8 12s8-6.3 8-12c0-4.4-3.6-8-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
      />
    </svg>
  `,

  email: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill="#F05A28"
        d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"
      />
    </svg>
  `,

  whatsapp: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill="#25D366"
        d="M12 2a10 10 0 0 0-8.7 14.9L2 22l5.3-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.4-.2-3.1.8.8-3-.2-.5A8 8 0 1 1 12 20zm4.4-5.8c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.3 0-.4.1-.6l.4-.5.2-.5c.1-.2 0-.4 0-.5L9.6 8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 5 4.2.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.5-.1 1.4-.6 1.6-1.2.2-.6.2-1.1.2-1.2-.1-.2-.3-.3-.5-.4l-1.4-.7z"
      />
    </svg>
  `,

  website: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill="#1A2B4C"
        d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm6.9 6h-3a15.7 15.7 0 0 0-1.4-3.3A8 8 0 0 1 18.9 8zM12 4c.8 1 1.5 2.3 1.8 4h-3.6C10.5 6.3 11.2 5 12 4zM4.3 14a8.6 8.6 0 0 1 0-4h3.4a16.7 16.7 0 0 0 0 4H4.3zm.8 2h3a15.7 15.7 0 0 0 1.4 3.3A8 8 0 0 1 5.1 16zm3-8h-3a8 8 0 0 1 4.4-3.3A15.7 15.7 0 0 0 8.1 8zM12 20c-.8-1-1.5-2.3-1.8-4h3.6c-.3 1.7-1 3-1.8 4zm2.2-6H9.8a14.7 14.7 0 0 1 0-4h4.4a14.7 14.7 0 0 1 0 4zm.3 5.3a15.7 15.7 0 0 0 1.4-3.3h3a8 8 0 0 1-4.4 3.3zM16.3 14a16.7 16.7 0 0 0 0-4h3.4a8.6 8.6 0 0 1 0 4h-3.4z"
      />
    </svg>
  `
};

const categoryLabels = {
  stationery: "Stationery",
  furniture: "Office Furniture",
  ppe: "PPE & Safety",
  cleaning: "Cleaning & Hygiene",
  hospital: "Hospital Equipment"
};

let products = [];
let preparedProducts = null;
let preparedLogo = null;


/* =========================================================
   PAGE STATUS
========================================================= */

function setCounts(count) {
  [
    "pdfProductCount",
    "pdfProductCount2",
    "featureProductCount"
  ].forEach(id => {
    const element = document.getElementById(id);

    if (element) {
      element.textContent = count;
    }
  });
}

function setStatus(message, progress = null) {
  const status = document.getElementById("pdf-status");
  const bar = document.getElementById("pdf-progress-bar");

  if (status) {
    status.textContent = message;
  }

  if (bar && progress !== null) {
    const percentage = Math.max(
      0,
      Math.min(100, progress)
    );

    bar.style.width = `${percentage}%`;
  }
}


/* =========================================================
   IMAGE PROCESSING
========================================================= */

function blobToCompressedDataUrl(
  blob,
  maximumWidth = 420,
  maximumHeight = 280,
  quality = 0.68
) {
  return new Promise((resolve, reject) => {
    const objectUrl = URL.createObjectURL(blob);
    const image = new Image();

    image.onload = () => {
      const scale = Math.min(
        maximumWidth / image.width,
        maximumHeight / image.height,
        1
      );

      const width = Math.max(
        1,
        Math.round(image.width * scale)
      );

      const height = Math.max(
        1,
        Math.round(image.height * scale)
      );

      const canvas = document.createElement("canvas");

      canvas.width = width;
      canvas.height = height;

      const context = canvas.getContext("2d");

      if (!context) {
        URL.revokeObjectURL(objectUrl);
        reject(new Error("Canvas could not be created."));
        return;
      }

      context.fillStyle = "#FFFFFF";
      context.fillRect(0, 0, width, height);

      context.drawImage(
        image,
        0,
        0,
        width,
        height
      );

      URL.revokeObjectURL(objectUrl);

      resolve(
        canvas.toDataURL(
          "image/jpeg",
          quality
        )
      );
    };

    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);

      reject(
        new Error("Image could not be decoded.")
      );
    };

    image.src = objectUrl;
  });
}


async function fetchImageFromSource(
  source,
  options = {}
) {
  const {
    maximumWidth = 420,
    maximumHeight = 280,
    quality = 0.68
  } = options;

  const isExternalEducoreImage =
    /^https:\/\/educorestationery-hygiene-ppe\.co\.za\//i.test(source);

  const requestSource = isExternalEducoreImage
    ? `/catalogue-image${new URL(source).pathname}`
    : source;

  const response = await fetch(requestSource);

  if (!response.ok) {
    throw new Error(
      `Image request failed with status ${response.status}`
    );
  }

  const blob = await response.blob();

  return blobToCompressedDataUrl(
    blob,
    maximumWidth,
    maximumHeight,
    quality
  );
}


async function fetchImageData(product) {
  const candidates = [
  ...new Set(
    [
      product.image,
      product.localImage,
      PLACEHOLDER
    ].filter(Boolean)
  )
];

  for (const source of candidates) {
    try {
      return await fetchImageFromSource(source);
    } catch (error) {
      console.warn(
        `Catalogue image failed: ${source}`,
        error
      );
    }
  }

  return null;
}


async function fetchCatalogueLogo() {
  if (preparedLogo) {
    return preparedLogo;
  }

  try {
    preparedLogo = await fetchImageFromSource(
      CATALOGUE_LOGO,
      {
        maximumWidth: 500,
        maximumHeight: 500,
        quality: 0.85
      }
    );

    return preparedLogo;
  } catch (error) {
    console.warn(
      "Catalogue logo could not be prepared.",
      error
    );

    return null;
  }
}


/* =========================================================
   PRODUCT PREPARATION
========================================================= */

async function prepareProducts() {
  if (preparedProducts) {
    return preparedProducts;
  }

  const prepared = new Array(products.length);

  let completed = 0;
  let nextIndex = 0;

  const concurrency = 5;

  async function worker() {
    while (nextIndex < products.length) {
      const index = nextIndex++;

      prepared[index] = {
        ...products[index],
        pdfImage: await fetchImageData(
          products[index]
        )
      };

      completed += 1;

      setStatus(
        `Preparing product images: ${completed} of ${products.length}`,
        (completed / products.length) * 100
      );
    }
  }

  const workerCount = Math.min(
    concurrency,
    products.length
  );

  await Promise.all(
    Array.from(
      { length: workerCount },
      () => worker()
    )
  );

  preparedProducts = prepared;

  return preparedProducts;
}


/* =========================================================
   PRODUCT PDF LAYOUT
========================================================= */

function productCell(product, includePricing = true) {
  const features = (
    product.features || []
  )
    .slice(0, 4)
    .join(" • ");

  const stack = [];

  if (product.pdfImage) {
    stack.push({
      image: product.pdfImage,
      fit: [225, 125],
      alignment: "center",
      margin: [0, 0, 0, 8]
    });
  }

  stack.push(
    {
      text:
        product.name ||
        "Unnamed Product",

      bold: true,
      fontSize: 12,
      color: "#1A2B4C",
      margin: [0, 0, 0, 4]
    },

    {
      columns: [
        {
          text: includePricing
            ? (product.price || "Request a Quote")
            : "Request a Quote",

          bold: true,
          color: "#F05A28",
          fontSize: 10
        },

        {
          text:
            `SKU: ${product.sku || "N/A"}`,

          alignment: "right",
          color: "#64748B",
          fontSize: 8
        }
      ]
    },

    {
      text:
        product.description ||
        "Contact EDUCORE for product specifications.",

      fontSize: 8.5,
      color: "#475569",
      margin: [0, 6, 0, 4]
    }
  );

  if (features) {
    stack.push({
      text: features,
      fontSize: 7.5,
      color: "#64748B",
      margin: [0, 2, 0, 0]
    });
  }

  stack.push({
    text:
      `Unit: ${product.unit || "Each"}`,

    fontSize: 8,
    bold: true,
    color: "#1A2B4C",
    margin: [0, 5, 0, 0]
  });

  return {
    stack,
    margin: [8, 8, 8, 8],
    fillColor: "#FFFFFF"
  };
}


function productRows(categoryProducts, includePricing = true) {
  const rows = [];

  for (
    let index = 0;
    index < categoryProducts.length;
    index += 2
  ) {
    const firstProduct =
      categoryProducts[index];

    const secondProduct =
      categoryProducts[index + 1];

    rows.push([
      productCell(firstProduct, includePricing),

      secondProduct
        ? productCell(secondProduct, includePricing)
        : {
            text: "",
            fillColor: "#FFFFFF"
          }
    ]);
  }

  return rows;
}


/* =========================================================
   CATALOGUE COVER
========================================================= */

function catalogueContactLine(
  icon,
  text,
  link = null,
  color = "#1A2B4C"
) {
  /*
   * A4 landscape is 841.89pt wide. After the document's 30pt left/right
   * margins and the cover's 30pt left/right margins, 721.89pt remains.
   * A 390pt contact block therefore needs about 166pt on either side.
   *
   * The empty 20pt cell on the right counterbalances the 20pt icon cell,
   * keeping the text's midpoint on the exact centre axis of the page.
   */
  const contactBlockWidth = 390;
  const contactSideMargin = 166;

  const contactText = {
    text,
    color,
    fontSize: 9.5,
    alignment: "center",
    margin: [0, 2, 0, 0]
  };

  if (link) {
    contactText.link = link;
    contactText.decoration = "underline";
  }

  return {
    width: contactBlockWidth,
    margin: [
      contactSideMargin,
      2,
      contactSideMargin,
      0
    ],

    table: {
      widths: [
        20,
        350,
        20
      ],

      body: [
        [
          {
            svg: icon,
            width: 13,
            height: 13,
            alignment: "center",
            margin: [3, 1, 0, 0]
          },

          contactText,

          {
            text: ""
          }
        ]
      ]
    },

    layout: {
      hLineWidth: () => 0,
      vLineWidth: () => 0,

      paddingLeft: () => 0,
      paddingRight: () => 0,
      paddingTop: () => 0,
      paddingBottom: () => 0
    }
  };
}

function catalogueCover(
  prepared,
  logoData,
  includePricing = true
) {
  const stack = [];

  if (logoData) {
    stack.push({
      image: "educoreLogo",
      fit: [135, 135],
      alignment: "center",
      margin: [0, 0, 0, 8]
    });
  }

  stack.push(
    {
      text: "EDUCORE",
      fontSize: 30,
      bold: true,
      color: "#1A2B4C"
    },

    {
      text: "PRODUCT CATALOGUE 2026",
      fontSize: 21,
      bold: true,
      color: "#F05A28",
      margin: [0, 5, 0, 10]
    },

    {
      text:
        "Stationery • Office Furniture • PPE • Cleaning & Hygiene • Hospital Equipment",
      fontSize: 11,
      color: "#475569"
    },

    {
      text:
        `${prepared.length} products • Bulk supply • Nationwide delivery • Tender ready`,
      fontSize: 10,
      color: "#64748B",
      margin: [0, 8, 0, 8]
    },

    includePricing
      ? {
          text: "COMPLETE IMAGE CATALOGUE • CURRENT PRODUCT PRICING",
          fontSize: 9,
          bold: true,
          color: "#1A2B4C",
          margin: [0, 0, 0, 15]
        }
      : {
          text: "CLIENT PRODUCT LIST • PRICING AVAILABLE ON REQUEST",
          fontSize: 9,
          bold: true,
          color: "#1A2B4C",
          margin: [0, 0, 0, 15]
        },

    catalogueContactLine(
      PDF_ICONS.address,
      BUSINESS_ADDRESS,
      MAP_LINK
    ),

    catalogueContactLine(
      PDF_ICONS.email,
      BUSINESS_EMAIL,
      EMAIL_LINK
    ),

    catalogueContactLine(
      PDF_ICONS.whatsapp,
      `WhatsApp: ${BUSINESS_PHONE}`,
      WHATSAPP_LINK,
      "#25A95B"
    ),

    catalogueContactLine(
      PDF_ICONS.website,
      "www.educorestationery-hygiene-ppe.co.za",
      WEBSITE_URL,
      "#F05A28"
    ),

    {
      qr: WEBSITE_URL,
      fit: 75,
      alignment: "center",
      foreground: "#1A2B4C",
      background: "#FFFFFF",
      margin: [0, 8, 0, 0]
    },

    {
      text: "Scan to visit our website",
      fontSize: 7.5,
      color: "#64748B",
      margin: [0, 4, 0, 0]
    }
  );

  return {
    stack,
    alignment: "center",
    margin: [30, 5, 30, 0]
  };
}

/* =========================================================
   PDF DOCUMENT
========================================================= */

function buildDocument(
  prepared,
  logoData,
  includePricing = true
) {
  const categories = [
    ...new Set(
      prepared.map(
        product => product.category
      )
    )
  ];

  const content = [
    catalogueCover(
      prepared,
      logoData,
      includePricing
    )
  ];

  categories.forEach(category => {
    const categoryProducts =
      prepared.filter(
        product =>
          product.category === category
      );

    content.push({
      text:
        categoryLabels[category] ||
        category,

      pageBreak: "before",
      fontSize: 22,
      bold: true,
      color: "#1A2B4C",
      margin: [0, 0, 0, 10]
    });

    content.push({
      table: {
        widths: ["*", "*"],

        body:
          productRows(
            categoryProducts,
            includePricing
          ),

        dontBreakRows: true
      },

      layout: {
        hLineColor: () =>
          "#E2E8F0",

        vLineColor: () =>
          "#E2E8F0",

        paddingLeft: () => 3,
        paddingRight: () => 3,
        paddingTop: () => 3,
        paddingBottom: () => 3
      }
    });
  });

  const documentDefinition = {
    pageSize: "A4",
    pageOrientation: "landscape",

    pageMargins: [
      30,
      52,
      30,
      40
    ],

    /* Catalogue page header */

    header: currentPage => {
      if (currentPage === 1) {
        return null;
      }

      const leftHeader = logoData
        ? {
            columns: [
              {
                image:
                  "educoreLogo",

                width: 25
              },

              {
                text:
                  includePricing
                    ? "EDUCORE PRODUCT CATALOGUE"
                    : "EDUCORE CLIENT PRODUCT LIST",

                bold: true,
                color: "#1A2B4C",
                margin: [7, 7, 0, 0]
              }
            ]
          }
        : {
            text:
              includePricing
                ? "EDUCORE PRODUCT CATALOGUE"
                : "EDUCORE CLIENT PRODUCT LIST",

            bold: true,
            color: "#1A2B4C"
          };

      return {
        columns: [
          leftHeader,

          {
            text: "2026",
            alignment: "right",
            color: "#F05A28",
            margin: [0, 7, 0, 0]
          }
        ],

        margin: [30, 12, 30, 0],
        fontSize: 9
      };
    },


    /* Catalogue page footer */

    footer: (
      currentPage,
      pageCount
    ) => ({
      columns: [
        {
          width: "*",

          stack: [
            {
              text:
                `${BUSINESS_EMAIL} | ${BUSINESS_PHONE}`,

              color: "#64748B",
              fontSize: 7.5
            },

            {
              text:
                "www.educorestationery-hygiene-ppe.co.za",

              link: WEBSITE_URL,
              color: "#1A2B4C",
              fontSize: 7
            }
          ]
        },

        {
          width: "auto",

          text:
            `Page ${currentPage} of ${pageCount}`,

          alignment: "right",
          color: "#64748B",
          fontSize: 8,
          margin: [0, 3, 0, 0]
        }
      ],

      margin: [30, 6, 30, 0]
    }),

    content,

    defaultStyle: {
      font: "Roboto"
    },

    info: {
      title:
        includePricing
          ? "EDUCORE Product Catalogue 2026"
          : "EDUCORE Client Product List 2026 - No Pricing",

      author:
        "EDUCORE",

      subject:
        includePricing
          ? "Image catalogue with pricing - Stationery, Office Furniture, PPE, Cleaning, Hygiene and Hospital Equipment"
          : "Client product list without pricing - Stationery, Office Furniture, PPE, Cleaning, Hygiene and Hospital Equipment",

      keywords:
        "EDUCORE, stationery, PPE, hygiene, hospital equipment, catalogue"
    }
  };


  /* Register the logo for PDFMake */

  if (logoData) {
    documentDefinition.images = {
      educoreLogo: logoData
    };
  }

  return documentDefinition;
}


/* =========================================================
   PDF GENERATION
========================================================= */

async function createPdf(action, button, includePricing = true) {
  if (!window.pdfMake) {
    alert("The PDF library could not be loaded.");
    return;
  }

  if (!products.length) {
    alert("Products are still loading. Please try again.");
    return;
  }

  /*
   * The print window must be opened immediately during the click.
   * Opening it after image preparation causes the browser to block it.
   */
  let previewWindow = null;

  if (action === "print") {
    previewWindow = window.open("", "_blank");

    if (!previewWindow) {
      alert(
        "The catalogue window was blocked. Please allow pop-ups for this website and try again."
      );

      return;
    }

    previewWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Preparing EDUCORE Catalogue</title>
          <style>
            body {
              margin: 0;
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
              background: #f8fafc;
              color: #1A2B4C;
              font-family: Arial, sans-serif;
              text-align: center;
            }

            .message {
              padding: 30px;
            }

            .message h1 {
              margin-bottom: 10px;
            }
          </style>
        </head>

        <body>
          <div class="message">
            <h1>EDUCORE</h1>
            <p>Preparing your printable catalogue…</p>
          </div>
        </body>
      </html>
    `);

    previewWindow.document.close();
  }

  const originalButtonContent = button.innerHTML;

  button.disabled = true;

  document
    .querySelectorAll("#generatePdfBtn, #printPdfBtn, #generateProductListBtn")
    .forEach(item => {
      item.disabled = true;
    });

  try {
    const [prepared, logoData] = await Promise.all([
      prepareProducts(),
      fetchCatalogueLogo()
    ]);

    setStatus(
      "Building catalogue with logo, website and QR code…",
      100
    );

    const documentDefinition = buildDocument(
      prepared,
      logoData,
      includePricing
    );

    const pdf = window.pdfMake.createPdf(
      documentDefinition
    );

    if (action === "download") {
      pdf.download(
        includePricing
          ? "educore-enhanced-product-catalogue-2026.pdf"
          : "educore-client-product-list-2026-no-pricing.pdf"
      );
    } else {
      const pdfBlob = await new Promise(
        (resolve, reject) => {
          try {
            pdf.getBlob(resolve);
          } catch (error) {
            reject(error);
          }
        }
      );

      const pdfUrl = URL.createObjectURL(pdfBlob);

      previewWindow.location.replace(pdfUrl);

      setTimeout(() => {
        URL.revokeObjectURL(pdfUrl);
      }, 60000);
    }

    setStatus(
      "Catalogue ready. Logo, website, QR code and available product images were included.",
      100
    );
  } catch (error) {
    console.error(
      "Catalogue PDF failed:",
      error
    );

    if (
      previewWindow &&
      !previewWindow.closed
    ) {
      previewWindow.close();
    }

    setStatus(
      "Catalogue generation failed. Please refresh and try again.",
      0
    );

    alert(
      `Catalogue generation failed: ${error.message}`
    );
  } finally {
    button.innerHTML = originalButtonContent;

    document
      .querySelectorAll("#generatePdfBtn, #printPdfBtn, #generateProductListBtn")
      .forEach(item => {
        item.disabled = false;
      });
  }
}


/* =========================================================
   INITIALISATION
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  async () => {
    try {
      setStatus(
        "Loading live product catalogue…",
        5
      );

      products =
        await getProductsFromGoogleSheets();

      setCounts(
        products.length
      );

      setStatus(
        `${products.length} products loaded. Images will be prepared when you download or print.`,
        0
      );
    } catch (error) {
      console.error(
        "Products could not be loaded:",
        error
      );

      setStatus(
        "Products could not be loaded. Please refresh the page.",
        0
      );
    }

    document
      .getElementById(
        "generatePdfBtn"
      )
      ?.addEventListener(
        "click",
        event => {
          createPdf(
            "download",
            event.currentTarget,
            true
          );
        }
      );

    document
      .getElementById(
        "printPdfBtn"
      )
      ?.addEventListener(
        "click",
        event => {
          createPdf(
            "print",
            event.currentTarget,
            true
          );
        }
      );

    document
      .getElementById(
        "generateProductListBtn"
      )
      ?.addEventListener(
        "click",
        event => {
          createPdf(
            "download",
            event.currentTarget,
            false
          );
        }
      );
  }
);
