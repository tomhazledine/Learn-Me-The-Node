var args_count = process.argv.length - 2;
var running_count = 0;
for (var i = 0; i < args_count; i++) {
    running_count += Number(process.argv[i + 2]);
}
console.log(running_count);