var fs = require("fs");

console.log("Writing into existing file");
fs.writeFile('input.txt', 'hii', function(err) {
   if (err) {
      return console.error(err);
   }
   
   console.log("Data written successfully!!!!!");
   
   fs.readFile('input.txt', function (err, data) {
      if(err) throw err;
      console.log("Newly written data: " + data.toString());
   });
});