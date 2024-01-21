
let numSecret = Math.floor(Math.random() * 10) + 1; // Returns a random integer from 1 to 10:
//let numSecreto = 2 //Manual Asignation for numSecret
console.log(numSecret);


let correct = false;

while(correct == false) {
    
    try{

        let numUser = prompt("Introduzca un valor entre 0 - 10: ");
        console.log(numUser);

        if(numUser == numSecret & !isNaN(numUser) && numUser != null && numUser != "") {
            //Se cumplio la condicion
            alert(`Numero correcto!, el numero fue: ${numSecret}`);
            correct = true;
        }else if(numUser > 10 | numUser < 0){
            alert("Valor ingresado no es valido, intenta nuevamente");
            correct = false;
        }else{
            //No se cumplio la condicion
            alert("No acertaste el numero, intenta nuevamente");
            correct = false;
        }
    
    }catch(error){
        console.error(error);
    }
}

/*
Bloque de comentario
*/

//Comentario simple