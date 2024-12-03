// Simple user authentication simulation
let users = [];

function toggleForms() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    
    loginForm.classList.toggle('hidden');
    registerForm.classList.toggle('hidden');
}

function register() {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;


    if (!email.includes('@')) {
        alert('Please enter a valid email address.');
        return;
    }

    const existingUser  = users.find(user => user.email === email);
    if (existingUser ) {
        alert('User  already exists. Please login.');
        return;
    }

    // Register user
    users.push({ email, password });
    alert('Registration successful! Please log in.');
    toggleForms();
}

function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Check user credentials
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        alert('Login successful! Redirecting to resume builder...');
        window.location.href = 'resume.html'; // Redirect to resume builder
    } else {
        alert('Invalid email or password. Please try again.');
    }
}



let personalInfo = {};
let educationInfo = {};


// Function to save personal information and show the education section
function checkPersonalInfoFields() {
    const fname = document.getElementById('fname').value;
    const mname = document.getElementById('mname').value;
    const lname = document.getElementById('lname').value;
    const position = document.getElementById('position').value;
    const contact = document.getElementById('contact').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const objective = document.getElementById('Objective').value;

    const saveNextBtn = document.getElementById('save-next-btn');

  
    // Enable the button if all fields are filled, otherwise disable it
    if (fname && mname && lname && position && contact && email && address  && objective) {
       
        saveNextBtn.disabled = false;
       
    } else {
        saveNextBtn.disabled = true;
    }
}



// Function to save personal information and show the education section
function savePersonalInfo() {
    // Save personal info
    personalInfo.firstName = document.getElementById('fname').value;
    personalInfo.middleName = document.getElementById('mname').value;
    personalInfo.lastName = document.getElementById('lname').value;
    personalInfo.position = document.getElementById('position').value;
    personalInfo.contact = document.getElementById('contact').value;
    personalInfo.email = document.getElementById('email').value;
    personalInfo.address = document.getElementById('address').value;
    personalInfo.objective = document.getElementById('Objective').value;

    // Hide personal info section and show education section
    document.getElementById('personal-info').classList.add('hidden');
    document.getElementById('education-info').classList.remove('hidden');
}


document.getElementById('fname').addEventListener('input', checkPersonalInfoFields);
document.getElementById('mname').addEventListener('input', checkPersonalInfoFields);
document.getElementById('lname').addEventListener('input', checkPersonalInfoFields);
document.getElementById('position').addEventListener('input', checkPersonalInfoFields);
document.getElementById('contact').addEventListener('input', checkPersonalInfoFields);
document.getElementById('email').addEventListener('input', checkPersonalInfoFields);
document.getElementById('address').addEventListener('input', checkPersonalInfoFields);
document.getElementById('Objective').addEventListener('input', checkPersonalInfoFields);








// Function to check if all fields in the last education entry are filled
function checkEducationFields() {
    const educationEntries = document.querySelectorAll('.education-entry');
    const saveEducationBtn = document.getElementById('save-education-btn');

    // Check if all fields in the last entry are filled
    const lastEntry = educationEntries[educationEntries.length - 1];
    const clgName = lastEntry.querySelector('.clg-name').value;
    const course = lastEntry.querySelector('.course').value;
    const percentage = lastEntry.querySelector('.percentage').value;
    const session = lastEntry.querySelector('.session').value;

    // Enable the button if all fields are filled, otherwise disable it
    saveEducationBtn.disabled = !(clgName && course && percentage && session);
}

// Function to add a new education entry
function addEducation() {
    const educationFieldsContainer = document.getElementById('education-fields');

    // Create a new education entry
    const newEntry = document.createElement('div');
    newEntry.classList.add('education-entry','columns-4');

    newEntry.innerHTML = `
        <label for="" class="form-label">Institute Name</label>
        <input type="text" class="clg-name border border-gray-400 p-2 mb-4 w-full" placeholder="Institute Name" required oninput="checkEducationFields()">

        <label for="" class="form-label">Degree</label>
        <input type="text" class="course border border-gray-400 p-2 mb-4 w-full" placeholder="Course Name" required oninput="checkEducationFields()">

        <label for="" class="form-label">Percentage</label>
        <input type="number" class="percentage border border-gray-400 p-2 mb-4 w-full" placeholder="Percentage/CGPA" required oninput="checkEducationFields()">

        <label for="" class="form-label">Session</label>
        <input type="text" class="session border border-gray-400 p-2 mb-4 w-full" placeholder="Session" required oninput="checkEducationFields()">
    `;

    // Append the new entry to the education fields container
    educationFieldsContainer.appendChild(newEntry);


    newEntry.querySelector('.clg-name').addEventListener('input', checkEducationFields);
    newEntry.querySelector('.course').addEventListener('input', checkEducationFields);
    newEntry.querySelector('.percentage').addEventListener('input', checkEducationFields);
    newEntry.querySelector('.session').addEventListener('input', checkEducationFields);
}

