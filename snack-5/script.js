const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

// IN QUESTO CASO USO IL FILTER DOVE ESTRAPOLO L ARRAY E FACCIO CONDIZIONE DEI NUMERI PARI
const numeriPari = nums.filter(function(numeri){
    if(numeri % 2 === 0){
        return true
    }
    return false
})
console.log(numeriPari)




// PROVO A FARLO CON CICLO FOR
// NUOVO ARRAY DOVE FACICO PUSH DI NUMERI PARI
// let numeriPari = []

// for(let i = 0; i < nums.length; i++){
//     // variabile iesima
//     let numeri = nums[i]

//     if(numeri % 2 === 0){
//         numeriPari.push(numeri)
//     }
// }

// console.log(numeriPari)



// QUANDO DEVO PRENDERE ALCUNI ELEMENTI SI USA IL FILTER MA SI USA LA CONDIZIONE



