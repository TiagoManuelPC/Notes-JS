it('stores a note', () => {
  pad = new NotePad
  pad.add("Hello") 
  expect(pad.notes[0].text).toEqual("Hello")
})

it("should be able to give us an array of first 20 characters of each note", () => {
  pad = new NotePad();
  pad.add("I am iron man and I like fighting thanos")
  expect(pad.display()).toEqual("I am iron man and I ")
})