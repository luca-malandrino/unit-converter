const feetEl = document.getElementById("feet");
const gallonsEl = document.getElementById("gallons");
const poundsEl = document.getElementById("pounds");

document.querySelector("button").addEventListener("click", () => {
  const startingNum = Number(document.getElementById("starting-num").value);

  const feet = startingNum * 3.281;
  const gallons = startingNum * 0.264;
  const pounds = startingNum * 2.204;

  feetEl.textContent = feet.toFixed(3) + " ft";
  gallonsEl.textContent = gallons.toFixed(3) + " gal";
  poundsEl.textContent = pounds.toFixed(3) + " lbs";
})