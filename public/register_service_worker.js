if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service_worker.js')
    .then(function(registration) {
      console.log('ServiceWorker registration successful: ', registration);
    })
    .catch(function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
}
