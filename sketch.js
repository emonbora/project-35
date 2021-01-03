//Create variables here
var dog,happyDog,database,foodStock,foodS




function preload()
{
  //load images here
  dogImg = loadImage("Images/dogImg.png")
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();

  dog=createSprite(250,300,150,150);
  foodStock=database.ref('food');
  foodStock.on("value",readStock)
}


function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg)
    dog.scale = 0.1
  }
  drawSprites();
  //add styles here
  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foodS,170,200);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);

}
function  readStock(data){
  foodS = data.val()
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref('/').update({
    food:x
  })
}


