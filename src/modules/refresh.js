export default async (score) => {
    const tableBody = document.querySelector('tbody');
    tableBody.innerHtml = '';
    score.forEach((elem) => {
    const tableRow = document.createElement('tr');
    const tableUser = document.createElement('td');
    const tableScore = document.createElement('td');
    tableUser.textContent = elem.user;
    tableScore.textContent = elem.score;
    [tableUser, TableScore].forEach((elem) => tableRow.appendChild(elem));
    tableBody.appendChild(ableRow);
    });
}