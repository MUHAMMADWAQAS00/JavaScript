//creating new claass in CSS trying to append in para(p)
//whenever we want to add class with previous one we use classList
let myclass = document.querySelector("p")
myclass.classList.add("newClass")
myclass.classList.toggle("dark-mode");
let btn = document.querySelector("button")
btn.addEventListener("click", function() {
  alert("Your are on a right way keep it up wiki!");

});