const favoriteColor = () => {
  alert("Red!");
};
const favoritePlace = () => {
  alert("Your moms");
};
const favoriteRitual = () => {
  alert("Showering at night is better then showering in the morning");
};

let changeClassColor = document.querySelector("#color");
changeClassColor.addEventListener("mouseover", () => {
  changeClassColor.style.backgroundColor = "white";
});
changeClassColor.addEventListener("mouseout", () => {
  changeClassColor.style.backgroundColor = "yellow";
});
let newColor = document.querySelector("#place");
newColor.addEventListener("mouseover", () => {
  newColor.style.backgroundColor = "white";
});
newColor.addEventListener("mouseout", () => {
  newColor.style.backgroundColor = "yellow";
});
let newRitual = document.querySelector("#ritual");
newRitual.addEventListener("mouseover", () => {
  newRitual.style.backgroundColor = "white";
});
newRitual.addEventListener("mouseout", () => {
  newRitual.style.backgroundColor = "yellow";
});

document.getElementById("color").addEventListener("click", favoriteColor);
document.getElementById("place").addEventListener("click", favoritePlace);
document.getElementById("ritual").addEventListener("click", favoriteRitual);
