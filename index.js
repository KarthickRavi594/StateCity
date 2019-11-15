var country = require('./country');
var State_Names = [];
var City_Names = [];

function seperate_filter(){
    country.country.states.find(x => {
        State_Names.push(x.name_state);
        City_Names.push(x.city);
    })
}

seperate_filter();

let Country = {
    countryName : country.country.name,
    State_Names : State_Names,
    City_Names : City_Names
}

console.log('State Name -> ',Country);