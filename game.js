class game{
	constructor(){
		this.canvas = null;
		this.context = null;
		this.init();		
		this.loop();
	}
	init(){
	// create canvas to draw game.
		this.canvas = document.createElement('canvas');
		this.context = this.canvas.getContext('2d');
		this.canvas.width  = 200;
		this.canvas.height = 400;
		// append canvas to page
		document.body.appendChild(this.canvas);
		this.board = new board(this);
		this.d = new dot(this,0,0,"000000");
		this.startGame();
	}
	clearScreen(){
		this.board.backgroundBoard();
		//this.context.fillStyle = "#000000";
		//this.context.fillRect(0, 0, 200, 400);
	}	
	//startgame
	//brick fall 1 row per secon
	startGame(){
		return setInterval(()=>{
		},1000);
	}
	draw(){
		//clear before draw object
		this.clearScreen();		
		//draw object
		this.board.draw();
		this.d.draw();
		
	}
	//create loop for game
	//30% secon draw again
	loop(){
		this.draw();				
		setTimeout(()=>this.loop(),30);
	}
	
}
var g = new game();