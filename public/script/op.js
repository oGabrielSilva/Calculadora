function clearLine() {
    const clickButton = document.querySelector('#clear')
    clickButton.style.background = '#333'
    setTimeout(function() {
        clickButton.style.background = '#222222'
    }, 100);
    
    if (firstLine.length < 1) {
        return
    }
    firstLine.pop();
    display1.value = '';
    display2.value = '';
}

function del() {
    const clickButton = document.querySelector('#del')
    clickButton.style.background = '#333'
    setTimeout(function() {
        clickButton.style.background = '#222222'
    }, 100);
    
    if (firstLine.length < 1) {
        display.value = ''
        return
    } 
    
    if (firstLine[0].length < 2) {
        firstLine = []
        display.value = ''
        return
    }
    
    let aux = firstLine[0]
    firstLine = []
    
    switch (aux.charAt(aux.length - 1)) {
        case '(':
            if (aux.charAt(aux.length - 2) == 't' || aux.charAt(aux.length - 3) == 't') {
                let n = ''
                for (i = 0; i < aux.length - 12; i++) {
                    n += aux[i]
                    firstLine[0] = n
                }
                display.value = firstLine[0]
                if (firstLine[0] == undefined) {
                    display.value = ''
                }
            }
            break;
        case '*':
            if (aux.charAt(aux.length - 2) == '0' && aux.charAt(aux.length - 4) == '1' && aux.charAt(aux.length - 5) == '/') {
                let n = ''
                for (i = 0; i < aux.length - 5; i++) {
                    n += aux[i]
                    firstLine[0] = n
                }
                display.value = firstLine[0]
                if (firstLine[0] == undefined) {
                    display.value = ''
                }
            }
            break;
        default: 
            let n = ''
            for (i = 0; i < aux.length - 1; i++) {
                n += aux[i]
                firstLine[0] = n
            }
            display.value = firstLine[0]
            if (firstLine[0] == undefined) {
                display.value = ''
            }
            break;
    }
    
    
    
}

function dot() {
    const clickButton = document.querySelector('#dot')
    clickButton.style.background = '#333'
    setTimeout(function() {
        clickButton.style.background = '#222222'
    }, 100);
    
    if (firstLine.length < 1) {
        return
    }
    let aux = firstLine[0]
    
    if (aux.charAt(aux.length - 1) == '.') {
        return
    }
    
    firstLine[0] += '.'
    display.value += '.'
}

function porcento() {
    const clickButton = document.querySelector('#porcento')
    clickButton.style.background = '#333'
    setTimeout(function() {
        clickButton.style.background = '#222222'
    }, 100);
    
    if (firstLine.length < 1) {
        return
    }
    
    let aux = firstLine[0]
    
    if (isNaN(aux.charAt(aux.length - 1))) {
        return
    }
    
    display.value += '%'
    firstLine[0] += '/100*'
}

function soma() {
    const clickButton = document.querySelector('#soma')
    clickButton.style.background = '#333'
    setTimeout(function() {
        clickButton.style.background = '#222222'
    }, 100);
    
    if (firstLine.length < 1) {
        return
    }
    
    let aux = firstLine[0]
    
    if (isNaN(aux.charAt(aux.length - 1))) {
        return
    }
    
    display.value += '+'
    firstLine[0] += '+'
}

function vezes() {
    const clickButton = document.querySelector('#vezes')
    clickButton.style.background = '#333'
    setTimeout(function() {
        clickButton.style.background = '#222222'
    }, 100);
    
    if (firstLine.length < 1) {
        return
    }
    
    let aux = firstLine[0]
    
    if (isNaN(aux.charAt(aux.length - 1))) {
        return
    }
    
    firstLine[0] += '*'
    display.value += 'x'
}

function divide() {
    const clickButton = document.querySelector('#divide')
    clickButton.style.background = '#333'
    setTimeout(function() {
        clickButton.style.background = '#222222'
    }, 100);
    
    if (firstLine.length < 1) {
        return
    }
    
    let aux = firstLine[0]
    
    if (isNaN(aux.charAt(aux.length - 1))) {
        return
    }
    
    firstLine[0] += '/'
    display.value += "/"
}

function menos() {
    const clickButton = document.querySelector('#menos')
    clickButton.style.background = '#333'
    setTimeout(function() {
        clickButton.style.background = '#222222'
    }, 100);
    
    if (firstLine.length < 1) {
        return
    }
    
    let aux = firstLine[0]
    
    if (isNaN(aux.charAt(aux.length - 1))) {
        return
    }
    
    firstLine[0] += '-'
    display.value += '-'
}

let auxP = 0

function parenteses() {
    const clickButton = document.querySelector('#parenteses')
    clickButton.style.background = '#333'
    setTimeout(function() {
        clickButton.style.background = '#222222'
    }, 100);
    
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

let raizQ = false

function raiz() {
    const clickButton = document.querySelector('#delta')
    clickButton.style.background = '#333'
    setTimeout(function() {
        clickButton.style.background = '#222222'
    }, 100);
    
    if (firstLine.length < 1) {
        firstLine[0] = '(Math.sqrt('
        display.value += '√'
        raizQ = true
    } else {
        
        let aux = firstLine[0]
        
        if (aux.charAt(aux.length - 2) == 't' ) {
            return
        }
        
        firstLine[0] += '+(Math.sqrt('
        display.value += '√'
        raizQ = true
    }
}

function igual() {
    const clickButton = document.querySelector('#igual')
    clickButton.style.background = '#129b12'
    setTimeout(function() {
        clickButton.style.background = '#018b01'
    }, 100);
    
    if (auxP % 2 != 0) {
        firstLine[0] += ')'
        display.value += ')'
        auxP++
    }
    
    
    if (firstLine.length < 1) {
        return
    }

    if (raizQ == true) {
        firstLine[0] += '))'
        raizQ = false
    }

    let resultado = eval(firstLine[0])
    display2.value = display1.value
    display.value = resultado

}