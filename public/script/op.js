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
    raizQ = false
    backLine = lastBack[lastBack.length - auxDel]
    lastBack.pop()
    auxDel++
    
    if (backLine == undefined) {
        backLine = ''
        auxDel = 1
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
        if (backLine.charAt(backLine.length - 1) == '(') {
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
        return
    }
    
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