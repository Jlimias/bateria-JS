function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play()
}

const listaDeTecla = document.querySelectorAll('.tecla')

let contador = 0
 
while (contador < listaDeTecla.length) {
    listaDeTecla[contador].onclick = tocaSom
    contador++
    console.log(contador)
}