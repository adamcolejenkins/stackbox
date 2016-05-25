var fs   = require('fs');
var path = require('path');

module.exports = function (options) {
  var questions = [];

  if (!options.directory) {
    questions.push({
      type: 'input',
      name: 'directory',
      message: 'What directory do you work from?',
      default: '~/Code',
      validate: function (input) {
        if (!fs.existsSync(input)) {
          return fs.mkdir(input);
        }
        return true;
      }
    });
  }

  return questions;
};
