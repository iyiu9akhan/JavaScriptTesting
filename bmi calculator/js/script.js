let error_sign0 = document.getElementsByClassName("error_sign")[0];
let error_sign1 = document.getElementsByClassName("error_sign")[1];
let error_sign2 = document.getElementsByClassName("error_sign")[2];
let error_sign3 = document.getElementsByClassName("error_sign")[3];
let error_sign4 = document.getElementsByClassName("error_sign")[4];
let error_text = document.querySelector(".error_text");
let form_top = document.querySelector(".top");
let form_middle = document.querySelector(".middle");
let form_bottom= document.querySelector(".bottom");
let result_middle = document.querySelector(".result_portion");
let result_bottom = document.querySelector(".result_bottom")

result_middle.style.display = "none";
result_bottom.style.display = "none";


const calculate = () => {
  const name = document.getElementById("name").value;
  const gender = document.getElementById("gender").value;
  const age = document.getElementById("age").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;

  if (!isNaN(name)) {
    error_sign0.innerHTML = "!";
    error_sign1.innerHTML = "";
    error_sign2.innerHTML = "";
    error_sign3.innerHTM = "";
    error_sign4.innerHTML = "";
    error_text.textContent = "missing name";
  } else if (!isNaN(gender)) {
    error_sign0.innerHTM = "";
    error_sign1.innerHTML = "!";
    error_sign2.innerHTM = "";
    error_sign3.innerHTM = "";
    error_sign4.innerHTML = "";
    error_text.textContent = "missing gender";
  } else if (!isNaN(age)) {
    error_sign0.innerHTML = "";
    error_sign1.innerHTML = "";
    error_sign2.innerHTML = "!";
    error_sign3.innerHTML = "";
    error_sign4.innerHTML = "";
    error_text.textContent = "missing age";
  } else if (!isNaN(height)) {
    error_sign0.innerHTML = "";
    error_sign1.innerHTML = "";
    error_sign2.innerHTML = "";
    error_sign3.innerHTML = "!";
    error_sign4.innerHTML = "";
    error_text.textContent = "missing height";
  } else if (!isNaN(weight)) {
    error_sign0.innerHTML = "";
    error_sign1.innerHTML = "";
    error_sign2.innerHTML = "";
    error_sign3.innerHTML = "";
    error_sign4.innerHTML = "!";
    error_text.textContent = "missing weight";
  } else {
    form_top.style.display = "none";
    form_middle.style.display = "none";
    form_bottom.style.display = "none";

    result_middle.style.display = "block";
    result_bottom.style.display = "block";
    error_sign0.innerHTML = "";
    error_sign1.innerHTML = "";
    error_sign2.innerHTML = "";
    error_sign3.innerHTML = "";
    error_sign4.innerHTML = "";
    error_text.textContent = "";
  }
};

const pageLoad = () =>{
    location.reload()
    // location.replace(document.referrer);
}
