      function showContent(section, element) {
        // Hide all sections
        document.querySelectorAll('.section').forEach((sec) => {
            sec.style.display = 'none'; // hide section
            sec.classList.remove('show'); // remove show class for animation
        });

        // Show the selected section with animation
        const selectedSection = document.getElementById(section + '-section');
        selectedSection.style.display = 'block'; // show section
        setTimeout(() => {
            selectedSection.classList.add('show'); // trigger animation
        }, 10); // Small timeout to ensure transition triggers after display change

        // Remove 'active' class from all links
        document.querySelectorAll('.nav-link').forEach((link) => {
            link.classList.remove('active');
        });

        // Add 'active' class to the clicked link
        element.classList.add('active');
    }