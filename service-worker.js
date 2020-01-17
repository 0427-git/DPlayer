/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "81380e180b3977669dc4d8aceb664a77"
  },
  {
    "url": "assets/css/0.styles.f4278836.css",
    "revision": "0545017035c60b27c7f94600e93eee42"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.070291b8.js",
    "revision": "24909a0f25ff8109fad629d9f32b7b18"
  },
  {
    "url": "assets/js/11.4791c6ef.js",
    "revision": "e4df946dc571f6b0333f8f1c8f3252af"
  },
  {
    "url": "assets/js/12.cf40f3a4.js",
    "revision": "e81ca499b5bfc8d38d19e67a38972d88"
  },
  {
    "url": "assets/js/13.37e23281.js",
    "revision": "151d5e79f6174d4bee869ba8ba20e508"
  },
  {
    "url": "assets/js/14.aaf9f425.js",
    "revision": "18eb6edf4e00f18a5bf2648ab6053288"
  },
  {
    "url": "assets/js/15.503f7471.js",
    "revision": "e805e8869d8533d56b457781d0e67e79"
  },
  {
    "url": "assets/js/2.e05f9068.js",
    "revision": "607f7371abacc4c2618bd682237d9775"
  },
  {
    "url": "assets/js/3.ca2028c6.js",
    "revision": "3774a3ee4e0ea1bb5ab1c3f80f90dfae"
  },
  {
    "url": "assets/js/4.7dd499f3.js",
    "revision": "9134077ec20d3d2aaf51c25e684a2181"
  },
  {
    "url": "assets/js/5.8a25d8b8.js",
    "revision": "c58fa29211ea33e35abc04d5d9a5f30b"
  },
  {
    "url": "assets/js/6.db70b736.js",
    "revision": "243ec6f0bcb942254adfa7624767eee5"
  },
  {
    "url": "assets/js/7.838176f6.js",
    "revision": "6807067ebd0b2115966918868f9e1e42"
  },
  {
    "url": "assets/js/8.c0c98c46.js",
    "revision": "9037067dcb4f230cd6e1d0c5cb389557"
  },
  {
    "url": "assets/js/9.5e6a1019.js",
    "revision": "5733a60db77fdbfe498061b7c3f69f81"
  },
  {
    "url": "assets/js/app.416ecbdb.js",
    "revision": "39cc197f1aa03694fdb5134eaab37d65"
  },
  {
    "url": "ecosystem.html",
    "revision": "9b1b1f4e14dd949e63668f18ed08929e"
  },
  {
    "url": "guide.html",
    "revision": "720b7a81fe6662276bc27fb95e83bf8e"
  },
  {
    "url": "index.html",
    "revision": "bc462d85180deb0f3cec77a66d3c4389"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "c525e271188fce2f345ec839ab21e24b"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "f401cdbf98918ce9889d9f62e4554530"
  },
  {
    "url": "zh/guide.html",
    "revision": "de2a225d3c37fccf49fdd7ed5a64c69f"
  },
  {
    "url": "zh/index.html",
    "revision": "7b012eb7ca464b69e1c3f2ec9cf31c5e"
  },
  {
    "url": "zh/support.html",
    "revision": "741746eec6c248e1043c30b89e0763dc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
