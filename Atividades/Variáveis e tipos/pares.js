function substituiPares(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] === 0){
            console.log("Voce já é zero, para de fingir!!")
        } else if (array [i] % 2 === 0){
            console.log(`substituindo ${array[i]} por 0...`)
            array[i] = 0;
        }
    }
    return array
}
let arr = [1,2,70, 80,320, 890, 1020, 1027];
substituiPares(arr);
console.log(substituiPares(arr));