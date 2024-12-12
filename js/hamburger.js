document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const hamburgerIcon = document.getElementById("hamburger-icon");
    const navigationMenu = document.querySelector(".navigation");
    const reserveButton = document.querySelector(".reserve-button");
    const overlay = document.querySelector(".header-overlay");
    const body = document.body;

    let scrollPosition = 0;

    hamburger.addEventListener("click", function() {
        if (hamburgerIcon.dataset.state === "closed") {
            // Save the current scroll position
            scrollPosition = window.scrollY;

            // Open the menu and show overlay
            hamburgerIcon.src = "Fotografie/close.png";
            hamburgerIcon.dataset.state = "open";
            navigationMenu.classList.add("open");
            reserveButton.classList.add("open");
            overlay.classList.add("open");

            // Lock body to prevent scrolling
            body.style.position = 'fixed';
            body.style.top = `-${scrollPosition}px`;
            body.style.width = '100%';
        } else {
            // Close the menu and hide overlay
            hamburgerIcon.src = "Fotografie/hamburger.png";
            hamburgerIcon.dataset.state = "closed";
            navigationMenu.classList.remove("open");
            reserveButton.classList.remove("open");
            overlay.classList.remove("open");

            // Unlock body to allow scrolling
            body.style.position = '';
            body.style.top = '';
            body.style.width = '';

            // Restore the saved scroll position
            window.scrollTo(0, scrollPosition);
        }
    });

    // Close menu if overlay is clicked
    overlay.addEventListener("click", function() {
        hamburgerIcon.src = "Fotografie/hamburger.png";
        hamburgerIcon.dataset.state = "closed";
        navigationMenu.classList.remove("open");
        reserveButton.classList.remove("open");
        overlay.classList.remove("open");

        // Unlock body to allow scrolling
        body.style.position = '';
        body.style.top = '';
        body.style.width = '';

        // Restore the saved scroll position
        window.scrollTo(0, scrollPosition);
    });
});
