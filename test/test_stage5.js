'use strict';

var grunt = require('grunt');

var path = 'test/out';

var crypto = require('node:crypto');

exports.favicons = {

    // html test hashsum with two-space indentation
    htmlsum: function(test) {
        test.expect(1);
        var original = crypto.createHash('sha1').update(grunt.file.read(path + '/test.html.indent')).digest('hex');
        test.ok(original === 'b5a6d60277750ccbe615ba324fdf1419a6313f71', 'html hashsum (' + original + ') not valid');
        test.done();
    }

};
