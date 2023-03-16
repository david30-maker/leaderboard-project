/* eslint-disable */
import './style.css';
import Api from './modules/api.js';
import refresh from './modules/refresh.js';

const request = new Api();

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
  const {elems} = form1;
  const data = {
    user: elems.user.value,
    score: elems.score.value,
  };

  await request.addScore(data);
  form1.reset();
  displayData();
});



/*import './style.css';
import './style.scss';
import Api from './modules/api-controller.js';
import refresh from './modules/refresh-view.js';

const request = new Api();

const displayData = async () => {
  const data = await request.getScores();
  refresh(data);
};

displayData();

document.getElementById('refresh').addEventListener('click', async () => {
  displayData();
});

document.getElementById('score-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = document.getElementById('score-form');
  const { elements } = form;
  const data = {
    user: elements.user.value,
    score: elements.score.value,
  };
  await request.addScore(data);
  form.reset();
  displayData();
}); */