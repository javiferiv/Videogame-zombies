class Player {
    constructor(ctx, canvasSize, playerWidth, playerHeigth, playerImage, keys) {
        this.ctx = ctx

        this.canvasSize = {
            w: canvasSize.w,
            h: canvasSize.h
        }
        this.playerPos = {
            x: this.canvasSize.w - 1400,
            y: this.canvasSize.h - 150,
        }


        this.playerSize = {
            w: playerWidth,
            h: playerHeigth
        }
        this.imageName = playerImage

        this.playerInstance = undefined
        this.init()
        // this.draw()
        this.keys = keys
        this.bullets = [];
        this.weapon=10
        this.setEventListeners()

    }



    init() {
        this.playerInstance = new Image()
        this.playerInstance.src = `${this.imageName}`
    }

    draw() {
        this.ctx.drawImage(this.playerInstance, this.playerPos.x, this.playerPos.y, this.playerSize.w, this.playerSize.h)
        this.bullets.forEach(bullet => bullet.draw())
        //this.clearBullets()

    }


    setEventListeners() {

        document.addEventListener("keydown", e => {
            switch (e.keyCode) {
                case this.keys.top:
                    this.walkUp()
                    break;
                case this.keys.bottom:
                    this.walkDown()
                    break;
                case this.keys.space:
                    if (this.weapon > 0) {
                        this.shoot();
                        this.weapon--
                    }
                    break;
            }
        });
    }


    walkUp() {
        if (this.playerPos.y > this.canvasSize.h - 520) {
            this.playerPos.y -= 120
            //this.velY -= 8;
        }
    }

    walkDown() {
        if (this.playerPos.y < this.canvasSize.h - 150) {
            this.playerPos.y += 120
            //this.velY += 8;
        }
    }


    shoot() {

        this.bullets.push(new Bullets(this.ctx, this.playerPos.x, this.playerPos.y, 100, 100))
    }

    clearBullets() {
        this.bullets = this.bullets.filter(bull => bull.posX <= this.gameWidth);
    }


} 