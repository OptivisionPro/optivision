

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
