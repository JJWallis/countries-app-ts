export const fns = {
   random() {
      return Math.floor(Math.random() * 9) + 1
   },
   chooseWord(wordArr) {
      const word = wordArr[this.random()]
      return word.split('')
   },
}
