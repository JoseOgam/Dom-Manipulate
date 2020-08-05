var headerTag = document.createElement("h1");
headerTag.textContent = "DOM Manipulation";
headerTag.style.color = "blue";

document.querySelector(".container").appendChild(headerTag);

var header3 = document.createElement("h3");
header3.textContent = "Todo list";
header3.style.cssText = "color: brown";
document.querySelector(".container").appendChild(header3);
