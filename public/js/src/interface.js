document.addEventListener("DOMContentLoaded", function() {

  function updateNotes() {
    document.querySelector('#notes').innerText = notepad.showNotes()
     };

  const notepad = new NotePad();

  document.querySelector("#create-note").addEventListener('click', function(){
    notepad.add(text);
    notepad.showNotes();
  })
})