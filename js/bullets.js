class Bullets {

    constructor(ctx, playerPosX, playerPosY, playerWidth, playerHeight) {
        this.ctx = ctx;
        this.posX = playerPosX + playerWidth;
        this.posY = playerPosY + playerHeight / 3;


        this.playerHeight = playerHeight;
        this.bulletImage = new Image();
        this.bulletImage.src = `img/bullet.png`
        this.velX = 10;
        this.velY = 1;
        this.bulletSize = {
            w: 20,
            h: 20
        }

    }

    draw() {

        this.ctx.drawImage(this.bulletImage, this.posX, this.posY, this.bulletSize.w ,this.bulletSize.h);
        this.move()
    }

    move() {
        this.posX += this.velX;
        if (this.posY >= this.playerPosY + this.playerHeight) {
            this.velY *= -1;
        }
    }


}