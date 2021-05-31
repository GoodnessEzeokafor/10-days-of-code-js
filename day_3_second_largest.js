var secondMax = function (arr){ 
    const distinct = [...new Set(arr)];
    const distinctSorted = distinct.sort((a, b) => b - a);
    const max = Math.max.apply(null, distinctSorted); // get the max of the array
    distinctSorted.splice(distinctSorted.indexOf(max), 1); // remove max from the array
    return Math.max.apply(null, distinctSorted)
};

console.log(secondMax([5,5,4,3]))
