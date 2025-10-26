import "./style.css";
import hompageLoader from "./homepage.js";

const content = document.querySelector("#content");

const homepage = hompageLoader();

content.appendChild(homepage);
