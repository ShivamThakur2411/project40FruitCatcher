var dog;
var dogI, dogHappy;
var foodS, foodStock;
var database;

function preload(){
	dogI = loadImage("images/Dog.png");
	dogHappy = loadImage("images/happydog.png");
}

function setup() {
	createCanvas(500, 500);

	 database = firebase.database();

	dog = createSprite(250,250);
	dog.scale = 0.4;
	dog.addImage(dogI);

	foodStock = database.ref('Food');
	foodStock.on("value",readStock);
}


function draw() {  
	background(46, 139, 87);

	textSize(16);
	fill(255);
	stroke(4);
	text("press UP_ARROW to feed it an make his HAPPY", 120, 70);

	if(keyWentDown(UP_ARROW)){
		writeStock(foodS);
		dog.addImage(dogHappy);
	}

  drawSprites();
}

function writeStock(x){
	if(x<=0){
		x=0
	}else {
		x = x-1
	}
	database.ref('/').update({
		Food:x
	})
}

function readStock(data){
	foodS = data.val();
}

function showError(){
	console.log("show error");
}