/* eslint-disable */
import './style.css';
import Api from './modules/game-api.js';
import refresh from './modules/display.js';

const request = new Api();

const displayData = async () => {
  const data = await request.getScores();
  console.log(data)
  refresh(data);
};

displayData();

document.querySelector('#refresh-btn').addEventListener('click', async (e) => {
  displayData();
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