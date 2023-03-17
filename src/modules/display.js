/* eslint-disable */
const refresh = async (scores) => {
  const tableBody = document.querySelector('tbody');
  tableBody.innerHTML = '';
  scores.forEach((el) => {
    const tableRow = document.createElement('tr');
    const tableUser = document.createElement('td');
    const tableScore = document.createElement('td');
    tableUser.textContent = el.user;
    tableScore.textContent = el.score;
    [tableUser, tableScore].forEach((el) => tableRow.appendChild(el));
    tableBody.appendChild(tableRow);
  });
};
export {refresh}

