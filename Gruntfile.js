module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		advSettings: grunt.file.readYAML('data/advancedSettings.yml'),

		jshint: {
			files: ['source/javascripts/**/*.js'],
			options: {jshintrc: '.jshintrc'}
		},

		clean: {

			build: ['build/javascripts/*'],
			jsLib: ['build/lib']

		},

		uglify: {
			jsLib: {
				files: [{
					expand: true,
					cwd: 'source/lib',
					src:['**/*.js','!**/*.min.js','!**/*-min.js'],
					dest: 'build/lib'
				}]
			}
		},

		concat: {
			options: {
				separator: ';'
			},
			jsLib: {
				src: ['source/lib/**/*.js'],
				dest: 'build/lib/<%= advSettings.appIdentifier %>-lib.min.js'
			}
		}

	});

	// Load plugins.
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-regex-replace');
	grunt.loadNpmTasks('grunt-rename');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('default', [

		//'jshint',
		'clean:build',

		/*
		* Minify and concat external libraries JS using uglify
		*/
		'uglify:jsLib',
		'concat:jsLib',

		/*
		* Minify project JS using require.js
		* - require.js output a .js for with only the viewer and a .js with viewer and builder
		* - concat those .js with lib's JS
		* - perform production mode replacement in JS files
		*/

	]);

};