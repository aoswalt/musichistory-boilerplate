'use strict';

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
  var listView = document.getElementById("view-content");
  var addView = document.getElementById("add-content");
  var songArea = document.getElementById("songs");

  function insertSong(song) {
    songArea.innerHTML += `
      <section class="song-info">
        <h1>${song.title}</h1>
        <span class="artist-name">${song.artist}</span>
        <span class="album-name">${song.album}</span>
        <span class="genre">${song.genre}</span>
      </section>`;
  }

  document.getElementById("a-view").addEventListener("click", function() {
    listView.style.display = "block";
    addView.style.display = "none";
  });

  document.getElementById("a-add").addEventListener("click", function() {
    listView.style.display = "none";
    addView.style.display = "block";
  });

  document.getElementById("add-song-button").addEventListener("click", function() {
    insertSong({
      title: document.getElementById("new-song-title").value,
      artist: document.getElementById("new-song-artist").value,
      album: document.getElementById("new-song-album").value,
      genre: document.getElementById("new-song-genre").value
    });

    listView.style.display = "block";
    addView.style.display = "none";
  });

  songList.forEach((s) => { insertSong(s); });
}());
