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
    "revision": "9dd1fb3c8edeb7440ab7858887aa9d27"
  },
  {
    "url": "about/index.html",
    "revision": "76cfea9d037279ae3f41c0f09add1c7c"
  },
  {
    "url": "assets/css/0.styles.e4cdc6a0.css",
    "revision": "680e886b15567d4de928e90ff4275fcd"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.8eef8638.svg",
    "revision": "8eef86381d36c7d02ce250e5243b0752"
  },
  {
    "url": "assets/js/1.2cabad5b.js",
    "revision": "e3984871770d729763dd127668897820"
  },
  {
    "url": "assets/js/10.9c0d1b00.js",
    "revision": "fb0b2fab460a836c24f96aa4c085b0b1"
  },
  {
    "url": "assets/js/11.1a482ae0.js",
    "revision": "81d2ff5417d0fd316b550dfe8f9448be"
  },
  {
    "url": "assets/js/12.c48470d5.js",
    "revision": "71b23ff5ce298edf3141bf2ba24fa3ff"
  },
  {
    "url": "assets/js/13.5b654f21.js",
    "revision": "ed4a7a06d8acd4bf7c71360b45c30122"
  },
  {
    "url": "assets/js/14.95024fc9.js",
    "revision": "9292fc46646a829a7a2b0eb01bbf7c08"
  },
  {
    "url": "assets/js/15.703c6d61.js",
    "revision": "a2751d4071645a2be703e8cc1cf5f8a3"
  },
  {
    "url": "assets/js/16.23571cc6.js",
    "revision": "25f61d7c89f79bf60f49831756ab5b51"
  },
  {
    "url": "assets/js/17.3e88ce47.js",
    "revision": "368ba3ac0a60150c8e40f52fde0d758e"
  },
  {
    "url": "assets/js/18.b00ba7ab.js",
    "revision": "991051d69a16d4535528d5d8037fada4"
  },
  {
    "url": "assets/js/19.b6fe7599.js",
    "revision": "a3816b91c7790a72ef1b208742424c32"
  },
  {
    "url": "assets/js/20.4015e365.js",
    "revision": "830c98a545b4f20dc80810df3d569bdc"
  },
  {
    "url": "assets/js/21.f898d661.js",
    "revision": "b3399e913e5d7bd629d80c74f61087ff"
  },
  {
    "url": "assets/js/22.25dd2e6e.js",
    "revision": "f98cf5dddf8e8eb3bb9f350478d66e71"
  },
  {
    "url": "assets/js/23.1d52a08f.js",
    "revision": "17b6798dd4c16ffa4ce3092c71bb3eac"
  },
  {
    "url": "assets/js/24.19c20a60.js",
    "revision": "9e85ef6cbe7d7407aa858a82d15ccac4"
  },
  {
    "url": "assets/js/25.9e23dc53.js",
    "revision": "295bf7fc5dea53b7c6a8471bf9b4e6f2"
  },
  {
    "url": "assets/js/26.0337e05e.js",
    "revision": "b64597b4c8547c55f1ee9d6e99077bee"
  },
  {
    "url": "assets/js/27.a423361c.js",
    "revision": "cfbdbbe4d9c114fb336cc743815dc893"
  },
  {
    "url": "assets/js/28.b6d5a507.js",
    "revision": "721c274d550d2271c4611383bf282f07"
  },
  {
    "url": "assets/js/29.699cb869.js",
    "revision": "2102f15628415faabdda876c684fb470"
  },
  {
    "url": "assets/js/3.d6616e1b.js",
    "revision": "d0e37e3c845fe907ae04cfc349b293a1"
  },
  {
    "url": "assets/js/30.528ae8bb.js",
    "revision": "41f88bb1d05321121f5765a7590b194f"
  },
  {
    "url": "assets/js/31.f09d7fd6.js",
    "revision": "ae2c2c2c2d018d29882fb58282364087"
  },
  {
    "url": "assets/js/32.624c8e60.js",
    "revision": "f14cf13cbfdf6cc20edcd73ceb00b6cf"
  },
  {
    "url": "assets/js/33.7131284a.js",
    "revision": "56aa774cb6ce03aa7069e5bb07bdc68a"
  },
  {
    "url": "assets/js/34.9f3825eb.js",
    "revision": "aef789e1e06221863a07093a57bbd95f"
  },
  {
    "url": "assets/js/35.a4a62b2a.js",
    "revision": "700a9f912242a4c528979531abad7db5"
  },
  {
    "url": "assets/js/36.a6cdf0ff.js",
    "revision": "f78127e1d169a257b44459aa0874fd7e"
  },
  {
    "url": "assets/js/37.5cf23d23.js",
    "revision": "0bf861b4cfe3390cdc692ab9928a7f3f"
  },
  {
    "url": "assets/js/38.3c1e87ed.js",
    "revision": "ece680bc8832a0f18f35ec1a21f441eb"
  },
  {
    "url": "assets/js/39.0582abd8.js",
    "revision": "810406ac60d2478fd150f94241c1e7f8"
  },
  {
    "url": "assets/js/4.61a6cf7d.js",
    "revision": "c2faaeaf166457fc8adbe5a6ee7f9b95"
  },
  {
    "url": "assets/js/40.d41fd524.js",
    "revision": "609c243dc33c26cf7311e1e12f8ae9c8"
  },
  {
    "url": "assets/js/41.4df8c454.js",
    "revision": "b213d9e2f5b313fdaf3209b1d42dc209"
  },
  {
    "url": "assets/js/42.2fb95410.js",
    "revision": "a385b238b3f44991800fb44527bc7c21"
  },
  {
    "url": "assets/js/43.a7e9afc4.js",
    "revision": "f7afb6044cfe6172c15b0f1c25c6a227"
  },
  {
    "url": "assets/js/44.629f17b9.js",
    "revision": "cb5cb7f560fabc0146a105e94177d8df"
  },
  {
    "url": "assets/js/45.98fafbf9.js",
    "revision": "70227c39455a93772f7fb7a0647f6eb4"
  },
  {
    "url": "assets/js/5.847ae12c.js",
    "revision": "36cd2667f781e137a18f8471301fcee2"
  },
  {
    "url": "assets/js/6.1dd2fbe7.js",
    "revision": "3d1ea9c043a963c3cd16bdd6cf2bcccf"
  },
  {
    "url": "assets/js/7.7f20d7ed.js",
    "revision": "37cb2d28012968f08d6b004b49ff90a1"
  },
  {
    "url": "assets/js/8.d21751a1.js",
    "revision": "e2da2e99c639af5bd693a9c82096f343"
  },
  {
    "url": "assets/js/9.aee7d682.js",
    "revision": "a1072b707339be11e243fbf2f4ca0d28"
  },
  {
    "url": "assets/js/app.ec459f65.js",
    "revision": "763ca3dde5254c1675f0d54d3d23c8b4"
  },
  {
    "url": "categories/index.html",
    "revision": "3825989504c0ea24605ff5115e1f104f"
  },
  {
    "url": "categories/ROS/index.html",
    "revision": "ea09275acf40087a9d74781121373bb0"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "defdecef2fbef8d8361ecba3522ce24e"
  },
  {
    "url": "categories/摘记/index.html",
    "revision": "789be96de3fb67b84694240c3dcf75bf"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "ac244e8c896d481e1ed8a1f73d82da34"
  },
  {
    "url": "categories/笔记/page/2/index.html",
    "revision": "ee44db23c9d4b1fda0bdc31575597561"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "cbe12318dd88ee4cac28fe55a37053cd"
  },
  {
    "url": "icons/cat128.png",
    "revision": "a5c5942bcb1a10affff8c4029383fa79"
  },
  {
    "url": "icons/cat16.png",
    "revision": "1aec0693ff6e320c0adedf185806b1ab"
  },
  {
    "url": "icons/cat48.png",
    "revision": "231db9fe2dd479a3aac7da8194bb9fd5"
  },
  {
    "url": "icons/LatteAndCat.png",
    "revision": "a5c5942bcb1a10affff8c4029383fa79"
  },
  {
    "url": "icons/LatteAndCat.svg",
    "revision": "8e2d868e240a4e9b1520fd83ad4b3ad3"
  },
  {
    "url": "index.html",
    "revision": "dd79d31d3e8b45853d069810a11a260c"
  },
  {
    "url": "note/css/css3flip.html",
    "revision": "f22aa676375df6fa4640643b0d834d8f"
  },
  {
    "url": "note/css/css3xin-te-xing.html",
    "revision": "9dea3017272e9f1db13ecf727774f665"
  },
  {
    "url": "note/fe-unit-test/chai.html",
    "revision": "9c67bd17dc8f5f2d7343da86e8dc1701"
  },
  {
    "url": "note/fe-unit-test/mocha.html",
    "revision": "1224c099e8c6db6e9eeed4de1b1f9a52"
  },
  {
    "url": "note/fe-unit-test/vuetestutils.html",
    "revision": "88636f441e97ef4653d4fb4f4d9ad69e"
  },
  {
    "url": "note/html5/canvas.html",
    "revision": "a922986514473ba97cfb1bcef824e233"
  },
  {
    "url": "note/html5/html5biao-dan-yuan-su.html",
    "revision": "0f4e7dfa2a47ae80273c19c5c4e4965b"
  },
  {
    "url": "note/html5/html5de-yu-yi-yuan-su.html",
    "revision": "198979284e91d69093ef0b230f6d56ac"
  },
  {
    "url": "note/html5/html5duo-mei-ti-biao-qian.html",
    "revision": "43c96947e70723a0d31d366b513c56ab"
  },
  {
    "url": "note/html5/html5zhong-de-api.html",
    "revision": "dd6c52232985d19cd248f02ead236e08"
  },
  {
    "url": "note/index.html",
    "revision": "c061313f019a4e4bc907dbbc803a6a8a"
  },
  {
    "url": "note/js/jsdui-xiang.html",
    "revision": "105499b2446aa7d88e89352e693440bf"
  },
  {
    "url": "note/js/jshan-shu-de-si-zhong-diao-yong-fang-shi.html",
    "revision": "ef1bb46512e80ff490c329daf27d8f12"
  },
  {
    "url": "note/js/jsji-cheng.html",
    "revision": "93e77684e7c222ead12938acda76c24d"
  },
  {
    "url": "note/js/jsshu-ju-lei-xing.html",
    "revision": "14be2228e7fcc4c15428d3da1456abba"
  },
  {
    "url": "note/js/jsyuan-xing-lian-bi-bao.html",
    "revision": "62251c169d15f43c07a79713357a181b"
  },
  {
    "url": "note/vue/vueji-chu-bi-ji.html",
    "revision": "b63d3a67c26a86499b76e5fba0c1e4e2"
  },
  {
    "url": "note/vue/vuezu-jian.html",
    "revision": "d956b7f28f78704a316a161ccca1a9c3"
  },
  {
    "url": "note/wechat-mini-program/chu-shi-wei-xin-xiao-cheng-xu.html",
    "revision": "2646178c7de9adca55c192e084d16223"
  },
  {
    "url": "star.png",
    "revision": "d58c2c2e1655abbdbf4fb891b37361e6"
  },
  {
    "url": "tag/Canvas/index.html",
    "revision": "70d8a7126fdb9834a6ddb45d3d78d916"
  },
  {
    "url": "tag/css3/index.html",
    "revision": "09a430c98cc66e3d9da510b755404499"
  },
  {
    "url": "tag/Html5/index.html",
    "revision": "18f7776a3ddcca1947d23b582ae7d5ab"
  },
  {
    "url": "tag/index.html",
    "revision": "9dd605d792102aff58d3d8380830b69a"
  },
  {
    "url": "tag/js/index.html",
    "revision": "f0aa63c33d60b6955fbd5bccc0e417ea"
  },
  {
    "url": "tag/ROS/index.html",
    "revision": "3dfe1f60a01b10eee3c7ab305489f1b8"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "425156b77d56b951d42f276eb5d6da21"
  },
  {
    "url": "tag/vuepress-theme-reco/index.html",
    "revision": "93001bb7dc4d0159e03f747aa3c7f066"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "e93a28e579533a31b104e6b0f146fa60"
  },
  {
    "url": "tag/单元测试/index.html",
    "revision": "e51ff84987db8835291321d307c0c2a9"
  },
  {
    "url": "tag/句子/index.html",
    "revision": "3a1ea82ee71473091dc9b03b134aebe8"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "b6c275fc51e61408eb40dd58d78cf2e6"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "3818a3ee19efbc48f1b7015789eb4df2"
  },
  {
    "url": "tag/诗/index.html",
    "revision": "ceaa22aa7f4ec1e99c9dfadf9d58cd71"
  },
  {
    "url": "timeline/index.html",
    "revision": "a0493e9197bcc91ef512fe52b51ceebf"
  },
  {
    "url": "views/qian-duan/2019/qian-tan-qian-duan-dan-yuan-ce-shi.html",
    "revision": "40fcc29f90fa82a03b32a36d95df39ef"
  },
  {
    "url": "views/qian-duan/2019/vue-cli3zhong-dan-yuan-ce-shi-huan-jing-de-da-jian.html",
    "revision": "77e988ad5112ce5a8d429b85f3e10f2b"
  },
  {
    "url": "views/qian-duan/2020/localstoragebian-dong-jian-ting.html",
    "revision": "39072bb81db8668b43a12999c597540f"
  },
  {
    "url": "views/qian-duan/2021/vuepress-theme-recoxin-shou-zhi-bei-zhi-hellokao-ya.html",
    "revision": "95e0f38cf857339ac4185b6c8b6e62bd"
  },
  {
    "url": "views/ros/rosan-zhuang-bi-lei.html",
    "revision": "085f8057902fa79799ef5b1aa65e865d"
  },
  {
    "url": "views/ros/roschu-ji-jiao-cheng.html",
    "revision": "c801b0faecb9a09cd99fa505d7a62fde"
  },
  {
    "url": "views/ros/roszhong-ji-jiao-cheng.html",
    "revision": "001324c06c28b9d2b24c9b83ede78749"
  },
  {
    "url": "views/sui-bi/2019/mei-you-li-xiang-de-ren-bu-shang-xin.html",
    "revision": "c445af534a15e2bd439fccbd07412727"
  },
  {
    "url": "views/sui-bi/2019/zu-qiu-he-yao-gun-le.html",
    "revision": "4562d808e9aa426da02d7f5fe451b661"
  },
  {
    "url": "views/sui-bi/2020/ji-wo-de-da-xue.html",
    "revision": "0c2ddf80e6a156adfff4f181f05e1545"
  },
  {
    "url": "views/sui-bi/2021/the-fire-in-your-eyes-keeps-me-warm.html",
    "revision": "9311409ce4b339cfb642b2afed99ecf4"
  },
  {
    "url": "views/zhai-ji/wo-yi-piao-ling-jiu.html",
    "revision": "e5fa935b0e9bbd01c8c359e735a5e3c8"
  },
  {
    "url": "views/zhai-ji/yue-guang-luo-zai-zuo-shou-shang.html",
    "revision": "3b2a620640941d12492deb5435d73a39"
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
