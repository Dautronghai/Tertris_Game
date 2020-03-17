class brick{
	constructor(game){
		this.game = game;
		this.row = 0;
		this.col = 0;
		this.data = [];// create contruct of brick witd sharp: I, L, Z , T, ....
		this.dots = [];// create dot from struct select in data		
		this.createData();		
		this.createBrick();
	}
	createBrick(){
		this.createDots();
		this.draw();
	}
	//create dot from data and push to dots array
	createDots(){
		this.dots = [];
		for(let r = 0; r < this.data.length; r++){
			for(let c = 0; c < this.data[0].length;c++){
				if(this.data[r][c] == x){
					let d = new dot(this.game,this.row + r,this.col + c,"#000000");
					this.dots.push(d);
				}
			}
		}
	}
	//select struct dot and push to data
	createData(){
		let baseData = [
			[
				[x,x,x,x]
			],
			[
				[x,x],
				[x,x]				
			],
			[
				[x,x,_],
				[_,x,x]
			],
			[
				[_,x,x],
				[x,x,_]
			],
			[
				[x,_],
				[x,_],
				[x,x]
			],
			[
				[_,x],
				[_,x],
				[x,x]
			],
			[	
				[x,x,x],
				[_,x,_]
			]
		
		];
		let index_select = Math.floor(Math.random()*8);
		this.data = baseData[index_select];
	}
	//======START handling Rotate ===========
	rotateBrick(){
		let result = [];
		for(let c = 0; c < this.data[0].length; c++){
			let newrow = [];
			for(let r = this.data.length - 1;r >= 0; r--){
				newrow.push(this.data[r][c]);
			}
			result.push(newrow);
		}
		let old_Col = this.col;
		if(this.col + result[0].length > NUMCOLS){
			this.col = NUMCOLS - result[0].length;
		}
		let canRotate = true;
		if((this.row + result.length) < (NUMROWS - 1 )){
			for(let r = 0; r < result.length; r++){
				for(let c = 0; c < result[0].length; c++){			
					if((result[r][c] == x) && (this.game.board.data[r + this.row][c + this.col] == x)){			
						canRotate = false;
						break;
				}
				}
			}
		}else {
			canRotate = false;
		}
		if(canRotate){
			this.data = result			
		}else {
			this.col = old_Col;
		}
		this.createBrick();
				
	}
	//THE END ===============
	//========START handling move right ============
	canMoveRight(){
		let canRight = true;
		this.dots.forEach((dot)=>{			
			if(!dot.checkMoveRight()){						
				canRight = false;				
			}		
		});
		return canRight;
	}
	moveRight(){
		if(this.canMoveRight()){
			this.col++;
			this.createBrick();
		}
	}
	//=======THE END ============
	//========START handling move left ============
	canMoveLeft(){
		let canleft = true;
		this.dots.forEach((dot)=>{			
			if(!dot.checkMoveLeft()){						
				canleft = false;				
			}		
		});
		return canleft;
	}
	moveLeft(){
		if(this.canMoveLeft()){
			this.col--;
			this.createBrick();
		}
	}
	//============Start handlling brick fall =================
	//check brick can fall
	canFall(){		
		let canfall = true;
		this.dots.forEach((dot)=>{			
			if(!dot.checkMoveDown()){						
				canfall = false;				
			}		
		});		
		return canfall;
	}
	//update row of brick when brick fall on board
	fall(){
		//console.log(this.canFall());
		if(this.canFall()){
			this.row++;
			this.createBrick();
		}else{
			this.appendtoBoard();
			this.game.createNewBrick();
		}
	}
	brickDown(){
		while(this.canFall()){
			this.fall();
		}
	}
	appendtoBoard(){
		this.dots.forEach((dot)=>{
			this.game.board.data[dot.row][dot.col] = x;
		});
	}
	//=============THE END =======================
	//draw each dot of brick, with brick select in data
	draw(){
		this.dots.forEach((dot)=>{
			dot.draw();
		});
	}
}