let fib = (num) => {
  let result = [], upTo = num
  //returns n-th number of the sequence
  let recFib = (n) => {
    if(n <= 2) return 1
    return recFib(n - 1) + recFib(n - 2)
  }



  if(!Number.isInteger(upTo)) return "Input is not an Integer: Please input a finite integer!"

  if(num < 0) return "Please input a positive integer!"

  if(num == 0) return "Please input a positive integer that isn't zero!"



  //appends fib numbers to restult array
  for(upTo; upTo > 0; upTo--){
    result.push(recFib(upTo))
  }
  return result.reverse()
}

module.exports = fib
