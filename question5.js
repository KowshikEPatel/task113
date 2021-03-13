//5. Return all the palindromes in an array
let stringArray=["Guvi","racecar","malayalam","test","host"];

let palindormOnly=stringArray.filter(val=>checkPalindrome(val));
function checkPalindrome(str){
    let flag=0;
    for(let iter=0;iter<parseInt(str.length/2);iter++){
       console.log(str[iter],str[str.length-1-iter],flag);
       if(str[iter]===str[str.length-1-iter]) {
           continue;
       }
       else{
           flag=1;
           break;
       }
    }
    if(!flag){
        return true;
    }
    else{
        return false;
    }
}

console.log(palindormOnly);
