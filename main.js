// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

const heartButton = document.querySelectorAll(".like-glyph");

function makeError(message) {
  const error = document.querySelector("#modal");
  error.classList.remove("hidden");
  error.textContent = message;
  setTimeout(() => (error.className = "hidden"), 3000);
}

function likeCallback(e) {
  const heart = e.target;
  mimicServerCall("URL")
    .then(() => {
      heart.classList.toggle("activated-heart");
      if (heart.classList.contains("activated-heart")) {
        heart.textContent = FULL_HEART;
      } else {
        heart.textContent = EMPTY_HEART;
      }
    })
    .catch((err) => {
      console.error(err);
      makeError("Error!");
    });
}

heartButton.forEach((button) => {
  button.addEventListener("click", likeCallback);
});
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
