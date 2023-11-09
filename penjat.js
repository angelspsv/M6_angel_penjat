
//funció que canvia les lletres per guions
function SubstitueixLletresPerGuions(entrada){
    let new_arr = [];
    for (let i=0; i<entrada.length; i++){
        new_arr[i] = '_';
    }
    return new_arr;
}


//funció que trasforma un array a string
function ArrayToStr(myArr){
    let new_str = "";
    for (let i=0; i<myArr.length; i++){
        new_str = new_str + myArr[i];
    }
    return new_str;
}

//funció que trasforma un array a string amb separadors
function ArrToStr_space(myArr){
    let new_str = "";
    for (let i=0; i<myArr.length; i++){
        new_str = new_str + myArr[i] + " ";
    }
    return new_str;
}


//funció que trasforma un array a string amb comes per separadors
function ArrToStr_coma(myArr){
    let new_str = "";
    for (let i=0; i<myArr.length; i++){
        //treure després la darrera coma
        new_str = new_str + myArr[i] + ", ";
    }
    return new_str;
}


//funció que torna true si troba la lletra en el mot
function LletraDinsMot(lletra, mot){
    for(let i=0; i<mot.length; i++){
        if(mot.charAt(i) == lletra){
            return true;
        }
    }
    return false;
}

function init_buttons(){
    let text = "";
    let abc = "abcdefghijklmnopqrstuvwxyz";
    for (let i=0; i<abc.length; i++){
        text += `<button id="${abc[i]}" onclick='procesaLletra("${abc[i]}");'>${abc[i]}</button>`;
    } 
    let div1 = document.getElementById("letras");
    console.log(text);
    div1.innerHTML = text;
}

function procesaLletra(lletra){
    console.log(lletra);
}


function novaPartida(){
    ElPenjat();
    init_buttons();
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
    let win = 0;
    let lost = 0;
    
    let num = 5;

    while (true) {
        num = parseInt(prompt("Tria el número de l'opció que vols:"));

        if (num == 1) {
            //demana un mot a l'usuari
            let entrada = prompt("Entra paraula").toLowerCase(); 
            let mot_per_endevinar = SubstitueixLletresPerGuions(entrada);
            let lletres_errors = [];
            let errors = 0;
            let lletra = "";

            while (errors <= 6){
                //mostra el mot amb espais
                let arr_tmp = ArrToStr_space(mot_per_endevinar);
                console.log(`Paraula per endevinar: ${arr_tmp}`);

                //mostra les lletres fallides amb comes
                let arr_tmp2 = ArrToStr_coma(lletres_errors);
                console.log(`Lletres fallides: ${arr_tmp2}`);
                console.log(`Errors: ${errors}/6`);

                //si arriba als 6 intents fallits -> game over
                if (errors == 6) break;

                //demana lletra i comproba que sigui una lletra
                lletra = prompt("Entra una lletra:").toLowerCase();

                if (lletra.length !== 1 || !/[a-z]/.test(lletra)){
                    console.log("Només pots introduir una lletra:");
                } else {
                    if (LletraDinsMot(lletra, entrada)) {
                        for (let i=0; i<entrada.length; i++){
                            if (entrada[i] == lletra) {
                                mot_per_endevinar[i] = lletra;
                            }
                        }
                        //evalua si queden més lletres per endevinar
                        let str_temp = "_";
                        if (!LletraDinsMot(str_temp, mot_per_endevinar.toString())) {
                            console.log(`Enhorabona! Has endevinat el mot: ${entrada}`);
                            win++;
                            break;
                        }
                    } else {
                        //afegeix les lletres fallides
                        if (! LletraDinsMot(lletra, lletres_errors.toString())){
                            lletres_errors.push(lletra);
                            errors++;
                        }
                    }
                }
            }

            if (errors >= 6){
                console.log(`Has mort. El mot per endevinar era: ${entrada}`);
                lost++;
            }
        //altres opcions del joc
        } else if (num == 2) {
            console.log("Entra a estadístiques");
            let total_partides = lost + win;
            console.log(`Total de partides: ${total_partides}`);
            console.log("Partides guanyades (" + ((win/total_partides)*100) + "%): " + win);
            console.log("Partides perdudes (" + ((lost/total_partides)*100) + "%): " + lost);
        } else if (num == 3) {
            console.log("Sortida");
            return;
        } else {
            console.log("Error");
        }
    }
}