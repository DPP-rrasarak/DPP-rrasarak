function positiveORnot(str) {
if (str== "") {
return false;
}
var i = 0;
  
  while (i < str.length) {
    if (str[i] < '0' || str[i] > '9') {
      return false; //Not 0-9 = false
    }
    i++;
  }

  return true;
}

// Try me!
document.getElementById('submit-btn').addEventListener('click', function () {
  var leftInput = document.getElementById('left-operand').value;
  var rightInput = document.getElementById('right-operand').value;
  var operator = document.getElementById('operator').value;

  if (!positiveORnot(leftInput) || !positiveORnot(rightInput)) {
    alert('Error :(');
    return;
  }

  var leftNum = parseInt(leftInput);
  var rightNum = parseInt(rightInput);

 //หาร
  if ((operator === '/' || operator === '%') && rightNum === 0) {
    alert("It's over 9000!");
    console.log("It's over 9000!");
    return;
  }

 var result = 0;

  if (operator === '+') {
    result = leftNum + rightNum;
  } else if (operator === '-') {
    result = leftNum - rightNum;
  } else if (operator === '*') {
    result = leftNum * rightNum;
  } else if (operator === '/') {
    result = leftNum / rightNum;
  } else if (operator === '%') {
    result = leftNum % rightNum;
  }

  alert(result);
  console.log(result);
});



setInterval(function () {
  alert('Please, use me...');
}, 30 * 1000); //milli
