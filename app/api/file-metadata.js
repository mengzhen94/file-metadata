module.exports = function(app, upload){

	app.post('/get-file-size', upload.any(), function(req, res){
		var size = {
			size : req.files[0].size
		}
		res.send(size)
	})

	
}



