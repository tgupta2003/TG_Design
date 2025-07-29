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

//Loading Projects
// Only run if we're on the project.html page
if (window.location.pathname.includes("TG_Projects.html")) {
  const params = new URLSearchParams(window.location.search);
  const projectId = params.get("id");

  const projects = {
    elf: {
      title: "e.l.f. Cosmetics Brand & Experience Design",
      description: "June-July 2025: I explored the e.l.f. experience by interviewing users aged 20–50 to uncover key behaviors and preferences. The result: a case study of Gen Z-focused campaigns, interface concepts, and in-store experiences grounded in real insights.",
      tools: ["Qualitative Research", "User Interviews", "Audience Segmentation & Analysis", "Design Thinking", "Figma", "AI Image Generation", "Visual Design", "Storytelling"],
      images: [
        "Media/work/elf-3.png",
        "Media/work/elf-4.png",
        "Media/work/elf-1.png",
        "Media/work/elf-2.png", 
        "Media/work/e.l.f-cover.png",
        "Media/work/e.l.f_home.png"

      ],
      interface: "(Image 1 & 2): An emphasis on affordability + performance, which was the most defining feature of e.l.f  indicated by users. Shows immediate visual proof of quality results without compromising on price. The second tackles a key user pain point: unclear ingredients. The design makes clean, sensitivity-safe formulas easy to understand, responding to what women deemed heavily influential in their purchase decisions. ",
      visual: "(Image 3, 4, & 5): QR code designs part of posters on shelves in stores offer instant access to try-ons, tutorials, and product results across all skin types. Users don’t have to guess before they buy. The photography in the designs are generated with AI. (Image 6) Matcha Glow - one of the 3 campaign ideas I came up with targeted at a Gen Z audience. I used AI for product photography purposes to help bring my ideas to life.",
      technical: "Figma: https://www.figma.com/design/WPKrdVsX4XtEzH4ZozjKZY/Ingredient-List?t=ZLRzdmcYs3RwivXd-1",
      link1: "User Research & Analysis: https://www.figma.com/board/jO15IeKoW1n8FPO5swqpiO/e.l.f-Interview-Responses",
      link2: "Complete Presentation: https://www.canva.com/design/DAGsgGzLQx8/sUjD8e25nvf5vYXRsklS_A/view?utm_content=DAGsgGzLQx8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hde7a041f7c"
    },
    MEUF: {
      title: "MEUF Magazine Digital Design",
      description: "At MEUF Magazine, I led the web and digital design from the ground up, collaborating with the editors and creative team to bring their vision to life. I designed and built the MVP site on Squarespace, ensuring it reflected the magazine’s aesthetic, was mobile and web-friendly, and could be easily updated with new submissions. I uploaded and formatted over 100 multimedia pieces and continuously refined the site through team feedback.",
      tools: ["Web Design & Layout", "Wireframing & Prototyping", "Content Management", "Collaborative Design", "Typography & Color", "Mobile Responsiveness", "User Experience Optimization", "User Analytics","Visual Design"],
      images: [
        "Media/work/m5.png",
        "Media/work/m2.png",
        "Media/work/m3.png",
        "Media/work/m4.png",
        "Media/work/meuf1.JPG",
        "Media/work/meuf2.JPG",
        "Media/work/meuf3.JPG",
        
      ],
      interface: "I used Adobe Illustrator to create rough wireframes of the pages on the website. I then worked with the creative team and managing editors to create my first versions of the site. From the first version, I've been through 9 rounds of iterations.",
      visual: "The photos and graphics used come from a mix of our team members and external contributors. I came up with the website color palette and font family after going through the editors' vision boards and inspiration.",
      technical: "I often used Squarespace’s analytics tools to understand which pages users engaged with most, drawing insights about user behavior and experience. I then translated these findings into design improvements that enhanced navigation, content flow, and visual hierarchy.",
      link1: "Website Link: https://www.meufmagazine.com/",
      link2: "N/A",
    },
    Avenue: {
      title: "Avenue",
      description: "Avenue began as a community for undergraduate women in STEM and Finance, and has since grown into an 8-week speaker series and cohort designed to help them break into venture capital. Through expert-led sessions, mentorship, and community events, Avenue fosters access, guidance, and connection for ambitious undergraduate women.",
      tools: ["Co-Founding & Leadership", "Event Management","Program Management", "Web Development", "Branding"],
      images: [
        "Media/work/ave-vc2.png",
        "Media/work/ave-vc3.png",
        "Media/work/ave-vc1.png",
        "Media/work/ave-design.jpg",
        "Media/work/ave-web3.png",
        "Media/work/ave-web1.png",
        
      ],
      interface: "The rebrand (Images 1–4) introduces a more cohesive visual system, featuring a refined color palette (#dc4d3c and #fbeee3), consistent typefaces (Futura and Montserrat), and a unified graphic scheme. The updated design feels cleaner and more professional, while still retaining vibrancy through the orange and cream tones. In contrast, the previous interface (Images 5 & 6) - which focused more on mentorship matching - was colorful and youthful but posed challenges with responsiveness and long-term maintenance.",
      visual: "The rebrand’s visual design aims to be professional yet inviting, clean, gender-neutral, and inclusive. The new logo subtly references Manhattan’s avenue intersection signs, a nod to where we live. Earlier designs, created in Adobe Illustrator, drew inspiration from Im Sung Hwan’s rebranding of JEU D'ART and .Oddity Studio’s bar menus for the St. Regis Hong Kong.",
      technical: "HTML/CSS and Javascript to create the website from scratch.",
      link1: "Website Link: https://www.explorewithavenue.org/",
      link2: "N/A",
    },
    UberEats: {
      title: "UberEats Redesign",
      description: "As part of a competitive design summer program (IBM Accelerate), I led user research and iterative design for an UberEats accessibility redesign. The key things I introduced were food allergy filters to support the 6% of U.S. adults with dietary restrictions, added audio descriptions for visually impaired users, and increased font sizes in key areas to improve readability. While I conducted qualitative interviews and synthesized insights into personas and journey maps, I would have liked to incorporate more quantitative research and deeper problem validation to strengthen the solution further.",
      tools: ["Qualitative Research", "Accessibility Design", "User Personas & Journey Mapping", "Enterprise-Scale Design Thinking","Design Thinking","Wireframing & Prototyping","Figma","Iterative Design Process"],
      images: [
        "Media/work/ubereats1.png",
        "Media/work/ubereats2.png",
        "Media/work/jmap.png",
        "Media/work/pain-points.png",
        "Media/work/wf1.png",
        "Media/work/wf2.png",
        "Media/work/wf3.png"
      ],
      interface: "Wireframe mockups created roughly based off of interview findings. The final designs are created in Figma with the help of a food-delivery service template on Figma.",
      visual: "Stuck to the UberEats color story (#162328 and #3FC060) and typeface.",
      technical: "Use of Figma for wireframes and collection of data/ audience segmentation.",
      link1: "Figma Wireframes (Multiple Iterations): https://www.figma.com/design/FIYglJWm4TBepi65ZYbjSu/UberEats-Redesgn?node-id=0-1&p=f",
      link2: "Complete Presentation: https://www.figma.com/deck/p18Z3fYm27syxBzpLBjgWn/TG-UX-Portfolio?node-id=2-434&node-type=slide&t=I2evxAy9oXSp349S-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    },
    Myflix: {
      title: "Myflix: An Interactive Streaming Website Designed to Hit Close to Home...",
      description: "An interactive storytelling project created as my final for a web development class at NYU. Tasked with exploring a social commentary / topic we were passionate about, I drew inspiration from the Black Mirror episode “Joan is Awful” to reimagine the Netflix interface as Myflix - a platform where each user’s feed eerily mirrors their real life. In an age of hyper-personalization, this project questions how far is too far when technology blurs the line between entertainment and reality.",
      tools: ["Web Development", "Interactive Storytelling", "Prototyping", "Adobe Photoshop", "Visual Layout and Styling"],
      images: [
        "Media/work/MF1.png",
        "Media/work/kate1.png",
        "Media/work/james1.png",
        "Media/work/MF2.png",
        "Media/work/MF3.png"
      ],
      interface: "I closely modeled the interface after Netflix to enhance the satirical impact of the project. From the logo to the personalized homepage layout, every design choice intentionally mirrored the Netflix experience to make the commentary feel familiar, yet unsettling.",
      visual: "The movie cover images were altered in Photoshop to feature or resemble each user, blurring the line between viewer and the content. This personalization added an unsettling layer to the experience, reinforcing the commentary on surveillance and hyper-curation in a satirical, still humorous way.",
      technical: "Javascript Libraries, HTML/CSS/Javascript, Photo editing with Photoshop.",
      link1: "Try to see if you can figure out what’s going on in the lives of these three account holders by visiting the website: https://tgupta2003.github.io/myflix/",
      link2: "N/A",
    },
    Multimedia: {
      title: "The Mixed-Media & Advertisement Collection",
      description: "Created and photographed at the height of COVID, this collection explores the question: Will people be tempted to buy just about anything if it's presented aesthetically? I turned everyday objects into my focal features, using iPhone flashlights with colored tape, blankets, iridescent cardstock, and household items to craft makeshift set designs reimagining product advertising through a experimental lens.",
      tools: ["Creative Direction", "Product & Still-Life Photography", "Photo Editing (Adobe Photoshop)", "Lighting Design (DIY/Low-Budget Techniques)", "Branding", "Storytelling"],
      images: [
        "Media/work/chili&Co.jpg",
        "Media/work/tylenol-flowers.jpg",
        "Media/work/enchanted-flower.jpg",
      ],
      interface: "N/A",
      visual: "These images are minimally edited, relying on pure photography to capture the composition and lighting. (Image 1): Chilli&Co., (Image 2): Ty and Flowers, (Image 3): Flower Glow.",
      technical: "Set and lighting design, minimal editing on Photoshop.",
      link1: "N/A",
      link2: "N/A",
    }
  };

  const project = projects[projectId];

  if (project) {
    const container = document.getElementById("project-content");
    const imagesHTML = project.images.map(img => `<img src="${img}" class="project-image">`).join("");

    container.innerHTML = `
      <h1>${project.title}</h1>
      <p class="description">${project.description}</p>
      <ul class="tools">${project.tools.map(tool => `<li>${tool}</li>`).join("")}</ul>
      <div class="image-gallery">${imagesHTML}</div>
      <p class="interface"><strong>Interface Design:</strong> ${project.interface}</p>
      <p class="visual"><strong>Visual Design:</strong> ${project.visual}</p>
      <p class="technical"><strong>Technical:</strong> ${project.technical}</p>
      <p class="link1"><strong>Project Link1:</strong> ${project.link1}</p>
      <p class="link2"><strong>Project Link2:</strong> ${project.link2}</p>
    `
  } else {
    document.getElementById("project-content").innerHTML = "<p>Project not found.</p>";
  }
}