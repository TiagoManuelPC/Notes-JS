class NotePad {
  constructor() {
    this.notes = []
  }

  add(text){
    let note = new Note(text)
    this.notes.push(note)
    return note
  }
  
  showNotes() {
    return this.notes
  }

}


  










