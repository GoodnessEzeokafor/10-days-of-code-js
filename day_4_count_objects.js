function getCount(objects) {
    
    let count = 0
    for (let p in objects) {
         if (objects[p].x === objects[p].y){
            count += 1
         }
    }

    return count

}

console.log(getCount([1,4]))

// const arr = ['a', 'b', 'c', 'd'];

// arr.forEach((value, index, array) => {
//     console.log('index', index, 'has a value of', value,
//     'which correlates to array[' + index + ']:', array[index]);
// });