let Player = function (name) {
  this.name = name;
  this.lvl = 1;
  this.points = 0;
};

Player.prototype.gainXP = function (num) {
  this.points += num;

  if (this.points >= 10) {
    this.lvl++;
    this.points = this.points - 10;
  }
};

Player.prototype.describe = function (){
    console.log(`${this.name} is at level ${this.lvl} has ${this.points} points in this level. To hit next level ${this.name} needs ${10 - this.points} more points.`)
}

let player1 = new Player("Bob");
let player2 = new Player("Alice");

player1.gainXP(5);
player2.gainXP(15);
player1.gainXP(5);
player2.gainXP(5);
player1.gainXP(5);
player2.gainXP(15);
player1.gainXP(5);
player2.gainXP(15);
player1.gainXP(1)
console.log(player1);
console.log(player2);
player1.describe()
// console.log(Player.gainXP)
