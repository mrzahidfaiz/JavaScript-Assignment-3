(async function () {
    let res = await fetch("./data.json");
    let movies = await res.json();
    console.log(movies);
  
    // DOM Elements
    const genreElem = document.getElementById("sel_genre");
    const yearsElem = document.getElementById("sel_year");
    const langElem = document.getElementById("sel_lang");
    const ratingElem = document.getElementById("sel_rating");
    const containerDiv = document.getElementById("container_div");
    
    
    function displayAllMovies(results) {
    results.forEach(function (movie) {
        const mainDiv = document.createElement("div");
        const innerDiv = `
        <div class="container my-3 movie_card" >
        <div class="row" id="row_card">
          <div class="col-md-2">${movie.id}</div>
          <div class="col-md-2"><img src='https://image.tmdb.org/t/p/w45/${movie.poster_path}' alt="movie_poster" class="img_poster"></div>
          <div class="col-md-5">${movie.title}<br/><span style="margin-right: 0.25rem; padding: 0 0.25rem; border: 1px solid hsl(0, 0%, 75%); border-radius: 2px;">${movie.certification} </span>${movie.genres}</div>
          <div class="col-md-3 text-center">${movie.release_date}</div>
        </div>
      </div>
          `;
        mainDiv.innerHTML = innerDiv;
        containerDiv.appendChild(mainDiv);
      });
    }
        

    function searchGenre() {
      // Selected Values are
      let genreQuery = genreElem.value;
      let yearsQuery = yearsElem.value;
      let langQuery = langElem.value;
      let ratingQuery = ratingElem.value;
      let results = movies.filter((movie) => {
        return (
          (genreQuery === "All" || movie.genres === genreQuery) &&
          (yearsQuery === "All" || movie.years === yearsQuery) &&
          (langQuery === "All" || movie.original_language === langQuery) &&
          (ratingQuery === "All" || movies.certification >= ratingQuery)
        );
      });
      
      //console.log(results);
      displayAllMovies(results);
    }
  
    // Event Handling
    genreElem.addEventListener("click", searchGenre);
    yearsElem.addEventListener("click", searchGenre);
    langElem.addEventListener("click", searchGenre);
    ratingElem.addEventListener("click", searchGenre);
  })();
  
  //movie.genres.includes(genreQuery)
  