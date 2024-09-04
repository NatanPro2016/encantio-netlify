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
