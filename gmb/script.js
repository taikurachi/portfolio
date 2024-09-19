const viewDesignBtn = document.querySelectorAll(".design-btn");
let active = false;
viewDesignBtn.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    active = !active;
    const closestProject = e.target.closest(".project");
    closestProject
      .querySelector(".design-process-content")
      .classList.toggle("active");
    btn.textContent = active ? "Hide design process" : "Show design process";
  })
);
