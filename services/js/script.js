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