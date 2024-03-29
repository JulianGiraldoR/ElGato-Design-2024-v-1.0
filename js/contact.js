   // Capturar el evento de envío del formulario
        document.getElementById("contact-form").addEventListener("submit", function(event) {
            // Mostrar el mensaje de confirmación después de un breve retraso
            setTimeout(function() {
                document.getElementById("confirmation-message").style.display = "block";
            }, 100);

            // Opcional: Agregar una pausa antes de restablecer el formulario y ocultar el mensaje de confirmación
            setTimeout(function() {
                document.getElementById("contact-form").reset(); // Restablecer el formulario
                document.getElementById("confirmation-message").style.display = "none"; // Ocultar el mensaje de confirmación
            }, 3000); // 3000 milisegundos = 3 segundos

            // No prevenir el comportamiento predeterminado del formulario para permitir que se envíe
        });