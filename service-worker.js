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
    "revision": "590c8a29ba626d5b6f2803c780beb61b"
  },
  {
    "url": "assets/css/0.styles.34ca1537.css",
    "revision": "0545017035c60b27c7f94600e93eee42"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.298c4c35.js",
    "revision": "24909a0f25ff8109fad629d9f32b7b18"
  },
  {
    "url": "assets/js/11.45cf3f6d.js",
    "revision": "e4df946dc571f6b0333f8f1c8f3252af"
  },
  {
    "url": "assets/js/12.7da793bf.js",
    "revision": "e81ca499b5bfc8d38d19e67a38972d88"
  },
  {
    "url": "assets/js/13.fae01fee.js",
    "revision": "151d5e79f6174d4bee869ba8ba20e508"
  },
  {
    "url": "assets/js/14.b7f2f039.js",
    "revision": "18eb6edf4e00f18a5bf2648ab6053288"
  },
  {
    "url": "assets/js/15.477f5372.js",
    "revision": "e805e8869d8533d56b457781d0e67e79"
  },
  {
    "url": "assets/js/2.cf3d61c6.js",
    "revision": "607f7371abacc4c2618bd682237d9775"
  },
  {
    "url": "assets/js/3.facc44f5.js",
    "revision": "3774a3ee4e0ea1bb5ab1c3f80f90dfae"
  },
  {
    "url": "assets/js/4.6f2707da.js",
    "revision": "9134077ec20d3d2aaf51c25e684a2181"
  },
  {
    "url": "assets/js/5.8d7c9dcb.js",
    "revision": "c58fa29211ea33e35abc04d5d9a5f30b"
  },
  {
    "url": "assets/js/6.9b783f0c.js",
    "revision": "243ec6f0bcb942254adfa7624767eee5"
  },
  {
    "url": "assets/js/7.7368ee58.js",
    "revision": "6807067ebd0b2115966918868f9e1e42"
  },
  {
    "url": "assets/js/8.cdbd5c78.js",
    "revision": "9037067dcb4f230cd6e1d0c5cb389557"
  },
  {
    "url": "assets/js/9.99a9a83a.js",
    "revision": "5733a60db77fdbfe498061b7c3f69f81"
  },
  {
    "url": "assets/js/app.5278eb18.js",
    "revision": "518ae4562e85bdb415bbdb90a2fe8889"
  },
  {
    "url": "ecosystem.html",
    "revision": "6c57957a8b8bc419fa086dd702239367"
  },
  {
    "url": "guide.html",
    "revision": "0e8012ed1322a685d95bb8cab9f85375"
  },
  {
    "url": "index.html",
    "revision": "083942681c7439135bf92dc4ff5b8752"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "70eda1a7967043adc16d44112d0eff8a"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "047d1e4e082f6becf61e0a018d0b0709"
  },
  {
    "url": "zh/guide.html",
    "revision": "cbc37d4abfb75904cc3d5d6e21bd5e70"
  },
  {
    "url": "zh/index.html",
    "revision": "3c4064ba3a47d68dc0b8a80d64497a92"
  },
  {
    "url": "zh/support.html",
    "revision": "70c609f25dd409e9f748cb2abc5bf408"
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
