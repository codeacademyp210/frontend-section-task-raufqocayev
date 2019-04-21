"use stirct";
const firstName = document.forms['myRegisterForm']['first-name'];
const lastName = document.forms['myRegisterForm']['last-name'];
const userName = document.forms['myRegisterForm']['user-name'];
const createPassword = document.forms['myRegisterForm']['create-password'];
const createPasswordAgain = document.forms['myRegisterForm']['create-password-again'];
const selectLocation = document.forms['myRegisterForm']['select-location'];
const dateDay = document.forms['myRegisterForm']['date-day'];
const dateYear = document.forms['myRegisterForm']['date-year'];
const userPhone = document.forms['myRegisterForm']['user-phone'];
const alertForm = document.querySelector('.alert-form');
const alertText = document.querySelector('#alert-text');

const onlyLetter = /^['a-zA-Z']+$/;
const onlyNumber = /^['0-9']+$/;
const phoneNumberVal = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

let ourDate = new Date();


function validateForm()
{
    if(firstName.value == "" || lastName.value == "")
    {
        showAlert('Inputs cannot be empty');
        redInput(firstName, lastName, userName, createPassword, createPasswordAgain, selectLocation, dateDay, dateYear, userPhone);
        return false;
    }
    else if(!firstName.value.match(onlyLetter) || !lastName.value.match(onlyLetter) )
    {
        
       showAlert('You can use only letter for firstname and lastname');
       return false; 
    }
    else if(!dateDay.value.match(onlyNumber) || dateDay.value < 1 || dateDay.value > 31)
    {
        showAlert('Invalid Day! Enter only number and choose correct day');
        return false;
    }
    else if(!dateYear.value.match(onlyNumber) || dateYear.value < 1900 || dateYear.value > ourDate.getFullYear() )
    {
        showAlert('Invalid year! Enter only number and choose correct year');
        return false;
    }
    else if(!userPhone.value.match(phoneNumberVal))
    {
        showAlert('Enter correct phone number');
        return false;
    }
    else{

        grayInputs(firstName, lastName);
        hideAlert();
        return false;
    }
 
    

   
}



function redInput()
{
    for(let i = 0; i < arguments.length; i++)
    {
      if(arguments[i].value == '')
      {
        arguments[i].style.border = '1px solid red';
        if(arguments[i].nextElementSibling == true)
        { arguments[i].nextElementSibling.style.color = 'red';}
      }
    }
}


// function redInputs(item1, item2, item3, item4, item5, item6, item7, item8, item9)
// {
//      item1.style.border = "1px solid red";
//      item1.nextElementSibling.style.color = 'red';

//      item2.style.border = "1px solid red";
//      item2.nextElementSibling.style.color = 'red';


//      item3.style.border = "1px solid red";
//      item3.nextElementSibling.style.color = 'red';

//      item4.style.border = "1px solid red";
//      item4.nextElementSibling.style.color = 'red';


//      item5.style.border = "1px solid red";
//      item5.nextElementSibling.style.color = 'red';


//      item6.style.border = "1px solid red";
//      item6.nextElementSibling.style.color = 'red';

//      item7.style.border = "1px solid red";
//      item7.nextElementSibling.style.color = 'red';

//      item8.style.border = "1px solid red";
//      item8.nextElementSibling.style.color = 'red';

//      item9.style.border = "1px solid red";
//      item9.nextElementSibling.style.color = 'red';

// }



function grayInputs(item1, item2, item3, item4, item5, item6, item7, item8, item9)
{
     item1.style.border = "1px solid #626262";
     item1.nextElementSibling.style.color = '#BBBBBB';

     item2.style.border = "1px solid #626262";
     item2.nextElementSibling.style.color = '#BBBBBB';


     item3.style.border = "1px solid #626262";
     item3.nextElementSibling.style.color = '#BBBBBB';

     item4.style.border = "1px solid #626262";
     item4.nextElementSibling.style.color = '#BBBBBB';


     item5.style.border = "1px solid #626262";
     item5.nextElementSibling.style.color = '#BBBBBB';


     item6.style.border = "1px solid #626262";
     item6.nextElementSibling.style.color = '#BBBBBB';

     item7.style.border = "1px solid #626262";
     item7.nextElementSibling.style.color = '#BBBBBB';

     item8.style.border = "1px solid #626262";
     item8.nextElementSibling.style.color = '#BBBBBB';

     item9.style.border = "1px solid #626262";
     item9.nextElementSibling.style.color = '#BBBBBB';

}






function showAlert(item)
{
    alertText.innerHTML = item;
    alertForm.classList.add('active-alert');
}

function hideAlert()
{alertForm.classList.remove('active-alert');}


