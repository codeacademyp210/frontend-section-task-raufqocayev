"use strict";

const portfolioSliderItem = document.querySelectorAll('.portfolio-slider-item');
const portfolioSilderItemImg = document.querySelectorAll('.portfolio-slider-item-img');
const portfolioSliderItemCard =  document.querySelectorAll('.portfolio-slider-item-card');


for(let i = 0; i < portfolioSliderItem.length; i++)
{
    portfolioSliderItem[i].addEventListener('mouseover', ()=>
    {
         portfolioSliderItemCard[i].style.transform = 'translateY(0px)';
         portfolioSilderItemImg[i].style.transform = 'translateY(-50px)'
    });

    portfolioSliderItem[i].addEventListener('mouseout', ()=>
    {
         portfolioSliderItemCard[i].style.transform = 'translateY(200px)';
         portfolioSilderItemImg[i].style.transform = 'translateY(0px)'
    });

}