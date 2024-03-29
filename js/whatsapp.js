// whatsapp.js

// Función para cargar el archivo JSON
function cargarConfiguracion(callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            callback(JSON.parse(this.responseText));
        }
    };
    xhttp.open("GET", "configuracion.json", true);
    xhttp.send();
}

// Cuando se hace clic en el botón, generar el enlace de WhatsApp
document.getElementById("boton-whatsapp").addEventListener("click", function() {
    cargarConfiguracion(function(configuracion) {
        var numero = configuracion.telefono;
        var mensaje = encodeURIComponent("Hola, quiero saber mas acerca de tus servicios");
        var enlace = "https://api.whatsapp.com/send?phone=" + numero + "&text=" + mensaje;
        window.open(enlace);
    });
});

// Cuando se hace clic en el botón, generar el enlace de WhatsApp 
document.getElementById("boton-whatsapp2").addEventListener("click", function() {
    cargarConfiguracion(function(configuracion) {
        var numero = configuracion.telefono;
        var mensaje = encodeURIComponent("Hola, quiero saber de que se trata");
        var enlace = "https://api.whatsapp.com/send?phone=" + numero + "&text=" + mensaje;
        window.open(enlace);
    });
});

// Cuando se hace clic en el botón, generar el enlace de WhatsApp planes
document.getElementById("boton-whatsapp3").addEventListener("click", function() {
    cargarConfiguracion(function(configuracion) {
        var numero = configuracion.telefono;
        var mensaje = encodeURIComponent("Hola, hablame mas acerca de los planes");
        var enlace = "https://api.whatsapp.com/send?phone=" + numero + "&text=" + mensaje;
        window.open(enlace);
    });
});
