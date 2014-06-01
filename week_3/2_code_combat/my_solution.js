// I worked on this challenge [by myself, with:]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
//
//Rescue mission
//move up
//move right
//move right
//move down
//attack nearby enemy
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();

//Grab the Mushroom
//move right
//move left
//move up
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();

//Drink Me
//attak nearby enemy
//move right
//move down
//move up
//move right
//attack nearby enemy
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

//Taunt The Guards
//move right
//say 'Follow me'
//move right
//move right
//move up
//move right
//say 'Hey There!'
//move down
//move right
//move up
//move right
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Hey There!");
this.moveDown();
this.moveRight(); 
this.moveUp();
this.moveRight(); 
 
//It's a trap!
//move down
//move down
//say 'Hey There!' 
//move up
//move up
this.moveDown();
this.moveDown();
this.say("Hey There!");
this.moveUp();
this.moveUp();
 
//Taunt
//say You Smell
//say You're Ugly
//say You can't catch me
//say Come here  
this.say("You Smell");
this.say("You're Ugly");
this.say("You can't catch me");
this.say("Come here");
 
 //Cowardly Taunt
 // move to coordinates 63 by 20
 // say "Hey over here!"
 this.moveXY(63, 20);
 this.say("Hey over here!");

//Commanding Followerts
//say 'follow me'
//say 'attack'
//move to safety
this.say("follow me");
this.say("attack"); 
this.moveXY(60, 63);   

//Mobile Artillery
//move to attack positions
//attack first set of targets
//attack second set of targets
//move to attack positions
//attack third set of targets
this.moveXY(43, 38);
this.attackXY(66, 55);
this.attackXY(49, 63);
this.moveXY(30, 26);
this.attackXY(36, 34);

//1. This is referring to the function we are currently in
//2. The () in Javascript is where parameters/arguments are stored in a function
//3. Semicolons let the program know that it's the end of a line

 
 
// Reflection:
// Write your reflection here.
//The strategy that worked for me was trial and error.  The problems I faced were not being familiar with the game.
//The questions I had during this challenge were really why I was doing it.  I didn't really have to use external resources.
//I struggled with being able to hit the moving targets in the last level
//I learned how to play code combat
//I'm very confident in being able to manipulate an object, explain what '()' does, and using error message to correct syntax.
//I enjoyed the last level where I had to plot coordinates to shoot at the enemy targets
//I found almost all the levels tedious especially having to write out all the psuedocode for each level







