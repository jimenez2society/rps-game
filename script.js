let user = {
  name: "Corey",
  score: 0,
  addPoint: function () {
    this.score += 1;
  },
};
let bot = {
  name: "jimy",
  score: 0,
  addPoint: function () {
    this.score += 1;
  },
};
let maxPoints = 2;
// ask user to choose R, P ,S
// let userAnswer = prompt("Choose R, P, S");
// bot randomly choose an option

// let botAnswer = rps[Math.floor(Math.random() * 3)];

// user choice and bot choice compared
function userWins() {
  if (user.score === maxPoints) {
    alert("You've won the whole game!");
    return;
  }
  alert("User wins");
  user.addPoint();
  alert(`
        User:${user.score}
        Bot:${bot.score}
    `);
  let playAgain = confirm("Play again");

  if (playAgain) {
    startGame();
  } else {
    // end
  }
}
function botWins() {
  if (bot.score === maxPoints) {
    alert("You're great. Try next time 👍");
    return;
  }
  alert("Bot wins");
  bot.addPoint();
  alert(`
        User:${user.score}
        Bot:${bot.score}
    `);
  let playAgain = confirm("Play again");

  if (playAgain) {
    startGame();
  } else {
    // end
  }
}
function startGame() {
  // ask user to choose R, P ,S

  let userAnswer = prompt("Choose R, P, S");
  // ask user to choose R, P ,S
  let rps = ["R", "P", "S"];
  let botAnswer = rps[Math.floor(Math.random() * 3)];
  if (userAnswer.toUpperCase() === "R" && botAnswer.toUpperCase() === "S") {
    userWins();
  } else if (
    userAnswer.toUpperCase() === "P" &&
    botAnswer.toUpperCase() === "R"
  ) {
    userWins();
  } else if (
    userAnswer.toUpperCase() === "S" &&
    botAnswer.toUpperCase() === "P"
  ) {
    //   alert("User wins");
    userWins();
  } else {
    //   alert("Bot wins");
    botWins();
  }
}
startGame();
