var async    = require('async');
var bower    = require('bower');
var colors   = require('colors');
var fs       = require('fs');
var git      = require('nodegit');
var inquirer = require('inquirer');
var isRoot   = require('is-root');
var npm      = require('npm');
var path     = require('path');
var rimraf   = require('rimraf');
var which    = require('which');
var util     = require('../util');

var repository = 'https://github.com/adamcolejenkins/stackbox-dotfiles.git';

module.exports = function(args, options, callback, ee) {
  var directory;

  var tasks = [
    preflight, prompt, gitClone, folderSetup
  ];

  var home = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];

  // Each function below is executed in order
  async.series(tasks, finish);

  // 1. Check that the process isn't root, and install Git if necessary
  function preflight(cb) {
    if (isRoot()) {
      console.log( util.messages.noRoot );
      process.exit(1);
    }

    which('git', function(er) {
      if (er) {
        console.log( util.messages.gitNotInstalled );
        process.exit(69);
      }
      cb();
    });
  }

  // 2. Find out how the user wants to set up.
  function prompt(cb) {
    inquirer.prompt(util.questions(options), function(answers) {
      // The variables we need either came from the prompts, or the console arguments
      directory = answers.directory || options.directory;

      cb();
    });
  }

  // 3. Clone the dotfiles project
  function gitClone(cb) {
    var repo = options.dotfiles || repository;

    process.chdir(home);

    // Clone the dotfiles repository
    git.Clone(repo, '.dotfiles').catch(function (err) {
      console.log( util.messages.gitCloneError );
      process.exit(1);
    });

    if (typeof(ee) !== 'undefined') {
      ee.emit("cloneSuccess");
    }

    cb();
  }
};
