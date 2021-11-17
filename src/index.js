import './style.css';

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