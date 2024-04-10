// scripts.js

const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const result = []

const extractBiggest = () => {
    const first = data.lists[0][1]; // Extract the first list
    const second = data.lists[1][1]; // Extract the second list
    const third = data.lists[2][1]; // Extract the third list

    if (first[first.length - 1] > second[second.length - 1] && first[first.length - 1] > third[third.length - 1]) {
        return first.pop(); // Remove and return the last element from the first list
    } else if (second[second.length - 1] > third[third.length - 1]) {
        return second.pop(); // Remove and return the last element from the second list
    } else {
        return third.pop(); // Remove and return the last element from the third list
    }
}


// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)