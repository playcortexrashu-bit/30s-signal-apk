function generateSignal() {
  // Number logic
  let number = Math.floor(Math.random() * 10);

  // Big / Small
  let bigSmall = number >= 5 ? "Big" : "Small";

  // Confidence logic
  let r = Math.random();
  let confidence =
    r > 0.7 ? "High" :
    r > 0.4 ? "Medium" : "Low";

  document.getElementById("number").innerText = number;
  document.getElementById("bs").innerText = bigSmall;
  document.getElementById("conf").innerText = confidence;
}

// First run
generateSignal();

// Auto update every 30 seconds
setInterval(generateSignal, 30000);
