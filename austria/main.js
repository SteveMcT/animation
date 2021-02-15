$(document).ready(() => {

    var tl = anime.timeline({
        easing: 'easeOutExpo',
        duration: 800
    })

    tl.add({
        targets: '.square',
        width: '100%',
        backgroundColor: 'rgb(255, 221, 17)',
        delay: anime.stagger(40)
    })

    tl.add({
        targets: '.square',
        width: '90%',
        delay: 800
    })

    tl.add({
        targets: 'section',
        scaleX: 200,
        scaleY: 200,
        rotate: '90deg',
        duration: 4000,
        delay: 2000
    })
    tl.add({
        targets: '#image',
        height: '700px',
        width: '600px'
    })
})