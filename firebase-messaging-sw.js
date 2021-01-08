// hi there
    if ('serviceWorker' in navigator) {

        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log(registration)
                messaging.useServiceWorker(registration)

                initializePush()
            })
            .catch(err => console.log('Service Worker Error', err))

    } else {
        console.log('Service worker not in navigator')
    }