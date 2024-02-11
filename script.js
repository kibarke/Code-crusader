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

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkN2ZkOTEzNjQyODQ2ZjVlOGE4NzdiZWU4ZjVmZGM1ZSIsInN1YiI6IjY1YmVjNzJjMWRiYzg4MDE3YzFkNjJkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H6s65fxuHSM3r3Qc894efns9UoJy9Z3uLzFqo45nVMU'
    }
}

// Omdb 
// const APIKey = '32ef5c0e';
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


// If the user can't find a movie there should a console log saying error

function gettmdb() {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=a1c95fb64bc56eec23cea2a07c271cd0')
        .then(function (res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function (data) {

fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=a1c95fb64bc56eec23cea2a07c271cd0')
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Network response was not ok.');
        }
    })
    .then(response => console.log(response))
    .catch(err => showErrorModal('Error fetching weekly trending movies: ' + err.message));

//     function showErrorModal(message) {
//         // Create modal overlay
//         const modalOverlay = document.createElement('div');
//         modalOverlay.classList.add('modal-overlay');
    
//         // Create modal content
//         const modalContent = document.createElement('div');
//         modalContent.classList.add('modal-content');
        
//         // Create error message
//         const errorMessage = document.createElement('p');
//         errorMessage.textContent = message;
    
//         // Create close button
//         const closeButton = document.createElement('button');
//         closeButton.textContent = 'Close';
//         closeButton.addEventListener('click', closeModal);
    
//         // Append error message and close button to modal content
//         modalContent.appendChild(errorMessage);
//         modalContent.appendChild(closeButton);
    
//         // Append modal content to modal overlay
//         modalOverlay.appendChild(modalContent);
    
//         // Append modal overlay to body
//         document.body.appendChild(modalOverlay);
    
//         // Function to close the modal
//         function closeModal() {
//             document.body.removeChild(modalOverlay);
//         }
//     }
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


function showErrorModal(message) {
    const modal = document.createElement('div');
    modal.classList.add('error-modal');
    modal.textContent = message;
    document.body.appendChild(modal);

    // Close the modal when clicked anywhere on the document
    document.addEventListener('click', function closeModal() {
        modal.remove();
        document.removeEventListener('click', closeModal);
    });
}

fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => showErrorModal('Error fetching trending movies: ' + err.message));

fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=a1c95fb64bc56eec23cea2a07c271cd0')
    .then(response => response.json())
    .then()
    .then(response => console.log(response))
    .catch(err => showErrorModal('Error fetching weekly trending movies: ' + err.message));

