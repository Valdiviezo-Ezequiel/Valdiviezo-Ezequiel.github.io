const nombreCache = 'pwa-nike';
const archivos = ['/',
                'index.html',
                'css/estilos.css',
                'js/main.js',
                'img/buzoDriFit.jpg',
                'img/buzoDri-FitSwoosh.jpg',
                'img/buzoPacer.jpg',
                'img/buzoSportswear.jpg',
                'img/buzoSportswear.jpg',
                'img/coaching1.png',
                'img/coaching2.png',
                'img/coaching3.png',
                'img/musculosaAllWrld.jpg',
                'img/musculosaFitness.jpg',
                'img/musculosaMoonrun.jpg',
                'img/musculosaUnderArmour.jpg',
                'img/musculosaUnderArmourLogoTank.jpg',
                'img/nike.jpg',
                'img/nikeegif.gif',
                'img/reeloj.gif',
                'img/zapasgif.gif',
                'img/pantalonEvostripe.jpg',
                'img/pantalonMetallic.jpg',
                'img/remeraPsg.jpg',
                'img/remeras.jpg',
                'img/remeraSportswear.jpg',
                'img/remeraSportswearClub.jpg',
                'img/shortDriFitAcademy.jpg',
                'img/shortTrophy.jpg',
                'img/iconos/icon-192x192.png',
                'img/iconos/icon-256x256.png',
                'img/iconos/icon-384x384.png',
                'img/iconos/icon-512x512.png',
];



self.addEventListener('install', precatching =>{
    self.skipWaiting();
    precatching.waitUntil(
        caches
            .open(nombreCache)
            .then(cache => {
                cache.addAll(archivos);
            })
    )
})



self.addEventListener('fetch', cargarCache =>{
    cargarCache.respondWith(
        caches
            .match(cargarCache.request)
            .then(respuesta => {
                if (respuesta){
                    return respuesta;
                }


                let peticionCache = cargarCache.request.clone();

                return fetch(peticionCache)
                    .then(respuesta => {
                        if (!respuesta){
                            return respuesta;
                        }
                        let respuestaCache = respuesta.clone();
                        caches
                            .open(nombreCache)
                            .then (cache => {
                                cache.put(peticionCache, respuestaCache);
                            })
                            return respuesta;
                    })
            })
    );
})