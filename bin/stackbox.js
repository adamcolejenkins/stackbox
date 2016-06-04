#!/usr/bin/env node

var nopt     = require('nopt');
var update   = require('update-notifier');
var pkg      = require('../package.json');
var stackbox = require('../lib');

// Options that can be passed to commands
var options = {
  "directory": String,
  "dotfiles": String,
};

// Shorthands for the above commands
var shorthands = {
  'd': "--directory",
  'r': "--dotfiles",
  "v": "--version",
};

var parsed = nopt(options, shorthands);

// cmd.args contains basic commands like "install" and "help"
// cmd.opts contains options, like --version
var cmd = {
  args: parsed.argv.remain,
  opts: parsed
};

// Check for updates once a day
var notifier = update({
  packageName: pkg.name,
  packageVersion: pkg.version
});
notifier.notify();

// No other arguments given
if (typeof cmd.args[0] === 'undefined') {
  // If -v or --version was passed, show the version of the CLI
  if (typeof cmd.opts.version !== 'undefined') {
    process.stdout.write("Stackbox CLI version " + pkg.version + "\n");
  }
  // Otherwise, just show the help screen
  else {
    stackbox.help();
  }
}

// Arguments given
else {
  // If the command typed in doesn't exist, show the help screen
  if (typeof stackbox[cmd.args[0]] == 'undefined') {
    stackbox.help();
  }
  // Otherwise, run the command.
  else {
    // Every command function is passed secondary commands, and options
    // So if the user types "stackbox project --edge", "project" is a secondary
    // command, and "--edge" is an option.
    stackbox[cmd.args[0]](cmd.args.slice(1), cmd.opts);
  }
}
