// Error Handling
/*
    try {
    // code that may throw an error
    } catch (err) {
    // code to be executed if an error occurs
    } finally {
    // code to be executed regardless of an error occurs or not
    }
    try: wrap suspicious code that may throw an error in try block.The try statement allows us to define a block of code to be tested for errors while it is being executed.

    catch: write code to do something in catch block when an error occurs. The catch block can have parameters that will give you error information. Catch block is used to log an error or display specific messages to the user.

    finally: finally block will always be executed regardless of the occurrence of an error. The finally block can be used to complete the remaining task or reset variables that might have changed before error occurred in try block.
*/

// try {
//   let lastName = 'Yetayeh'
//   let fullName = fistName + ' ' + lastName
// } catch (err) {
//   console.error(err) // we can use console.log() or console.error()
// } finally {
//   console.log('In any case I will be executed')
// }

try {
  let lastName = 'Yetayeh'
  let fullName = fistName + ' ' + lastName
} catch (err) {
  console.log('Name of the error', err.name)
  console.log('Error message', err.message)
} finally {
  console.log('In any case I will be executed')
}

const throwErroExampleFun = () => {
  let message
  let x = 1
  try {
    if (x == '') throw 'empty'
    if (isNaN(x)) throw 'not a number'
    x = Number(x)
    if (x < 5) throw 'too low'
    if (x > 10) throw 'too high'
  } catch (err) {
    console.log(err)
  }
}
throwErroExampleFun()
