'use strict'

const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')
const forma5 = document.getElementById('forma5')

function trocarCor() {
    forma1.classList.add('verde')
    forma1.classList.toggle('amarelo')
}

forma1.addEventListener('click', trocarCor)
forma2.addEventListener('click', trocarForma)
forma3.addEventListener('click', ficarTransparente) 
forma4.addEventListener('click', rodar) 
forma5.addEventListener('click', aumentarTamanho) 

function trocarForma (){
    forma2.classList.toggle('circulo')
}

function ficarTransparente() {
    forma3.classList.add('azul')
    forma3.classList.toggle('transparente')
}

function rodar() {
    forma4.classList.toggle('rodar')
}

function aumentarTamanho() {
    forma5.classList.add('normal')
    forma5.classList.toggle('grande')
}
