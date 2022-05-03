'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "e7d903e261e3db84538d3aeaa183f1e2",
"assets/assets/images/contact_icon.png": "856b95eb03d60fa2576140e4c3d034b9",
"assets/assets/images/iconEmail.png": "5eb3c4b86aafbee72b8c471b29413a50",
"assets/assets/images/iconEmail1.png": "7669af5ba43e656f5ab2a6869006a3a8",
"assets/assets/images/iconEnviar.png": "a2570346118edff28198de47d95c035e",
"assets/assets/images/iconInstagram.png": "970d8d600090f706a634079fbd76e710",
"assets/assets/images/iconLinkedIn.png": "b08d8d322d6f211d24aedcc9684a6be3",
"assets/assets/images/iconMappin.png": "9cc090022ae31337336d2024160714b8",
"assets/assets/images/iconPhone.png": "848d6fcfb1f74917fdf93e9da8f6cf14",
"assets/assets/images/iconReset.png": "3feb9864302b1af57dd05f752ae125ed",
"assets/assets/images/iconReset1.png": "3d79608f1d9d87a3cdbd590cb248cbc2",
"assets/assets/images/iconWhatsapp.png": "baf03e1521fd30088edf8c253810d429",
"assets/assets/images/imgAvata.png": "93a8bfa787261b5ba4ffc8130c4f1a66",
"assets/assets/images/imgCarrocell/AppCotacaoCriptomoedas.png": "cdcbea9fb59de8a82d0e286edff871bf",
"assets/assets/images/imgCarrocell/carrinhoApp_locate_bike.png": "35c9d3c457bb5cd532456ae0a58d3b3f",
"assets/assets/images/imgCarrocell/detalheFilmes.png": "5c5d041b63f0bc36a1797eb9da1711d3",
"assets/assets/images/imgCarrocell/detalhesApp_locate_bike.png": "2ebda0caca185f9382f861c66ee14cd4",
"assets/assets/images/imgCarrocell/favoritosAppTopFilmes.png": "d6a8b3a75f54d639ba5adcd9ce81ed64",
"assets/assets/images/imgCarrocell/homeAppTopFilmes.png": "f8314bf8627120cb6c20cd2705f0ed63",
"assets/assets/images/imgCarrocell/homeApp_locate_bike.png": "6fd4ce9d368a73d0cbabcca36610cb63",
"assets/assets/images/imgCarrocell/imgFundoCarrocell_320x640.png": "1a2cd28fb7996c2eefb5d9c2e0074f2b",
"assets/assets/images/imgCarrocell/loginAppTopFilmes.png": "0ca725a467c72fa741914a288528d76e",
"assets/assets/images/imgCarrocell/pageDetalheAppEncontraFarmaciasAriquemes.png": "251c0506c2d882226b9e7413f7d46aaf",
"assets/assets/images/imgCarrocell/pageHomeAppEncontraFarmaciasAriquemes.png": "867611312d777f2a3050fb03bd91f867",
"assets/assets/images/imgCarrocell/pageSplashAppEncontraFarmaciasAriquemes.png": "64375c1fc0ea2eb733a49dc5bd746cec",
"assets/assets/images/imgCarrocell/payFlowHome.jpg": "3447b393168e01903637ade25f7ba678",
"assets/assets/images/imgCarrocell/payFlowLogin.jpg": "2bcf276a38916017e51d0eabe74d303d",
"assets/assets/images/imgCarrocell/pgMercadoPagoApp_locate_bike.png": "cd01392b2ad3516b5d94fe1ed1fd9d96",
"assets/assets/images/imgCarrocell/telaApp11.png": "57fb59470bee3514e2df67124a3141c8",
"assets/assets/images/imgCarrocell/telaApp12.png": "e65c849f53991a7f6ac21baf7dec7114",
"assets/assets/images/imgCarrocell/telaApp20.png": "e936f65ef52823f93d70b0f324eeb9e8",
"assets/assets/images/imgCarrocell/telaApp21.png": "f2551d3f442393fdb7c3db1b5c8f3deb",
"assets/assets/images/imgFundoWorks.png": "0ee7a6de940b2f48159a30d9f334c442",
"assets/assets/images/imgFundoWorks2.png": "11050a887f4d25a21ce8f635285df268",
"assets/assets/images/imgHome/img_home_person.png": "b0abf898c5200821a98b9d4678aeaca1",
"assets/assets/images/imgHome/img_smartphone_home_320x640.png": "8354b1db503f74167a423b29b3a69c9b",
"assets/assets/images/imgIcones/iconAndroid.png": "1954ec992fa10dfb6b35ca7e56477e5c",
"assets/assets/images/imgIcones/iconCanvas.png": "908b885e3924a65beb1383b67ca16f36",
"assets/assets/images/imgIcones/iconCSS.png": "24fd020d920e473dc65bdd1557609b81",
"assets/assets/images/imgIcones/iconDart.png": "9bb25570f562f512a5dd96b01efb2abe",
"assets/assets/images/imgIcones/iconDjango.png": "a7bc0b25dcecb6c3e140876fc0ca79a0",
"assets/assets/images/imgIcones/iconFigma.png": "dc9206063723fba0d12a6ef8b9ea8971",
"assets/assets/images/imgIcones/iconFirebase.png": "416031b918ec5baa361bd224dfa34318",
"assets/assets/images/imgIcones/iconFlutter.png": "9cb75cbac9c4f1acecf5accda2a7b789",
"assets/assets/images/imgIcones/iconGiteGitHub.png": "87f550e78ad158e16a8a96134a248c28",
"assets/assets/images/imgIcones/iconHtml.png": "b2f8014b45d1e1fb4a162e7c75e46cb7",
"assets/assets/images/imgIcones/iconJS.png": "6243009586a0ae1c20299ac3ea097ef2",
"assets/assets/images/imgIcones/iconKotlin.png": "8c0eb8353a2f4fe79f67dead72af97e6",
"assets/assets/images/imgIcones/iconMysql.png": "a94014b8e9bd9933307abd55f9696d3b",
"assets/assets/images/imgIcones/iconNodeJS.png": "0316f06aa12d7b94ef6f9b0df9a79124",
"assets/assets/images/imgIcones/iconNotion.png": "138e029a89484cebc2c58d3f65f26908",
"assets/assets/images/imgIcones/iconPostgreSQL.png": "de514ef511370e1d245e884c1e273cd3",
"assets/assets/images/imgIcones/iconPython.png": "8dfbb2a329bbf371e79987bfd4f34a86",
"assets/assets/images/imgIcones/iconVuejs.png": "23b3ef5e908cdd5633d741705ae37823",
"assets/assets/images/imgIos.png": "49f79e21da11e96b8cf0e3b8bef6616c",
"assets/assets/images/imgLogo.png": "860d58a188d302adefa51900014ddc40",
"assets/assets/images/imgRicardo.png": "bec90950c012b4f977b4d88c8ad0760d",
"assets/assets/images/imgSites/jogoDaMemoria.png": "43f7ca2ed3a49bd6e0565a6536f32350",
"assets/assets/images/imgSites/seralheriaLoja.png": "66bf2b5be26d75c255a1fca762eb24b9",
"assets/assets/images/imgSites/siteContainerloc.png": "c448dfe8c07b9483c262d52cc82283d8",
"assets/assets/images/imgSites/siteLivraria.png": "273552c671a652462d97743bc05dd2fc",
"assets/assets/images/imgSites/siteTela.png": "4863c306c6fc55fbb57846fdd096fc26",
"assets/assets/images/imgSites/telaDeCaptura.png": "0caf56d965b056e50188cd64c6d10247",
"assets/assets/images/imgSites/telaDeLogin.png": "32d55db527279cccb30af15ce26bc14b",
"assets/assets/images/imgTintaAmarela.png": "8df5c1f706abf487516baeb525c0e09a",
"assets/assets/images/imgTintaAzul.png": "5ffb857cd97bfd0da5465aa7b5412cae",
"assets/assets/images/imgTintaRosa.png": "fa3a1e5f0bc3d96acfc3fca67f33205b",
"assets/assets/images/imgTintaRoxa.png": "00cabd995daa31b79870d69b582c5cc7",
"assets/assets/images/person.png": "3776820a8d32bf466d7e48e661bf02fe",
"assets/assets/images/personnn.png": "5b6ba176416812aa5448c6704d31caa0",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "9c57807a2a0e7b9d4fb7a89302d6efdc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/slimy_card/assets/flare/bottomSlime.flr": "3a26ed39d3a9a9956105e9e6e4d5ad43",
"assets/packages/slimy_card/assets/flare/topSlime.flr": "9f381ee39c22b624c805f536b39171a6",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a36690c811a26f171991b45f606bbd98",
"/": "a36690c811a26f171991b45f606bbd98",
"main.dart.js": "e61b84adca35b59a10d95fe9be372e0d",
"manifest.json": "534de1f169a3943fe2ef823fbb2c8d36",
"version.json": "6c9c33a00862dd1e5b5e7f4bc4d6f9e7"
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
