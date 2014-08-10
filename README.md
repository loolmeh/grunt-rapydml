# grunt-rapydml

> Grunt plugin task to handle compiling rapydml to html.

## Getting Started
This plugin requires Grunt and RapydML.

If you haven't used [Grunt](http://grunstjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install git://github.com/loolmeh/grunt-rapydml.git --save-dev
pip install rapydml
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-rapydml');
```

## The "rapydml" task

### Overview
In your project's Gruntfile, add a section named `rapydml` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  rapydml: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.attribution
Type: `Boolean`
Default value: `false`

Sets the following flag:

```
--no-acknowledgement  Avoid the string stating that page was generated using
```

#### options.html5
Type: `Boolean`
Default value: `false`

Sets the following flag:

```
--html5               Parse the file using HTML5 markup syntax
```

#### options.any
Type: `Boolean`
Default value: `false`

Sets the following flag:

```
--any                 Parse the file using ANY markup syntax
```

#### options.html
Type: `Boolean`
Default value: `false`

Sets the following flag:

```
--html                Parse the file using HTML markup syntax
```

### Usage Examples

#### Example Config

see the Gruntfile.js in this project for a working default config.


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
- 2014-08-10    v0.0.1  initial release

## License
Copyright (c) 2014 loolmeh. Licensed under the MIT license.
