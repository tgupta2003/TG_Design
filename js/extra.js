//EVENT LISTENER FOR HEADER BUTTONS 
//USE IDs for JS
document.addEventListener("DOMContentLoaded", function(){
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

  
  }); 