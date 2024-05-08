
    let firstNumber = '';
    let operator = '';
    let secondNumber = '';
    let currentValue = '0';

    // Function to update display with a new value
    function updateDisplay(value) {
        currentValue = value;
        document.getElementById('display').textContent = value;
    }

    // Function to handle number button clicks
    function handleNumberClick(number) {
        if (currentValue === '0') {
            updateDisplay(number);
        } else {
            updateDisplay(`${currentValue}${number}`);
        }
    }

    // Function to handle operator button clicks
    function handleOperatorClick(op) {
        // Store the first number and the operator
        firstNumber = currentValue;
        operator = op;
        updateDisplay('0');
    }

    // Function to handle equals button click
    function handleEqualsClick() {
        // Store the second number
        secondNumber = currentValue;
        // Perform the operation
        const result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
        // Update the display with the result
        updateDisplay(result.toString());
    }

    // Define the operate function
    function operate(operator, num1, num2) {
        switch (operator) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                if (num2 === 0) {
                    return "Error: Division by zero!";
                } else {
                    return num1 / num2;
                }
            default:
                return "Invalid operator";
        }
    }

    // Add event listeners to number buttons
    for (let i = 0; i <= 9; i++) {
        const btn = document.getElementById(`btn${i}`);
        btn.addEventListener('click', function () {
            handleNumberClick(i);
        });
    }

    // Add event listeners to operator buttons
    const btnAdd = document.getElementById('btnAdd');
    btnAdd.addEventListener('click', function () {
        handleOperatorClick('+');
    });

    const btnSubtract = document.getElementById('btnSubtract');
    btnSubtract.addEventListener('click', function () {
        handleOperatorClick('-');
    });

    const btnMultiply = document.getElementById('btnMultiply');
    btnMultiply.addEventListener('click', function () {
        handleOperatorClick('*');
    });

    const btnDivide = document.getElementById('btnDivide');
    btnDivide.addEventListener('click', function () {
        handleOperatorClick('/');
    });

    // Add event listener to equals button
    const btnEquals = document.getElementById('btnEquals');
    btnEquals.addEventListener('click', function () {
        handleEqualsClick();
    });

    // Add event listener to Clear button
    const btnClear = document.getElementById('btnClear');
    btnClear.addEventListener('click', function () {
        updateDisplay('0');
        firstNumber = '';
        operator = '';
        secondNumber = '';
    });