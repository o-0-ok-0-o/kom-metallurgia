document.addEventListener('DOMContentLoaded', function() {
    // Navigation menu active state management
    const navLinks = document.querySelectorAll('.main-nav a');
    
    // Set initial active state based on current page
    const currentPath = window.location.pathname;
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
    
    // Click handler for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // If this is just for demo purposes and we don't want to navigate
            // Uncomment the line below
            // e.preventDefault();
        });
    });
    
    // Other existing JavaScript...
    const orderButtons = document.querySelectorAll('.order-btn');
    orderButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // Order button functionality would go here
        });
    });
    
    const detailButtons = document.querySelectorAll('.details-btn');
    detailButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // Details button functionality would go here
        });
    });
});