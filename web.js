
var fs=require ('fs');
var buf=new Buffer();
 buf=fs.readFileSync('index.html');
buf.toString("utf-8");
