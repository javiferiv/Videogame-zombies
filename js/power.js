class Power {

    constructor(ctx, powerPosX, powerPosY, powerWidth, powerHeight, canvasSize, powerGravity, powerVelX, powerVelY) {
        this.ctx = ctx
        this.powerPos = {
            x: powerPosX,
            y: powerPosY
        }
        this.powerSize = {
            w: powerWidth,
            h: powerHeight
        }
        this.canvasSize = {
            w: canvasSize.w,
            h: canvasSize.h
        }
        this.powerVel = {
            x: powerVelX,
            y: powerVelY
        }
        this.powerGravity = powerGravity
        this.powerImageName = 'bullet.png'

        this.powerImageInstance = undefined

        this.init()
    }

    init() {
        this.powerImageInstance = new Image()
        this.powerImageInstance.src = `img/${this.powerImageName}`
    }

    draw() {
        this.move()
        this.ctx.drawImage(this.powerImageInstance, this.powerPos.x, this.powerPos.y, this.powerSize.w, this.powerSize.h)
    }

    move() {

        if (this.powerPos.y >= this.canvasSize.h -100- this.powerSize.h) {
            this.powerVel.y *= -1
        }

        if (this.powerPos.x >= this.canvasSize.w - this.powerSize.w) {
            this.powerVel.x *= -1
        }

        this.powerPos.x += this.powerVel.x

        this.powerVel.y += this.powerGravity
        this.powerPos.y += this.powerVel.y
    }
}