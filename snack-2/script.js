const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

// IN QUESTO CASO UTILIZZIAMO IL FOR EACH DOVE CICLO ARRAY DI OGGETTI ED ESTRAPOLO IL NOME  
people.forEach(function (nomi){
  console.log(nomi.name)
})



// VERSIONE CICLO FOR

// CICLO NELL ARRAY DI OGGETTI
// for(let i = 0; i < people.length; i++){
//   // variabile iesima
//   let nomi = people[i]

//   console.log(nomi.name)
// }