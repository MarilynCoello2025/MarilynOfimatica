function validar() {
    const clave = document.getElementById("clave").value;
    const error = document.getElementById("error");

    // acepta Jose / jose / JOSE
    if (clave.toLowerCase() === "jose") {
        document.getElementById("login").style.display = "none";
        document.getElementById("bienvenida").style.display = "block";

        setTimeout(() => {
            window.location.href = "introduccion.html";
        }, 3000);
    } else {
        error.textContent = "❌ Contraseña incorrecta";
    }
}

function enterPresionado(event) {
    if (event.key === "Enter") {
        validar();
    }
}
