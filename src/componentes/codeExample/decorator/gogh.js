import {tokenDecorator} from "./saramago.js"

function tokenDivider(sourdeCode){

    let words=sourdeCode.split(' ')
    return words

}

export function generateCodeObjects(sourceCode){

    let codeObjects=[]
    let tokens=tokenDivider(sourceCode)

    function makeObject(element,index,array){
        let codeObject=tokenDecorator(element)

        codeObjects.push(codeObject)
    }

    tokens.forEach(makeObject)

    return codeObjects
}

let codeExample= '<button onClick = { evento } className = { `btn-basic ${variant} ${color} ` } > { children } </button>'


//console.log(tokenDivider(codeExample))

//console.log(generateCodeObjects(codeExample))

/*
    {
                    codeElements.map(element =>
                        <span>{element.rawToken}</span>
                    )
                }

{
                    codeElements.map( item =>
                        <p>{item.rawToken}</p>
                    )
                }
*/