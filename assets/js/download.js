// ============================
// DOWNLOAD PAGE – PDF buttons
// ============================

document.addEventListener('DOMContentLoaded', function() {
  // Update product counts
  const countEl = document.getElementById('pdfProductCount');
  if (countEl) countEl.textContent = products.length;
  const countEl2 = document.getElementById('pdfProductCount2');
  if (countEl2) countEl2.textContent = products.length;
  const featureCount = document.getElementById('featureProductCount');
  if (featureCount) featureCount.textContent = products.length;

  // Download button
  document.getElementById('generatePdfBtn')?.addEventListener('click', generateCataloguePDF);
  // Print button
  document.getElementById('printPdfBtn')?.addEventListener('click', openCataloguePDFForPrint);
});