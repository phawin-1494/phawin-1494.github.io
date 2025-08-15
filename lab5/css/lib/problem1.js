function validateInput(input) {
     /* validate if input is positive integer */ 
    if (input > 0){
        findPrimes(input)
        return true;
    }
    
    
    }

function isPrime(num){
    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0){
            return false;
        }
    }
    return true ;
}

function findPrimes(limit) { 
    /* find all primes up to limit */

    const primeNumber = [];
    for (let i = 2; i <= limit; i++){
        if (isPrime(i)){
            primeNumber.push(i);
        }
    }
    displayPrimes(primeNumber, limit);
}
function displayPrimes(primes, limit) {
     /* display results on webpage */ 
    alert(`For n = ${limit} prime numbers are ${primes}`);
    }


let valid = undefined;
while (valid == undefined){
    let i = prompt("Enter a positive integer");
    valid = validateInput(i);
}