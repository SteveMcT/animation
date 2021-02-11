function hideItem(name, time) {
    setTimeout(function() {
        $(name).hide();
    }, time);
}

function displayItem(name, time) {
    setTimeout(function() {
        $(name).show();
    }, time);
}

function hidemain() {
    hideItem(".vanish", 0)
    hideItem("#start", 0)
    displayItem("#end", 300)
    $("#startContent").height('0')
    $("#animation").height('100vh')
}

function showmain() {
    displayItem(".vanish", 300)
    displayItem("#start", 300)
    hideItem("#end", 0)
    $("#startContent").height('100vh')
    $("#animation").height('0')
}