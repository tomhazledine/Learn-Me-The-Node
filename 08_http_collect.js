var http = require('http');

var url = process.argv[2];

var my_result = http.get(url,url_response);

my_result.on('error', console.error);

function url_response(response){

    // console.log(response);
    
    var raw_data = '';

    response.on('error',function (err){
        console.log(err);
        return;
    });

    response.on('data',function (data){
        var site_data = data.toString();
        raw_data += site_data;
        return;
    });

    response.on('end',function (){
        console.log(raw_data.length);
        console.log(raw_data);
    });
}