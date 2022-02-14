// *******************************************************************************************

// Question 4.2	

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
	
// 	- 4.2	Order the people by name alphabetically A-Z

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

/* sort people by name alphabetically */

people.sort(function(a, b) {
  var nameA = a.name.toLowerCase(); /*ignore lower and upper case*/
  var nameB = b.name.toLowerCase(); /*ignore lower and upper case*/ 
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
});
console.log(people);