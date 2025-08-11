// Task 1
const body = document.body;

// 1
console.log("Last element child tag:", body.lastElementChild.tagName);

// 2
console.log("Number of element children:", body.children.length);

// 3
const diff = body.childNodes.length - body.children.length;
console.log("Difference:", diff);
console.log("childNodes length:", body.childNodes.length);
console.log("children length:", body.children.length);

// 4
console.log("First child nodeType:", body.childNodes[0].nodeType);
console.log("First child nodeName:", body.childNodes[0].nodeName);

// 5
const section = body.children[1].children[0];
const firstParagraph = section.children[0];
const secondParagraph = section.children[1];

console.log(
  "First <p> and second <p> are siblings:",
  firstParagraph.nextElementSibling === secondParagraph
);

// 6
console.log("Unexpected text nodes:");
body.childNodes.forEach((node, index) => {
  if (node.nodeType === 3 && node.textContent.trim() !== "") {
    console.log(`Text node at index ${index}: "${node.textContent}"`);
  }
});

// --------------------------------------------
// Task 2
// 1
const div = document.createElement("div");
div.className = "card";
div.dataset.role = "admin";

// 2
const h2 = document.createElement("h2");
h2.textContent = "Access Panel";

// 3
const p = document.createElement("p");
p.textContent = "Authenticated";

// 4
div.appendChild(h2);
div.appendChild(p);

// 5
document.body.appendChild(div);

// 6
console.log("data-role property:", div.dataset.role);

// 7
p.textContent = "Welcome back, Admin";

// 8
div.classList.add("authenticated", "highlight");

if (div.classList.contains("card")) {
  div.classList.remove("card");
}

console.log("Final class list:", div.className);
