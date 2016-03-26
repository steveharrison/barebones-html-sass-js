module.exports = function(grunt) {

  // Build JS
  grunt.config('browserify', {
  	options: {
  		browserifyOptions: {
  			debug: true
  		}
  	},
    app: {
    	src: 'src/app.js',
    	dest: 'build/app.js'
  	}
  });

  // Build HTML
  grunt.config('htmlmin', {
  	app: {
  		options: {
  			removeComments: true,
  			collapseWhitespace: true
  		},
  		src: 'src/app.html',
  		dest: 'build/app.html'
  	}
  });

  // Build SCSS
  grunt.config('sass', {
  	app: {
  		options: {
  			style: 'expanded',
  			// sourcemap: 'none'
  		},
  		src: 'src/app.scss',
  		dest: 'build/app.css'
  	}
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.registerTask('default', ['browserify', 'sass', 'htmlmin']);

};