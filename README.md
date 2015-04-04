# grunt-slack-upload

> Upload files to Slack

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-slack-upload --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-slack-upload');
```

## The "slack_upload" task

### Overview
In your project's Gruntfile, add a section named `slack_upload` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  slack_upload: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

See [https://api.slack.com/methods/files.upload](https://api.slack.com/methods/files.upload) for detailed information.

#### options.token
Type: `String`
Required

Slack authentication token.

#### options.file
Type: `String`
Optional

Path to the file to upload.

#### options.content
Type: `String`
Optional

The content to upload (instead of uploading a file).

#### options.filetype
Type: `String`
Optional

Slack internal file type identifier.

#### options.filename
Type: `String`
Optional

Filename of file.

#### options.title
Type: `String`
Optional

Title of file.

#### options.initialComment
Type: `String`
Optional

Initial comment to add to file.

#### options.channels
Type: `String`
Optional

Comma separated list of channels to share the file into.

### Usage Examples

Uploading `CHANGELOG.md` using slack_upload 

```js
grunt.initConfig({
  slack_upload: {
    options: {
      token: 'xxxxxxxxxxxxxxxxxxx',
      filetype: 'post',
      file: 'CHANGELOG.md',
      title: 'Changelog',
      channels: 'xxxxxxx'
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).