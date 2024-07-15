const addButton = document.querySelector(".add-button");
const removeButton = document.querySelector(".remove-button");
const wrapperContainer = document.querySelector(".wrapper");
const mainContainer = document.querySelector(".container");

function addFormFields() {
  const inputElement = document.createElement("input");
  inputElement.classList.add("input-element");
  inputElement.placeholder = "Enter Form Field";
  // mainContainer.style.height = "800px";
  wrapperContainer.appendChild(inputElement);
}

function removeFormFields() {
  const removeElement = document.querySelector(".input-element");
  // mainContainer.style.height = "300px";
  wrapperContainer.removeChild(removeElement);
}

addButton.addEventListener("click", addFormFields);
removeButton.addEventListener("click", removeFormFields);
