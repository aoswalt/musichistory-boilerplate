var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.unshift("The Air That I Breathe by All That Remains on the album The Fall of Ideals");
songs.push("Holy Diver by Killswitch Engage on the album As Daylight Dies");

var body = document.getElementsByTagName("body")[0];
for (var i = 0; i < songs.length; ++i) {
  songs[i] = songs[i].replace(/[^\w\s>]/g, "");
  songs[i] = songs[i].replace(">", "-");

  body.innerHTML += `<p>${songs[i]}</p>`;
}
