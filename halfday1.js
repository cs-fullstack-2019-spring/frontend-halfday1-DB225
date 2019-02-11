// click the button and change the background to RED
$("#color1").on("click", function () {
   $(".container").toggleClass("changeToRed");
});


// click the button and change the background to BLUE
$("#color2").on("click", function () {
    $(".container").toggleClass("changeToBlue");
});


// click the button and change the background to YELLOW
$("#color3").on("click", function () {
    $(".container").toggleClass("changeToYellow");
});



// click either Keyboard either Mouse and one of them will be disabled
 var keyboard_Mouse = true;
 $("#keyChoice").on("click", clickKeyboard);
 
 function clickKeyboard() {
     if (keyboard_Mouse){
         $("#mouseChoice").removeAttr("disabled");
         $("#keyChoice").attr("disabled","");
         keyboard_Mouse = false;
     }
     else{
         $("#mouseChoice").attr("disabled","");
     }
 }

 $("#mouseChoice").on("click",clickMouse);
 
 function clickMouse() {
     if (keyboard_Mouse === false){
         $("#keyChoice").removeAttr("disabled");
         $("#mouseChoice").attr("disabled","");
         keyboard_Mouse = true;
     }
     else{
         $("#keyChoice").attr("disabled");
     }
 }



 // change the player on the lead with the buttons P1 & P2
var x1 = 0;
 var x2 = 0;

            //when we press P1
 document.addEventListener("click",buttonP1);
 function buttonP1(e){
     $(".leadPlayer").text("Player1");
     if (e.code === undefined){
         console.log(x1);
         x1++;
     }
 }
            //when we press P2
 document.addEventListener("click", buttonP2);
 function buttonP2(e) {
     $(".leadPlayer").text("Player2");
     if (e.code === undefined){
         console.log(x2);
         x2++;
     }
 }


// Incrementation of the numbers via the Keyboard buttons q & p
var incrementor1 = 0;
var incrementor2 = 0;
       //When we press "q"
document.addEventListener("keypress",chooseQ);
function chooseQ(e) {
    if (e.code === "KeyQ") {
        incrementor1+= 1;
        console.log(incrementor1);
        $(".leadPlayer").text("Player1");
    }
}

      //When we press "p"
document.addEventListener("keypress", chooseP);
function chooseP(e) {
    if(e.code === "KeyP"){
        incrementor2+= 1;
        console.log(incrementor2);
        $(".leadPlayer").text("Player2");
    }
}

