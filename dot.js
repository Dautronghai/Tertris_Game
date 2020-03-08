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
	//==============================
	//start handling dot move right
	//if dot move to border right
	hitRight(){		
		//return true is hit right border
		return this.col == NUMCOLS - 1;			
	}
	//check the dot can move right
	checkMoveRight(){		
		if(this.hitRight() || this.game.board.isEmptyCell(this.row,this.col + 1)){
			return false;
		}
		return true;
	}
	//update position colum when dot move to right
	moveRight(){		
		if(this.checkMoveRight()){
			this.col++;
		}
	}
	//END handling move right=========================
	
	//START handling move left==============
	//if dot move to border left
	hitLeft(){
		return this.col == 0;
	}
	checkMoveLeft(){
		if(this.hitLeft() || this.game.board.isEmptyCell(this.row,this.col - 1)){
			return false;
		}
		return true;
	}
	//update position colum dot move to left
	moveLeft(){		
		if(this.checkMoveLeft()){
			this.col--;
		}
	}
	//==========END handling move left===========
	
	//===========START handling fall================
	//if dot move to bottom border
	hitBottom(){
		return this.row == NUMROWS - 1;
	}
	checkMoveDown(){
		if(this.hitBottom() || this.game.board.isEmptyCell(this.row + 1, this.col)){
			return false;
		}
		return true;
	}
	//update positon colum dot when move up
	fall(){	
		if(this.checkMoveDown()){
			this.row++;
		}
	}
	//==============END handling move down
}