var fs = require("fs");
var buf = new Buffer(1024);

console.log("Opening an existing file");
fs.open('input.txt', 'r+', function(err, fd) {
   if(err) throw err;
   console.log("File opened successfully!!!");
   
   
   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if(err) throw err;
      
      
  
         console.log(buf.slice(0, bytes).toString());
      
   });
});