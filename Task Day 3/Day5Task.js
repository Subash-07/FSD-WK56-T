class Movie {
    // Constructor with default parameter for rating
    constructor(title, studio, rating = 'PG') {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    // Static method to filter and return movies with 'PG' rating
    static getPG(movies) {
        return movies.filter(movie => movie.rating === 'PG');
    }
}

// Creating an instance of Movie with specified properties
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

// Example usage of the getPG method
// Creating additional movie instances for demonstration
const movie1 = new Movie("Toy Story", "Pixar");
const movie2 = new Movie("The Godfather", "Paramount Pictures", "R");
const movie3 = new Movie("Frozen", "Disney");

// Array of movies
const moviesArray = [casinoRoyale, movie1, movie2, movie3];

// Getting only PG rated movies
const pgMovies = Movie.getPG(moviesArray);

// Displaying the result
console.log(pgMovies);
