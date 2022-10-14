import ArtistModule from "./modules/ArtistModule.js";

let artistId = "";

const nameInput = document.querySelector("#edit-artist-name");
const ageInput = document.querySelector("#edit-artist-age");
const countryInput = document.querySelector("#edit-artist-country");
const famousSongInput = document.querySelector("#edit-artist-song");
const instrumentInput = document.querySelector("#edit-artist-instrument");
const statusInput = document.querySelector("#edit-artist-status");
const imageInput = document.querySelector("#edit-artist-image");

//Handle the modal operations wich uses values from localstorage/array to prefill fields, that can be edited

window.handleModal = (id) => {
  const artist = ArtistModule.getArtistById(id);
  artistId = id;
  document.querySelector(".modal-title").innerText = `Endre ${artist.name}`;
  nameInput.value = artist.name;
  ageInput.value = artist.age;
  countryInput.value = artist.country;
  famousSongInput.value = artist.famousSong;
  instrumentInput.value = artist.instrument;
  statusInput.value = artist.status;
  imageInput.value = artist.image;
};
//saves the artist by sending in the new, edited values from input.
const saveArtist = () => {
  ArtistModule.editArtist(artistId, {
    id: artistId,
    name: nameInput.value,
    age: ageInput.value,
    country: countryInput.value,
    famousSong: famousSongInput.value,
    instrument: instrumentInput.value,
    status: statusInput.value,
    image: imageInput.value,
  });
  generateList();
};

window.deleteArtist = (id) => {
  ArtistModule.deleteArtist(id);
  generateList();
};

//generate cards for each artist in storage, with two dynamically generated buttons unique for that card/artists id
const generateList = () => {
  const artists = ArtistModule.getAllArtists()
    .map((artist) => {
      return `
      <article class="card p-4" >
        <img class="card-img card-img-top" src="/images/${artist.image}">
        <h4 class="text-dark mt-2">${artist.name}</h4>
        <p>Age: ${artist.age}</p>
        <button  onclick="deleteArtist('${artist.id}')" class="btn btn-danger text-white mb-2 rounded w-50 m-auto border-0">
        Slett
        </button>
        <button onclick="handleModal('${artist.id}')" class="btn btn-primary text-white text-white rounded w-50 m-auto border-0" data-bs-toggle="modal" data-bs-target="#update-modal">
          Endre
        </button>
    </article>`;
    })
    .join(" ");
  document.querySelector("#artist-list").innerHTML = artists;
};

generateList();

document.getElementById("save-btn").addEventListener("click", saveArtist);
