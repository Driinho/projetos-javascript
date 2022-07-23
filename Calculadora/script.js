const valorDaTela = document.getElementById('valor')
const botaoZerar = document.getElementById('zerar')
const botaoIgual = document.getElementById('igual')
const botaoSoma = document.getElementById('soma')
const botaoMenos = document.getElementById('menos')
const botaoDiv = document.getElementById('dividir')
const botaoMult = document.getElementById('multiplicar')

const valor1 = document.querySelector('.valor-1')
const valor2 = document.querySelector('.valor-2')
const valor3 = document.querySelector('.valor-3')
const valor4 = document.querySelector('.valor-4')
const valor5 = document.querySelector('.valor-5')
const valor6 = document.querySelector('.valor-6')
const valor7 = document.querySelector('.valor-7')
const valor8 = document.querySelector('.valor-8')
const valor9 = document.querySelector('.valor-9')
const valor0 = document.querySelector('.valor-0')

const mais = 1
const menos = 2
const div = 3
const mult = 4

let valorMostrado = ''
let numbers = ''
let stringSoma = ''
let valores = []
let operacoes = []
let flag = false
let last

valor1.addEventListener('click', () => {
    valorMostrado += valor1.textContent
    numbers += valor1.textContent
    valorDaTela.innerText = valorMostrado
})

valor2.addEventListener('click', () => {
    valorMostrado += valor2.textContent
    numbers += valor2.textContent

    valorDaTela.innerText = valorMostrado
})

valor3.addEventListener('click', () => {
    valorMostrado += valor3.textContent
    numbers += valor3.textContent

    valorDaTela.innerText = valorMostrado
})

valor4.addEventListener('click', () => {
    valorMostrado += valor4.textContent
    numbers += valor4.textContent

    valorDaTela.innerText = valorMostrado
})

valor5.addEventListener('click', () => {
    valorMostrado += valor5.textContent
    numbers += valor5.textContent

    valorDaTela.innerText = valorMostrado
})

valor6.addEventListener('click', () => {
    valorMostrado += valor6.textContent
    numbers += valor6.textContent

    valorDaTela.innerText = valorMostrado
})

valor7.addEventListener('click', () => {
    valorMostrado += valor7.textContent
    numbers += valor7.textContent

    valorDaTela.innerText = valorMostrado
})

valor8.addEventListener('click', () => {
    valorMostrado += valor8.textContent
    numbers += valor8.textContent

    valorDaTela.innerText = valorMostrado
})

valor9.addEventListener('click', () => {
    valorMostrado += valor9.textContent
    numbers += valor9.textContent

    valorDaTela.innerText = valorMostrado
})

valor0.addEventListener('click', () => {
    valorMostrado += valor0.textContent
    numbers += valor0.textContent
    valorDaTela.innerText = valorMostrado
})

botaoSoma.addEventListener('click', () => {
    soma()
    valorMostrado += ' + '
    valorDaTela.innerText = valorMostrado
})

botaoMenos.addEventListener('click', () => {
    subtracao()
    valorMostrado += ' - '
    valorDaTela.innerText = valorMostrado
})

botaoDiv.addEventListener('click', () => {
    divisao()
    valorMostrado += ' / '
    valorDaTela.innerText = valorMostrado
})

botaoMult.addEventListener('click', () => {
    multiplicacao()
    valorMostrado += ' * '
    valorDaTela.innerText = valorMostrado
})

botaoIgual.addEventListener('click', () => {
    valorMostrado = String(igual())
    valorDaTela.innerText = valorMostrado
})

botaoZerar.addEventListener('click', () => {
    valorMostrado = ''
    numbers = ''
    somados = 0
    stringSoma = ''
    valores = []
    operacoes = []
    valorDaTela.innerText = '0'
    flag = false
})

function soma() {
    if (flag === true) {
        operacoes.push(mais)
        flag = false
    } else {
        let num = trandsformInt()
        valores.push(num)
        operacoes.push(mais)
    }
    last = mais
}

function subtracao() {
    if (flag === true) {
        operacoes.push(menos)
        flag = false
    } else {
        let num = trandsformInt()
        valores.push(num)
        operacoes.push(menos)
    }
    last = menos
}

function divisao() {
    if (flag === true) {
        operacoes.push(div)
        flag = false
    } else {
        let num = trandsformInt()
        valores.push(num)
        operacoes.push(div)
    }
    last = div
}

function multiplicacao() {
    if (flag === true) {
        operacoes.push(mult)
        flag = false
    } else {
        let num = trandsformInt()
        valores.push(num)
        operacoes.push(mult)
    }
    last = mult
}

function igual() {
    if (numbers == '') {
        operacoes.pop(operacoes.length)
    } else {
        let num = trandsformInt()
        valores.push(num)
    }
    let result
    if (valores.length > 1) {
        for (let i = 0; i < operacoes.length; i++) {
            if (operacoes[i] == 1) {
                valores[i + 1] = valores[i] + valores[i + 1]
                result = valores[i + 1]
            } else if (operacoes[i] == 2) {
                valores[i + 1] = valores[i] - valores[i + 1]
                result = valores[i + 1]
            } else if (operacoes[i] == 3) {
                valores[i + 1] = valores[i] / valores[i + 1]
                result = valores[i + 1]
            } else {
                valores[i + 1] = valores[i] * valores[i + 1]
                result = valores[i + 1]
            }
        }
    } else {
        return valores[0]
    }
    flag = true
    valorMostrado = ''
    numbers = ''
    somados = 0
    stringSoma = ''
    valores = []
    valores.push(result)
    operacoes = []
    return result
}

function trandsformInt() {
    let local = parseInt(numbers)
    numbers = ''
    return local
}
