var http = require('http');
var bl = require('bl');

var url = process.argv[2];

var my_result = http.get(url,url_response);

my_result.on('error', console.error);

function url_response(response){

    response.pipe(bl(function (err,raw_data) {
        if (err) {
            return console.error(err);
        }

        var data = raw_data.toString();

        console.log(data.length);
        console.log(data);
    }));
}