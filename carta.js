// ========================================
// ELEMENTOS
// ========================================

const inicio = document.getElementById("inicio");
const cartaSeccion = document.getElementById("cartaSeccion");
const sorpresa = document.getElementById("sorpresa");
const final = document.getElementById("final");

const abrirCarta = document.getElementById("abrirCarta");
const sorpresaBtn = document.getElementById("sorpresaBtn");
const abrirRegalo = document.getElementById("abrirRegalo");

const textoCarta = document.getElementById("textoCarta");


// ========================================
// CAMBIAR DE PANTALLA
// ========================================

function cambiarPantalla(actual, siguiente) {

    actual.classList.remove("activa");

    setTimeout(() => {
        siguiente.classList.add("activa");
    }, 500);

}


// ========================================
// ABRIR CARTA
// ========================================

abrirCarta.addEventListener("click", () => {

    cambiarPantalla(inicio, cartaSeccion);

    setTimeout(() => {

        escribirCarta();

    }, 1000);

});


// ========================================
// TEXTO DE LA CARTA
// ========================================

const mensaje = `Locuritaa quería darte un pequeño detalle.

Queria hacer esta pequeña carta💛🌻💛
para decirte que no eh dejado de pensar en ti💛🌻💛Uwuu

puede que suene chistoso, pero de verdad
pero de adeveritasss💛🌻💛 ME GUSTAS, ME ENCANTAS💛🌻💛
eres muy bonita, hermosa, maravillosa, bien locaaa
pero asi me gustas, desde que te vi la primera vez💛🌻💛
es un poco dificil poder expresar estos sentimientos, pero que bueno
que diseño estas cositas💛🌻💛

Me gustaria ser más que un amigo para ti💛🌻💛

porque quiero abrazarte, besarte, andar de la mano contigo
poder hablar todos los dias, regalarte algunas cositas💛🌻💛

No hace falta que exista una fecha especial
para recordarle a alguien lo importante
que puede llegar a ser.

Así que preparé algo sencillo para ti...

Unas flores amarillas 🌻

Espero que esta pequeña sorpresa
te saque una sonrisa. 💛`;


function escribirCarta() {

    let i = 0;

    textoCarta.textContent = "";

    const velocidad = 45;

    function escribir() {

        if (i < mensaje.length) {

            textoCarta.textContent += mensaje.charAt(i);

            i++;

            setTimeout(escribir, velocidad);

        }

    }

    escribir();
}


// ========================================
// IR AL REGALO
// ========================================

sorpresaBtn.addEventListener("click", () => {

    cambiarPantalla(cartaSeccion, sorpresa);

});


// ========================================
// ABRIR REGALO
// ========================================

abrirRegalo.addEventListener("click", () => {

    const regalo = document.querySelector(".regalo");

    regalo.classList.add("abierto");

    abrirRegalo.style.display = "none";

    setTimeout(() => {

        cambiarPantalla(sorpresa, final);

        lanzarFlores();

    }, 1200);

});


// ========================================
// CREAR FLORES
// ========================================

function lanzarFlores() {

    const cantidad = 110;

    for (let i = 0; i < cantidad; i++) {

        setTimeout(() => {

            const flor = document.createElement("div");

            flor.classList.add("flor");

            flor.textContent = "🌻";

            flor.style.left =
                Math.random() * 100 + "%";

            flor.style.animationDuration =
                (3 + Math.random() * 3) + "s";

            flor.style.fontSize =
                (25 + Math.random() * 35) + "px";

            final.appendChild(flor);

            setTimeout(() => {

                flor.remove();

            }, 6000);

        }, i * 150);

    }

}
