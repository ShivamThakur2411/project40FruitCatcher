 const Engine = Matter.Engine
 const World = Matter.World
 const Events = Matter.Events
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;

var engine, world;

var dog, dogI, dogHappy;
var foodS, foodStock;
var database;
var fedTime, lastFed;
var foodObj, noMilkImg;
var buttonFeed, buttonAdd;
var food, food2, foodImg;
var button, input, nott, nottImg;

function preload(){
	dogI = loadImage("images/Dog.png");
	dogHappy = loadImage("images/happyDog2.png");
	dogEaten = loadImage("images/happydog.png");

	foodImg = loadImage("images/milk.png");
	noMilkImg = loadImage("images/milk plain.png");

	nottImg = loadImage("images/milk plain.png");
}

function setup() {
	createCanvas(500, 500);
  engine = Engine.create();
  world = engine.world;

	 database = firebase.database();

	dog = createSprite(420,250);
	dog.scale = 0.15;
	dog.addImage(dogI);

	nott = createSprite(170,70, 200, 40);
	nott.addImage(nottImg);

	nameSetup();

	fedtime = database.ref('FeedTime');
	fedtime.on("value",function(data){
		lastFed = data.val();
	})  
}

function draw() {  
	background("red");
	Engine.update(engine);

		fill(255,255,254);
		textSize(15);
		if(lastFed>=12){
			text("last Fed : " + lastFed%12 + "PM",200, 30);
		}else if(lastFed === 0){
			text("Last Fed : 12AM", 200, 30);
		}else{
			text("Last Fed : " + lastFed + "  AM", 200, 30);
		}

	feed = createButton("FEED THE DOG");
	feed.position(730, 66);
	feed.mousePressed(feedDog);

	addFood = createButton("ADD FOOD");
	addFood.position(450, 66);
	addFood.mousePressed(addFoods);

	if(dog.x < 300){
		dog.x = 420;
		dog.y = 250;
		dog.velocityX = 0;
		dog.addImage(dogI);


	for(var j = 40; j <= 320; j = j + 50){
      var food = createSprite(j, 170, 10, 100);
      food.addImage(noMilkImg);
    }

    	for(var j = 40; j <= 320; j = j + 50){
      var food2 = createSprite(j, 300, 10, 100);
      food2.addImage(noMilkImg);
    }
	}
		if(keyCode === 32){
			textSize(30);
			text("DON'T LET IT BE HUNGRY", 50, 250);
	}

  drawSprites();
}

function addFoods(){

	dog.addImage(dogI);

	for(var j = 40; j <= 320; j = j + 50){
      var food = createSprite(j, 170, 10, 50);
      food.addImage(foodImg);
      food.scale = 0.09;
    }

    	for(var j = 40; j <= 320; j = j + 50){
      var food2 = createSprite(j, 300, 10, 50);
      food2.addImage(foodImg);
      food2.scale = 0.09;
    }
}

function feedDog(){
	dog.addImage(dogHappy);
	dog.velocityX = -1;
}

function nameSetup(){
	var input = createInput("NAME THE PET");
	input.position(450, 100);
}

function OverIt(){
	if(keyCode === 32){
	nott.depth > input.depth;
	//nott.depth = nott.depth + 1;
  }
}