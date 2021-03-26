//referencias aos inputs display
const display = document.querySelector('#display1')
const display2 = document.querySelector('#display2')


//vetores globais
firstLine = []
secondLine = []

//buttons númericos 
function zero() {
    display.value += 0
    
    if (firstLine.length < 1) {
        firstLine.push("0")
    } else {
        firstLine[0] += "0"
    }
}

function um() {
    display.value += 1
    
    if (firstLine.length < 1) {
        firstLine.push("1")
    } else {
        firstLine[0] += "1"
    }
}

function dois() {
    display.value += 2
    
    if (firstLine.length < 1) {
        firstLine.push("2")
    } else {
        firstLine[0] += "2"
    }
}

function tres() {
    display.value += 3
    
    if (firstLine.length < 1) {
        firstLine.push("3")
    } else {
        firstLine[0] += "3"
    }
}

function quatro() {
    display.value += 4
    
    if (firstLine.length < 1) {
        firstLine.push("4")
    } else {
        firstLine[0] += "4"
    }
}

function cinco() {
    display.value += 5
    
    if (firstLine.length < 1) {
        firstLine.push("5")
    } else {
        firstLine[0] += "5"
    }
}

function seis() {
    display.value += 6
    
    if (firstLine.length < 1) {
        firstLine.push("6")
    } else {
        firstLine[0] += "6"
    }
}

function sete() {
    display.value += 7
    
    if (firstLine.length < 1) {
        firstLine.push("7")
    } else {
        firstLine[0] += "7"
    }
}

function oito() {
    display.value += 8
    
    if (firstLine.length < 1) {
        firstLine.push("8")
    } else {
        firstLine[0] += "8"
    }
}

function nove() {
    display.value += 9
    
    if (firstLine.length < 1) {
        firstLine.push("9")
    } else {
        firstLine[0] += "9"
    }
}