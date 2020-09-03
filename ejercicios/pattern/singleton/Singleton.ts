class Singleton {
  private static instance: Singleton
  
  private constructor() {
    //inicializacion
  }

  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton() 
      //como estamos dentro de la clase si podemos llamarlo
    }

    return Singleton.instance
  }
}
export default Singleton