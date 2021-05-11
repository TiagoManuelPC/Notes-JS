// it('2+2', ()=> {
//   expect(2+2).toEqual(4)
// })

it('creates a note', ()=>{
  let note = new Note;
  expect(note).toBeAnInstanceOf(Note)
})