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

//funció que torna true si troba la lletra en el mot
function LletraDinsMot(lletra, mot){
    for(let i=0; i<mot.length; i++){
        if(mot.charAt(i) === lletra){
            return true;
        }
    }
    return false;
}

//funció que cerca si una lletra està en l'array
function buscaLletraEnArray(lletra, myArr){
    for (let i=0; i<myArr.length; i++){
        if(myArr[i] === lletra){
            return true;
        }
    }
    return false;
}


//funció que comprova si encara queden lletres per endevinar
function QuedenEspais(myArr){
    for (let i=0; i<myArr.length; i++){
        if (myArr[i] === "_"){
            return true;
        }
    }
    return false;
}


//comprobació si ha hagut canvi en l'array abans i després de comprobar si la lletra hi és
function compareArrays(array1, array2){
    for (let m=0; m<array1.length; m++){
        if (array1[m] !== array2[m]){
            return true;
        } else {
            return false;
        }
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
            let lletra_fallida = "";
            do {
                lletra = prompt("Entra una lletra:").toLowerCase();
            } while (lletra.length !== 1 || !/[a-z]/.test(lletra)) {
                
                let array_espais = StrToArray(mot_espais);
                let errors = 0;  //intents fallits
                //bucle que funcionarà fins que quedin intents disponibles o lletres per endivinar
                while (errors < 7) {

                    while (QuedenEspais(array_espais)){
                        let array_abans = array_espais.slice();
                        console.log(array_abans);
                        for (let j=0; j<arrEntrada.length; j++){
                            if (arrEntrada[j]==lletra){
                                array_espais[j] = lletra;
                            }
                        }
                        console.log(array_espais);


                        if (compareArrays(array_abans, array_espais)){
                            errors++;
                            lletra_fallida = lletra_fallida + ", " + lletra;
                            console.log(`Lletres fallades ${errors}/6: ${lletra_fallida}`);
                            if (errors >= 6) {
                                console.log("Game over");
                                return;
                            }
                        }
               


                        /*
                        if (!(QuedenEspais(array_espais))){
                            console.log("Enhorabona! Has encertat la paraula.");
                            ElPenjat();
                        }
                        */
                        lletra = prompt("Entra una lletra:").toLowerCase();
                        
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