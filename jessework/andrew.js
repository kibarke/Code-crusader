// Andrew's API example JavaScript code

const apiKey = 'bbb4a245'; // Your API key
const searchKeyword = 'Matrix'; // The keyword or title you're searching for
const moviesContainer = document.getElementById('moviesContainer');

fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(searchKeyword)}&apikey=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    console.log(data); // This will log the search results to the console
    // You can then process these results as needed
    if (data.Search) {
        data.Search.forEach(movie => {
          const movieCard = document.createElement('div');
          movieCard.classList.add('movie-card'); // Add a class for styling if you want
          movieCard.innerHTML = `
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
          `;
          moviesContainer.appendChild(movieCard);
        });
      } else {
        moviesContainer.innerHTML = '<p>No results found.</p>';
      }
  })
  .catch(error => {
    console.error('Error:', error);
  });
