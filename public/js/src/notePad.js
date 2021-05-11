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


  










// it('stores a note', ()=>{
//   pad = new NotePad
//   pad.add("Hello") 
//   expect(pad.notes[0].text).toEqual("Hello")
// })