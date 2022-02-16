function preload(){
  oneImg = loadImage("one.png")
  twoImg = loadImage("two.png")
  threeImg = loadImage("three.png")
  fourImg = loadImage("four.png")
  fiveImg = loadImage("five.png")
  sixImg = loadImage("six.png")
  sevenImg = loadImage("seven.png")
  eightImg = loadImage("eight.png")
  nineImg = loadImage("nine.png")
  zeroImg = loadImage("zero.png")
  addImg = loadImage("addition.png")
  subImg = loadImage("subtraction.png")
  mulImg = loadImage("multiplication.png")
  divImg = loadImage("division.png")
  equalsImg = loadImage("equals.png")
}

function setup() {
  createCanvas(800,600);
  one = createSprite(100, 100, 50, 50);
  one.addImage(oneImg)
  one.scale = 0.03
  two = createSprite(200, 100, 50, 50);
  two.addImage(twoImg)
  two.scale = 0.1
  three = createSprite(300, 100, 50, 50);
  three.addImage(threeImg)
  three.scale = 0.1
  four = createSprite(400, 100, 50, 50);
  four.addImage(fourImg)
  four.scale = 0.22
  five = createSprite(100, 200, 50, 50);
  five.addImage(fiveImg)
  five.scale = 0.1
  six = createSprite(200, 200, 50, 50);
  six.addImage(sixImg)
  six.scale = 0.26
  seven = createSprite(300, 200, 50, 50);
  seven.addImage(sevenImg)
  seven.scale = 0.26
  eight = createSprite(400, 200, 50, 50);
  eight.addImage(eightImg)
  eight.scale = 0.26
  nine = createSprite(200, 300, 50, 50);
  nine.addImage(nineImg)
  nine.scale = 0.26
  zero = createSprite(300, 300, 50, 50);
  zero.addImage(zeroImg)
  zero.scale = 0.26
  add = createSprite(100, 300, 50, 50);
  add.addImage(addImg)
  add.scale = 0.22
  sub = createSprite(410, 300, 50, 50);
  sub.addImage(subImg)
  sub.scale = 0.17
  mul = createSprite(130, 400, 50, 50);
  mul.addImage(mulImg)
  mul.scale = 0.2
  div = createSprite(250, 400, 50, 50);
  div.addImage(divImg)
  div.scale = 0.15
  equals = createSprite(370, 400, 50, 50);
  equals.addImage(equalsImg)
  equals.scale = 0.13
}

function draw() {
  background(0);  
  drawSprites();
}