// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Daniel Kim
//  2. Dev Deol


// 0. "YOU SIGNED... WHO?!"
// We decided to create objects for each star using literal notation



// 1. "Here they Come!"
var adam = {
    age: 47,
    quote: "That's your home!  Are you too good for your home?"
}

var kristen = {
    age: 33,
    quote: "Do you wanna build a snowman?"
    }
    
var jim = {
    age: 52,
    quote: "So you're saying there's a chance?  YEAH!"
    }




// 2. "TIME IS MONEY!"

//YOUR CODE HERE!
function Client(name, age, quote) {

    this.name = name;
    this.age = age; 
    this.quote = quote;

var adamSandler = new Client("Adam Sandler", 47, "That's your home!  Are you too good for your home?");

var kristenBell = new Client("Kristen Bell", 33, "Do you wanna build a snowman?");

var jimCarrey = new Client("Jim Carrey", 52, "So you're saying there's a chance?  YEAH!");




var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";





// 3. "SHOW 'EM OFF!"
function clientInfo(Client) {
    return Client.name, Client.age, Client.quote;
}

clientInfo(adamSandler);

clientInfo(kristenBell);

clientInfo(jimCarrey);




// 4. "But wait, there's more!"
function clientInfo(Client) {
    return Client.name, Client.age, Client.quote;
}

clientInfo(adamSandler);

clientInfo(kristenBell);

clientInfo(jimCarrey);

//We tried a few different options to return a suitable answer, but were unsuccessful.  
//We'll look into this more as we dive deeper into our Week 3 curriculum.    

// 5.  ** BONUS **


//  6.  Your Reflection:
//1. What worked was when our guide Lorena Mesa helped give us hints guided us in the right direction.
// We struggled with the showquote problem and especially since our guide had to leave for another gps session.
// We actually ended up taking an hour and a half for this session.
//2. We had questions about creatng objects in javascropt and also placing a function inside an object property.
// Besides our guide we referenced stack overflow and w3schools website when we could. 
//3. We had trouble with creating objects but figured it out when we found instructions on literal and constructor
// notations.
//4. We learned how to define a class and instantiate objects off that class with the constructor notation.
//5. I'm moderately confiden with the learning competencies in this challenge.  I gained more confidence as 
// I completed more challenges for the week.
//6. I enjoyed when we had our 'aha' moment and figured out how to create objects from the base class.
//7. I found it tedious when we were stuck without help and were going in circles.













