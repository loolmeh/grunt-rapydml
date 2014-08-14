(function(){
    var path, num_cpus, async, chalk, spawn, which;
    path = require("path");
    num_cpus = require("os").cpus().length || 1;
    async = require("async");
    chalk = require("chalk");
    spawn = require("win-spawn");
    which = require("which");
    module.exports = function(grunt) {
        var check_binary;
        check_binary = function(cmd, msg) {
            try {
                which.sync(cmd);
            } catch (_$rapyd$_Exception) {
                return grunt.warn(msg + "\n");
            }
        };
        grunt.registerMultiTask("rapydml", "Compile rapydml templates.", function() {
            var cb, options;
            cb = this.async();
            options = this.options({
                attribution: false,
                html5: false,
                any: false,
                html: false
            });
            check_binary("rapydml", "You need to have rapydml installed.");
            async.eachLimit(this.files, num_cpus, function(file, next) {
                var input, args, bin, cp, src;
                var _$rapyd$_Iter0 = file.src;
                for (var _$rapyd$_Index0 = 0; _$rapyd$_Index0 < _$rapyd$_Iter0.length; _$rapyd$_Index0++) {
                    src = _$rapyd$_Iter0[_$rapyd$_Index0];
                    if (typeof src !== "string") {
                        grunt.log.warn("uh I think you have a messed up configuration, src should be a string");
                        return next();
                    }
                    if (!grunt.file.exists(src)) {
                        grunt.log.warn("Source file" + src + "not found.");
                        return next();
                    }
                    if (path.basename(src)[0] === "_") {
                        return next();
                    }
                    input = path.join(process.cwd(), src);
                    args = [ input ];
                    if (!options.attribution) {
                        args.push("--no-acknowledgement");
                    }
                    if (options.html5) {
                        args.push("--html5");
                    }
                    if (options.any) {
                        args.push("--any");
                    }
                    if (options.html) {
                        args.push("--html");
                    }
                    bin = "rapydml";
                    grunt.verbose.writeln("Command: " + bin + " " + args.join(" "));
                    cp = spawn(bin, args, {
                        stdio: "inherit"
                    });
                    cp.on("error", function(err) {
                        grunt.warn(err);
                    });
                    cp.on("close", function(code) {
                        var output, dest;
                        if (code > 0) {
                            return grunt.warn("Exited with error code " + code);
                        }
                        grunt.verbose.writeln("File " + chalk.cyan(file.dest) + " created.");
                        if (file.dest != file.src) {
                            output = src.replace(/pyml$/, "html");
                            dest = file.dest.replace(/pyml$/, "html");
                            grunt.file.copy(output, dest);
                            grunt.file.delete(output);
                        }
                        next();
                    });
                }
            }, cb);
        });
    };
})();