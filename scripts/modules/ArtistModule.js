const ArtistModule = (() => {
  const artistArray = [
    {
      id: crypto.randomUUID(),
      name: "Bruce Springsteen",
      age: 73,
      country: "USA",
      famousSong: "Tougher than the rest",
      instrument: "Vokal Gitar Piano Munnspill",
      status: "Lever",
      image: "springsteen.jpeg",
    },
    {
      id: crypto.randomUUID(),
      name: "Clarence Clemons",
      age: 69,
      country: "USA",
      famousSong: "Ingen egen, men deltar i mange",
      instrument: "Saksofon",
      status: "Død",
      image: "clemons.jpeg",
    },
    {
      id: crypto.randomUUID(),
      name: "Tina Turner",
      age: 82,
      country: "Switzerland",
      famousSong: "The best",
      instrument: "Vokal",
      status: "Lever",
      image: "turner.jpeg",
    },
    {
      id: crypto.randomUUID(),
      name: "Ben Harper",
      age: 52,
      country: "USA",
      famousSong: "Burn one down",
      instrument: "Vokal Gitar",
      status: "Lever",
      image: "harper.jpeg",
    },
    {
      id: crypto.randomUUID(),
      name: "Bob Dylan",
      age: 81,
      country: "USA",
      famousSong: "Like a rolling stone",
      instrument: "Vokal Gitar",
      status: "Lever",
      image: "dylan.jpeg",
    },
    {
      id: crypto.randomUUID(),
      name: "Whitney Houston",
      age: 49,
      country: "USA",
      famousSong: "I will always love you",
      instrument: "Vokal Piano",
      status: "Død",
      image: "houston.jpeg",
    },
    {
      id: crypto.randomUUID(),
      name: "Mark Knopfler",
      age: 73,
      country: "Storbritannia",
      famousSong: "Walk of life",
      instrument: "Vokal Gitar",
      status: "Lever",
      image: "knopfler.jpeg",
    },
    {
      id: crypto.randomUUID(),
      name: "Jerry Lee Lewis",
      age: 87,
      country: "USA",
      famousSong: "Great balls of fire",
      instrument: "Vokal Piano",
      status: "Lever",
      image: "jerryLee.jpeg",
    },
    {
      id: crypto.randomUUID(),
      name: "Anne Grete Preus",
      age: 62,
      country: "Norge",
      famousSong: "Jeg er en by",
      instrument: "Vokal Gitar",
      status: "Død",
      image: "preus.jpeg",
    },
    {
      id: crypto.randomUUID(),
      name: "Vangelis",
      age: 79,
      country: "Hellas",
      famousSong: "Chariots of fire",
      instrument: "Piano",
      status: "Død",
      image: "vangelis.jpeg",
    },
    {
      id: crypto.randomUUID(),
      name: "Roger Waters",
      age: 79,
      country: "Storbritannia",
      famousSong: "Brick in the wall",
      instrument: "Vokal Gitar ",
      status: "Lever",
      image: "waters.jpeg",
    },
    {
      id: crypto.randomUUID(),
      name: "Johnny Cash",
      age: 71,
      country: "USA",
      famousSong: "Walk the line",
      instrument: "Vokal Gitar Piano",
      status: "Død",
      image: "cash.jpeg",
    },
  ];

  const artistItem = "artists";

  // function handling the hard-coded array and sets hasDoneInitialFetch to true the first time it the function runs, so that added artist don´t get overwritten by the array when the function is called again. Module contains functions for handleing delete, adding and retrieving to and from localstorage/array.

  const getAllArtists = () => {
    
       const artistList = getLocalStorageArtistList()
        
        if(localStorage.getItem("hasDoneInitialFetch")) return artistList

        const newLSArray = JSON.stringify(artistArray);

        localStorage.setItem(artistItem, newLSArray);
        
        const getNewLSArray = localStorage.getItem(artistItem);
        const parsedArtistArray = JSON.parse(getNewLSArray);

        localStorage.setItem("hasDoneInitialFetch", true)

        return parsedArtistArray;
  };

  const getArtistById = (id) => {
    return getAllArtists().find(artist => artist.id === id)
  }

  //function for adding new artists to localStorage 
  const addNewArtist = (newArtist) => {
    const artistArray = getLocalStorageArtistList();

    const newArtistArray = artistArray.concat(newArtist);

    localStorage.setItem(artistItem, JSON.stringify(newArtistArray));
  }

  const deleteArtist = (id) => {
    const artistArray = getLocalStorageArtistList();
    
    const filteredArray = artistArray.filter(artist => artist.id != id);
    
    localStorage.setItem(artistItem, JSON.stringify(filteredArray));
    
  }
  //edit artist replaces the object with a new one, with edited informatiom. Else it keeps the original ones.
  const editArtist = (id, newArtist) => {
    
    const artistArray = getLocalStorageArtistList()

    const originalArtist = artistArray.find(artist => artist.id === id)

    Object.assign(originalArtist, newArtist)

    localStorage.setItem(artistItem, JSON.stringify(artistArray))
    
    
    
  }

  const getArtistBySearch = (status, instrument) => {
    
    const artistArray = getLocalStorageArtistList();

    const filteredArtistArray = artistArray.filter(artist => artist.status.includes(status) && artist.instrument.toLowerCase().includes(instrument.toLowerCase()))

    return filteredArtistArray;
  } 
  
  //function to check if objects excists in localStorage and return them if they do. 
  const getLocalStorageArtistList = () => {
    if(localStorage.getItem(artistItem) != null){
        const artistArray = JSON.parse(localStorage.getItem(artistItem))
        return artistArray;
    }else{
        return []
    }
  }



  return{
    getLocalStorageArtistList,
    getAllArtists,
    getArtistById,
    addNewArtist,
    artistItem,
    deleteArtist,
    editArtist,
    getArtistBySearch
  }

})();

export default ArtistModule;
