document.addEventListener("DOMContentLoaded", function() {

  // function updateNotes() {
  //   document.querySelector('#notes').innerText = notepad.showNotes()
  //    };
  var index = 0
  const notepad = new NotePad();

  document.querySelector("#submit-button").addEventListener('click', function(){
    let text = document.querySelector("#create-note").value
    notepad.add(text)
    let abbText = notepad.display()
    let li = document.createElement("li")
    li.innerHTML = `<a id="${index}" >${abbText}</a>`
    index ++ 
    document.querySelector("#display").append(li)
    document.querySelector("#create-note").value = ''
  })


})