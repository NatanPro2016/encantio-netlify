const wrappers = document.querySelectorAll("#wrapper");
wrappers.forEach((wrapper) => {
  for (let i = 2190; i >= 0; i--) {
    const row = document.createElement("div");
    row.classList.add("row");
    wrapper.appendChild(row);
  }
});
