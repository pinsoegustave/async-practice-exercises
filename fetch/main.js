function myFetch(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url);

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          const jsonResponse = JSON.parse(xhr.responseText);
          resolve(jsonResponse);
        } catch (err) {
          reject(new Error('Failed to parse response as JSON'));
        }
      } else {
        reject(new Error(`Request failed with status ${xhr.status}`));
      }
    };

    xhr.onerror = function () {
      reject(new Error('Network error'));
    };

    xhr.send();
  });
}


myFetch('https://jsonplaceholder.typicode.com/users')
  .then(users => {
    const newLi = document.getElementById('users');

    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = `${user.name} (${user.email})`;
        newLi.appendChild(li);
    });
  })
  .catch(error => {
      console.log('Error:', error);
      const userList = document.getElementById('userList');
      userList.innerHTML = `<li style="color: red">Failed to load users</li>`;
  });


