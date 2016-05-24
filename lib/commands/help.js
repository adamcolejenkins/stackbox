var colors = require('colors');
var pkg    = require('../../package.json');

var helpText = {
  // Each command is an array of strings
  // To print the command, the array is joined into one string, and a line beak is added
  // between each item. Basically, each comma you see becomes a line break.
  'default': [
    'Commands:',
    '  init'.cyan + '     Initialize your development environment',
    '  help'.cyan + '     Show this screen',
    '  -v'.cyan + '       Display the CLI\'s version',
    '',
    'To learn more about a specific command, type ' + 'stackbox help <command>'.cyan,
    '',
    'Need more help? Ask a question on the Stackbox Github: ' + pkg.bugs.url.cyan
  ]
};

module.exports = function(args, options) {
  var say;
  if (typeof args ==='undefined' || args.length === 0) {
    say = 'default';
  }else {
    say = args[0];
  }

  // A line break is added before and after the help text for good measure.
  say = '\n' + helpText[say].join('\n') + '\n\n';

  process.stdout.write(say);
};
