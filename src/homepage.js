export default () => {
  // elements
  const container = document.createElement("div");
  const wrapperDiv = document.createElement("div");
  const heroHeader = document.createElement("h1");

  // classes
  container.classList.add("container");
  wrapperDiv.classList.add("wrapper-div-home");
  heroHeader.classList.add("header");

  //  text
  heroHeader.textContent = "a unique experience awaits you here!";

  // append
  wrapperDiv.appendChild(heroHeader);
  container.appendChild(wrapperDiv);

  return container;
};
