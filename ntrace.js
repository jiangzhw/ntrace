#!/usr/bin/env node

var util = require('util');
var argv = require('optimist').argv;
var http = require('http');
var colors = require('colors');

var siteUrl = argv.url;
var sitePort;

if (argv.https === 'yes') {
	sitePort = 443;
} else {
	sitePort = 80;
}

var options = {
	host: siteUrl,
	port: sitePort,
	path: '/',
	headers: {
		'CustomHeaderCheck': '1337'
	},
	method: 'TRACE'
};

if (siteUrl) {
	try {
		var req = http.request(options, function(res) {
			if (res.statusCode === 200) {
				var headers = res.headers;
				// Check to see if the response includes the custom header we sent
				// If it does, then the site is vulnerable to XST
				if (headers.CustomHeaderCheck) {
					console.log('VULNERABLE: Site responded with our custom header meaning it is susceptible to XST attacks'.red);
				} else {
					console.log('SAFE: This site does not appear to be susceptible to XST'.green);
				}
			} else {
				console.log('SAFE: This site does not appear to be susceptible to XST'.green);
			}

			res.on('data', function(chunk) {

			});
		});

		req.on('error', function(e) {
			console.log('There was a problem with the request, which might mean TRACE is not supported.'.yellow);
			console.log('To be safe, try the request again and change the --https flag'.yellow);
			console.log('Error:'.yellow + ' \"' + e.message + '\"');
		});

		req.end();
	} catch (err) {
		console.log(err);
	}
} else {
	console.log('Missing parameters --url and --https (Ex: --url=www.site.com --https=no'.red);
}