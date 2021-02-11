function displayNone(name, time) {
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
    displayNone(".vanish", 1)
    $("#startContent").height(0)
    $("#animation").height("100vh")
}