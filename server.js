var app = require('./config/express')();
var config = require('./config/config');

if (process.env.NODE_ENV === 'dev') {
	
	// ONLY ON DEV ENV
	var morgan = require('morgan');
	var uglify = require('uglify-js');
	var fs = require('fs');

	// logger
	app.use(morgan('dev'));

	// minify js files
	var uglified = uglify.minify([
			'./public/js/core/application.js',
			'./public/js/core/application-config.js',
			'./public/js/core/application-run.js',
			'./public/js/services/common-services.js',
			'./public/js/controllers/home-controller.js'
		], {
		mangle: false,
		compress: {
			sequences: true,
			dead_code: true,
			conditionals: true,
			booleans: true,
			unused: true,
			if_return: true,
			join_vars: true,
			drop_console: true
		},
		outSourceMap: "application.min.js.map"
	});

	fs.writeFileSync('./public/js/application.min.js', uglified.code);
}

// listen
app.listen(config.server.port, function (err) {
	if (err) throw err;

	console.info('Application running at port: ' + config.server.port);
});