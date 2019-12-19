class Sprite {
  constructor(x, y, c) {
    this.x = x
    this.y = y
    this.vx = 0;
    this.vy = 0;
    this.width = 60
    this.height = 60
    this.color = c
    this.SPEED = 0.1
    this.active = true
  }
  draw() {
    fill(this.color)
    ellipse(this.x, this.y, this.width, this.height)
  }
  die() {
    this.active = false
  }
  move(dx, dy) {
    this.vx = dx * this.SPEED
    this.vy = dy * this.SPEED
  }
  
  stop() {
    this.vx = 0
    this.vy = 0
  }
}