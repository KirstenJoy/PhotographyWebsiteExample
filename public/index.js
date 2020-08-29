//JavaScript Section for the Photo Section
function getRandomSize(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

var allImages = "";

for (var i = 0; i < 25; i++) {
    var width = getRandomSize(200, 300);
    var height = getRandomSize(200, 400);
    allImages += '<img src="http://placeimg.com/640/360/any' + width + '/' + height + '" alt="pretty kitty">';
}

$('#photos').append(allImages);