'use strict';

var _nb = require('util/nb.js');

var _robot = {
    // 搜索回答
    search : function(questionInfo, resolve, reject){
        _nb.request({
            url     : _nb.getServerUrl('/api/internal/test/getRobotAnswer'),
            data    : questionInfo,
            success : resolve,
            error   : reject
        });
    }
}
module.exports = _robot;