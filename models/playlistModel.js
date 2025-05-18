class PlaylistModel {
  constructor() {
    this.playlist = [];
  }

  addSong(genre, artist, song) {
    this.playlist.push({ genre, artist, song });
  }

  getAllSongs() {
    return this.playlist;
  }
}
const model = new PlaylistModel();
