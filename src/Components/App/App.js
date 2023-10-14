import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js'
import SearchResults from '../SearchResults/SearchResults.js'
import Playlist from '../Playlist/Playlist.js';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {searchResults: [
      {
        name: "Estilo Bajo",
        artist: "Estilo Bajo",
        album: "Son del Hipogeo",
        id: 1,
      },
      {
        name: "Ettnnia",
        artist: "La Ettnnia",
        album: "Ataque",
        id: 2,
      },
      {
        name: "Asilo 38",
        artist: "Asilo 38",
        album: "La hoguera",
        id: 3,
      },
      {
        name: "Tres Coronas",
        artist: "Tres Coronas",
        album: "Brooklyn",
        id: 4,
      },   
    ]
    }
  }

    render() {
      return (
        <div >
          <h1>Ja<span className = "highlight">mmm</span>ing</h1>
          <div className="App">
            <SearchBar /> 
            <div className="App-playlist">
               <SearchResults searchResults={this.state.searchResults} /> 
              {/* <!-- Add playlist component -- > */}
              <Playlist />
              

            </div>
          </div>      
        </div>
      );
      
    }
}

export default App;
 