module.exports = {
  email: mail => /^(\w*)@(\w*)((\.(\w+))*)?\.(\w*)$/gm.test(mail),
  word: s => /^\w+$/.test(),
  number: x => {
    try {
      Number(x)
      return true
    } catch (e) {
      return false
    }
  },
}
