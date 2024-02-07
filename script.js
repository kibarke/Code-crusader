console.log('code-crusaders')
const inputTitle = document.querySelector('#title');
const submitBtn = document.querySelector('.btn');
const movieTitle = document.querySelector('#movieTitle');
const container = document.querySelector('.container');
const APIKey = '32ef5c0e';
// const city = 'New York City';
// const apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=32ef5c0e';

const options = {
    method: 'GET',
headers: {
  accept: 'application/json',
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkN2ZkOTEzNjQyODQ2ZjVlOGE4NzdiZWU4ZjVmZGM1ZSIsInN1YiI6IjY1YmVjNzJjMWRiYzg4MDE3YzFkNjJkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H6s65fxuHSM3r3Qc894efns9UoJy9Z3uLzFqo45nVMU'
}
}

// Omdb 
// const APIKey = '32ef5c0e';
const apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=32ef5c0e';

// const searchKeyword = userScore ignore this for now

const tmdbKey = 'd7fd913642846f5e8a877bee8f5fdc5e';
const moviesContainer = document.getElementById('moviesContainer');
=======


const apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=32ef5c0e';


const tmdbKey = 'd7fd913642846f5e8a877bee8f5fdc5e';


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
        moviesContainer.innerHTML.text = 'No results found.'
    }  
})
// .catch(error => {
//     console.error('Error:', error);
// });

//fetch fucntion gets movie title user seaches for
submitBtn.addEventListener('click', function () {
    const URL = 'https://www.omdbapi.com/?apikey=' + APIKey + '&t=' + inputTitle.value;


    fetch(URL)
        .then(function (res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function (data) {
            displayInfo(data)
        });
});


// displays users input
function displayInfo(data) {
    container.innerHTML = "";



    movieTitle.textContent = data.Title;


    const movieYear = document.createElement('p');
    movieYear.textContent = data.Year;


    container.append(movieYear);


    const moviePlot = document.createElement('p');
    moviePlot.textContent = data.Plot;


    container.append(moviePlot);

    movieTitle.textContent = data.Title;

    const movieYear = document.createElement('p');
    movieYear.textContent = data.Year;

    container.append(movieYear);

    const moviePlot = document.createElement('p');
    moviePlot.textContent = data.Plot;

    container.append(moviePlot);

    if (data.Poster) {
        const moviePoster = document.createElement("img");
        moviePoster.setAttribute("src", data.Poster);
        container.append(moviePoster);
    }
}

// http://img.omdbapi.com/?apikey=[yourkey]&


// http://www.omdbapi.com/?apikey=[yourkey]&

// http://img.omdbapi.com/?apikey=[yourkey]&

// http://www.omdbapi.com/?apikey=[yourkey]&


//gets data for daily trending movies tmdb function works but needs to display data
const optionss = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWM5NWZiNjRiYzU2ZWVjMjNjZWEyYTA3YzI3MWNkMCIsInN1YiI6IjY1YzAyYWU2OTA3ZjI2MDE2NjcyMDdlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PVPmnP3uVIyb5c2yi1vziA2rd_46OnxHylFi4N3_-zs'
    }
  };

  fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

    function displayResults(data) {
        container.innerHTML = "";
   
        movieTitle.textContent = data.Title;
   
        const movieYear = document.createElement('p');
        movieYear.textContent = data.Year;
   
        container.append(movieYear);
   

    function displayResults(data) {
        container.innerHTML = "";
    
        movieTitle.textContent = data.Title;
    
        const movieYear = document.createElement('p');
        movieYear.textContent = data.Year;
    
        container.append(movieYear);
    
        if (data.Poster) {
            const moviePoster = document.createElement("img");
            moviePoster.setAttribute("src", data.Poster);
            container.append(moviePoster);
        }
    };
    
    
    // var img = new Image();
    // img.src = 'https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster--dark-mode.png/0/images/masterrepository/Fandango/233591/ARG_Adv1Sheet4_CMP439_RGB_2.jpg';
    // img.onclick = function() {
    //     window.location.href = 'https://www.fandango.com/argylle-2024-233591/movie-overview';
    // };
    // document.body.appendChild(img);
    }
