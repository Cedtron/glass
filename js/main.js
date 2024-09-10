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
    function showService(service) {
        var serviceTitle = document.getElementById("serviceTitle");
        var serviceDescription = document.getElementById("serviceDescription");
        var serviceImage = document.getElementById("serviceImage");
  
        // Remove the active class from all items
        var serviceItems = document.querySelectorAll('.service-list-item');
        serviceItems.forEach(function(item) {
          item.classList.remove('active-service');
        });
  
        // Change content based on the selected service
        if (service === 'architecture') {
          serviceTitle.innerText = 'Architectural Designs';
          serviceDescription.innerText = 'We provide modern, functional, and aesthetic architectural designs for residential and commercial projects.';
          serviceImage.src = 'assets/Architecture.jpg'; // Replace with actual image path for Architectural Designs
          document.getElementById('architecture-item').classList.add('active-service');
        } else if (service === 'plumbing') {
          serviceTitle.innerText = 'Plumbing Services';
          serviceDescription.innerText = 'Our expert plumbers offer installation, maintenance, and repair services for all types of plumbing systems.';
          serviceImage.src = 'assets/plumbing.jpg'; // Replace with actual image path for Plumbing
          document.getElementById('plumbing-item').classList.add('active-service');
        }
        // Add more services as needed
      }