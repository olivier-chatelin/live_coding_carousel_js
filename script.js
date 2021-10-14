const buttons = document.getElementsByClassName('slide-button');
const band = document.getElementById('band');
const slides = document.getElementsByClassName('slide');
const nbImage = slides.length;
let offSet = 0;
let index = 1;
for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click',function(){
        if ( i === 1) {
            index ++;
            if(index > nbImage) {
                index = 1;
                offSet = 0;
            } else {
                offSet -= 502;
            }
        } else {
            index --;
            if(index < 1) {
                index = nbImage;
                offSet = - (nbImage-1) * 502;
            }
            else {
                offSet += 502;
            }
        }
            band.style.marginLeft = offSet + "px";
            console.log('offSet',offSet);
            console.log('index',index);

    })
}


