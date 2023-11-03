function ElPenjat(){
    console.log("1. Iniciar un joc" + '\n' + "2. Estadístiques" + '\n' + "3. Sortir");
    
    let num = 5;

    while (num > 3 || num < 1) {
        num = parseInt(prompt("Tria el número de l'opció que vols:"));

        if (num == 1) {
            let entrada = prompt("Entra paraula").toLowerCase(); 
            let longitud = entrada.length;
            let mot_espais = "";    
            
            //mot amb espais en cop de lletres
            for (let i=0; i<longitud; i++){
                mot_espais = mot_espais + " _";
            }
            console.log(mot_espais);

            //demanem una lletra a l'usuari
            let lletra = "m";
            let cerca_lletra = lletra.match(/[abcdefghijklmnoprstqwyñçvxz]/g);
            while ((lletra.length == 1) && (cerca_lletra)){
                lletra = prompt("Entra una lletra:").toLowerCase();
                cerca_lletra = lletra.match(/[abcdefghijklmnoprstqwyñçvxz]/g);
                if ((lletra.length == 1) && (cerca_lletra)) {
                    console.log("Es una lletra\n " + lletra);
                    return;

                } else {
                    console.log("no es una lletra");
                }
                
            }
            

            //let result = text.match(/[aeiou]/g);




            
        } else if (num == 2) {
            console.log("Entra a estadístiques");

        } else if (num == 3) {
            console.log("Sortida");
            return;
        } else {
            console.log("Error");
        }


    }
    console.log("El programa sigue");

}