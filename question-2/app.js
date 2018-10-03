var fs = require('fs');

var stream = fs.createReadStream("data.txt");

 stream.on("data",function(data){
  console.log(data);
})

// from buffer to string

// let body = '';
// req.on('data', data => {
//   body += stream.toString()
// })

// console.log(body);

// creating a writable string 

const file = fs.createWriteStream('output.txt');

fs.appendFile('output.txt', './data.txt', function (err) {
  if (err) throw err;
  console.log('Saved!');
});