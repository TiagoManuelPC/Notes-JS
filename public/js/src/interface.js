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
    li.setAttribute("id", `m${index}`)
    li.innerHTML = `<a href="#${index}">${abbText}</a>`
    index ++ 
    document.querySelector("#display").append(li)
    document.querySelector("#create-note").value = ''
    // tester = true
  })
  // if(tester) {
    document
      .querySelector("#display")
      .querySelectorAll("li")
      .addEventListener('click', makeUrlChangeShowAnimalForCurrentPage())
    
    function makeUrlChangeShowAnimalForCurrentPage() {
      window.addEventListener("hashchange", () => {
        document
        .querySelector(`#m${location.href.split("#")[1]}`)
        .innerHTML = notepad.notes[location.href.split("#")[1]].text;
        retract = document.createElement("BUTTON")
        retract.setAttribute("id","retract")
        document
        .querySelector(`#m${location.href.split("#")[1]}`)
        .append(retract)
        document.querySelector("#retract").addEventListener("click", function() {
          // note = notepad.notes[location.href.split("#")[1]].abbreviate()
          // console.log(note)
          // // document.querySelector(`#m${location.href.split("#")[1]}`).innerText = note
          // document.querySelector(`#m${location.href.split("#")[1]}`).innerHTML = `<a href="#${location.href.split("#")[1]}">${note}</a>`
        })
      });
    };



})