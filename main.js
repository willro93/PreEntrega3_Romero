let iniciar = document.querySelector("#botonInicio");

//funciones para generar los números de los dados
function tirarDado1() {
    let dado1 = () => {
        return Math.ceil(Math.random() * 6);
    }
    document.querySelector("#imgDado1").src="/media/dados/"+dado1()+".svg";      
}
 
function tirarDado2() {
        let dado2 = () => {
            return Math.ceil(Math.random() * 6);
        }
        document.querySelector("#imgDado2").src="/media/dados/"+dado2()+".svg";
}

//funcion para apretar los botones de los dados
function botonesDados(){
    let boton1 = document.querySelector("#botonDado1");
     boton1.onclick = tirarDado1;

    
     let boton2 = document.querySelector("#botonDado2");
     boton2.onclick = tirarDado2;
}


let dosJugadores = document.querySelector("#botonDosJugadores");
//acciones para hacer aparecer 2 jugadores
function accionDosJugadores(){
    let jugador1 = document.querySelector("#p1");
    let jugador2 = document.querySelector("#p2");
    jugador1.style.background= "blue";
    jugador1.style.borderColor= "purple";
    jugador2.style.background= "red";
    jugador2.style.borderColor= "purple";
    botonesDados();
}

let tresJugadores = document.querySelector("#botonTresJugadores");
//acciones para hacer aparecer 3 jugadores
function accionTresJugadores(){
    let jugador3 = document.querySelector("#p3");
    jugador3.style.background= "orange";
    jugador3.style.borderColor= "purple";
    accionDosJugadores()
    botonesDados();
}

let cuatroJugadores = document.querySelector("#botonCuatroJugadores");
 //acciones para hacer aparecer 4 jugadores
function accionCuatroJugadores(){
     let jugador4 = document.querySelector("#p4");
     jugador4.style.background= "pink";
     jugador4.style.borderColor= "purple";
     accionTresJugadores();
     botonesDados();
}

//botón para iniciar el juego
function iniciarJuego(){
     iniciar.innerText = "Selecciona el número de jugadores";
     iniciar.style.height = "120px";
     dosJugadores.onclick = accionDosJugadores;
     tresJugadores.onclick = accionTresJugadores;
     cuatroJugadores.onclick = accionCuatroJugadores;
}
iniciar.onclick = iniciarJuego;

let botonCasilla = document.querySelector("#botonGuardar");
function guardarDatos(e){
    e.preventDefault();
    let casilla = JSON.stringify(document.querySelector("#casilla").value);
    localStorage.setItem("casilla", casilla);
    let puntos = JSON.stringify(document.querySelector("#puntos").value);
    localStorage.setItem("puntos", puntos);

    let casilla2 = JSON.parse(localStorage.getItem("casilla"));

    let puntos2 = JSON.parse(localStorage.getItem("puntos"));

    let puntajesTotales = document.querySelector("#puntajeTotal")
    puntajesTotales.innerText = `Estás en la casilla ${casilla2} y tu puntaje es ${puntos2}`

}

botonCasilla.onclick = guardarDatos;
