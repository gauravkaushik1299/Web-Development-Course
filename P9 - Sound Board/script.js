const sounds = ["hellsbells", "heavy", "die4u", "paintitblack"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  btn.addEventListener("click", (event) => {
    event.stopPropagation();
    changeSongs();
    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(btn);
});

function changeSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}


document.addEventListener("click", (event) => {
  const isButton = event.target.classList.contains("btn");
  if (!isButton) {
    changeSongs();
  }
});
