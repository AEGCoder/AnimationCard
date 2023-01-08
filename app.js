const panels = document.querySelectorAll(".panel");

panels.forEach((e) => {
  e.addEventListener("click", function () {
    removeActive();
    e.classList.add("active");
  });
});

function removeActive() {
  panels.forEach((r) => {
    r.classList.remove("active");
  });
}
