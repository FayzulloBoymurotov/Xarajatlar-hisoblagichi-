var usdSum = 9433.34;
var usdYevro = 10354.03;

var planeTicket = 500;
var hotelPayment = 250;
var EnjoyYevro = 120;

var usdPlane = usdSum * planeTicket;
var usdHotel = usdSum * hotelPayment;
var usdYevro = usdYevro * EnjoyYevro;


var usdAll = usdPlane + usdHotel + usdYevro;


var alisherSum = prompt(`Alisher senmi Aqshga ketmoqchimisan? Qancha puling bor? 
So\'mda kiritchi?`, 0);

var heading = document.querySelector('.heading');

if (usdAll > alisherSum) {
    console.log('Oq yo\'l Alisher');
    heading.textContent = "Oq yo\'l Alisher";
} else {
    console.log(`Alisher ozgina sabr qilish kerak bolar ekan`);
    heading.textContent = "Alisher ozgina sabr qilish kerak bolar ekan";
}
