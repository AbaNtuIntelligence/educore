// ============================
// QUOTE PAGE
// ============================

document.addEventListener('DOMContentLoaded', function() {
  renderQuoteBasket();

  // Clear quote
  document.getElementById('clear-quote-btn')?.addEventListener('click', function() {
    if (!basket.length) return;
    if (confirm('Clear your quote basket?')) {
      basket = [];
      localStorage.setItem('educore_basket', JSON.stringify(basket));
      renderQuoteBasket();
      renderBasket();
    }
  });

  // Quote form submission
  document.getElementById('quote-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = document.getElementById('submit-quote-btn');
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    setTimeout(() => {
      alert('Quote request sent! We\'ll get back to you shortly.');
      basket = [];
      localStorage.setItem('educore_basket', JSON.stringify(basket));
      renderQuoteBasket();
      renderBasket();
      this.reset();
      btn.disabled = false;
      btn.innerHTML = '<i class="fas fa-paper-plane"></i> Submit Quote Request';
    }, 1500);
  });
});