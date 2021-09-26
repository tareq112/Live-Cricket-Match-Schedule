const token = '';
fetch('https://doc.entitysport.com/', {
    headers: {
      Authorization: `token ${token}`
    }
  })
  .then(response => response.json())
  .then(json => console.log(json));