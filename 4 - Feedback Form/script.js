const iconBoxes = document.querySelectorAll(".icon__box");
const icons = document.querySelectorAll(".fa-solid");

const submitBtn = document.getElementById("submitbtn");
const textArea = document.querySelector("textarea");

const mainSection = document.querySelector(".mainsection");
const thankYouSection = document.querySelector(".thankyou");

const closeIcon = document.querySelector(".closeicon");

const feedbackForm = document.querySelector(".feedbackform");

closeIcon.addEventListener("click", () => {
  feedbackForm.classList.add("visibility");
  location.reload();
  setTimeout(() => {
    feedbackForm.classList.remove("visibility");
  }, 2000);
});

iconBoxes.forEach((iconbox, index) => {
  iconbox.addEventListener("click", () => {
    iconBoxes.forEach((box) => {
      box.classList.remove("active");
    });

    icons.forEach((icon) => {
      icon.classList.remove("activeicon");
    });

    iconbox.classList.add("active");
    const icon = iconbox.querySelector(".fa-solid");
    icon.classList.add("activeicon");
  });
});

textArea.addEventListener("input", () => {
  if (textArea.value.trim() !== "") {
    submitBtn.classList.remove("disabled");
  } else {
    submitBtn.classList.add("disabled");
  }
});

submitBtn.addEventListener("click", () => {
  mainSection.classList.add("visibility");
  thankYouSection.classList.remove("visibility");
});
