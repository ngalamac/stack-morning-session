const Stack = require('./challenge')
const assert = require('assert')

describe('UnitTests', function () {
  it('push_and_pop', function () {
    // Failure message: 
    // The order of methods called is: stack.push(3) -> stack.push(5) -> stack.pop
    const stack = new Stack()
    stack.push(3)
    stack.push(5)
    assert(stack.pop() === 5)
  })
  
  it('multiple_push_and_pops', function () {
    // Failure message: 
    // The order of methods called are: stack.push(3) -> stack.push(5) -> stack.push(10) -> stack.pop -> stack.pop -> stack.pop
    const stack = new Stack()
    stack.push(3)
    stack.push(5)
    stack.push(10)

    assert(stack.pop() === 10)
    assert(stack.pop() === 5)
    assert(stack.pop() === 3)
  })

  it('interleaved_push_and_pops', function () {
    // Failure message: 
    // The order of methods called are: stack.push(3) -> stack.pop -> stack.push(5) -> stack.push(10) -> stack.pop -> stack.push(8) -> stack.pop -> stack.pop
    const stack = new Stack()
    stack.push(3)
    assert(stack.pop() === 3)

    stack.push(5)
    stack.push(10)

    assert(stack.pop() === 10)

    stack.push(8)
    assert(stack.pop() === 8)
    assert(stack.pop() === 5)
  })
})
