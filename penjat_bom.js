//variables globales
let win = 0;
let lose = 0;
let errors = 0;


function NovaPartida(){
    let letra = "";
    
    //pide la palabra por adivinar al usuario
    let palabra = prompt("Entra una paraula:");

    //convierte la palabra con _ y " "
    let palabra_espacios = StrAmbEspais(palabra);

    //muestra la palabra con espacios
    procesaMotOcult(palabra_espacios);
    
    if(errors<7){


        //s'evalua cada cop que l'usuari introdueix una lletra

    } else {

    }
}





// Llama a esta función para inicializar el teclado dinámico al cargar la página
window.addEventListener("load", function() {
    init_buttons();
});

function init_buttons() {
    let text = "";
    let abc = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < abc.length; i++) {
        text += `<button id="${abc[i]}" onclick='procesaLletra("${abc[i]}");'>${abc[i]}</button>`;
    }
    let div1 = document.getElementById("teclado_letras");
    div1.innerHTML = text;
}

//función que recibe una palabra y devuelve otra con '_' y espacios
function StrAmbEspais(word) {
    let w_o_r_d = "";
    for(let i=0; i<word.length; i++){
        w_o_r_d = w_o_r_d + "_ ";
    }
    return w_o_r_d;
}

//funció que mostra en el navegador la paraula ocultada amb espais
function procesaMotOcult(paraula){
    let mostraMotElement = document.getElementById("lletresPerEndevinar");
    mostraMotElement.innerHTML = paraula;
}

//función que recoge la letra del teclado dinámico
//comprueba si está o no dentro de la palabra
function procesaLletra(lletra){
    if(LletraDinsMot(lletra, palabra)){


    } else {
        errors++;
    }
    
    
    alert(lletra);
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