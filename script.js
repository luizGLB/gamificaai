let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

function abreFechaMenu() {
       
    if (menu.classList.contains("menu-fechado")){
        
        menu.classList.remove("menu-fechado")

        iconeBarras.style.display = "none"

        iconeX.style.display = "inline"
    } else {
        menu.classList.add("menu-fechado")

        iconeX.style.display = "none"

        iconeBarras.style.display = "inline"
    }

}

onresize = () => {
        menu.classList.remove("menu-fechado")

        iconeBarras.style.display = "none"

        iconeX.style.display = "inline"

}

let banner = document.querySelector(".banner")

let slides = [
    "primeiro-banner",
    "segundo-banner",
    "terceiro-banner"
]

let slideAtual = 0

banner.classList.add(slides[slideAtual])

function mostrarProximoSlide() {


    banner.classList.remove(slides[slideAtual])

    if (slideAtual < 2) {
        slideAtual++
    } else {
        slideAtual = 0
    }
   

    banner.classList.add(slides[slideAtual])
}
function mostrarSlideAnterior () {
    banner.classList.remove(slides[slideAtual])

    if (slideAtual > 0 ) {
        slideAtual--
    } else {
        slideAtual = 2
    }

   

    banner.classList.add(slides[slideAtual])
}

function selecionarSlide(indiceSlide) {

    banner.classList.remove(slides[slideAtual])

    slideAtual = indiceSlide

banner.classList.add(slides[slideAtual])
}