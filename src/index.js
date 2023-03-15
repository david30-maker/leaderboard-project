/* eslint-disable */
import './style.css';
import refresh from './modules/refresh.js';

const displayData = async () => {
  const data = await request.getScore();
  refresh(data);
};

displayData();

document.getElementById('refresh-btn').addEventListener('click', async () => {
  displayData();
});

document.getElementById('form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form1 = document.getElementById('form');
  const elem = form1;
  const data = {
    user: elem.user.value,
    score: elem.score.value,
  };

  await request.addScore(data);
  form1.reset();
  displayData();
});