// Function to clear education input fields
function clearEducationFields() {
    document.getElementById('clg-name').value = '';
    document.getElementById('course').value = '';
    document.getElementById('percentage').value = '';
    document.getElementById('session').value = '';
}

// Function to go back to the personal info section
function backToPrevious() {
    // Hide education section and show personal info section
    document.getElementById('education-info').classList.add('hidden');
    document.getElementById('personal-info').classList.remove('hidden');
}

// Function to save education info and show experience section
function saveEducationInfo() {
    // Hide education section and show experience section
    document.getElementById('education-info').classList.add('hidden');
    document.getElementById('experience-info').classList.remove('hidden');
}

// Add event listeners to input fields to check for changes
// document.getElementById('clg-name').addEventListener('input', checkEducationFields);
// document.getElementById('course').addEventListener('input', checkEducationFields);
// document.getElementById('percentage').addEventListener('input', checkEducationFields);
// document.getElementById('session').addEventListener('input', checkEducationFields);

let experiences = [];

function addExperience() {
    const experienceFields = document.getElementById('experience-list');
    const newEntry = document.createElement('div');
    newEntry.classList.add('experience-entry', 'mb-4');
    newEntry.innerHTML = `
        <label for="comp-name">Company Name</label>
        <input type="text" class="comp-name border border-gray-400 p-2 mb-4 w-full" placeholder="Company Name" required>

        <label for="position">Designation</label>
        <input type="text" class="position border border-gray-400 p-2 mb-4 w-full" placeholder="Designation" required>

        <label for="from">Joining Date</label>
        <input type="date" class="from border border-gray-400 p-2 mb-4 w-full" required>

        <label for="ending">Ending Date</label>
        <input type="date" class="ending border border-gray-400 p-2 mb-4 w-full"   >

        

        <textarea class="experience border border-gray-400 p-2 mb-4 w-full" placeholder="Your Experience" rows="4" required></textarea>
        
        <button type="button" onclick="removeExperience(this)" class="bg-red-500 text-white p-2 rounded w-20 mb-6">Remove</button>
    `;

    experienceFields.appendChild(newEntry);
}

// function toggleEndingDate(checkbox) {
//     const endingDateInput = checkbox.closest('.experience-item').querySelector('.ending');
//     if (checkbox.checked) {
//         endingDateInput.value = ''; 
//         endingDateInput.disabled = true; 
//     } else {
//         endingDateInput.disabled = false; 
//     }
// }

// function checkEndingDate(input) {
//     const checkbox = input.closest('.experience-item').querySelector('.present');
//     if (input.value) {
//         checkbox.checked = false; 
//         checkbox.disabled = true; 
//     } else {
//         checkbox.disabled = false; 
//     }
// }

function removeExperience(button) {
    const experienceItem = button.parentElement;
    experienceItem.remove();
}

function saveAndNext() {
    // const experienceItems = document.querySelectorAll('.experience-item');
    // experiences = [];

    // let allExperienceFilled = true; 

    // experienceItems.forEach(item => {
    //     const companyName = item.querySelector('.comp-name').value;
    //     const designation = item.querySelector('.position').value;
    //     const joiningDate = item.querySelector('.from').value;
    //     const endingDate = item.querySelector('.ending').value;
    //     const currentlyWorking = item.querySelector('.present').checked;
    //     const experienceText = item.querySelector('.experience').value;

    //     // Check if all required fields are filled
    //     if (companyName && designation && joiningDate && experienceText) {
    //         experiences.push({
    //             companyName,
    //             designation,
    //             joiningDate,
    //             endingDate: currentlyWorking ? null : endingDate, // Set to null if currently working
    //             currentlyWorking,
    //             experienceText
    //         });
    //     } else {
    //         allExperienceFilled = false;
    //     }
    // });

    // if (!allExperienceFilled) {
    //     alert("Please fill in all experience fields before proceeding.");
    //     return; // Stop the function if experience fields are incomplete
    // }


    document.getElementById('experience-info').classList.add('hidden');
    document.getElementById('skills-info').classList.remove('hidden');
}

function goBack() {
    document.getElementById('experience-info').classList.add('hidden');
    document.getElementById('education-info').classList.remove('hidden');
}



