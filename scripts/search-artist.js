import ArtistModule from "./modules/ArtistModule.js";

const searchStatusInput = document.querySelector("#search-status-input");
const searchInstrumentInput = document.querySelector(
  "#search-instrument-input"
);
const searchArtistBtn = document.querySelector("#search-artist-btn");
const showArtistSection = document.querySelector(
  ".show-search-artists-section"
);

const listArtistsBySearch = () => {
  let htmlOutput = "";
  const instrumentChoice = searchInstrumentInput.value;
  const statusChoice = searchStatusInput.value;

  console.log(statusChoice);

  const searchList = ArtistModule.getArtistBySearch(
    statusChoice,
    instrumentChoice
  );

  if (searchList.length > 0) {
    showArtistSection.style.display = "grid";
    searchList.forEach((artist) => {
      htmlOutput += `
      <article class="artist-article fade-in show-search-artists-section__article">
        <div>
          <h4>${artist.name}</h4>
          <p>Alder: ${artist.age}</p>
          <p>Land: ${artist.country}</p>
          <p>Kjent sang: ${artist.famousSong}</p>
          <p>Instrument: ${artist.instrument}</p>
          <p>Status: ${artist.status}</p>
        <div>  
          <img class="artist-img artist-img__search" alt="image of ${artist.image}" src="/images/${artist.image}">
        </article>`;
    });
    showArtistSection.innerHTML = htmlOutput;
  } else {
    showArtistSection.style.display = "block";
    showArtistSection.innerHTML = `<p>Ingen artist som spiller ${instrumentChoice}</p>`;
  }
};

searchArtistBtn.addEventListener("click", listArtistsBySearch);
