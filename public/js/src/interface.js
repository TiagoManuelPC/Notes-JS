document.addEventListener("DOMContentLoaded", function() {

  // function updateNotes() {
  //   document.querySelector('#notes').innerText = notepad.showNotes()
  //    };

  const notepad = new NotePad();

  document.querySelector("#submit-button").addEventListener('click', function(){
    let text = document.querySelector("#create-note").value
    notepad.add(text)
    let abbText = notepad.display()
    let li = document.createElement("li")
    li.innerText = abbText
    document.querySelector("#display").append(li)
    document.querySelector("#create-note").value = ''
  })
})