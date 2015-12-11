module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        clean: ['dist'],
        ts: {
            default : {
                options: {
                    compiler: './node_modules/typescript/bin/tsc',
                    module: "commonjs",
                    fast: 'never',
                    preserveConstEnums: true,
                    target: 'es6'
                },
                src: 'src/**/*.ts',
                outDir: 'dist'
            },
            watch : {
                options: {
                    compiler: './node_modules/typescript/bin/tsc',
                    module: "commonjs",
                    fast: 'never',
                    preserveConstEnums: true,
                    moduleResolution: "node",
                    target: 'es6',
                    experimentalAsyncFunctions: true
                },
                src: 'src/**/*.ts',
                watch: 'src/',
                outDir: 'dist'
            }
        },
        copy: {
            main: {
                src: './lib/runtime.d.ts',
                dest: './dist/runtime.d.ts'
            }
        },
        bump : {
            options : {
                files : ['package.json'],
                updateConfigs : [],
                commit : true,
                commitMessage : 'chore(ver): v%VERSION%',
                commitFiles : ['package.json', 'CHANGELOG.md'],
                createTag : true,
                tagName : 'v%VERSION%',
                tagMessage : 'chore(ver): v%VERSION%',
                push : true,
                pushTo : 'origin',
                gitDescribeOptions : '--tags --always --abbrev=1 --dirty=-d',
                globalReplace : false,
                prereleaseName : "rc",
                regExp : false
            }
        },
        shell : {
            addChangelog : {
                command : 'git add CHANGELOG.md'
            }
        },
        changelog : {
            options : {
            }
        }
    });

    grunt.registerTask("release", "Release a new version", function(target) {
        if(!target) {
            target = "minor";
        }
        return grunt.task.run("bump-only:" + target, "changelog", "shell:addChangelog", "bump-commit");
    });

    grunt.registerTask('default', ['ts:default', 'copy']);
};
