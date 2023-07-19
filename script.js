// Write your JavaScript code here!

window.addEventListener("load", function() {
    let faultList = document.getElementById('faultyItems')
    let pilotInput = document.getElementById('pilotName')
    let copilotInput = document.getElementsByName('copilotName')[0]
    let fuelInput = document.getElementsByName('fuelLevel')[0]
    let cargoInput = document.getElementsByName('cargoMass')[0]

    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        console.log("submit");
        formSubmission(document, faultList, pilotInput.value, copilotInput.value, fuelInput.value, cargoInput.value); 
    });

   let listedPlanetsResponse = myFetch()

   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanets
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let planetSelection = pickPlanet(listedPlanets)
       addDestinationInfo(document, planetSelection.name, planetSelection.diameter, planetSelection.star, planetSelection.distance, planetSelection.moons, planetSelection.image)
   })
});

