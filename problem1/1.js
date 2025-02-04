function countChar(str) {
    let charCount = {};
    let order = []
    let newStr = str.toUpperCase().split(" ").join("")
    console.log(newStr)
    for (let char of str) {
        if (!charCount[char]) {
            charCount[char] = 1
            order.push(char)
        }
        charCount[char]++
    }
    let result = order.map(char => `${char}-${charCount[char]}`)
    return result
}
console.log(countChar("Amolya Sharma"))
console.log(countChar("Chinmay Kulkarni"))