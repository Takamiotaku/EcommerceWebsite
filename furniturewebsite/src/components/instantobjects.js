import Furnitures from "./Furniture";

// Creating multiple instances
const Item1 = new Furnitures("chair", "rock", 500, "wood", "30x20x10", "idk");
const Item2 = new Furnitures("table", "stable", 750, "metal", "50x30x20", "glossy");
const Item3 = new Furnitures("sofa", "comfy", 1000, "leather", "80x40x30", "soft");


// Collecting all instances in an object
const allFurniture = {
  Item1,
  Item2,
  Item3,
 
};

// Exporting the object as a default export
export default allFurniture;
