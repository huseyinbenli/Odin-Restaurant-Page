// images
import buffaloImg from "./assets/buffalo.webp";
import burgerImg from "./assets/burger.webp";
import chickenImg from "./assets/chicken.webp";
import jalapenoImg from "./assets/jalapeno.webp";
import soupImg from "./assets/soup.webp";
import lasagnaImg from "./assets/lasagna.webp";

export default () => {
  const menuList = [
    {
      title: "Buffalo Chicken Baked Ziti",
      desc: "Creamy and cheesy Buffalo-flavored chicken baked ziti!",
      img: buffaloImg,
    },
    {
      title: "Cream Cheese-Jalapeño Hamburgers",
      desc: "Burgers, made with cream cheese and jalapeno between two patties ",
      img: burgerImg,
    },
    {
      title: "Million Dollar Chicken Breasts",
      desc: "Chicken breasts are topped with cream cheese, sour cream, cheddar, and bacon",
      img: chickenImg,
    },
    {
      title: "Jalapeño Cream Cheese Chicken Enchiladas",
      desc: "A heavenly dish with jalapeño cream cheese and shredded chicken",
      img: jalapenoImg,
    },
    {
      title: "Potato Soup with Cream Cheese",
      desc: " This a well balanced, full-flavored soup, with a hint of trailing heat compliments of cayenne.",
      img: soupImg,
    },
    {
      title: "Creamy Chicken Lasagna",
      desc: "This chicken lasagna is made with tender chicken breasts, red sauce, and lots of mozzarella cheese for a fantastic flavor combination",
      img: lasagnaImg,
    },
  ];
  // elements
  const gridContainer = document.createElement("div");
  const menuHeader = document.createElement("h2");
  menuHeader.innerText = "Choose your experience";
  const wrapperDivGrid = document.createElement("div");
  menuList.forEach((item) => {
    // creating elements for each item in the array
    const card = document.createElement("div");
    const imgWrapper = document.createElement("div");
    const cardImg = document.createElement("img");
    const cardTitle = document.createElement("h2");
    const cardDesc = document.createElement("p");

    // classes
    gridContainer.classList.add("grid-container");
    menuHeader.classList.add("menu-header");
    wrapperDivGrid.classList.add("wrapper-grid-div");
    card.classList.add("card");
    imgWrapper.classList.add("img-wrapper");
    cardTitle.classList.add("card-title");
    cardDesc.classList.add("card-p");

    // content
    cardImg.src = item.img;
    cardTitle.innerText = item.title;
    cardDesc.innerText = item.desc;

    //append
    imgWrapper.appendChild(cardImg);
    card.appendChild(imgWrapper);
    card.appendChild(cardTitle);
    card.appendChild(cardDesc);
    wrapperDivGrid.appendChild(card);
    gridContainer.appendChild(menuHeader);
    gridContainer.appendChild(wrapperDivGrid);
  });

  return gridContainer;
};
