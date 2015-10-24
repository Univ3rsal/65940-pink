'use strict';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    less: {
      style: {
        files: {
          'build/css/style.css': 'source/less/style.less'
        }
      }
    },

    postcss: {
      options: {
        processors: [
          require('autoprefixer')({browsers: 'last 2 versions'})
        ]
      },
      style: {
        src: 'build/css/*.css'
      }
    },

    watch: {
      style: {
        files: ['source/less/**/*.less'],
        tasks: ['less', 'postcss', 'cmq'],
        options: {
          spawn: false,
          livereload: true
        }
      }
    },

    cssmin: {
      options: {
        keepSpecialComments: 0,
        report: "gzip"
      },
      style: {
        files: {
          "build/css/style.min.css": ["build/css/style.css"]
        }
      }
    },

    cmq: {
      style: {
        files: {
          "build/css/style.css": ["build/css/style.css"]
        }
      }
    },

    csscomb: {
      style: {
        expand: true,
        src: ["source/less/**/*.less"] 
      }
    },

    imagemin: {
      images: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          src: ["build/img/**/*.{png,jpg,gif,svg}"]
        }]
      }
    },


    htmlmin: {
      options: {
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        caseSensitive: true,
        keepClosingSlash: false
      },
      html: {
        files: {
          "build/index.min.html": "build/index.html",
          "build/form.min.html": "build/form.html"
        }
      }
    },

    uglify: {
      js: {
        files: {
          'build/js/form.min.js': ['build/js/form.js'],
          'build/js/index.min.js': ['build/js/index.js']
        }
      }
    },

    copy: {
      build: {
        files: [{
          expand: true,
          cwd: "source",
          src: [
            "img/**",
            "js/form.js",
            "js/index.js",
            "js/jquery.min.js",
            "index.html",
            "form.html"
          ],
          dest: "build"
        }]
      } 
    },

    clean: {
      build: ["build"]
    },

    concat: {
      options: {
        separator: ';',
      },
      index: {
        src: ['source/js/main-nav.js', 
              'source/js/picturefill.js'],
        dest: 'source/js/index.js',
      },
      form: {
        src: ['source/js/companion-count.js', 
              'source/js/counter-and-date.js', 
              'source/js/main-nav.js', 
              'source/js/moment-with-locales.js',
              'source/js/mustache.js',
              'source/js/picturefill.js',
              'source/js/sendform-and-photo.js' ],
        dest: 'source/js/form.js',
      },
    }
  });

  grunt.registerTask("build", [
    "clean",
    "concat",
    "copy",
    "less",
    "cmq",
    "postcss",
    "cssmin",
    "imagemin",
    "htmlmin",
    "uglify"
  ]); 
  var config = require('./.gosha')(grunt, config);
};