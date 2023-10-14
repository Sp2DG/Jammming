import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList.js';


class Playlist extends React.Component {
    render() {
        return (
            <div class="Playlist">
                <input defaultValue={'New Playlist'} />
                {/* <!-- Add a TrackList component --> */}
                {/*  <TrackList tracks = {this.props.searchResults} /> */}
                <button class="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        );
    }
}
export default Playlist;