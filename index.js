console.log("Hello World");

//Grab input
const message = document.querySelector("#message")
const formEl = document.querySelector("form");
formEl.addEventListener("submit", addMovie);

// Functions


function addMovie(event) {
    event.preventDefault();
        const inputField = document.querySelector("input");
            let movie = document.createElement("li");
            let movieTitle = document.createElement("span");
        movieTitle.addEventListener("click", crossOffMovie)
    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle);
        const movieList = document.querySelector("ul")
    movieList.appendChild(movie);
        let deleteBtn = document.createElement("button");
    inputField.value = " ";
    deleteBtn.textContent = "X";
    movie.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", deleteMovie);
    
};

function deleteMovie(event) {
    event.target.parentNode.remove();
    message.textContent = "Movie deleted!";
}

function crossOffMovie(event) {
    event.target.classList.toggle("checked");

    if(event.target.classList.contains("checked")) {
        message.textContent = "Movie watched"
    } else {
        message.textContent = "Movie added back to list"
    }
}