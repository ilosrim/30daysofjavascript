// const url = 'https://restcountries.eu/rest/v2/all';
fetch('https://restcountries.eu/rest/v2/all', {
    method: 'POST',
    headers: {
        "Content-Type": "aplication/json"
    },
    body: JSON.stringify({
        name: 'Country 1'
    })
}).then(res => {
    return res.json()
})
  .then(data => console.log(data))
  .catch(error => console.log('ERROR'))