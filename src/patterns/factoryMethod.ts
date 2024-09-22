export interface Equipment {
  // Método para obtener los detalles del equipo
  getDetails(): string;
}
// Definimos la clase Notebook que implementa la interfaz Equipment
class Notebook implements Equipment {
  // Constructor que inicializa los atributos de la clase Notebook
  constructor(
    private name: string,
    private ram: string,
    private processor: string
  ) {}

  // Método para obtener los detalles del equipo Notebook
  getDetails(): string {
    return `Type: Notebook, Name: ${this.name}, RAM: ${this.ram}, Processor: ${this.processor}`;
  }
}

// Definimos la clase Desktop que implementa la interfaz Equipment
class Desktop implements Equipment {
  // Constructor que inicializa los atributos de la clase Desktop
  constructor(
    private name: string,
    private ram: string,
    private processor: string
  ) {}

  // Método para obtener los detalles del equipo Desktop
  getDetails(): string {
    return `Type: Desktop, Name: ${this.name}, RAM: ${this.ram}, Processor: ${this.processor}`;
  }
}

// Definimos la clase Server que implementa la interfaz Equipment
class Server implements Equipment {
  // Constructor que inicializa los atributos de la clase Server
  constructor(
    private name: string,
    private ram: string,
    private processor: string
  ) {}

  // Método para obtener los detalles del equipo Server
  getDetails(): string {
    return `Type: Server, Name: ${this.name}, RAM: ${this.ram}, Processor: ${this.processor}`;
  }
}
// Definimos la clase EquipmentFactory que actúa como una fábrica para crear equipos
export class EquipmentFactory {
  // Método para crear un equipo basado en el tipo especificado
  public createEquipment(
    type: string,
    name: string,
    ram: string,
    processor: string
  ): Equipment {
    if (type === "Notebook") {
      return new Notebook(name, ram, processor);
    } else if (type === "Desktop") {
      return new Desktop(name, ram, processor);
    } else if (type === "Server") {
      return new Server(name, ram, processor);
    } else {
      throw new Error("Unknown equipment type");
    }
  }
}
