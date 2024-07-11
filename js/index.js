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
        window.location.href = "work.html";
    });

    //CONTACT
    document.getElementById("contact-button").addEventListener("click", function() {
        window.location.href = "about.html";
    });

    //VIEW ALL
    document.getElementById("view-all").addEventListener("click", function() {
      window.location.href = "work.html";
    });

    
    });
    
    // -------------------------------------------------------------------