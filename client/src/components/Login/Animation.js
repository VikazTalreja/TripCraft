import gsap from "gsap";

export const animateElements = () => {
  const loginDiv = document.querySelector(".login-div");
  const videoElement = document.querySelector(".Login_Video");

  gsap.set(loginDiv, { opacity: 0, y: 20 });

  const tl = gsap.timeline();

  tl.to(videoElement, { opacity: 1, duration: 1 })
    .to(".log-container", { opacity: 1, duration: 1 })
    .to(loginDiv, { opacity: 1, y: 0, duration: 1, delay: 1 })
    .to(videoElement, { opacity: 0, duration: 1, delay: 1 }, "+=0");

  tl.to(videoElement, { filter: "blur(1px)", duration: 0.5 }, "-=0.5");
};
