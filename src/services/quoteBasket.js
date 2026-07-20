const STORAGE_KEY = "educore_quote_basket_v2";

function normaliseItem(item) {
  return {
    id: String(item.id),
    name: String(item.name || "Product"),
    sku: String(item.sku || ""),
    unit: String(item.unit || ""),
    image: String(item.image || ""),
    quantity: Math.max(1, Number(item.quantity) || 1)
  };
}

export function getQuoteBasket() {
  try {
    const current = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (Array.isArray(current)) return current.map(normaliseItem);

    // Preserve baskets created by the original catalogue.
    const legacy = JSON.parse(localStorage.getItem("educore_basket"));
    if (Array.isArray(legacy)) {
      const migrated = legacy.map(normaliseItem);
      saveQuoteBasket(migrated);
      return migrated;
    }
  } catch (error) {
    console.warn("The saved quote basket could not be read.", error);
  }
  return [];
}

export function saveQuoteBasket(items) {
  const cleanItems = items.map(normaliseItem);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cleanItems));
  localStorage.setItem("educore_basket", JSON.stringify(cleanItems));
  window.dispatchEvent(new CustomEvent("educore:basket-change", { detail: cleanItems }));
  return cleanItems;
}

export function addQuoteItem(product, quantity = 1) {
  const items = getQuoteBasket();
  const id = String(product.id);
  const existing = items.find(item => item.id === id);
  const amount = Math.max(1, Number(quantity) || 1);

  if (existing) existing.quantity += amount;
  else items.push(normaliseItem({ ...product, quantity: amount }));
  return saveQuoteBasket(items);
}

export function setQuoteItemQuantity(id, quantity) {
  const amount = Number(quantity);
  const items = getQuoteBasket();
  const next = amount < 1
    ? items.filter(item => item.id !== String(id))
    : items.map(item => item.id === String(id) ? { ...item, quantity: amount } : item);
  return saveQuoteBasket(next);
}

export function removeQuoteItem(id) {
  return saveQuoteBasket(getQuoteBasket().filter(item => item.id !== String(id)));
}

export function clearQuoteBasket() {
  return saveQuoteBasket([]);
}

export function quoteItemCount(items = getQuoteBasket()) {
  return items.reduce((total, item) => total + item.quantity, 0);
}
