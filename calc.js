const display = document.querySelector('.display');
const keys = document.querySelector('.keys');
keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target;
    const action = key.value;
    const displayedNum = display.value;

    if (action === 'clear') {
      display.value = '';
    }

    if (action === '+' || action === '-' || action === '*' || action === '/') {
      sessionStorage.setItem('operand', displayedNum);
      sessionStorage.setItem('operator', action);
      display.value = '';
    }

    if (action === '=') {
      const operand = Number(sessionStorage.getItem('operand'));
      const operator = sessionStorage.getItem('operator');
      const result = eval(`${operand} ${operator} ${displayedNum}`);
      display.value = result;
    }
}

// if(display
