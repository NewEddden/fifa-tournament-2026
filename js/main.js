const hamburger = document.getElementById("hamburger");
const navDrawer = document.getElementById("navDrawer");

hamburger.addEventListener("click", () => {
  const isOpen = navDrawer.classList.toggle("is-open");
  hamburger.classList.toggle("is-open", isOpen);
  hamburger.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

function closeDrawer() {
  navDrawer.classList.remove("is-open");
  hamburger.classList.remove("is-open");
}

const imageUrl = [
  "./assets/images/Mbappe-PNG-Clipart.png",
  "./assets/images/Jude_Bellingham-removebg-preview.png",
  "./assets/images/Jamal_Musiala-removebg-preview.png",
];
