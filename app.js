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
    const newInputNumber = parseInt(productInput.value);
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = newInputNumber * productPrice;
    
}


// hadnle phone increase decrease events
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone', true, 1219);
})

document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', false, 1219);
})




// hadnle case increase decrease events
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case', true, 59);
})

document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case', false, 59);
})
