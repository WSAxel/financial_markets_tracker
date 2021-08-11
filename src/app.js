fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-quotes?region=US&symbols=%5EIXIC", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "038fbcf8a8msh4138d84dbdf5692p17be95jsnb9214089f04a",
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
    }
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })

    .catch(err => {
        console.error(err);
    });