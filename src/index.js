import "./style.css";
import hompageLoader from "./homepage.js";
import menuLoader from "./menupage.js";

// elements
const content = document.querySelector("#content");
const homeBtn = document.querySelector(".homeBtn");
const menuBtn = document.querySelector(".menuBtn");
const aboutBtn = document.querySelector(".aboutBtn");

const homepage = hompageLoader();
const menupage = menuLoader();

content.appendChild(homepage);

homeBtn.addEventListener("click", () => {
  content.innerHTML = "";
  content.appendChild(homepage);
});

menuBtn.addEventListener("click", () => {
  content.innerHTML = "";
  content.appendChild(menupage);
});
