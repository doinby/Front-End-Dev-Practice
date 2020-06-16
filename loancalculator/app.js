document.getElementById('loan-form').addEventListener('submit', calculateResult);

// Calculate result
function calculateResult(e) {
    console.log('cal');

    // UI variables
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principle = parseFloat(amount.value);
    const calcularedInterest = parseFloat(interest.value) / 100 / 12;
    calculatedPayment = parseFloat(years.value) * 12;

    // Compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    

    e.preventDefault();
}