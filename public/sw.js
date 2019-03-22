self.addEventListener('install', (event) => {
  console.log('service worker instaled');
    //promise
  event.waitUntil(
    // cache all link /static
    caches.open('static')
    .then((cache) => {
      cache.addAll([
        '/',
        '/index.html',
        '/about.html',
        '/meme.html',
        '/src/css/style.css',
        '/src/js/app.js',
        'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
        'https://code.jquery.com/jquery-3.2.1.slim.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js',
        'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js'

      ])
    })
  )
})

self.addEventListener('activate', () => {
  console.log('service worker activated');

})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
    .then((res) => {
      if (res) {
        return res
      } else {
        return fetch(event.request)
      }
    })
  )
})
