import { combineReducers } from "redux";

export function songsReducer() {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Macarena", duration: "2:30" },
    { title: "No Scrubs", duration: "4:05" },
    { title: "All Star", duration: "3:15" },
    { title: "I Want it That Way", duration: "1:45" },
];
}


export function selectedSongReducer(selectedSong=null, action) {
    switch (action.type) {
        case 'SONG_SELECTED':
            return action.payload
        default:
            return selectedSong
    }
}

export default combineReducers({
    song: songsReducer,
    selectedSong: selectedSongReducer
})