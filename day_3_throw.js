function isPositive(a) {
    try{
        if(a === 0){
            throw new Error("Zero Error")
        }    
        if(a < 0){
            throw new Error("Negative Error")
        }
        return "YES"
    }catch(e){
        console.log(e.message)
    }
 
}

isPositive(-1)

// 3
// 1
// 2
// 3