let main = document.querySelector(".main");
let mask = document.querySelector(".mask");

window.addEventListener("mousemove", function (dets) {
  const mouseX = dets.clientX - 70;
  const mouseY = dets.clientY - 70;

  gsap.to(mask, {
    maskPosition: `${mouseX}px ${mouseY}px`,
    duration: 1,
    ease: "power4.out",
  });
});
