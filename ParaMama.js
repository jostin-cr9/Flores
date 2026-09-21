
const boton = document.getElementById("boton");
const sorpresa = document.getElementById("sorpresa");

boton.addEventListener("click", () => {

    sorpresa.textContent =
        "Espero que estas flores te saquen una sonrisa 💛🌻";

    boton.textContent = "🌻 Para ti";

    crearFlores();

});


function crearFlores() {

    for (let i = 0; i < 15; i++) {

        const flor = document.createElement("div");

        flor.textContent = "🌼";

        flor.style.position = "fixed";

        flor.style.left =
            Math.random() * 100 + "vw";

        flor.style.top = "100vh";

        flor.style.fontSize =
            (20 + Math.random() * 25) + "px";

        flor.style.zIndex = "20";

        flor.style.pointerEvents = "none";

        document.body.appendChild(flor);


        const duracion =
            3000 + Math.random() * 3000;


        flor.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },

                {
                    transform:
                        `translateY(-110vh) rotate(${360 + Math.random() * 360}deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duracion,
                easing: "ease-out"
            }
        );


        setTimeout(() => {
            flor.remove();
        }, duracion);
    }
}

