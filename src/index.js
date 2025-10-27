import "./style.css";
import hompageLoader from "./homepage.js";
import menuLoader from "./menupage.js";
import contactpageLoader from "./contactpage.js";
import footerLoader from "./footer.js";

// elements
const content = document.querySelector("#content");
const footerEl = document.querySelector("#footer");
const homeBtn = document.querySelector(".homeBtn");
const menuBtn = document.querySelector(".menuBtn");
const contactBtn = document.querySelector(".contactBtn");

const homepage = hompageLoader();
const menupage = menuLoader();
const contactpage = contactpageLoader();
const footer = footerLoader();

content.appendChild(homepage);
footerEl.appendChild(footer);

homeBtn.addEventListener("click", () => {
  content.innerHTML = "";
  content.appendChild(homepage);
});

menuBtn.addEventListener("click", () => {
  content.innerHTML = "";
  content.appendChild(menupage);
});

contactBtn.addEventListener("click", () => {
  content.innerHTML = "";
  content.appendChild(contactpage);
});
