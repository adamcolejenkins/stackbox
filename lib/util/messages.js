var colors = require('colors');

module.exports = function (projectName) {
  return {
    helloWorld: [
      'Thanks for using Stackbox on your machine!',
      '--------------------------------------------',
      'Let\'s set up your development environment.',
      'This could take awhile depending on your machine.'
    ],
    gitCloneError: "There was an issue running " + "git clone ".cyan + ".\nMake sure your computer's Git is configured properly and then try again.",
    installSuccess: "\nYou're all set!\n".green,
    installFail: "\nThere were some problems during the installation.".red,
    npmSuccess: " \u2713 Node modules installed.".green,
    npmFail: " \u2717 Node modules not installed.".red + " Try running " + "npm install".cyan + " manually.".cyan,
    bowerSuccess: " \u2713 Bower components installed.".green,
    bowerFail: " \u2717 Bower components not installed.".red + " Try running " + "bower install".cyan + " manually.".cyan,
  };
};

module.exports.noRoot = [
  'Slow down there, friend!',
  '------------------------',
  'Running this installer as an administrator can cause problems.',
  'Try running this command again with "sudo" or administrator rights.'
];

module.exports.gitNotInstalled = "\nYou need Git installed to get started. Download it here: " + "http://git-scm.com/downloads".cyan + "\n";
