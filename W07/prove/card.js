const cardForm = document.querySelector('form')

function isValidCardNumber(number){
    return number === '1234432112344321'
}

function displayErrorMessage(msg){
    document.querySelector('.errorMsg').innerHTML = msg
}

function isValidDate(expMonth, expYear){
  expMonth = parseInt(expMonth, 10);
  expYear = parseInt(expYear, 10);

  if (expYear < 100) {
    expYear += 2000;
  }

  let expirationDate = new Date(expYear, expMonth);
  let currentDate = new Date();

  if (expirationDate <= currentDate) {
    console.log('This is not a valid date!');
    return false;
  }

  console.log('This is a valid date!');
  return true;
}

cardForm.addEventListener('submit', function submitHandler(event){
    event.preventDefault();

    let errorMsg = ''

    // "this" refers to the form element here
    const cardNumber = this.cardNumber.value;
    const expMonth = this.expMonth.value;
    const expYear = this.expYear.value
    const cardHolder = this.cardHolder.value;
    const CVV = this.cvv.value;

    if (isNaN(cardNumber)){
        errorMsg += 'Card number is not a valid number\n'
    } else if (!isValidCardNumber(cardNumber)){
        errorMsg += 'Card number is not a valid credit card number\n'
    } 
    
    if (!isNaN(cardHolder)){
        errorMsg += 'Please enter a valid name\n'
    }

    if (isNaN(expMonth) && isNaN(expYear)){
        errorMsg += 'These are not valid dates\n'
    }
    if (!isValidDate(expMonth, expYear)){
        errorMsg += 'This card is expired!\n'
    }

    if (errorMsg !== ''){
        displayErrorMessage(errorMsg);
        return false
    }

    // console.log("Card Number:", cardNumber);
    // console.log("Expiration Month:", expMonth);
    // console.log("Expiration Year:", expYear);
    // console.log("Card Holder:", cardHolder);
    // console.log("CVV/CVC:", CVV);

    return true

    
});

