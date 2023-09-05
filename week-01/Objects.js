'use strict';

let book = {
author : "Enrico",
pages: 340,
chapterPages: [90,50,60,140],
};

let book2 = {...book};
console.log(book2);
book2.pages =  10;
console.log(book);
console.log(book2);

/*  
    Questo metodo serve per creare un nuovo spazio di memoria per l'arry
    poiche gli array sono passati per riferimento (shallow copy),
    se viene specificata una proprietà già presente essa viene sovrascritta.l
*/ 

let book3 = Object.assign({},book,{chapterPages: [...book.chapterPages]});
  
