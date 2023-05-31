var doc = document.querySelectorAll(".drum");
for(var i=0;i< doc.length;i++){
    doc[i].addEventListener("click",function(){
        var btnInnerHtml = this.innerHTML;
        switches(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keypress",function(event){
    switches(event.key);
    buttonAnimation(event.key);
});
function switches(key){
    switch (key) {
        case"w":
            var tm1 = new Audio("./sounds/tom-1.mp3");
            tm1.play();
        break;
        case"a":
            var tm2 = new Audio("./sounds/tom-2.mp3");
            tm2.play();
        break;
        case"s":
            var ss = new Audio("./sounds/tom-3.mp3");
            ss.play();
        break;
        case"d":
            var ww = new Audio("./sounds/tom-4.mp3");
            ww.play();
        break;
        case"j":
            var jj = new Audio("./sounds/kick-bass.mp3");
            jj.play();
        break;
        case"k":
            var kk = new Audio("./sounds/crash.mp3");
            kk.play();
        break;
        case"l":
            var ll = new Audio("./sounds/snare.mp3");
            ll.play();
        break;
    
        default: console.log("out of commands");
            break;
    } 
}

function buttonAnimation(buttonkey){
    var btn = document.querySelector("." + buttonkey);
    btn.classList.toggle("pressed");

    setTimeout(function (){
        btn.classList.remove("pressed");
    }, 100 );
}


