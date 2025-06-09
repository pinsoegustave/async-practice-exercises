function fetchUserTodos() {
  const usersURL = 'https://jsonplaceholder.typicode.com/users';
  const todosURL = 'https://jsonplaceholder.typicode.com/todos';

  return Promise.all([
    fetch(usersURL).then(res => res.json()),
    fetch(todosURL).then(res => res.json())
  ])
  .then(([users, todos]) => {
    // Combine todos into users
    const combined = users.map(user => {
      const userTodos = todos.filter(todo => todo.userId === user.id);
      return {
        ...user,
        todos: userTodos
      };
    });

    return combined;
  });
}

fetchUserTodos()
  .then(data => {
    console.log('Combined Users with Todos:', data);
    displayUsers(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
});

function displayUsers(users) {
  const container = document.createElement('div');
  users.forEach(user => {
    const userDiv = document.createElement('div');
    userDiv.innerHTML = `
      <h3>${user.name} (${user.email})</h3>
      <ul>
        ${user.todos.map(todo => `<li>${todo.title} - ${todo.completed ? '✅' : '❌'}</li>`).join('')}
      </ul>
    `;
    container.appendChild(userDiv);
  });
  document.body.appendChild(container);
}
