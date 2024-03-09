const demotest = document.getElementById("slide");
const nextArrow = document.getElementById("nextArrow");
const imageSlides = document.querySelectorAll(".imgslide");
let currentIndex = 0;

const prevArrow = document.getElementById("prevArrow");

nextArrow.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= imageSlides.length) {
    currentIndex = 0;
  }
  demotest.style.transform = `translateX(-${currentIndex * 100}%)`;
});

prevArrow.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = imageSlides.length - 1;
  }
  demotest.style.transform = `translateX(-${currentIndex * 100}%)`;
});
