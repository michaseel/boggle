/**
 * grunt-contrib-htmlmin options
 * @type {Object}
 */

module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: '<%= folders.dist %>',
      src: '{,*/,**/}*.html',
      dest: '<%= folders.dist %>'
    }],
    options: {
      removeComments: true,
      collapseWhitespace: true,
      //preserveLineBreaks: true
    }
  }
};
