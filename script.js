const skillIcons = document.querySelectorAll(".skill-icon");

//! MENU CONSTS
const toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");

//! EVENT LISTENERS
//* SKILLS HOVER EVENT
skillIcons.forEach(icon => {
	icon.addEventListener("mouseenter", e => {
		e.target.classList.add("colored")
	})
	icon.addEventListener("mouseleave", e => {
		e.target.classList.remove("colored")
	})
});


//! toggle nav

toggle.addEventListener("click", () => {
	document.body.classList.toggle("show-nav");
});

//! show modal
open.addEventListener("click", () => {
	modal.classList.add("show-modal");
});

//! add modal
close.addEventListener("click", () => {
	modal.classList.remove("show-modal");
});

//! hide modal on outside click
window.addEventListener("click", (e) => {
	e.target == modal ? modal.classList.remove("show-modal") : false;
});