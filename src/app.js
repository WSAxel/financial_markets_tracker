fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-quotes?region=US&symbols=%5EIXIC%2C%5EGSPC%2C%5EDJI%2C%5EGDAXI%2COSEBN.OL%2C%5EN225", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "038fbcf8a8msh4138d84dbdf5692p17be95jsnb9214089f04a",
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
    }
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
        for (let i = 0; i < data['quoteResponse']['result'].length; i++){
            var ticker;
            var last;
            var change;
            ticker += "<li>"+data['quoteResponse']['result'][''+i+'']['shortName']+"</li>";
            last += "<li>"+data['quoteResponse']['result'][''+i+'']['regularMarketPrice']+"</li>"
            change += "<li>"+data['quoteResponse']['result'][''+i+'']['regularMarketChangePercent']+"</li>"
            change = change.slice(0, -11)

        }
        document.getElementById("ticker").innerHTML=ticker
        document.getElementById("last").innerHTML=last;
        document.getElementById("+/-%").innerHTML=change;

    })
var stockChartValueXFunction = [];
var stockChartValueYFunction = [];
fetch("https://alpha-vantage.p.rapidapi.com/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=AAPL&outputsize=compact&datatype=json", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "038fbcf8a8msh4138d84dbdf5692p17be95jsnb9214089f04a",
        "x-rapidapi-host": "alpha-vantage.p.rapidapi.com"
    }
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
        for (var key in data['Time Series (Daily)']){
            stockChartValueXFunction.push(key);
            stockChartValueYFunction.push(data['Time Series (Daily)'][key]['4. close']);
        }
    })
console.log(stockChartValueXFunction," X");
console.log(stockChartValueYFunction, " Y");
var tull = ["6","5","4","3","3"];
var tulle = ["5","4","3","2","1"];
var data = [
    {
        x: tull,
        y: tulle,
        type: 'scatter',
        mode: 'lines+markers',
        marker: {color: 'red'},
    }
];
console.log(data, "Chart dataen");

Plotly.newPlot('graph', data);

