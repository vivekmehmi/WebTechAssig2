
//constants
const name = document.getElementById("fname");
const noofaddress = document.getElementById("noofaddress");
const shows = document.getElementById("shows");
const delivery = document.getElementById("delivery");
const displaytotal = document.getElementById("displaytotal");
const seatprice = document.getElementById("seatprice");
const order = document.getElementById("book");
const showselect = document.querySelector("#shows");


//funtions
var showprices = new Array();
showprices["79"]=79;
showprices["85"]=85;
showprices["67"]=67;
showprices["83"]=83;

function getshowprice() {
const display = document.getElementById("display");

    var showprice = 0;
    var form = document.forms["bookform"];
    var selectedshow = form.elements["shows"]

    showprice = showprices[selectedshow.value];
    return showprice;
}


var deliveryprices = new Array();
deliveryprices["0"]=0;
deliveryprices["1.50"]=1.50;
deliveryprices["3.99"]=3.99;

function getdeliveryprice() {
const displaydelivery = document.getElementById("displaydelivery");
    var deliveryprice = 0;
    var form = document.forms["bookform"];
    var selecteddelivery = form.elements["delivery"]

    deliveryprice = deliveryprices[selecteddelivery.value];
    return deliveryprice;
}


function gettotal() {
const displaytotal = document.getElementById("displaytotal");
const seats = document.getElementById("seats");
const noofseats = document.querySelector("#seats");
    var showtotal = getshowprice()
    var showdeliverytotal = getdeliveryprice()
    var seatstotal = noofseats.value;

    displaytotal.innerText = (`Total: £${(showtotal * seatstotal) + (showdeliverytotal)}`);
    console.log('Thank you for your order')
}


function getdiscount() { 
    const noofseats = document.querySelector("#seats"); 
    const x = 10;
    const y = 6; 
    var seatstotal = noofseats.value;
    var showtotal = getshowprice()
    var DiscountPrice = 0;

if (seatstotal >= y) { 
         DiscountPrice = showtotal - (showtotal * .10);
        }

else (seatstotal >= x);
        DiscountPrice = showtotal - (showtotal * .15);
    
    
    return DiscountPrice;
}


function showdiscount() {
    const discount = document.getElementById('discount');
    var showingdiscount = getdiscount()
    var bookcost = gettotal()

    discount.innerText = (`Discount: £${showingdiscount}`);
}


function showfinalcost() {
    const finalcost = document.getElementById('finalcost')
    var discount = getdiscount()
    var bookcost = gettotal()

    finalcost.innerText = (`Final Cost: £${bookcost - discount}`);
}


function showchosenshow() {
    const displaychosen = document.getElementById('chosenshow');

    displaychosen.innerText = (`Show: ${bookform.shows[bookform.shows.selectedIndex].text}`)
}


function showselectedtickets() {
    const noofseats = document.querySelector("#seats"); 
    const showtickets = document.getElementById('chosentickets')
    var tickets = noofseats.value

    showtickets.innerText = (`No of Tickets: ${tickets}`)
}


function showsingleticket() {
    const singleprice = document.getElementById('singleprice');

    singleprice.innerText = (`Price of Ticket: £${bookform.shows[bookform.shows.selectedIndex].value}`)
}


function showdeliverymethod() {
    const deliverychoice = document.getElementById('deliverychoice');

    deliverychoice.innerText = (`Choice of Delivery: ${bookform.delivery[bookform.delivery.selectedIndex].text}`)
}
