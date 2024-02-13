const btnYes = document.querySelector('.yes')
const btnNo = document.querySelector('.no')

let fzYes = 2
let fzNo = 2

btnNo.addEventListener('click', fzmore);
btnYes.addEventListener('click', yesPushed);

function fzmore() {
    fzYes += .4
    btnYes.style.fontSize = fzYes + 'em'
    fzNo -= .2
    btnNo.style.fontSize = fzNo + 'em'

}
function yesPushed() {
    location.href = './index_two.html'
}
