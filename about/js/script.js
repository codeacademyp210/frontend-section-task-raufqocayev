"use strict";
const creativeDesign =  document.querySelectorAll('.creative-design-card');
const creativeBox =  document.querySelectorAll('.creative-desing-card-box');


for(let i = 0; i < creativeDesign.length; i++)
{
    creativeDesign[i].addEventListener('click', ()=>
    {
       let activeBox =  document.querySelector('.active-card-box');
       let activeDesign =  document.querySelector('.active-creative-design');
         
          activeDesign.classList.remove('active-creative-design');
          activeDesign.children[0].classList.replace('fa-minus', 'fa-plus');
          activeDesign.children[1].style.color = 'black'; 
          activeDesign.classList.remove('active-creative-design');
          creativeDesign[i].classList.add('active-creative-design');
          creativeDesign[i].children[0].classList.replace('fa-plus', 'fa-minus');
          creativeDesign[i].children[1].style.color = '#FD602C';
        
          
         
           activeBox.classList.remove('active-card-box');
           creativeBox[i].classList.add('active-card-box');
           
    });
}


const aboutSliderContainer =  document.querySelector('.about-slider-container');
const aboutSliderItem =  Array.from(aboutSliderContainer.children);
let  aboutSliderItemSize = aboutSliderItem[0].getBoundingClientRect;
const aboutPrevButton = document.getElementById('aboutPrevButton');
const aboutNextButton = document.getElementById('aboutNextButton');

const setSliderPosition = (item, index) => {
    item.style.left = index * aboutSliderItem.width + "px";
};


aboutSliderItem.forEach(setSliderPosition);

aboutNextButton.addEventListener('click', ()=>
{
   
   
})