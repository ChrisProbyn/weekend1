var args = process.argv.slice(2);

var fs = require("fs");


var filePath = args[0];

var fileData = "Testing asynchronous file write.\n";

fs.writeFile(filePath, fileData, function(err) {
  if (err) {
    throw err;
  }
  console.log("Successfully wrote to", filePath);
});