module.exports = {
	database: {
		url: 'mongodb://admin:iamrelosdbadmin@ds051645.mongolab.com:51645/iamrelos-db' || ''
	},
	server: {
    		port: process.env.PORT || 3000,
    		env: process.env.NODE_ENV || 'dev'
	}
};