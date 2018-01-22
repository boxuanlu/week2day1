module.exports = function getHTML(options, callback) {
  var https = require('https');
  https.get(options, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(chunk) {
      var data = '';
      data += chunk.toString();
      callback(data);
    });
  });

};
