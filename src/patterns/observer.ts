// Definimos primero la clase Equipo
export class Equipment {
  private observers: Observer[] = [];

  constructor(
    private name: string,
    private type: string,
    private state: string
  ) {}

  // Método para agregar observadores
  public addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  // Método para cambiar el estado y notificar a los observadores
  public updateState(newState: string): void {
    this.state = newState;
    this.notiObservers();
  }

  // Método privado para notificar a los observadores
  private notiObservers(): void {
    this.observers.forEach((observer) => observer.update(this));
  }

  // Métodos para obtener los datos del equipo
  public getName(): string {
    return this.name;
  }

  public getState(): string {
    return this.state;
  }
}

// Ahora definimos la interfaz Observer
interface Observer {
  update(equipment: Equipment): void; // El equipo es pasado como argumento
}

// Clase Soporte que actúa como observador
export class Support implements Observer {
  update(equipment: Equipment): void {
    console.log(
      `Support notification: ${equipment.getName()} has changed it's status to ${equipment.getState()}.`
    );
  }
}
