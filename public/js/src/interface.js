document.addEventListener("DOMContentLoaded", function() {

  // function updateNotes() {
  //   document.querySelector('#notes').innerText = notepad.showNotes()
  //    };
  var index = 0
  var tester = false
  const notepad = new NotePad();

  document.querySelector("#submit-button").addEventListener('click', function(){
    let text = document.querySelector("#create-note").value
    notepad.add(text)
    let abbText = notepad.display()
    let li = document.createElement("li")
    li.innerHTML = `<a id="${index}" href="#${index}">${abbText}</a>`
    index ++ 
    document.querySelector("#display").append(li)
    document.querySelector("#create-note").value = ''
    // tester = true
  })
  // if(tester) {
    document.getElementById("[id='0']").addEventListener('click', function() {
      console.log("hashchange")
    })
  // }

})