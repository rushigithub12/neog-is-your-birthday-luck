const birthDate = document.querySelector("#birthDate");
const luckyNo = document.querySelector("#luckNo");
const checkBtn = document.querySelector("#btnCheck");
const outputBox = document.querySelector("#outputbox");

checkBtn.addEventListener("click", checkLuckyBirth);

function checkLuckyBirth() {
  const luckNumber = Number(luckyNo.value);
  const bDate = birthDate.value;
  const sum  = calculateSum(bDate);
  
  if(sum && luckNumber) {
    showMessage(sum, luckNumber);
  } else {
    outputBox.innerText = "Enter both fields 😡";
  }
}

function showMessage(sum, luckNo) {
  if(sum % luckNo === 0) {
    outputBox.innerText = "You birthday is lucky 🎊😎";
  } else {
    outputBox.innerText = "You birthday is not lucky 😥";
  }
}

function calculateSum(bDate) {
  bDate = bDate.replaceAll("-", "");
  let sum = 0 ;
  for(let i=0; i<bDate.length; i++) {
    sum += Number(bDate.charAt(i));
  }
    return sum;
  
}