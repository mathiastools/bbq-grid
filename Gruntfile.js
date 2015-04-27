module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
        options: {
          //compress: true,
          //yuicompress: true,
          //optimization: 2,
          sourceMap: true
        },
        files: {
          // target.css file: source.less file
          "css/style.css": "less/style.less",
          "css/bbq.css": "less/bbq.less",
          "css/bbq-fluid.css": "less/bbq-fluid.less",
          "css/bbq-multidevice-fluid.css": "less/bbq-multidevice-fluid.less"
        }
      }
    },
    watch: {
      styles: {
        files: ['less/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
};
