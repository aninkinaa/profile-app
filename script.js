let slideIndexSalPriadi = 0;
let slideIndexSmash = 0;

showSlides("salPriadiSlider", slideIndexSalPriadi);
showSlides("smashSlider", slideIndexSmash);

function showSlides(sliderId, n) {
  let i;
  const slides = document.getElementById(sliderId).getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  n++;
  if (n > slides.length) {
    n = 1;
  }
  slides[n - 1].style.display = "block";
  setTimeout(() => showSlides(sliderId, n), 2000);
}