let colors = ['#532e1c', '#c5a880', '#0f0f0f', '#1e212d']

$(document).ready(() => {
    var ranPos = function() {
        return anime.random(-300, 200) + '%'
    };
    var ranSize = function() {
        return anime.random(200, 400) + 'px'
    };
    var ranCol = function() {
        return colors[Math.floor(Math.random() * colors.length)]
    };

    var rects = document.querySelectorAll('.rect')

    runAn()

    setInterval(function() {
        runAn()
    }, 2000)

    function runAn() {
        rects.forEach(rect => {
            anime({
                targets: rect,
                duration: 1400,
                endDelay: 1000,
                direction: 'alternate',
                width: ranSize(),
                height: ranSize(),
                translateY: ranPos(),
                translateX: ranPos(),
                backgroundColor: ranCol()
            })
        });
    }
})