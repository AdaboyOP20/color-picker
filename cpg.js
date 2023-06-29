let numsquares = 6;
let color = generaterandomcolor(numsquares);
let rgbcode = document.getElementById('rgbcode');
let square = document.querySelectorAll('.square');
let pickedcolor = pickcolor();


function generaterandomcolor(num){
    let arr = [];
    for(var i = 0; i < num; i++){
        arr.push(randomcolor());
    }
    console.log(arr);
    return arr;
}


function randomcolor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function pickcolor(){
    let random = Math.floor(Math.random() * color.length);
    return color[random];
}
 
    rgbcode.textContent = pickedcolor;

for(var i = 0; i < square.length; i++){
    square[i].style.background = color[i];

    square[i].addEventListener('click', function(){
        let clicked_color = this.style.background;
        if(clicked_color == pickedcolor){
            result.textContent = "Good Job! Respect Earned";
            emoji.textContent = "🎉🥳🎊";
            confetti()
        }
        else{
            result.textContent = "Get Wrecked L0ser";
            emoji.textContent = "🥱👎";
        }
    })
}