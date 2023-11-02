function ElPenjat(){
    console.log("1. Iniciar un joc" + '\n' + "2. Estadístiques" + '\n' + "3. Sortir");
    
    let num = 5;

    while (num > 3 || num < 1) {
        num = parseInt(prompt("Tria el número de l'opció que vols:"));

        if (num == 1) {
            console.log("Comença el joc");
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