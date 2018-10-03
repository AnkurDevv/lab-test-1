const os = require('os');

exports.systeminfo = function(){
  console(os.arch)
}

systeminfo();