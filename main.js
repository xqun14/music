document.addEventListener("DOMContentLoaded", function () {
    const playButton = document.getElementById("playButton");
    const music = document.getElementById("music");

    playButton.addEventListener("click", function () {
        if (music.paused) {
            music.play();
            playButton.textContent = "Tạm dừng";
        } else {
            music.pause();
            playButton.textContent = "Phát nhạc";
        }
    });
});
