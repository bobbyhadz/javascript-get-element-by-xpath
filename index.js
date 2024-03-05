console.log('bobbyhadz.com');

// ✅ Get a specific `p` element
const firstP = document.evaluate(
  '/html/body/div[2]/p',
  document,
  null,
  XPathResult.FIRST_ORDERED_NODE_TYPE,
  null,
).singleNodeValue;

console.log(firstP); // 👉️ p
console.log(firstP.textContent); // 👉️ "Apple, Banana, Kiwi"

// -----------------------
// ✅ Get all P elements
const allParagraphs = document.evaluate(
  '/html/body//p',
  document,
  null,
  XPathResult.ANY_TYPE,
  null,
);

console.log(allParagraphs);

let currentParagraph = allParagraphs.iterateNext();

while (currentParagraph) {
  console.log(currentParagraph.textContent);
  currentParagraph = allParagraphs.iterateNext();
}
