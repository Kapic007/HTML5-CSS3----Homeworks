const video = document.getElementById("video");
const playPause = document.getElementById("play_button");
const videoTitle = document.getElementById("video_title");
const videoDescription = document.getElementById("video_description");
const videoTimes = document.getElementById("video_timer");
playPause.addEventListener("click", function (e) {
  if (video.paused || video.ended) {
    video.play();
    playPause.style.background =
      'url("images/video_pause_button.webp") center no-repeat, rgba(0, 0, 0, 0.5)';
    videoTitle.style.visibility = "hidden";
    videoDescription.style.visibility = "hidden";
    videoTimes.style.visibility = "hidden";
  } else {
    video.pause();
    playPause.style.background =
      'url("images/video_play_button.webp") center no-repeat, rgba(0, 0, 0, 0.5)';
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

// slider management in HEADER © My own! Do not copy!
const slidePrevious = document.getElementById("slide_prev");
const slideNext = document.getElementById("slide_next");
const backImage = document.getElementById("header");
let currentActivePug = document.getElementById("pug_1");
let curentImageNum = 1;
let currentSlideText = document.getElementById("slide_text_1");
slidePrevious.addEventListener("click", function (e) {
  if (curentImageNum > 1) {
    curentImageNum--;
    backImage.style.backgroundImage = `url("images/header_background_${curentImageNum}.webp")`;
    currentActivePug.style.background = "rgba(255, 255, 255, 0.5)";
    currentActivePug.style.border = "none";
    currentActivePug.style.transform = "scale(1)";
    currentSlideText.style.display = "none";
    currentActivePug = document.getElementById(`pug_${curentImageNum}`);
    currentSlideText = document.getElementById(`slide_text_${curentImageNum}`);
    currentActivePug.style.background = "none";
    currentActivePug.style.border = "1px solid #d3c1ad";
    currentActivePug.style.transform = "scale(1.5)";
    currentSlideText.style.display = "flex";
  }
});

slideNext.addEventListener("click", function (e) {
  if (curentImageNum < 5) {
    curentImageNum++;
    backImage.style.backgroundImage = `url("images/header_background_${curentImageNum}.webp")`;
    currentActivePug.style.background = "rgba(255, 255, 255, 0.5)";
    currentActivePug.style.border = "none";
    currentActivePug.style.transform = "scale(1)";
    currentSlideText.style.display = "none";
    currentActivePug = document.getElementById(`pug_${curentImageNum}`);
    currentSlideText = document.getElementById(`slide_text_${curentImageNum}`);
    currentActivePug.style.background = "none";
    currentActivePug.style.border = "1px solid #d3c1ad";
    currentActivePug.style.transform = "scale(1.5)";
    currentSlideText.style.display = "flex";
  }
});
for (let i = 1; i <= 5; i++) {
  document.getElementById(`pug_${i}`).addEventListener("click", function (e) {
    backImage.style.backgroundImage = `url("images/header_background_${i}.webp")`;
    currentActivePug.style.background = "rgba(255, 255, 255, 0.5)";
    currentActivePug.style.border = "none";
    currentActivePug.style.transform = "scale(1)";
    currentSlideText.style.display = "none";
    document.getElementById(`pug_${i}`).style.background = "none";
    document.getElementById(`pug_${i}`).style.border = "1px solid #d3c1ad";
    document.getElementById(`pug_${i}`).style.transform = "scale(1.5)";
    document.getElementById(`slide_text_${i}`).style.display = "flex";
    currentActivePug = document.getElementById(`pug_${i}`);
    currentSlideText = document.getElementById(`slide_text_${i}`);
  });
}
