

var dollarsum=9433.34;
console.log(typeof dollarsum, dollarsum);

var eurosum=10354.03;
console.log(typeof eurosum, eurosum);



var ticket=500;
console.log(typeof ticket, ticket);

var hotel=250;
console.log(typeof hotel, hotel);

var museum=120;
console.log(typeof museum, museum);



var ticketsum=ticket * dollarsum;
var hotelsum=hotel * dollarsum;
var museumsum=museum * eurosum;

var allsum=ticketsum + hotelsum + museumsum;

var warning=document.querySelector(".warning")
var Alisher=prompt("Qancha pulingiz bor?"); 

if (Alisher >= allsum) {
    warning.textContent="Oq yo'l"
    warning.style.color='green'
} else {
    warning.textContent="Alisher o'zgina sabr qilish kerak bolar ekan"
    warning.style.color='red'
}

console.log("warning");



