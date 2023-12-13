// run this from https://adventofcode.com/2023/day/1/input

const NUMBERS_AS_STRINGS = {
  "one": 1,
  "two": 2,
  "three": 3,
  "four": 4,
  "five": 5,
  "six": 6,
  "seven": 7,
  "eight": 8,
  "nine": 9
}

let numberSpeltMatch = /(one|two|three|four|five|six|seven|eight|nine|\d)/

let entries = $0.textContent.trim().split("\n")
let matcher = x => [x.match(numberSpeltMatch), x.match(/^.*(one|two|three|four|five|six|seven|eight|nine|\d)[a-z]*$/)]
let isSameMatch = (left, right) => right[1] == left[1] && right[0].indexOf(right[1]) == left.index
let mapSpeltDigit = x => x in NUMBERS_AS_STRINGS ? NUMBERS_AS_STRINGS[x] : Number(x);
let makeNumber = (digit1, digit2) => mapSpeltDigit(digit1) * 10 + mapSpeltDigit(digit2)

entries.map(matcher).map(x => isSameMatch(...x) ? makeNumber(x[0][1], x[0][1]) : makeNumber(x[0][1], x[1][1])).reduce((x, acc) => x + acc, 0)
