var chocolateBars = [ 
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]
function addElementToBeginningOfArray(array, element){ 
  [element, ...array]
  return array
}
<<<<<<< HEAD

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
  [...array, element]
  return array
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}
function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}


function removeElementFromEndOfArray(array){
  array.slice(-1)
  return array
}

function addElementToBeginningOfArray(array,element){
  var newArray = [element, ...array]
  return newArray
}

function addElementToEndOfArray(array, element){
  var newArray2 = [...array, element]
  return newArray2
  
}

=======

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
  [...array, element]
  return array
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}
function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}


function removeElementFromEndOfArray(array){
  array.slice(-1)
  return array
}

function addElementToBeginningOfArray(array,element){
  var newArray = [element, ...array]
  return newArray
}

function addElementToEndOfArray(array, element){
  var newArray2 = [...array, element]
  return newArray2
  
}

>>>>>>> b28093bd4b7345bd24492f3c10e9022f74e923fa
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}


function removeElementFromBeginningOfArray(array){
  array.shift()
  return array
}

<<<<<<< HEAD
function removeElementFromBeginningOfArray(array){
  var newArray3 = array.slice(1)
  return newArray3
}
=======
>>>>>>> b28093bd4b7345bd24492f3c10e9022f74e923fa

function addElementToEndOfArray(array, element){
  
 return [...array, element]
}