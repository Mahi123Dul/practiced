function displaySum() {
  let firstNum = parseFloat(document.getElementById('firstNumInput').value);
  let secondNum = parseFloat(document.getElementById('secondNumInput').value);
  
  if (isNaN(firstNum) || isNaN(secondNum)) {
    document.getElementById("result").innerText = "Please enter valid numbers.";
  } else {
    let total = firstNum + secondNum;
    document.getElementById("result").innerText = `The sum of ${firstNum} and ${secondNum} is: ${total}`;
  }
}

document.getElementById('sumButton').addEventListener("click", displaySum);

