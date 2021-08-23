/*
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
        if (nasdaqPercent <= 0){document.getElementById("nasdaqchange").classList.add("negative")}
        else {document.getElementById("nasdaqchange").classList.add("positive")}
        let nasdaqPrice = data['quoteResponse']['result']['0']['regularMarketPrice'];

        let spName = data['quoteResponse']['result']['1']['shortName'];
        let spPercent = data['quoteResponse']['result']['1']['regularMarketChangePercent'];
        spPercent = spPercent.toString().slice(0, 5);
        if (spPercent <= 0){document.getElementById("s&p500change").classList.add("negative")}
        else {document.getElementById("s&p500change").classList.add("positive")}
        let spPrice = data['quoteResponse']['result']['1']['regularMarketPrice'];

        let dowName = data['quoteResponse']['result']['2']['shortName'];
        let dowPercent = data['quoteResponse']['result']['2']['regularMarketChangePercent'];
        dowPercent = dowPercent.toString().slice(0, 5);
        if (dowPercent <= 0){document.getElementById("dowjoneschange").classList.add("negative")}
        else {document.getElementById("dowjoneschange").classList.add("positive")}
        let dowPrice = data['quoteResponse']['result']['2']['regularMarketPrice'];

        let daxName = data['quoteResponse']['result']['3']['shortName'];
        let daxPercent = data['quoteResponse']['result']['3']['regularMarketChangePercent'];
        daxPercent = daxPercent.toString().slice(0, 5);
        if (daxPercent <= 0){document.getElementById("daxchange").classList.add("negative")}
        else {document.getElementById("daxchange").classList.add("positive")}
        let daxPrice = data['quoteResponse']['result']['3']['regularMarketPrice'];

        let osbName = data['quoteResponse']['result']['4']['shortName'];
        let osbPercent = data['quoteResponse']['result']['4']['regularMarketChangePercent'];
        osbPercent = osbPercent.toString().slice(0, 5);
        if (osbPercent <= 0){document.getElementById("osebxchange").classList.add("negative")}
        else {document.getElementById("osebxchange").classList.add("positive")}
        let osbPrice = data['quoteResponse']['result']['4']['regularMarketPrice'];

        let nikName = data['quoteResponse']['result']['5']['shortName'];
        let nikPercent = data['quoteResponse']['result']['5']['regularMarketChangePercent'];
        nikPercent = osbPercent.toString().slice(0, 5);
        if (nikPercent <= 0){document.getElementById("nikkeichange").classList.add("negative")}
        else {document.getElementById("nikkeichange").classList.add("positive")}
        let nikPrice = data['quoteResponse']['result']['5']['regularMarketPrice'];

        document.getElementById("nasdaq").innerHTML= nasdaqName;
        document.getElementById("nasdaqchange").innerHTML= nasdaqPercent+"%";
        document.getElementById("nasdaqprice").innerHTML= nasdaqPrice+"";
        document.getElementById("s&p500").innerHTML= spName;
        document.getElementById("s&p500change").innerHTML=spPercent+"%";
        document.getElementById("s&p500price").innerHTML=spPrice;
        document.getElementById("dowJones").innerHTML= dowName;
        document.getElementById("dowjoneschange").innerHTML=dowPercent+"%";
        document.getElementById("dowJonesprice").innerHTML=dowPrice;
        document.getElementById("dax").innerHTML= daxName;
        document.getElementById("daxchange").innerHTML=daxPercent+"%";
        document.getElementById("daxprice").innerHTML=daxPrice;
        document.getElementById("osebx").innerHTML= osbName;
        document.getElementById("osebxchange").innerHTML=osbPercent+"%";
        document.getElementById("osebxprice").innerHTML=osbPrice;
        document.getElementById("nikkei").innerHTML= nikName;
        document.getElementById("nikkeichange").innerHTML=nikPercent+"%";
        document.getElementById("nikkeiprice").innerHTML=nikPrice;
    })*/
