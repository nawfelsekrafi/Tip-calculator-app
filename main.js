var billValue = document.getElementById("bill-value");
var nbPeopleValue = document.getElementById("nb-people");
var resetBtn = document.getElementById("reset-btn");
var tipAmountPersonValue = document.getElementById("amount-price");
var totalAmountPersonValue = document.getElementById("total-price");
var customValue = document.getElementById('custom-value');
var btns = document.querySelectorAll('li');
var percentTipValue = 0;
var zero = document.getElementById('zero');

resetBtn.addEventListener("click", reset);
billValue.addEventListener('input',  calculeValue);

nbPeopleValue.addEventListener('input', function(){
    if (nbPeopleValue.value){
        nbPeopleValue.classList.add("not-empty-value");
        zero.style.visibility = 'hidden';
    }else{
        nbPeopleValue.classList.remove("not-empty-value");
        zero.style.visibility = 'visible';
    }
    calculeValue();
});
nbPeopleValue.addEventListener('click', function(){
    if (nbPeopleValue.value){
        zero.style.visibility = 'hidden';
    }else{
        zero.style.visibility = 'visible';
    }
});

[].forEach.call(btns, function(btn) {
  btn.addEventListener("click", function(){
    [].forEach.call(btns, function(btn) { btn.classList.remove("percent-value-active");})
      btn.classList.add("percent-value-active");
      resetBtn.classList.add("reset-btn-active")
      if(btn.value != 0){
      percentTipValue = btn.value;
      calculeValue();}
  })
});  


function calculeValue() {
    let tip = 0;
    let total = 0;
    let bValue =  billValue.value;
    let pValue = nbPeopleValue.value;
    if (bValue!=0 && pValue!=0 && percentTipValue>=0){
        tip = ((bValue/100)*percentTipValue)/pValue;
        total = (bValue/pValue) + tip;
    }
    tipAmountPersonValue.innerHTML = tip.toFixed(3).slice(0,-1);
    totalAmountPersonValue.innerHTML = total.toFixed(2);
}


customValue.addEventListener('input', function(){
    percentTipValue = 0;
    percentTipValue = customValue.value;
    calculeValue();
});
customValue.addEventListener('click', function(){
    percentTipValue = 0;
    percentTipValue = customValue.value;
    calculeValue();
});

function reset(){
    billValue.value = "";
    nbPeopleValue.value = "";
    tipAmountPersonValue.innerHTML = "0.00";
    totalAmountPersonValue.innerHTML = "0.00";
    resetBtn.classList.remove("reset-btn-active")
}