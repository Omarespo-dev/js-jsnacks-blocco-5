const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

// Crea un nuovo array coi nomi di tutti gli autori
// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']

// DICHIARO NUOVO ARRAY DOVE ANDRANNO I NOMI 
// USO MAP PERCHE DEVO CREARE UN NUOVO ARRAY DOVE ANDRANNO SOLO I NOMI 
const newArrayNomi = posts.map(function (nomi){
  return nomi.author
})

console.log(newArrayNomi)




// VERSIONE CICLO FOR
// let newArrayNomi = []

// for(let i = 0; i < posts.length; i++){
//   // variabile iesima
//   let nomIesima = posts[i]
//   // FACCIO PUSH NEL ARRAY VUOTO E PRENDO I NOMI DA NOMiESIMA
//   newArrayNomi.push(nomIesima.author)
// }

// console.log(newArrayNomi)