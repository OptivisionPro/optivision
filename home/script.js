

function openPage(page) {
    window.location.href = page;
}

function playMusic(file) {
    const audio = new Audio(file);
    audio.play();
}


function closeFriendInfo() {
    document.getElementById("perfil-amigo").style.display = "none";
}

let currentAudio = null;

function playMusic(file) {
    if (currentAudio && !currentAudio.paused) {
        currentAudio.pause();
    }

    if (!currentAudio || currentAudio.src !== file) {
        currentAudio = new Audio(file);
    }

    if (currentAudio.paused) {
        currentAudio.play();
    } else {
        currentAudio.pause();
    }
}

function toggleListaAmigos() {
    const listaAmigos = document.querySelector('.lista-amigos');
    listaAmigos.classList.toggle('open');
}

function closeFriendInfo() {
    document.getElementById('perfil-amigo').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById('toggle');
    const nav = document.querySelector('.navegacion');
    const navLinks = document.querySelectorAll('.navegacion a');

    // Función para cerrar el menú
    function closeMenu() {
        toggle.checked = false;  // Desmarca el checkbox
    }

    // Cerrar el menú al hacer clic en cualquier enlace
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Cierra el menú al hacer clic fuera del menú
    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target) && !toggle.contains(event.target)) {
            closeMenu();
        }
    });
});
