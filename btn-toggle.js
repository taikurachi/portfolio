const viewDesignBtn = document.querySelectorAll(".design-btn");
``;
viewDesignBtn.forEach((btn) => {
  let active = false;
  btn.addEventListener("click", function (e) {
    const btnElement = e.target;
    active = !active;
    const closestProject = btnElement.closest(".project");
    const designProcessContent = closestProject.querySelector(
      ".design-process-content"
    );

    designProcessContent.classList.toggle("active");
    btnElement.textContent = active
      ? "Hide design process"
      : "Show design process";
  });
});
