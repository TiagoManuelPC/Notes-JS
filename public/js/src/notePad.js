class NotePad {
  constructor() {
    this.notes = []
  }

  add(text){
    let note = new Note(text)
    this.notes.push(note)
    return note
  }
  
  display() {
   let x = this.notes[this.notes.length - 1].abbreviate()
   return x
  }

}


  










