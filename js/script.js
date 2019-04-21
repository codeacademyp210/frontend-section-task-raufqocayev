"use strict";
console.log('Working')
// header
const barIcon = document.querySelector('#bar-icon');
const responsiveNavContainer = document.querySelector('#responsive-nav-container');
const navLogoContainer = document.querySelector('#navLogoContainer');
let openClouse = true;

let checkVideo = true;
const pauseIcon = document.querySelector('#pauseIcon');
const video = document.querySelector('#myVideo');
const teamCard =  document.querySelectorAll('.team-card');
const teamCardPhoto = document.querySelectorAll('.team-card-photo img');
const teamCardDescription =  document.querySelectorAll('.team-card-description');
const workCard = document.querySelectorAll('.work-card');
const workCardImg =  document.querySelectorAll('.work-card-img img');
const workdCardImgLayer = document.querySelectorAll('.work-card-img-layer');
const howWorkCardContainer = document.querySelectorAll('.how-work-card-container');
const howWorkCard = document.querySelectorAll('.how-work-card');

const upScroll =  document.querySelector('.upScroll');



upScroll.addEventListener('click', ()=>
{
  
   document.documentElement.scrollTop = 0;
});



barIcon.addEventListener('click', ()=>
{
   if(openClouse==true)
   {
       responsiveNavContainer.classList.remove('hideMenu');
       setTimeout(() => {
        responsiveNavContainer.style.height = '400px';
       }, 1);
       openClouse = false;
   }
   else
   {
    responsiveNavContainer.style.height = '0px';
    setTimeout(()=>
    {
        responsiveNavContainer.classList.add('hideMenu');
    }, 300)
    openClouse = true;
   }
});



function myStickyMenu()
{
    if(document.documentElement.scrollTop >=60)
    {
        navLogoContainer.style.position = 'fixed';
    }
    else
    {
        navLogoContainer.style.position = 'static';
    }


    if(document.documentElement.scrollTop >= 4606)
    {
        for(let i = 0; i < howWorkCardContainer.length; i++)
        {
            setTimeout(()=>{
                howWorkCardContainer[i].style.display = 'block';
            }, 100*i);
        }
    }
    else
    {
        for(let i = 0; i < howWorkCardContainer.length; i++)
        {
            setTimeout(()=>{
                howWorkCardContainer[i].style.display = 'none'; 
            }, 100*i);
        }
    }


}

// header end









for(let i = 0; i < teamCard.length; i++)
{
    teamCard[i].addEventListener('mouseover', ()=>
    {
          teamCardPhoto[i].style.transform = 'scale(1.2)';
          teamCardDescription[i].style.transform ='translateY(-78px)';
    });

    teamCard[i].addEventListener('mouseout', ()=>
    {
          teamCardPhoto[i].style.transform = 'scale(1)';
          teamCardDescription[i].style.transform ='translateY(0)';
    });
}

pauseIcon.addEventListener('click', ()=>
{
    if(checkVideo == true)
    {
        pauseIcon.classList.remove('far', 'fa-pause-circle');
        pauseIcon.classList.add('fas', 'fa-play');
        video.pause();
        checkVideo = false;
    }
    else
    {
        pauseIcon.classList.add('far', 'fa-pause-circle');
        pauseIcon.classList.remove('fas', 'fa-play');
        video.play();
        checkVideo = true;
    }
});


for(let i = 0; i<workCard.length; i++)
{
    console.log(workCard[i]);
    workCard[i].addEventListener('mouseover', ()=>
    {
        workCardImg[i].style.transform = 'scale(1.2)';
        workdCardImgLayer[i].style.display = 'block';
    });

    workCard[i].addEventListener('mouseout', ()=>
    {
        workCardImg[i].style.transform = 'scale(1)';
        workdCardImgLayer[i].style.display = 'none';
    });
}



