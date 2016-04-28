/* jshint devel:true */

'use strict';

(function() {
  var listView = document.getElementById("view-content");
  var addView = document.getElementById("add-content");
  var songArea = document.getElementById("songs");

  function insertSong(song) {
    var newSongElement = document.createElement("section");
    newSongElement.className = "song-info";
    newSongElement.innerHTML += `
      <h1>${song.title}</h1>
      <span class="artist-name">${song.artist}</span>
      <span class="album-name">${song.album}</span>
      <span class="genre">${song.genre}</span>
      <input type="button" class="delete-button" value="Delete">`;
    songArea.appendChild(newSongElement);

    newSongElement.getElementsByClassName("delete-button")[0].addEventListener("click", function(event) {
      event.target.parentElement.parentElement.removeChild(event.target.parentElement);
    });
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


  var xhr = new XMLHttpRequest();
  xhr.addEventListener("load", function() {
    var songList = JSON.parse(this.responseText);
    songList.songs.forEach((s) => { insertSong(s); });
  });
  xhr.addEventListener("error", function() {
    alert(this.responseText);
  });
  xhr.open("GET", "songs.json");
  xhr.send();
}());
