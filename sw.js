const VERSION = 'v1'


//self es como el this pero especifico para serviceWorkers
self.addEventListener('install', (event) => { //instala el serviceWorker
  event.waitUntil(precache()) // a ejecutar una funcion y va a esperar la respuesta
})

async function precache() { //funcion que engloba lo que queremos guardad en cache
  const cache = await caches.open(VERSION) //declaramos que es la version 1
  return cache.addAll([ //y que contiene esto
    /*'/',
    '/index.html',
    '/assets/js/index.js',
    '/assets/js/MediaPlayer.js',
    '/assets/js/plugins/AutoPlay.js',
    '/assets/js/plugins/AutoPause.js',
    '/assets/css/index.css',
    '/assets/video.mp4',*/
  ])
}




self.addEventListener('fetch', event => { //leer y contestar peticiones get
  const request = event.request //queremos saber que peticion estamos haciendo
  // solo obtendremos los get porque lo demas demanda otras cosas
  
  //si no es get que corra normalmente
  if (request.method !== 'GET') {
    return 
  }

  //buscar en cache 
  event.respondWith(cachedResponse(request))

  //actualizar el cache
  event.waitUntil(updateCache(request))
})

async function cachedResponse(request) { // buscar en cache
  const cache = await caches.open(VERSION) // obtenemos el cache
  const response = await cache.match(request) // existe el cache de este fetch?
  return response || fetch(request) // regresa el cachè o sino manda a pedir ese fetch
}

async function updateCache(request) { // actualizar cache
  const cache = await caches.open(VERSION) // obtenemos el cache
  const response = await fetch(request) // get a internet
  return cache.put(request, response) // colocamos el nuevo cache
}