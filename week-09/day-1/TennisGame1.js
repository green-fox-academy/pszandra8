'use strict'

let TennisGame1 = function(player1Name, player2Name) {
    this.scoreOfPlayer1 = 0;
    this.scoreOfPlayer2 = 0;
    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame1.prototype.wonPoint = function(playerName) {
    if (playerName === "player1")
        this.scoreOfPlayer1 += 1;
    else
        this.scoreOfPlayer2 += 1;
};

TennisGame1.prototype.getScore = function() {
    let score = "";
    let tempScore = 0;
    if (this.scoreOfPlayer1 === this.scoreOfPlayer2) {
        if (this.scoreOfPlayer1 === 0) {
            score = "Love-All";
        }
        else if (this.scoreOfPlayer1 === 1) {
            score = "Fifteen-All";
        }
        else if (this.scoreOfPlayer1 === 2) {
            score = "Thirty-All";
        }
        else {
            score = "Deuce";
        }
    } else if (this.scoreOfPlayer1 >= 4 || this.scoreOfPlayer2 >= 4) {
        let minusResult = this.scoreOfPlayer1 - this.scoreOfPlayer2;
        if (minusResult === 1) score = "Advantage player1";
        else if (minusResult === -1) score = "Advantage player2";
        else if (minusResult >= 2) score = "Win for player1";
        else score = "Win for player2";
    } else {
        for (let i = 1; i < 3; i++) {
            if (i === 1) {
                tempScore = this.scoreOfPlayer1;
            }
            else {
                score += "-";
                tempScore = this.scoreOfPlayer2;
            }
            switch (tempScore) {
                case 0:
                    score += "Love";
                    break;
                case 1:
                    score += "Fifteen";
                    break;
                case 2:
                    score += "Thirty";
                    break;
                case 3:
                    score += "Forty";
                    break;
            }
        }
    }
    return score;
};

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}