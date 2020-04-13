export default {
  toFixed2 (number) {
    if (number === '' || number === undefined || number === null) {
      return ''
    }
    return +Number(number).toFixed(2)
  },
  fixed2Money (v) {
    if (v === null || v === undefined) {
      return ''
    }
    const number = Number(String(v).replace(/,/g, '')).toFixed(2)
    const arr = number.split('.')
    arr[0] = arr[0].replace(/(?=((?!\b)\d{3})+$)/g, ',')
    return arr.join('.')
  }
}
