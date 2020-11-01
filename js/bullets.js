class Bullets {

    constructor(ctx, playerPosX, playerPosY, playerWidth, playerHeight) {
        this.ctx = ctx;
        this.bulletPos = {
            x: playerPosX + playerWidth,
            y: playerPosY + playerHeight / 3
        }

        this.bulletSize = {
            w: 20,
            h: 20
        }
        this.playerHeight = playerHeight;
        this.bulletImage = new Image();
        this.bulletImage.src = `img/bullet.png`
        this.bulletVelX = 10;

    }

    draw() {

        this.ctx.drawImage(this.bulletImage, this.bulletPos.x, this.bulletPos.y, this.bulletSize.w ,this.bulletSize.h);
        this.move()
    }

    move() {
        this.bulletPos.x += this.bulletVelX;
        }
}


// isCollision() {
//     return this.enemies.some(enem => {
//         return (
//             this.bulletPos.x >= enemiesPos.x
//             // this.player.posY + this.player.height >= obs.posY &&
//             // this.player.posX <= obs.posX + obs.width
//         );
//     });
