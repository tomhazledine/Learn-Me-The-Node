var http = require('http');

var url = process.argv[2];

var my_result = http.get(url,url_response);

my_result.on('error', console.error);

function url_response(response){

    // console.log(response);

    response.on('error',function (err){
        console.log(err);
        return;
    });

    response.on('data',function (data){
        var site_data = data.toString();
        console.log(site_data);
        console.log('\n---break in stream---\n\n');
        return;
    });    
}

// "Official" solution:

// var http = require('http')

// http.get(process.argv[2], function (response) {
//     response.setEncoding('utf8')
//     response.on('data', console.log)
//     response.on('error', console.error)
// }).on('error', console.error)