/* Singleton Pattern
Es un patron que asegura que una clase tiene solamente una instancia.

La clase es como la receta de lo que debe tener un objeto.
Una instancia es el objeto creado a partir de una clase o de otro objeto.

Es decir que solo podemos crear un objeto que haya sido creado con esa clase, si queremos otro objeto no podremos crearlo o nos retornará la instancia ya creada, es decir que se hará referencia al primer objeto creado a partir de esa clase.

- El nombre de la clase seria Singleton.
- Tendrá una propiedad instance, que será privada y será estatico.
- Tendremos el constructor con el mismo nombre de la clase, pero sera privado por lo que no podemos crear instancias con new Singleton.
- getInstance es un metodo mediante el cual ve si ya existe una instancia, si no existe la va a crear y la va a regresar, si ya existe regresa ya que ya existe.

Ejemplo: mongoose es una libreria para manejar mongoDB, y maneja este patrón porque genera una instancia de la base de datos, de manera que solo es creada esta instancia 1 vez, si se intenta de nuevo nos regresa la misma instancia de la DB por medio del caché.

*/
import Singleton from './Singleton'

const a = Singleton.getInstance()
const b = Singleton.getInstance()

console.log('A es igual a B?', a === b)