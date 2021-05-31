function getLetter(s) {
    let letter;
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const testCase2 = ['b', 'c', 'd','f', 'g']
    const testCase3 = ['h', 'j', 'k', 'l', 'm']
    const testCase4=['n','p','q','r', 's', 't', 'v', 'w', 'x', 'y', 'z']
    // Write your code here
    switch (true) {
        case vowels.includes(s[0]):
            letter = 'A'
            break;
        case testCase2.includes(s[0]):
            letter = 'B'
            break;
            
        case testCase3.includes(s[0]):
            letter = 'C'
            break;
            
        case testCase4.includes(s[0]):
            letter = 'D'
            break;
            
        default:
            break;
    }
    
    return letter;
}
const vowels = ['a', 'e', 'i', 'o', 'u']
const s = 'adfgt'
console.log(getLetter(s))
console.log(s[0])
console.log(vowels.includes(s[0]))