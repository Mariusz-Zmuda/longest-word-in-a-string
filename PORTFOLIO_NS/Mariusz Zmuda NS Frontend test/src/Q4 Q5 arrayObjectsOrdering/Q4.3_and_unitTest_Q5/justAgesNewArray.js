// *******************************************************************************************

// Question 4.3	

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

// 	- 4.3	Pull just the ages into a new array

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


console.log(people);


function getJustAges(people) 
{
var newArray = [];

for (var i in people) {
        newArray.push(people[i].age);
    }
return newArray;
}

console.log(getJustAges(people));