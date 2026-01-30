// 1. Even or Odd Checker
function checkEvenOdd() {
    const input = document.getElementById("numInput");
    const resultDiv = document.getElementById("evenOddResult");
    
    const num = Number(input.value);
    
    if (isNaN(num)) {
        resultDiv.innerHTML = "Please enter a valid number.";
        resultDiv.style.color = "red";
        return;
    }
    
    if (num % 2 === 0) {
        resultDiv.innerHTML = `${num} is an <strong>even</strong> number.`;
        resultDiv.style.color = "#27ae60";
    } else {
        resultDiv.innerHTML = `${num} is an <strong>odd</strong> number.`;
        resultDiv.style.color = "#e74c3c";
    }
}

// 2. Multiplication Table Generator
function printMultiplicationTable(num) {
    let output = "";
    for (let i = 1; i <= 10; i++) {
        output += `${num} x ${i} = ${num * i}\n`;
    }
    document.getElementById("tableOutput").textContent = output;
}

// 3. FizzBuzz
function runFizzBuzz() {
    let output = "";
    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            output += "FizzBuzz\n";
        } else if (i % 3 === 0) {
            output += "Fizz\n";
        } else if (i % 5 === 0) {
            output += "Buzz\n";
        } else {
            output += i + "\n";
        }
    }
    document.getElementById("fizzBuzzOutput").textContent = output;
}

// 4. Right-Angled 
function printTriangle(n) {
    let pattern = "";
    for (let i = 1; i <= n; i++) {
        // Method 1: repeat()
        pattern += "*".repeat(i) + "\n";
        
        // Method 2: Nested loops 
    }
    document.getElementById("triangleOutput").textContent = pattern;
}