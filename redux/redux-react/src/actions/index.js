export function selectSong(song) {
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}