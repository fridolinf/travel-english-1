const slider1 = document.querySelector(".slider1");
const slider2 = document.querySelector(".slider2");

function lefts() {
  const checkSlider1 = slider1.classList.contains("slider-active");
  const checkSlider2 = slider2.classList.contains("slider-active");
  if (checkSlider1 === true || checkSlider2 === false) {
    slider1.classList.remove("slider-active")
    slider1.classList.add("slider-not-active")
    slider2.classList.remove("slider-not-active")
    slider2.classList.add("slider-active")
  } else if(checkSlider1 === false || checkSlider2 === true) {
    slider2.classList.remove("slider-active")
    slider2.classList.add("slider-not-active")
    slider1.classList.remove("slider-not-active")
    slider1.classList.add("slider-active")
  }
};

function rights() {
  const checkSlider1 = slider1.classList.contains("slider-active");
  const checkSlider2 = slider2.classList.contains("slider-active");
  if (checkSlider1 === true || checkSlider2 === false) {
    slider1.classList.remove("slider-active")
    slider1.classList.add("slider-not-active")
    slider2.classList.remove("slider-not-active")
    slider2.classList.add("slider-active")
  } else if(checkSlider1 === false || checkSlider2 === true) {
    slider2.classList.remove("slider-active")
    slider2.classList.add("slider-not-active")
    slider1.classList.remove("slider-not-active")
    slider1.classList.add("slider-active")

  }
}
