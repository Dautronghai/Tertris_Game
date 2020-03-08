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
		this.context.strokeRect(c + 2, r + 2,this.size - 3,this.size - 3);		
		this.context.stroke();
		this.context.fillStyle = this.color;
		this.context.fillRect(c + 4, r + 4, this.size - 7, this.size - 7);
	}
	//if dot move to border right
	hitRight(){
		let hit_right = false;
		if(this.col == NUMCOLS - 1){
			hit_right = true;
		}
		return hit_right;
	}
	//update position colum when dot move to right
	moveRight(){	
		if(!this.hitRight()){
			this.col++;
		}
	}
	//if dot move to border left
	hitLeft(){
		let hit_left = false;
		if(this.col == 0){
			hit_left = true;
		}
		return hit_left;
	}
	//update position colum dot move to left
	moveLeft(){	
		if(!this.hitLeft()){
			this.col--;
		}
	}
	//if dot move to bottom border
	hitBottom(){
		let hit_bottom = false;
		if(this.row == NUMROWS - 1){
			hit_bottom = true;
		}
		return hit_bottom;
	}
	//update positon colum dot when move up
	fall(){	
		if(!this.hitBottom()){
			this.row++;
		}
		
	}
}