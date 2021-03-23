const target = document.getElementById("target");
const DropDown = document.querySelector(".outer_dropdown");

target.addEventListener("click", () => {
  DropDown.style.display = "block";
  console.log("clicked");
});
