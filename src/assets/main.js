"use strict";

const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("menuCloseBtn");
const navItems = document.getElementById("navItems");

const toggleMenu = addEventListener("click", () => {
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.add("hidden");
    closeBtn.classList.remove("hidden");
    navItems.classList.remove("translate-x-[100%]");
  });

  closeBtn.addEventListener("click", () => {
    menuBtn.classList.remove("hidden");
    closeBtn.classList.add("hidden");
    navItems.classList.add("translate-x-[100%]");
  });
});

document.querySelectorAll(".FAQ-Card").forEach((card) => {
  const plusBtn = card.querySelector(".plusBtn");
  const minusBtn = card.querySelector(".minusBtn");
  const faqBody = card.querySelector(".faqBody");

  plusBtn.addEventListener("click", () => {
    faqBody.classList.remove("hidden");
    plusBtn.classList.add("hidden");
    minusBtn.classList.remove("hidden");
  });

  minusBtn.addEventListener("click", () => {
    faqBody.classList.add("hidden");
    plusBtn.classList.remove("hidden");
    minusBtn.classList.add("hidden");
  });
});

toggleMenu();
