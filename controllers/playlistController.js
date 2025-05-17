class PlaylistController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    document.getElementById("playlistForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const genre = document.getElementById("genre").value;
      const artist = document.getElementById("artist").value;
      const song = document.getElementById("song").value;

      this.model.addSong(genre, artist, song);
      this.view.displaySongs(this.model.getAllSongs());

      e.target.reset();
    });
  }
}

const controller = new PlaylistController(model, view);
