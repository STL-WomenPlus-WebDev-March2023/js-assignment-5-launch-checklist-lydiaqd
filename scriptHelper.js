// Write your helper functions here!
//require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

    let target = document.getElementById("missionTarget")
    target.innerHtml = 

                `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`
}

//"Empty" = "zero or more whitespaces", 
//"Not a Number" = "isNaN(...) returns true", 
//"Is a Number" = "isNaN(...) returns false"

function validateInput(testInput) {
///Empty
if (testInput.trim() == "") {
 return "Empty"
 }
///NaN
else if (isNaN(testInput) === true) {
 return "Not a Number"
 }
///Number
else if (isNaN(testInput) === false) {
 return "Is a Number"
 }
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   //loop through elements, pass elements to validate Input, push to array?
   let faultList = document.getElementById('faultyItems')
   let pilotInput = document.getElementById('pilotName')
   let copilotInput = document.getElementsByName('copilotName')[0]
   let fuelInput = document.getElementsByName('fuelLevel')[0]
   let cargoInput = document.getElementsByName('cargoMass')[0]
   let pilotName = validateInput(pilot);
   let launchStatus = document.getElementById("launchStatus")
   let fuelStatus = document.getElementById("fuelStatus")
   let cargoStatus = document.getElementById("cargoStatus")

   if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
    alert("Inputs cannot be empty");
    return
   }

   if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
    alert("Pilot and copilot cannot be numbers");
    return
   }

   if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
    alert("Fuel level and cargo levels must be numbers");
    return
   }

   if (fuelInput.value < 10000) {
    faultyItems.style.visibility = "visible"
    fuelStatus.innerText = `There is not enough fuel for the journey`
    launchStatus.innerText = "Shuttle not ready for launch"
    launchStatus.style.color = "red"
    return
   }

   if (cargoInput.value > 10000) {
    faultyItems.style.visibility = "visible"
    cargoStatus.innerText = `There is too much mass for the shuttle to take off.`
    launchStatus.innerText = "Shuttle not ready for launch"
    launchStatus.style.color = "#C7254E"
    return
   }

   if (cargoInput.value <= 10000 && fuelInput.value > 10000) {
    launchStatus.innerText = "Shuttle is ready for launch"
    launchStatus.style.color = "#419F6A"
    return
   }

   document.getElementById("pilotStatus").innerText = `Pilot ${pilotInput.value} Ready`
   document.getElementById("copilotStatus").innerText = `Co-pilot ${copilotInput.value} Ready`
};

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        return response.json()});
    return planetsReturned;
}

function pickPlanet(planets) {
   return planets[Math.floor(Math.random() * planets.length)]
}

//module.exports.addDestinationInfo = addDestinationInfo;
//module.exports.validateInput = validateInput;
//module.exports.formSubmission = formSubmission;
//module.exports.pickPlanet = pickPlanet; 
//module.exports.myFetch = myFetch;