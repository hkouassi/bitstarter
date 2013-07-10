#!/usr/bin/env node
var fs=require('fs');
var buf=new Buffer(100);
 buf=fs.readFileSync('./index.html');
buf.toString("utf-8");
