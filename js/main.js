// Habilita el desplazamiento suave en el carrusel
document.querySelector(".carousel-container").addEventListener("wheel", (event) => {
    event.preventDefault();
    document.querySelector(".carousel-container").scrollLeft += event.deltaY;
  });
  document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Si el usuario hace scroll hacia abajo, ocultamos el header
            header.style.top = "-70px"; 
        } else {
            // Si el usuario hace scroll hacia arriba, mostramos el header
            header.style.top = "0";
        }

        lastScrollTop = scrollTop;
    });
});
