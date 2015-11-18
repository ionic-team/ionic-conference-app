module.exports = {
  name: 'ionic-conference-app',
  proxies: null,

  // hooks execute before or after all project-related Ionic commands
  // (so not for start, docs, but serve, run, etc.) and take in the arguments
  // passed to the command as a parameter
  //
  // The format is 'before' or 'after' + commandName (uppercased)
  // ex: beforeServe, afterRun, beforePrepare, etc.
  hooks: {
    // beforeServe: function(argv) {
    //   console.log('Arguments to ionic serve: "' + argv._ + '"');
    // }
  }
}
