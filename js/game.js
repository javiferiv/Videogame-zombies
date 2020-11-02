const Game = {

    name: 'Plants vs Zombies',
    description: 'killing Zombies',
    version: '1.0.0',
    license: undefined,
    author: 'Javier Fernández, Marisa Vitale',
    canvasTag: undefined,
    ctx: undefined,
    canvasSize: {
        w: undefined,
        h: undefined
    },
    FPS: 60,
    framesCounter: 0,
    background: undefined,
    player: undefined,
    bullet: undefined,
    enemies: [],
    powers: [],
    keys: {
        space: 32,
        top: 38,
        bottom: 40,
    },

    init() {
        this.canvasTag = document.getElementById("canvas");
        this.ctx = this.canvasTag.getContext("2d");
        this.setDimensions();
        this.start();
    },

    setDimensions() {
        this.canvasSize.w = window.innerWidth - 200
        this.canvasSize.h = window.innerHeight - 150
        this.canvasTag.setAttribute('width', this.canvasSize.w)
        this.canvasTag.setAttribute('height', this.canvasSize.h)
    },



    start() {

        this.reset()

        this.interval = setInterval(() => {

            this.clearScreen()
            this.drawAll()
            this.generateNewPower()
            this.generateEnemies()
            this.clearPower()
            console.log(this.powers)
            this.framesCounter > 5000 ? this.framesCounter = 0 : this.framesCounter++
            this.isCollisionPower() ? this.player.weapon += 10 : null
            // this.killerEnemies() ? alert("disparo") : null 


            // this.isCollisionEnemies() ? this.gameOver() : null 

        }, 1000 / this.FPS)
        
    },


    reset() {
        this.background = new Background(this.ctx, this.canvasSize.w, this.canvasSize.h, "img/background-large.jpg");
        this.player = new Player(this.ctx, this.canvasSize, 100, 100, 'img/player-one.png', this.keys);
        this.enemies = [];
    },

    // generateEnemies() {
    //     if ((this.framesCounter % this.FPS === 0) && (Math.random() * 100 < 0)) {
    //         const enemy1 = new Enemy(this.ctx, this.canvasSize, this.canvasSize.w, this.canvasSize.h - 630, 100, 160, 1)
    //         const enemy2 = new Enemy(this.ctx, this.canvasSize, this.canvasSize.w, this.canvasSize.h - 510, 100, 160, 1)
    //         const enemy3 = new Enemy(this.ctx, this.canvasSize, this.canvasSize.w, this.canvasSize.h - 390, 100, 160, 1)
    //         const enemy4 = new Enemy(this.ctx, this.canvasSize, this.canvasSize.w, this.canvasSize.h - 270, 100, 160, 1)
    //         const enemy5 = new Enemy(this.ctx, this.canvasSize, this.canvasSize.w, this.canvasSize.h - 100, 100, 160, 1)
    //         this.enemies.push(enemy1, enemy2, enemy3, enemy4, enemy5)
    //         // this.enemies[Math.floor(Math.random() * this.enemies.length)]
    //     }
    // },

    generateNewPower() {
        if ((this.framesCounter % this.FPS === 0) && (Math.random() * 100 < 10)) {
            this.powers.push(new Power(this.ctx, this.canvasSize.w - 50, (Math.random() * this.canvasSize.h), 50, 50, this.canvasSize, .1, 2, 3));
            console.log(this.powers)

        }
    },

    clearAll() {
        if ((this.framesCounter % this.FPS === 0) && (Math.random() * 100 < 30)) { this.powers = this.powers.filter(elm => elm.powerPos.x > 0) }
    },


    // generateRandom() {
    //     if ((this.framesCounter % this.FPS === 0) && (Math.random() * 100 < 30)) {
    //         this.enemies[Math.floor(Math.random() * this.enemies.length)]
    //     }
    // },


    // function selectRandom(this.enemies) {
    // return this.enemies[Math.floor(Math.random() * this.enemies.length)]
    // },

    generateEnemies() {

        if ((this.framesCounter % this.FPS === 0) && (Math.random() * 100 < 20)) {
            this.enemies.push(new Enemy(this.ctx, this.canvasSize, this.canvasSize.w, (Math.random() * (this.canvasSize.h - 200)), 100, 160, 1));
        }
        // else if ((this.framesCounter % 1000 === 0) && (Math.random() * 100 < 80)) {
        //     this.enemies.push(new Enemy(this.ctx, this.canvasSize, this.canvasSize.w, (Math.random() * (this.canvasSize.h - 200)), 100, 160, 4));
        // }
    }, 


    clearPower() {
                    
            this.powers.forEach(
                elm => {
                    if (elm.powerPos.x < 0) {
                        this.powers.pop(elm)
                    }
                })
    
    },


    drawAll() {
        this.background.draw()
        this.player.draw()
        this.enemies.forEach(elm => elm.draw(this.framesCounter))
        this.powers.forEach(elm => elm.draw())


    },

    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);
    }, 



    isCollisionPower() {
        return this.powers.some(pow => {
            return (
                this.player.playerPos.x < pow.powerPos.x + pow.powerSize.w &&
                this.player.playerPos.x + this.player.playerSize.w > pow.powerPos.x &&
                this.player.playerPos.y < pow.powerPos.y + pow.powerSize.h &&
                this.player.playerSize.h + this.player.playerPos.y > pow.powerPos.y
                );
        });
    },



    isCollisionEnemies() {
        return this.enemies.some(elm => {
            return (
                this.player.playerPos.x + this.player.playerSize.w >= elm.enemiesPos.x

            );
        });
    }, 
    
    // killerEnemies() {
    //     return this.enemies.some(enem => {
    //         return (
    //             this.bullet.bulletPos.x + this.bullet.bulletSize.w >= enem.enemiesPos.x &&
    //             this.bullet.bulletPos.y + this.bullet.bulletSize.h >= enem.enemiesPos.y &&
    //             this.bullet.bulletPos.x <= enem.enemiesPos.x + enem.enemiesSize.w
    //             );
    //         });
    // },
    

    
    // isKillEnemies() {
    //     return this.enemies.some(bul => {
    //         return (
    //             this.enemies.enemiesPos.x < bul.bulletPos.x + bul.bulletSize.w &&
    //             this.enemies.enemiesPos.x + this.enemies.enemiesSize.w > bul.bulletPos.x &&
    //             this.enemies.enemiesPos.y < bul.bulletPos.y + bul.bulletSize.h &&
    //             this.enemies.enemiesSize.h + this.enemies.enemiesPos.y > bul.bulletPos.y
    //         );
    //     });
    // },


    //     isKillEnemies() {
    //     return this.bullet.some(enem => {
    //         return (
    //             this.bullet.bulletPos.x < enem.enemiesPos.x + enem.enemiesSize.w &&
    //             this.bullet.bulletPos.x + this.bullet.bulletSize.w > enem.enemiesPos.x &&
    //             this.bullet.bulletPos.y < enem.enemiesPos.y + enem.enemiesSize.h &&
    //             this.bullet.bulletSize.h + this.bullet.bulletSize.y > enem.enemiesPos.y
    //         );
    //     });
    // },
        
        gameOver() {
        clearInterval(this.interval);
    }


}






















    // isCollision() {
    //     return this.enemies.some(enem => {
    //         return (
    //             this.bullet.posX + this.bulletSize.w >= this.enemiesPos.x &&
    //             this.bullet.posY + this.bulletSize.h >= this.enemiesPos.y &&
    //             this.bullet.posX <= this.enemiesPos.x + this.enemiesSize.w
    //         );
        // this.enemies.enemiesLife -= 20
    //     });

    // },


    // generateObstacles() {
    //     if (this.framesCounter % 90 === 0) {
    //         this.obstacles.push(new Obstacle(this.ctx, this.width, this.player.posY0, this.player.height));
    //     }
    // },

    // clearObstacles() {
    //     this.obstacles = this.obstacles.filter(obs => obs.posX >= 0)
    // },


