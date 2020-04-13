"use strict";

const CoronaAPI = {

fetchCountryData(country, callBackFunction) {
    fetch('https://corona.lmao.ninja/countries/' + country)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            callBackFunction(data);
        });
},

fetchWorldData(callBackFunction) {
    return fetch('https://corona.lmao.ninja/all')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        callBackFunction(data);
    });   
}

};