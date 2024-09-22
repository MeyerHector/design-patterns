import Inventory from "./patterns/singleton";
import { EquipmentFactory } from "./patterns/factoryMethod";
import { InventoryAdapter, OldInventory } from "./patterns/adapter";
import { Equipment, Support } from "./patterns/observer";

// SINGLETON
console.log("============== SINGLETON ==============");

const inventory = Inventory.getInstance();

const notebook = inventory.newEquipment("HP Pavilion", "notebook", "available");
const mouse = inventory.newEquipment(
  "Mouse logitech",
  "computer accesories",
  "in use"
);

console.log(inventory.getEquipments());

// FACTORY
console.log("============== FACTORY ==============");
const factory = new EquipmentFactory();

const notebookFactory = factory.createEquipment(
  "Notebook",
  "Dell XPS",
  "16GB",
  "i7"
);
console.log(notebookFactory.getDetails());

const desktopFactory = factory.createEquipment(
  "Desktop",
  "HP Pavilion",
  "32GB",
  "Ryzen 9"
);
console.log(desktopFactory.getDetails());

const serverFactory = factory.createEquipment(
  "Server",
  "Dell PowerEdge",
  "128GB",
  "Xeon"
);
console.log(serverFactory.getDetails());

// OBSERVER
console.log("============== OBSERVER ==============");

const support = new Support();
const equipment = new Equipment("Notebook HP", "Portátil", "disponible");

equipment.addObserver(support);
equipment.updateState("in repair");

// ADAPTER
console.log("============== ADAPTER ==============");

const oldInventory = new OldInventory();

const adapter = new InventoryAdapter(oldInventory);

adapter.addEquipment("Dell Server", "Server", "available");

console.log(adapter.listEquipment());
console.log("=====================================");
