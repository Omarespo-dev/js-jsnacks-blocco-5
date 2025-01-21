const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera i dati dello studente con id 2
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }

// IN QUESTO CASO USO FIND 
const studente2 = students.find(function(studente){
  return studente.id === 2
})

console.log(studente2)



// con ciclo for 
// let newArray2 = []

// for(let i = 0; i < students.length; i++){
//   // variabile iesimo
//   let studente = students[i]
//   // variabile dove prendo il secondo elemento
//   let secondObject = students[1]
//   // Condizione dove gli dico di estrapolarmi solo il secondo 
//   if(studente===secondObject){
//     newArray2.push(secondObject)
//   }
  
// }

// console.log(newArray2)



