"use strict";

// Render HTML
function renderCoffee(coffee) {
    var html = '<div class="list-group-item col-md-6">';
    html += '<h3>' + coffee.name + '</h3>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

// Sort array by ids in ascending order
function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

// Filter array by select option
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (selectedRoast === "all") {
            div.innerHTML = renderCoffees(coffees);
        }else if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
            div.innerHTML = renderCoffees(filteredCoffees);
        }
    });
}

// Real time search results
function updateResult(query) {
    var resultList = document.querySelector("#coffees");
    resultList.innerHTML = "";

    coffees.map(function(coffee){
        query.split(" ").map(function (word) {
            if(coffee.name.toLowerCase().indexOf(word.toLowerCase()) != -1){
                console.log(coffee.name);
                resultList.innerHTML += '<div class="list-group-item col-md-6"><h3>' + coffee.name + '</h3><p>' + coffee.roast + '</p></div>';
            }
        })
    })
}


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

// Add coffee to array
function newCoffee(e){
    e.preventDefault();
    coffees.push({id: coffees.length, name: inputCoffee.value, roast: roastSelection2.value });
    console.log(coffees);
    div.innerHTML = renderCoffees(coffees);
}

var div = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var roastSelection2 = document.querySelector('#roast-selection2');
var submitButtonAdd = document.querySelector('#addCoffee');
var inputCoffee = document.getElementById("userInput2");

div.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

submitButtonAdd.addEventListener('click', newCoffee);