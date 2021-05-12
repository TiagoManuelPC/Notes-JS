document.addEventListener("DOMContentLoaded", function() {

  // function updateNotes() {
  //   document.querySelector('#notes').innerText = notepad.showNotes()
  //    };

  const notepad = new NotePad();

  document.querySelector("#submit-button").addEventListener('click', function(){
    console.log("hi")
    let text = document.querySelector("#create-note").value
    notepad.add(text)
  })
})