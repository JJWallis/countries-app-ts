export const fns = {
   random() {
      return Math.floor(Math.random() * 9) + 1
   },
   chooseWord(wordArr) {
      const word = wordArr[0]
      return word.split('')
   },
}
