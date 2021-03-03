const video = document.getElementById("video");
const playPause = document.getElementById("play_button");
const videoTitle = document.getElementById("video_title");
const videoDescription = document.getElementById("video_description");
const videoTimes = document.getElementById("video_timer");
playPause.addEventListener("click", function (e) {
  if (video.paused || video.ended) {
    video.play();
    playPause.style.background =
      'url("/images/video_pause_button.png") center no-repeat, rgba(0, 0, 0, 0.5)';
    videoTitle.style.visibility = "hidden";
    videoDescription.style.visibility = "hidden";
    videoTimes.style.visibility = "hidden";
  } else {
    video.pause();
    playPause.style.background =
      'url("/images/video_play_button.png") center no-repeat, rgba(0, 0, 0, 0.5)';
    videoTitle.style.visibility = "visible";
    videoDescription.style.visibility = "visible";
    videoTimes.style.visibility = "visible";
    videoTimes.innerHTML = `00:${
      Math.floor(video.currentTime) < 10
        ? "0" + Math.floor(video.currentTime)
        : Math.floor(video.currentTime)
    }`;
  }
});
