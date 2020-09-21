//add quantité
let plusQ = Array.from(document.getElementsByClassName('btn btn-dark'))
for (let i = 1; i < plusQ.length; i++) {
    plusQ[i].addEventListener('click', function() {
        plusQ[i].previousElementSibling.innerText++;
        //Update the total price
        totalprice()
    })
}

//dimune quantity 
let minusQ = document.getElementsByClassName('btn btn-dark');
for (let button of minusQ) {
button.addEventListener('click', function() {
if (button.nextElementSibling.innerText > 0) {
    button.nextElementSibling.innerText--;
}
//update the total price
totalprice();
})
}

//calculate the total price 
function totalprice() {
    let price = document.getElementsByClassName('prix');
    let quantity = document.getElementsByClassName('quantité');
    let sum = 0; 
    for (let i = 0; i < price.length; i++) {
        sum += price[i].innerText * quantity[i].innerText;
    }
    document.getElementById('totalprice').innerText = sum;
    }
