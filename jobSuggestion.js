const jobSuggestionsDisplayContainer = document.getElementById("jobSuggestionsDisplayContainer");

// Function to fetch job suggestions based on job title
async function fetchJobSuggestions(jobTitle) {
    const url = 'https://indeed-jobs-scraper-api.p.rapidapi.com/api/job/%7Bid%7D';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '1680381a92msh50bbd6ac3fccfb4p1187a8jsnde1b3af1ccef',
		'x-rapidapi-host': 'indeed-jobs-scraper-api.p.rapidapi.com'
	}
};


    try {
        const response = await fetch(url, options);
         console.log(response);
         
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json(); 
        displayJobSuggestions(data);
    } catch (error) {
        console.error('Error fetching job suggestions:', error);
        jobSuggestionsDisplayContainer.innerHTML = `<p class="text-red-500">Failed to fetch job suggestions. Please try again later.</p>`;
    }
}

// Function to display job suggestions in the UI
function displayJobSuggestions(data) {
    if (data && data.jobs && data.jobs.length > 0) {
        const suggestions = data.jobs.map(job => {
            return `<div class="border p-4 mb-2">
                        <h4 class="font-bold">${job.title}</h4>
                        <p>Company: ${job.company}</p>
                        <p>Location: ${job.location}</p>
                        <p>Salary: ${job.salary || 'Not specified'}</p>
                    </div>`;
        }).join('');
        jobSuggestionsDisplayContainer.innerHTML = suggestions;
    } else {
        jobSuggestionsDisplayContainer.innerHTML = `<p>No job suggestions found.</p>`;
    }
}

// Function to handle job suggestion based on position and skills
function handleJobSuggestion() {
    const jobTitle = document.getElementById('position').value;
    const skills = Array.from(document.querySelectorAll('.skill-name')).map(skill => skill.value).filter(skill => skill.trim() !== '');

    if (jobTitle || skills.length > 0) {
        const combinedJobTitle = jobTitle + (skills.length > 0 ? ' with skills: ' + skills.join(', ') : '');
        fetchJobSuggestions(combinedJobTitle);
    } else {
        jobSuggestionsDisplayContainer.innerHTML = `<p>Please enter a position or skills to get job suggestions.</p>`;
    }
}


document.getElementById('preview-Deg').addEventListener('input', handleJobSuggestion);
document.getElementById('preview-skills').addEventListener('input', handleJobSuggestion);


document.getElementById("jobSuggestionButton").addEventListener("click", handleJobSuggestion);