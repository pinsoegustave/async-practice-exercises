function fetchMultiple(urls) {
    const fetchPromise = urls.map(url => 
        fetch(url).then(response => {
            if(!response.ok) {
                new Error(`Failed to fetch ${url}: ${response.status}`)
            }
            return response.json();
        })
    );
    return Promise.all(fetchPromise);
}

const apiUrls = [
    'https://jsonplaceholder.typicode.com/posts/4',
    'https://jsonplaceholder.typicode.com/posts/5',
    'https://jsonplaceholder.typicode.com/posts/6'
]

fetchMultiple(apiUrls)
    .then(results => {
        const postList = document.getElementById('postList');
        results.forEach(post => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${post.title}</strong><br/>${post.body}`;
            postList.appendChild(li);
        });
    })
    .catch(error => {
        const postList = document.getElementById('postList');
        postList.innerHTML = `<li style="color: red;">Error: ${error.message}</li>`
    })