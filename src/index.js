import './style.css';
import Api from './modules/game-api.js';
import display from './modules/display.js';

const request = new Api();

const getData = async () => {
  const data = await request.getScores();
  display(data);
};

getData();

document.querySelector('#refresh-btn').addEventListener('click', async () => {
  getData();
});

document.querySelector('#score-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const els = document.getElementById('score-form');
  const data = {
    user: els.user.value,
    score: els.score.value,
  };
  await request.addScore(data);
  els.reset();
});