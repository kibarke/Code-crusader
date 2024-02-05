console.log('code-crusaders')

// const APIKey = 32ef5c0e;
// const city = 'New York City';
// const apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=32ef5c0e';

// http://img.omdbapi.com/?apikey=[yourkey]&

// http://www.omdbapi.com/?apikey=[yourkey]&


// different ways the api key will work

//https://www.themoviedb.org/?language=en-US

const tmdbKey = 'd7fd913642846f5e8a877bee8f5fdc5e';
const apiUrl = 'https://www.themoviedb.org/3/trending/all/week?api_key=d7fd913642846f5e8a877bee8f5fdc5e'
const moviesContainer = document.getElementById('movies');


async function fetchMovies() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        data.results.foreach(media => {
            const moviecard = createMovieCard(media);
            moviesContainer.appendChild(movieCard);
        });
    } catch (error) {
        console.error('Error fetching data', error);
    }
}

function createMovieCard(media) {
    const { title, name, backdrop_path } = media;

    const movieCard = document.createElement('div');
    movieCard.classList.add("movie_item")

    movieCard.innerHTML = `
        <img src='https://image.image.tmdb.org/t/p/w500/${backdrop_path}' class='movie_img_rounded'>
        <div class = 'title'>${title || name}</div>
    `;
    return movieCard;
}




// Access Token
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkN2ZkOTEzNjQyODQ2ZjVlOGE4NzdiZWU4ZjVmZGM1ZSIsInN1YiI6IjY1YmVjNzJjMWRiYzg4MDE3YzFkNjJkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H6s65fxuHSM3r3Qc894efns9UoJy9Z3uLzFqo45nVMU
