document.addEventListener("DOMContentLoaded", () => {


    const startBtn = document.getElementById("start-btn");
  const startScreen = document.getElementById("start-screen");
  const cakeContainer = document.getElementById("cake-container");
        
//Birthday name 
const name = "Vasnhi";
document.getElementById("name").textContent = `Happy Birthday ${name}🎉`;


  startBtn.addEventListener("click", () => {
    startScreen.style.display = "none";
    cakeContainer.classList.remove("hidden");
  });
  // Candle logic 
  const flames = document.querySelectorAll(".flame");
  const message = document.getElementById("message");
  let blown = 0;
flames.forEach(flame => {
    flame.addEventListener("click", () => {
        flame.style.display = "none";
        blown++; });

        if (blown === flames.length) {
            message.classList.remove("hidden");
            message.classList.add("show");
        }
    
