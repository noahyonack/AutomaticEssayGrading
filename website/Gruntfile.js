'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    // pkg: grunt.file.readJSON('package.json'),
    sass: {
      options: {
          style: 'compressed',
          update: true
      },
      dist: {
        files: {
          'dist/main.css': 'sass/main.scss'
        }
      },
    },
    // more plug-ins for postcss are available
    // see: https://github.com/postcss/postcss
    postcss: {
      options: {
        map: true,
        processors: [
          // defaults to last 2 versions for every browser,
          // but this can change with explicit options
          // see: https://github.com/ai/browserslist
          // require('autoprefixer-core')()
          require('autoprefixer')()
        ]
      },
      dist: {
        src: 'dist/main.css'
      }
    },
    jshint: {
      options: {
        reporter: require('jshint-stylish'),
        // enforces curly braces
        curly: true,
        // no type coercion
        eqeqeq: true,
        // enforces filtering properties out of prototype chains within for-in loops
        forin: true,
        // enables warnings about the use of identifiers that are defined in ES6+
        futurehostile: true,
        // warns when you declare (but don't use) variables or parameters
        unused: 'strict'
      },
      beforeconcat: ['Gruntfile.js, lib/**/*.js'],
      afterconcat: '<%= concat.dist.dest =>'
    },
    watch: {
      // configured from a livereloading tutorial
      // see: https://blog.openshift.com/day-7-gruntjs-livereload-take-productivity-to-the-next-level/
      options: {
        livereload: 8080
      },
      html: {
        files: ['src/**/*.hbs', 'src/**/*.json'],
        tasks: ['clean:html', 'assemble', 'html-prettyprinter'] // run hbs compilation
      },
      js: {
        files: ['lib/**/*.js'],
        tasks: ['clean:js', 'requirejs']
      },
      sass: {
        files: ['sass/**/*.scss'],
        tasks: ['clean:css', 'sass', 'postcss']
      }
    },
    requirejs: {
      compile: {
        options: {
          baseUrl: 'lib/',
          mainConfigFile: 'lib/config.js',
          name: '../bower_components/almond/almond',
          optimize: 'uglify2',
          out: 'dist/all.min.js',
          include: 'config',
          optimizeCss: 'standard',
          generateSourceMaps: true,
          preserveLicenseComments: false,
          useStrict: true,
          uglify: {
            mangle: true
          }
        }
      }
    },
    assemble: {
      options: {
        production: false,
        assets: 'assets',
        layoutdir: 'src/layouts',
        partials: ['src/partials/**/*.hbs'],
        data: ['src/partials/**/*.{json,yml}'],
        helpers: ['src/helpers/**/*.js' ]
      },
      site: {
        options: {
          layout: 'index.hbs'
        },
        files: [
          { 
            expand: true, 
            cwd: 'src/layouts', 
            src: ['*.hbs'], 
            dest: 'dist' 
          }
        ]
      }
    },
    'html-prettyprinter': {
      options: {
        indent_size: 2
      },
      'dist/index.html': 'dist/index.html'
    },
    clean: {
      css: ['dist/main.css'],
      html: ['dist/index.html'],
      js: ['dist/all.min.js', 'dist/all.min.js.map']
    },
  });

  // load all grunt tasks by inspecting package.json
  require('load-grunt-tasks')(grunt);

  grunt.task.registerTask('default', ['requirejs', 'sass', 'postcss', 'assemble', 'html-prettyprinter']);
};