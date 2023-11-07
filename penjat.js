
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
            let mot_per_endevinar = SubstitueixLletresPerGuions(entrada);
            let lletres_errors = [];
            let errors = 0;
            let lletra = "";

            while (errors <= 6){
                let arr_tmp = ArrToStr_space(mot_per_endevinar);
                console.log(`Paraula per endevinar: ${arr_tmp}`);

                let arr_tmp2 = ArrToStr_coma(lletres_errors);
                console.log(`Lletres fallides: ${arr_tmp2}`);
                console.log(`Errors: ${errors}/6`);




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