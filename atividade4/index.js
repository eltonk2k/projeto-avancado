fetch('https://swapi.dev/api/planets/?page=2 ')
.then( response => {
    response.json()
    .then( data => {
        fetch(data.repos_url)
        .then( res => res.json().then( d => console.log(d)))
    })
})