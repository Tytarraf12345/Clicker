class Circle extends Sprite {
   constructor(Color) {
    super(random(50,width - 50) , random(50, height -50) , Color)
     this.SPEED = 2
    this.vx = -this.SPEED
     this.vy = -this.SPEED
  }
  update() {
    if (this.x <= this.width/2 || this.x >= 400- this.height/2) {
        this.vx = -this.vx
    }
    if (this.y <= this.width/2 || this.y >= 400-this.height/2) {
        this.vy = -this.vy
    }
    this.x += this.vx * this.SPEED
    this.y += this.vy * this.SPEED
  }
  stop() {
    this.vx = 0
    this.vy = 0
  }
}