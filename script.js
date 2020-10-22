if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then(registration => {
    console.log("Service Worker registration successful. Scope:", registration.scope);
  }).catch(error => {
    console.log("Service Worker registration failed. Error:", error);
  });
}