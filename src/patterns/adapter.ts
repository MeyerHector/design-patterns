export class OldInventory {
  // Lista privada de ítems en el inventario
  private items: { name: string; type: string; status: string }[] = [];

  // Método para agregar un ítem al inventario
  public addItem(item: { name: string; type: string; status: string }): void {
    this.items.push(item);
  }

  // Método para obtener todos los ítems del inventario
  public getItems(): { name: string; type: string; status: string }[] {
    return this.items;
  }
}

// Definimos la interfaz Inventory que representa el nuevo inventario
interface Inventory {
  addEquipment(name: string, type: string, status: string): void;
  listEquipment(): { name: string; type: string; status: string }[];
}

// Definimos la clase InventoryAdapter que actúa como un adaptador entre OldInventory y Inventory
export class InventoryAdapter implements Inventory {
  // Instancia de OldInventory
  private oldInventory: OldInventory;

  // Constructor que recibe una instancia de OldInventory
  constructor(oldInventory: OldInventory) {
    this.oldInventory = oldInventory;
  }

  // Método para agregar un equipo al inventario utilizando OldInventory
  public addEquipment(name: string, type: string, status: string): void {
    this.oldInventory.addItem({ name, type, status });
  }

  // Método para listar todos los equipos del inventario utilizando OldInventory
  public listEquipment(): { name: string; type: string; status: string }[] {
    return this.oldInventory.getItems();
  }
}
