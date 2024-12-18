var numberOfDrum = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrum; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonClass = this.classList[0];
          buttonanimation(buttonClass);
        var audio;

        switch (buttonClass) {
            case "bulbasaur":
                audio = new Audio("Voicy_2- Bulbasaur.mp3");
                break;
            case "charmendar":
                audio = new Audio("Voicy_Charmander.mp3");
                break;
            case "pikachu":
                audio = new Audio("Voicy_Pikachu.mp3");
                break;
            case "eevee":
                audio = new Audio("Voicy_Eevee cute cry sfx.mp3");
                break;
            case "snorlax":
                audio = new Audio("Voicy_Snorlax.mp3");
                break;
            case "squirtel":
                audio = new Audio("Voicy_Squirtle.mp3");
                break;
            case "wobbuffet":
                audio = new Audio("Voicy_Wobbufett Sound.mp3");
                break;
            default:
                console.log("No audio file found for class: " + buttonClass);
                return; // Exit the function if no audio is found
        }

        audio.play(); // Play the audio
    });
}

function buttonanimation(currentKey){
   var activebutton= document.querySelector("."+currentKey);
   activebutton.classList.add("pressed");
   setTimeout(function(){
    activebutton.classList.remove("pressed");
   },100);
}


