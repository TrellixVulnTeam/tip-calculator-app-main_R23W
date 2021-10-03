let inputBill = document.querySelector('.bill');
let inputPeople = document.querySelector('.people');
let tipResult = document.querySelector('.tip-number')
let totalResult = document.querySelector('.total-number');
let selection = document.querySelectorAll('.selection_items');
let selections = [...selection];
let btn = document.querySelector('.visual-btn');
selections.forEach(function(ele,i){
    ele.addEventListener('click',function(){
        ele.classList.add('active');
    });
    let selectCopy = [...selections];
    selectCopy.splice(i,1);
    selectCopy.forEach(function(sel){
        sel.addEventListener('click',function(){
            ele.classList.remove('active');
        });
    })

});
function calculate(){
    let bill = inputBill.value;
    let people = inputPeople.value;
    let activeSel = parseInt(document.querySelector('.active').textContent);
    if(bill&&people&&activeSel){
        let tip = (bill*activeSel/100/people);
        let total = (bill/people+tip);
        tipResult.textContent = tip.toFixed(2);
        totalResult.textContent = total.toFixed(2);
    } else alert('Please input data!');
}
let body = document.querySelector('body');
body.addEventListener('keypress',function(e){
    if(e.key === 'Enter') calculate();
});
btn.addEventListener('click',function(){
    inputBill.value = inputPeople.value = '';
    tipResult.textContent = totalResult.textContent = '0.00';
})


