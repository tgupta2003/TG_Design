//JSON -> all of the information about mentors stored

//This stores the titles like: "All Mentors", "Senior Mentors", "Graduated Mentors "
let pageTitleElement;

//Display with a grid layout 
let outputGridElement;

//Used to display each person's content as if it were a new page.
let mentorDisplayElement;


//JSON -> THE DATA WE ARE STORING 
//THE id is what goes in the url: file:///Users/trishagupta/Desktop/JSON2/index.html?section=item&id=science
//ex: id=science


// ADD GITHUB LINKS

//ITEM TITLE = NAME 
let mentorCollection = [
  //uber project
  {
    //Project 0: Uber Eats 
    "name": "Uber Eats Redesign - IBM Accelerate Program 2024",

    //category of portfolio: multiple
    "category":'design',
    
    //what each page is:
    "id" : "ubereats",
    //content on this page for the person: 

    //INFORMATION DISPLAYED
    "description" : "As my final project for the IBM Accelerate Program 2024: Design Track, I redesigned the interface of Uber Eats. I specifically focused on implementing allery-conscious/ dietary friendly features, changing the order of filters based on user needs, making it easy to request for assistance for those with diabilites, and more. Check out the full, detailed presentation here: https://www.figma.com/slides/JCwnyZPKryavjF4ONDSjrL/Uber-E.-Presentation?node-id=5-2872&t=MRgacFov9r9H2Jns-1", 
    "takeaways" : "User interviews, synthesizing data, journey mapping, persona-building, designing with Figma.     Check out the Figma board here: https://www.figma.com/design/FIYglJWm4TBepi65ZYbjSu/UberEats-Redesgn?node-id=0-1&t=keMxAkkuZqfLMJ5S-1",

    //preview image
    "image" : "Media/work/ubereats-cov.png",

    //images for grid
    "images": [
      "Media/work/jmap.png",
      // "Media/work/uber-eats.png",
      "Media/work/pain-points.png",
      "Media/work/ubereats1.png",
      "Media/work/ubereats2.png",
    ]

    
  },
  {
    //Project 1: Avenue
    "name": "avenue: a non-profit startup building community for women in STEAM+Finance",

    //category of portfolio: multiple
    "category":'webdev',
    
    //what each page is:
    "id" : "avenue",
    //content on this page for the person: 

    //INFORMATION DISPLAYED
    "description" : "Avenue is a non-profit which strives to build community for STEAM+Finance female undergraduates who want to foster meaningful relationships, find a support system, and broaden their network. As co-founder, I wanted the design of our website – containing our special programs and display of our in-person events – and overall brand of Avenue to feel welcoming towards all female-identifying undergraduates at NYU. This meant sticking to a color scheme that was bright and energetic with bold graphics without falling into stereotypical tropes. A primary goal of the website design was to make mentorship among undergraduate women in STEAM+Finance accessible and simple to use. The first iterations of the website displayed the available mentors with their basic information (in visual + auditory form) and allowed for filtration by grade level. The third iteration provides links to mentor and mentee application forms as we made the decision to make the program more selective and application based.", 
    "takeaways" : "Web development, testing out matching algorithms, creating a brand image, working with javascript libraries and JSON, iterating through the design process. Check out the website here: https://www.explorewithavenue.org/",

    //preview image
    "image" : "Media/work/ave-web1.png",

    //images for grid
    "images": [
      "Media/work/ave-web1.png",
      "Media/work/ave-web2.png",
      "Media/work/ave-web3.png",
      "Media/work/mentorship-p.png"
    ]

    
  },
  {

    //Project#2: Trek
    "name" : "Trek: a walking buddy app for college students in The City",
    //which category: seniors 
    "category" : "programming",
    //what each page is:
    "id" : "Trek",
    //content on this page for the person: 

    
    //INFORMATION DISPLAYED
    "description" : "Along with a team of three other NYU students, I spent 48 hours helping execute an application that fell under the category of well-being at the 2023 Hackathon hosted by NYU. Our team came up with TREK: a mobile app that matches university students walking to a destination with another student walking in a similar direction to provide a walking partner for safety. The application has the user type in their location (input) and provides a match of a student which provides their name, university, and rating (output). The app ranks users by longest common path, keeping track of searching users in the realtime database. We used the Google Maps API to provide a walking or transit direction to a meeting spot for both users when matched, along with the route to their individual final destinations. Filtering by university and gender were considered along with safety features and authentications.", 
    "takeaways" : "Did the UX design for the app on Figma, the logo on Adobe Illustrator, and learned more about using APIs, Firebase Realtime Database, and React Native. Check out the app in action: https://drive.google.com/file/d/17aFTxcoK2Z9vffw4oW4TPFgl2RqnfMO6/view?usp=sharing",

    //preview image
    "image": "Media/home/trek.png",

    //images for grid
    "images": [
      "Media/home/trek.png",
      "Media/work/trek3.png",
      "Media/work/trek-1.png",
      "Media/work/trek-2.png",
      

    ]

  },
  {
    //Project#3: Myflix
    "name" : "Myflix: an interactive website designed to hit close to home...",
    //which category: grads
    "category" : "webdev",
    //what each page is:
    "id" : "Myflix",
    
    //INFORMATION DISPLAYED
    "description" : "Have you ever felt like your streaming recommendations hit a little too close to home? What if they were tailored to someone so well that it eerily exposed one’s secrets or wrongdoings implicitly – or maybe even explicitly? For my final project for my web development course, I was tasked to create a website that was a commentary on or brought attention to a social issue. I decided to focus on internet privacy in a satirical form where, through interacting with the website, you are forced into uncovering personal information about three Myflix accounts you have gained access to. Try to see if you can figure out what’s going on in the lives of these three account holders. The website is an interactive commentary on the extent of personalization of content that streaming platforms may reach towards in the future and is inspired by the Black Mirror episode: Joan is Awful. To keep true to its satirical format, I used Adobe Photoshop to edit the faces on the preview covers for each recommended show. ", 
    "takeaways" : "designing a website mirroring the Netflix website layout, using Javascript Libraries, editing with Adobe Photoshop. Check it out for yourself here: https://tgupta2003.github.io/myflix/",

    //Preview image 
    "image" : "Media/home/myflix.png",


    //images for grid
    "images": [
      "Media/work/MF1.png",
      "Media/work/james1.png",
      "Media/work/kate2.png",
      "Media/work/MF2.png",
      

    ]


   
  },
  
  {
    //Project#6: Interviews
    "name" : "Stories of Triumph: a photojournalism series",
    //which category: seniors
    "category" : "multimedia",
    //what each page is:
    "id" : "photojournalism",

    //INFORMATION DISPLAYED
    "description" : "All portraits, photographs, and layouts taken and edited by myself.", 
    "takeaways" : "For this Stories of Triumph series, I interviewed three high school students on their most fulfilling personal achievements. The purpose of the series was to bring attention to the student body and the little things that make someone - anyone - extraordinary in their own way.",

    //Preview image 
    "image" : "Media/work/PJ-img.png",


    //images for grid
    "images": [
      "Media/work/SOT1.png",
      "Media/work/SOT2.png",
      "Media/work/SOT3.png",
      "Media/work/SOT4.png",
      
    ]
  },

  
  {
    //Project#7: Advertisement Collection
    "name" : "The Mixed-Media & Advertisement Collection ",
    //which category: seniors
    "category" : "multimedia",
    //what each page is:
    "id" : "Advertisement Collection",

    //INFORMATION DISPLAYED
    "description" : "The photos in this collection are minimally edited - makeshift backgrounds and “sets” using carefully selected objects were photographed. I wanted to explore juxtaposition and the question: if we take everyday objects out of their regular contexts and present them beautifully or in a more aesthetically pleasing way, would audiences be inclined to take them seriously?", 
    "takeaways" : "I crafted and photographed this collection during the peak of COVID, which meant that everyday objects – instead of human portraits – became my subjects. Iphone flashlights with colored tape, blankets, iridescent cardstock paper, and old items around the house were key parts of my makeshift set designs.",

    //Preview image 
    "image" : "Media/work/ad-pre.png",


    //images for grid
    "images": [
      "Media/work/chili&Co.jpg",
      "Media/work/tylenol-flowers.jpg",
      "Media/work/enchanted-flower.jpg",
      "Media/work/perfume.jpg",
      
    ]
    
  },
  {
    //Project#4: Space Oddity Animation
    "name" : "animation",
    //which category: grads
    "category" : "multimedia",
    //what each page is:
    "id" : "animation",

    //INFORMATION DISPLAYED
    "description" : "I decided to approach my first attempt at animation using a digital, stop-motion technique. After outlining the video with a storyboard, I created each frame — every line, patch of shading, highlight, or lettering, on illustrator using only the MacBook mousepad! As a novice animator, I resorted to taking screenshots of my work on Illustrator to mimic the motion/effect that an animation provides. The video was recognized at the Dubai Youth Film Festival: Best Picture in the Open Category (winner).", 
    "takeaways" : "Editing and stitching together the video on Final Cut Pro, using Adobe Illustrator for illustration, using Apple Motion to animate illustrations. Check out the video here: https://drive.google.com/file/d/1VlYgcMQpn5Afdzi4-HziUboFBoCFdpMc/view?usp=sharing",

    //Preview image 
    "image" : "Media/home/a+f.png",


    //images for grid
    "images": [
      "Media/work/a1.png",
      "Media/work/a2.png",
      "Media/work/a3.png",
      "Media/work/a4.png",
      
    ]
  },

  {
    //Project#8: Album Cover
    "name" : "past&present digital cover",
    //which category: seniors
    "category" : "multimedia",
    //what each page is:
    //DO NOT USE SYMBOLS**
    "id" : "collage",

    //INFORMATION DISPLAYED
    "description" : "Focusing on the theme of “coming back” to regular times after online learning and being on lockdown due to COVID, I scanned the school’s old magazine/yearbook photos with new photographs  to create a photo collage representing a blend of both older and newer eras.", 
    "takeaways" : "Taking and testing multiple dpi rate scans, detailed cutouts and editing using Adobe Photoshop, multiple iterations of the collage layout.",

    //Preview image 
    "image" : "Media/home/m-media-TN.png",


    //images for grid
    "images": [
      "Media/home/m-media-TN.png",
      "Media/work/al1.png",
      "Media/work/al2.png",
      "Media/work/al3.png",
      
    ]
 
  },
];



