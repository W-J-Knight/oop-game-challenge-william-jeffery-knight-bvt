let Player = function (name) {
  this.name = name;
  this.lvl = 1;
  this.points = 0;
};

Player.prototype.gainXP = function (num){
    this.points += num
}


let player1 = new Player("Bob");
let player2 = new Player("Alice");

player1.gainXP(5)
player2.gainXP(15)

console.log(player1);
console.log(player2);
// console.log(Player.gainXP)
