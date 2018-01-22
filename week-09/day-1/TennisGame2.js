
var TennisGame2 = function(player1Name, player2Name) {
  this.scoreOfPlayer1 = 0;
  this.scoreOfPlayer2 = 0;

  this.P1res = "";
  this.P2res = "";

  this.player1Name = player1Name;
  this.player2Name = player2Name;
};

TennisGame2.prototype.getScore = function() {
  var score = "";

  if (this.scoreOfPlayer1 === this.scoreOfPlayer2 && this.scoreOfPlayer1 < 3) {
      if (this.scoreOfPlayer1 === 0)
          score = "Love";
      if (this.scoreOfPlayer1 === 1)
          score = "Fifteen";
      if (this.scoreOfPlayer1 === 2)
          score = "Thirty";
      score += "-All";
  }
  if (this.scoreOfPlayer1 === this.scoreOfPlayer2 && this.scoreOfPlayer1 > 2)
      score = "Deuce";

  if (this.scoreOfPlayer1 > 0 && this.scoreOfPlayer2 === 0) {
      if (this.scoreOfPlayer1 === 1)
          this.P1res = "Fifteen";
      if (this.scoreOfPlayer1 === 2)
          this.P1res = "Thirty";
      if (this.scoreOfPlayer1 === 3)
          this.P1res = "Forty";

      this.P2res = "Love";
      score = this.P1res + "-" + this.P2res;
  }
  if (this.scoreOfPlayer2 > 0 && this.scoreOfPlayer1 === 0) {
      if (this.scoreOfPlayer2 === 1)
          this.P2res = "Fifteen";
      if (this.scoreOfPlayer2 === 2)
          this.P2res = "Thirty";
      if (this.scoreOfPlayer2 === 3)
          this.P2res = "Forty";

      this.P1res = "Love";
      score = this.P1res + "-" + this.P2res;
  }

  if (this.scoreOfPlayer1 > this.scoreOfPlayer2 && this.scoreOfPlayer1 < 4) {
      if (this.scoreOfPlayer1 === 2)
          this.P1res = "Thirty";
      if (this.scoreOfPlayer1 === 3)
          this.P1res = "Forty";
      if (this.scoreOfPlayer2 === 1)
          this.P2res = "Fifteen";
      if (this.scoreOfPlayer2 === 2)
          this.P2res = "Thirty";
      score = this.P1res + "-" + this.P2res;
  }
  if (this.scoreOfPlayer2 > this.scoreOfPlayer1 && this.scoreOfPlayer2 < 4) {
      if (this.scoreOfPlayer2 === 2)
          this.P2res = "Thirty";
      if (this.scoreOfPlayer2 === 3)
          this.P2res = "Forty";
      if (this.scoreOfPlayer1 === 1)
          this.P1res = "Fifteen";
      if (this.scoreOfPlayer1 === 2)
          this.P1res = "Thirty";
      score = this.P1res + "-" + this.P2res;
  }

  if (this.scoreOfPlayer1 > this.scoreOfPlayer2 && this.scoreOfPlayer2 >= 3) {
      score = "Advantage player1";
  }

  if (this.scoreOfPlayer2 > this.scoreOfPlayer1 && this.scoreOfPlayer1 >= 3) {
      score = "Advantage player2";
  }

  if (this.scoreOfPlayer1 >= 4 && this.scoreOfPlayer2 >= 0 && (this.scoreOfPlayer1 - this.scoreOfPlayer2) >= 2) {
      score = "Win for player1";
  }
  if (this.scoreOfPlayer2 >= 4 && this.scoreOfPlayer1 >= 0 && (this.scoreOfPlayer2 - this.scoreOfPlayer1) >= 2) {
      score = "Win for player2";
  }
  return score;
};

TennisGame2.prototype.setScoreOfPlayer1 = function(number) {
  var i;
  for (i = 0; i < number; i++) {
      this.setScoreOfPlayer1();
  }
};

TennisGame2.prototype.setScoreOfPlayer2 = function(number) {
  var i;
  for (i = 0; i < number; i++) {
      this.setScoreOfPlayer2();
  }
};

TennisGame2.prototype.ScoreOfPlayer1 = function() {
  this.scoreOfPlayer1++;
};

TennisGame2.prototype.ScoreOfPlayer2 = function() {
  this.scoreOfPlayer2++;
};

TennisGame2.prototype.wonPoint = function(player) {
  if (player === "player1")
      this.ScoreOfPlayer1();
  else
      this.ScoreOfPlayer2();
};

if (typeof window === "undefined") {
  module.exports = TennisGame2;
}