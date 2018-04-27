/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

/* eslint no-console: ["error", { allow: ["info"] }] */

console.info(
  'Service worker disabled for development, will be generated at build time.'
);

var CACHE_NAME = "my-site-cache-v1";
var urlsToCache = [
  "/",
  "/src/my-app.html",
  "/src/my-contacto.html",
  "/src/my-datos-legales.html",
  "/src/my-home.html",
  "/src/my-icons.html",
  "/src/my-login.html",
  "/src/my-register.html",
  "/src/my-view404.html"
];

self.addEventListener("install", function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      // Cache hit - return response
      if (response) {
        console.log('Recurso precargado');
        return response;
      }
      return fetch(event.request);
    })
  );
});


