let menuVisible = false;
// Función que oculta o muestra el menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}
function seleccionar() {
    // Oculto el menu una vez que selecciono una opción
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
// Descargar el CV
function descargarCV() {
    var enlace = document.createElement('a');
    enlace.href = '/Resources/CV_Daniel_Morales.pdf';
    enlace.download = 'CV_Daniel_Morales.pdf';
    enlace.click();
}
// Detectar el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function () {
    efectoHabilidades();
}
