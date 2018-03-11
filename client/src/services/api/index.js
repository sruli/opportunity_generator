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
