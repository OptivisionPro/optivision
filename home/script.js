

function openPage(page) {
    window.location.href = page;
}

function playMusic(file) {
    const audio = new Audio(file);
    audio.play();
}

function showFriendInfo(name) {
    const info = document.getElementById("info-amigo");
    let content;

    switch (name) {
        case 'Hugo Olguín':
            content = "Información sobre Hugo Olguín.";
            break;
        case 'Arian Luzcak':
            content = "Información sobre Arian Luzcak.";
            break;
        case 'Agustin Carbajal':
            content = "Información sobre Agustin Carbajal.";
            break;
        case 'Micaela Martinez':
            content = "Información sobre Micaela Martinez.";
            break;
        case 'Martin Navarrete':
            content = "Información sobre Martin Navarrete.";
            break;
        default:
            content = "Información no disponible.";
    }

    info.innerHTML = content;
    document.getElementById("perfil-amigo").style.display = "block";
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

function abrirlistaamigos() {
    const friendsList = document.querySelector('.lista-amigos');
    const toggleIcon = document.querySelector('.icono-abrir');

    friendsList.classList.toggle('open');

    if (friendsList.classList.contains('open')) {
        toggleIcon.textContent = '-';
    } else {
        toggleIcon.textContent = '+';
    }
}


