// "use strict";

// const sContainer = document.querySelector(".top-slider-container");
// const sItems = Array.from(sContainer.children);
// const prevButton = document.querySelector(".top-slider-button-left");
// const nextButton = document.querySelector(".top-slider-button-right");
// let itemSize = sItems[0].getBoundingClientRect();
// console.log(itemSize);

// // const setSliderPosition = (item, index) => {
// //     item.style.left = index * itemSize.width + "px";
// // };

// // sItems.forEach(setSliderPosition);

// for (let i = 0; i < sItems.length; i++) {
//     setSliderPos(sItems[i], i);
// }

// function setSliderPos(item, index) {
//     item.style.left = index * itemSize.width + "px";
// }

// // Click prev button, slider move to the left
// prevButton.addEventListener("click", function (e) {
//     let activeItem = sContainer.querySelector(".active-slide");
//     if (activeItem.previousElementSibling) {
//         let prevItem = activeItem.previousElementSibling;
//         prevItem.classList.add("active-slide");
//         activeItem.classList.remove("active-slide");

//         prevItem.querySelector(".top-slider-content").classList.add("animated", "bounceInLeft");
//         activeItem.querySelector(".top-slider-content").classList.remove("animated", "bounceInLeft", "bounceInRight");
//         sContainer.style.transform = "translateX(-" + prevItem.style.left + ")";
//     }
// });
// // Click next button, slider move to the right
// nextButton.addEventListener("click", function (e) {
//     let activeItem = sContainer.querySelector(".active-slide");
//     if (activeItem.nextElementSibling) {
//         let nextItem = activeItem.nextElementSibling;
//         nextItem.classList.add("active-slide");
//         activeItem.classList.remove("active-slide");

//         nextItem.querySelector(".top-slider-content").classList.add("animated", "bounceInRight");
//         activeItem.querySelector(".top-slider-content").classList.remove("animated", "bounceInRight", "bounceInLeft");
//         sContainer.style.transform = "translateX(-" + nextItem.style.left + ")";
//         console.log(nextItem);

//         if (!nextItem.nextElementSibling) {
//             console.log(sContainer.style.transitionDuration);
//             setTimeout(function () {
//                 sContainer.style.transform = "translateX(0)";
//                 sContainer.style.transitionDuration = "0s";
//                 sItems[sItems.length - 1].classList.remove("active-slide");
//                 sItems[0].classList.add("active-slide");
//             }, 750);

//             setTimeout(function () {
//                 sContainer.style.transitionDuration = "0.7s";
//             }, 800);
//         }
//     }
// });

(() => {
  const el = selector => document.querySelector(selector)

  const sliderIntervalTime = 5000
  let sliderInterval
  let sliderImageIndex = 0

  const sliderImages = el('.slider-images')
  const sliderPrevButton = el('.slider-icon.prev')
  const sliderNextButton = el('.slider-icon.next')
  const imagesCount = sliderImages.children.length

  function slideToNextImage() {
    sliderImageIndex = sliderImageIndex + 1 === imagesCount ? 0 : sliderImageIndex + 1
    slideToImage()
  }
  
  function slideToPrevImage() {
    sliderImageIndex = sliderImageIndex ? sliderImageIndex - 1 : imagesCount - 1
    slideToImage()
  }

  function slideToImage() { 
    sliderImages.style.transitionDuration = sliderImageIndex ? '1s' : '.5s'
    sliderImages.style.transform = `translateX(-${sliderImageIndex}00vw)`
  }

  function resetInterval() {
    clearInterval(sliderInterval)
    sliderInterval = setInterval(slideToNextImage, sliderIntervalTime);
  }

  sliderPrevButton.onclick = () => {
    resetInterval()
    slideToPrevImage()
  }
  sliderNextButton.onclick = () => {
    resetInterval()
    slideToNextImage()
  }

  sliderInterval = setInterval(slideToNextImage, sliderIntervalTime);
})()
