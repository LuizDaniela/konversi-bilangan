function convert() {
    const number = document.getElementById('numberInput').value;
    const base = parseInt(document.getElementById('baseInput').value);

    if (!number) {
        alert('Masukkan bilangan yang valid');
        return;
    }

    let decimalValue;
    try {
        decimalValue = parseInt(number, base);
        if (isNaN(decimalValue)) throw 'Invalid number';
    } catch (e) {
        alert('Masukkan bilangan yang valid');
        return;
    }

    document.getElementById('decimalResult').innerText = decimalValue;
    document.getElementById('binaryResult').innerText = decimalValue.toString(2);
    document.getElementById('octalResult').innerText = decimalValue.toString(8);
    document.getElementById('hexResult').innerText = decimalValue.toString(16).toUpperCase();
}