/**
 * grunt-postcss options
 * @type {Object}
 */

module.exports = {

  options: {

    map: {
      inline: false, // save all sourcemaps as separate files...
      annotation: '.tmp/0_basics' // ...to the specified directory
    }
  },
  dist: {
    src: ['<%= folders.tmp %>/{,*/,**/}*.css'],
    options: {
      processors: [
        require('autoprefixer')({
          browsers: [
            'Android >= 4.3',
            'Chrome >= 42',
            'Firefox >= 40',
            'Edge >= 12',
            'Explorer >= 11',
            'iOS >= 8',
            'Opera >= 30',
            'Safari >= 8'
          ]
        }),
        require('cssnano')() // minify the result
      ]
    }
  },
  server: {
    src: ['<%= folders.tmp %>/{,*/,**/}*.css'],
    options: {
      processors: [
        require('autoprefixer')({
          browsers: [
            'last 2 versions'
          ]
        })
      ]
    }
  },
  stylelint: {
    src: ['<%= folders.app %>/{,*/,**/}*.scss', '!<%= folders.app %>/0_basics/{,*/,**/}*.scss'],
    options: {
      writeDest: false,
      map: false,
      failOnError: true,
      processors: [
        require('stylelint')(),
        require('postcss-reporter')({
          clearMessages: true,
          throwError: true,
          noPlugin: true
        })
      ]
    }
  }
};
