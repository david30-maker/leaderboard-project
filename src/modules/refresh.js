export default async (score) => {
  const tableBody = document.querySelector('tbody');
  tableBody.innerHtml = '';
  score.forEach((element) => {
    const tableRow = document.createElement('tr');
    const tableUser = document.createElement('td');
    const tableScore = document.createElement('td');
    tableUser.textContent = element.user;
    tableScore.textContent = element.score;
    [tableUser, tableScore].forEach((element) => tableRow.appendChild(element));
    tableBody.appendChild(tableRow);
  });
};
