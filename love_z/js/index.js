

        var sf = new Snowflakes({
          color: "#FFC0CB",
          count: 75,
          minOpacity: 0.2,
          maxOpacity: 0.6
        });
    
	//音乐开关
var x = document.getElementById("media");
$("#audio_btn").click(function(){
    $(this).toggleClass("rotate"); //控制音乐图标 自转或暂停
    if($(this).hasClass("rotate")){
        x.play();
        $(this).addClass("rotate");
    }else{
        x.pause();
        $(this).removeClass("rotate");
    }
});
