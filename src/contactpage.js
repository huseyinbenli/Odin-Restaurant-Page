export default () => {
  // elements
  const wrapperDiv = document.createElement("div");
  const formEl = document.createElement("form");
  const formTitle = document.createElement("h2");
  const nameInput = document.createElement("input");
  const surnameInput = document.createElement("input");
  const textArea = document.createElement("textarea");
  const submitBtn = document.createElement("button");

  // classes
  wrapperDiv.classList.add("wrapper-div-form");
  formEl.classList.add("form");
  nameInput.classList.add("input-name");
  surnameInput.classList.add("input-surname");
  formTitle.classList.add("title");
  submitBtn.classList.add("form-btn");

  // form elements
  nameInput.id = "name";
  surnameInput.id = "surname";
  textArea.id = "textarea";
  textArea.rows = 8;

  // text
  formTitle.innerText = "Send a message";
  nameInput.placeholder = "First name";
  surnameInput.placeholder = "Last name";
  textArea.placeholder = "Your message";
  submitBtn.innerText = "Send";

  //append
  wrapperDiv.appendChild(formTitle);
  formEl.appendChild(nameInput);
  formEl.appendChild(surnameInput);
  formEl.appendChild(textArea);
  formEl.appendChild(submitBtn);
  wrapperDiv.appendChild(formEl);

  return wrapperDiv;
};
