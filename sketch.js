var dog,Happydog,database,foodS,foodStock
function preload()
{
	dog = loadImage("images/dogImg.png");
  Happydog = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();

  Dog = createSprite(250,250,30,30)
  Dog.addImage(dog);
  Dog.scale = 0.2
  
 foodStock=database.ref('Food');
 foodStock.on("value",readStock);
  textSize(20);
}


function draw() {  
  background(46,139,87);

  

  if(keyWentDown(UP_ARROW))
  {
    writeStock(foodS);
    Dog.addImage(Happydog)
  }

  drawSprites();
  fill(255,255,254);
  stroke("black");
  text("FoodStock:"+ foodS,150,150);
  textSize(20);

  text("Note: Press UP_ARROW Key To Feed Drago Milk!",30,30);
 
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref('/').update({
    Food:x
  })
}