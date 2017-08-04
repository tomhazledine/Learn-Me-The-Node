var fs = require('fs');

var file_path = process.argv[2];

var file_contents_buffer = fs.readFileSync(file_path);

var file_contents_string = file_contents_buffer.toString();

// console.log(file_contents_string);
console.log(file_contents_string.split('\n').length - 1);