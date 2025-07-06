// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Inicialización de los tooltips de Bootstrap (si se usaran, aunque no están en el código actual)
    // var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    // var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    //   return new bootstrap.Tooltip(tooltipTriggerEl)
    // })

    // Validación básica de formularios con Bootstrap 5
    // Captura todos los formularios con la clase 'needs-validation' si la añades
    const forms = document.querySelectorAll('form');

    // Itera sobre cada formulario y añade el evento de 'submit'
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                // Si el formulario no es válido, previene el envío
                event.preventDefault();
                event.stopPropagation();
            }
            // Añade la clase 'was-validated' para mostrar los estilos de validación de Bootstrap
            form.classList.add('was-validated');

            // Si el formulario es válido, podrías añadir lógica de envío AJAX aquí
            // Por ahora, si es válido, simplemente dejará que el formulario se envíe (comportamiento por defecto)
            // En un entorno real, querrías prevenir el default y manejar el envío con JS (ej. fetch API)
            // if (form.checkValidity()) {
            //     alert('Formulario enviado correctamente (simulado).'); // Mensaje de éxito simulado
            //     // Aquí iría tu código para enviar los datos (ej. fetch('/api/submit', { method: 'POST', body: new FormData(form) }))
            //     event.preventDefault(); // Prevenir el envío real del formulario si usas AJAX
            // }
        }, false);
    });

    // Ejemplo de funcionalidad JS simple: mensaje en consola al cargar la página
    console.log("MamiSegura: ¡La página ha cargado y el JavaScript está funcionando!");
});

// Puedes añadir más funcionalidades JavaScript aquí, como:
// - Desplazamiento suave (smooth scrolling) para anclas internas.
// - Lógica para cargar contenido dinámicamente (ej. más artículos en "Salud y Educación").
// - Comportamientos personalizados para componentes no cubiertos por Bootstrap.
// - Interacción con APIs externas (si hubiera).