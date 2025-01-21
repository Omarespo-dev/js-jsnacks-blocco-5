const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];

// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.

// 1 ARRAY DOVE INDICO LA LUNGHEZZA ZUCCHINE DA 15 CM
const zucchineLength = zucchine.filter(function(zucchineLunghe){
    if(zucchineLunghe.length >= 15){
      return true
    }
    return false
})
console.log(zucchineLength)




// PROVO A FARE IL CICLO FOR 
// const zucchineLength =[]

// for(let i = 0; i < zucchine.length; i++){
//     // variabile iesima
//     let zucchineLunghe = zucchine[i]
//     if(zucchineLunghe.length >= 15){
//       zucchineLength.push(zucchineLunghe)
//     }
// }

// console.log(zucchineLength)


// OKK LO STESSO VALE PER IL SECONDO

// 2 ARRAY DOVE INDICO LE RESTANTI
const altreZucchine = zucchine.filter(function (zucchineRestanti){
  if(zucchineRestanti.length < 15 ){
    return true
  }

  return false
})

console.log(altreZucchine)