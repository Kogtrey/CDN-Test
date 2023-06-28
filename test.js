// Lowercase strings:
console.time()
str1 = "TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest".toLowerCase()
str2 = "TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest".toLowerCase()

// Get Lengths:
str1len = str1.length
str2len = str2.length

// Create Array:
arr = new Array(str1len + 1).fill().map(_ => new Array(str2len + 1).fill(0))

for (let i = 0; i <= str1len; arr[i][0] = i++) {
}

for (let j = 0; j <= str2len; arr[0][j] = j++) {
}

for (let i = 1; i <= str1len; i++) {
    for (let j = 1; j <= str2len; j++) {

        let cost = str1[i - 1] === str2[j - 1] ? 0 : 1
        let up = arr[i - 1][j] + 1
        let left = arr[i][j - 1] + 1

        arr[i][j] = Math.min(Math.min(up, left, (arr[i - 1][j - 1] + cost)))
    }
}

console.timeEnd()
console.log(`
	distance: ${arr[str1len][str2len]}
  similarity: %${((1 - (arr[str1len][str2len] / Math.max(str1len, str2len))) * 100)}
`)