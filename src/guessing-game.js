class GuessingGame {
    constructor() {
    	this._numbersList = [];
    	this._middle = 0;
    	this._min = 0;
    	this._max = 0;
    }

    setRange(min, max) {
    	this._min = min;
    	this._max = max;
    	for(var i = this._min; i < this._max; i++){
    		this._numbersList.push(i);
    	}
    }

    guess() {
    	this._middle = Math.round((this._max + this._min) / 2);
    	return this._numbersList[this._middle];
    }

    lower() {
    	this._max = this._middle;
    }

    greater() {
    	this._min = this._middle;
    }
}

module.exports = GuessingGame;
