class Enemy {
    constructor(ctx, canvasSize, enemiesPosX, enemiesPosY, enemiesWidth, enemiesHeight, speed) {
        this.ctx = ctx

        this.canvasSize = {
            w: canvasSize.w,
            h: canvasSize.h
        }
        this.enemiesPos = {
            x: enemiesPosX,
            y: enemiesPosY
        }
        this.enemiesSize = {
            w: enemiesWidth,
            h: enemiesHeight
        }
        this.speed = speed
        this.enemiesImageInstance = new Image()
        this.enemiesImageInstance.src = `img/zombie-two-frames.png`
        this.enemiesImageInstance.frames = 5;
        this.enemiesImageInstance.framesIndex = 4;
        this.enemiesLife = 100

    }


    draw(framesCounter) {

        this.ctx.drawImage(
            this.enemiesImageInstance,
            this.enemiesImageInstance.framesIndex * Math.floor(this.enemiesImageInstance.width / this.enemiesImageInstance.frames),
            0,
            Math.floor(this.enemiesImageInstance.width / this.enemiesImageInstance.frames),
            this.enemiesImageInstance.height,
            this.enemiesPos.x,
            this.enemiesPos.y,
            this.enemiesSize.w,
            this.enemiesSize.h,
        )
        this.animate(framesCounter),
        this.moveEnemies()
        
    }

        
        animate(framesCounter) {
            if (framesCounter % 30 == 0) {
                this.enemiesImageInstance.framesIndex++;
            }
            if (this.enemiesImageInstance.framesIndex > this.enemiesImageInstance.frames - 1) {
                this.enemiesImageInstance.framesIndex = 0;
            }
        }

    moveEnemies() {
        this.enemiesPos.x -= this.speed
    }
}
