$(document).ready(function() {
    $("#btn1").click(function() {
        $(".cube").css({
            'transform': "rotate3d(0, 0, 0, 0)  translateZ(0)" //front
        })
    });
    $("#btn2").click(function() {
        $(".cube").css({
            'transform': "rotate3d(0, 1, 0, -90deg)  translateZ(0)" //right
        })
    });
    $("#btn3").click(function() {
        $(".cube").css({
            'transform': "rotate3d(0, 1, 0, -180deg) translateZ(0)" //back

        })
    });
    $("#btn4").click(function() {
        $(".cube").css({
            'transform': "rotate3d(0, -1, 0, 270deg) translateZ(0)" //left

        })
    });
    $("#btn5").click(function() {
        $(".cube").css({
            'transform': "rotate3d(1, 0, 0, 270deg) translateZ(0)" //top
        })
    });
    $("#btn6").click(function() {
        $(".cube").css({
            'transform': "rotate3d(1, 0, 0, 90deg) translateZ(0)" //bottom

        })
    });

})