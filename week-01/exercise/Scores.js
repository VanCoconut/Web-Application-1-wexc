'use strict';

const scores = [-12, -3, 18, 10, 4, -1, 0, 14];

const avgBefore = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);

const modifiedScores = scores.filter((a) => a >= 0);

modifiedScores.sort((a, b) => a - b);

modifiedScores.splice(0, 2);

console.log(modifiedScores);

const NN = scores.length - modifiedScores.length;

console.log(NN);

const avgRound = Math.round(modifiedScores.reduce((a, b) => a + b, 0) / modifiedScores.length);

console.log(avgRound);

const AddAvgArray = Array(NN + 2).fill(avgRound);

modifiedScores.splice(modifiedScores.length, 0, ...AddAvgArray);

console.log(`The default array is : ${scores}
                \nHa una media di ${avgBefore}
                \nThe improved arry is : ${modifiedScores}
                \nHa una media di ${avgRound}`);