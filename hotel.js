//Link Testing
console.log('Hi');

//Updating the Live Bars!

const singleInput=document.getElementById('singleRoom');
const singleRoomType = document.getElementById('singleBox');

function updateSingle(){
    const singleRoom=singleInput.value;
    singleRoomType.innerHTML = `Single:  ${singleRoom}<br>`;
}
singleInput.addEventListener('input',updateSingle)
//
const doubleInput=document.getElementById('doubleRoom');
const doubleRoomType=document.getElementById('doubleBox');
function updateDouble(){
    const doubleRoom=doubleInput.value;
    doubleRoomType.innerHTML = `Double:  ${doubleRoom}<br>`;
}
doubleInput.addEventListener('input',updateDouble)
//
const tripleInput=document.getElementById('tripleRoom');
const tripleRoomType=document.getElementById('tripleBox');
function updateTriple(){
    const tripleRoom=tripleInput.value;
    tripleRoomType.innerHTML = `Triple:  ${tripleRoom}<br>`;
}
tripleInput.addEventListener('input',updateTriple)
//
const localAdultDivers=document.getElementById('participantsLocalAdultDiving');
const localAdultDiverPlaque=document.getElementById('localAdults');
function updateLocalAdultDiver(){
    const localAdultDiver=localAdultDivers.value;
    localAdultDiverPlaque.innerHTML = `Local Adults:  ${localAdultDiver}<br>`;
}
localAdultDivers.addEventListener('input',updateLocalAdultDiver)
//
const foreignAdultDivers=document.getElementById('participantsForeignAdultDiving');
const foreignAdultDiverPlaque=document.getElementById('foreignAdults');
function updateForeignAdultDiver(){
    const foreignAdultDiver=foreignAdultDivers.value;
    foreignAdultDiverPlaque.innerHTML = `Foreign Adults:  ${foreignAdultDiver}<br>`;
}
foreignAdultDivers.addEventListener('input',updateForeignAdultDiver)
//
const localChildDivers=document.getElementById('participantsLocalChildDiving');
const localChildDiverPlaque=document.getElementById('localChildren');
function updateLocalChildDiver(){
    const localChildDiver=localChildDivers.value;
    localChildDiverPlaque.innerHTML = `Local Children:  ${localChildDiver}<br>`;
}
localChildDivers.addEventListener('input',updateLocalChildDiver)
//
const foreignChildDivers=document.getElementById('participantsForeignChildDiving');
const foreignChildDiverPlaque=document.getElementById('foreignChildren');
function updateForeignChildDiver(){
    const foreignChildDiver=foreignChildDivers.value;
    foreignChildDiverPlaque.innerHTML = `Foreign Children:  ${foreignChildDiver}<br>`;
}
foreignChildDivers.addEventListener('input',updateForeignChildDiver)
//
function totalDivers(){
    const totalNoOfDivers=localChildDivers.value+localAdultDivers.value+foreignAdultDivers.value+foreignChildDivers.value
    return totalNoOfDivers
}
const totDivers=totalDivers()
const numberOfDiversPlaque=document.getElementById('totalDivers');
function displayTotalDivers(){
    const diverNumbers=totalNoOfDivers
    numberOfDiversPlaque.innerHTML = `Divivng:  ${diverNumbers}<br>`;
}
foreignChildDivers.addEventListener('input',displayTotalDivers)
//Function for calculating the total bill:
function roomBillMaker(){
    const singleRoomPrice=25000
    const doubleRoomPrice=35000
    const tripleRoomPrice=40000
    const total=(singleRoomPrice*singleInput.value)+(doubleRoomPrice*doubleInput.value)+(tripleRoomPrice*tripleInput.value)
    return total
}
const divingInstructor=document.getElementById('binaryRadioButtonsForDivingInstructor');
//Function for calculating the price of the Adventure Bookings:
function divingBillMaker(){
    const lankanAdultDiver=5000
    const lankanChildDiver=2000
    const notLankanAdultDiver=10000
    const notLankanChildDiver=5000
    const divingTotal=(localAdultDivers.value*lankanAdultDiver)+(foreignAdultDivers.value*notLankanAdultDiver)+(localChildDivers.value*lankanChildDiver)+(foreignChildDivers.value*notLankanChildDiver)
    return divingTotal
}
function totalBillMaker(){
    const grandTotal=divingBillMaker()+roomBillMaker()
    return grandTotal
}

const totalPlaque=document.getElementById('total');
function updateGrandTotal(){
    const grand_total_bill=totalBillMaker();
    totalPlaque.innerHTML=`Total:LKR ${grand_total_bill}<br>`;
}
tripleInput.addEventListener('input',updateGrandTotal)
doubleInput.addEventListener('input',updateGrandTotal)
singleInput.addEventListener('input',updateGrandTotal)
localAdultDivers.addEventListener('input',updateGrandTotal)
foreignAdultDivers.addEventListener('input',updateGrandTotal)
localChildDivers.addEventListener('input',updateGrandTotal)
foreignChildDivers.addEventListener('input',updateGrandTotal)

var totalBill = 0;

// Function to calculate bill based on selected option
function calculateBill() {
    var selectedOption = document.querySelector('input[name="option"]:checked');

    if (selectedOption) {
    var optionValue = selectedOption.value;

    if (optionValue === 'yes') {
        totalBill += 5000;
    }
    else totalBill = 0; 

    // document.getElementById("totalBill").innerText = "Total Bill: $" + totalBill;
    return totalBill
    }
}

// Add event listeners to radio buttons
var radioButtons = document.querySelectorAll('input[name="instructor"]');
radioButtons.forEach(function(radioButton) {
    radioButton.addEventListener('change', calculateBill);
});
