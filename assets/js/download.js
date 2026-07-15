// ============================
// DOWNLOAD PAGE HELPERS
// ============================

export function updateProductCounts(products) {
  const countEl =
    document.getElementById("pdfProductCount");

  const countEl2 =
    document.getElementById("pdfProductCount2");

  const featureCount =
    document.getElementById("featureProductCount");

  const count = Array.isArray(products)
    ? products.length
    : 0;

  if (countEl) {
    countEl.textContent = count;
  }

  if (countEl2) {
    countEl2.textContent = count;
  }

  if (featureCount) {
    featureCount.textContent = count;
  }
}