let counter = document.querySelector('.counter');
const btns = document.querySelectorAll('button');
let count = 0;

function ChangeCounter(button){
    if (button == increase) {
        count += 1;
    }else if (button == decrease) {
        if (count > 0) {
            count -= 1;
        }
       
    }else if (button == reset) {
        count = 0;
    }
    counter.innerHTML = count;
}