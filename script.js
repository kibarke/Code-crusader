console.log('code-crusaders')

const options = {
    method: 'GET',
headers: {
  accept: 'application/json',
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkN2ZkOTEzNjQyODQ2ZjVlOGE4NzdiZWU4ZjVmZGM1ZSIsInN1YiI6IjY1YmVjNzJjMWRiYzg4MDE3YzFkNjJkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H6s65fxuHSM3r3Qc894efns9UoJy9Z3uLzFqo45nVMU'
}
}

// Omdb 
const APIKey = '32ef5c0e';
const apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=32ef5c0e';

// const searchKeyword = userScore ignore this for now

const tmdbKey = 'd7fd913642846f5e8a877bee8f5fdc5e';
const moviesContainer = document.getElementById('moviesContainer');


// Access Token
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkN2ZkOTEzNjQyODQ2ZjVlOGE4NzdiZWU4ZjVmZGM1ZSIsInN1YiI6IjY1YmVjNzJjMWRiYzg4MDE3YzFkNjJkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H6s65fxuHSM3r3Qc894efns9UoJy9Z3uLzFqo45nVMU

fetch(`https://api.themoviedb.org/3/search/movie?query=Matrix&include_adult=false&language=en-US&page=1`, options)
.then(response => response.json())
.then(data => {
    console.log(data);
    if (data.Search) {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
        <h3>${movie.Title}</h3>
        <p>${movie.year}</p>
        <p>${movie.userScore}</p>
        `;
        moviesContainer.appendChild(movieCard);

    } else {
        moviesContainer.innerHTML = '<p>No results found.</p>'
    }  
})
.catch(error => {
    console.error('Error:', error);
});