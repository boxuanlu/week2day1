var https = require('https');

function getAndPrintHTML (options) {

https.get(options, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(chunk) {
      var data = '';
      data += chunk.toString();

      console.log(data);

    });


  });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};
getAndPrintHTML(requestOptions);
