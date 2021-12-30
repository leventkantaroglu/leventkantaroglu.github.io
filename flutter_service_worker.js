'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "499f3b20f5bd2c9daaeea3c1e35faab2",
"index.html": "07611478f49242e1138cfe7cdeb752d8",
"/": "07611478f49242e1138cfe7cdeb752d8",
"main.dart.js": "f36bf659809f8ba422ae78f09f3e6d25",
"favicon.png": "443c861c9ec64732ef4b9c0b8e566eb2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "de9a8cb7e025fd2127403acd782507e8",
".git/config": "38881ccff4dc4e249623736f3cd97a15",
".git/objects/61/9e7be4d701e7b38438cf623f2dd8b2a6b974d2": "cb0795f676681a80915a88320d20767c",
".git/objects/9b/c415be26c0030632cdb4d97a794e200d0f6c51": "260fbd4f7da1df1210b59ca01632894e",
".git/objects/9b/5922ca1ad53402cba7f1d760ee0554d846408d": "f6c9c6bbbff886db382177f5a0acbf16",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/58/a33dd38632222a7b8ef9494e8fa27db7b3c705": "bdf382f2937591f9bd2f470a11428ad0",
".git/objects/be/275dcb31a0f19960d3392ae9bc2479628ca445": "e8a3b56814e9304581a6e0e8484dceff",
".git/objects/df/90d643f34c26061fabb29ed089a1881a04a4cc": "e3290fb751369e93c7e15a3652b83662",
".git/objects/ae/673c4bf4dc96d3bc269d0bd1e9e6f236664f2b": "2427d3a0241c0e927bc734d8e0b4586e",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/c7/6e9c81c3254385925ddea249c09d11e91f72de": "70044b369a28b2fb09b7b4505d9f546a",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/4b/0fdf5243e5d2f12a00e643aedb0267d235a034": "850e2fd1b931426d429986dd6ce99eb8",
".git/objects/7d/6966e02864cf77e3d9910a60d78c34e1b92e7e": "e52e2c5180e20e40e51fcf098c388a75",
".git/objects/28/e8ba32bacd5fd8c32f0316002536874ff5d1cb": "8b4afcacf908134f262d9c1858541283",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/91/fee0a285e5bed79ff793a9b346e600dbc01d6a": "cd35f93f9853512ac92da7069cf1c29d",
".git/objects/6d/b386bfa662ba56a75a830f4f83149a6637e82b": "993db8dcade534076db7a0a711ffdae4",
".git/objects/39/3d3339fc5c60a11b15edce03709bd0c7173e3c": "4c74a2363643c4e0a01b1e8558613cc7",
".git/objects/97/b7c31fc84d0e19a9ce986f0bce25d5b5b04bec": "9d7959266f9893eed0579c1d87c353d5",
".git/objects/97/1e3339280d74c11f0f39a8e41cd9dfd3d350a9": "dd3ca2423961f1d02ff0ecbee54b4d99",
".git/objects/b1/ae9783ea60faf27f76bf53e159879f07904a1f": "5bf771bbbd05e231b97ed9c0f539a50e",
".git/objects/aa/70977edcfd46a024e872a6c693f92d8508d4ca": "e5dd5158e927669cb811edea5228df87",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/742d9bc5998e7b071ab263d27123295aa206b6": "57461ceba9b8cd767d6461ad1777917d",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/de/5e6b9fdd3c5b9a464a7c5879750f4a59d01eda": "b49760549a3302973185d3ffadd8b305",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c4/41396be73340843a5d46eb78bf9739570cff9a": "94e2e0cb8991439d6126fd2d77708952",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/70/8823fcd4dee5f31f08e44308a19891fc46d52e": "39515a742edb6205c2ed7547e330c4a0",
".git/objects/82/743c977739fe7c7f9769d423b9ebda0bbbcef0": "86e4632b5307abcf47e563c93a57cae8",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "352615b694726fc2dde4bb415b4eb302",
".git/logs/refs/heads/master": "352615b694726fc2dde4bb415b4eb302",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "213fd9c65dabe41e8fd7609aa63b04d9",
".git/index": "49b2a84c7eb61e44763c503cb289bf06",
".git/COMMIT_EDITMSG": "14e0aa81cb9a97b3dde23c3d439d1937",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "80107bb0695071d2e9d2f55f66931440",
"assets/NOTICES": "456f0427a49579e525d03901e64ff21d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/personal/levent-kantaroglu.png": "b89fbf791c18de6e8020a0489d27bfc0",
"assets/assets/personal/levent-kantaroglu.jpg": "343bab8425a11bea8314044db44f9029",
"assets/assets/gplaypattern1x.png": "5dacd004927da04b74e271b176c3dee0",
"assets/assets/course-dummy-cover.png": "c616e7b482363cc6315ab41b3e242180"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
