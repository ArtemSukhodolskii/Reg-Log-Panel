






// This code does not work


















"use strict"

document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('container')
    const form_log = document.getElementById('form-log');
    const form_reg = document.getElementById('form-reg');

    document.getElementById('swap1').addEventListener('click', () => {
        container.classList.toggle('active');
    })

    document.getElementById('swap2').addEventListener('click', () => {
        container.classList.toggle('active');
    })
    
    form_reg.addEventListener('submit', function(event) {
        event.preventDefault();
        let error = formValidate(form_reg);

        if(error === 0){
        }else {
            alert('Заполните обязательные поля!');
        }
        
    });

    form_log.addEventListener('submit', function(event) {
        event.preventDefault()
        
    });

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('_req');
        for(let i = 0; i < formReq.length; i++){
            const input = formReq[i];
            formRemoveError(input);

            if(input.classList.contains('_email')) {
                console.log(emailTest(input))
                if(!emailTest(input)){
                    formAddError(input);
                    error++;
                }
            }else{
                if(input.value === ''){
                    formAddError(input);
                    error++;
                }
            }

        }
        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function emailTest(input){
        return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(input.value);
    }

});





















