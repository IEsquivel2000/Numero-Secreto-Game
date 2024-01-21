
let numSecret = Math.floor(Math.random() * 10) + 1; // Returns a random integer from 1 to 10:
//let numSecreto = 2 //Manual Asignation for numSecret
console.log(numSecret);


let correct = false;

let intentos = 1; //Intentos del jugador

while(correct == false) {
    
    try{

        let numUser = prompt("Introduzca un valor entre 0 - 10: ");
        console.log(numUser);

        if(numUser == numSecret & !isNaN(numUser) && numUser != null && numUser != "") {
            //Se cumplio la condicion
            alert(`Numero correcto!, el numero fue: ${numSecret}. Se utilizo una cantidad de ${intentos} intentos`);
            correct = true;
        }else if(numUser > 10 | numUser < 0){
            alert("Valor ingresado no es valido, intenta nuevamente");
            correct = false;
        }else{
            if(numUser > numSecret){
                //No se cumplio la condicion
                alert("El numero introducido es muy alto, intenta nuevamente");
            }else{
                //No se cumplio la condicion
                alert("El numero introducido es muy bajo, intenta nuevamente");
            }
            intentos++;
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