function replaceLastImage(clickedImage) {
  var newSrc = clickedImage.src;
  var lastImage = document.querySelector(".filterimg");

  lastImage.src = newSrc;
}

const inputs = document.querySelectorAll("input");

const handleChange = function () {
  console.log(this.value);
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
};

inputs.forEach((input) => {
  input.addEventListener("change", handleChange);
});
