
// Import the functions to be tested
const { fetchFurnitureFromAPI, getAllFurniture } = require('./instantobjects.js'); // Update 'yourFile.js' with the correct path

describe('fetchFurnitureFromAPI', () => {
  test('should fetch furniture data from API successfully', async () => {
    // Mocking fetch function to return a successful response
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ /* mocked furniture data */ }),
    });

    const furnitureData = await fetchFurnitureFromAPI();
    expect(furnitureData).toEqual({ /* expected furniture data */ });

    // Clearing the mocked fetch function
    global.fetch.mockClear();
    delete global.fetch;
  });

  test('should handle error when fetching furniture data from API', async () => {
    // Mocking fetch function to return an unsuccessful response
    global.fetch = jest.fn().mockRejectedValue(new Error('Failed to fetch'));

    const furnitureData = await fetchFurnitureFromAPI();
    expect(furnitureData).toBeNull();

    // Clearing the mocked fetch function
    global.fetch.mockClear();
    delete global.fetch;
  });
});

describe('getAllFurniture', () => {
  test('should return all furniture items when fetch is successful', async () => {
    // Mocking fetchFurnitureFromAPI to return mock furniture data
    jest.mock('./yourFile.js', () => ({
      fetchFurnitureFromAPI: jest.fn().mockResolvedValue({ /* mocked furniture data */ }),
    }));

    const allFurniture = await getAllFurniture();
    expect(allFurniture).toEqual({ /* expected furniture data */ });

    // Clearing the mock
    jest.clearAllMocks();
  });

  test('should return null when fetch fails', async () => {
    // Mocking fetchFurnitureFromAPI to return null
    jest.mock('./yourFile.js', () => ({
      fetchFurnitureFromAPI: jest.fn().mockResolvedValue(null),
    }));

    const allFurniture = await getAllFurniture();
    expect(allFurniture).toBeNull();

    // Clearing the mock
    jest.clearAllMocks();
  });
});
