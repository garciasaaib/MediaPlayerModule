const VERSION = 'v1'

self.addEventListener('install', event => {
    //esto esperara la respuesta para que funcione
    event.waitUntil(precache());
});

async function precache() {
  const cache = await caches.open(VERSION);
  return cache.addAll([
    //todos los archivos que hemos escrito los guardaremos en cache
      '/',
      '/index.html',
      '/assets/index.js',
      '/assets/MediaPlayer.js',
      '/assets/pluggins/AutoPlay.js',
      '/assets/pluggins/AutoPause.js',
      '/assets/video.mp4', 
  ]);
}


//obtener un lisener para los fetch
//que es la traduccion de cuando se pida un contenido 
//se revise los archivos subidos
self.addEventListener('fetch', event => {
    const request = event.request;
    // get
    if (request.method != 'GET') {
      return;
    }
  
    // buscar en cache
    event.respondWith(cachedResponse(request));

    //Update the cache
    event.waitUntil(updateCache(request));

})



async function cachedResponse( request ) {
    //obtiene todo el cache cuardada en la version
    const cache = await caches.open(VERSION);

    //verificar si ya hay una copia en cache
    const response = await cache.match(request);

    //si hay algo responderlo, si no pedirlo al server
    return response || fetch(request) ;
}

async function updateCache(request) {
    //obtener todo el cache de la version
    const cache = await caches.open(VERSION);
    
    //hace una peticion a los archivos
    const response = await fetch(request);
    
    //si los encuentra los manda al cache con cache.put
    return cache.put(request, response);
}