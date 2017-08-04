var dir_path = process.argv[2];
var extension = process.argv[3];

var my_module_call = require('./06_module');

my_module_call(dir_path, extension, module_result);

function module_result(err,data){
    if (err) {
        console.log(err);
    }
    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
    }
}