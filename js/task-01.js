const itemElem = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemElem.length}`);
itemElem.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
