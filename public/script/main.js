//referencias aos inputs display
const display = document.querySelector('#display1')
const display2 = document.querySelector('#display2')


//vetores globais
firstLine = []
secondLine = []
op = []

//variáveis globais 
var num1 = 0

//buttons númericos 
function zero() {
    display.value += 0
    
    if (num1 == 0) {
        if (firstLine.length < 1) {
            firstLine.push("0")
        } else {
            firstLine[0] += "0"
        }
    } else {
        if (secondLine.length < 1) {
            secondLine.push("0")
        } else {
            secondLine[0] += "0"
        }
    }
}

function um() {
    display.value += 1
    
    if (num1 == 0) {
        if (firstLine.length < 1) {
            firstLine.push("1")
        } else {
            firstLine[0] += "1"
        }
    } else {
        if (secondLine.length < 1) {
            secondLine.push("1")
        } else {
            secondLine[0] += "1"
        }
    }
}

function dois() {
    display.value += 2
    
    if (num1 == 0) {
        if (firstLine.length < 1) {
            firstLine.push("2")
        } else {
            firstLine[0] += "2"
        }
    } else {
        if (secondLine.length < 1) {
            secondLine.push("2")
        } else {
            secondLine[0] += "2"
        }
    }
}

function tres() {
    display.value += 3
    
    if (num1 == 0) {
        if (firstLine.length < 1) {
            firstLine.push("3")
        } else {
            firstLine[0] += "3"
        }
    } else {
        if (secondLine.length < 1) {
            secondLine.push("3")
        } else {
            secondLine[0] += "3"
        }
    }
}

function quatro() {
    display.value += 4
    
    if (num1 == 0) {
        if (firstLine.length < 1) {
            firstLine.push("4")
        } else {
            firstLine[0] += "4"
        }
    } else {
        if (secondLine.length < 1) {
            secondLine.push("4")
        } else {
            secondLine[0] += "4"
        }
    }
}

function cinco() {
    display.value += 5
    
    if (num1 == 0) {
        if (firstLine.length < 1) {
            firstLine.push("5")
        } else {
            firstLine[0] += "5"
        }
    } else {
        if (secondLine.length < 1) {
            secondLine.push("5")
        } else {
            secondLine[0] += "5"
        }
    }
}

function seis() {
    display.value += 6
    
    if (num1 == 0) {
        if (firstLine.length < 1) {
            firstLine.push("6")
        } else {
            firstLine[0] += "6"
        }
    } else {
        if (secondLine.length < 1) {
            secondLine.push("6")
        } else {
            secondLine[0] += "6"
        }
    }
}

function sete() {
    display.value += 7
    
    if (num1 == 0) {
        if (firstLine.length < 1) {
            firstLine.push("7")
        } else {
            firstLine[0] += "7"
        }
    } else {
        if (secondLine.length < 1) {
            secondLine.push("7")
        } else {
            secondLine[0] += "7"
        }
    }
}

function oito() {
    display.value += 8
    
    if (num1 == 0) {
        if (firstLine.length < 1) {
            firstLine.push("8")
        } else {
            firstLine[0] += "8"
        }
    } else {
        if (secondLine.length < 1) {
            secondLine.push("8")
        } else {
            secondLine[0] += "8"
        }
    }
}

function nove() {
    display.value += 9
    
    if (num1 == 0) {
        if (firstLine.length < 1) {
            firstLine.push("9")
        } else {
            firstLine[0] += "9"
        }
    } else {
        if (secondLine.length < 1) {
            secondLine.push("9")
        } else {
            secondLine[0] += "9"
        }
    }
}

