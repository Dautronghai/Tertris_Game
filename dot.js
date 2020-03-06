class dot{
	constructor(game, row,col){
		this.game = game;
		this.context = game.context;
		this.size = 20;
		this.row = row;
		this.col = col;
	}
	draw(){
		this.context.fillStyle = "#ffffff";
		let r = this.row * this.size;
		let c = this.col * this.size;
		this.context.fillRect(c + 1, r + 1, this.size - 1, this.size - 1 );
	}
}