const http = require("http");
 
http.createServer(function(request, response){
     
    response.end("Hello world!");
}).listen(3000);

const osmosis = require('osmosis');

osmosis
    .get('https://www.google.com/search?q=webscraping&rlz=1C1SQJL_enUA897UA897&oq=webscraping&aqs=chrome..69i57j0l7.5612j0j7&sourceid=chrome&ie=UTF-8')
    .find('#center_col')
    .set({'related': ['.card-section .brs_col p a']})
    .data(function(data) {
        console.log(data);
    })