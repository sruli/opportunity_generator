export const getAllOpportunities = () => (
  new Promise((resolve, reject) => {
    window.fetch('api/opportunities')
      .then(response => response.json())
      .then(json => resolve(json))
      .catch((error) => {
        console.log(error)
        return reject(error);
      });
  })
);

export const createOpportunity = suggestedOpportunity => (
  new Promise((resolve, reject) => {
    window.fetch('api/opportunities', {
      method: 'POST',
      body: JSON.stringify(suggestedOpportunity),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(json => resolve(json))
      .catch((error) => {
        console.log(error)
        return reject(error);
      });
  })
);
