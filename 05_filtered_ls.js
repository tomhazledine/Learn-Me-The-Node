var fs = require('fs');
var path = require('path');

var dir_path = process.argv[2];
var extension = process.argv[3];

fs.readdir(dir_path,list_files);

function list_files(err,result){
    if (err) {
        return console.log(err)
    }
    for (var i = 0; i < result.length; i++) {
        var file_extension = path.extname(result[i]);
        if (file_extension === '.' + extension) {
            console.log(result[i]);
        }

    }
}