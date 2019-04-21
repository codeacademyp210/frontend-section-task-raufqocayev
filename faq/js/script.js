"use strict";

const creativeDesigner1 = document.querySelector('.creative-designer-wrapper1');


creativeDesignerOpen(creativeDesigner1);



function creativeDesignerOpen(item)
{
  const creativeDesign= item.querySelectorAll('.creative-design-card');
  const creativeBox = item.querySelectorAll('.creative-desing-card-box');

  
for(let i = 0; i < creativeDesign.length; i++)
{
    creativeDesign[i].addEventListener('click', ()=>
    {
       let activeBox =  document.querySelector('.active-card-box');
       let activeDesign =  document.querySelector('.active-creative-design');
         
          activeDesign.classList.remove('active-creative-design');
          activeDesign.children[0].classList.replace('fa-minus-circle', 'fa-plus-circle');
          activeDesign.children[1].style.color = 'black'; 
          activeDesign.classList.remove('active-creative-design');
          creativeDesign[i].classList.add('active-creative-design');
          creativeDesign[i].children[0].classList.replace('fa-plus-circle', 'fa-minus-circle');
          creativeDesign[i].children[1].style.color = '#FD602C';
        
          
         
           activeBox.classList.remove('active-card-box');
           creativeBox[i].classList.add('active-card-box');
           
    });
}

}

