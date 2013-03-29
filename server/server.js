/**
 * @author: chhetrisushil
 * @date: 3/27/13
 * @time: 1:01 PM
 */
var express = require('express'),
    fs = require('fs'),
    app = express();

// Handle root, serve index.html on root
app.get('/', function (req, res) {
    fs.readFile('./index.html', function (err, data) {
        if (err) {
            return res.end('Error loading index.html');
        }
        res.end(data);
    });
});

// Map the static files
app.use('/css', express.static('./css')); //servers static files
app.use('/js', express.static('./js')); //servers static files

// Make the app address as http://local.coffee:2001
app.listen(2001, 'local.coffee');