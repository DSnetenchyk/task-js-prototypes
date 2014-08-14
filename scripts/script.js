//Creat base monster

function Monster(name) {
	this.name = name;
	this.health = 0;
	this.weapons = "";
	this.greet = function() {
		console.log("Hi, I'm "+this.name);
	}
}

//Creat Котомонстр
var catMonster = function(){
	Monster.apply(this, arguments);
	this.weapons = "scratch";
	this.health = 50;
	this.damage = 5;
}

//Creat Птахомонстр
var birdMonster = function(){
	Monster.apply(this, arguments);
	this.weapons = "peck";
	this.health = 60;
	this.damage = 3;
}

catMonster.prototype = Object.create(Monster.prototype);
birdMonster.prototype = Object.create(Monster.prototype);

var Simons = new catMonster("SimonsCat");
Simons.greet();
console.log("I have " + Simons.health + "HP, I make "+ Simons.weapons + ", I put " + Simons.damage + " point damage!");

var AngryBirds = new birdMonster("Chuck");
AngryBirds.greet();
console.log("I have " + AngryBirds.health + "HP, I make "+ AngryBirds.weapons + ", I put " + AngryBirds.damage + " point damage!");