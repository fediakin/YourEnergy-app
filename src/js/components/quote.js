function renderQuote({ quote, author }) {
  const quouteBlock = document.querySelector('.js-quote');

  if (quouteBlock) {
    quouteBlock.innerHTML = `
    <p class="quote-text">"${quote}"</p>
    <p class="quote-signature">- ${author}</p>
    `;
  }
}

export { renderQuote };
