function numberEmeliyyat(number) {
    if (number%2==0){
        number/2;
    }
    else{
        number=number*3+1;
    }
    return number;
}
let cavab =numberEmeliyyat(5);
console.log(cavab);