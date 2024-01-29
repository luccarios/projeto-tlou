const botoes = document.querySelectorAll(".btn-plataforma");

const elementoPlataformas = document.querySelectorAll(".btn-plataforma .plataformas");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click",() => {
        elementoPlataformas[indice].classList.toggle("ativo")
    })
})
