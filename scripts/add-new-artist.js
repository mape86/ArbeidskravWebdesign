import ArtistModule from "./modules/ArtistModule.js";

const nameInput = document.querySelector("#artist-name-input");
const ageInput = document.querySelector("#artist-age-input");
const countryInput = document.querySelector("#artist-country-input");
const famousSongInput = document.querySelector("#artist-famous-song-input");
const instrumentInput = document.querySelector("#artist-instrument-input");
const statusInput = document.querySelector("#artist-status-input");
const imageInput = document.querySelector("#artist-image-choice");
const inputValue = document.querySelectorAll(".input");
const sucsessBox = document.querySelector(".success-box");
const noSucsessBox = document.querySelector(".success-box-no");

const addBtn = document.querySelector("#add-artist-btn");

// Function to add values to new artist, and after submission reset the input fields so that they return to empty state.

const handleArtist = () => {
  const newArtist = {
    id: crypto.randomUUID(),
    name: nameInput.value,
    age: ageInput.value,
    country: countryInput.value,
    famousSong: famousSongInput.value,
    instrument: instrumentInput.value,
    status: statusInput.value,
    image: imageInput.value,
  };
  if (
    nameInput.value &&
    ageInput.value &&
    countryInput.value &&
    famousSongInput.value &&
    instrumentInput.value &&
    statusInput.value &&
    imageInput.value
  ) {
    ArtistModule.addNewArtist(newArtist);

    inputValue.forEach((input) => {
      input.value = "";
    });
    sucsessBox.style.display = "block";
    noSucsessBox.style.display = "none";
  } else {
    noSucsessBox.style.display = "block";
    sucsessBox.style.display = "none";
  }
};

addBtn.addEventListener("click", handleArtist);
