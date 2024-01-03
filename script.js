const myText = new SplitType(".name");

gsap.to(".char", {
  y: 0,
  stagger: 0.05,
  delay: 0.8,
  duration: 0.1,
});

gsap.to(".hi", {
  x: 0,
  duration: 1,
  ease: "power2.inOut",
});

gsap.to(".horizontalLine", {
  opacity: 1,
  delay: 1.6,
});

gsap.to(".jobTitle", {
  x: 0,
  duration: 1,
  delay: 1.65,
  ease: "power2.inOut",
});
gsap.to(".location", {
  x: 0,
  duration: 1,
  delay: 1.65,
  ease: "power2.inOut",
});

gsap.to(".navbar__container", {
  opacity: 1,
  delay: 2.6,
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
