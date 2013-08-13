#!/usr/bin/env node

var util = require('util');
var argv = require('optimist').argv;
var http = require('http');
var colors = require('colors');

var siteUrl = argv.url;
var sslBool = argv.https;
var sitePort;

if (sslBool === 'yes') {
	sitePort = 443;
} else {
	sitePort = 80;
}

var options = {
	host: siteUrl,
	port: sitePort,
	path: '/',
	method: 'TRACE'
};

if (siteUrl) {
	try {
		var req = http.request(options, function(res) {
			if (res.statusCode === 200) {
				console.log('VULNERABLE: Site responded with a 200 Okay and is susceptible to XST'.red)
			} else {
				console.log('SAFE: This site does not appear to be susceptible to XST'.green)
			}

			res.on('data', function(chunk) {

			});
		});

		req.on('error', function(e) {
			console.log('SAFE: \nThere was a problem with the request meaning TRACE is definitely not supported.'.green);
			console.log('Error:'.yellow + ' \"' + e.message + '\"');
		});

		req.end();
	} catch (err) {
		console.log(err);
	}
} else {
	console.log('Missing parameters --url and --https (Ex: --url=www.site.com --https=no'.red);
}