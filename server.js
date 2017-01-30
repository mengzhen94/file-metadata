var express = require('express')
var app = express()
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

var routes = require('./app/routes/index.js')
var api = require('./app/api/file-metadata.js')






  routes(app);
	api(app, upload);

	var port = process.env.PORT || 8080; 
	app.listen(port, function() {
    	console.log("File-Metadata App listening on port "+ port)
	});






