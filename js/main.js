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
 


    $(document).ready(function() {
      $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1 // 1 item for mobile
          },
          768: {
            items: 2 // 2 items for tablets
          },
          1024: {
            items: 4 // 4 items for desktop
          }
        }
      });
    });

    // Function to show selected service details and update gallery
// Initialize current index for the slider
// Initialize current index for the slider
let currentIndex = 0;

// Function to show the selected service
function showService(serviceKey) {
    const service = services[serviceKey];

    // Update service title and description
    document.getElementById('serviceTitle').innerText = service.title;
    document.getElementById('serviceDescription').innerText = service.description;

    // Highlight the active service item
    const serviceItems = document.querySelectorAll('.service-list-item');
    serviceItems.forEach(item => item.classList.remove('active-service'));
    document.getElementById(`${serviceKey}-item`).classList.add('active-service');

    // Update slider with images
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; // Clear previous images
    service.images.forEach((image) => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.alt;
        imgElement.onclick = () => myFunction(imgElement, image.alt, image.photographer);
        gallery.appendChild(imgElement);
    });

    // Show the first thumbnail by default
    if (service.images.length > 0) {
        myFunction(gallery.children[0], service.images[0].alt, service.images[0].photographer);
    }

    currentIndex = 0;
    updateSliderPosition();
}

// Function to update the slider position
function updateSliderPosition() {
    const slider = document.getElementById('gallery');
    const totalImages = slider.children.length;
    const containerWidth = document.querySelector('.thumbnail-slider').offsetWidth; // Adjust the container class if necessary
    const offset = -currentIndex * containerWidth;
    slider.style.transform = `translateX(${offset}px)`;
}

// Function to show the full image and details
function myFunction(img, altText, photographer) {
    const expandedImg = document.getElementById('expandedImg');
    const imgText = document.getElementById('imgtext');
    const container = document.getElementById('imageContainer');
    expandedImg.src = img.src;
    imgText.innerHTML = `${altText} <br> <strong>Made by :</strong> ${photographer}`;
    container.style.display = 'block'; // Show the image container
}

// Initialize default service (architecture) on page load
window.onload = function() {
    showService('architecture'); // This will display the thumbnails on page load
};

    const productsPerPage = 6; // Number of products per page
    let currentPage = 1; // Current page number
    let filteredProducts = products; // Default filtered products (all products)
  
    // Function to render products based on page and search input
    function renderProducts(productsToShow, page = 1) {
      const productGrid = document.getElementById('productGrid');
      productGrid.innerHTML = ''; // Clear previous products
  
      const startIndex = (page - 1) * productsPerPage;
      const endIndex = page * productsPerPage;
      const paginatedProducts = productsToShow.slice(startIndex, endIndex);
  
      paginatedProducts.forEach(product => {
        const productCard = `
          <div class="col">
            <div class="card">
              <img src="${product.image}" alt="${product.name}" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="price">Ugx ${product.price.toFixed(2)}</p>
                <p>${product.description}</p>
                <button class="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        `;
        productGrid.innerHTML += productCard;
      });
    }
  
    // Function to render pagination
    function renderPagination(totalProducts, page = 1) {
      const totalPages = Math.ceil(totalProducts / productsPerPage);
      const pagination = document.getElementById('pagination');
      pagination.innerHTML = ''; // Clear previous pagination
  
      for (let i = 1; i <= totalPages; i++) {
        const activeClass = i === page ? 'active' : '';
        const paginationButton = `
          <li class="page-item ${activeClass}">
            <a class="page-link" href="#" onclick="goToPage(${i})">${i}</a>
          </li>
        `;
        pagination.innerHTML += paginationButton;
      }
    }
  
    // Function to handle search input
    document.getElementById('searchInput').addEventListener('input', function () {
      const searchValue = this.value.toLowerCase();
      filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchValue)
      );
      currentPage = 1; // Reset to first page on search
      renderProducts(filteredProducts, currentPage);
      renderPagination(filteredProducts.length, currentPage);
    });
  
    // Function to go to a specific page
    function goToPage(page) {
      currentPage = page;
      renderProducts(filteredProducts, page);
      renderPagination(filteredProducts.length, page);
    }
  
    // Initial rendering of products and pagination
    window.onload = function () {
      renderProducts(products, currentPage);
      renderPagination(products.length, currentPage);
    };