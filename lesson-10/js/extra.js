/*jshint esversion: 6 */

class Options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height + 'px';
		this.width = width + 'px';
		this.bg = bg;
		this.fontSize = fontSize + 'px';
		this.textAlign = textAlign;
	}
	//мтоды для объекта
	createDiv() {	
		let div = document.createElement('div');
		document.body.appendChild(div);
		div.innerHTML = "Записываем любой текст";
		div.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign}`;
		return this;

	}

}

const newObj = new Options(101,151,'red',14,'center');
newObj.createDiv();
