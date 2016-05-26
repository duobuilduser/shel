module.exports = function(grunt){
	grunt.registerTask('speak', function(){
		console.log("Im speaking");
	})

	// Project configuration.
	grunt.initConfig({
	  concat: {
		js: {
		  src: ['js/jquery-2.1.4.min.js',
		  'bower_components/angular/angular.min.js',
		  'bower_components/angular-animate/angular-animate.min.js',
		  'bower_components/angular-aria/angular-aria.min.js',
		  'bower_components/angular-material/angular-material.min.js',
		  'bower_components/angular-ui-router/release/angular-ui-router.min.js',
		  'bower_components/angular-material-icons/angular-material-icons.min.js',
		  'bower_components/angular-messages/angular-messages.min.js',
		  'js/directivelibrary.js',
		  'js/controllers/js.js'],
		  dest: 'concat/script.js',
		},
		css: {
		  src: ['bower_components/angular-material/angular-material.min.css',
				'css/child_app_styles.min.css',
				'css/directive_library.css'],
		  dest: 'concat/style.css',
		},
	  },
	  watch: {
		  js: {
			files: ['js/**/*.js'],
			tasks: ['concat:js'],
		  },
		  css: {
			files: ['css/**/*.css'],
			tasks: ['concat:css'],
		  },
		},
		uglify: {
			options: {
				mangle: false
			},
			my_target: {
				files: {
					'dist/script.min.js': ['concat/script.js']
				}
			}
		},
		cssmin: {
		  target: {
			files: [{
			  expand: true,
			  cwd: 'concat/',
			  src: ['*.css', '!*.min.css'],
			  dest: 'dist/',
			  ext: '.min.css'
			}]
		  }
		},
		htmlmin: {                                     // Task
			dist: {                                      // Target
			  options: {                                 // Target options
				removeComments: true,
				collapseWhitespace: true
			  },
			  files: {
				'dist/index.html': 'index.html',
				'dist/partials/add.html': 'partials/add.html',
				'dist/partials/main.html': 'partials/main.html',
				'dist/partials/tabone.html': 'partials/tabone.html'
			  }
			}
		  }

	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');

	grunt.registerTask('default', ['concat', 'watch']);
	grunt.registerTask('minify', ['uglify', 'cssmin','htmlmin']);
}
