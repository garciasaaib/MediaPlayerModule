/*  Observer Pattern 
Se puede usar para notificaciones para actualizaciones para algo
Esto pasa de manera que hay una lista de direcciones que desean ser notificados. a esta lista se le conoce como observadores y el objeto es el objeto observado, cuando el objeto se mueve o pasa algo los observadores son notificados. La lista de observadores puede ser aumentada o decresida.

Ejemplos: 
- Newsletter
- Notificaciones
- Sockets
- Listeners en objetos html
*/

//interface es las reglas del objeto que vas a crear
// las reglas son obligatorias sobre propiedades y sus tipos
interface Observer {
  update: (data: any) => void
}

interface Subject {
  subscribe: (observer: Observer) => void
  unsubscribe: (observer: Observer) => void
}

class BitcoinPrice implements Subject {
  //lista de observadores: comienza vacia
  observers: Observer[] = []

  constructor () {
    const el: HTMLInputElement = document.querySelector('#value')
    el.addEventListener('input', () => {
      this.notify(el.value)
    })
  }

  //agrega un campo a nuestra lista de observadores: correos
  subscribe (observer: Observer) {
    this.observers.push(observer)
  }

  //elimina un campo a nuestra lista de observadores: correos
  unsubscribe (observer: Observer) {
    //metodo para obtener el index mandado en la lista de observers
    const index = this.observers.findIndex(obs => {
      obs === observer
    })

    //metodo del array para eliminar un campo
    this.observers.splice(index, 1)
  }

  //metodo para mandar la data a todos los observers
  notify(data: any) {
    this.observers.forEach(observer => observer.update(data))
  }
}

class PriceDisplay implements Observer {
  private el: HTMLElement

  constructor () {
    this.el = document.querySelector('#price')
  }

  update (data: any) {
    this.el.innerText = data
  }
}

const value = new BitcoinPrice()
const display = new PriceDisplay()

//display se subscribe
value.subscribe(display)

//display se desubscribe
setTimeout(
  () => value.unsubscribe(display),
  5000
)