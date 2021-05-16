document.addEventListener("DOMContentLoaded", function() {
  
  const notepad = new NotePad();

  //------------------------------------
  // gets the emoji api
  createEmoji = async (text, callback) => {
    const obj = { text: text}
    let jsonText = JSON.stringify(`{ "text": "${text}" }`)
    //let jsonText = `{ "text": "${text}" }`
    await fetch("https://makers-emojify.herokuapp.com/", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.parse(jsonText)
      })
    .then(response => response.json())
    .then(data => callback(data.emojified_text))
  }


  document.getElementById("create-note").addEventListener('click', function(){
    showBox();
  })
  
  document.getElementById("textInput").addEventListener("keyup", function(event){
    if (event.key != "Enter") {
    return}
    saveNote()
  })


  document.querySelector("#submit-note").addEventListener('click', function(){
    saveNote()
  })

  
  
  // function displayAllNotes(){
  //   document.querySelector("ul").innerHTML = ""
  //   for(let i = 0; i < notepad.notes.length; i++){
  //     let abbText = notepad.notes[i].abbreviate()
  //     let li = document.createElement("li")
  //     li.setAttribute("id", `${i}`) 
  //     createEmoji(abbText, (abbText)=> {
  //     li.innerHTML = `<a href="#${i}">${abbText}</a>` 
  //     })
  //     document.querySelector("#abbreviated-list").append(li)
  //   }
  // }
 
   document.getElementById('abbreviated-list').addEventListener('click', function(){
     displayAllNote()
   })

   document.querySelector("#returnallnotes").addEventListener("click", function(){
    document.querySelector("ol").classList.remove("hidden")
    document.getElementById("fullNote").classList.add("hidden")
   })

   
  
  function displayAllNote() {
    document.addEventListener("hashchange", () => {
    let index_page = `#m${location.href.split("#")[1]}`
    document
    .querySelector(index_page)
    .innerText = notepad.notes[location.href.split("#")[1]].text;
    });
  };
  function displayNewNote(text){
    var index = notepad.notes.length
      let abbText = notepad.notes[index-1].abbreviate()
      let li = document.createElement("li")
      li.setAttribute("id", `note${index-1}`) 
      createEmoji(abbText, (abbText)=> {
      li.innerHTML = `<a href="#${index}">${abbText}</a>` 
      })
      document.querySelector("#abbreviated-list").append(li)
      document.querySelector(`#note${index-1}`).addEventListener("click", function(e){
        console.log(e.target)
      var index = e.target.parentElement.id.replace("note", "") 
      var fullText = notepad.notes[index].text
      createEmoji(fullText, (fullText)=>{
        document.getElementById("alltext").innerHTML = fullText
      })
      document.querySelector("ol").classList.add("hidden")
      document.getElementById("fullNote").classList.remove("hidden")
      document.getElementById("alltext").innerHTML = fullText
      })
      
    }

  function saveNote(){
    let text = document.querySelector("#textInput").value.replace("\n", "")
    notepad.add(text)
    displayNewNote(text)
    document.querySelector("#textInput").value = ''
    hideBox()
    console.log(notepad.notes)
  }
  
  

  function showBox() {
    document.getElementById("save-note").style.display = "block"
    document.getElementById("textInput").focus()
  }

  function hideBox() {
    document.getElementById("save-note").style.display = "none"
  }

    
})

  // document.getElementById("abbreviated-list")
  // .querySelectorAll("li")
  // .addEventListener('click', urlChange())