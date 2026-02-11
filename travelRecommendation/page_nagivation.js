const pageInfo = document.getElementById("page-information");
const navLinks = document.querySelectorAll("#navigationBar a");

// Function to highlight active nav link
function setActiveLink(clickedLink) {
    navLinks.forEach(link => link.classList.remove("active"));
    clickedLink.classList.add("active");
}

const pages = {
    home: `
        <h1>EXPLORE DREAM DESTINATION</h1>
        <p>Discover new places and unforgettable experiences across the globe.</p>
        <a href="#">Book Now</a>
    `,
    about: `
        <h1>About Us</h1>
        <p>We help travelers find destinations that match their dreams.</p>
    `,
    contact: `
        <h1>Contact Us</h1>
        <p>Email us at travel@example.com or call 555-1234.</p>
    `
};

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const id = e.currentTarget.id;

        setActiveLink(e.currentTarget);
        pageInfo.innerHTML = pages[id];
    });
});

// Load Home by default
document.getElementById("home").click();