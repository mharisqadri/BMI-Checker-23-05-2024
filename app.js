let weightEl = document.querySelectorAll(".weight-input")[0];
let heightEl = document.querySelectorAll(".height-input")[0];
// let heightInMSQ = height.value*height.value;

function bmiCalc() {
    let weight = Number(weightEl.value);
    let height = Number(heightEl.value * 0.0254);
    let bmi = weight / (height * height);
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert("Please write Correct Value")
        weightEl.value = "";
        heightEl.value = "";
        return;
    }
    else {
        return displayBmi(bmi.toFixed(2));
    }
}

let bmiEl = document.querySelectorAll(".bmi-display")[0];
let bmiCatEl = document.querySelectorAll(".bmi-category")[0];
let learnEl = document.querySelectorAll("#learn-more")[0];
let matterEl = document.querySelectorAll("#matter-div")[0];
function displayBmi(bmi) {
    bmiEl.innerHTML =
        `<p>
    Your BMI is = <strong>${bmi}</strong></p>`
    if (bmi < 18.5) {
        bmiCatEl.innerHTML = `<p>You are <strong>Underweight.</strong></p>`
    }
    else if (bmi >= 18.6 && bmi <= 24.9) {
        bmiCatEl.innerHTML = `<p>Your weight is <strong>Normal.</strong></p>`
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        bmiCatEl.innerHTML = `<p>You are <strong>Overweight.</strong></p>`
    }
    else if (bmi >= 30) {
        bmiCatEl.innerHTML = `<p>You are <strong>Obesity.</strong></p>`
    }
    learnEl.innerHTML;
    learn();
}

function learn() {
    learnEl.className = "show"
    matterEl.className = "hide"
}

function matter() {
    learnEl.className = "hide"
    matterEl.className = "show"
}