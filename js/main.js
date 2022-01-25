const searchEl = document.querySelector(".search");
const seearchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  seearchInputEl.focus();
});

seearchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  seearchInputEl.setAttribute("placeholer", "통합검색");
});

seearchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  seearchInputEl.setAttribute("placeholer", "");
});

const badgeEl = document.querySelector("header .badges");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (window.scrollY > 500) {
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
    } else {
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
    }
  }, 300)
);
