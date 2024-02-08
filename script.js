console.log('code-crusaders')
const inputTitle = document.querySelector('#title');
const submitBtn = document.querySelector('.btn');
const movieTitle = document.querySelector('#movieTitle');
const container = document.querySelector('.container');
const moviesContainer = document.getElementById("movies")
const APIKey = '32ef5c0e';


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
//const moviesContainer = document.getElementById('moviesContainer');
//=======


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

    if (data.Poster) {
        const moviePoster = document.createElement("img");
        moviePoster.setAttribute("src", data.Poster);
        container.append(moviePoster);
    }
}
// let highScores = JSON.parse(localStorage.getItem('highscores')) || [];

// function saveData() {
//             // Get the data you want to save
//             const data = inputTitle;

//             // Save the data to localStorage
//             localStorage.setItem("click", data);

//             console.log("Data saved successfully!");
//           }
//           function updateScoreboard() {
//             const submit = document.getElementById("submit");

//             submit.innerHTML = "";
//          }






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

fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=a1c95fb64bc56eec23cea2a07c271cd0')
    .then(response => response.json())
    .then()
    .then(response => console.log(response))
    .catch(err => console.error(err));
