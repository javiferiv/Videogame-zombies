class Background {


    constructor(ctx, w, h, imgSource) {
        this.ctx = ctx;
        this.width = w;
        this.height = h;

        this.image = new Image();
        this.image.src = imgSource;

        this.posX = 0;
        this.posY = 0;

        this.velX = 1;
    }

    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);


    }



    // constructor(ctx, canvasSize, imgSource) {
    //     this.ctx = ctx;

    //     this.canvasSize = {
    //         w: canvasSize.w,
    //         h: canvasSize.h
    //     }

    //     this.backgroundImage = new Image();
    //     this.backgroundImage.src = imgSource;


    //     this.backgroundPosX = 0;
    //     this.backgroundPosY = 0;

    // }

    // draw() {
    //     this.ctx.drawImage(this.backgroundImage, this.backgroundPosX, this.backgroundPosY, this.canvasSize.w, this.canvasSize.h);
    // }

}