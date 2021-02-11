$(document).ready(function() {
    $("#btn1").click(function() {
        console.log("Hermann")
        $(".cube").css({
            'transform': "rotate3d(0, 0, 0, 0)  translateZ(0)" //front
        })
    });
    $("#btn2").click(function() {
        console.log("Hermann")
        $(".cube").css({
            'transform': "rotate3d(0, 1, 0, 270deg)  translateZ(0)" //right
        })
    });
    $("#btn3").click(function() {
        console.log("Hermann")
        $(".cube").css({
            'transform': "rotate3d(1, -1, 0, 180deg) rotate(90deg) translateZ(0)" //back
        })
    });
    $("#btn4").click(function() {
        console.log("Hermann")
        $(".cube").css({
            'transform': "rotate3d(1, 0, 0, 90deg) translateZ(0)" //bottom
        })
    });
    $("#btn5").click(function() {
        console.log("Hermann")
        $(".cube").css({
            'transform': "rotate3d(1, 0, 0, 270deg) translateZ(0)" //top
        })
    });
    $("#btn6").click(function() {
        console.log("Hermann")
        $(".cube").css({
            'transform': "rotate3d(0, -1, 0, 270deg) translateZ(0)" //left
        })
    });

})