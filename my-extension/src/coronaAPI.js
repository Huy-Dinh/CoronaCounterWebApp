export const CoronaAPI = {

    fetchCountryData(country, callBackFunction) {
        fetch('https://corona.lmao.ninja/v2/countries/' + country)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                callBackFunction(data);
            });
    },
    
    fetchWorldData(callBackFunction) {
        return fetch('https://corona.lmao.ninja/v2/all')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            callBackFunction(data);
        });   
    }
};