import './style.css';

const scoresList = [{
  player: 'Name',
  score: 100,
},
{
  player: 'Mary',
  score: 80,
},
{
  player: 'Marion',
  score: 90,
},
];

const board = (list) => {
  const myList = document.getElementById('scoreList');
  const listElement = document.createElement('li');
  listElement.innerHTML = `${list.player} : ${list.score}`;
  myList.appendChild(listElement);
};

const addList = (scores) => {
  scores.forEach((score) => board(score));
};

addList(scoresList);