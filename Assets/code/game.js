/*
  Basic javascript tips:
    - end lines with a semicolon;
    - function name(arg1, arg2) {
        var x;
        var y = 5;
        var z = "string";
        var a = 'c';
        var t = true;
        var f = false;

        var n = (t || f);   //[evaluates as true]
        var m = (t && f);   //[evaluates as false]

        return m;   // can return or not return a thing
      }

    - Documentation here:
      https://p5js.org/reference/
*/

/*
    Some general setup ideas I had:
      - Players will be given a name and ID in the player class
      - Images can be stored and renamed by ID in the Assets/img/ folder
      - 'game_mode' variable determines what mode the game is in
*/

// Constants to keep track of what screen we're on
const GM_TITLE = 0;
const GM_CHOOSE_FIGHTER = 1;
const GM_FIGHT = 2;
const GM_POST_FIGHT = 3;

// Start the game on the title screen
var game_mode = GM_TITLE;

/* Player Class */
class Player {
  Player(id,name) {
    this.id = id;
    this.name = name;
  }

  // Basic setter and getter for name of the player
  setName(name) { this.name = name; }
  getName(name) { return this.name; }
}

/* Variables */

// Numbers of players -- defined on the title screen
var numPlayers;

// Create empty players array and populate once the game starts and we know how many players there will be
var players = [];

// Title sequence code-- only ran when the game is on the title screen
function title_sequence() {

}

// Choose fighter sequence code-- only ran when the game is on the choose fighter screen
function choose_fighter_sequence() {

}

// Fight sequence code-- only ran when the game is in an active fight
function fight_sequence() {

}

// Post fight sequence code-- only ran when the game is on the post-fight screen
function post_fight_sequence() {

}

// Setup function-- run first by p5.js
function setup() {
  // Do basic visual setting up
  createCanvas(800, 600);
  background(255);
  noStroke();

  // Sets the game's framerate
  frameRate(30);
}

// Draw function-- run every frame by p5.js
function draw() {
  // Common functions to avoid putting duplicate code in every section
  clear();          // Clear the screen
  background(255);  // Fill white


  if (game_mode == GM_TITLE) {
    title_sequence();
  }
  else if (game_mode == GM_CHOOSE_FIGHTER) {
    choose_fighter_sequence();
  }
  else if (game_mode == GM_FIGHT) {
    fight_sequence();
  }
  else if (game_mode == GM_POST_FIGHT) {
    post_fight_sequence();
  }
}
