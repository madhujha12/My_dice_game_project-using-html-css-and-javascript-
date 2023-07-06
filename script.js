document.getElementById("start").addEventListener("click", function () {
    makeSound();
    let p1 = Math.floor(Math.random() * 6) + 1;
    let p2 = Math.floor(Math.random() * 6) + 1;
    document.getElementById("p1").src = `assets/${p1}.png`;
    document.getElementById("p2").src = `assets/${p2}.png`;
    if (p1 > p2) {
      document.querySelector("h1").textContent = "🎋Me wins🎋";
    } else if (p1 < p2) {
      document.querySelector("h1").textContent = "🎋You wins🎋";
    } else {
      document.querySelector("h1").textContent = "🎈Oops! It's a DRAW🎈";
    }
  });
  
  function makeSound() {
    let audio = new Audio("assets/sound.mp3"); 
    audio.play();
  }



