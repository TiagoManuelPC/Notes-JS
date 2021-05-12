function it(label, callback) {
    console.log(`Test: ${label}`)
    callback()
  }

function expect(actualValue) {
  return {
    toEqual: (expectedValue) => {
      if(actualValue == expectedValue){
        console.log("Pass!")
      } else {
        console.log("Failed :(")
      }
    },
    toBeAnInstanceOf: (expectedValue) =>{
      if(actualValue instanceof expectedValue  ){
        console.log("Pass!")
      } else{
        console.log("Fail!")
      }      
    }
  }
}
