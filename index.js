// borrowed from 
// http://krasimirtsonev.com/blog/article/Nodejs-managing-child-processes-starting-stopping-exec-spawn
var psTree = require('ps-tree')

module.exports = function(pid, signal, callback) {
  signal   = signal || 'SIGKILL'
  callback = callback || function () {}
  var killTree = true
  if(killTree) {
    psTree(pid, function (err, children) {
      [pid].concat(
        children.map(function (p) {
            return p.PID
        })
      ).forEach(function (tpid) {
        try { process.kill(tpid, signal) }
        catch (ex) { }
      })
      callback && callback()
    })
  } else {
    try { process.kill(pid, signal) }
    catch (ex) { }
    callback && callback()
  }
}