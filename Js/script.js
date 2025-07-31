document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navList = document.querySelector('.nav-list');
    const header = document.querySelector('.header'); // Added to get header height for positioning

    hamburgerMenu.addEventListener('click', () => {
        navList.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');

        // Optional: Adjust navList top position dynamically based on header height
        // This can be useful if your header height changes
        if (navList.classList.contains('active')) {
            const headerHeight = header.offsetHeight;
            navList.style.top = `${headerHeight}px`;
        } else {
            navList.style.top = ''; // Reset when not active
        }
    });

    // Close menu when a navigation link is clicked (for smoother mobile experience)
    navList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
                hamburgerMenu.classList.remove('active');
                navList.style.top = ''; // Reset position
            }
        });
    });

    // Close menu if clicking outside of it (optional but good for UX)
    document.addEventListener('click', (event) => {
        if (!navList.contains(event.target) && !hamburgerMenu.contains(event.target) && navList.classList.contains('active')) {
            navList.classList.remove('active');
            hamburgerMenu.classList.remove('active');
            navList.style.top = ''; // Reset position
        }
    });
});