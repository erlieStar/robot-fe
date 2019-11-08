var conf = {
    // serverHot : window.location.origin
    serverHot : "https://t3fuwu.fuyoukache.com/service/fykc-erobot.wrapper-service"
};
var _nb = {
    request: function (param) {
        var _this = this;
        $.ajax({
            type       : param.method || 'get',
            url        : param.url || '',
            dataType   : param.type || 'json',
            data       : param.data || '',
            xhrFields  : {withCredentials: true},
            crossDomain: true,
            contentType: param.contentType || 'application/x-www-form-urlencoded;charset=UTF-8',
            success: function (res) {
                if (0 === res.status.code) {
                    typeof param.success === 'function' && param.success(res.data, res.status.desc);
                } else {
                    typeof param.error === 'function' && param.error(res.status.desc);
                }
            },
            error: function (err) {
                typeof param.error === 'function' && param.error(res.status.desc);
            }

        })
    },
    // 获取服务器地址
    getServerUrl : function(path) {
        return conf.serverHot + path;
    },
    // 成功提示
    successTips : function(msg){
        alert(msg || '操作成功！');
    },
    // 错误提示
    errorTips : function(msg){
        alert(msg || '哪里不对了~');
    }
}

module.exports = _nb;