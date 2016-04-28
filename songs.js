var songList = [
  {
    title: "Legs",
    artist: "ZZ Top",
    album: "Eliminator",
    genre: "Rock"
  },
  {
    title: "The Logical Song",
    artist: "Supertramp",
    album: "Breakfast in America",
    genre: "Pop"
  },
  {
    title: "Another Brick in the Wall",
    artist: "Pink Floyd",
    album: "The Wall",
    genre: "Rock"
  },
  {
    title: "Welcome to the Jungle",
    artist: "Guns & Roses",
    album: "Appetite for Destruction",
    genre: "Rock"
  },
  {
    title: "Ironic",
    artist: "Alanis Morisette",
    album: "Jagged Little Pill",
    genre: "Pop"
  },
  {
    title: "The Air That I Breathe",
    artist: "All That Remains",
    album: "The Fall of Ideals",
    genre: "Rock"
  },
  {
    title: "Holy Diver",
    artist: "Killswitch Engage",
    album: "As Daylight Dies",
    genre: "Rock"
  }
];

(function() {
  var songArea = document.getElementById("songs");

  function insertSong(song) {
    songArea.innerHTML += `
      <section class="song-info">
        <h1>${song.title}Song Name</h1>
        <span class="artist-name">${song.artist}</span>
        <span class="album-name">${song.album}</span>
        <span class="genre">${song.genre}</span>
      </section>`;
  }

  songList.forEach((s) => { insertSong(s); });
}());
