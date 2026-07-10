import Papa from "papaparse";

const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-O3cDp2G6s-AIcSBO-rLdjscotzHFDwBXI0vAsrJbv8sL67TXFg4czvyavjgoaLUkd8dmA0SYalHm/pub?gid=0&single=true&output=csv";

export async function fetchProducts() {
  const response = await fetch(SHEET_CSV_URL);
  const csvText = await response.text();

  const parsed = Papa.parse(csvText, {
    header: true,
    skipEmptyLines: true,
  });

  return parsed.data;
}