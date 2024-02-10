console.log('code-crusaders')
const inputTitle = document.querySelector('#title');
const submitBtn = document.querySelector('.btn');
const movieTitle = document.querySelector('#movieTitle');
const container = document.querySelector('.container');
const moviesContainer = document.getElementById("movies")
const APIKey = '32ef5c0e';
const tmdbtitle = document.querySelector('#tmdbtitle');
const nowPlayingBtn = document.getElementById('now-playingBtn')
const apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=32ef5c0e';
const tmdbKey = 'd7fd913642846f5e8a877bee8f5fdc5e';


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



fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=a1c95fb64bc56eec23cea2a07c271cd0')
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));





function gettmdb() {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=a1c95fb64bc56eec23cea2a07c271cd0')
        .then(function (res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function (data) {
           

            for (let i = 0; i < data.results.length; i++) {
                if (i >= 5) {
                    break;
                }
                const title = document.createElement('p')

                title.textContent = data.results[i].title
                console.log(data.results[i].title)
                tmdbtitle.appendChild(title)

                const tmdbPoster = document.createElement('img')
                tmdbPoster.setAttribute('src', 'https://image.tmdb.org/t/p/w500/' + data.results[i].backdrop_path)
                tmdbtitle.appendChild(tmdbPoster)
                console.log(tmdbPoster)

            }
        })
        .catch(err => console.error(err));
}
nowPlayingBtn.addEventListener('click', gettmdb)


