function calculateFare() {
    let distance = document.getElementById("distance").value;
    let ratePerKm = 10;  // 10 currency per km
    let fare = distance * ratePerKm;

    document.getElementById("result").innerHTML = 
        "Estimated Fare: ₹ " + fare;
}

function contact() {
    alert("Driver will contact you shortly!");
}
function calculateTime() {
    let distance = document.getElementById("distance").value;
    let speed = document.getElementById("speed").value;

    if (distance && speed) {
        let time = distance / speed;
        document.getElementById("output").innerHTML =
            "Travel Time: " + time.toFixed(2) + " hours";
    } else {
        document.getElementById("output").innerHTML =
            "Please enter Distance and Speed";
    }
}

function calculateDistance() {
    let time = prompt("Enter Time (hours):");
    let speed = document.getElementById("speed").value;

    if (time && speed) {
        let distance = time * speed;
        document.getElementById("output").innerHTML =
            "Distance: " + distance.toFixed(2) + " km";
    } else {
        document.getElementById("output").innerHTML =
            "Please enter Speed and Time";
    }
}
// Dummy Bus Database
let busDatabase = [
  {
    from: "Chennai",
    to: "Bangalore",
    busName: "TN Super Fast",
    busNumber: "TN-01-1234",
    busType: "AC Sleeper",
    departure: "06:00 AM",
    arrival: "12:00 PM",
    fare: 750
  },
  {
    from: "Chennai",
    to: "Hyderabad",
    busName: "South Express",
    busNumber: "TN-09-5678",
    busType: "Non-AC",
    departure: "08:00 AM",
    arrival: "06:00 PM",
    fare: 900
  },
  {
    from: "Bangalore",
    to: "Hyderabad",
    busName: "Karnataka Deluxe",
    busNumber: "KA-05-2468",
    busType: "AC Seater",
    departure: "07:00 AM",
    arrival: "03:00 PM",
    fare: 850
  }
];
function showBus() {

  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;

  let found = false;

  for (let i = 0; i < busDatabase.length; i++) {

    if (busDatabase[i].from === from && busDatabase[i].to === to) {

      document.getElementById("result").innerHTML =
        "Bus Name: " + busDatabase[i].busName + "<br>" +
        "Bus Number: " + busDatabase[i].busNumber + "<br>" +
        "Bus Type: " + busDatabase[i].busType + "<br>" +
        "Departure: " + busDatabase[i].departure + "<br>" +
        "Arrival: " + busDatabase[i].arrival + "<br>" +
        "Fare: ₹ " + busDatabase[i].fare;

      found = true;
      break;
    }
  }

  if (!found) {
    document.getElementById("result").innerHTML =
      "No bus available for selected route.";
  }
}
let busDatabase = [
  {
    from: "Chennai",
    to: "Bangalore",
    busName: "TNSTC Ultra Deluxe",
    busNumber: "TN-01-N-1456",
    busType: "Ultra Deluxe",
    departure: "07:00 AM",
    arrival: "01:30 PM",
    fare: 680
  }
];
