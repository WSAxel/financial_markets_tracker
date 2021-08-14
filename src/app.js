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
            /*let ul = document.getElementById("ticker")
            let li = document.createElement("list")

            li.appendChild(document.createTextNode(data['quoteResponse']['result'][''+i+'']['shortName']));
            ul.appendChild(li); */
            var text;
            text += "<li>"+data['quoteResponse']['result'][''+i+'']['shortName']+"</li>";


        }
        document.getElementById("ticker").innerHTML=text;


    })
