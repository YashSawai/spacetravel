function submitForm() {
  // Get the values of destination, start date, and return date
  const destination = document.querySelector("select").value;
  const startDate = document
    .getElementById("date1")
    .querySelector("input").value;
  const returnDate = document
    .getElementById("date2")
    .querySelector("input").value;

  // Check if all required fields are set
  if (destination && startDate && returnDate) {
    // Redirect to booking.html with parameters
    window.location.href = `booking.html?destination=${destination}&startDate=${startDate}&returnDate=${returnDate}`;
  } else {
    // Display an alert or any other form of feedback
    alert(
      "Please select destination, start date, and return date before submitting."
    );
  }
}
