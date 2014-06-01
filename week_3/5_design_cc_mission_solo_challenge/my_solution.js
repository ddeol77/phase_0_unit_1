// This is a solo challenge

// Your mission description:
// Move Theozy in an 'S' formation
// Execute an attack 
// Move back to Theozy's original position

// Pseudocode
// Move object right
// Move object up
// Move object left
// Move object up
// Move object right
// Execute the attack method
// Move object left
// Move object down
// Move object right
// Move object down
// Move object left

// Initial Code
var = theozy { 

moveRight: right(X,Y)
	"Move 5 spaces to the right";
moveUp: up(X,Y)
	"Move 5 spaces up";
moveLeft: left(X,Y)
	"Move 5 spaces to the left";
moveDown: down(X,Y)
	"Move 5 spaces down";
attack: fight(X,Y)
	"Attack";
// I don't know how to write the code for the functions to actually perform a move
// or attack action so I've put a string in the function as a placeholder for it.

this.moveRight();
this.moveUp();
this.moveLeft();
this.moveUp();
this.moveRight();
this.attack();
this.moveLeft();
this.moveDown();
this.moveRight();
this.moveDown();
this.moveLeft();

}

// Refactored Code
// The 5 methods are defined withing the Object theozy.  Below that the methods are
// called within the object theozy using the 'this' statemtent to perform the desired 
// actions to complete the mission objectives.  




// Reflection
// 1.What worked for me was referencing the code combat mission and understanding the format they used.
// I know we were given a lot of creative freedom for this exercise but I struggled a little bit with 
// the lack of direction.
// 2.The questions I had were mainly about the syntax on how to define a method for an object.  I found
// information on the w3schools site that told me a method is defined as a function property of an object.
// 3.I was not sure how to actually write code to make the object move.  I used a string as a placeholder
// where that code would have gone.
// 4.Learned at a high level how games and programming are used together.
// 5.I am very confident in defining local variables in JavaScript, very confident in creating, adding, and deleting
// properties from javascript objects.
// 6.I enjoyed makng up actions that this game would perform and defining the methods inside the object.
// 7.I found it tedious to figure out what excactly the challenge wanted to see from us.