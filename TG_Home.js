document.addEventListener('DOMContentLoaded', function() {


    // TO SHOW THE TEXT ONLY WHEN THE BANNER HAS BEEN DROPPED DOWN
    const portfolioButton = document.querySelector('.portfolio-button');
    const portfolioOverlay = document.querySelector('.portfolio-overlay');
    const overlayLink = document.querySelector('.overlay-link');
    const portfolioLinks = document.querySelector('.port-links');
    
    
    // THE DELAY TIME 
    const delay = 1002;
    const delay2 = 1000; 
    let timeoutId;

    //HEADER BUTTONS 
      //ACTUALLY ON - THE SIDE BUTTON
    document.getElementById("home-button").addEventListener("click", function() {
       window.location.href = "extra.html";
    });

    //ABOUT
    document.getElementById("portfolio-button").addEventListener("click", function() {
        window.location.href = "TG_Work.html";
    });

    //CONTACT
    document.getElementById("contact-button").addEventListener("click", function() {
        window.location.href = "about.html";
    });

    //VIEW ALL
    document.getElementById("view-all").addEventListener("click", function() {
      window.location.href = "TG_Work.html";
    });
    
    });
    
// -------------------------------------------------------------------

function showProject(imagePath) {
//Clicking a project tag triggers showProject() with the path to the corresponding project image
  const img = document.getElementById('projectImage');
  const button = document.getElementById('viewProjectBtn');
  img.style.opacity = 0;
//The image fades out, switches, then fades in for a smooth effect.
  setTimeout(() => {
    img.src = imagePath;
    img.style.opacity = 1;
  }, 200);

  // button.href = projectLink;

  // const allButtons = document.querySelectorAll('.project-btn');
  // allButtons.forEach(btn => btn.classList.remove('active'));

  // clickedBtn.classList.add('active');
}

// -------------------------------------------------------------------
//Scrolling Down 

window.addEventListener("scroll", () => {
  const imageButtons = document.getElementById("imageButtons");
  const showAfter = 500;

  if (window.scrollY > showAfter) {
    imageButtons.style.opacity = 1;
    imageButtons.style.pointerEvents = "auto";
  } else {
    imageButtons.style.opacity = 0;
    imageButtons.style.pointerEvents = "none";
  }
});