$(document).ready(function() {
    $('#optionNAS').hide();

    $('#markets').change(function () {
        if ($('#markets option:selected').text() === "Nasdaq(US)"){
            $('#optionNAS').show();
        }
        else {
            $('#optionNAS').hide();
        }
    });
});
$(document).ready(function() {
    $('#optionNYSE').hide();

    $('#markets').change(function () {
        if ($('#markets option:selected').text() === "NYSE: New York Stock Exchange(US)"){
            $('#optionNYSE').show();
        }
        else {
            $('#optionNYSE').hide();
        }
    });
});
$(document).ready(function() {
    $('#optionFSE').hide();

    $('#markets').change(function () {
        if ($('#markets option:selected').text() === "Frankfurt Stock Exchange(Germany)"){
            $('#optionFSE').show();
        }
        else {
            $('#optionFSE').hide();
        }
    });
});
$(document).ready(function() {
    $('#optionOSL').hide();

    $('#markets').change(function () {
        if ($('#markets option:selected').text() === "Oslo Stock Exchange(Norway)"){
            $('#optionOSL').show();
        }
        else {
            $('#optionOSL').hide();
        }
    });
});
$(document).ready(function() {
    $('#optionTOK').hide();

    $('#markets').change(function () {
        if ($('#markets option:selected').text() === "Tokyo Stock Exchange(Japan)"){
            $('#optionTOK').show();
        }
        else {
            $('#optionTOK').hide();
        }
    });
});
function searchStock() {
    console.log("Funktion kjører");
    let stockSymbol;
    /*if ($('#markets option:selected').text() === "Nasdaq(US)"){
        stockSymbol="AAPL"
    } Fungerer! */
    /*if ($('#optionNAS option:selected').text() === "Apple"){
        stockSymbol="AAPL"
    } */
    /*if (document.getElementsByTagName("option")[0].text === "Apple"){
        console.log("KJØR1");
        stockSymbol= "AAPL";
    } */
    /*if ($('#markets option:selected').text() === "Nasdaq(US)"){
        console.log("KJØR1")
        if ($('#optionNAS option:selected').text === "Apple"){
            console.log("KJØR2")
            stockSymbol = "AAPL"
        }
    } */


    if ($('#optionTOK option:selected').text() === "Toyota Motor"){
        console.log("KJØR1")
        stockSymbol = "TM";
    }
    if ($('#optionTOK option:selected').text() === "Keyence"){
        console.log("KJØR1")
        stockSymbol = "KYCCF";
    }
    if ($('#optionTOK option:selected').text() === "Sony Group"){
        console.log("KJØR1")
        stockSymbol = "SONY";
    }
    if ($('#optionOSL option:selected').text() === "Equinor"){
        console.log("KJØR1")
        stockSymbol = "EQNR";
    }
    if ($('#optionOSL option:selected').text() === "DNB"){
        console.log("KJØR1")
        stockSymbol = "DNBBY";
    }
    if ($('#optionOSL option:selected').text() === "Telenor"){
        console.log("KJØR1")
        stockSymbol = "TELNF";
    }
    if ($('#optionFSE option:selected').text() === "SAP"){
        console.log("KJØR1")
        stockSymbol = "SAP";
    }
    if ($('#optionFSE option:selected').text() === "Volkswagen"){
        console.log("KJØR1")
        stockSymbol = "VWAGY";
    }
    if ($('#optionFSE option:selected').text() === "Siemens"){
        console.log("KJØR1")
        stockSymbol = "SIEGY";
    }
    if ($('#optionNYSE option:selected').text() === "Alibaba Group Holding"){
        console.log("KJØR1")
        stockSymbol = "BABA";
    }
    if ($('#optionNYSE option:selected').text() === "Berkshire Hathaway"){
        console.log("KJØR1")
        stockSymbol = "BRK.B";
    }
    if ($('#optionNYSE option:selected').text() === "J P Morgan Chase & Co"){
        console.log("KJØR1")
        stockSymbol = "JPM";
    }
    if ($('#optionNAS option:selected').text() === "Apple"){
        console.log("KJØR1")
        stockSymbol = "AAPL";
    }
    if ($('#optionNAS option:selected').text() === "Microsoft"){
        console.log("KJØR1")
        stockSymbol = "MSFT";
    }
    if ($('#optionNAS option:selected').text() === "Amazon"){
        console.log("KJØR1")
        stockSymbol = "AMZN";
    }
    console.log(stockSymbol);
    fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-financials?symbol="+stockSymbol+"&region=US", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
            "x-rapidapi-key": "038fbcf8a8msh4138d84dbdf5692p17be95jsnb9214089f04a"
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
}
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


