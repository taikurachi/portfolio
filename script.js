function isDesktop() {
  return window.innerWidth > 1000;
}

function desktopAnimations() {
  const myText = new SplitType(".name");

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

const form = document.querySelector(".contact__content");
const fullName = document.querySelector("#name");
const email = document.querySelector("#email");
const mess = document.querySelector("#message");

function sendEmail() {
  const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Message: ${mess.value} `;
  Email.send({
    SecureToken: "bcbba538-50aa-4834-8493-7f68a35ca8c8",
    To: "Burichan523@gmail.com",
    From: "tk2958@nyu.edu",
    Subject: "Let's Talk",
    Body: bodyMessage,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
    }
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
});
