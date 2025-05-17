class PlaylistView {
  constructor() {
    this.container = document.getElementById("playlistContainer");
  }

  displaySongs(songs) {
    this.container.innerHTML = "";
    if (songs.length === 0) {
      this.container.innerHTML = "Inga låtar är tillagda ännu";
      return;
    }

    const grouped = {};

    songs.forEach(({ genre, artist, song }) => {
      if (!grouped[genre]) grouped[genre] = {};
      if (!grouped[genre][artist]) grouped[genre][artist] = [];
      grouped[genre][artist].push(song);
    });

    for (const genre in grouped) {
      const genreDiv = document.createElement("div");
      genreDiv.innerHTML = `<h2>${genre}</h2>`;

      for (const artist in grouped[genre]) {
        const artistDiv = document.createElement("div");
        artistDiv.innerHTML = `<h3>${artist}</h3><ul>${grouped[genre][artist]
          .map((song) => `<li>${song}</li>`)
          .join("")}</ul>`;
        genreDiv.appendChild(artistDiv);
      }

      this.container.appendChild(genreDiv);
    }
  }
}

const view = new PlaylistView();
