let error_sign0 = document.getElementsByClassName("error_sign")[0];
let error_sign1 = document.getElementsByClassName("error_sign")[1];
let error_sign2 = document.getElementsByClassName("error_sign")[2];
let error_sign3 = document.getElementsByClassName("error_sign")[3];
let error_sign4 = document.getElementsByClassName("error_sign")[4];

// let error_sign1 = document.querySelector(".error_sign1");
// let error_sign2 = document.querySelector(".error_sign2");
// let error_sign3 = document.querySelector(".error_sign3");
// let error_sign4 = document.querySelector(".error_sign4");
// let error_sign5 = document.querySelector(".error_sign5");


let error_text = document.querySelector(".error_text");
const calculate = () => {
  const name = document.getElementById("name").value;
  const gender = document.getElementById("gender").value;
  const age = document.getElementById("age").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;

  if (!isNaN(name)) {
    // error_sign1.textContent = "!";
    // error_sign2.textContent = "";
    // error_sign3.textContent = "";
    // error_sign4.textContent = "";
    // error_sign5.textContent = "";

    error_sign0.innerHTML = "1";
    error_text.textContent = "missing name";
  } else if (!isNaN(gender)) {
    // error_sign1.textContent = "";
    // error_sign2.textContent = "!";
    // error_sign3.textContent = "";
    // error_sign4.textContent = "";
    // error_sign5.textContent = "";
    error_sign0.innerHTML = "";

    error_sign1.innerHTML = "2";
    error_text.textContent = "missing gender";
  } else if (!isNaN(age)) {
    // error_sign1.textContent = "";
    // error_sign2.textContent = "";
    // error_sign3.textContent = "!";
    // error_sign4.textContent = "";
    // error_sign5.textContent = "";
    error_sign1.innerHTML = "";
    error_sign2.innerHTML = "3";
    error_text.textContent = "missing age";
  } else if (!isNaN(height)) {
    // error_sign1.textContent = "";
    // error_sign2.textContent = "";
    // error_sign3.textContent = "";
    // error_sign4.textContent = "!";
    // error_sign5.textContent = "";
    error_sign2.innerHTML = "";

    error_sign3.innerHTML = "4";
    error_text.textContent = "missing height";
  } else if (!isNaN(weight)) {
    // error_sign1.textContent = "";
    // error_sign2.textContent = "";
    // error_sign3.textContent = "";
    // error_sign4.textContent = "";
    // error_sign5.textContent = "!";
    error_sign3.innerHTML = "";

    error_sign4.innerHTML = "5";
    error_text.textContent = "missing weight";
  } else {
    // error_sign1.textContent = "";
    // error_sign2.textContent = "";
    // error_sign3.textContent = "";
    // error_sign4.textContent = "";
    // error_sign5.textContent = "";
    error_sign4.innerHTML = "";

    error_text.textContent = "done";
  }
};
