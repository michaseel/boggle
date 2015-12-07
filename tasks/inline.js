/**
 * grunt-inline options
 * @type {Object}
 */

module.exports = {
  dist: {
    src: [ 'dist/index.html' ],
    options:{
      uglify: true,
      tag: '0_basics'
    }
  }
};
