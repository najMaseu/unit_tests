const fib = require('./script.js');

//Checks if the output is an array
it("Function outputs an array", () => {
  expect(fib(5)).toBeInstanceOf(Array)
})

//Checks if function actually does what is supposed to do, given allowed values
it("Outputs the right values for the number five and seven",() => {
  expect(fib(7)).toEqual([ 1, 1, 2, 3, 5, 8, 13 ])
  expect(fib(5)).toEqual([ 1, 1, 2, 3, 5 ])
})

//Chceks if function can handle input that is not a number
it("Should be a number", () => {
  expect(fib()).toEqual("Input is not an Integer: Please input a finite integer!")
  expect(fib([])).toEqual("Input is not an Integer: Please input a finite integer!")
  expect(fib({})).toEqual("Input is not an Integer: Please input a finite integer!")
  expect(fib("")).toEqual("Input is not an Integer: Please input a finite integer!")
})

//Checks if function can handle non-Integer inputs
it("Input should be an integer", () => {
  expect(fib(1.3)).toEqual("Input is not an Integer: Please input a finite integer!")
  expect(fib(Infinity)).toEqual("Input is not an Integer: Please input a finite integer!")
})

//Checks if function can handle negative numbers
it("Input should not be a negative number", () => {
  expect(fib(-2)).toEqual("Please input a positive integer!")
})

//Checks if function can handle 0
it("Input should not be 0", () => {
  expect(fib(0)).toEqual("Please input a positive integer that isn't zero!")
})
