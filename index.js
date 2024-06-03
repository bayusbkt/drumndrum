var audioW = new Audio("sounds/crash.mp3")
var audioA = new Audio("sounds/kick-bass.mp3")
var audioS = new Audio("sounds/snare.mp3")
var audioD = new Audio("sounds/tom-1.mp3")
var audioJ = new Audio("sounds/tom-2.mp3")
var audioK = new Audio("sounds/tom-3.mp3")
var audioL = new Audio("sounds/tom-4.mp3")


// Detecting Button Press
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}


// Detecting Keyboard Press
document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
            audioW.play();
            break;

        case "a":
            audioA.play();
            break;
            
        case "s":
            audioS.play();
            break;

        case "d":
            audioD.play();
            break;

        case "j":
            audioJ.play();
            break;

        case "k":
            audioK.play();
            break;

        case "l":
            audioL.play();
            break;

        default:
    }
}


function buttonAnimation (currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100)
}