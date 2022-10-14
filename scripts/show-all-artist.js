import ArtistModule from "./modules/ArtistModule.js";

const showArtistSection = document.querySelector(".show-artists-section");
const mainHeaderCounter = document.querySelector(".main-header__counter");

const getAllArtists = () => {
  let htmlOutput = "";
  let counter = ArtistModule.getAllArtists().length;
  const artists = ArtistModule.getAllArtists();

  if (artists.length > 0) {
    artists.forEach((artist) => {
      htmlOutput += `
                <article class="artist-article fade-in col-12 col-sm-6 col-md-4 mt-2">
                  <div>
                    <h4>${artist.name}</h4>
                    <p>Alder: ${artist.age}</p>
                    <p>Land: ${artist.country}</p>
                    <p>Kjent sang: ${artist.famousSong}</p>
                    <p>Instrument: ${artist.instrument}</p>
                    <p>Status: ${artist.status}</p>
                  </div>  
                    <img class="artist-img" src="/images/${artist.image}">
                </article>`;
    });
  } else {
    htmlOutput = "<h3>No artists in list</h3>";
  }
  mainHeaderCounter.innerHTML = `
    Antall artister: 
  <h3 style="color: #FAFFFA;">${counter}</h3>`;

  showArtistSection.innerHTML = htmlOutput;
};

getAllArtists();
