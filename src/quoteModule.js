const quoteModule = (() => {
  let quoteData = {
    _id: "HmFAPaZJYAn",
    content: "I believe that every person is born with talent.",
    author: "Maya Angelou",
    tags: ["Famous Quotes"],
    authorSlug: "maya-angelou",
    length: 48,
    dateAdded: "2019-11-16",
    dateModified: "2023-04-14",
  };

  async function getQuote() {
    const myQuery = `https://api.quotable.io/random`;
    const response = await fetch(myQuery);
    const quoteData = await response.json();
    return quoteData;
  }

  function displayQuote(quoteData) {
    const quote = document.body.querySelector(".quote");
    quote.innerHTML = `
    <span class="content">${quoteData.content}</span>
    <span class="author">${quoteData.author}</span>
    `;
  }

  async function main() {
    quoteData = await getQuote().catch();
    displayQuote(quoteData);
  }

  main();
})();

export default quoteModule;
