let TennisGame3 = function(nameOfPlayer1, nameOfPlayer2) {
    this.scoreOfPlayer1 = 0;
    this.scoreOfPlayer2 = 0;

    this.nameOfPlayer1 = nameOfPlayer1;
    this.nameOfPlayer2 = nameOfPlayer2;
};

TennisGame3.prototype.getScore = function() {
  let score;
  if ((this.scoreOfPlayer1 < 4 && this.scoreOfPlayer2 < 4) && (this.scoreOfPlayer1 + this.scoreOfPlayer2 < 6)) {
      let p = ["Love", "Fifteen", "Thirty", "Forty"];
      score = p[this.scoreOfPlayer1];
      return (this.scoreOfPlayer1 === this.scoreOfPlayer2) ? score + "-All" : score + "-" + p[this.scoreOfPlayer2];
  } else {
      if (this.scoreOfPlayer1 === this.scoreOfPlayer2)
          return "Deuce";
      score = this.scoreOfPlayer1 > this.scoreOfPlayer2 ? this.nameOfPlayer1 : this.nameOfPlayer2;
      return ((this.scoreOfPlayer1 - this.scoreOfPlayer2) * (this.scoreOfPlayer1 - this.scoreOfPlayer2) === 1)
      ? "Advantage " + score : "Win for " + score;
  }
};

TennisGame3.prototype.wonPoint = function(playerName) {
    if (playerName === "player1") {
      this.scoreOfPlayer1 += 1;
    }
    else {
      this.scoreOfPlayer2 += 1;
    }
};

if (typeof window === "undefined") {
    module.exports = TennisGame3;
}