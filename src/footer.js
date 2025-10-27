export default () => {
  const link = document.createElement("a");
  const footerPara = document.createElement("p");

  link.href = "https://github.com/huseyinbenli";
  link.textContent = "Huseyin Benli";
  footerPara.textContent = "The Odin Project | ";

  footerPara.appendChild(link);

  return footerPara;
};
