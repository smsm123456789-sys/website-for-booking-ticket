document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const departureDate = document.getElementById('departure-date').value;
    const returnDate = document.getElementById('return-date').value;
    const passengers = document.getElementById('passengers').value;
  
    const flights = [{airline: "الطيران الوطني", from, to, departureDate, returnDate, price: "500 ريال"}];
    const flightsList = document.getElementById('flights-list');
    flightsList.innerHTML = flights.map(flight => `<li>${flight.airline} - ${flight.from} إلى ${flight.to} - ${flight.price}</li>`).join('');
  });
  