function Dmultiply() {
  let getValue1 = Number(document.getElementById("number1").value);
  let getValue2 = Number(document.getElementById("number2").value);
  let showResult = document.getElementById("results");
  showResult.innerHTML = "";
  if (getValue1 > getValue2) {
    [getValue1, getValue2] = [getValue2, getValue1];
  }
  if (
    isNaN(getValue1) ||
    getValue1 < 1 ||
    getValue1 > 20 ||
    isNaN(getValue2) ||
    getValue2 < 1 ||
    getValue2 > 20
  ) {
    let text = "Not Valid!";
    msgReset();
    document.getElementById("Dwarning").innerHTML = text;
  } else {
    text = "Proceed";
    for (let i = getValue1; i <= getValue2; i++) {
      let tableHTML = `<div class="table-part">`;
      for (let j = 1; j <= 10; j++) {
        tableHTML += `${i} x ${j} = ${i * j} <br/>`;
      }
      tableHTML += "</div>";
      showResult.innerHTML += tableHTML;
    }
    msgReset();
    document.getElementById("Dsuccess").innerHTML = text;
    document.getElementById("number3").value = "";
  }
}

function Smultiply() {
  let getValue = Number(document.getElementById("number3").value);
  let showResult = document.getElementById("results");
  showResult.innerHTML = "";
  if (isNaN(getValue) || getValue < 1 || getValue > 20) {
    let text = "Not Valid!";
    msgReset();
    document.getElementById("Swarning").innerHTML = text;
  } else {
    text = "Proceed";
    let tableHTML = `<div class="table-part">`;
    for (let i = 1; i <= 10; i++) {
      tableHTML += `${getValue} x ${i} = ${getValue * i} <br/>`;
    }
    tableHTML += "</div>";
    showResult.innerHTML += tableHTML;
    msgReset();
    document.getElementById("Ssuccess").innerHTML = text;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
  }
}

function msgReset() {
  document.getElementById("Ssuccess").innerHTML = "";
  document.getElementById("Swarning").innerHTML = "";
  document.getElementById("Dwarning").innerHTML = "";
  document.getElementById("Dsuccess").innerHTML = "";
}
// end