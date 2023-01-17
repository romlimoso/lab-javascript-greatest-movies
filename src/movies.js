// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(function(movie){
        return movie.director
    })
    return directors
}

//Bonus



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const dramasSpielberg = moviesArray.filter(function(movie){
        if (movie.genre.includes('Drama') && movie.director === 'Steven Spielberg') {
            return true;
        }
    })
    return dramasSpielberg.length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let numberOfMovies = moviesArray.length
    const average = moviesArray.reduce(function(acc, val){
        if (val.score === undefined ){return acc}
        return (acc+val.score/numberOfMovies)
    },0)
    return Math.round(average*100)/100
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramas = moviesArray.filter(function(movie){
        if (movie.genre.includes('Drama')) {
            return true;
        }
    })
    return scoresAverage(dramas)
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let newArray = [...moviesArray]
    const releaseYears = newArray.sort(function(a, b) {
        if (a.year === b.year) {
            return (a.title.charCodeAt(0) - b.title.charCodeAt(0))
          } else {
          return a.year - b.year
          }
      })
    return newArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    let cloneMoviesArray = [...moviesArray]
  

    const sortedFirst20 = cloneMoviesArray.sort(function(a,b){
        return a.title.localeCompare(b.title)
    })
    const moviesByTitle = sortedFirst20.map(function(movie){
        return movie.title
    })
    
    return moviesByTitle.splice(0,20)
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let newMoviesArray = [...moviesArray]
    const durationInMinutes = newMoviesArray.map(function(movie){
        if (movie.duration[2] === " ") {
            if (movie.duration[5] === "m") {
                let time = Number(movie.duration[0])*60+Number(movie.duration[3])*10+Number(movie.duration[4])
                movie.duration = time
            } else {
                let time = Number(movie.duration[0])*60+Number(movie.duration[3])
                movie.duration = time
            }
        } else if (movie.duration[2] === "m") {
            let time = Number(movie.duration[0])*10+Number(movie.duration[1])
            movie.duration = time
        } else {
            if (movie.duration[1] === "m") {
                let time = Number(movie.duration[0])
                movie.duration = time
            } else {
                let time = Number(movie.duration[0])*60
                movie.duration = time
            }
        }
    })
    return newMoviesArray
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
