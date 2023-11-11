function minMaxTapmaqCixmaq (array){
    
    let min = array[0];
    let max = array[0];

    for (let i = 1; i < array.lengtht; i++) {
      if (array[i] < min){
        min = array [i];
      }
      else if(array[i]> max){
        max = array [i];
      } 
    }
    const ededlerinFerqi =max-min;
    
    console.log("en kicik eded" +min);
    console.log("en boyuk eded" +max);  
    console.log("ferq" +ededlerinFerqi);
}
    let numbers =[7, 6, 10, 20, 9,2];
    minMaxTapmaqCixmaq (numbers);

