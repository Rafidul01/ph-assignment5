function hideById(id){
    const section = document.getElementById(id);
    section.classList.add('hidden');
}
function showById(id){
    const section = document.getElementById(id);
    section.classList.remove('hidden');
}


function confirmTic(){
    console.log("saira de ma kainda bachi");
    showById("confirm-section");
    hideById("ticket-section");
    hideById("copupon-section");
    hideById("head-section");

}
function returnHome(){
    hideById("confirm-section");
    showById("ticket-section");
    showById("copupon-section");
    showById("head-section"); 
}
function colorSeatById(id){
    document.getElementById(id).classList.add('bg-[#1DD100]');
    document.getElementById(id).classList.add('text-white');
}
function colorRemoveById(id){
    document.getElementById(id).classList.remove('bg-[#1DD100]');
    document.getElementById(id).classList.remove('text-white');
}
function addBill(seat){
    const billDiv = document.getElementById("price-div");
    const newId = seat+"Id";
            const newDiv = document.createElement('div');
            newDiv.innerHTML =  
            `
            <div id="${newId}" class="flex justify-between  py-[16px] ">
                    <p class="text-[#03071299] font-medium text-base inter">${seat}</p>
                    <p class="text-[#03071299] font-medium text-base inter">Economoy</p>
                    <p class="text-[#03071299] font-medium text-base inter">550</p>
                </div>
            `;
            billDiv.appendChild(newDiv);
        
}
function removeBill(seat){
    const newId = seat+"Id";
    hideById(newId);
    console.log(document.getElementById(newId));
}
const selectSeat = document.getElementById("total-selected-seats");
const seatLeft = document.getElementById("seat-left");
const totalPrice = document.getElementById("total-price");
const grandTotalPrice = document.getElementById("grand-total");
let selectedSeatArr = [];
function seatSelect(seatName){
    console.log(seatName);
    const totalSelectedSeat = parseInt(selectSeat.innerText);
    const totalSeatLeft = parseInt(seatLeft.innerText);
    const price = parseInt(totalPrice.innerText);
    if(totalSelectedSeat < 4 && !selectedSeatArr.includes(seatName) ){
        selectedSeatArr.push(seatName);
        selectSeat.innerText = totalSelectedSeat+1;
        seatLeft.innerText = totalSeatLeft-1;
        totalPrice.innerText = price+550;
        grandTotalPrice.innerText = totalPrice.innerText;
        addBill(seatName);
        colorSeatById(seatName);
    }
    else if(selectedSeatArr.includes(seatName)){
        delete selectedSeatArr[selectedSeatArr.indexOf(seatName)];
        selectSeat.innerText = totalSelectedSeat-1;
        seatLeft.innerText = totalSeatLeft+1;
        totalPrice.innerText = price-550;
        grandTotalPrice.innerText = totalPrice.innerText;
        removeBill(seatName);
        colorRemoveById(seatName);
    }
    
}
const couponArray = document.getElementsByClassName("coupons");

function testCode(){
    const inputFild = document.getElementById("coupon-code");
    const givenCode = inputFild.value;
    const totalSelectedSeat = parseInt(selectSeat.innerText);
    const grandPrice = parseInt(grandTotalPrice.innerText);
    console.log(givenCode);
    let f=0;
    let p = 0;
    if(givenCode == "NEW15" && totalSelectedSeat === 4){
        const discount = grandPrice * (15/100);
        // console.log(discount);
        grandTotalPrice.innerText = grandPrice - discount;
        hideById("coupon-input");
    }
    else if(givenCode == "Couple 20" && totalSelectedSeat === 4){
        const discount = grandPrice * (20/100);
        // console.log(discount);
        grandTotalPrice.innerText = grandPrice - discount;
        hideById("coupon-input");
    }
    inputFild.value='';

}