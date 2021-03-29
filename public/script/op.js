function clearLine() {
    const clickButton = document.querySelector('#clear')
    
    clickButton.style.background = '#333'
    setTimeout(function() {
        clickButton.style.background = '#222222'
    }, 100);
    
    if (auxP % 2 != 0) {
        auxP++
    }
    raizQ = false
    auxOp = false
    backLine = ''
    lastValue = false
    firstLine = ''
    lastBack = []
    global()
}

function del() {
    const clickButton = document.querySelector('#del')
    clickButton.style.background = '#333'
    setTimeout(function() {
        clickButton.style.background = '#222222'
    }, 100);
    
    if (auxP % 2 != 0) {
        auxP++
    }
    auxOp = false
    raizQ = false
    backLine = lastBack[lastBack.length - 1]
    lastBack.pop()
    
    if (backLine == undefined) {
        backLine = ''
    }
    
    lastValue = backLine
    firstLine = lastValue
    display.value = firstLine
}

function dot() {
    const clickButton = document.querySelector('#dot')
    clickButton.style.background = '#333'
    setTimeout(function() {
        clickButton.style.background = '#222222'
    }, 100);
    
    if (firstLine.length < 1) {
        return
    } else if (firstLine == 'false') {
        return
    } 
    
    if(auxOp == '0') {
        return
    }
    
    auxOp = '0'
    lastValue = '.'
    global()
}

function porcento() {
    const clickButton = document.querySelector('#porcento')
    clickButton.style.background = '#333'
    setTimeout(function() {
        clickButton.style.background = '#222222'
    }, 100);
    
    if (firstLine.length < 1) {
        return
    } else if (firstLine == 'false') {
        return
    }
    
    if (auxOp == '1') {
        return
    }
    
    auxOp = '1'
    let auxPorc = lastValue
    lastValue = '/100*'
    if (isNaN(auxPorc)) {
        lastValue = '100/100*'
    }
    global()
    
}

function soma() {
    const clickButton = document.querySelector('#soma')
    clickButton.style.background = '#333'
    setTimeout(function() {
        clickButton.style.background = '#222222'
    }, 100);
    
    if (firstLine.length < 1) {
        return
    } else if (firstLine == 'false') {
        return
    }
    
    if (auxOp == '2') {
        return
    }
    
    auxOp = '2'
    lastValue = '+'
    global()
}

function vezes() {
    const clickButton = document.querySelector('#vezes')
    clickButton.style.background = '#333'
    setTimeout(function() {
        clickButton.style.background = '#222222'
    }, 100);
    
    if (firstLine.length < 1) {
        return
    } else if (firstLine == 'false') {
        return
    }
    
    if (auxOp == '3') {
        return
    }
    
    auxOp = '3'
    lastValue = '*'
    global()
}

function divide() {
    const clickButton = document.querySelector('#divide')
    clickButton.style.background = '#333'
    setTimeout(function() {
        clickButton.style.background = '#222222'
    }, 100);
    
    if (firstLine.length < 1) {
        return
    } else if (firstLine == 'false') {
        return
    }
    
    if (auxOp == '4') {
        return
    }
    
    auxOp = '4'
    lastValue = '/'
    global()
}

function menos() {
    const clickButton = document.querySelector('#menos')
    clickButton.style.background = '#333'
    setTimeout(function() {
        clickButton.style.background = '#222222'
    }, 100);
    
    if (firstLine.length < 1) {
        return
    } else if (firstLine == 'false') {
        return
    }
    
    if (auxOp == '5') {
        return
    }
    
    auxOp = '5'
    lastValue = '-'
    global()
}

function parenteses() {
    const clickButton = document.querySelector('#parenteses')
    clickButton.style.background = '#333'
    setTimeout(function() {
        clickButton.style.background = '#222222'
    }, 100);
    
    if (auxP % 2 != 0) {
        if (backLine.charAt(backLine.length - 1) == '(' && backLine.charAt(backLine.length - 2) != 't') {
            return
        }
        
        lastValue = ')'
    } else {
        switch (lastValue) {
        case '0':
            lastValue = '+('
            break;
        case '1':
            lastValue = '+('
            break;
        case '2':
            lastValue = '+('
            break;
        case '3':
            lastValue = '+('
            break;
        case '4':
            lastValue = '+('
            break;
        case '5':
            lastValue = '+('
            break
        case '6':
            lastValue = '+('
            break
        case '7':
            lastValue = '+('
            break
        case '8':
            lastValue = '+('
            break
        case '9': 
            lastValue = '+('
            break
        default:
            lastValue = '('
            break
        }
    }
    
    auxP++
    global()
}

function raiz() {
    const clickButton = document.querySelector('#delta')
    clickButton.style.background = '#333'
    setTimeout(function() {
        clickButton.style.background = '#222222'
    }, 100);
    
    if (raizQ == true) {
        backLine += ')'
        raizQ = false
        igual()
        backLine = ''
        lastBack = []
        firstLine = ''
        return
    }
    
    if (auxOp == '6') {
        return
    }
    
    auxOp = '6'
    
    switch (lastValue) {
        case '+':
            lastValue = 'Math.sqrt('
            global()
            break;
        case '-':
            lastValue = 'Math.sqrt('
            global()
            break
        case '/':
            lastValue = 'Math.sqrt('
            global()
            break
        case ')':
            lastValue = 'Math.sqrt('
            global()
            break
        case '/100*':
            lastValue = 'Math.sqrt('
            global()
            break
        case false: 
            lastValue = 'Math.sqrt('
            global()
            break
        case '.':
            lastValue = '+Math.sqrt('
            global()
            break
        default:
            lastValue = '+Math.sqrt('
            global()
    }
    raizQ = true
}

function igual() {
    const clickButton = document.querySelector('#igual')
    clickButton.style.background = '#129b12'
    setTimeout(function() {
        clickButton.style.background = '#018b01'
    }, 100);
    
    if (firstLine.length < 1) {
        return
    } else if (firstLine == 'false') {
        return
    }
    
    if (raizQ == true) {
        backLine += ')'
        
        raizQ = false
    }
    
    if (auxP % 2 != 0) {
        backLine += ')'
    
        auxP++
    }
    
    resultado = `${eval(backLine)}`
    display.value = resultado
    display2.value = firstLine

}