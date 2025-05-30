function fetchWithRetry(url, retries = 3, delay = 1000) {
      return new Promise((resolve, reject) => {
        function attemptFetch(attempt) {
          fetch(url)
            .then(response => {
              if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
              return response.json();
            })
            .then(data => resolve(data))
            .catch(error => {
              if (attempt < retries) {
                console.log(`Retrying... (${attempt + 1})`);
                setTimeout(() => attemptFetch(attempt + 1), delay);
              } else {
                reject(error);
              }
            });
        }

        attemptFetch(0);
      });
    }

    const url = 'https://jsonplaceholder.typicode.com/users/1';

    fetchWithRetry(url, 3, 1000)
      .then(data => {
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML = `
          <strong>Name:</strong> ${data.name}<br>
          <strong>Email:</strong> ${data.email}<br>
          <strong>Phone:</strong> ${data.phone}
        `;
      })
      .catch(error => {
        document.getElementById('output').textContent = `Failed to load data: ${error.message}`;
      });