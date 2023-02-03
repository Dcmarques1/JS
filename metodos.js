const nums = [40,35,12,8,72]

//method map
let resultado = nums.map(function(valor){
    return valor * 2
})

console.log(resultado)

//method filter

let lista = [7,13,22,15,33,55]
let list2 = []

list2 = lista.filter(function(item){
    if(item < 20){
        return true
    }else{
        return false
    }
})
console.log(list2);

lista.sort(comparefunction)
console.log(lista);