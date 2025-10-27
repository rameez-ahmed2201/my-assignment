document.addEventListener('DOMContentLoaded', () => {
    // Select the celebration button (the one that triggers emojis)
    const surpriseButton = document.getElementById('surpriseButton');
    const confettiContainer = document.querySelector('.confetti-container');
    const birthdayMusic = document.getElementById('birthdayMusic');

    // Array of Cake and Celebration Emojis for the "Confetti" effect
    const cakeEmojis = ['🎂', '🍰', '🧁', '🎉', '🎁', '🎈'];

    // Function to create and launch a single emoji piece
    function createEmojiConfetti() {
        const emoji = document.createElement('div');
        emoji.classList.add('confetti');
        
        // Randomly select an emoji
        emoji.textContent = cakeEmojis[Math.floor(Math.random() * cakeEmojis.length)];

        // Randomly set initial position, and animation delay/duration
        emoji.style.left = Math.random() * 100 + 'vw';
        emoji.style.animationDelay = Math.random() * 5 + 's';
        emoji.style.animationDuration = (Math.random() * 3 + 3) + 's'; // 3s to 6s duration

        confettiContainer.appendChild(emoji);

        // Remove the emoji after it falls (to save memory)
        setTimeout(() => {
            emoji.remove();
        }, 6000);
    }

    // Function to start the confetti shower
    function startEmojiShower() {
        // Create 60 emoji pieces quickly
        for (let i = 0; i < 60; i++) {
            setTimeout(createEmojiConfetti, i * 75);
        }
    }

    // Function to handle the music playback
    function playMusic() {
        // Only attempt to play if it's currently paused
        if (birthdayMusic.paused) {
            birthdayMusic.play().catch(error => {
                console.log("Music auto-play prevented. User interaction required:", error);
            });
        }
    }


    // Event listener for the CELEBRATION button
    surpriseButton.addEventListener('click', () => {
        // 1. Play Music
        playMusic();
        
        // 2. Show the alert message
        alert("🎁 HAPPY BIRTHDAY! 🎂 Hope you have an amazing year ahead! 💖");

        // 3. Start the cake/emoji shower
        startEmojiShower();
    });

    // Attempt to play music immediately on load, but rely on the button click if blocked
    playMusic();
});