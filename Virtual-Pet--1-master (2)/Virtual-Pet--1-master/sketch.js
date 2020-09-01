var dog;
var dogI, dogHappy;
var foodS, foodStock;
var database;

function preload(){

	dogI = loadImage("images/dogImg.png");
	dogHappy = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);

	 database = firebase.database();

	dog = createSprite(250,250);
	dog.addImage(dogI);

	foodStock = database.ref('Food');
	foodStock.on("value",readStock);
}


function draw() {  
	background(46, 139, 87);

	if(keyWentDown(UP_ARROW)){
		writeStock(foodS);
		dog.addImage(dogHappy);
	}

  drawSprites();
}

function writeStock(x){
	if(X<=0){
		X=0
	}else {
		x = x-1
	}
	database.ref('/').update({
		x: Food.x
	})
}
function readStock(data){
	foodS = data.val();
}

function showError(){
	console.log("show error");
}