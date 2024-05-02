let inputMonday = document.querySelector('#Monday'); 
let inputTuesday = document.querySelector('#Tuesday');
let inputWednesday = document.querySelector('#Wednesday');
let inputThursday = document.querySelector('#Thursday');
let inputFriday = document.querySelector('#Friday');
let inputSaturday = document.querySelector('#Saturday');
let inputSunday = document.querySelector('#Sunday');
let inputNote = document.querySelector('#Note');

let cardInput = document.getElementsByClassName('cards');
for (let i = 0; i<cardInput.length; i++ ){
    cardInput[i].addEventListener('keydown', formHandler);
}

function formHandler (event){


    if(event.target.nodeName == "INPUT" && event.key=="Enter"){

        let newLi = document.createElement('li');
        newLi.innerHTML = event.target.value;
        newLi.classList.add('newLi');
        let deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('role', 'button');
        deleteBtn.innerText = '✖';
        deleteBtn.classList.add('deletebtn');
        deleteBtn.style['margin-left'] = '15px';
        newLi.append(deleteBtn);
        deleteBtn.addEventListener('click', function() {
            this.closest('li').remove();
           });
        if(event.target.value != '' ){
            event.target.parentNode.appendChild(newLi); 
            event.target.value = '';
            event.target.blur();
        }
      }
}