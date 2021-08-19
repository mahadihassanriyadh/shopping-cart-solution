function updateProductNumber(product, isIncreasing, productPrice) {
    debugger;
    const productInput = document.getElementById(product + '-number');
    const productNumber = productInput.value;
    if(isIncreasing == true){
        productInput.value = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productInput.value = productNumber - 1;
    }

    // update total
    const newProductNumber = parseInt(productInput.value);
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = newProductNumber * productPrice;


    // subtotal and total update
    calculateTotal();
    
}



function updateTotalPrice(product, productPrice){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * productPrice;
}



function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}


function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    // calculate tax (10% tax)
    const taxTotal = subTotal * .1;
    // total
    const totalPrice = subTotal + taxTotal;

    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    // update tax on the html
    document.getElementById('tax-amount').innerText = Math.round(taxTotal);
    // update total on the html
    document.getElementById('total-price').innerText = Math.round(totalPrice);
}







// update total price with typing the product number
document.getElementById('phone-number').addEventListener('keyup', function(){
    updateTotalPrice('phone', 1219);
})

// hadnle phone increase decrease events
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone', true, 1219);
})

document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', false, 1219);
})



// update total price with typing the product number
document.getElementById('case-number').addEventListener('keyup', function(){
    updateTotalPrice('case', 59);
})

// hadnle case increase decrease events
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case', true, 59);
})

document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case', false, 59);
})