function addSkills() {
    const skillsFields = document.getElementById('skills-list');
    const newEntry = document.createElement('div');
    newEntry.classList.add('skill-entry', 'mb-4');

    newEntry.innerHTML = `
       
        <input type="text" class="skill-name border border-gray-400 p-2 mb-4 w-full" placeholder="Skill Name" required>

        <button type="button" onclick="removeSkill(this)" class="bg-red-500 text-white p-2 rounded w-20 mb-6">Remove</button>
    `;

    skillsFields.appendChild(newEntry);
}

function removeSkill(button) {
    const skillEntry = button.parentElement;
    skillEntry.remove();
}



function toPriviouspage() {
    document.getElementById('skills-info').classList.add('hidden');
    document.getElementById('experience-info').classList.remove('hidden');
}


function saveSkills() {
    
    document.getElementById('skills-info').classList.add('hidden');
    document.getElementById('projects-info').classList.remove('hidden');
}





function addProject() {
    const projectsFields = document.getElementById('projects-list');
    const newEntry = document.createElement('div');
    newEntry.classList.add('project-entry', 'mb-4');

    newEntry.innerHTML = `
        <label for="project-name">Project Name</label>
        <input type="text" class="project-name border border-gray-400 p-2 mb-4 w-full" placeholder="Project Name" required>

        <label for="project-description">Project Description</label>
        <textarea class="project-description border border-gray-400 p-2 mb-4 w-full" placeholder="Project Description" rows="4" required></textarea>

        <label for="project-link">Project Link</label>
        <input type="url" class="project-link border border-gray-400 p-2 mb-4 w-full" placeholder="Project Link (optional)">

        <button type="button" onclick="removeProject(this)" class="bg-red-500 text-white p-2 rounded w-20 mb-6">Remove</button>
    `;

    projectsFields.appendChild(newEntry);
}

function removeProject(button) {
    const projectEntry = button.parentElement;
    projectEntry.remove();
}

function toback() {
    document.getElementById('projects-info').classList.add('hidden');
    document.getElementById('skills-info').classList.remove('hidden');
}


function saveProjects(){
    document.getElementById('projects-info').classList.add('hidden');
    document.getElementById('achievements-info').classList.remove('hidden');
}





function addAchievement() {
    const achievementsFields = document.getElementById('achievements-list');
    const newEntry = document.createElement('div');
    newEntry.classList.add('achievement-entry', 'mb-4');

    newEntry.innerHTML = `
        <label for="achievement-title">Achievement Title</label>
        <input type="text" class="achievement-title border border-gray-400 p-2 mb-4 w-full" placeholder="Achievement Title" required>

        <label for="achievement-description">Achievement Description</label>
        <textarea class="achievement-description border border-gray-400 p-2 mb-4 w-full" placeholder="Achievement Description" rows="4" required></textarea>

        <button type="button" onclick="removeAchievement(this)" class="bg-red-500 text-white p-2 rounded w-20 mb-6">Remove</button>
    `;

    achievementsFields.appendChild(newEntry);
}

function removeAchievement(button) {
    const achievementEntry = button.parentElement;
    achievementEntry.remove();
}

function goToPriviousPage(){
    document.getElementById('achievements-info').classList.add('hidden');
    document.getElementById('projects-info').classList.remove('hidden'); 
}


 // Add event listeners to buttons
 const generateResumeBtn = document.getElementById('generate-resume-btn');
 if (generateResumeBtn) {
     generateResumeBtn.addEventListener('click', generateResume);
 } else {
     console.error("Button with ID 'generate-resume-btn' not found.");
 }



