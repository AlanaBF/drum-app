// Add an event listener for the 'transitionend' event on the document. This is in the CSS file
document.addEventListener("transitionend", function (e) {
  // If the event target has a class of 'key' and the property that transitioned is 'transform'
  if (e.target.classList.contains("key") && e.propertyName === "transform") {
    // Remove the 'playing' class from the target
    e.target.classList.remove("playing");
  }
});

// Add an event listener for the 'keydown' event on the document
document.addEventListener("keydown", function (e) {
  // Select the audio element and the key element that correspond to the pressed key
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  // If there's no audio element for this key, end the function
  if (!audio) return;

  // Set the audio time to 0 (start of the audio clip)
  audio.currentTime = 0;
  // Play the audio
  audio.play();
  // Add the 'playing' class to the key element
  key.classList.add("playing");
});

document.addEventListener("click", function (e) {
  const clickedKey = e.target.closest(".key");
  if (clickedKey) {
    const audio = document.querySelector(
      `audio[data-key="${clickedKey.dataset.key}"]`
    );
    if (audio) {
      audio.currentTime = 0;
      audio.play();
      clickedKey.classList.add("playing");
    }
  }
});
