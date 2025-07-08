function savePlaylistToLocalStorage() {
    localStorage.setItem('myPlaylist', JSON.stringify(playlist));
    localStorage.setItem('currentIndex', currentIndex);
    localStorage.setItem('isShuffle', isShuffle);
}

function loadPlaylistFromLocalStorage() {
    const saved = localStorage.getItem('myPlaylist');
    if (saved) {
        playlist = JSON.parse(saved);
        originalPlaylistOrder = [...playlist];
        currentIndex = parseInt(localStorage.getItem('currentIndex')) || 0;
        isShuffle = localStorage.getItem('isShuffle') === 'true';
    }
}
