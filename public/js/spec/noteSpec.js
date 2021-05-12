
it('creates a note', ()=>{
  let note = new Note;
  expect(note).toBeAnInstanceOf(Note)
})

it('contains text', ()=>{
  let note = new Note('Hello')
  expect(note.text).toEqual('Hello')
})