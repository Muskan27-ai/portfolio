// Fetch bed availability data from the API
async function fetchBedData() {
    try {
      const response = await fetch("beds_api.php"); // API endpoint
      const data = await response.json();
  
      if (data.error) {
        // Handle error
        document.getElementById("total-beds").textContent = "Error fetching data";
        document.getElementById("available-beds").textContent = "Error";
        document.getElementById("occupied-beds").textContent = "Error";
        console.error(data.error);
      } else {
        // Populate the data on the frontend
        document.getElementById("total-beds").textContent = data.total_beds;
        document.getElementById("available-beds").textContent = data.available_beds;
        document.getElementById("occupied-beds").textContent = data.occupied_beds;
      }
    } catch (error) {
      console.error("Error fetching bed data:", error);
      document.getElementById("total-beds").textContent = "Error fetching data";
      document.getElementById("available-beds").textContent = "Error";
      document.getElementById("occupied-beds").textContent = "Error";
    }
  }
  
  // Call the function to fetch and display bed data
  fetchBedData();
  