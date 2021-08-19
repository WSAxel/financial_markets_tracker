
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
        let nasdaqName = data['quoteResponse']['result']['0']['shortName'];
        let nasdaqPercent = data['quoteResponse']['result']['0']['regularMarketChangePercent'];
        nasdaqPercent = nasdaqPercent.toString().slice(0, 5);
        let nasdaqPrice = data['quoteResponse']['result']['0']['regularMarketPrice'];

        let spName = data['quoteResponse']['result']['1']['shortName'];
        let spPercent = data['quoteResponse']['result']['1']['regularMarketChangePercent'];
        spPercent = spPercent.toString().slice(0, 5)
        let spPrice = data['quoteResponse']['result']['1']['regularMarketPrice'];

        let dowName = data['quoteResponse']['result']['2']['shortName'];
        let dowPercent = data['quoteResponse']['result']['2']['regularMarketChangePercent'];
        dowPercent = dowPercent.toString().slice(0, 5)
        let dowPrice = data['quoteResponse']['result']['2']['regularMarketPrice'];

        let daxName = data['quoteResponse']['result']['3']['shortName'];
        let daxPercent = data['quoteResponse']['result']['3']['regularMarketChangePercent'];
        daxPercent = daxPercent.toString().slice(0, 5)
        let daxPrice = data['quoteResponse']['result']['3']['regularMarketPrice'];

        let osbName = data['quoteResponse']['result']['4']['shortName'];
        let osbPercent = data['quoteResponse']['result']['4']['regularMarketChangePercent'];
        osbPercent = osbPercent.toString().slice(0, 5)
        let osbPrice = data['quoteResponse']['result']['4']['regularMarketPrice'];

        let nikName = data['quoteResponse']['result']['5']['shortName'];
        let nikPercent = data['quoteResponse']['result']['5']['regularMarketChangePercent'];
        osbPercent = osbPercent.toString().slice(0, 5)
        let nikPrice = data['quoteResponse']['result']['5']['regularMarketPrice'];

        document.getElementById("nasdaq").innerHTML= nasdaqName+" "+nasdaqPercent+" "+nasdaqPrice;
        document.getElementById("s&p500").innerHTML= spName+" "+spPercent+" "+spPrice;
        document.getElementById("dowJones").innerHTML= dowName+" "+dowPercent+" "+dowPrice;
        document.getElementById("dax").innerHTML= daxName+" "+daxPercent+" "+daxPrice;
        document.getElementById("osebx").innerHTML= osbName+" "+osbPercent+" "+osbPrice;
        document.getElementById("nikkei").innerHTML= nikName+" "+nikPercent+" "+nikPrice;
    })

/*fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-quotes?region=US&symbols=%5EIXIC%2C%5EGSPC%2C%5EDJI%2C%5EGDAXI%2COSEBN.OL%2C%5EN225", {
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

    }) */
const stockChartValueXFunction = [];
const stockChartValueYFunction = [];
/*   Maybe use later
fetch("https://alpha-vantage.p.rapidapi.com/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=FB&outputsize=compact&datatype=json", {
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
console.log(stockChartValueYFunction, " Y"); */


