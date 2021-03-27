function clearLine() {
    if (firstLine.length < 1) {
        return
    }
    firstLine.pop();
    display1.value = '';
    display2.value = '';
}

function del() {
    if (firstLine.length < 1) {
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
            if (aux.charAt(aux.length - 2) == 't'){
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