document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('nav ul li a');
    const main = document.querySelector('main');

    // About Me
    const aboutContainer = document.createElement("div");
    aboutContainer.innerHTML = `
        <div style="background-color: #fff; color: #000; padding: 20px; border-radius: 10px; max-width: 500px; margin: 20px auto;">
            <h2>Home:</h2>
            <p><strong>Name:</strong> Riddhi Ashar</p>
            <p><strong>College Year:</strong> 2nd Year</p>
            <p><strong>Interests:</strong> Web Development, Problem Solving</p>
            <p><strong>Career Goals:</strong> To become a skilled Full Stack Developer and create impactful, user-friendly applications.</p>
        </div>
    `;
    aboutContainer.style.display = "none";
    main.insertBefore(aboutContainer, main.firstChild);

    // Soft Skills
    const skillsContainer = document.createElement("div");
    skillsContainer.innerHTML = `
        <div style="background-color: #fff; color: #000; padding: 20px; border-radius: 10px; max-width: 500px; margin: 20px auto;">
            <h2>Soft Skills</h2>
            <ul>
                <li>Hardworking</li>
                <li>Problem-Solving</li>
                <li>Teamwork</li>
                <li>Time Management</li>
                <li>Adaptability</li>
            </ul>
        </div>
    `;
    skillsContainer.style.display = "none";
    main.insertBefore(skillsContainer, main.firstChild);

    // Education
    const educationContainer = document.createElement("div");
    educationContainer.innerHTML = `
        <div style="background-color: #fff; color: #000; padding: 20px; border-radius: 10px; max-width: 500px; margin: 20px auto;">
            <h2>Education</h2>
            <p><strong>School:</strong> Swami Vivekanand International School</p>
            <p><strong>Junior College:</strong> Nirmala Memorial Foundation Junior College</p>
            <p><strong>Engineering College:</strong> Dwarkadas J. Sanghvi College of Engineering</p>
        </div>
    `;
    educationContainer.style.display = "none";
    main.insertBefore(educationContainer, main.firstChild);

    // Contact
    const contactContainer = document.createElement("div");
    contactContainer.innerHTML = `
        <div style="background-color: #fff; color: #000; padding: 20px; border-radius: 10px; max-width: 500px; margin: 20px auto;">
            <h2>Contact Me</h2>
            <p><strong>Phone:</strong> 8976450060</p>
            <p><a href="https://www.linkedin.com/in/riddhi-ashar-26509a315" target="_blank">LinkedIn</a></p>
            <p><a href="https://mail.google.com/mail/?view=cm&fs=1&to=asharriddhi50@gmail.com" target="_blank">asharriddhi50@gmai.com</a></p>
        </div>
    `;
    contactContainer.style.display = "none";
    main.insertBefore(contactContainer, main.firstChild);

    // Handle nav clicks
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const text = link.textContent.trim().toLowerCase();

            // Hide all sections first
            aboutContainer.style.display = "none";
            skillsContainer.style.display = "none";
            educationContainer.style.display = "none";
            contactContainer.style.display = "none";

            // Show selected
            if (text === "home") {
                aboutContainer.style.display = "block";
            }
            else if (text === "skills") {
                skillsContainer.style.display = "block";
            }
            else if (text === "education") { 
                educationContainer.style.display = "block";
            }
            else if (text === "contact me") {
                contactContainer.style.display = "block";
            }
        });
    });
});