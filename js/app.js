console.log('link done');
const selectedSeat = document.getElementById('selected-seat');
const totalSeate = document.getElementById('total-booked').innerText;
// console.log(totalSeate);
const availableSeet = document.getElementById('available-seat');
const totalPriceEl = document.getElementById('total-price');
const couponField = document.getElementById('coupon-field');
const couponBtn = document.getElementById('coupon-btn');
const couponValue = document.getElementById('coupon-field');
const grandTotalEl = document.getElementById('grand-total');
let sum = 1;
// let selectedSea = [];

let array = [];

let totalPrice = 0;


function handleSelectSeat(event){

    const value = event.innerText;
    if(array.includes(value)){
        return alert('all ready Booked');
    } else if(array.length < 4){
        const elementText = event.innerText;
    console.log(elementText);
    event.classList.add('bg-primary');
    event.classList.add('text-white');
    const div = document.createElement('div');
    document.getElementById('total-booked').innerText = sum;
    // console.log(totalSeate);
    // availableSeet.innerText = 
    const availableSaetValue = parseFloat(availableSeet.innerText);
    const newAvailableSeet = availableSaetValue - 1;
    availableSeet.innerText = newAvailableSeet;
    array.push(event.innerText);
    // console.log(array);

    if(document.getElementById('total-booked').innerText > 3){
        couponField.removeAttribute('disabled');
        couponBtn.removeAttribute('disabled');
    }
    
    // if(document.getElementById('total-booked').innerText === '5'){
    //     alert('maximam seat added');
    //     return;
    // }
    
    div.innerHTML += `

    <p class="flex item-center text-gray-500 justify-between">
    <span>${elementText}</span>
    <span>Economy</span>
    <span>550</span>
    
    </p>
    `
    document.getElementById('default-text').classList.add('hidden')
    selectedSeat.appendChild(div);
    totalPrice += 550;
    totalPriceEl.innerText = totalPrice;


    sum++
    }else{
        return alert('maximum seete booked');
    }
   
    



}


document.getElementById('coupon-btn').addEventListener('click', function(){
    const couponValue2 = couponValue.value;
    // console.log(couponValue2);
    let couponSave = 0;
    if(couponValue2 === 'NEW50' && couponValue2 === 'Couple 20'){
        alert ('Your Provide Coupon is Not Valid');
        return;
    }
    if(couponValue2 === 'NEW50'){
        couponSave = totalPrice *.15;
    }else if(couponValue2 === 'Couple 20'){
        couponSave = totalPrice * .20;
    }
    const grandTotalValue = totalPrice - couponSave;
    grandTotalEl.innerText = grandTotalValue;
})