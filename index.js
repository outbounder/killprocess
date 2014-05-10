var exec = require('child_process').exec;
var isWindows = process.platform === 'win32';

module.exports = function (pid, signal, next) {
  if(typeof signal == "function") {
    next = signal
    signal = "SIGTERM"
  }

  if (isWindows) {
    exec('taskkill /pid ' + pid + ' /T /F', next);
  } else {
    exec('pkill -TERM -P '+ pid, next)
  }
}