function generateResume() {
    // Personal Information
    const fname = document.getElementById('fname').value;
    const mname = document.getElementById('mname').value;
    const lname = document.getElementById('lname').value;
    const position = document.getElementById('position').value;
    const contact = document.getElementById('contact').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value; // Address field reused
    const summary = document.getElementById('Objective').value;

    // Fill Personal Information in Preview
    document.getElementById('preview-name').innerText = `${fname} ${mname} ${lname}`;
    document.getElementById('preview-Deg').innerText =  position;
    document.getElementById('preview-email').innerText = `Email: ${email}`;
    document.getElementById('preview-contact').innerText = `Contact: ${contact}`;
    document.getElementById('preview-address').innerText = `Address: ${address}`;
    document.getElementById('preview-summary').innerText = summary;

    // Education Section
    const educationEntries = document.querySelectorAll('.education-entry');
    const educationPreview = document.querySelector('.education-info-preview');
    educationPreview.innerHTML = ' <h4 class="font-semibold mt-4 bg-teal-500  text-white text-center">Education</h4>'; // Clear preview and add title

    educationEntries.forEach(entry => {
        const clgName = entry.querySelector('.clg-name').value;
        const degree = entry.querySelector('.course').value;
        const percentage = entry.querySelector('.percentage').value;
        const session = entry.querySelector('.session').value;

        // Append each education entry to the preview
        educationPreview.innerHTML += `
            <p>Institute: ${clgName}</p>
            <p>Degree: ${degree}</p>
            <p>Percentage: ${percentage}</p>
            <p>Session: ${session}</p>
        `;
    });

    // Experience Section
    const experienceEntries = document.querySelectorAll('.experience-entry');
    const experiencePreview = document.querySelector('.exprience-info-preview');
    experiencePreview.innerHTML = '<h4 class="font-semibold mt-4 bg-teal-500  text-white text-center">Experience</h4>'; // Clear preview and add title

    experienceEntries.forEach(entry => {
        const companyName = entry.querySelector('.comp-name').value;
        const designation = entry.querySelector('.position').value;
        const fromDate = entry.querySelector('.from').value;
        const toDate = entry.querySelector('.ending').value;
        const description = entry.querySelector('.experience').value;

        // Append each experience entry to the preview
        experiencePreview.innerHTML += `
            <p>Company: ${companyName}</p>
            <p>Designation: ${designation}</p>
            <p>From: ${fromDate} To: ${toDate}</p>
            <p>Description: ${description}</p>
        `;
    });

    // Skills Section
    const skillEntries = document.querySelectorAll('.skill-entry .skill-name');
    const skillsPreview = document.querySelector('.skills-info-preview');
    skillsPreview.innerHTML = '<h4 class="font-semibold mt-4 bg-teal-500 text-white text-center">Skills</h4>'; // Clear preview and add title

    skillEntries.forEach(skill => {
        skillsPreview.innerHTML += `<p>${skill.value}</p>`;
    });

    // Projects Section
    const projectEntries = document.querySelectorAll('.project-entry');
    const projectsPreview = document.querySelector('.project-info-preview');
    projectsPreview.innerHTML = ' <h4 class="font-semibold mt-4 bg-teal-500 text-white text-center">Projects</h4>'; // Clear preview and add title

    projectEntries.forEach(project => {
        const projectName = project.querySelector('.project-name').value;
        const projectDescription = project.querySelector('.project-description').value;
        const projectLink = project.querySelector('.project-link').value;

        // Append each project entry to the preview
        projectsPreview.innerHTML += `
            <p>Project Name: ${projectName}</p>
            <p>Description: ${projectDescription}</p>
            <p>Link: ${projectLink}</p>
        `;
    });

    // Achievements Section
    const achievementEntries = document.querySelectorAll('.achievement-entry');
    const achievementsPreview = document.querySelector('.achivement-info-preview');
    achievementsPreview.innerHTML = '<h4 class="font-semibold mt-4 bg-teal-500 text-white text-center">Achivement</h4>'; // Clear preview and add title

    achievementEntries.forEach(achievement => {
        const title = achievement.querySelector('.achievement-title').value;
        const description = achievement.querySelector('.achievement-description').value;

        // Append each achievement entry to the preview
        achievementsPreview.innerHTML += `
            <p>Title: ${title}</p>
            <p>Description: ${description}</p>
        `;
    });

    
   
    document.getElementById('achievements-info').classList.add('hidden');
    document.getElementById('resume-preview').classList.remove('hidden');
    document.getElementById('job-suggestions-info').classList.remove('hidden');
}

// Print Resume Function
function printResume() {
    window.print();
}




// Function to download the resume as a PDF
function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

  
    const name = document.getElementById('preview-name').innerText;
    const degree = document.getElementById('preview-Deg').innerText;
    const email = document.getElementById('preview-email').innerText;
    const contact = document.getElementById('preview-contact').innerText;
    const address = document.getElementById('preview-address').innerText;
    const summary = document.getElementById('preview-summary').innerText;

  
    let content = `Name: ${name}\n`;
    content += `Degree: ${degree}\n`;
    content += `${email}\n`;
    content += `${contact}\n`;
    content += `${address}\n\n`;
    content += `Objective: ${summary}\n\n`;


    const educationPreview = document.querySelector('.education-info-preview');
    content += educationPreview.innerText + '\n\n';

 
    const experiencePreview = document.querySelector('.exprience-info-preview');
    content += experiencePreview.innerText + '\n\n';

  
    const skillsPreview = document.querySelector('.skills-info-preview');
    content += skillsPreview.innerText + '\n\n';
    const projectsPreview = document.querySelector('.project-info-preview');
    content += projectsPreview.innerText + '\n\n';
    const achievementsPreview = document.querySelector('.achivement-info-preview');
    content += achievementsPreview.innerText + '\n\n';
    doc.text(content, 10, 10);
    doc.save('resume.pdf');
}