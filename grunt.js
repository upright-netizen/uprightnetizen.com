var path = require('path'),
    connect = require('connect'),
    handlebars = require('handlebars'),
    markdown = require('node-markdown').Markdown;

/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    meta: {
      version: '0.0.1',
      banner: '/*! Upright Netizen - v<%= meta.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '* http://uprightnetizen.com/\n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
        'Nathan Stilwell // Jared Stilwell; Licensed MIT */'
    },
    server: {
      base: '/public/',
      port: 8008,
      message: 'Server is running on http://localhost:8008\n ' +
        'Party On Dudes!'
    },
    bake: {
      sources: ['blog', 'css', 'js'],
      targets: {
        html: 'public/blog',
        css: 'public/stylesheets',
        js: 'public/javascripts'
      },
      filters: {
        md: function (content) {
          return markdown(content);
        },
        handlebars: function(content, env) {
          var context = {
            posts: []
          },
          tmpl;

          grunt.file.expandFiles('blog/posts/*').forEach(function (filepath) {
            var title = path.basename(filepath).replace(/\..*/, ''),
              content = grunt.file.read(filepath);

            context.posts.push({
              slug: title,
              body: content
            });
          });

          tmpl = handlebars.compile(content);
          return tmpl(context);
        }
      }
    },
    watch: {
      files: [
        'blog/*',
        'css/*',
        'js/*'
      ],
      tasks: 'bake'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {
        jQuery: true
      }
    },
    uglify: {}
  });

  // Default task.
  grunt.registerTask('default', 'server watch');

  // Overriding the server task.
  grunt.registerTask('server', 'Start a local server.', function () {
    var base = grunt.config('server.base'),
      port = grunt.config('server.port');

    console.log(" \x1B[34m");
    console.log("Upright Netizen " + grunt.config('meta.version') + "\n");
    console.log(grunt.config('server.message'));
    console.log(" \x1B[39m");
    connect(connect["static"](__dirname + base)).listen(port);
  });

  // The bake task
  grunt.registerTask('bake', 'Regenerate the static content.', function () {

    // The bake function takes a filename and some content
    // then passes the content through multiple rounds of
    // filtering based on the filename.
    //
    // Once the content has been baked thoroughly, the
    // content is then served up hot and fresh in its
    // target location.
    var bake = function(filename, original) {
      var nametokens = filename.split('.'),
        content = original,
        blankextensions = [],
        outfile,
        extension,
        target,
        filter;

      while (nametokens.length > 1 && target === undefined) {
        extension = nametokens.pop();
        target = grunt.config('bake.targets')[extension];
        filter = grunt.config('bake.filters')[extension];

        if (filter) {
          content = filter(content);

        } else if (target) {
          outfile = target + nametokens.join('.') + '.' + extension;
          grunt.file.write(outfile, content);
        
        } else {
          // These are file extensions which didn't match any filters.
          // Not using these at the moment, but we may want
          // to add these back in at some point. You never know.
          blankextensions.push(extension);
        }
      }
    },
    // Build a wrapper (i.e. oven ) for the bake function
    // relative to the base directory we are currently building.
    //
    // Then pass the relative filename and contents in
    // to be baked till golden brown and a bit crispy around the edges.
    loadoven = function (basedir) {
      var basexp = new RegExp('^' + basedir);

      return function (filepath) {
        var content = grunt.file.read(filepath),
          relpath = filepath.replace(basexp, '');

        bake(relpath, content);
      };
    },
    oven,
    sources;

    // Let's get baked!
    ingredients = grunt.config('bake.sources');

    for (var i = 0; i < ingredients.length; i++) {
      oven = loadoven(ingredients[i]);
      grunt.file.recurse(ingredients[i], oven);
    }
  });
};
