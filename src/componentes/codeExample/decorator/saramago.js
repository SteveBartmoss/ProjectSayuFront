

export function tokenDecorator(token){
    const labelClose= /<\/[a-zA-Z][a-zA-Z0-9\-]*>/
    const labelOpen= /<[a-zA-Z][a-zA-Z0-9\-]*/
    const reservedWords=['className','id','onClick','children'];
    const operators=['+','-','=','*','&','%']
    const codeDividers=['[',']','{','}','(',')']

    
    let tokenType

    if(token === '>'){
        tokenType = 'label'
    }

    else if(labelClose.test(token)){
        tokenType = 'label'
    }

    else if(labelOpen.test(token)){
        tokenType = 'label'
    }

    else if(operators.includes(token)){
        tokenType = 'operator'
    }

    else if(codeDividers.includes(token)){
        tokenType = 'divider'
    }

    else if(reservedWords.includes(token)){
        tokenType = 'reservedWord'
    }

    else{
        tokenType = 'text'
    }

    return{
        rawToken: token,
        typeToken: tokenType
    }

}