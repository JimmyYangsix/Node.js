var sloves = require('./slove.js');
process.stdout.write('请输入项目名称(尽量用英文)\n');
process.stdin.resume();
process.stdin.on('data', (chunk) => {
    var inputbf = new Buffer(chunk.length-2);
    chunk.copy(inputbf,0,0,chunk.length-2);
    var proname = inputbf.toString()   
    sloves(proname);
    console.log("Successful!");   
    process.exit(); 
});
