const modal = document.querySelector(".project-modal");
const title = document.querySelector(".modal-title");
const type = document.querySelector(".modal-type");

document.querySelectorAll(".project").forEach(project => {
  project.addEventListener("click", () => {
    title.textContent = project.dataset.title;
    type.textContent = "PROJECT / " + project.dataset.type;
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  });
});

document.querySelector(".modal-close").addEventListener("click", () => {
  modal.classList.remove("open");
  document.body.style.overflow = "";
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", event => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
