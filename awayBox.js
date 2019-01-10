    
var blueGamePiece,  redGamePiece, yellowGamePiece;


 function startGame() {
        //Remodify Game Piece color, size, width, direction and starting point.
        redGamePiece = new component(75, 75, "red", 100, 93);
        yellowGamePiece = new component(75, 75, "yellow", 100, 93);
        blueGamePiece = new component(75, 75, "blue", 100, 93);
        myGameArea.start();

 }


var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function(){
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, 
        document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear: function(){
        this.context.clearRect(0,0, this.canvas.width, 
        this.canvas.height);
    }
}


function component(width, height, color, x, y){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.update = function(){
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);

    }
}



function updateGameArea(){
  myGameArea.clear();
  redGamePiece.x += 3;
  yellowGamePiece.x += 1;
  yellowGamePiece.y += 1;
  blueGamePiece.x += 1;
  blueGamePiece.y -= 1;
  redGamePiece.update();
  yellowGamePiece.update();
  blueGamePiece.update();

}
