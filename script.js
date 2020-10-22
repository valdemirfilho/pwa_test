if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then(registration => {
    console.log("Service Worker registration successful. Scope:", registration.scope);
  }).catch(error => {
    console.log("Service Worker registration failed. Error:", error);
  });
}


const btnInstall = document.querySelector('.btn-install');

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  const deferredPrompt = e
  btnInstall.addEventListener('click', (e) => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
    });
  });
});
