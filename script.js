function playSound(audioName,loop) {
    let audio = new Audio(audioName);
    audio.loop = loop;
    audio.play();
}
playSound("my-music.mp3",true);