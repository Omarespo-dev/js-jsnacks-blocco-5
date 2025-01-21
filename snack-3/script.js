const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

// IN QUESTO CASO UTILIZZO IL MAP DOVE GLI DICO DI RESTITUIRMI UN ARRAY INCREMENTATO DI 1
const incrementato = numbers.map(function(numero){
    return numero + 1;
})
console.log(incrementato)



// VERSIONE CICLO FOR CON IL PUSH SU UN NUOVO ARRAY
// let arrayEmpty = [];

// for(let i = 0; i < numbers.length; i++){
//     // variabile iesima
//     let numeri = numbers[i]
    
//     // Faccio push nel nuovo array
//     arrayEmpty.push(numeri + 1)
    
// }

// console.log(arrayEmpty)




// MAP SI USA QUANDO DEVO FARE UN NUOVO ARRAY MA CHE HA GLI STESSI ELEMENTI IN LUNGHEZZA 
// DOVE SI FA DICHIARANO UNA VARIABILE E L ARRAY .MAP POI SI FA DIRETTAMENTE IL RETURN