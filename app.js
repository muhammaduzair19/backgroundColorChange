var click = document.querySelector('.clickbtn');
var colorName = document.querySelector(".colorname");
var body = document.querySelector("body");
var simple = document.getElementById('Simple');
var hex = document.getElementById('Hex');

var simpleColorArray = ["Red", "Green", "Blue", "Purple", "Yellow", "Aqua"];
var hexColorArray = ["#652525", "#40e156", "#5040e1", "#d36600", "#fe1a57", "#078974", "#1fef03"]

simple.addEventListener('click', () => {
    click.addEventListener('click', () => {
        var randomColor = randomClr();
        body.style.backgroundColor = randomColor;
        colorName.innerHTML = randomColor;
    });
    var randomClr = () => {
        var randomNumber = Math.round(Math.random() * simpleColorArray.length);
        var randClrName = simpleColorArray[randomNumber];
        return randClrName;
    }
})

hex.addEventListener('click', () => {
    click.addEventListener('click', () => {
        var randomColor = randomClr();
        body.style.backgroundColor = randomColor;
        colorName.innerHTML = randomColor;
    });
    var randomClr = () => {
        var randomNumber = Math.round(Math.random() * hexColorArray.length);
        var randClrName = hexColorArray[randomNumber];
        return randClrName;
    }
})