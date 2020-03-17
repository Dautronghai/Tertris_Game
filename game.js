const NUMROWS = 20;
const NUMCOLS = 10;
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
		this.startGame();		
		this.br = new brick(this);
		//this.br.draw();
		this.listenKeyboard();
	}
	createNewBrick(){
		this.br = new brick(this);
	}
	clearScreen(){
		this.context.clearRect(0, 0, 200, 400);
		this.board.backgroundBoard();
		//this.context.fillStyle = "#000000";
		//this.context.fillRect(0, 0, 200, 400);
	}	
	//listen event key press for control
	listenKeyboard(){
		document.addEventListener('keydown',(event)=>{			
			switch(event.key){
				case 'ArrowRight':				
					this.br.moveRight();
				break;
				case 'ArrowLeft':
					this.br.moveLeft();
				break;
				case 'ArrowUp':
					this.br.rotateBrick();
				break;
				case 'ArrowDown':
					this.br.brickDown();
				break;
				}
		
		});
	}
	//startgame
	//brick fall 1 row per secon
	startGame(){
		return setInterval(()=>{			
			this.br.fall();
		},1000);
	}
	draw(){
		//clear before draw object
		this.clearScreen();				
		//draw object
		this.board.draw();		
		this.br.draw();
		
	}
	//create loop for game
	//30% secon draw again
	loop(){
		this.draw();			
		setTimeout(()=>this.loop(),30);
	}
	
}
var g = new game();