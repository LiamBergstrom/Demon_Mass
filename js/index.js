const navbarToggle = navbar.querySelector("#navbar-toggle");
let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded;
  navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
};

navbarToggle.addEventListener("click", toggleNavbarVisibility);

var responsiveSlider = function () {
  var slider = document.getElementById("slider");
  var sliderWidth = slider.offsetWidth;
  var slideList = document.getElementById("slideWrap");
  var count = 1;
  var items = 2;
  // var items = slideList.querySelectorAll("li").length;

  var prev = document.getElementById("prev");
  var next = document.getElementById("next");

  window.addEventListener("resize", function () {
    sliderWidth = slider.offsetWidth;
  });

  var prevSlide = function () {
    if (count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    } else if ((count = 1)) {
      count = items - 1;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
  };

  var nextSlide = function () {
    if (count < items) {
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    } else if ((count = items)) {
      slideList.style.left = "0px";
      count = 1;
    }
  };

  next.addEventListener("click", function () {
    nextSlide();
  });

  prev.addEventListener("click", function () {
    prevSlide();
  });

  let interval = setInterval(function () {
    nextSlide();
  }, 3000);

  const allSlides = document.getElementsByClassName("slide");

  for (var i = 0; i < allSlides.length; i++) {
    allSlides[i].addEventListener("mouseover", function () {
      clearInterval(interval);
    });

    allSlides[i].addEventListener("mouseout", function () {
      interval = setInterval(function () {
        nextSlide();
      }, 3000);
    });
  }
};

window.onload = function () {
  responsiveSlider();
};
