export default () => {
  // elements
  const container = document.createElement("div");
  const wrapperDiv = document.createElement("div");
  const heroHeader = document.createElement("h1");
  const footerPara = document.createElement("p");
  const footer = document.querySelector("#footer");
  const link = document.createElement("a");

  // classes
  container.classList.add("container");
  wrapperDiv.classList.add("wrapper-div");
  heroHeader.classList.add("header");

  //  text
  heroHeader.textContent = "a unique experience awaits you here!";
  link.href = "https://github.com/huseyinbenli";
  link.textContent = "Huseyin Benli";
  footerPara.textContent = "The Odin Project | ";

  // ...
  wrapperDiv.appendChild(heroHeader);
  container.appendChild(wrapperDiv);
  footerPara.appendChild(link);
  footer.appendChild(footerPara);

  return container;
};
