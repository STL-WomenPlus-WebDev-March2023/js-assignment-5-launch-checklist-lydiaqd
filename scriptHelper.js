// Write your helper functions here!
require('isomorphic-fetch');
window.addEventListener ("load", function(){

})

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
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
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

//module.exports.addDestinationInfo = addDestinationInfo;
//module.exports.validateInput = validateInput;
//module.exports.formSubmission = formSubmission;
//module.exports.pickPlanet = pickPlanet; 
//module.exports.myFetch = myFetch;

const pilotName = document.getElementById('pilotStatus')
const copilotName = document.getElementById('copilotStatus')
const fuel = document.getElementById('fuelStatus')
const cargoMass = document.getElementById('cargoStatus')