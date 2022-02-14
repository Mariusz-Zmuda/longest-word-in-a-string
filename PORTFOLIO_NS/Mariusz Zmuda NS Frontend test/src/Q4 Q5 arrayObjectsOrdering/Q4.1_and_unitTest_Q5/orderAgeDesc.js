// *******************************************************************************************

// Question 4.1	

// In JavaScript: given an array of objects:
	
// 	// code example start
// 	const people = [
// 		{
// 			name: "Bob",
// 			age: 29
// 		},
// 		{
// 			name: "Alice",
// 			age: 42,
// 		},
// 		{
// 			name: "Greg",
// 			age: 23
// 		},
// 		{
// 			name: "Jean",
// 			age: 50
// 		}
// 	];
// 	// code example end
	
// 	- 4.1	Order the people by age in decending order

// *******************************************************************************************

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
// sort by descending age
people.sort(function (a, b) {
  return b.age - a.age;
});

console.log(people);

// module.exports = people 