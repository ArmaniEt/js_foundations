const duck = {
	name: 'Donald',
	color: 'white',
	old: 1,
	toStr() {
		return `${this.name}, ${this.color}, ${this.old} year`;
	},
	say() {
		return 'quack-quack';
	} 
}


const donaldDuck = Object.create(duck);
console.log(donaldDuck.toStr());
console.log(donaldDuck.say());