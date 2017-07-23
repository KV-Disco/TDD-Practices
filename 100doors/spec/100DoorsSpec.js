describe('function tonOfDoors', function () {
  it('should exist', function () {
    expect(tonOfDoors).toBeDefined()
  })

  it('should be a function', function () {
    expect(typeof tonOfDoors).toBe('function')
  })

  it('should return an array', function () {
    var result = tonOfDoors()
    expect(Array.isArray(result)).toBeTruthy()
  })

  it('should return an array of 100 elements', function () {
    var result = tonOfDoors()
    var expectation = 100
    expect(result.length).toBe(expectation)
  })

  it('should return an array with a number on its first element', function () {
    var result = tonOfDoors()
    var expectation = 'number'
    expect(typeof result[0]).toBe(expectation)
  })

  describe('each element of the array', function () {
    it('should have a value equal to eather 1 or 0', function () {
      var result = tonOfDoors()
      // var expectation = 100
      expect(result.every(zeroOrOne)).toBeTruthy()
    })
  })

  it('should return an array with a 1 on its first element', function () {
    var result = tonOfDoors()
    var expectation = 1
    expect(result[0]).toBe(expectation)
  })
})

function zeroOrOne (elements) {
  return elements === 1 || elements === 0
}
