






function convertToBinary() {
    const inputNumber = document.getElementById('inputNumber').value;
    const binaryNumber = parseInt(inputNumber).toString(2);
    const resultElement = document.getElementById('result');
    
    resultElement.textContent = `Číslo ${inputNumber} v dvojkové soustavě: ${binaryNumber}`;
}