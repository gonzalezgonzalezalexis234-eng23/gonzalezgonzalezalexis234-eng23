/* =========================================
   CONFIGURACIÓN
========================================= */

const starsContainer = document.getElementById("stars");


/* =========================================
   CREAR ESTRELLA
========================================= */

function createStar() {

    const star = document.createElement("div");

    star.classList.add("star");


    // Posición inicial

    star.style.left =
        Math.random() * 120 + "%";

    star.style.top =
        Math.random() * -20 + "%";


    // Tamaño aleatorio

    const size =
        Math.random() * 3 + 1;

    star.style.width =
        size + "px";

    star.style.height =
        size + "px";


    // Velocidad aleatoria

    const duration =
        Math.random() * 4 + 3;

    star.style.animationDuration =
        duration + "s";


    // Retraso aleatorio

    star.style.animationDelay =
        Math.random() * 5 + "s";


    // Opacidad

    star.style.opacity =
        Math.random() * 0.7 + 0.3;


    starsContainer.appendChild(star);


    // Eliminar cuando termina

    setTimeout(() => {

        star.remove();

    }, (duration + 6) * 1000);

}


/* =========================================
   GENERAR ESTRELLAS
========================================= */

for (let i = 0; i < 35; i++) {

    createStar();

}


setInterval(() => {

    createStar();

}, 180);


/* =========================================
   ESTRELLA AL HACER CLICK
========================================= */

document.addEventListener(
    "click",
    function(event) {

        createClickStar(
            event.clientX,
            event.clientY
        );

    }
);


function createClickStar(x, y) {

    const star =
        document.createElement("div");

    star.style.position =
        "fixed";

    star.style.left =
        x + "px";

    star.style.top =
        y + "px";

    star.style.width =
        "6px";

    star.style.height =
        "6px";

    star.style.borderRadius =
        "50%";

    star.style.background =
        "white";

    star.style.boxShadow =
        "0 0 15px #ffffff";


    star.style.pointerEvents =
        "none";

    star.style.zIndex =
        "9999";


    document.body.appendChild(star);


    /*
        Animación
    */

    star.animate(

        [

            {
                transform:
                    "scale(1)",
                opacity: 1
            },

            {
                transform:
                    "scale(5)",
                opacity: 0
            }

        ],

        {

            duration: 600,

            easing:
                "ease-out"

        }

    );


    setTimeout(() => {

        star.remove();

    }, 600);

}


/* =========================================
   EFECTO DEL MOUSE
========================================= */

document.addEventListener(
    "mousemove",
    function(event) {

        const x =
            event.clientX /
            window.innerWidth;

        const y =
            event.clientY /
            window.innerHeight;


        document.body.style.backgroundPosition =
            `${x * 20}px ${y * 20}px`;

    }
);


/* =========================================
   ANIMACIÓN DE TARJETAS
========================================= */

const cards =
    document.querySelectorAll(
        ".info-card, .project, .technology"
    );


cards.forEach(card => {


    card.addEventListener(
        "mousemove",
        function(event) {


            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                (y - centerY) / 15;


            const rotateY =
                (centerX - x) / 15;


            card.style.transform =
                `perspective(700px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        function() {

            card.style.transform =
                "";

        }
    );

});


/* =========================================
   APARICIÓN AL HACER SCROLL
========================================= */

const sections =
    document.querySelectorAll(
        ".section, .contact"
    );


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },

        {

            threshold: 0.15

        }

    );


sections.forEach(section => {

    observer.observe(section);

});


/* =========================================
   CAMBIAR NAVBAR AL HACER SCROLL
========================================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener(
    "scroll",
    function() {

        if (window.scrollY > 80) {

            navbar.style.background =
                "rgba(3,4,12,0.9)";

            navbar.style.boxShadow =
                "0 10px 40px rgba(0,0,0,.5)";

        } else {

            navbar.style.background =
                "rgba(5,6,20,.65)";

            navbar.style.boxShadow =
                "0 10px 40px rgba(0,0,0,.3)";

        }

    }
);


/* =========================================
   EFECTO DE ESCRITURA
========================================= */

const texts = [

    "Code • Create • Learn",

    "Desarrollo de Software",

    "Sistemas Web",

    "Bases de Datos",

    "Siempre aprendiendo 🚀"

];


let textIndex = 0;

let characterIndex = 0;

let deleting = false;


/*
    Creamos un elemento para el texto
*/

const heroDescription =
    document.querySelector(
        ".hero-description"
    );


function typeEffect() {

    const currentText =
        texts[textIndex];


    if (!deleting) {

        characterIndex++;


        if (
            characterIndex >=
            currentText.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1800
            );

            return;

        }

    } else {

        characterIndex--;


        if (
            characterIndex <= 0
        ) {

            deleting = false;

            textIndex++;

            if (
                textIndex >= texts.length
            ) {

                textIndex = 0;

            }

        }

    }


    /*
        No reemplazar toda la descripción,
        solamente mostrar el efecto en el
        texto pequeño.
    */

    heroDescription.textContent =
        currentText.substring(
            0,
            characterIndex
        );


    const speed =
        deleting ? 40 : 80;


    setTimeout(
        typeEffect,
        speed
    );

}


/* =========================================
   INICIAR EFECTO DE ESCRITURA
========================================= */

setTimeout(() => {

    typeEffect();

}, 1500);
