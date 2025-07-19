// Array of project objects - each object represents one project
const projectExamples = [
    {
        title: "Dino Dash",
        description: "A sidescroller built in Pygame",
        technologies: ["MongoDB", "Pygame", "Algorithm Design"],
        githubUrl: "https://github.com/despan5/1010h-Team",
        liveDemoUrl: undefined,
        imageUrl: "images/dino_dash.png",
        completed: true
    },
    {
        title: "Cookout MVP Discord Bot",
        description: "A Discord bot designed to streamline meal planning and test the viability of a tech solution for collaborative meal organization.",
        technologies: ["Discord.js", "Python", "Supabase"],
        githubUrl: "https://github.com/ThomaseLucas/Cookout_MVP",
        liveDemoUrl: undefined,
        imageUrl: "images/Cookout_MVP.png",
        completed: false
    }
];

// Function to create HTML for the skills/technologies section
function getSkills(skills){
	// Start building the HTML string with opening div
	let html = `
	<div class="skills">
	`
	
	// Loop through each skill and create a span element for it
	skills.forEach(skill => {
		html += `<span class="skill">${skill}</span>`	
	});

	// Close the div
	html += '</div>'

	// Return the complete HTML string
	return html;
}

// Function to generate HTML for a single project card
function generateHTMLforProject(project){
	return `
	<article class="recipe-card">
		<div class="recipe-content">
		<img src=${project.imageUrl} alt=${project.description} />
		<div class="recipe-details">
        ${getSkills(project.technologies)}
		<h2>${project.title}</h2>
		<p class="description">
			${project.description}
		</p>
        <a id="github-link" href="${project.githubUrl}">
        <p class = "github-link">
        ${project.githubUrl}
        </p>
        </a>
		</div>
	</div>
  </article>`
  
}

// Function to display all projects on the page
function renderProjects(){
    // Find the container element where projects will be displayed
    const container = document.querySelector('#projects')

    // Clear any existing content
    container.innerHTML = ''

    // Loop through each project and add its HTML to the container
    projectExamples.forEach(project => {
        container.innerHTML += generateHTMLforProject(project)
    });
};

// Run the function to display projects when the file loads
renderProjects();