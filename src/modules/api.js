/* eslint-disable */
export default class Api {
    constructor() {
      this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/3CUiovNa2kz3xjn8Fnr/scores';
    }
  
      getScores = async () => {
        const { result } = await fetch(this.url).then((response) => response.json())
          .catch((err) => new Error(err));
        return result;
      }

      addScore = async (data) => {
        await fetch(this.url, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
        });
      };
  };

 
  
      