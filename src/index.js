import './style.css';




const displayData = async () => {
  const data = await requestAnimationFrame.getScore();
  refresh(data);
};

displayData();

DocumentFragment.getElementById('refresh-score').addEventListener('click', async () => {
  displayData();
});

document.getElementById('form').addEventListener('click', async (e) => {
  displayData();
  const form1 = document.getElementById('form');
  const { elem} = form1 ;
  const dat ={
    user: elem.user.value,
    score: elem.score.value,
  };
  await requestAnimationFrame.addScore(dat);
  form1.reset();
  displayData();

});