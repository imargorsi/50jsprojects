const singleTabs = document.querySelectorAll(".single__tab");
const singleContent = document.querySelectorAll(".single__content");

singleTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    singleTabs.forEach((t) => t.classList.remove("active__tab"));

    tab.classList.add("active__tab");

    singleContent.forEach((content) => {
      content.classList.add("visibility");
    });

    singleContent[index].classList.remove("visibility");
  });
});
