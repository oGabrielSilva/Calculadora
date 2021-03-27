function clearLine() {
    if (firstLine.length < 1) {
        return
    }
    firstLine.pop();
    display1.value = '';
    display2.value = '';
}

function porcento() {
    if (firstLine.length < 1) {
        return
    }
    
}

function soma() {
    if (firstLine.length < 1) {
        return
    }
    display.value += '+'
    firstLine[0] += '+'
}

function vezes() {
    if (firstLine.length < 1) {
        return
    }
    firstLine[0] += '*'
    display.value += 'x'
}

function divide() {
    if (firstLine.length < 1) {
        return
    }
    firstLine[0] += '/'
    display.value += "/"
}

function menos() {
    if (firstLine.length < 1) {
        return
    }
    firstLine[0] += '-'
    display.value += '-'
}

let auxP = 0

function parenteses() {
    if (firstLine.length < 1) {
        return
    }
    let indeX = firstLine[0]
    indeX = parseFloat(indeX.charAt(indeX.length - 1))
    if (auxP % 2 == 0) {
        if (isNaN(indeX)) {
            firstLine[0] += '('
            display.value += '('
        } else {
            firstLine[0] += '+('
            display.value += '+('
        }
    } else {
    
        firstLine[0] += ')'
        display.value += ')'
    
    }
    auxP++
}

function delta() {
    if (firstLine.length < 1) {
        return
    }
}

function igual() {
    if (firstLine.length < 1) {
        return
    }

    let resultado = eval(firstLine[0])
    display2.value = display1.value
    display.value = resultado

}