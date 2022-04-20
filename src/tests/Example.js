function random() {
   return Math.floor(Math.random() * 9) + 1
}

function chooseWord(wordArr) {
   const word = wordArr[random()]
   return word.split('')
}

export { chooseWord }
