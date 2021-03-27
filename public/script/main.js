//referencias aos inputs display
const display = document.querySelector('#display1')
const display2 = document.querySelector('#display2')


//vetores globais

firstLine = []

//variáveis globais 

//buttons númericos 
function zero() {
    const clickButton = document.querySelector('#zero')
    clickButton.style.background = '#333'
    setTimeout(function() {
        clickButton.style.background = '#222222'
    }, 100);
    
    display.value += 0
    
    if (firstLine.length < 1) {
        firstLine.push("0")
    } else {
        firstLine[0] += "0"
    }
}

function um() {
    const clickButton = document.querySelector('#um')
    clickButton.style.background = '#333'
    setTimeout(function() {
        clickButton.style.background = '#222222'
    }, 100);
    
    display.value += 1
    
    if (firstLine.length < 1) {
        firstLine.push("1")
    } else {
        firstLine[0] += "1"
    }
}

function dois() {
    const clickButton = document.querySelector('#dois')
    clickButton.style.background = '#333'
    setTimeout(function() {
        clickButton.style.background = '#222222'
    }, 100);
    
    display.value += 2
    
    if (firstLine.length < 1) {
        firstLine.push("2")
    } else {
        firstLine[0] += "2"
    }
}

function tres() {
    const clickButton = document.querySelector('#tres')
    clickButton.style.background = '#333'
    setTimeout(function() {
        clickButton.style.background = '#222222'
    }, 100);
    
    display.value += 3
    
    if (firstLine.length < 1) {
        firstLine.push("3")
    } else {
        firstLine[0] += "3"
    }
}

function quatro() {
    const clickButton = document.querySelector('#quatro')
    clickButton.style.background = '#333'
    setTimeout(function() {
        clickButton.style.background = '#222222'
    }, 100);
    
    display.value += 4
    
    if (firstLine.length < 1) {
        firstLine.push("4")
    } else {
        firstLine[0] += "4"
    }
}

function cinco() {
    const clickButton = document.querySelector('#cinco')
    clickButton.style.background = '#333'
    setTimeout(function() {
        clickButton.style.background = '#222222'
    }, 100);
    
    display.value += 5
    
    if (firstLine.length < 1) {
        firstLine.push("5")
    } else {
        firstLine[0] += "5"
    }
}

function seis() {
    const clickButton = document.querySelector('#seis')
    clickButton.style.background = '#333'
    setTimeout(function() {
        clickButton.style.background = '#222222'
    }, 100);
    
    display.value += 6
    
    if (firstLine.length < 1) {
        firstLine.push("6")
    } else {
        firstLine[0] += "6"
    }
}

function sete() {
    const clickButton = document.querySelector('#sete')
    clickButton.style.background = '#333'
    setTimeout(function() {
        clickButton.style.background = '#222222'
    }, 100);
    
    display.value += 7
    
    if (firstLine.length < 1) {
        firstLine.push("7")
    } else {
        firstLine[0] += "7"
    }
}

function oito() {
    const clickButton = document.querySelector('#oito')
    clickButton.style.background = '#333'
    setTimeout(function() {
        clickButton.style.background = '#222222'
    }, 100);
    
    display.value += 8
    
    if (firstLine.length < 1) {
        firstLine.push("8")
    } else {
        firstLine[0] += "8"
    }
}

function nove() {
    const clickButton = document.querySelector('#nove')
    clickButton.style.background = '#333'
    setTimeout(function() {
        clickButton.style.background = '#222222'
    }, 100);
    
    display.value += 9
    
    if (firstLine.length < 1) {
        firstLine.push("9")
    } else {
        firstLine[0] += "9"
    }
}
