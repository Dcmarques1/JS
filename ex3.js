let func ={
    num : 25,
    hrt : 100,
    rem : 5.50
}

let func2 ={
    num : 1,
    hrt : 200,
    rem : 20.50

}

let r1 = func.hrt * func.rem
let r2 = func2.hrt * func2.rem

console.log(`O funcionário ${func.num} recebe ${r1} ao fim do mês, enquanto o funcionário ${func2.num} recebe ${r2}`);
console.log(`O funcionário ${func.num} ganha mais que o funcionário ${func2.num}? ${r1 >= r2}`);