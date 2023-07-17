// Write your JavaScript code here!

window.addEventListener("load", function() {
    let faultList = document.getElementById('faultyItems')
    let pilotInput = document.getElementsByName[0]('pilotName')
    let copilotInput = document.getElementsByName[0]('copilotName')
    let fuelInput = document.getElementsByName[0]('fuelLevel')
    let cargoInput = document.getElementsByName[0]('cargoMass')

    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        console.log("submit");
        formSubmission(document, faultList, pilotInput.value, copilotInput.value, fuelInput.value, cargoInput.value); 
    });



   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});

