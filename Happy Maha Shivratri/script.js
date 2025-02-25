document.addEventListener("DOMContentLoaded", function() {
  let omSymbol = document.querySelector(".floating-om");

  // Rotate Om Symbol continuously
  let angle = 0;
  setInterval(() => {
      angle += 2;
      omSymbol.style.transform = `translateX(-50%) rotate(${angle}deg)`;
  }, 50);
});
