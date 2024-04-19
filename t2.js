function fadeIn(){
    var text = $('.content').text().replace(/^\s+|\s+$/g,'');
    var length = text.length;
    var i = 0;
    var txt;
    var html = [];
    var sp = 4;
    for(;i<length;i+=sp) {
        txt = text.substring(i,i+sp);
        html.push('<span class="c animated">' + txt + '</span>');
    }
    $('.content').removeClass('c').html(html.join(''));

    for(i = 0,length = html.length;i<length;i++) {
        !function(i){
            setTimeout(function(){
                $('.content').find('.animated').eq(i).addClass('fadeIn');
            },i*400);
        }(i);
    }
};



document.querySelector(".content").onclick=()=>{
    document.querySelector("#heart").hidden=false
    document.querySelector("body").style.backgroundColor="#542246"
    document.querySelector("#heart").hidden=false
    fadeIn()
}

document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById('playAudio');

    function playAudio() {
        audio.play();
    }

    // Chạy âm thanh khi tải lại trang (sử dụng sessionStorage để lưu trạng thái)
    var isPageRefreshed = sessionStorage.getItem('isPageRefreshed');
    if (!isPageRefreshed) {
        // Chạy âm thanh
        playAudio();
        // Đánh dấu trang đã được tải lại
        sessionStorage.setItem('isPageRefreshed', true);
    }

    // Nếu người dùng thực hiện refresh lại trang
    window.onbeforeunload = function() {
        sessionStorage.removeItem('isPageRefreshed');
    };
});

document.addEventListener("click", function() {
    var audio = document.getElementById('playAudio');
    audio.play();
});


