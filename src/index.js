import './style.css';

const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6FRJ9P3M1OlCLyPtaGot/scores/';

const board = (list) => {
  const myList = document.getElementById('scoreList');
  const listElement = document.createElement('li');
  listElement.innerHTML = `${list.player} : ${list.score}`;
  myList.appendChild(listElement);
};

const addList = (scores) => {
  scores.forEach((score) => board(score));
};

const getScores = async () => {
  const request = await fetch(baseUrl);
  const scores = await request.json();
  const scoreList = scores.result;
  addList(scoreList);
};

document.getElementById('refresh').addEventListener('click', () => window.location.reload());
window.addEventListener('load', () => getScores());