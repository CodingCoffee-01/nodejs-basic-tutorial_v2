//var buf = new Buffer('Simply Easy Learning');
buf=Buffer.from('Simply Easy Learning');
var json = buf.toJSON(buf);

console.log(json);
