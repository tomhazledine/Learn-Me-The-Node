var fs = require('fs');

var file_path = process.argv[2];

var file_contents_buffer = fs.readFile(file_path,count_newlines);

function count_newlines(err,result){
    if (err) {
        return console.log(err)
    }
    var file_contents_string = result.toString();
    console.log(file_contents_string.split('\n').length - 1);
}