//DEPENDING ON CATEGORY THE FOLLOWING APPEARS: 
//loads JS 
document.addEventListener("DOMContentLoaded", function(){


   //DEFINE THE PAGE TITLE AND THE DIV GRID THAT WILL BE UPDATED AND FILLED 
  /* Get page element references */
  pageTitleElement = document.getElementById("pageTitle");
  outputGridElement = document.getElementById("outputGrid");
  mentorDisplayElement = document.getElementById("mentorDisplay");

  //PARTS OF THE URL THAT WILL BE USED TO IDENTIFY THE PAGE WE ARE ON 
  /* Get URL Params */
  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString); 

  //IN THE URL GET SECTION TO SEE IF ITEM ON PAGE OR NOT
  let urlSection = urlParams.get('section');
  //GET ID 
  let urlID = urlParams.get('id'); 

   //IF THE "section = " PART OF URL HAS SOMETHING OTHER THAN "item" DISPLAY AS A GRID W/ PREVIEWS OF OTHER PROJECTS 
  if (urlSection != "item") { /* Display project previews in grid */

  //IF YOU WANT TO DISPLAY ALL PROJECTS RELATING TO juniors&seniors, DISPLAY IN GRID
    /* Set page title if we are in a specific section */
    if (urlSection == "juniorsseniors") {
      pageTitleElement.innerText = "Junior & Senior Mentors:";
    }

    //IF YOU WANT TO DISPLAY ALL PROJECTS RELATING TO GRADS, DISPLAY IN GRID
    else if (urlSection == "graduates") {
      pageTitleElement.innerText = "Graduate Mentors:";
    }

    //GET EVERY CATEGORY - "category" FROM JSON -> "portfolioCollection" 
    //LOOP THROUGH EVERY SECTION IN DATABASE AND DISPLAY IF CATEGORY MATCHES URLSECTION 
    //THESE ARE THE CONTENT YOU WILL DISPLAY THUMBNAILS FOR 
    /* Create thumbnails for matching category, or all */
    for(let i = 0; i < mentorCollection.length; i++){
    	if(mentorCollection[i]["category"] == urlSection || urlSection == "" || urlSection == null){
    		//CALL THIS FUNCTION TO CREATE THUMBNAILS 
    		createMentorPreview(mentorCollection[i]); 
    	}
    }


  }

  //IF URLSECTION DOES EQUAL TO ITEM, DISPLAY THE INDIVIDUAL PAGE
  //INSTEAD OF USING URLSECTION USE "id" TO DIFFERENTIATE WHAT TO DISPLAY
  else{
    /* Display individual project by trying to match the "ID" value */
  	for(let x = 0; x < mentorCollection.length; x++){
  		if(mentorCollection[x]["id"] == urlID){
  			createMentorPage(mentorCollection[x]); 
  		}
  	}

  }

}); 


