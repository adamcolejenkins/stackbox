var colors = require('colors');

module.exports = function (projectName) {
  return {
    helloWorld: [
      'Thanks for using Stackbox on your machine!',
      '--------------------------------------------',
      'Let\'s set up your development environment.',
      'This could take awhile depending on your machine.'
    ],
    downloadingDotfiles: "\nDownloading the stackbox dotfiles...".cyan,
    installSuccess: "\nYou're all set!\n".green,
    installFail: "\nThere were some problems during the installation.".red,
    npmSuccess: " \u2713 Node modules installed.".green,
    npmFail: " \u2717 Node modules not installed.".red + " Try running " + "npm install".cyan + " manually.".cyan,
    bowerSuccess: " \u2713 Bower components installed.".green,
    bowerFail: " \u2717 Bower components not installed.".red + " Try running " + "bower install".cyan + " manually.".cyan,
  };
};
