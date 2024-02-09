const ages = [19, 20, 19, 24, 20, 25, 26, 24, 25, 24]
let min = ages.sort()[0]
let max = ages[ages.length - 1]

console.log(`min age ${min}`)
console.log(`max age ${max}`)
if (ages.length % 2 == 0) {
    first = ages[ages.length / 2]
    second = ages[(ages.length / 2) - 1]
    console.log(`median of ages ${(first + second) / 2}`)
}
else if (ages.length % 2 != 0) {
    let round = Math.floor((ages.length / 2)-1)
    console.log(`median of ages ${ages[round]}`)
}



let sum = ages.reduce((ac, cv) => { return ac + cv }, 0)
average = sum/ages.length
console.log(`average age ${average}`)
let range = max - min
console.log(`range of ages ${range}`)



let diffMinToAverage = Math.abs(min - average);
let diffMaxToAverage = Math.abs(max - average);

console.log("Absolute difference between min and average:", diffMinToAverage);
console.log("Absolute difference between max and average:", diffMaxToAverage);


console.log(ages)
