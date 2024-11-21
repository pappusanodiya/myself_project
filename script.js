// About Me details
const aboutMe = {
    name: "Pappu Sanodiya",
    role: "DevOps Engineer",
    company: "Defenzelite Private Limited",
    location: "Headquarters in Seoni, MP",
  };
  
  // Render About Me details in the paragraph
  const aboutParagraph = document.getElementById("about");
  aboutParagraph.textContent = `Hello, my name is ${aboutMe.name} and I am a ${aboutMe.role} at ${aboutMe.company}, located in ${aboutMe.location}.`;