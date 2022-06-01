// Exo 01
let input1 = document.querySelectorAll(".form-control")[0];
let input2 = document.querySelectorAll(".form-control")[1];

let response1 = document.querySelector("#response1");
let equalFor1 = document.querySelectorAll(".fa-equals")[0];

equalFor1.addEventListener("click", () => {
  response1.innerText = `${Number(input1.value) + Number(input2.value)}`;
});

// Exo 02

let input3 = document.querySelectorAll(".form-control")[2];
let input4 = document.querySelectorAll(".form-control")[3];
let egal2 = document.querySelectorAll(".fa-equals")[1];
let operator = document.querySelectorAll("select")[0];
let response2 = document.querySelector("#response2");

egal2.addEventListener("click", () => {
  switch (operator.value) {
    case "*":
      response2.innerText = `${Number(input3.value) * Number(input4.value)}`;
      break;
    case "-":
      response2.innerText = `${Number(input3.value) - Number(input4.value)}`;
      break;
    case "+":
      response2.innerText = `${Number(input3.value) + Number(input4.value)}`;
      break;
    case "/":
      response2.innerText = `${Number(input3.value) / Number(input4.value)}`;
      break;
  }
});

// Exo 03
let input5 = document.querySelectorAll(".form-control")[4];
let input6 = document.querySelectorAll(".form-control")[5];

let egal3 = document.querySelectorAll(".fa-equals")[2];
let operator3 = document.querySelectorAll(".fas")[3];
let response3 = document.querySelector("#response3");

let add3 = document.querySelectorAll("button")[3];
let sub3 = document.querySelectorAll("button")[4];
let mult3 = document.querySelectorAll("button")[5];
let div3 = document.querySelectorAll("button")[6];

// change operator when buttons are clicked
add3.addEventListener("click", () => {
  operator3.classList.remove("fa-plus", "fa-minus", "fa-times", "fa-divide");
  operator3.classList.add("fa-plus");
});

sub3.addEventListener("click", () => {
  operator3.classList.remove("fa-plus", "fa-minus", "fa-times", "fa-divide");
  operator3.classList.add("fa-minus");
});

mult3.addEventListener("click", () => {
  operator3.classList.remove("fa-plus", "fa-minus", "fa-times", "fa-divide");
  operator3.classList.add("fa-times");
});

div3.addEventListener("click", () => {
  operator3.classList.remove("fa-plus", "fa-minus", "fa-times", "fa-divide");
  operator3.classList.add("fa-divide");
});

egal3.addEventListener("click", () => {
  switch (operator3.className) {
    case "fas fa-times":
      response3.innerText = `${Number(input5.value) * Number(input6.value)}`;
      break;
    case "fas fa-minus":
      response3.innerText = `${Number(input5.value) - Number(input6.value)}`;
      break;
    case "fas fa-plus":
      response3.innerText = `${Number(input5.value) + Number(input6.value)}`;
      break;
    case "fas fa-divide":
      response3.innerText = `${Number(input5.value) / Number(input6.value)}`;
      break;
  }
});

// Exo 04
