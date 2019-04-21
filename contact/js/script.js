"use strict";

const userName =  document.forms['contactForm']['contact-name'];
const userEmail =  document.forms['contactForm']['contact-email'];
const userContact =  document.forms['contactForm']['contact-number'];
const userMessageWrapper = document.querySelector('.user-message');
const userMessage = document.getElementById('user-message');
const inputAlerts = document.querySelectorAll('.input-alert-text');

const formInputs = document.querySelectorAll('input');

const onlyLetter = /^['a-zA-Z']+$/;
const phoneNumberVal = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

userMessage.addEventListener('focus', ()=>
{
    userMessageWrapper.lastElementChild.style.borderColor = 'yellowgreen';
});
userMessage.addEventListener('focusout', ()=>
{
    userMessageWrapper.lastElementChild.style.borderColor = 'gray';
})


function checkContactForm()
{
  if(userName.value == '' || userEmail.value == '' || userContact.value == '' || userMessage.value == '')
  {
  
    for(let i = 0; i < formInputs.length; i++)
    {
       if(formInputs[i].value == "")
       {
          let formIcon = formInputs[i].nextElementSibling; 
           formInputs[i].style.outline = "1px solid red";
           formIcon.style.color = 'red';
           formIcon.nextElementSibling.classList.add('active-alert');
       }
    
       
    }
    
    for(let i = 0; i < formInputs.length; i++)
    {
       if(formInputs[i].value != "")
       {
        let formIcon = formInputs[i].nextElementSibling; 
        formInputs[i].style.outline = "1px solid green";
        formIcon.style.color = 'green';
        formIcon.nextElementSibling.classList.remove('active-alert');
       }
    }

 
      if(userMessage.value == '')
      {
          userMessage.style.outline = '1px solid red';
          userMessage.nextElementSibling.style.color = 'red';
      }

      if(userMessage.value != '')
      {
          userMessage.style.outline = '1px solid green';
          userMessage.nextElementSibling.style.color = 'green';
      }
     
     return false;
  }

  if(!userName.value.match(onlyLetter))
  {
      userName.style.outline = '1px solid red';
      userName.nextElementSibling.style.color = 'red';
      return false;
  }

  if(!userPhone.value.match(phoneNumberVal))
  {
      userPhone.style.outline = '1px solid red';
      userPhone.nextElementSibling.style.color = 'red';
      return false;
  }


  hideMyAlerts();
  return false;
  
}



function showAler(item)
{
    item.classList.add('active-alert');
}


function hideMyAlerts()
{
    for(let i = 0; i < inputAlerts.length; i++)
    {
        inputAlerts[i].classList.remove('active-alert');
    }
}


