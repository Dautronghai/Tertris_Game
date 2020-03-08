const _ = null;
const x = "x";
class board{
	constructor(game){
		this.game = game;
		this.data = [			
			[_,_,_,_,_,_,_,_,_,_],
			[_,_,_,_,_,_,_,_,_,_],
			[_,_,_,_,_,_,_,_,_,_],
			[_,_,_,_,_,_,_,_,_,_],
			[_,_,_,_,_,_,_,_,_,_],
			[_,_,_,_,_,_,_,_,_,_],
			[_,_,_,_,_,_,_,_,_,_],
			[_,_,_,_,_,_,_,_,_,_],
			[_,_,_,_,_,_,_,_,_,_],
			[_,_,_,_,_,_,_,_,_,_],
			[_,_,_,_,_,_,_,_,_,_],
			[_,_,_,_,_,_,_,_,_,_],
			[_,_,_,_,_,_,_,_,_,_],
			[_,_,_,_,_,_,_,_,_,_],
			[_,_,_,_,_,_,_,_,_,_],
			[_,_,_,_,_,_,_,_,_,_],
			[_,_,_,_,_,_,_,_,_,_],
			[_,_,_,_,_,_,_,_,_,_],
			[_,_,_,_,_,_,_,_,_,_],
			[_,_,_,_,_,_,_,_,_,_]
		];
	}
	backgroundBoard(){		
		this.d = null;
		for(let r = 0; r < 20; r++){
			for(let c = 0; c < 10; c++){
				this.d = new dot(this.game,r,c,"#edeff0");
				this.d.draw();
			}
		}	
	}
	createDots(){
		this.dots = [];
		for(let r = 0; r < 20; r++){
			for(let c = 0; c < 10; c++){
				if(this.data[r][c] == x){
					let d = new dot(this.game,r,c,"#000000");
					this.dots.push(d);
				}
			}
		}	
	}
	draw(){
		this.createDots();
		this.dots.forEach((dot)=>dot.draw());
	}
}