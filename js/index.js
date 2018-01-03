(function(global){
    function remChange(){
        document.documentElement.style.fontSize=20*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);

$(function () {
    //显示遮罩层
    function showMask(){
        $("#mask").css("height",$(document).height());
        $("#mask").css("width",$(document).width());
        $("#mask").show();
    }
    //隐藏遮罩层
    function hideMask(){
        $("#mask").hide();
    }

    //规则弹窗显示
    $('.regulation-Btn').click(function () {
        showMask();
        $('.regulation').show();
        $('html,body').css('overflow','hidden');
    });
    //关闭规则弹窗
    $('.regulation .close').click(function () {
        hideMask();
        $('.regulation').hide();
        $('html,body').css('overflow','auto');
    });
    //点赞
    $('.message .title').on('click','i',function () {
        var curCount = Number($(this).siblings('.count').html());
        $(this).css({'background':'url(images/dianzan.png) center no-repeat','background-size':'cover'});
        $(this).siblings('.count').text(curCount + 1);
        $('.message .title').unbind('click');
    });
    //用户留言输入跳转
    $('.write-Btn').click(function () {
        window.location.href = 'write.html';
    });
    //留言输入页返回
    $('.back').click(function () {
        window.history.back();
    });
    //提交留言按钮
    $('.submit').click(function () {
        window.location.href = 'index.html';
    });
});
