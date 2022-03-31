function searchAPI() {
    let keyword = document.getElementById("idMedia").value.replace(" ", "%20");
    const settings = {
        "async": true,
        "crossDomain": true,
        // "url": "https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=hulu&type=movie&genre=18&page=1&keyword=" + keyword + "&output_language=en&language=en",
        "url": "https://api.flixed.io/v1/streaming-providers?apiKey=<apiKey>",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
            "x-rapidapi-key": "ab64c10c89mshab8c24dd2d9c5f7p1676f4jsne83727335602"
        }
    };


    $.ajax(settings).done(function (response) {
        console.log(settings.url)

        // console.log(response)
        const responseArr = parseAPIResponse(response);
        printResponse(responseArr)
    });
}

function parseAPIResponse(response) {
    return JSON.parse(response)
}

function printResponse(responseArr) {
    // responseArr.forEach(response => console.log(response))
    // console.log(responseArr.results[0].originalTitle)
    responseArr.results.forEach(result => console.log(result.originalTitle))
}
