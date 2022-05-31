// Exo 1
let input1 = document.querySelectorAll('.form-control')[0];
let input2 = document.querySelectorAll('.form-control')[1];

let response1 = document.querySelector('#response1');
let equalFor1 = document.querySelectorAll('.fa-equals')[0];

equalFor1.addEventListener('click', () => {
    response1.innerText = `${Number(input1.value) + Number(input2.value)}`;
})

// Exo 2

let input3 = document.querySelectorAll('.form-control')[2];
let input4 = document.querySelectorAll('.form-control')[3];

let operator = document.querySelectorAll('select')[0].value;