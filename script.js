console.log('code-crusaders')
const inputTitle = document.querySelector('#title');
const submitBtn = document.querySelector('.btn');
const movieTitle = document.querySelector('#movieTitle');
const container = document.querySelector('.container');
const moviesContainer = document.getElementById("movies")
const APIKey = '32ef5c0e';
// const city = 'New York City';
// const apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=32ef5c0e';

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

  fetch('https://api.themoviedb.org/3/trending/movie/week?language=en-US', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .then(data => {
        document.getElementById('trending').textContent = JSON.stringify(data)
        
    })
    .catch(error => console.error(error));

 
    function displayResults(data) {
        
        moviesContainer.textContent = data.Title;
        
    }




const dataContainer = document.getElementById('dataContainer')


    fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=a1c95fb64bc56eec23cea2a07c271cd0')
    .then(response => response.json())
    .then(data => {
     console.log(data) // Process the data here
     
      })
    
    .catch(error => { 
      console.log(error) // Handle any errors
    });

    fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=a1c95fb64bc56eec23cea2a07c271cd0')
  .then(response => response.json())
  .then(data => {
    const moviesContainer = document.getElementById('dataContainer')
    moviesContainer.textContent = data.title
    container.append(moviesContainer)
  })
  .catch(error => {
    console.log(error)
  });

 



 