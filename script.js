// Countdown Timer Logic (Example)
const countdownTimer = document.getElementById("countdown-timer");
const revealButton = document.getElementById("revealButton");
const videoContainer = document.getElementById("video-container");
const popUpMessage = document.getElementById("popUpMessage"); // Pop-up message element

// Set your friend's birthday date (example: 25th Jan)
const birthday = new Date("January 25, 2025 00:00:00").getTime();

// Update the countdown every 1 second
let countdownInterval = setInterval(function () {
  let now = new Date().getTime();
  let distance = birthday - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownTimer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // If the countdown ends, stop the interval, show the message, and enable the button
  if (distance < 0) {
    clearInterval(countdownInterval);
    countdownTimer.innerHTML = "It's your birthday!";

    // Enable the reveal button when the countdown ends
    revealButton.disabled = false;  // Enable button when the birthday arrives
  }
}, 1000);

// Reveal the video or show the pop-up message when the button is clicked
revealButton.addEventListener('click', function () {
  let now = new Date().getTime();
  let distance = birthday - now;

  if (distance > 0) {
    // If clicked before the birthday, show the message "Tumhare birthday ke din open hoga!"
    popUpMessage.innerHTML = "Tumhare birthday ke din open hoga! 🎉";
    popUpMessage.style.display = "block";  // Show the message
    popUpMessage.style.color = "#ff6347";  // Set color
    console.log("Tumhare birthday ke din open hoga!"); // Log the message
  } else {
    // If clicked after the birthday, reveal the video and start playing it
    videoContainer.style.display = 'block'; // Show the video container
    const video = document.getElementById('surpriseVideo');
    video.play(); // Start playing the video
    
    console.log("Surprise Video revealed and playing!"); // Log the video revelation
  }
});
