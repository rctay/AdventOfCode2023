// run this from https://adventofcode.com/2023/day/1/input

let entries = $0.textContent.trim().split("\n")
let matcher = x => [x.match(/(\d)/), x.match(/^.*(\d)[a-z]*$/)]
let isSameMatch = (left, right) => right[1] == left[1] && right[0].indexOf(right[1]) == left.index
let makeNumber = (digit1, digit2) => Number(digit1 + digit2)

entries.map(matcher).map(x => isSameMatch(...x) ? makeNumber(x[0][1], x[0][1]) : makeNumber(x[0][1], x[1][1])).reduce((x, acc) => x + acc, 0)
