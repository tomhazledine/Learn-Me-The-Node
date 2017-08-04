var http = require('http');

var urls = [
    process.argv[2],
    process.argv[3],
    process.argv[4]
];

var results = [
    false,
    false,
    false
];

for (var i = 0; i < urls.length; i++) {
    get_the_data(i);
}

function get_the_data(index) {
    http.get(urls[index],url_response).on('error', console.error);

    function url_response(response){
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
            results[index] = raw_data;
            check_results();
        });
    }
}

function check_results(){
    var valid_results = 0;
    for (var i = 0; i < results.length; i++) {
        if (!results[i]) {
            return;
        }
        valid_results++;
    }
    if (valid_results === 3){
        console.log(results[0]);
        console.log(results[1]);
        console.log(results[2]);
    }
}