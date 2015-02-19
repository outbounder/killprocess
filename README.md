# killprocess

Terminate process and its childs using [ps-tree](https://github.com/indexzero/ps-tree)
Code based on http://krasimirtsonev.com/blog/article/Nodejs-managing-child-processes-starting-stopping-exec-spawn

## api

    var kill = require("killprocess")
    kill(pid, function(){
      // process with pid terminated using SIGKILL signal
    })

    kill(pid, "SIGINT", function(){
      // process with pid terminated using SIGINT signal
    })