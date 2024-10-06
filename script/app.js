const wrappers = document.querySelectorAll("#wrapper");
wrappers.forEach((wrapper) => {
  for (let i = 2190; i >= 0; i--) {
    const row = document.createElement("div");
    row.classList.add("row");
    wrapper.appendChild(row);
  }
});

const accordions = document.querySelectorAll(".accordion");
const panel = document.querySelectorAll(".panel");
accordions.forEach((accordion, index) => {
  accordion.addEventListener("click", () => {
    accordion.classList.toggle("active");
    panel[index].classList.toggle("active");
  });
});

//creating scorll animation effect

const hidden = document.querySelectorAll(".hidden");
const scale_up = document.querySelectorAll(".scale-up");
const observer = new IntersectionObserver(
  (entrys) => {
    entrys.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.6,
  }
);
scale_up.forEach((card) => {
  observer.observe(card);
});
hidden.forEach((card) => {
  observer.observe(card);
});

// mobile navgation
const navButton = document.getElementById("side-nav-button");
const container = document.getElementById("container");
const close = document.getElementById("close");

navButton.addEventListener("click", () => {
  container.classList.add("active");
});
close.addEventListener("click", () => {
  container.classList.remove("active");
});

