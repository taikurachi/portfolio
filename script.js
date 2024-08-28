gsap.registerPlugin(ScrollTrigger);

function isDesktop() {
  return window.innerWidth > 1000;
}

function desktopAnimations() {
  const myText = new SplitType(".name");

  gsap.to(".name", {
    opacity: 1,
  });
  gsap.to(".char", {
    y: 0,
    stagger: 0.05,
    delay: 0.8,
    opacity: 1,
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

  gsap.to(".project__intro", {
    x: 0,
    duration: 0.5,
    opacity: 1,
    scrollTrigger: {
      trigger: ".project__intro",
      start: "top 95%",
    },
  });

  gsap.to(".project__links-left-1", {
    x: 0,
    scrollTrigger: {
      trigger: ".project__links-left-1",
      start: "top bottom",
      end: "50% 50%",
      scrub: 0.1,
    },
  });

  gsap.to(".project__links-right-1", {
    x: "50%",
    scrollTrigger: {
      trigger: ".project__links-right-1",
      start: "top bottom",
      end: "50% 50%",
      scrub: 0.1,
    },
  });

  gsap.to(".project__links-left-2", {
    x: 0,
    scrollTrigger: {
      trigger: ".project__links-left-2",
      start: "top bottom",
      end: "50% 50%",
      scrub: 0.1,
      ease: "anticipate",
    },
  });

  gsap.to(".project__links-right-2", {
    x: "50%",
    scrollTrigger: {
      trigger: ".project__links-right-2",
      start: "top bottom",
      end: "50% 50%",
      scrub: 0.1,
    },
  });

  gsap.to(".graphicsChild", {
    y: "0%",
    opacity: 1,
    scale: 1,
    scrollTrigger: {
      trigger: ".graphicsChild",
      start: "top bottom",
      end: "50% 90%",
      scrub: 0.1,
    },
  });
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("is desktop");
  if (isDesktop()) {
    desktopAnimations();
  }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
