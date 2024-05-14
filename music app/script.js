var progress = document.getElementById("progress");
var song = document.getElementById("song");
var icon = document.getElementById("ctrl");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

function playpause() {
  if (icon.classList.contains("fa-pause")) {
    song.pause();
    icon.classList.remove("fa-pause");
    icon.classList.add("fa-play");
  } else {
    song.play();
    icon.classList.add("fa-pause");
    icon.classList.remove("fa-play");
  }
}

song.addEventListener("timeupdate", () => {
  progress.value = song.currentTime;
});

progress.onchange = function () {
  song.currentTime = progress.value;
  if (song.paused) {
    song.play();
    icon.classList.add("fa-pause");
    icon.classList.remove("fa-play");
  }
};


song.addEventListener("play", () => {
  icon.classList.add("fa-pause");
  icon.classList.remove("fa-play");
});

song.addEventListener("pause", () => {
  icon.classList.remove("fa-pause");
  icon.classList.add("fa-play");
});
