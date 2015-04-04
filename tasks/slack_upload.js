/*
 * grunt-slack-upload
 * https://github.com/crossorigin/grunt-slack-upload
 *
 * Copyright (c) 2015 CrossOrigin
 * Licensed under the MIT license.
 */

'use strict';

var Slack = require('node-slack-upload');
var fs = require('fs');

module.exports = function (grunt) {

	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks

	grunt.registerMultiTask('slack_upload', 'Upload files to Slack', function () {
		// No default options.
		var options = this.options();

		// Check if Slack token is provided
		if (!options.token) {
			grunt.log.error('Slack token must be provided');
			return 1;
		}
		if (options.file) {
			grunt.log.debug('reading file %s', options.file);
			options.file = fs.createReadStream(options.file);
		}

		var slack = new Slack(options.token);
		delete options.token;

		var done = this.async();
		slack.uploadFile(options, done);
	});

};
