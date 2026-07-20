console.log("googleSheets.js loaded");

import Papa from "papaparse";

const CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-O3cDp2G6s-AIcSBO-rLdjscotzHFDwBXI0vAsrJbv8sL67TXFg4czvyavjgoaLUkd8dmA0SYalHm/pub?gid=0&single=true&output=csv";

function normalizeCategory(value) {
  const category = String(value || "")
    .trim()
    .toLowerCase();

  const categoryMap = {
    stationery: "stationery",
    "office stationery": "stationery",

    furniture: "furniture",
    "office furniture": "furniture",

    ppe: "ppe",
    "ppe & safety": "ppe",
    "ppe and safety": "ppe",

    cleaning: "cleaning",
    hygiene: "cleaning",
    "cleaning & hygiene": "cleaning",
    "cleaning and hygiene": "cleaning",
    "cleaning chemicals": "cleaning",

    hospital: "hospital",
    "hospital equipment": "hospital",
    "medical equipment": "hospital",
    healthcare: "hospital",
    "healthcare equipment": "hospital"
  };

  return categoryMap[category] || category;
}

export async function getProductsFromGoogleSheets() {
  const response = await fetch(CSV_URL);

  if (!response.ok) {
    throw new Error(
      `Google Sheets request failed: ${response.status} ${response.statusText}`
    );
  }

  const csv = await response.text();

  console.log("CSV LENGTH:", csv.length);
  console.log("CSV PREVIEW:", csv.substring(0, 500));

  const result = Papa.parse(csv, {
    header: true,
    skipEmptyLines: true
  });

  if (result.errors?.length) {
    console.warn("CSV parse warnings:", result.errors);
  }

  return result.data
    .map((row, index) => {
      const imageFilename = String(
        row["Image Filename"] || ""
      ).trim();

      const cloudUrl = String(
        row["Cloud URL"] || ""
      ).trim();

      return {
        id: Number(row.ID) || index + 1,

        name: String(
          row["Product Name"] || ""
        ).trim(),

        category: normalizeCategory(row.Category),

        brand: String(row.Brand || "").trim(),

        sku: String(row.SKU || "").trim(),

        slug: String(row.Slug || "").trim(),

        unit: String(row.Unit || "").trim(),

        price: String(row.Price || "").trim(),

        featured: ["yes", "true", "1"].includes(
          String(row.Featured || "")
            .trim()
            .toLowerCase()
        ),

        description: String(
          row.Description || ""
        ).trim(),

        image:
          cloudUrl ||
          (
            imageFilename
              ? `/images/products/${imageFilename}`
              : ""
          ),

        features: [
          row["Feature 1"],
          row["Feature 2"],
          row["Feature 3"],
          row["Feature 4"]
        ]
          .map((value) =>
            String(value || "").trim()
          )
          .filter(Boolean)
      };
    })
    .filter((product) => product.name);
}
