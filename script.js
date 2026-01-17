console.log("JS Loaded");

// 1. Select the cake element
const cake = document.querySelector('.cake');

// 2. Select all the flame elements
const flames = document.querySelectorAll('.flame');

// 3. Add a click event listener to the cake
cake.addEventListener('click', function() {
  
  // 4. Loop through every flame and add the 'out' class
  flames.forEach((flame) => {
    flame.classList.toggle('out'); 
  });

  console.log("Made a wish! 🎂");
});



if (typeof confetti === 'function') {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 } // Starts from slightly below middle of screen (where cake is)
      });

      // Optional: Add a second burst for more drama
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0 }
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1 }
        });
      }, 250);
  }
    