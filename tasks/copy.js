/**
 * grunt-contrib-copy options
 * @type {Object}
 */

module.exports = {
  dist: {
    files: [{
      expand: true,
      dot: true,
      cwd: '<%= folders.app %>',
      dest: '<%= folders.dist %>',
      src: [
        '*.{ico,txt}',
        '.htaccess',
        'images/{,*/}*.{jpg,jpeg,png,webp,gif,svg}',
        'fonts/**'
      ]
    }, {
      expand: true,
      cwd: '<%= folders.tmp %>',
      dest: '<%= folders.dist %>',
      src: [
        '**/*.css',
        '**/*.map',
        '{,*/,**/}*.html'
      ]
    }]
  },
  ghPages: {
    files: [{
        expand: true,
        dot: true,
        cwd: '<%= folders.dist %>',
        dest: '.',
        src: [
          'index.html',
          '.htaccess'
        ]
      },
      {
        expand: true,
        dot: true,
        cwd: '<%= folders.tmp %>',
        dest: '.',
        src: [
          'worker.js',
          'serviceworker.js'
        ]
      }
    ]

  }
};
