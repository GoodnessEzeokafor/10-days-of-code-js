function reverseString(s) {
 try{
    const array = s.split('')
    const reverse = array.reverse()
    const joinString = reverse.join('')
    console.log(joinString)
 }  catch(e){
     console.log(e.message)
     console.log(s)
 } 
}

console.log(reverseString(Number(123444)))