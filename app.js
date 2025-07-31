const p1button= document.querySelector('#AddTeam1');
const p2button= document.querySelector('#AddTeam2');
const resetBut = document.querySelector('#resetButton');
const p1display= document.querySelector('#P1Display');
const p2display= document.querySelector('#P2Display');
const winscore= document.querySelector('#winsc');
let p1= 0;
let p2= 0;
let winsc=5;
// const winsc= document.querySelector('#winsc').value;
let gameover= false;
p1button.addEventListener('click', function() {
     if(!gameover) {
         p1+=1;
        if(p1===winsc){
            gameover= true;
            p1display.classList.add('has-text-success');
            p2display.classList.add('has-text-danger');
            p1button.disabled = true;
            p2button.disabled = true;
    }
    p1display.textContent= p1;
}})
p2button.addEventListener('click', function() {
     if(!gameover) {
         p2+=1;
        if(p2===winsc){
            gameover= true;
            p2display.classList.add('has-text-success');
            p1display.classList.add('has-text-danger');
    p1button.disabled = true;
            p2button.disabled = true;
}  p2display.textContent= p2;}})
winscore.addEventListener('change', function() {
    winsc= Number(this.value); 
    reset();
})
resetBut.addEventListener('click', reset);
function reset() {
   gameover= false;
    p1= 0;
    p2= 0;  
    p1display.textContent= 0;
    p2display.textContent= 0;
    p1display.classList.remove('has-text-success', 'has-text-danger');
    p2display.classList.remove('has-text-success', 'has-text-danger');
    p1button.disabled = false;
    p2button.disabled = false;
}