let link; 
//EVENT LISTENER FOR HEADER BUTTONS 
document.addEventListener("DOMContentLoaded", function(){
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

     //CONTACT
     document.getElementById("contact-button").addEventListener("click", function() {
      window.location.href = "about.html";
     });

    // HP: AVE LINK
     document.getElementById("view-button").addEventListener("click", function() {
        // Define the ID you want to pass in the URL
        const id = "avenue"; // This should match the 'id' of the object in your JSON data
        // Construct the URL
        const url = `work.html?section=item&id=${id}`;
        // Navigate to the constructed URL
        window.location.href = url;
  });

  // HP: TREK
  document.getElementById("view-button4").addEventListener("click", function() {
    // Define the ID you want to pass in the URL
    const id = "Trek"; // This should match the 'id' of the object in your JSON data
    // Construct the URL
    const url = `work.html?section=item&id=${id}`;
    // Navigate to the constructed URL
    window.location.href = url;
  });

  // HP: MYFLIX
  document.getElementById("view-button3").addEventListener("click", function() {
    // Define the ID you want to pass in the URL
    const id = "Myflix"; // This should match the 'id' of the object in your JSON data
    // Construct the URL
    const url = `work.html?section=item&id=${id}`;
    // Navigate to the constructed URL
    window.location.href = url;
  });

  // HP: ANIMATION
  //document.getElementById("view-button2").addEventListener("click", function() {
    // Define the ID you want to pass in the URL
   // const id = "animation"; // This should match the 'id' of the object in your JSON data
    // Construct the URL: `http://127.0.0.1:5500/work.html?section=item&id=${id}`
   // const url = `work.html?section=item&id=${id}`;
    // Navigate to the constructed URL
   // window.location.href = url;
  //});

  // HP: UberEats 
  document.getElementById("view-button2").addEventListener("click", function() {
    // Define the ID you want to pass in the URL
    const id = "ubereats"; // This should match the 'id' of the object in your JSON data
    // Construct the URL: `http://127.0.0.1:5500/work.html?section=item&id=${id}`
    const url = `work.html?section=item&id=${id}`;
    // Navigate to the constructed URL
    window.location.href = url;
  });


}); 


