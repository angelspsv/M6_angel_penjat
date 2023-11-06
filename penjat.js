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
            //no acabat
            // XXX
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

//funció que comprova si encara queden lletres per endevinar
function QuedenEspais(myArr){
    for (let i=0; i<myArr.length; i++){
        if (myArr[i] === "_"){
            return true;
        }
        return false;
    }
}

//  ________________|
//  |               |
//  |----o<-<       |
//
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
            let mostra_mot = "";    
            let arrEntrada = [];
            
            //mot amb espais junts en cop de lletres
            for (let i=0; i<longitud; i++){
                mot_espais = mot_espais + "_";
            }
            //console.log(mot_espais);

            //mostra el mot amb els espais separats, es veu més clar la seva longitud
            for (let i=0; i<longitud; i++){
                mostra_mot += mot_espais[i] + " ";
            }
            console.log(mostra_mot);

            //aquí el mot de lletres està en format array
            for (let m=0; m<entrada.length; m++){   
                arrEntrada[m] = entrada.charAt(m);
            }

            //demanem una lletra a l'usuari
            //fa comprovacions
            let lletra = "";
            do {
                lletra = prompt("Entra una lletra:").toLowerCase();
            } while (lletra.length !== 1 || !/[abcçdefghijklmnñopqrstvxwyz]/.test(lletra)) {
                
                let array_espais = StrToArray(mot_espais);
                let intents = 0;  //intents fallits
                //bucle que funcionarà fins que quedin intents disponibles o lletres per endivinar
                while (intents < 7) {
                    console.log("Passa while intents");

                    if (QuedenEspais(array_espais)){
                        console.log("Passa array espais");

                        //aquí substituir les espais de les lletres endevinades per les lletres i mostrar la nova situació

                        return;


                    } else {
                        intents++;
                        if (intents == 6) {
                            console.log("Game over");
                            return;
                        }
                    }
                }


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