const people = [
    {
        name: "Bob",
        age: 29
    },
    {
        name: "Alice",
        age: 42,
    },
    {
        name: "Greg",
        age: 23
    },
    {
        name: "Jean",
        age: 50
    }
];

test('we should have ages 23 and 42', () => {
  expect(people).toEqual(
    expect.arrayContaining([
      expect.objectContaining({age: 23}),
      expect.objectContaining({age: 42})
    ])
  );
});

test('we should have Bob and Jean', () => {
  expect(people).toEqual(
    expect.arrayContaining([
      expect.objectContaining({name:'Bob'}),
      expect.objectContaining({name:'Jean'})
    ])
  );
});

test('array should not be empty', () => {
	expect(people).not.toEqual([])
});

test('testing length of an array', () => {
	expect(people).toHaveLength(4)
});