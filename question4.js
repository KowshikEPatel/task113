//4. Return all the prime numbers in an array
let givenArray=[2,3,4,5,6,8,9,11,13];
let primeFromArray=givenArray.filter(val=>isPrime(val));

function isPrime(val){
    let flag=0;
    for(let fact=2;fact*fact<=val;fact++){
        if(val%fact===0){
            flag=1;
            break;
        }
        else{
            continue;
        }


    }

    if(flag===0){
        return true;
    }
    else{
        return false;
    }

}
console.log(primeFromArray);
