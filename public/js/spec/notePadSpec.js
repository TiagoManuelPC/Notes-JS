it('stores a note', () => {
  pad = new NotePad
  pad.add("Hello") 
  expect(pad.notes[0].text).toEqual("Hello")
})

it("returns the abbreviated text", () => {
  pad = new NotePad();
  pad.add("I am iron man and I like fighting thanos")
  expect(pad.display()).toEqual("I am iron man and I ")
})