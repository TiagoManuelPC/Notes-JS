it('stores a note', ()=>{
  pad = new NotePad
  pad.add("Hello") 
  expect(pad.notes[0].text).toEqual("Hello")
})