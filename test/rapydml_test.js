(function(){
    var grunt;
    grunt = require("grunt");
    exports.rapydml = {
        compile: function(test) {
            var pyml, html;
            pyml = grunt.file.read("test/fixtures/test.html");
            html = grunt.file.read("test/expected/test.html");
            test.equal(pyml, html, "should compile to html");
            test.done();
        }
    };
})();