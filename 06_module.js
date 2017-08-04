var fs = require('fs');
var path = require('path');

function filtered_list(dir, ext, callback) {

    fs.readdir(dir,list_files);

    function list_files(err,result){
        
        new_err = null;
        new_data = [];
        
        if (err) {
            return callback(err);
        }
        
        for (var i = 0; i < result.length; i++) {
            var file_extension = path.extname(result[i]);
            if (file_extension === '.' + ext) {
                new_data.push(result[i]);
            }

        }

        callback(new_err,new_data);
    }
}

module.exports = filtered_list;