let sprites = []
let circle
let square
let rectangle
let Rcircle
let Ysquare
let Brectangle
let order = ["Blue Circle","Yellow Rectangle","Red Square","Red Circle","Blue Rectangle","Yellow Square"]
let numorder = 0;
let score = 0;
let clickedShape  = false
let start = true
let s = 'The quick brown fox jumped over the lazy'
function setup() {
  createCanvas(400, 400);
  button = createButton('Start');
  button.position(19, 19);
  
    circle = new Circle("blue")
    sprites.push(circle)
    Rcircle = new Circle("red")
    sprites.push(Rcircle)
    square = new Square("red")
    sprites.push(square)
    Ysquare = new Square("yellow")
    sprites.push(Ysquare)
    rectangle = new Rectangle("yellow")
    sprites.push(rectangle)
    Brectangle = new Rectangle("Blue")
    sprites.push(Brectangle)
   
  rectMode(CENTER)
}

function draw() {
    background(220);
  
  sprites.filter(sprite => sprite.active).forEach(sprite => {
    sprite.update()
    sprite.draw()
  })
  fill(0)
  textSize(20)
  text(order[numorder], 200,20)
  fill(0)
  textSize(20)
  text(score, 20,20)
  
}
function mouseClicked() {
  //if(!start){
      
  if ( dist(rectangle.x, rectangle.y, mouseX, mouseY) <= rectangle.width/2 ){
    clickedShape = true;
    if(rectangle.width == 100 ){
          rectangle.width -= 10
          rectangle.height -= 10
       }
    else{
          rectangle.width += 10
          rectangle.height += 10
       }
    if(numorder == 1){
       numorder += 1
      score += 1
      circle.SPEED += 0.2
      rectangle.SPEED += 0.2
      square.SPEED += 0.2
      Rcircle.SPEED += 0.2
      Brectangle.SPEED += 0.2
      Ysquare.SPEED += 0.2
       }
    else {
      score -= 1
    }
    console.log("click")
    
  }
if ( dist(Brectangle.x, Brectangle.y, mouseX, mouseY) <= Brectangle.width/2 ) {
    clickedShape = true;
    if(Brectangle.width == 100 ){
         Brectangle.width -= 10
          Brectangle.height -= 10
       }
    else{
          Brectangle.width += 10
          Brectangle.height += 10
       }
    if(numorder == 4){
       numorder += 1
      score += 1
     circle.SPEED += 0.2
      rectangle.SPEED += 0.2
      square.SPEED += 0.2
      Rcircle.SPEED += 0.2
      Brectangle.SPEED += 0.2
      Ysquare.SPEED += 0.2
      
       }
    else {
      score -= 1
    }
    console.log("click")
    
  }
 
  
  if ( dist(circle.x, circle.y, mouseX, mouseY) <= circle.width/2 ) {
    clickedShape = true;
    if(circle.width == 80 ){
          circle.width -= 10
          circle.height -= 10
       }
    else{
          circle.width += 10
          circle.height += 10
       }
    if(numorder == 0){
       numorder += 1
      score += 1
      circle.SPEED += 0.2
      rectangle.SPEED += 0.2
      square.SPEED += 0.2
      Rcircle.SPEED += 0.2
      Brectangle.SPEED += 0.2
      Ysquare.SPEED += 0.2
       }
    else {
      score -= 1
    }
    console.log("click")
    
  }
  if ( dist(Rcircle.x, Rcircle.y, mouseX, mouseY) <= Rcircle.width/2 ) {
    clickedShape = true;
    if(Rcircle.width == 80 ){
          Rcircle.width -= 10
          Rcircle.height -= 10
       }
    else{
          Rcircle.width += 10
          Rcircle.height += 10
       }
    if(numorder == 3){
       numorder += 1
      score += 1
      circle.SPEED += 0.2
      rectangle.SPEED += 0.2
      square.SPEED += 0.2
      Rcircle.SPEED += 0.2
      Brectangle.SPEED += 0.2
      Ysquare.SPEED += 0.2
       }
    else {
      score -= 1
    }
    console.log("click")
    
  }
  
  if ( dist(square.x, square.y, mouseX, mouseY) <= square.width/2 ) {
    clickedShape = true;
    if(square.width == 80 ){
          square.width -= 10
          square.height -= 10
       }
    else{
          square.width += 10
         square.height += 10
       }
    if(numorder == 2){
       numorder = 0
      score += 1
      circle.SPEED += 0.05
      rectangle.SPEED += 0.05
      square.SPEED += 0.05
      Rcircle.SPEED += 0.05
      Brectangle.SPEED += 0.05
      Ysquare.SPEED += 0.05
       }
    else {
      score -= 1
    }
    console.log("click")
    
  }
  if ( dist(Ysquare.x, Ysquare.y, mouseX, mouseY) <= Ysquare.width/2 ) {
    clickedShape = true;
    if(Ysquare.width == 80 ){
          Ysquare.width -= 10
          Ysquare.height -= 10
       }
    else{
          Ysquare.width += 10
         Ysquare.height += 10
       }
    if(numorder == 5){
       numorder = 0
      score += 1
      circle.SPEED += 0.05
      rectangle.SPEED += 0.05
      square.SPEED += 0.05
      Rcircle.SPEED += 0.05
      Brectangle.SPEED += 0.05
      Ysquare.SPEED += 0.05
       }
    else {
      score -= 1
    }
    console.log("click")
    
  }
  if(!clickedShape){
     score -= 1
  }
  else {
    clickedShape = false
  }
 
 // }
  //else{
   // start = true
 // }
}
