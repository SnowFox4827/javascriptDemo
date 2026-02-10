const pageInfo = document.getElementById("page-information");
const navLinks = document.querySelectorAll("#navigationBar a");

// Function to highlight active nav link
function setActiveLink(clickedLink) {
    navLinks.forEach(link => link.classList.remove("active"));
    clickedLink.classList.add("active");
}

document.getElementById("home").addEventListener("click", (e) => {
    e.preventDefault();
    setActiveLink(e.target);
    pageInfo.innerHTML = `
        <h1>EXPLORE DREAM DESTINATION</h1>
        <p>Discover new places and unforgettable experiences across the globe.</p>
        <a href="#">Book Now</a>
    `;
});

document.getElementById("about").addEventListener("click", (e) => {
    e.preventDefault();
    setActiveLink(e.target);
    pageInfo.innerHTML = `
        <h1>About Us</h1>
        <p>We help travelers find destinations that match their dreams.</p>
    `;
});

document.getElementById("contact").addEventListener("click", (e) => {
    e.preventDefault();
    setActiveLink(e.target);
    pageInfo.innerHTML = `
        <h1>Contact Us</h1>
        <p>Email us at travel@example.com or call 555-1234.</p>
    `;
});

// Load Home by default
document.getElementById("home").click();
