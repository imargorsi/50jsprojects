const images = Array.from(document.getElementsByClassName("img"));
const button = document.querySelector("button");

const removingActive = (img) => {
  img.classList.remove("active");
};

const addingActive = (img) => {
  img.classList.add("active");
};

images.forEach((img) => {
  img.addEventListener("click", () => {
    // Remove "active" class from all images
    images.forEach((otherImg) => {
      removingActive(otherImg);
    });
    // Add "active" class to the clicked image
    addingActive(img);
  });
});

button.addEventListener("click", () => {
  images.forEach((img) => {
    removingActive(img);
  });
});
