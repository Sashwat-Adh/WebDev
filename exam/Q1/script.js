fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
  .then(response => response.json())
  .then(data => {
    document.getElementById('loading').style.display = 'none';
    const list = document.getElementById('list');
    data.forEach(post => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${post.title}</strong><br>${post.body}`;
      list.appendChild(li);
    });
  })
  .catch(() => {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('error').textContent = 'Failed to load data';
  });