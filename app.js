function updateProduct(product, Productprice, isIncreasing){
    const caseInput  = document.getElementById(product+'-number')
    let productNumber = caseInput.value
    if(isIncreasing == true){
        productNumber = parseInt(productNumber)+1
    }
    else{
        if(productNumber > 0){
            productNumber = parseInt(productNumber)-1
        }
       }
    caseInput.value = productNumber
    const productTotal = document.getElementById(product+'-total')
    productTotal.innerText = productNumber * Productprice
    calculateTotal()
}
function calculateTotal(){
    const phoneTotal = parseFloat(document.getElementById('phone-total').innerText)
    const caseTotal = parseFloat(document.getElementById('case-total').innerText)
    const subTotal = parseFloat(phoneTotal + caseTotal)
    document.getElementById('sub-total').innerText = subTotal
    const taxCount = parseFloat(parseFloat(subTotal * .04).toFixed(2))
    document.getElementById('tax-amount').innerText = taxCount
    document.getElementById('total-price').innerText = taxCount + subTotal
    console.log(typeof(taxCount));
}
//Phone  Events
document.getElementById('phone-plus').addEventListener('click',function(){
    updateProduct('phone', 1219, true)
})
document.getElementById('phone-minus').addEventListener('click',function(){
    updateProduct('phone', 1219,false)
})
//Case Events
document.getElementById('case-plus').addEventListener('click', function(){
    updateProduct('case', 59,true)
})
document.getElementById('case-minus').addEventListener('click', function(){
    updateProduct('case', 59,false)
   
})