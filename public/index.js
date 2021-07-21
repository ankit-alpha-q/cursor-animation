import gsap from "../node_modules/gsap/index.js";

const cursor = document.querySelector(".cursor");
const cursorDot = document.querySelector(".cursorDot");

const updateCursor = (e) => {
  gsap.to(".cursor", {
    duration: 1,
    x: e.pageX * 2 - 50 + "%",
    y: e.pageY * 2 - 50 + "%",
    ease: "power3.out",
  });
  cursorDot.style.top = e.pageY + "px";
  cursorDot.style.left = e.pageX + "px";
};

document.addEventListener("mouseleave", () => {
  cursor.classList.remove("cursorBlock");
  cursor.classList.add("cursorNone");
  cursorDot.classList.remove("cursorBlock");
  cursorDot.classList.add("cursorNone");
});

document.addEventListener("mouseover", () => {
  cursor.classList.remove("cursorNone");
  cursor.classList.add("cursorBlock");
  cursorDot.classList.remove("cursorNone");
  cursorDot.classList.add("cursorBlock");
});

window.addEventListener("mousemove", updateCursor);
