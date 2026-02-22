var i;
var changer = 0;
var len = (document.querySelectorAll("button").length);

document.addEventListener("keypress", function(event){
            var message = event.key;
            exeSound(message);
            buttonAnimation(message);
        });

for(i = 0; i<len; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function playAudio(){
        var buttonInnerHtml = this.innerHTML;  
        exeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
}
);}
function exeSound(buttonInnerHtml){
    switch (buttonInnerHtml) {
            case "w":
                var drum1 = new Audio("sounds/tom-1.mp3");
                drum1.play();                
                break;
            case "a":
                var drum1 = new Audio("sounds/tom-2.mp3");
                drum1.play();
                break;
            case "s":
                var drum1 = new Audio("sounds/tom-3.mp3");
                drum1.play();
                break;
            case "d":
                var drum1 = new Audio("sounds/tom-4.mp3");
                drum1.play();
                break;
            case "j":
                var drum1 = new Audio("sounds/snare.mp3");
                drum1.play();
                break;
            case "k":
                var drum1 = new Audio("sounds/crash.mp3");
                drum1.play();
                break;
            case "l":
                var drum1 = new Audio("sounds/kick-bass.mp3");
                drum1.play();
                break;
            default:
                break;
        }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 200);
}

// var audioElement = new Audio("sounds/tom-1.mp3");
        // audioElement.play();

// console.log(this.innerHTML);
        // this.style.color = "white";

// key listener function:
/*document.addEventListener("keypress", function(event){
    var message = event.key;
    switch (message) {
            case "w":
                var drum1 = new Audio("sounds/tom-1.mp3");
                drum1.play();                
                break;
            case "a":
                var drum1 = new Audio("sounds/tom-2.mp3");
                drum1.play();
                break;
            case "s":
                var drum1 = new Audio("sounds/tom-3.mp3");
                drum1.play();
                break;
            case "d":
                var drum1 = new Audio("sounds/tom-4.mp3");
                drum1.play();
                break;
            case "j":
                var drum1 = new Audio("sounds/snare.mp3");
                drum1.play();
                break;
            case "k":
                var drum1 = new Audio("sounds/crash.mp3");
                drum1.play();
                break;
            case "l":
                var drum1 = new Audio("sounds/kick-bass.mp3");
                drum1.play();
                break;
            default:
                break;
    }
});*/