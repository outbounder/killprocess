# killprocess

Terminate process and its childs using pkill(unix) or taskkill(win)

## api

    var kill = require("killprocess")
    kill(pid, function(err, stdout, stderr){
      // process with pid terminated
    })