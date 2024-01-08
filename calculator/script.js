let result = document.getElementById('result');

function appendToResult(value) {
  result.value += value;
}

function clearResult() {
  result.value = '';
}

function backspace() {
  result.value = result.value.slice(0, -1);
}

function calculate() {
  let expression = result.value;
  let operands = expression.split(/[\+\-\*\/]/);
  let operator = expression.match(/[\+\-\*\/]/);
  let operand1 = parseFloat(operands[0]);
  let operand2 = parseFloat(operands[1]);
  let resultValue;

  switch (operator[0]) {
    case '+':
      resultValue = operand1 + operand2;
      break;
    case '-':
      resultValue = operand1 - operand2;
      break;
    case '*':
      resultValue = operand1 * operand2;
      break;
    case '/':
      resultValue = operand1 / operand2;
      break;
  }

  result.value = resultValue;
}
