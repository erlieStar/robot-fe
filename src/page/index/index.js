'use strict';
var _nb      = require('util/nb.js');
var _robot   = require('service/robot-service.js');

var page = {
    data : {
        listParam : {
            question : ''
        }
    },
    init : function(){
        this.bindEvent();
    },
    bindEvent : function(){
        var _this = this;
        // 登录按钮的点击
        $('#submit').click(function(){
            _this.submit();
        });
        // 如果按下回车，也进行提交
        $('#keyword').keyup(function(e){
            // keyCode == 13 表示回车键
            if(e.keyCode === 13){
                _this.submit();
            }
        });
    },
    // 加载list数据
    loadList : function(){
        $(".ajax_user").html('');
        var listParam   = this.data.listParam;
        var items = Array("alert alert-success","alert alert-danger","alert alert-info","alert alert-warning");
        _robot.search(listParam, function(res){
            var list1 = res[0].answer;
            var answerStr = '';
            if (list1.length == 0) {
                _nb.errorTips("啊哦，暂时没有相关数据");
            }
            for (var i = 0; i < list1.length; i++) {
                answerStr = '<div class="'+items[Math.floor(Math.random()*items.length)]+'">' + list1[i].answer + '</div>'
                $(".ajax_user").append(answerStr);
            }
        }, function(errMsg){
            _nb.errorTips(errMsg);
        });
    },
    // 提交表单
    submit : function(){
        this.data.listParam.question = $.trim($('#question').val());
        this.loadList();
    },
};
$(function(){
    page.init();
})