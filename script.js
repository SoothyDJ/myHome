// Sample data for listings
const listingsData = [
    { title: "Item 1", description: "Description 1" },
    { title: "Item 2", description: "Description 2" },
    { title: "Item 3", description: "Description 3" },
  ];
  

  
  // Function to generate listings HTML
  function generateListingsHTML() {
    const listingsContainer = document.getElementById("sectionContainers");
  
    // Clear previous listings
    listingsContainer.innerHTML = "";
  
    // Generate new listings
    listingsData.forEach((listing) => {
      const listingHTML = `
        <div class="listing">
          <h2>${listing.title}</h2>
          <p>${listing.description}</p>
        </div>
      `;
      listingsContainer.innerHTML += listingHTML;
    });
  }
  
  // Call the function to generate initial listings
  generateListingsHTML();
  