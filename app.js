
let numSecret = Math.floor(Math.random() * 10) + 1; // Returns a random integer from 1 to 10:
//let numSecreto = 2 //Manual Asignation for numSecret
console.log(numSecret);


let correct = false;

let intentos = 1; //Intentos del jugador
let intentosMax = 5// Numero de intentos maximo

alert(`Bienvenido, tienes ${intentosMax} intentos`)
while(correct == false) {
    
    try{
        let numUser = prompt("Introduzca un valor entre 0 - 10: ");
        console.log(numUser);

        if(numUser == numSecret & !isNaN(numUser) && numUser != null && numUser != "") {
            //Se cumplio la condicion
            alert(`Numero correcto!, el numero fue: ${numSecret}. Se utilizo una cantidad de ${intentos} ${intentos == 1 ? 'intento':'intentos'}`);
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
            alert(`Tienes ${intentosMax-intentos} intentos restantes`);
            intentos++;
            correct = false;
        }
        if(intentos > intentosMax){
            alert("Llegaste al maximo de intentos posibles");
            break;
        }
    
    }catch(error){
        console.error(error);
    }
}

/*
Bloque de comentario
*/

//Comentario simple