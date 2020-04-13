import $number from './number'

describe('toFixed2', () => {
  it('toFixed2(1.111)=1.11', () => {
    expect($number.toFixed2(1.2222)).toEqual(1.22)
  })
})
