const numero1 = 10;
const numero2 = 35;
const numero3 = 30;

if(numero1 > numero2 && numero1 > numero3) {
    console.log(`${numero1} - ${Object.keys({numero1})[0]}`);
}else if(numero2 > numero1 && numero2 > numero3) {
    console.log(`${numero2} - ${Object.keys({numero2})[0]}`);
}else{
    console.log(`${numero3} - ${Object.keys({numero3})[0]}`);
}