document
  .getElementById("bookingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission for now
    alert("Booking request submitted!"); // Replace with your actual booking logic
  });

function changeBackground() {
  var selectedPlanet = document.getElementById("destination").value;
  document.body.style.backgroundImage = `url('${selectedPlanet}.jpg')`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
}
