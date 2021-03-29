//referencias aos inputs display
const display = document.querySelector('#display1')
const display2 = document.querySelector('#display2')


//vetores e variáveis globais

let auxP = 0        //auxiliar dos parenteses
let raizQ = false   // auxiliar da raiz quadrada
let auxOp = false   //auxiliar dos operadores, (0 == dot, 1 == porcento, 2 == soma, 3 == vezes, 4 == divide, 5 == menos, 6 == raiz)
let firstLine = ``
let backLine = ``
let lastValue = false
let lastBack = []
let resultado = ''

//funções glóbais 
function global() {
    if (backLine.length < 1) {
        backLine = lastValue
        if (backLine == false) {
            backLine = ''
        }
    } else {
        lastBack.push(backLine)
        backLine += lastValue
    }
    
    switch (lastValue) {
            case '*':
                firstLine += 'x'
                break;
            case '/100*':
                firstLine += '%'
                break;
            case '100/100*': 
                firstLine += '%'
                break
            case 'Math.sqrt(':
                firstLine += '√'
                break;
            case '+Math.sqrt(':
                firstLine += '√'
                break;
            default:
                if (firstLine == 'false') {
                    firstLine = ''
                }
                firstLine += lastValue
                break;
        }
        
        display.value = firstLine.replace(/['*']/g, 'x')
        if (display.value == 'false') {
            display.value = 'Null'
        }
}

//buttons númericos 
function zero() {
    const clickButton = document.querySelector('#zero')
    clickButton.style.background = '#333'
    setTimeout(function() {
        clickButton.style.background = '#222222'
    }, 100);
    
    lastValue = '0'
    auxOp = false
    global()
    
}

function um() {
    const clickButton = document.querySelector('#um')
    clickButton.style.background = '#333'
    setTimeout(function() {
        clickButton.style.background = '#222222'
    }, 100);
    
    lastValue = '1'
    auxOp = false
    global()
    return
}

function dois() {
    const clickButton = document.querySelector('#dois')
    clickButton.style.background = '#333'
    setTimeout(function() {
        clickButton.style.background = '#222222'
    }, 100);
    
    lastValue = '2'
    auxOp = false
    global()
    return
}

function tres() {
    const clickButton = document.querySelector('#tres')
    clickButton.style.background = '#333'
    setTimeout(function() {
        clickButton.style.background = '#222222'
    }, 100);
    
    lastValue = '3'
    auxOp = false
    global()
    return
}

function quatro() {
    const clickButton = document.querySelector('#quatro')
    clickButton.style.background = '#333'
    setTimeout(function() {
        clickButton.style.background = '#222222'
    }, 100);
    
    lastValue = '4'
    auxOp = false
    global()
}

function cinco() {
    const clickButton = document.querySelector('#cinco')
    clickButton.style.background = '#333'
    setTimeout(function() {
        clickButton.style.background = '#222222'
    }, 100);
    
    auxOp = false
    lastValue = '5'
    global()
    return
}

function seis() {
    const clickButton = document.querySelector('#seis')
    clickButton.style.background = '#333'
    setTimeout(function() {
        clickButton.style.background = '#222222'
    }, 100);
    
    lastValue = '6'
    auxOp = false
    global()
    return
}

function sete() {
    const clickButton = document.querySelector('#sete')
    clickButton.style.background = '#333'
    setTimeout(function() {
        clickButton.style.background = '#222222'
    }, 100);
    
    lastValue = '7'
    auxOp = false
    global()
    return
}

function oito() {
    const clickButton = document.querySelector('#oito')
    clickButton.style.background = '#333'
    setTimeout(function() {
        clickButton.style.background = '#222222'
    }, 100);
    
    lastValue = '8'
    auxOp = false
    global()
    return
}

function nove() {
    const clickButton = document.querySelector('#nove')
    clickButton.style.background = '#333'
    setTimeout(function() {
        clickButton.style.background = '#222222'
    }, 100);
    
    lastValue = '9'
    auxOp = false
    global()
    return
}
