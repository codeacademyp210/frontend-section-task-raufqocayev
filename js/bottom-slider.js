"use strict";

const sContainer = document.querySelector(".bottom-slider-container");
const sItems = Array.from(sContainer.children);
const prevButton = document.querySelector(".slider-button-left");
const nextButton = document.querySelector(".slider-button-right");
let itemSize = sItems[0].getBoundingClientRect();
const setSliderPosition = (item, index) => {
    item.style.left = index * itemSize.width + "px";
};

sItems.forEach(setSliderPosition);

// Click prev button, slider move to the left
prevButton.addEventListener("click", function (e) {
    let activeIndicator = document.querySelector('.active-indicators');
        activeIndicator.classList.remove('active-indicators');
        prevButton.classList.add('active-indicators');
    let activeItem = sContainer.querySelector(".active-slide");
    if (activeItem.previousElementSibling) {
        let prevItem = activeItem.previousElementSibling;
        prevItem.classList.add("active-slide");
        activeItem.classList.remove("active-slide");
        sContainer.style.transform = "translateX(-" + prevItem.style.left + ")";
    }
});
// Click next button, slider move to the right
nextButton.addEventListener("click", function (e) {
    let activeIndicator = document.querySelector('.active-indicators');
    activeIndicator.classList.remove('active-indicators');
    nextButton.classList.add('active-indicators');
    let activeItem = sContainer.querySelector(".active-slide");
    console.log(activeItem);
    if (activeItem.nextElementSibling) {
        let nextItem = activeItem.nextElementSibling;
        nextItem.classList.add("active-slide");
        activeItem.classList.remove("active-slide");
        sContainer.style.transform = "translateX(-" + nextItem.style.left + ")";
    } 
});