//CREATE/ DISPLAY THUMBNAILS 
//this function takes a JSON object as input, extracts relevant information 
//(title, image, and id), creates an HTML structure for  a mentor thumbnail,
//and appends it to a grid layout for display on a web page.
// let newPreviewLink; 
function createMentorPreview(incomingJSON){

	//NEW ELEMENT <a> tag -> creates link for individual img
	//WHATS IN THE JSON AND APPLYING IT 
	let newPreviewLink = document.createElement("A"); 
	//Attatching ID to last part of the link created
	newPreviewLink.href = "work.html?section=item&id=" + incomingJSON["id"];

	//DIV THAT HOLDS IMG AND HEADING FOR THUMBNAIL 
	let newPreviewElement = document.createElement("DIV"); 
	newPreviewLink.appendChild(newPreviewElement); 

	//PREVIEW TITLE TEXT FOR THUMBNAIL
    //APPENDS THE TITLE TO DIV ELEMENT 
    let newPreviewTitle = document.createElement("P"); 
    newPreviewTitle.classList.add("previewTitle"); 
    newPreviewTitle.innerText = incomingJSON["name"]; 
    newPreviewElement.appendChild(newPreviewTitle); 

   //THE IMG FOR THE THUMBNAIL 
   //APPENDS THE IMG TO DIV ELEMENT
    let newPreviewThumbnail = document.createElement("IMG"); 
    newPreviewThumbnail.classList.add("thumbnail");
    //from the mentorCollection: 
    newPreviewThumbnail.src = incomingJSON["image"]; 
    newPreviewElement.appendChild(newPreviewThumbnail); 


    //EVERYTHING DISPLAYED IN GRID LAYOUT WHICH IF CLICKED OPENS UP THE LINK FOR EACH MENTOR 
    //ANCHOR ELEMENT WITH ALL THE THUMBNAIL CONTENT IS APPENDED TO ELEMENT 
    outputGridElement.appendChild(newPreviewLink);

}


