//funció que trasforma un array a string
function ArrayToStr(myArr){
    let new_str = "";
    for (let i=0; i<myArr.length; i++){
        new_str = new_str + myArr[i];
    }
    return new_str;
}

//funció que transforma un string a array
function StrToArray(paraula){
    let new_arr = [];
    for (let i=0; i<paraula.length; i++){
        new_arr[i] = paraula.charAt(i);
    }
    return new_arr;
}

//funció que cerca i substitueix la lletra trobada
function BuscaLetraEnPalabra(array_str, letra){
    for (let i=0; i<array_str.length; i++){
        if (array_str[i] === letra){

        }
    }
}

//funció que torna true si troba la lletra en el mot
function LletraDinsMot(lletra, mot){
    for(let i=0; i<mot.length; i++){
        if(mot.charAt(i) === lletra){
            return true;
        }
        return false;
    }
} 

//programa que simula el joc del penjat
//demana 1 mot i 1 lletra
//6 intents
function ElPenjat(){
    console.log("1. Iniciar un joc" + '\n' + "2. Estadístiques" + '\n' + "3. Sortir");
    
    let num = 5;

    while (num > 3 || num < 1) {
        num = parseInt(prompt("Tria el número de l'opció que vols:"));

        if (num == 1) {
            let entrada = prompt("Entra paraula").toLowerCase(); 
            let longitud = entrada.length;
            let mot_espais = "";    
            let arrEntrada = [];
            
            //mot amb espais en cop de lletres
            for (let i=0; i<longitud; i++){
                mot_espais = mot_espais + " _";
            }
            console.log(mot_espais);

            for (let m=0; m<entrada.length; m++){
                arrEntrada[m] = entrada.charAt(m);
            }

            //demanem una lletra a l'usuari
            //fa comprovacions
            let lletra = "";
            do {
                lletra = prompt("Entra una lletra:").toLowerCase();
            } while (lletra.length !== 1 || !/[abcçdefghijklmnñopqrstvxwyz]/.test(lletra)) {
                
                let intents;  //intents
                
                // miro si la letra está entre las letras de la palabra introducida
                if (LletraDinsMot(lletra, mot)){

                } else {
                    intents++;
                }




                console.log(`El mot introduit és: ${arrEntrada}`);
            }
            


            
        } else if (num == 2) {
            console.log("Entra a estadístiques");
        } else if (num == 3) {
            console.log("Sortida");
            return;
        } else {
            console.log("Error");
        }


    }
}