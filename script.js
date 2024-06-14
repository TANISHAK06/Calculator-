
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const display = document.getElementById('show');
  let resetDisplay = false;
  let lastInputWasOperator = false;

  themeToggle.addEventListener('click', function() {
    body.classList.toggle('light-mode');
  });

  window.appendToDisplay = function(value) {
    if (resetDisplay && !isOperator(value)) {
      display.value = '';
      resetDisplay = false;
    } else if (resetDisplay && isOperator(value)) {
      resetDisplay = false;
    }

    display.value += value;
    lastInputWasOperator = isOperator(value);
  };

  window.clearDisplay = function() {
    display.value = '';
  };

  window.deleteLastChar = function() {
    display.value = display.value.slice(0, -1);
  };

  window.calculateResult = function() {
    try {
      display.value = eval(display.value);
      resetDisplay = true;
    } catch {
      display.value = 'Error';
      resetDisplay = true;
    }
  };

  function isOperator(value) {
    return ['+', '-', '*', '/', '%','.'].includes(value);
  }
});
