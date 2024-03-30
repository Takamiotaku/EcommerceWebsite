// Make sure to import 'Furnitures' class if it's in a separate file
// import Furnitures from "./Furniture";

async function fetchFurnitureFromAPI() {
  try {
    const response = await fetch('https://localhost/index.js/storage');
    if (!response.ok) {
      throw new Error('Failed to fetch furniture data');
    }
    const furnitureData = await response.json();

    // Assuming furnitureData is an object containing the furniture items
    return furnitureData;
  } catch (error) {
    console.error('Error fetching furniture:', error);
    return null;
  }
}

// Function to fetch furniture data and return an object containing all furniture items
async function getAllFurniture() {
  const furnitureData = await fetchFurnitureFromAPI();
  if (!furnitureData) {
    // Handle error if fetch failed
    return null;
  }

  // Assuming furnitureData is an object containing furniture items
  return furnitureData;
}

// Usage
(async () => {
  const allFurniture = await getAllFurniture();
  console.log(allFurniture); // This will log the object containing all furniture items fetched from the API
})();
