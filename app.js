
let numSecreto = Math.floor(Math.random() * 10) + 1; // Returns a random integer from 1 to 10:
let numUser = prompt("Me indicas un numero por favor: ");

console.log(numUser);

if (numUser == numSecreto){
    alert("Numero correcto!");

}