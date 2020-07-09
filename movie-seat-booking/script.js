const container = document.querySelector('.container');
const seats = document.querySelector('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById("total");
const movieSelect = document.getElementById('movie');

const ticketPrice = +movieSelect.value; // '+' sign for parseInt()

container.addEventListener('click', (e) => {
    
});