//CREATING/ DISPLAYING PAGES 
//This function takes a JSON object as input, extracts relevant information 
//(title, image, and description), creates an HTML structure for  a mentor section/page,
//and appends it to a grid layout for display on a web page.

function createMentorPage(incomingJSON){

	//GETTING ITEM TITLE 
	pageTitleElement.innerText = incomingJSON["name"]; 
  pageTitleElement.classList.add("name"); 

	//DIV THAT HOLDS INFO FOR A PARTICULAR TOPIC/SECTION 
	let newMentorElement = document.createElement("DIV"); 

  // Create the grid container
  let gridContainer = document.createElement("DIV");
  gridContainer.classList.add("image-grid");

  // Assuming incomingJSON has an array of image URLs under 'images'
  let images = incomingJSON["images"];
  images.forEach((imageURL) => {
    let imgElement = document.createElement("IMG");
    imgElement.src = imageURL;
    imgElement.classList.add("grid-image");
    gridContainer.appendChild(imgElement);
  });

  // Append the grid container to the newMentorElement
  newMentorElement.appendChild(gridContainer);

  // Append the newMentorElement to the body or another container
  document.body.appendChild(newMentorElement);


   //description headline: takeways
   let descriptionHeadline1 = document.createElement("H2");
   descriptionHeadline1.innerText = "Takeaways:";
   descriptionHeadline1.classList.add("takeaway-h"); 
   newMentorElement.appendChild(descriptionHeadline1);


  // takeaways
  let newMentorInformation2 = document.createElement("P"); 
  newMentorInformation2.classList.add("takeaways"); 
  newMentorInformation2.innerText =  incomingJSON["takeaways"]; 
  newMentorElement.appendChild(newMentorInformation2); 

  //description headline: reflection
  let descriptionHeadline = document.createElement("H2");
  descriptionHeadline.innerText = "Reflection:";
  descriptionHeadline.classList.add("reflection"); 
  newMentorElement.appendChild(descriptionHeadline);

  //descriptions
	let newMentorInformation = document.createElement("P"); 
	newMentorInformation.classList.add("description"); 
	newMentorInformation.innerText =  incomingJSON["description"]; 
	newMentorElement.appendChild(newMentorInformation); 


  //DISPLAY THE ENTIRE SECTION -> APPEND THE DIV WITH ALL ELEMENTS FROM PAGE TO OVERALL 
  //MENTOR DIV 
  mentorDisplayElement.appendChild(newMentorElement);


}







