class Inventory {
  // Instancia única de la clase Inventory
  private static instance: Inventory;
  // Estructura para almacenar los equipos
  private inventory: {
    [equipment: string]: {
      name: string;
      type: string;
      state: string;
    };
  } = {};
  // Constructor privado para evitar instanciación directa
  constructor() {}

  // Método estático para obtener la instancia única de Inventory
  public static getInstance(): Inventory {
    if (!Inventory.instance) {
      Inventory.instance = new Inventory();
    }
    return Inventory.instance;
  }

  // Método para agregar un nuevo equipo al inventario
  public newEquipment(name: string, type: string, state: string): void {
    this.inventory[name] = { name, type, state };
  }

  // Método para obtener todos los equipos del inventario
  public getEquipments() {
    return this.inventory;
  }
}

export default Inventory;
