// Reconhece a tecla digitada no teclado
document.body.addEventListener('keyup', (event) => {
    // Encontra a tecla digitada e coloca tudo em minúsculo
    playSound( event.code.toLowerCase() )
})

// Função para emitir o som quando uma tecla é digitada
function playSound(sound) {
    // Transforma a variável na tecla digitada
    let audioElement = document.querySelector(`.s_${sound}`)
    
    // Seleciona a div quando a tecla é digitada
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)

    // Emite o som quando a tecla é digitada
    if(audioElement) {
        audioElement.currentTime = 0
        audioElement.play()
    }

    // Adiciona uma class 'active' temporáriamente na div key do HTML
    if(keyElement) {
        keyElement.classList.add('active') // Adiciona a class

        setTimeout(() => { // Remove a class
            keyElement.classList.remove('active')
        }, 200)
    }
}