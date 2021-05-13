document.getElementById('button').addEventListener('click', calculate)

let first = 0
let second = 0
let counter = 0
let answer = 0

function calculate () {
  first = document.getElementById('input1').value
  second = document.getElementById('input2').value
  first = parseInt(first)
  second = parseInt(second)

  for (counter = 0; counter < first; counter++) {
    answer = answer + second
  }
  document.getElementById('answer').innerHTML = answer
}
