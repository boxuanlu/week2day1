var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')

  .on('error', function(err) {
    if (err) {
      throw err;
    }
  })
  .on('end', function(i) {
    console.log('done')
  })
  .on('response', function(response) {

    console.log('Response Status Code:', response.statusMessage)
    console.log(response.headers['content-type']);
    console.log("downloading");


  })

  .pipe(fs.createWriteStream('./future.jpg'));
