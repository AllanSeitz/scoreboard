let score = 0;
const addOneToTeamOneScore = event => {
  score += 1;
  /*let total = `${score}`;*/
  /*console.log(total);*/
  let message = `${score}`;
  const team1Score = document.querySelector(".team1 .score");
  team1Score.textContent = message;
};

const subOneFromTeamOneScore = event => {
  score -= 1;
  /*let total = `${score}`;*/
  /*console.log(total);*/
  let message = `${score}`;
  const team1Score = document.querySelector(".team1 .score");
  team1Score.textContent = message;
};
const subOneFromTeamTwoScore = event => {
  score -= 1;
  /*let total = `${score}`;*/
  /*console.log(total);*/
  let message = `${score}`;
  const team1Score = document.querySelector(".team2 .score");
  team1Score.textContent = message;
};

const addOneToTeamTwoScore = event => {
  score += 1;
  let total = `${score}`;
  /*console.log(total);*/
  let message = `${score}`;
  const team1Score = document.querySelector(".team2 .score");
  team1Score.textContent = message;
};

const main = event => {
  const addButton = document.querySelector(".team1 .add");

  addButton.addEventListener("click", addOneToTeamOneScore);

  const subButton = document.querySelector(".team1 .sub");

  subButton.addEventListener("click", subOneFromTeamOneScore);

  const subButton2 = document.querySelector(".team2 .sub");

  subButton2.addEventListener("click", subOneFromTeamTwoScore);

  const addButton2 = document.querySelector(".team2 .add");

  addButton2.addEventListener("click", addOneToTeamTwoScore);
};

document.addEventListener("DOMContentLoaded", main);
