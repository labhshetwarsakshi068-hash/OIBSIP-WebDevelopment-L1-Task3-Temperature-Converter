
const temperatureInput = document.getElementById("temperature");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const convertBtn = document.getElementById("convertBtn");
const clearBtn = document.getElementById("clearBtn");
const result = document.getElementById("result");

// Convert temperature to Celsius first
function toCelsius(value, unit) {
    if (unit === "C") {
        return value;
    }

    if (unit === "F") {
        return (value - 32) * 5 / 9;
    }

    if (unit === "K") {
        return value - 273.15;
    }
}

// Convert Celsius to the selected unit
function fromCelsius(value, unit) {
    if (unit === "C") {
        return value;
    }

    if (unit === "F") {
        return (value * 9 / 5) + 32;
    }

    if (unit === "K") {
        return value + 273.15;
    }
}

// Convert button
convertBtn.addEventListener("click", function () {
    const value = parseFloat(temperatureInput.value);
    const from = fromUnit.value;
    const to = toUnit.value;

    if (temperatureInput.value.trim() === "" || !Number.isFinite(value)) {
        result.textContent = "Please enter a valid temperature.";
        return;
    }

    // Temperatures below absolute zero are invalid
    const celsius = toCelsius(value, from);

    if (celsius < -273.15) {
        result.textContent = "Temperature cannot be below absolute zero.";
        return;
    }

    const convertedValue = fromCelsius(celsius, to);
    const unitNames = {
        C: "°C",
        F: "°F",
        K: "K"
    };

    result.textContent =
        `${value} ${unitNames[from]} = ${convertedValue.toFixed(2)} ${unitNames[to]}`;
});

// Clear button
clearBtn.addEventListener("click", function () {
    temperatureInput.value = "";
    fromUnit.value = "C";
    toUnit.value = "F";
    result.textContent = "Your result will appear here";
});

