class dot{
	constructor(game, row, col, color){
		this.game = game;
		this.color = color;
		this.context = game.context;
		this.size = 20;
		this.row = row;
		this.col = col;
	}
	draw(){		
		let r = this.row * this.size;
		let c = this.col * this.size;
		this.context.strokeStyle = this.color;
		this.context.strokeRect(c + 1, r + 1,this.size-2,this.size -2 );		
		this.context.stroke();
		this.context.fillStyle = this.color;
		this.context.fillRect(c + 4, r + 4, this.size - 8, this.size - 8);
	}
}