function convertTemperature() {
    const temperatureInput = document.getElementById("temperature").value;
    const unit = document.getElementById("unit").value;
    let result;

    if (unit === "celsius") {
        result = (temperatureInput * 9/5) + 32;
    } else {
        result = (temperatureInput - 32) * 5/9;
    }

    document.getElementById("result").innerHTML = `Result: ${result.toFixed(2)}° ${unit}`;
}
