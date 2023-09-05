'use strict';


const userNames = `Luigi De Russis, Luca Mannella,   Fulvio Corno, 
Juan Pablo   Saenz   Moreno, 
Enrico Masala, Antonio  Servetti,  Eros Fani `;



const u = userNames.replace(/[^a-z0-9,]/gi,'');
//console.log(u);

const arrayNames = userNames.replace(/[^a-z0-9,]/gi,'').split(',');

//console.log(arryNames);

const acronymus = arrayNames.map(word => word.replace(/[^A-Z]/g,'')).sort((a,b) => a.localeCompare(b));

console.log(acronymus);



