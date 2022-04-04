//  1)Given a number print its digits count.  
    
function digitsCount (val) {

    let num = val.toString().split('').length
    return val<0 ? num-1 : num
    
}

console.log(digitsCount(-75694))

// 2) Count numbers of digit 9 in a number

function digit9 (val) {

    let splitArr = val.toString().split('') 
    return splitArr.filter((val)=> val === '9').length
    
}

console.log(digit9(15994949))

// 3) -Given two numbers. Print powers of 2 between that numbers. (without using Math.pow)

function beteweenNumbers (start, end) {
    let x = 1
    let betArr = [];
    while(x<start){
        x *= 2
    }
    while(x<end){
        betArr.push(x)
        x *= 2
    }
    return betArr
}

console.log( beteweenNumbers(0,47) )

// 4) Given a number as input, insert dashes (-) between each two even numbers.


function twoEwensDashed (val) {
    let valStr = val.toString().split('')
    let newValStr = ''

    valStr.forEach((val, i)=>{
        if( val%2 === 0 && valStr[i+1] %2 ===0 ){
            newValStr += `${val}-`
        }else{
            newValStr += val
        }
    })

    return newValStr
    

}

console.log( twoEwensDashed(234408114566) )




