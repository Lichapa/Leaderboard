import './style.css';

const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6FRJ9P3M1OlCLyPtaGot/scores/';

const board = (list) => {
  const myList = document.getElementById('scoreList');
  const listElement = document.createElement('li');
  listElement.innerHTML = `${list.user} : ${list.score}`;
  myList.appendChild(listElement);
};

const addList = (scores) => {
  scores.forEach((score) => board(score));
};

const sortScore = (scoreList) => scoreList.sort((a, b) => b.score - a.score);

const getScores = async () => {
  const request = await fetch(baseUrl);
  const scores = await request.json();
  const scoreList = scores.result;
  sortScore(scoreList);
  addList(scoreList);
};

const addScores = async () => {
  const newScore = {
    user: document.getElementById('name').value,
    score: document.getElementById('score').value,
  };

  (await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(newScore),
  })).json();
};

document.getElementById('submit').addEventListener('click', (e) => {
  e.preventDefault();
  addScores();
  document.getElementById('form').reset();
});

document.getElementById('refresh').addEventListener('click', () => window.location.reload());
window.addEventListener('load', () => getScores());