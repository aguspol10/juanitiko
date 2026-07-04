alert("Me dieron ganas de hacer una pagina de recuerdos, espero que disfrutes de las fotos y los momentos que compartimos juntos.");


document.addEventListener("DOMContentLoaded", () => {
    // 1. CONTADOR DE TIEMPO JUNTO
    
  const fechaInicio = new Date(2026, 3, 24, 24, 0, 0);

    // Creamos dinámicamente el contenedor del contador en el HTML antes de la galería
    const introduccion = document.querySelector('.introduccion');
    const contadorDiv = document.createElement('div');
    contadorDiv.className = 'contador-tiempo';
    contadorDiv.innerHTML = `
        <h3>Llevamos compartiendo:</h3>
        <div id="reloj">Cargando tiempo...</div>
    `;
    introduccion.insertAdjacentElement('afterend', contadorDiv);

    function actualizarContador() {
        const ahora = new Date();
        const diferencia = ahora - fechaInicio;

        // Cálculos matemáticos para pasar de milisegundos a días, horas, minutos y segundos
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        const relojEl = document.getElementById('reloj');
        if (relojEl) {
            relojEl.innerHTML = `
                <span><strong>${dias}</strong> días</span> : 
                <span><strong>${horas}</strong> horas</span> : 
                <span><strong>${minutos}</strong> min</span> : 
                <span><strong>${segundos}</strong> seg</span>
            `;
        }
    }
    
    // Ejecutar el contador inmediatamente y hacer que se actualice cada 1 segundo
    actualizarContador();
    setInterval(actualizarContador, 1000);

    

    // 3. MENSAJE SORPRESA EN EL FOOTER
    const footer = document.querySelector('footer p');
    footer.style.cursor = 'pointer';
    footer.addEventListener('click', () => {
        alert("¡Gracias por estos dos meses hermosos! Te amooo mi bb❤️");
    });
});


// 4. GENERADOR DE CUPONES
    const cupones = [
        "🎫 Vale por un guisito",
        "🎫 Vale por un capitulo de Okupas",
        "🎫 Vale por unas birras juntitos",
        "🎫 Vale por un asado juntos",
        "🎫 Vale por una cojida :)"
    ];

    const btnCupon = document.getElementById('btn-cupon');
    const resultadoCupon = document.getElementById('resultado-cupon');

    if (btnCupon && resultadoCupon) {
        btnCupon.addEventListener('click', () => {
            // Elige un cupón al azar de la lista
            const indiceAleatorio = Math.floor(Math.random() * cupones.length);
            resultadoCupon.innerText = cupones[indiceAleatorio];
            
            // Efecto de animación simple al cambiar de texto
            resultadoCupon.style.animation = 'none';
            setTimeout(() => {
                resultadoCupon.style.animation = 'fadeIn 0.5s ease';
            }, 10);
        });
    }