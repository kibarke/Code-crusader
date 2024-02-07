console.log('code-crusaders')
const inputTitle = document.querySelector('#title');
const submitBtn = document.querySelector('.btn');
const movieTitle = document.querySelector('#movieTitle');
const container = document.querySelector('.container');
const APIKey = '32ef5c0e';
// const city = 'New York City';
// const apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=32ef5c0e';



const apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=32ef5c0e';


const tmdbKey = 'd7fd913642846f5e8a877bee8f5fdc5e';


// Access Token
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkN2ZkOTEzNjQyODQ2ZjVlOGE4NzdiZWU4ZjVmZGM1ZSIsInN1YiI6IjY1YmVjNzJjMWRiYzg4MDE3YzFkNjJkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H6s65fxuHSM3r3Qc894efns9UoJy9Z3uLzFqo45nVMU

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


=======
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


=======
// http://img.omdbapi.com/?apikey=[yourkey]&

// http://www.omdbapi.com/?apikey=[yourkey]&


//gets data for daily trending movies tmdb function works but needs to display data
const options = {
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
    }
