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


    
    //---------------------------------------------------

    // mouse is hovering over portfolio button 
      portfolioButton.addEventListener('mouseover', function() {
        clearTimeout(timeoutId);
        portfolioOverlay.style.display = 'block';
        //height of the banner!
        portfolioOverlay.style.height = '55%';
        portfolioLinks.style.display = 'flex'; 
    
      });

    //  mouse is continuing hovering over portfolio overlay
      portfolioOverlay.addEventListener('mouseover', function() {
        clearTimeout(timeoutId);
        portfolioOverlay.style.display = 'block';
        //height of the banner!
        portfolioOverlay.style.height = '55%';
        portfolioLinks.style.display = 'flex'; 
    
      });
    
    // mouse is no longer hovering over portfolio overlay
      portfolioOverlay.addEventListener('mouseout', function() {
        timeoutId = setTimeout(function() {
            portfolioOverlay.style.height = '0';
            portfolioLinks.style.display = 'none'; 
            // overlayLink.style.display = 'none';
            setTimeout(function() {
              portfolioOverlay.style.display = 'none';
        
            }, 1000); // Adjust the duration of the transition in milliseconds
          }, 1000);
      });
    
    
    //  PAGE-END APPEARANCE
    const graphic = document.querySelector('.footer');
    
    function checkScroll() {
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY || window.pageYOffset;
        const bodyHeight = document.body.offsetHeight;
      
        // Adjust the threshold as needed
        const threshold = 0;
      
        if (windowHeight + scrollY >= bodyHeight - threshold) {
          // Add the 'appear' class to show the graphic
          graphic.classList.add('appear');
        }
      }
      
      
    
    
    
      
    
    
    
    
    });
    
    // -------------------------------------------------------------------