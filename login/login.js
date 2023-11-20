//traemos el Modal y el enlace que lo abre y el span que lo cierra
var modal = document.getElementById('myModal');
var btn = document.getElementById("showModal");
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario haga clic en el enlace, abrimos el modal
btn.onclick = function () {
    modal.style.display = "block";
}

// Cuando el usuario haga clic en <span> (x), cerramos el modal
span.onclick = function () {
    modal.style.display = "none";
}

// Cuando el usuario haga clic fuera del modal, lo cerramos
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
/******************************************************************************** */


/******************************************************************************** */
document.getElementById('formularioIngreso').addEventListener('submit', function(event) {
    var email = document.getElementsById('email').value;
    var password = document.getElementById('password').value;
    var profile = document.getElementById('profile').value;

    if (!email || !password || !profile) {
        alert('Todos los campos son obligatorios.');
        event.preventDefault(); // Previene la acción por defecto del formulario (envío)
        return;
    }

    if (!validateEmail(email)) {
        alert('Por favor, introduce una dirección de correo electrónico válida.');
        event.preventDefault();
        return;
    }
});

function validateEmail(email) {
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(String(email).toLowerCase());
}
