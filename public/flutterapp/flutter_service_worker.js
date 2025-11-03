'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "8f857177880a30f2221a584d941ff662",
"version.json": "d34428a54d636e11f8a765099bb3c391",
"index.html": "6f914d6ee73550da1723f480aa69c334",
"/": "6f914d6ee73550da1723f480aa69c334",
"main.dart.js": "66941b905fab6c531a0de0f92a1fce58",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d4fd7a339478adcb5d8955365a07c3fd",
"assets/AssetManifest.json": "b35b5e4e662e8b0af0851b6613527780",
"assets/NOTICES": "9fd44670e3f9c6bb49f7f69876635984",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "d6c4a416daf781225c32476a866dc4e3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "a2e94f78f65d3e63ba5c15e7e9cb3c39",
"assets/fonts/MaterialIcons-Regular.otf": "fb6552e20370f018bcca6daf89a1490a",
"assets/assets/iconimage/user.svg": "2ccdaf3e76952c77c64cf21b89a86c87",
"assets/assets/iconimage/user-tag.svg": "f4205de5f43ce1ba20f85477587d138b",
"assets/assets/iconimage/preference.svg": "e92b0f84ba43757e7fc89671eb9bf40f",
"assets/assets/iconimage/shield.svg": "f2a3813407abc4a54b55bd4a0eb5c947",
"assets/assets/iconimage/wallet.svg": "39b47efff13da48e8ab95bdca4ebfd07",
"assets/assets/iconimage/support.svg": "bddd2051f7f661aeaf4e233d226b4192",
"assets/assets/iconimage/card.svg": "f16028db5c42a4e612b346727736da36",
"assets/assets/iconimage/security-user.png": "d0de9e48d2b13d9a87300a2fa418f380",
"assets/assets/iconimage/setting.svg": "cce86d4b53fc2eaa7d6d52eea57a8a24",
"assets/assets/iconimage/about.svg": "afb57bcdaf2684cee83c0e9adbcd1ba8",
"assets/assets/iconimage/legal.svg": "9cb4332eabec00902592090b3eaf233b",
"assets/assets/iconimage/faq.svg": "947a57757b2dc33dd19a9f5557f88a9e",
"assets/assets/iconimage/phone.png": "409e7b4bdfed5d00a57241dfeee86433",
"assets/assets/images/finsbee-logoo.png": "898cb93c0709496c03f2023c008f2f40",
"assets/assets/new_assets/icon/arrow-down.svg": "0b7c8a770e85ea678f71fb6660b70bed",
"assets/assets/new_assets/icon/tick-square.svg": "6f2b0c592a834a558b4650186c54c2e1",
"assets/assets/new_assets/icon/finsbeet.svg": "2cb4ae0af6e90c7118b4aa71dc7fa6d9",
"assets/assets/new_assets/icon/sms.png": "1095825e5bcf135364b7979f3a52b85a",
"assets/assets/new_assets/icon/stop-circle.png": "aed56e399da53dda2edc1ea2437afe53",
"assets/assets/new_assets/icon/forward-progress-icon.png": "ef62cb88ec4b45c6ceb68839c5378250",
"assets/assets/new_assets/icon/user.png": "b56ac25ef7981372a31f1ed2eb9e46e2",
"assets/assets/new_assets/icon/coin.gif": "b1267823ff3cd5b12c6fa720b9f6a621",
"assets/assets/new_assets/icon/Check.svg": "339fa2665d5d36eebfdfed2ba1cfb2ee",
"assets/assets/new_assets/icon/add.svg": "91cc0b74ec7144262592d6fa0f19c00a",
"assets/assets/new_assets/icon/gold.svg": "72a560cdf12df8fc0fe95d7449a950d2",
"assets/assets/new_assets/icon/userr.png": "87652345b914f254d5800828c7794144",
"assets/assets/new_assets/icon/man.png": "c31fcafa216f917ab3912710e66c8c97",
"assets/assets/new_assets/icon/arrow-left.png": "9d7c889162944d6d9a98bcb190b17a8f",
"assets/assets/new_assets/icon/mobile.png": "f9c66a2cea74c312086cac4f908c6394",
"assets/assets/new_assets/icon/location.png": "3f6b42163be52b6afa5cf5dae541770c",
"assets/assets/new_assets/icon/woman.png": "62a46a83a468fbecea32972b064d5ebc",
"assets/assets/new_assets/icon/refer.svg": "1ea0fa77e42c631fa536d206e3c38ec2",
"assets/assets/new_assets/icon/calendar.svg": "bdad90c2335084f738273be36ed4841a",
"assets/assets/new_assets/icon/receipt-search.svg": "644c638a0334a15fa75576abeaac072d",
"assets/assets/new_assets/icon/notification.png": "16cb644f60c282d33e2409d876e0c05f",
"assets/assets/new_assets/icon/silver.svg": "c13bf5cc73d41b09ba90918bbd7f68be",
"assets/assets/new_assets/icon/calculator.svg": "6c47ae3c415f2383fd52c3286fe0015c",
"assets/assets/new_assets/icon/minus.svg": "e7ddac012022fa5ee6fc2b7f46a1b66d",
"assets/assets/new_assets/banks/canara.svg": "a0255f0d4bce94a591e30fecffaf6527",
"assets/assets/new_assets/banks/citi.svg": "f373874e50ddbfc302f5eba93e78f32e",
"assets/assets/new_assets/banks/icici.svg": "2c10d8ab002c2b6872f552f91853fa49",
"assets/assets/new_assets/banks/IDBI.svg": "2e6968b7054f2c311a3644f907325e2d",
"assets/assets/new_assets/banks/rbl.svg": "48df81be98a946edc344aa0da075766f",
"assets/assets/new_assets/banks/sbi.svg": "c5e6b81e21bda2e6a61fa6453443b998",
"assets/assets/new_assets/banks/standard.svg": "d7d02ba77f36a0bcf5a67b4647ea0673",
"assets/assets/new_assets/banks/idfc.svg": "22388c5514261b2bad85e5ce5a7e7523",
"assets/assets/new_assets/banks/bob.svg": "e678b704fbfa9556381398034957ec00",
"assets/assets/new_assets/banks/axis.svg": "d26e5bda0522af4f548c54f296100884",
"assets/assets/new_assets/banks/kotak.svg": "d53ff62a311f276d1ed971c355a1f50e",
"assets/assets/new_assets/banks/union.svg": "c269509c8e0ee7571355df93f617bb15",
"assets/assets/new_assets/banks/hsbc.svg": "3a70ff85b889b262a14c9fea1a1e8666",
"assets/assets/new_assets/banks/pnb.svg": "625f2264d64f3d3f29ac0016ccab6701",
"assets/assets/new_assets/banks/hdfc.svg": "30b096ea3a1b74e29c3762a8aa64eaa6",
"assets/assets/new_assets/banks/iob.svg": "3558f2c227cd8d9ec92e9141bbad8c62",
"assets/assets/new_assets/invest/forwardprogress.svg": "b2eaa769a6ed81df27173146b634da25",
"assets/assets/new_assets/invest/savings.svg": "5dbed6ad5806bf9e49f19c464bdfbcab",
"assets/assets/new_assets/invest/safegold.png": "bcbcd2d934dca2451b88376a5221e518",
"assets/assets/new_assets/invest/logout.svg": "0e27fed731d7064deb653904fe839bc3",
"assets/assets/new_assets/invest/filter-search.svg": "499d5f298499b38de3efef5e55fc353e",
"assets/assets/new_assets/invest/arrow-right.svg": "2f22ff6c0c12dd955aa28fdbf23b6f0a",
"assets/assets/new_assets/invest/group.svg": "4b388ac8c64ccbb344f6f039272ae158",
"assets/assets/new_assets/invest/transaction.svg": "7101e7149d5351bf947ca51d2aebd6e9",
"assets/assets/new_assets/invest/safegold.svg": "e82d923809848098d33bddbbd012da84",
"assets/assets/new_assets/invest/Check.svg": "f7f682a68a6462185bcd7aaca38de098",
"assets/assets/new_assets/invest/no%2520history.png": "9393352e71b1426c90c8568705783742",
"assets/assets/new_assets/invest/checkProgress.svg": "81b656000d315edc5c22b9253eee5a75",
"assets/assets/new_assets/invest/trash.svg": "f15fc9bbc599ef38525ef3ccabd11581",
"assets/assets/new_assets/invest/ingot.svg": "c21baa6a9829495dddbe78db8b35171b",
"assets/assets/new_assets/invest/refer.svg": "055ab8d3a44b5cc66b8ceab7a8cefcd1",
"assets/assets/new_assets/invest/ReferEarn.svg": "e6ead1b3efd2496d62cc5edb95cec36b",
"assets/assets/new_assets/invest/layer.svg": "8ee2e417a80f3755b05bfa52c518dfcb",
"assets/assets/new_assets/invest/gold.png": "64a9f8aaa188636907367967f581990f",
"assets/assets/homeicon/book.png": "da3387f4ca5a185ae83150c78c515a53",
"assets/assets/homeicon/health.png": "543807c0b1e77e5eaaed8fd070243b86",
"assets/assets/homeicon/home.png": "048d285827cd2dd28adc76259196e06a",
"assets/assets/homeicon/30minutes.jpeg": "44d531de6078ed676e42b83b4b600199",
"assets/assets/homeicon/30minute.jpeg": "1a54343e069b82be2920299c2af81558",
"assets/assets/homeicon/building.png": "2321a6218bb232155cf8a52a66f67081",
"assets/assets/homeicon/building-4.png": "e0000331b4de9f9ebdb67777f548ec88",
"assets/assets/homeicon/wallet-money.png": "b45d1cf2c174638edc80ca0d992be1db",
"assets/assets/homeicon/car.png": "f005fe4f421d08e532f1ff13bd7af822",
"assets/assets/homeicon/user-octagon.png": "824fa7dd3961df8be8e5ccf090f587db",
"assets/assets/homeicon/security-card.png": "7903d0f24e038cf08171791712032b06",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
