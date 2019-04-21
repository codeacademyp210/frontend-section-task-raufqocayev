"use stirct";
const creativeDesign =  document.querySelectorAll('.creative-design-card');
const creativeBox =  document.querySelectorAll('.creative-desing-card-box');

const teamCardWrapper = document.querySelectorAll('.team-card-wrapper');
const teamCardSocial =  document.querySelectorAll('.team-card-img-social');
const teamPersonalInfo =  document.querySelectorAll('.team-personal-info');

for(let i = 0; i < teamCardWrapper.length; i++)
{
    teamCardWrapper[i].addEventListener('mouseover', ()=>
    {
        teamCardSocial[i].style.transform ='translateY(-50px)';
        teamPersonalInfo[i].style.background = '#242424';
        teamPersonalInfo[i].children[0].style.color = '#fff';
    });


    teamCardWrapper[i].addEventListener('mouseout', ()=>
    {
        teamCardSocial[i].style.transform ='translateY(0px)';
        teamPersonalInfo[i].style.background = '#F6F6F6';
        teamPersonalInfo[i].children[0].style.color = '#000';
    });
}

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
