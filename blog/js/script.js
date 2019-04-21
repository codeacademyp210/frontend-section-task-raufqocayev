"use strict";
const blogImgContainer = document.querySelectorAll('.blog-img-container');

for(let i = 0; i < blogImgContainer.length; i++)
{
    blogImgContainer[i].addEventListener('mouseover', ()=>
    {
         blogImgContainer[i].firstElementChild.style.top = '45%';
    });

    blogImgContainer[i].addEventListener('mouseout', ()=>
    {
       blogImgContainer[i].firstElementChild.style.top = '-148px';
    });
}