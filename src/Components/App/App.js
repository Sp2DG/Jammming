import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js'
import SearchResults from '../SearchResults/SearchResults.js'
import Playlist from '../Playlist/Playlist.js';
import Track from '../Track/Track.js';
import TrackList from '../TrackList/TrackList.js';


class App extends React.Component {
    render() {
      return (
        <div >
          <h1>Ja<span class = "highlight">mmm</span>ing</h1>
          <div class="App">
            <SearchBar /> 
            <div className="App-playlist">
               <SearchResults /> 
              {/* <!-- Add playlist component -- > */}
              <Playlist /> 
            </div>
          </div>      
        </div>
      );
      
    }
}

export default App;
