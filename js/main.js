function reverseString(str){
    return str.split('').reverse().join('') 
}

function reverseStringSecond(str){
    let lastsymbol = ''
    for (let i = str.length - 1; i >= 0; i--){
        lastsymbol += str[i]
    }
    return lastsymbol
}

console.log(reverseString('privet'))
console.log(reverseStringSecond('Hello'))