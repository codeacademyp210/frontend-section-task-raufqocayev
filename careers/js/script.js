"use stirct";
const cardBoxButton = document.querySelectorAll('.card-box-button');
const cardBoxContainer = document.querySelectorAll('.card-box-container');

for(let i = 0; i < cardBoxButton.length; i++)
{
    cardBoxButton[i].addEventListener('click',()=>{

        let activeCardBoxButton = document.querySelector('.active-card-box-button');
        let activeCardBoxContainer = document.querySelector('.active-card-box-container');

           activeCardBoxButton.classList.remove('active-card-box-button');
           cardBoxButton[i].classList.add('active-card-box-button');

           activeCardBoxContainer.classList.remove('active-card-box-container');
           cardBoxContainer[i].classList.add('active-card-box-container')
    });
}


const creativeDesigner1 = document.querySelector('.creative-designer-wrapper1');

const creativeDesigner2 = document.querySelector('.creative-designer-wrapper2');


const creativeDesigner3 = document.querySelector('.creative-designer-wrapper3');

creativeDesignerOpen3(creativeDesigner3);
creativeDesignerOpen2(creativeDesigner2);
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


function creativeDesignerOpen2(item)
{
  const creativeDesign= item.querySelectorAll('.creative-design-card-2');
  const creativeBox = item.querySelectorAll('.creative-desing-card-box-2');

  
for(let i = 0; i < creativeDesign.length; i++)
{
    creativeDesign[i].addEventListener('click', ()=>
    {
       let activeBox =  document.querySelector('.active-card-box-2');
       let activeDesign =  document.querySelector('.active-creative-design-2');
         
          activeDesign.classList.remove('active-creative-design-2');
          activeDesign.children[0].classList.replace('fa-minus-circle', 'fa-plus-circle');
          activeDesign.children[1].style.color = 'black'; 
          activeDesign.classList.remove('active-creative-design-2');
          creativeDesign[i].classList.add('active-creative-design-2');
          creativeDesign[i].children[0].classList.replace('fa-plus-circle', 'fa-minus-circle');
          creativeDesign[i].children[1].style.color = '#FD602C';
        
          
         
           activeBox.classList.remove('active-card-box-2');
           creativeBox[i].classList.add('active-card-box-2');
           
    });
}

}


function creativeDesignerOpen3(item)
{
  const creativeDesign= item.querySelectorAll('.creative-design-card-3');
  const creativeBox = item.querySelectorAll('.creative-desing-card-box-3');

  
for(let i = 0; i < creativeDesign.length; i++)
{
    creativeDesign[i].addEventListener('click', ()=>
    {
       let activeBox =  document.querySelector('.active-card-box-3');
       let activeDesign =  document.querySelector('.active-creative-design-3');
         
          activeDesign.classList.remove('active-creative-design-3');
          activeDesign.children[0].classList.replace('fa-minus-circle', 'fa-plus-circle');
          activeDesign.children[1].style.color = 'black'; 
          activeDesign.classList.remove('active-creative-design-3');
          creativeDesign[i].classList.add('active-creative-design-3');
          creativeDesign[i].children[0].classList.replace('fa-plus-circle', 'fa-minus-circle');
          creativeDesign[i].children[1].style.color = '#FD602C';
        
          
         
           activeBox.classList.remove('active-card-box-3');
           creativeBox[i].classList.add('active-card-box-3');
           
    });
}

}







// const creativeDesign =  document.querySelectorAll('.creative-design-card');
// const creativeBox =  document.querySelectorAll('.creative-desing-card-box');


// for(let i = 0; i < creativeDesign.length; i++)
// {
//     creativeDesign[i].addEventListener('click', ()=>
//     {
//        let activeBox =  document.querySelector('.active-card-box');
//        let activeDesign =  document.querySelector('.active-creative-design');
         
//           activeDesign.classList.remove('active-creative-design');
//           activeDesign.children[0].classList.replace('fa-minus-circle', 'fa-plus-circle');
//           activeDesign.children[1].style.color = 'black'; 
//           activeDesign.classList.remove('active-creative-design');
//           creativeDesign[i].classList.add('active-creative-design');
//           creativeDesign[i].children[0].classList.replace('fa-plus-circle', 'fa-minus-circle');
//           creativeDesign[i].children[1].style.color = '#FD602C';
        
          
         
//            activeBox.classList.remove('active-card-box');
//            creativeBox[i].classList.add('active-card-box');
           
//     });
// }
