console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  alert("Submitted Successfully!");
}

let form = document.querySelector("#contact");

const mousePic = () => {
  alert("You are amazing!");
};
const submitButton = (event) => {
  event.preventDefault();
};
function clearCharacters() {
  charContainer.innerHTML = ``;
}
form.addEventListener("submit", handleSubmit, () => {
  clearCharacters();
});
document.getElementById("img").addEventListener("mouseover", mousePic);
document.getElementById("submit").addEventListener("click", submitButton);
