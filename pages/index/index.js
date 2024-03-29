//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    status:true,
    
    banner: [
      "https://yanxuan.nosdn.127.net/baea18aa59217cabd190b19fc1cf1617.jpg?imageView&quality=75&thumbnail=750x0", "https://yanxuan.nosdn.127.net/d5683f01e132851229be21c52d808b62.jpg?imageView&quality=75&thumbnail=750x0", "https://yanxuan.nosdn.127.net/af7d906e174cb160ab5a979310aa223d.jpg?imageView&quality=75&thumbnail=750x0"
    ],
    channel: [{
        name: '居家',
        icon_url: "https://yanxuan.nosdn.127.net/4f00675caefd0d4177892ad18bfc2df6.png"
      },
      {
        name: '餐厨',
        icon_url: "https://yanxuan.nosdn.127.net/4aab4598017b5749e3b63309d25e9f6b.png"
      }, {
        name: '服装',
        icon_url: "https://yanxuan.nosdn.127.net/93168242df456b5f7bf3c89653b3db76.png"
      },
      {
        name: '配件',
        icon_url: "https://yanxuan.nosdn.127.net/288b0e864a24763bade8e22c0c39ff02.png"
      },
      {
        name: '志趣',
        icon_url: "https://yanxuan.nosdn.127.net/f0698297aaac41b778c1ea65eefb8b34.png"
      }
    ],
    brandList: [{
        "name": "CK制造商",
      "floor_price": 39,
        "new_pic_url": "http://yanxuan.nosdn.127.net/76638fb8e6990aadf837ce761c3b7399.jpg"
      },
      {
        "name": "MUJI制造商",
        "floor_price": 12.9,
        "new_pic_url": "http://yanxuan.nosdn.127.net/4ea3f1e60dd77c45c218e503d721a1ed.jpg"
      },
      {
        "name": "WMF制造商",
        "floor_price": 9.9,
        "new_pic_url": "http://yanxuan.nosdn.127.net/abcfa79205679db51198adc19c184dd1.jpg"
      },
      {
        "name": "Coach制造商",
        "floor_price": 49,
        "new_pic_url": "http://yanxuan.nosdn.127.net/b5cd73d3b310bad02539412f064d4ea1.jpg"
      }
    ],
    newGoods: [
      {
        "id": 1134030,
        "category_id": 1008002,
        "goods_sn": "1134030",
        "name": "简约知性记忆棉坐垫",
        "brand_id": 0,
        "goods_number": 100,
        "keywords": "",
        "goods_brief": "慢回弹海绵，时尚设计。",
        "goods_desc": "<p><img src=\"http://yanxuan.nosdn.127.net/3b31b3c57a7d7f42b13711bd1438d555.jpg\" _src=\"http://yanxuan.nosdn.127.net/3b31b3c57a7d7f42b13711bd1438d555.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/e92d9bad2a0339a81b47835f5530a358.jpg\" _src=\"http://yanxuan.nosdn.127.net/e92d9bad2a0339a81b47835f5530a358.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/edabc81fa6c7e66fe1698949f3b2b9f4.jpg\" _src=\"http://yanxuan.nosdn.127.net/edabc81fa6c7e66fe1698949f3b2b9f4.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/3444f640ec6ff6d6a8bcc3ce0f28848f.jpg\" _src=\"http://yanxuan.nosdn.127.net/3444f640ec6ff6d6a8bcc3ce0f28848f.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/317ebb6f899631d1ed52759c14170a39.jpg\" _src=\"http://yanxuan.nosdn.127.net/317ebb6f899631d1ed52759c14170a39.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/8f17af0ae3d56d482cec4105d390730a.jpg\" _src=\"http://yanxuan.nosdn.127.net/8f17af0ae3d56d482cec4105d390730a.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/345a9aba507ca86b34c37c29956eeb83.jpg\" _src=\"http://yanxuan.nosdn.127.net/345a9aba507ca86b34c37c29956eeb83.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/38b5c26064c4ea16ce3380bd69d2a671.jpg\" _src=\"http://yanxuan.nosdn.127.net/38b5c26064c4ea16ce3380bd69d2a671.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/eabf8d6393d65cbd9e2e87c75dfcc066.jpg\" _src=\"http://yanxuan.nosdn.127.net/eabf8d6393d65cbd9e2e87c75dfcc066.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/a703c316292e2c4c0b9d6551b25f1856.jpg\" _src=\"http://yanxuan.nosdn.127.net/a703c316292e2c4c0b9d6551b25f1856.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/734765425e21e073844c1c9e062dc35d.jpg\" _src=\"http://yanxuan.nosdn.127.net/734765425e21e073844c1c9e062dc35d.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/cc24974d903f1d0e109482954f1da8e8.jpg\" _src=\"http://yanxuan.nosdn.127.net/cc24974d903f1d0e109482954f1da8e8.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/da57cdb5646fbff0cf8007f60304c30f.jpg\" _src=\"http://yanxuan.nosdn.127.net/da57cdb5646fbff0cf8007f60304c30f.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/ddc76ceaeddfd7b527df40e01bf7877b.jpg\" _src=\"http://yanxuan.nosdn.127.net/ddc76ceaeddfd7b527df40e01bf7877b.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/c158fdad4e3c80f90b02cf930b661bb0.jpg\" _src=\"http://yanxuan.nosdn.127.net/c158fdad4e3c80f90b02cf930b661bb0.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/b9682e656087dfa53c0f8365a0c300da.jpg\" _src=\"http://yanxuan.nosdn.127.net/b9682e656087dfa53c0f8365a0c300da.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/567cd1355b86120b192d36b4710552a0.jpg\" _src=\"http://yanxuan.nosdn.127.net/567cd1355b86120b192d36b4710552a0.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/327629df66c47aeba0cb92072cf94471.jpg\" _src=\"http://yanxuan.nosdn.127.net/327629df66c47aeba0cb92072cf94471.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/31199ec47d032c282762d8d49087c5af.jpg\" _src=\"http://yanxuan.nosdn.127.net/31199ec47d032c282762d8d49087c5af.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/169746e1e8293452b58c184db111d98b.jpg\" _src=\"http://yanxuan.nosdn.127.net/169746e1e8293452b58c184db111d98b.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/a2a0cd32321cd198d67ea99fe5590120.jpg\" _src=\"http://yanxuan.nosdn.127.net/a2a0cd32321cd198d67ea99fe5590120.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/4657e1914acce0c476d756f72e40ef97.jpg\" _src=\"http://yanxuan.nosdn.127.net/4657e1914acce0c476d756f72e40ef97.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/9cb62e36a78ac61b587e6a9b5f9458a9.jpg\" _src=\"http://yanxuan.nosdn.127.net/9cb62e36a78ac61b587e6a9b5f9458a9.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/1b482df93b0a173be4a7bf6c2dabd543.jpg\" _src=\"http://yanxuan.nosdn.127.net/1b482df93b0a173be4a7bf6c2dabd543.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/533e784b613baea6c7d18ea81ce3b535.jpg\" _src=\"http://yanxuan.nosdn.127.net/533e784b613baea6c7d18ea81ce3b535.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/15772709fdda505c1a3a6b0e6453cce8.jpg\" _src=\"http://yanxuan.nosdn.127.net/15772709fdda505c1a3a6b0e6453cce8.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/3b8ffb1a51ec50d46707513e6d6cb420.jpg\" _src=\"http://yanxuan.nosdn.127.net/3b8ffb1a51ec50d46707513e6d6cb420.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/5cf3463a41c5fac921cdb11c3b0c8990.jpg\" _src=\"http://yanxuan.nosdn.127.net/5cf3463a41c5fac921cdb11c3b0c8990.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/2565c92fa398dd47a1458be3e9009c9b.jpg\" _src=\"http://yanxuan.nosdn.127.net/2565c92fa398dd47a1458be3e9009c9b.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/a4960bb2a74c1e22d82626ba7e33d33d.jpg\" _src=\"http://yanxuan.nosdn.127.net/a4960bb2a74c1e22d82626ba7e33d33d.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/9c13f2fb5d0daac9ef6fab890c866dc4.jpg\" _src=\"http://yanxuan.nosdn.127.net/9c13f2fb5d0daac9ef6fab890c866dc4.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/749704a3f974d419e8b59a32de540784.jpg\" _src=\"http://yanxuan.nosdn.127.net/749704a3f974d419e8b59a32de540784.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/d1c4d8d91866700a5e8c1cd33ea75b15.jpg\" _src=\"http://yanxuan.nosdn.127.net/d1c4d8d91866700a5e8c1cd33ea75b15.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/c55b8dc599470be31aa0218438a36528.jpg\" _src=\"http://yanxuan.nosdn.127.net/c55b8dc599470be31aa0218438a36528.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/80c3a1e268905658a576eccd85a65f37.jpg\" _src=\"http://yanxuan.nosdn.127.net/80c3a1e268905658a576eccd85a65f37.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/6c597a8dbecc1e3de31e9b8e5d420586.jpg\" _src=\"http://yanxuan.nosdn.127.net/6c597a8dbecc1e3de31e9b8e5d420586.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/320ec6f1fcbb288e5676832dceff16aa.jpg\" _src=\"http://yanxuan.nosdn.127.net/320ec6f1fcbb288e5676832dceff16aa.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/8fc9119b2c7986bd575329d3a95abe9e.jpg\" _src=\"http://yanxuan.nosdn.127.net/8fc9119b2c7986bd575329d3a95abe9e.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/438a62f5bb789a6fa70b8ed5578cd7e1.jpg\" _src=\"http://yanxuan.nosdn.127.net/438a62f5bb789a6fa70b8ed5578cd7e1.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/1fe137a665f79a67359a9748de200ca6.jpg\" _src=\"http://yanxuan.nosdn.127.net/1fe137a665f79a67359a9748de200ca6.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/02ad092fac2cf5da935078f01afe3ff3.jpg\" _src=\"http://yanxuan.nosdn.127.net/02ad092fac2cf5da935078f01afe3ff3.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/d390285b49a6f4eb5ec9a460f77bce70.jpg\" _src=\"http://yanxuan.nosdn.127.net/d390285b49a6f4eb5ec9a460f77bce70.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/469c7bc6e70c8d3db7639dc3d6949356.jpg\" _src=\"http://yanxuan.nosdn.127.net/469c7bc6e70c8d3db7639dc3d6949356.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/323b6604e88a5c748b4f7cd00ca84595.jpg\" _src=\"http://yanxuan.nosdn.127.net/323b6604e88a5c748b4f7cd00ca84595.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/4151a8c4cae3b9998c95ae0bd9528e93.jpg\" _src=\"http://yanxuan.nosdn.127.net/4151a8c4cae3b9998c95ae0bd9528e93.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/c968e429b7a1f21ffa6281c76fd77c32.jpg\" _src=\"http://yanxuan.nosdn.127.net/c968e429b7a1f21ffa6281c76fd77c32.jpg\" style=\"\"/></p><p><br/></p>",
        "is_on_sale": 1,
        "add_time": 0,
        "sort_order": 12,
        "is_delete": 0,
        "attribute_category": 0,
        "counter_price": 0,
        "extra_price": 0,
        "is_new": 1,
        "goods_unit": "件",
        "primary_pic_url": "http://yanxuan.nosdn.127.net/1f4758a9d68c5ebfafd3fc8b960707a6.jpg",
        "list_pic_url": "http://yanxuan.nosdn.127.net/aa49dfe878becf768eddc4c1636643a6.png",
        "retail_price": 46,
        "sell_volume": 7580,
        "primary_product_id": 1135146,
        "unit_price": 0,
        "promotion_desc": "限时购",
        "promotion_tag": "",
        "app_exclusive_price": 0,
        "is_app_exclusive": 0,
        "is_limited": 0,
        "is_hot": 0
      },
      {
        "id": 1134032,
        "category_id": 1008002,
        "goods_sn": "1134032",
        "name": "趣味粉彩系列记忆棉坐垫",
        "brand_id": 0,
        "goods_number": 100,
        "keywords": "",
        "goods_brief": "慢回弹海绵的呵护，萌趣添彩。",
        "goods_desc": "<p><img src=\"http://yanxuan.nosdn.127.net/ecbd6f05e8fc71571d889324e2f0dcad.jpg\" _src=\"http://yanxuan.nosdn.127.net/ecbd6f05e8fc71571d889324e2f0dcad.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/bcdbec6d1b2ff457a0e7513df91563f0.jpg\" _src=\"http://yanxuan.nosdn.127.net/bcdbec6d1b2ff457a0e7513df91563f0.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/dcb21741c5c773e06cf4502925c81944.jpg\" _src=\"http://yanxuan.nosdn.127.net/dcb21741c5c773e06cf4502925c81944.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/86ffdbf55ae77e3c21a07a70445deda8.jpg\" _src=\"http://yanxuan.nosdn.127.net/86ffdbf55ae77e3c21a07a70445deda8.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/598afa2e998b37d2c7513e7ab3a3ab73.jpg\" _src=\"http://yanxuan.nosdn.127.net/598afa2e998b37d2c7513e7ab3a3ab73.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/91dc47775ce962a1c2a7ac5e620f058c.jpg\" _src=\"http://yanxuan.nosdn.127.net/91dc47775ce962a1c2a7ac5e620f058c.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/394b2bd47066e301a2144ab56b3b3350.jpg\" _src=\"http://yanxuan.nosdn.127.net/394b2bd47066e301a2144ab56b3b3350.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/80dd29542f2ecd571db647486cda4e9f.jpg\" _src=\"http://yanxuan.nosdn.127.net/80dd29542f2ecd571db647486cda4e9f.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/2a5edf27fe34192ed741ee8b011e8bcc.jpg\" _src=\"http://yanxuan.nosdn.127.net/2a5edf27fe34192ed741ee8b011e8bcc.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/d2ee6fd1f0893f6c033b27f7353d1622.jpg\" _src=\"http://yanxuan.nosdn.127.net/d2ee6fd1f0893f6c033b27f7353d1622.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/e11dd4cdab417eba665e0ad4ebc9243e.jpg\" _src=\"http://yanxuan.nosdn.127.net/e11dd4cdab417eba665e0ad4ebc9243e.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/feb11e4b1fb22d07533f11b59d6e602f.jpg\" _src=\"http://yanxuan.nosdn.127.net/feb11e4b1fb22d07533f11b59d6e602f.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/5094e4cf95940490ffccfad5db698301.jpg\" _src=\"http://yanxuan.nosdn.127.net/5094e4cf95940490ffccfad5db698301.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/b0f9af05048828816c9a774124509dd0.jpg\" _src=\"http://yanxuan.nosdn.127.net/b0f9af05048828816c9a774124509dd0.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/82020ae739c4ba0957db83b22c102673.jpg\" _src=\"http://yanxuan.nosdn.127.net/82020ae739c4ba0957db83b22c102673.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/09789518f58c163313d5d4b190888500.jpg\" _src=\"http://yanxuan.nosdn.127.net/09789518f58c163313d5d4b190888500.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/3d155f2f1d12b54e5dfc83e3d3496dc2.jpg\" _src=\"http://yanxuan.nosdn.127.net/3d155f2f1d12b54e5dfc83e3d3496dc2.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/44d1b96c7810379c6b48d58e637cba55.jpg\" _src=\"http://yanxuan.nosdn.127.net/44d1b96c7810379c6b48d58e637cba55.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/c2075c17cf5c447d27c89f23d2d63462.jpg\" _src=\"http://yanxuan.nosdn.127.net/c2075c17cf5c447d27c89f23d2d63462.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/3985bdbdb5899bee08137ab2300f3810.jpg\" _src=\"http://yanxuan.nosdn.127.net/3985bdbdb5899bee08137ab2300f3810.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/fe8a47c8056ed17d6e08ac715d3aee93.jpg\" _src=\"http://yanxuan.nosdn.127.net/fe8a47c8056ed17d6e08ac715d3aee93.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/31f98b129c846c333bb95db48c434271.jpg\" _src=\"http://yanxuan.nosdn.127.net/31f98b129c846c333bb95db48c434271.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/857e3041c75f5ffb2eeb394ca9e1211d.jpg\" _src=\"http://yanxuan.nosdn.127.net/857e3041c75f5ffb2eeb394ca9e1211d.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/b04c0a98d696e3ba0a37857bcca5ca4d.jpg\" _src=\"http://yanxuan.nosdn.127.net/b04c0a98d696e3ba0a37857bcca5ca4d.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/33a9842b9e01b0629d56a4ae725611a1.jpg\" _src=\"http://yanxuan.nosdn.127.net/33a9842b9e01b0629d56a4ae725611a1.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/296263f5dc5e365662203331a940d058.jpg\" _src=\"http://yanxuan.nosdn.127.net/296263f5dc5e365662203331a940d058.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/25e32af7a35f9c3b1105d5e1dc163e8b.jpg\" _src=\"http://yanxuan.nosdn.127.net/25e32af7a35f9c3b1105d5e1dc163e8b.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/6efac795f3b6207cf090846887461d65.jpg\" _src=\"http://yanxuan.nosdn.127.net/6efac795f3b6207cf090846887461d65.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/e9b1e2e1c90d1481c83460ff71eaa47e.jpg\" _src=\"http://yanxuan.nosdn.127.net/e9b1e2e1c90d1481c83460ff71eaa47e.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/7ab77215a79e8d9cc93304ec139af08e.jpg\" _src=\"http://yanxuan.nosdn.127.net/7ab77215a79e8d9cc93304ec139af08e.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/5eaab9336750bddb5a88fddfae7d2fbd.jpg\" _src=\"http://yanxuan.nosdn.127.net/5eaab9336750bddb5a88fddfae7d2fbd.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/e7046719cdf72538e69b0313587c8565.jpg\" _src=\"http://yanxuan.nosdn.127.net/e7046719cdf72538e69b0313587c8565.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/748836f2589106b87efec1c6be06f93d.jpg\" _src=\"http://yanxuan.nosdn.127.net/748836f2589106b87efec1c6be06f93d.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/40da8c4bed171c0fbfa9f2089a2309d7.jpg\" _src=\"http://yanxuan.nosdn.127.net/40da8c4bed171c0fbfa9f2089a2309d7.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/468ed6ff0bbee10ba15467bb7b75c202.jpg\" _src=\"http://yanxuan.nosdn.127.net/468ed6ff0bbee10ba15467bb7b75c202.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/e2e1f9262f85b3301a6c9780acfcbb75.jpg\" _src=\"http://yanxuan.nosdn.127.net/e2e1f9262f85b3301a6c9780acfcbb75.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/3ef0c70c73bff6274be4c562e88a7d6f.jpg\" _src=\"http://yanxuan.nosdn.127.net/3ef0c70c73bff6274be4c562e88a7d6f.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/720c18b1bd787c125d59aa8f8f4c8e61.jpg\" _src=\"http://yanxuan.nosdn.127.net/720c18b1bd787c125d59aa8f8f4c8e61.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/cc80af1a2b58ac83a5d65cb3fa02f3db.jpg\" _src=\"http://yanxuan.nosdn.127.net/cc80af1a2b58ac83a5d65cb3fa02f3db.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/98d647cacddc7bdd7eae86050eb9f3d0.jpg\" _src=\"http://yanxuan.nosdn.127.net/98d647cacddc7bdd7eae86050eb9f3d0.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/a091331dc2412de558446a42831b0358.jpg\" _src=\"http://yanxuan.nosdn.127.net/a091331dc2412de558446a42831b0358.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/bd6126e6eb2a4e493104f75ecbeb6e32.jpg\" _src=\"http://yanxuan.nosdn.127.net/bd6126e6eb2a4e493104f75ecbeb6e32.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/3d15ad6abec2f8c499c0d9d036a8b524.jpg\" _src=\"http://yanxuan.nosdn.127.net/3d15ad6abec2f8c499c0d9d036a8b524.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/69a56acc851dd042a52f18c78ac8ee33.jpg\" _src=\"http://yanxuan.nosdn.127.net/69a56acc851dd042a52f18c78ac8ee33.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/c8bde0e10b1e089088ca38fd77fbf994.jpg\" _src=\"http://yanxuan.nosdn.127.net/c8bde0e10b1e089088ca38fd77fbf994.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/bd9ffb9b37957549689ece880fc78b2f.jpg\" _src=\"http://yanxuan.nosdn.127.net/bd9ffb9b37957549689ece880fc78b2f.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/09ad556caef32a5c951dc7fbad1f8de3.jpg\" _src=\"http://yanxuan.nosdn.127.net/09ad556caef32a5c951dc7fbad1f8de3.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/a919f989730d977f8b1745b5dc0e6a8d.jpg\" _src=\"http://yanxuan.nosdn.127.net/a919f989730d977f8b1745b5dc0e6a8d.jpg\" style=\"\"/></p><p><br/></p>",
        "is_on_sale": 1,
        "add_time": 0,
        "sort_order": 13,
        "is_delete": 0,
        "attribute_category": 0,
        "counter_price": 0,
        "extra_price": 0,
        "is_new": 1,
        "goods_unit": "件",
        "primary_pic_url": "http://yanxuan.nosdn.127.net/5357e0476acbc71131df5a3fb3ea13d9.jpg",
        "list_pic_url": "http://yanxuan.nosdn.127.net/8b30eeb17c831eba08b97bdcb4c46a8e.png",
        "retail_price": 49,
        "sell_volume": 2869,
        "primary_product_id": 1135151,
        "unit_price": 0,
        "promotion_desc": "限时购",
        "promotion_tag": "",
        "app_exclusive_price": 0,
        "is_app_exclusive": 0,
        "is_limited": 0,
        "is_hot": 0
      },
      {
        "id": 1135002,
        "category_id": 1008009,
        "goods_sn": "1135002",
        "name": "宫廷奢华真丝四件套",
        "brand_id": 0,
        "goods_number": 100,
        "keywords": "",
        "goods_brief": "100%桑蚕丝，丝滑润肤",
        "goods_desc": "<p><img src=\"http://yanxuan.nosdn.127.net/0424fc28e47640c7c6ba75312c2ca5bf.jpg\" _src=\"http://yanxuan.nosdn.127.net/0424fc28e47640c7c6ba75312c2ca5bf.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/8fc6f2fd12ad2ab3e88967f065ff2bbd.jpg\" _src=\"http://yanxuan.nosdn.127.net/8fc6f2fd12ad2ab3e88967f065ff2bbd.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/22c6af025ed0d821fa457007299374b3.jpg\" _src=\"http://yanxuan.nosdn.127.net/22c6af025ed0d821fa457007299374b3.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/4fd5bff6ec89da1b06fa816519d6e7b6.jpg\" _src=\"http://yanxuan.nosdn.127.net/4fd5bff6ec89da1b06fa816519d6e7b6.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/829b112ed840e85bc044f06c6ceab03c.jpg\" _src=\"http://yanxuan.nosdn.127.net/829b112ed840e85bc044f06c6ceab03c.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/8133e03d441d5cc5b76b24a08dc07d98.jpg\" _src=\"http://yanxuan.nosdn.127.net/8133e03d441d5cc5b76b24a08dc07d98.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/8d63f4e1398c83c683d7338d4f8342b6.jpg\" _src=\"http://yanxuan.nosdn.127.net/8d63f4e1398c83c683d7338d4f8342b6.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/282121278c7b6955012291e22e593eb1.jpg\" _src=\"http://yanxuan.nosdn.127.net/282121278c7b6955012291e22e593eb1.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/a20f4e08ee42189505c6280deebd099b.jpg\" _src=\"http://yanxuan.nosdn.127.net/a20f4e08ee42189505c6280deebd099b.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/4e684e5f1a11350dda1fed29bdd3e2b9.jpg\" _src=\"http://yanxuan.nosdn.127.net/4e684e5f1a11350dda1fed29bdd3e2b9.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/14b61c5ee99410c074e707a218eeda25.jpg\" _src=\"http://yanxuan.nosdn.127.net/14b61c5ee99410c074e707a218eeda25.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/09017d6080bd06cc61fe041abc63e595.jpg\" _src=\"http://yanxuan.nosdn.127.net/09017d6080bd06cc61fe041abc63e595.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/6ce679a19442519e3c294af05bfa489f.jpg\" _src=\"http://yanxuan.nosdn.127.net/6ce679a19442519e3c294af05bfa489f.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/ba880116df8e433bec57a150434cf902.jpg\" _src=\"http://yanxuan.nosdn.127.net/ba880116df8e433bec57a150434cf902.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/9db45016db258bee5056e3679d7133dd.jpg\" _src=\"http://yanxuan.nosdn.127.net/9db45016db258bee5056e3679d7133dd.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/6443ecab537c173230f5b9145e72c63c.jpg\" _src=\"http://yanxuan.nosdn.127.net/6443ecab537c173230f5b9145e72c63c.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/e3a2430b1b44534b42fba1bc619fe99b.jpg\" _src=\"http://yanxuan.nosdn.127.net/e3a2430b1b44534b42fba1bc619fe99b.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/5f4ab8ef6f39d6ee1982a1b5235df01e.jpg\" _src=\"http://yanxuan.nosdn.127.net/5f4ab8ef6f39d6ee1982a1b5235df01e.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/deb0bd2f9c6305edda5a913254eb0226.jpg\" _src=\"http://yanxuan.nosdn.127.net/deb0bd2f9c6305edda5a913254eb0226.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/5f605418c295aeafbea74c080b80e1a4.jpg\" _src=\"http://yanxuan.nosdn.127.net/5f605418c295aeafbea74c080b80e1a4.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/09e488b6365dfe88c62c342bb6e2651d.jpg\" _src=\"http://yanxuan.nosdn.127.net/09e488b6365dfe88c62c342bb6e2651d.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/01ae7e8310ba9d93ea0126f45827b1bf.jpg\" _src=\"http://yanxuan.nosdn.127.net/01ae7e8310ba9d93ea0126f45827b1bf.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/b3bc7467085d7e29f6361d150faa3a12.jpg\" _src=\"http://yanxuan.nosdn.127.net/b3bc7467085d7e29f6361d150faa3a12.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/a6d9a750dc037b2d4f12caae612aca01.jpg\" _src=\"http://yanxuan.nosdn.127.net/a6d9a750dc037b2d4f12caae612aca01.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/71e32a86e630b8002c9107ca1f277706.jpg\" _src=\"http://yanxuan.nosdn.127.net/71e32a86e630b8002c9107ca1f277706.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/325da9327a2285f12ef2d5bc8c4b0b59.jpg\" _src=\"http://yanxuan.nosdn.127.net/325da9327a2285f12ef2d5bc8c4b0b59.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/3518bd7650cfe0a2a771b15b860056e1.jpg\" _src=\"http://yanxuan.nosdn.127.net/3518bd7650cfe0a2a771b15b860056e1.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/cec68b3a090bbc20e92ab615f46b6cb0.jpg\" _src=\"http://yanxuan.nosdn.127.net/cec68b3a090bbc20e92ab615f46b6cb0.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/650d14dad1f859e6e3e87fd6e915023d.jpg\" _src=\"http://yanxuan.nosdn.127.net/650d14dad1f859e6e3e87fd6e915023d.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/9287025a3894cfcbb0a123943e1a7f40.jpg\" _src=\"http://yanxuan.nosdn.127.net/9287025a3894cfcbb0a123943e1a7f40.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/f0b50198a0849ebcc8a019574efe51f8.jpg\" _src=\"http://yanxuan.nosdn.127.net/f0b50198a0849ebcc8a019574efe51f8.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/058aa1880bb7f810fc1f8133278c59af.jpg\" _src=\"http://yanxuan.nosdn.127.net/058aa1880bb7f810fc1f8133278c59af.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/4c175f566a2a819a53872239e201cda7.jpg\" _src=\"http://yanxuan.nosdn.127.net/4c175f566a2a819a53872239e201cda7.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/ecaad579f54b460ddbaa3daee6cdced8.jpg\" _src=\"http://yanxuan.nosdn.127.net/ecaad579f54b460ddbaa3daee6cdced8.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/c3d70c0519f20473d4b883c5d8bf8eb0.jpg\" _src=\"http://yanxuan.nosdn.127.net/c3d70c0519f20473d4b883c5d8bf8eb0.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/18ebbb3dff05fe4c62a098aafa907adb.jpg\" _src=\"http://yanxuan.nosdn.127.net/18ebbb3dff05fe4c62a098aafa907adb.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/a21ff1cef6c9b8faf725febef4978883.jpg\" _src=\"http://yanxuan.nosdn.127.net/a21ff1cef6c9b8faf725febef4978883.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/b77ebe85aae6430206f5effc343d061b.jpg\" _src=\"http://yanxuan.nosdn.127.net/b77ebe85aae6430206f5effc343d061b.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/1c3e6fe69de64048833a59c95151c28c.jpg\" _src=\"http://yanxuan.nosdn.127.net/1c3e6fe69de64048833a59c95151c28c.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/5177ac6904222f532df28d15bc71491a.jpg\" _src=\"http://yanxuan.nosdn.127.net/5177ac6904222f532df28d15bc71491a.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/014fcb0caef743722da0bfbafcfdeb01.jpg\" _src=\"http://yanxuan.nosdn.127.net/014fcb0caef743722da0bfbafcfdeb01.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/1c24c42a4504dc22551fda973c441638.jpg\" _src=\"http://yanxuan.nosdn.127.net/1c24c42a4504dc22551fda973c441638.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/70872946f2b39cafe51e4e252f7ffcd7.jpg\" _src=\"http://yanxuan.nosdn.127.net/70872946f2b39cafe51e4e252f7ffcd7.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/65cda16ab3d35596eea8ab5f43443579.jpg\" _src=\"http://yanxuan.nosdn.127.net/65cda16ab3d35596eea8ab5f43443579.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/fd06e90ca149d8a147c3c42fff7373e4.jpg\" _src=\"http://yanxuan.nosdn.127.net/fd06e90ca149d8a147c3c42fff7373e4.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/89c0e9b6f6a514cf0c288bc31f439d6d.jpg\" _src=\"http://yanxuan.nosdn.127.net/89c0e9b6f6a514cf0c288bc31f439d6d.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/0295b6e2d297ad00f9410342a43d4737.jpg\" _src=\"http://yanxuan.nosdn.127.net/0295b6e2d297ad00f9410342a43d4737.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/d583c4150b3003726097b9bf6b02b973.jpg\" _src=\"http://yanxuan.nosdn.127.net/d583c4150b3003726097b9bf6b02b973.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/0ce855ae6a6b37e1927ca031cd4a681f.jpg\" _src=\"http://yanxuan.nosdn.127.net/0ce855ae6a6b37e1927ca031cd4a681f.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/21cfdd18eef2a56e136145b883fb5352.jpg\" _src=\"http://yanxuan.nosdn.127.net/21cfdd18eef2a56e136145b883fb5352.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/e7bd322850ade4c17c09f5ea08e274ce.jpg\" _src=\"http://yanxuan.nosdn.127.net/e7bd322850ade4c17c09f5ea08e274ce.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/aad9f78488ab2a7f1e2b2b6327b14c15.jpg\" _src=\"http://yanxuan.nosdn.127.net/aad9f78488ab2a7f1e2b2b6327b14c15.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/c350416e505b658f74177c5f794c2306.jpg\" _src=\"http://yanxuan.nosdn.127.net/c350416e505b658f74177c5f794c2306.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/e5b8ad7295c3426018f850c224fa6a13.jpg\" _src=\"http://yanxuan.nosdn.127.net/e5b8ad7295c3426018f850c224fa6a13.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/78dee1c7c3d083b6e515a894db6b2c1a.jpg\" _src=\"http://yanxuan.nosdn.127.net/78dee1c7c3d083b6e515a894db6b2c1a.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/1561f13761b5678e629f0c6b830bddd4.jpg\" _src=\"http://yanxuan.nosdn.127.net/1561f13761b5678e629f0c6b830bddd4.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/613c2a8fabcaffb1ad91f59b0651e0ad.jpg\" _src=\"http://yanxuan.nosdn.127.net/613c2a8fabcaffb1ad91f59b0651e0ad.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/57617866bd29417ea92e89c09a523b42.jpg\" _src=\"http://yanxuan.nosdn.127.net/57617866bd29417ea92e89c09a523b42.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/f476dbfc3a3a5190793d6cf48bed38ba.jpg\" _src=\"http://yanxuan.nosdn.127.net/f476dbfc3a3a5190793d6cf48bed38ba.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/8ed42bff4fddcac2c1c792b09577b2d4.jpg\" _src=\"http://yanxuan.nosdn.127.net/8ed42bff4fddcac2c1c792b09577b2d4.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/1042a5564cf6cd8cde1244500b6dc59e.jpg\" _src=\"http://yanxuan.nosdn.127.net/1042a5564cf6cd8cde1244500b6dc59e.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/62817f417e4f9dcc2ffbac799c65be85.jpg\" _src=\"http://yanxuan.nosdn.127.net/62817f417e4f9dcc2ffbac799c65be85.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/73ebcb902436b1f1c2b4c65f4227b991.jpg\" _src=\"http://yanxuan.nosdn.127.net/73ebcb902436b1f1c2b4c65f4227b991.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/e627e3b2666385e9c7687e29e2b9cae0.jpg\" _src=\"http://yanxuan.nosdn.127.net/e627e3b2666385e9c7687e29e2b9cae0.jpg\" style=\"\"/></p><p><br/></p>",
        "is_on_sale": 1,
        "add_time": 0,
        "sort_order": 1,
        "is_delete": 0,
        "attribute_category": 0,
        "counter_price": 0,
        "extra_price": 0,
        "is_new": 1,
        "goods_unit": "件",
        "primary_pic_url": "http://yanxuan.nosdn.127.net/c1045159a06fac09f4cd994023ac0345.jpg",
        "list_pic_url": "http://yanxuan.nosdn.127.net/45548f26cfd0c7c41e0afc3709d48286.png",
        "retail_price": 2599,
        "sell_volume": 232,
        "primary_product_id": 1136010,
        "unit_price": 0,
        "promotion_desc": "限时购",
        "promotion_tag": "",
        "app_exclusive_price": 0,
        "is_app_exclusive": 0,
        "is_limited": 0,
        "is_hot": 0
      },
      {
        "id": 1181000,
        "category_id": 1008008,
        "goods_sn": "1181000",
        "name": "母亲节礼物-舒适安睡组合",
        "brand_id": 1001020,
        "goods_number": 100,
        "keywords": "",
        "goods_brief": "安心舒适是最好的礼物",
        "goods_desc": "<p><img src=\"http://yanxuan.nosdn.127.net/3ddfe10db43f7df33ba82ae7570ada80.jpg\" _src=\"http://yanxuan.nosdn.127.net/3ddfe10db43f7df33ba82ae7570ada80.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/7682b7930b4776ce032f509c24a74a1e.jpg\" _src=\"http://yanxuan.nosdn.127.net/7682b7930b4776ce032f509c24a74a1e.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/e0bb6a50e27681925c5bb26bceb67ef4.jpg\" _src=\"http://yanxuan.nosdn.127.net/e0bb6a50e27681925c5bb26bceb67ef4.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/ba63b244c74ce06fda82bb6a29cc0f71.jpg\" _src=\"http://yanxuan.nosdn.127.net/ba63b244c74ce06fda82bb6a29cc0f71.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/3c7808c3a4769bad5af4974782f08654.jpg\" _src=\"http://yanxuan.nosdn.127.net/3c7808c3a4769bad5af4974782f08654.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/71798aaac23a91fdab4d77e1b980a4df.jpg\" _src=\"http://yanxuan.nosdn.127.net/71798aaac23a91fdab4d77e1b980a4df.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/c88cbb2dd2310b732571f49050fe4059.jpg\" _src=\"http://yanxuan.nosdn.127.net/c88cbb2dd2310b732571f49050fe4059.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/5dfdcd654e0f3076f7c05dd9c19c15ea.jpg\" _src=\"http://yanxuan.nosdn.127.net/5dfdcd654e0f3076f7c05dd9c19c15ea.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/bd55d6ef7af69422d8d76af10ee70156.jpg\" _src=\"http://yanxuan.nosdn.127.net/bd55d6ef7af69422d8d76af10ee70156.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/bae571b22954c521b35e446d652edc1d.jpg\" _src=\"http://yanxuan.nosdn.127.net/bae571b22954c521b35e446d652edc1d.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/e709c4d9e46d602a4d2125e47110f6ae.jpg\" _src=\"http://yanxuan.nosdn.127.net/e709c4d9e46d602a4d2125e47110f6ae.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/83e41915035c418db177af8b1eca385c.jpg\" _src=\"http://yanxuan.nosdn.127.net/83e41915035c418db177af8b1eca385c.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/f42c561e6935fe3e0e0873653da78670.jpg\" _src=\"http://yanxuan.nosdn.127.net/f42c561e6935fe3e0e0873653da78670.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/8317726fbae80b98764dc4c6233a913e.jpg\" _src=\"http://yanxuan.nosdn.127.net/8317726fbae80b98764dc4c6233a913e.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/ba904b7c948b8015db2171435325270f.jpg\" _src=\"http://yanxuan.nosdn.127.net/ba904b7c948b8015db2171435325270f.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/4969c73d0d8f29bffb69529c96ca4889.jpg\" _src=\"http://yanxuan.nosdn.127.net/4969c73d0d8f29bffb69529c96ca4889.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/d80b9b8c5c31031d1cd5357e48748632.jpg\" _src=\"http://yanxuan.nosdn.127.net/d80b9b8c5c31031d1cd5357e48748632.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/3fe79bdae40662a7b1feed3179d3dd1f.jpg\" _src=\"http://yanxuan.nosdn.127.net/3fe79bdae40662a7b1feed3179d3dd1f.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/79eef059963b12479f65e782d1dca128.jpg\" _src=\"http://yanxuan.nosdn.127.net/79eef059963b12479f65e782d1dca128.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/e5a8f64f4297ccc01b41df98b0f252c8.jpg\" _src=\"http://yanxuan.nosdn.127.net/e5a8f64f4297ccc01b41df98b0f252c8.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/a940b9e9525c4861407e4c3b07b02977.jpg\" _src=\"http://yanxuan.nosdn.127.net/a940b9e9525c4861407e4c3b07b02977.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/224b8b81cbe12e4ad060a50f1e26601a.jpg\" _src=\"http://yanxuan.nosdn.127.net/224b8b81cbe12e4ad060a50f1e26601a.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/85e151647452fad718effb7b1adc18e2.jpg\" _src=\"http://yanxuan.nosdn.127.net/85e151647452fad718effb7b1adc18e2.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/d47444ff3bb9dc0aa4ab1f9b84d83768.jpg\" _src=\"http://yanxuan.nosdn.127.net/d47444ff3bb9dc0aa4ab1f9b84d83768.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/136262743f0c849cc0c55c8e7963dd7e.jpg\" _src=\"http://yanxuan.nosdn.127.net/136262743f0c849cc0c55c8e7963dd7e.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/331a97cbaff5b25a3b08ed7cdfe29df9.jpg\" _src=\"http://yanxuan.nosdn.127.net/331a97cbaff5b25a3b08ed7cdfe29df9.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/89b450aa0a8afe1db566dcad926f1fe8.jpg\" _src=\"http://yanxuan.nosdn.127.net/89b450aa0a8afe1db566dcad926f1fe8.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/c1cf94f13b7280a97e751cebe573fa78.jpg\" _src=\"http://yanxuan.nosdn.127.net/c1cf94f13b7280a97e751cebe573fa78.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/1822c23def83b77e7607c24237eeec74.jpg\" _src=\"http://yanxuan.nosdn.127.net/1822c23def83b77e7607c24237eeec74.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/2af234312b3914d6d0bc316f92134614.jpg\" _src=\"http://yanxuan.nosdn.127.net/2af234312b3914d6d0bc316f92134614.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/c4f8ab2b3813275d954a8bedcf902d26.jpg\" _src=\"http://yanxuan.nosdn.127.net/c4f8ab2b3813275d954a8bedcf902d26.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/42f18842ff0c92ed849c4401ae47bb61.jpg\" _src=\"http://yanxuan.nosdn.127.net/42f18842ff0c92ed849c4401ae47bb61.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/a8ea64a35799e50ab31ecb65345fe8f4.jpg\" _src=\"http://yanxuan.nosdn.127.net/a8ea64a35799e50ab31ecb65345fe8f4.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/18759fa90cd153bdd744280807c3c155.jpg\" _src=\"http://yanxuan.nosdn.127.net/18759fa90cd153bdd744280807c3c155.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/431f00d068a8e747959deb3b7bdd495a.jpg\" _src=\"http://yanxuan.nosdn.127.net/431f00d068a8e747959deb3b7bdd495a.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/5bd3b44f1f4c627bfa39f7809e866ec6.jpg\" _src=\"http://yanxuan.nosdn.127.net/5bd3b44f1f4c627bfa39f7809e866ec6.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/7fc36778fe2f6129b9c26e8298c5be7e.jpg\" _src=\"http://yanxuan.nosdn.127.net/7fc36778fe2f6129b9c26e8298c5be7e.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/c568432e3d5ab6786cd9dcae8008891b.jpg\" _src=\"http://yanxuan.nosdn.127.net/c568432e3d5ab6786cd9dcae8008891b.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/ec82ff5aecafa48807117da68cce2ce9.jpg\" _src=\"http://yanxuan.nosdn.127.net/ec82ff5aecafa48807117da68cce2ce9.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/b8eccbed570da595e6f8a71ed4abc42c.jpg\" _src=\"http://yanxuan.nosdn.127.net/b8eccbed570da595e6f8a71ed4abc42c.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/9cae1fed6ecefcd61435fe6e2c700fd6.jpg\" _src=\"http://yanxuan.nosdn.127.net/9cae1fed6ecefcd61435fe6e2c700fd6.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/e306a418f82777399f5e88b93cca22db.jpg\" _src=\"http://yanxuan.nosdn.127.net/e306a418f82777399f5e88b93cca22db.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/a66d717084e23864ce079f936557709f.jpg\" _src=\"http://yanxuan.nosdn.127.net/a66d717084e23864ce079f936557709f.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/6ae06c6505cdbf87a0210fe3b8727d5f.jpg\" _src=\"http://yanxuan.nosdn.127.net/6ae06c6505cdbf87a0210fe3b8727d5f.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/58ac2086725b0ba2fe800195f274a0b4.jpg\" _src=\"http://yanxuan.nosdn.127.net/58ac2086725b0ba2fe800195f274a0b4.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/5e2e9d9eb099647fbe041ec6645ac034.jpg\" _src=\"http://yanxuan.nosdn.127.net/5e2e9d9eb099647fbe041ec6645ac034.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/8154357c0fab82bd4e67cda9aaa128c0.jpg\" _src=\"http://yanxuan.nosdn.127.net/8154357c0fab82bd4e67cda9aaa128c0.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/4325763b738ec3183ecf0d82b2b28e32.jpg\" _src=\"http://yanxuan.nosdn.127.net/4325763b738ec3183ecf0d82b2b28e32.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/06d8ea9d10035a00f26c5c52cc601ca7.jpg\" _src=\"http://yanxuan.nosdn.127.net/06d8ea9d10035a00f26c5c52cc601ca7.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/499f30b9e69b5dddf3db36f105756111.jpg\" _src=\"http://yanxuan.nosdn.127.net/499f30b9e69b5dddf3db36f105756111.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/ed7e1733d54e711a560edb3a76f1a60c.jpg\" _src=\"http://yanxuan.nosdn.127.net/ed7e1733d54e711a560edb3a76f1a60c.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/b6474347eebdb917d2e827fd526dd01c.jpg\" _src=\"http://yanxuan.nosdn.127.net/b6474347eebdb917d2e827fd526dd01c.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/b2c0691f9204c5ebc94b4ff678919ca7.jpg\" _src=\"http://yanxuan.nosdn.127.net/b2c0691f9204c5ebc94b4ff678919ca7.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/b4811e702a6884a9251d7cc9e3b06b6f.jpg\" _src=\"http://yanxuan.nosdn.127.net/b4811e702a6884a9251d7cc9e3b06b6f.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/d518783c054695acf329e81d597fdec3.jpg\" _src=\"http://yanxuan.nosdn.127.net/d518783c054695acf329e81d597fdec3.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/835ce09e785cca635c176008975053a1.jpg\" _src=\"http://yanxuan.nosdn.127.net/835ce09e785cca635c176008975053a1.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/769af780de81a302c0a3b03ed8e6c528.jpg\" _src=\"http://yanxuan.nosdn.127.net/769af780de81a302c0a3b03ed8e6c528.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/da34f99daf9141f0fe56a766461b8485.jpg\" _src=\"http://yanxuan.nosdn.127.net/da34f99daf9141f0fe56a766461b8485.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/d7c9cd8722a2f9a78e158ce02ec5d4f2.jpg\" _src=\"http://yanxuan.nosdn.127.net/d7c9cd8722a2f9a78e158ce02ec5d4f2.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/09ea18953884b15227819e326103462b.jpg\" _src=\"http://yanxuan.nosdn.127.net/09ea18953884b15227819e326103462b.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/5ef728213983842edf1aec27b2c1f5b6.jpg\" _src=\"http://yanxuan.nosdn.127.net/5ef728213983842edf1aec27b2c1f5b6.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/95409f2a884dcfeaabfe5e61fcf9ec37.jpg\" _src=\"http://yanxuan.nosdn.127.net/95409f2a884dcfeaabfe5e61fcf9ec37.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/6807836dc2a940ba56ea10c7a63b14c9.jpg\" _src=\"http://yanxuan.nosdn.127.net/6807836dc2a940ba56ea10c7a63b14c9.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/e1d976d06853e7a0e6c9cc4ab484ac8a.jpg\" _src=\"http://yanxuan.nosdn.127.net/e1d976d06853e7a0e6c9cc4ab484ac8a.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/47f5673dec5005092f6d897d6335966c.jpg\" _src=\"http://yanxuan.nosdn.127.net/47f5673dec5005092f6d897d6335966c.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/1b0109abd0e6a0d13fa2423a96c1167e.jpg\" _src=\"http://yanxuan.nosdn.127.net/1b0109abd0e6a0d13fa2423a96c1167e.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/916111a8f94cc0bd39375b3dcac14e35.jpg\" _src=\"http://yanxuan.nosdn.127.net/916111a8f94cc0bd39375b3dcac14e35.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/c1360df3d6b703c5df9b2f47a2a3d12e.jpg\" _src=\"http://yanxuan.nosdn.127.net/c1360df3d6b703c5df9b2f47a2a3d12e.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/1d5a31eb93ef873a165993bd99f29df1.jpg\" _src=\"http://yanxuan.nosdn.127.net/1d5a31eb93ef873a165993bd99f29df1.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/997a48948b89dd7261ed5a59ba884f45.jpg\" _src=\"http://yanxuan.nosdn.127.net/997a48948b89dd7261ed5a59ba884f45.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/eb96d9689735c9f4019ebf76da43b2b2.jpg\" _src=\"http://yanxuan.nosdn.127.net/eb96d9689735c9f4019ebf76da43b2b2.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/a92cf2172e6cafe080e4511205568d79.jpg\" _src=\"http://yanxuan.nosdn.127.net/a92cf2172e6cafe080e4511205568d79.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/c9e94570428f197292bb3f43609963f5.jpg\" _src=\"http://yanxuan.nosdn.127.net/c9e94570428f197292bb3f43609963f5.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/37145f06cce747311692ad7f276645db.jpg\" _src=\"http://yanxuan.nosdn.127.net/37145f06cce747311692ad7f276645db.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/c9a698b71ed911364fc6f243006c241c.jpg\" _src=\"http://yanxuan.nosdn.127.net/c9a698b71ed911364fc6f243006c241c.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/e89db969711efaa441c43d6b90498a0c.jpg\" _src=\"http://yanxuan.nosdn.127.net/e89db969711efaa441c43d6b90498a0c.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/3803bb1a18229562f18943512b1d3524.jpg\" _src=\"http://yanxuan.nosdn.127.net/3803bb1a18229562f18943512b1d3524.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/235cbb5be905ac2b87e7e8f7c8d90144.jpg\" _src=\"http://yanxuan.nosdn.127.net/235cbb5be905ac2b87e7e8f7c8d90144.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/3e38435b3fdbae4ee80b83995592901e.jpg\" _src=\"http://yanxuan.nosdn.127.net/3e38435b3fdbae4ee80b83995592901e.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/8ceb7cd3231585da60a74dd2c1aa9015.jpg\" _src=\"http://yanxuan.nosdn.127.net/8ceb7cd3231585da60a74dd2c1aa9015.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/e151e225c2e30aab7ccf086094381577.jpg\" _src=\"http://yanxuan.nosdn.127.net/e151e225c2e30aab7ccf086094381577.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/363c19306953daf10968f4aa86617997.jpg\" _src=\"http://yanxuan.nosdn.127.net/363c19306953daf10968f4aa86617997.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/4237a392cf2e69b110ad4ecf35e44059.jpg\" _src=\"http://yanxuan.nosdn.127.net/4237a392cf2e69b110ad4ecf35e44059.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/da8ab35ada2dfe55006db01efa96e51a.jpg\" _src=\"http://yanxuan.nosdn.127.net/da8ab35ada2dfe55006db01efa96e51a.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/aa1d4fd00b7879db3f1051dc6d16aa87.jpg\" _src=\"http://yanxuan.nosdn.127.net/aa1d4fd00b7879db3f1051dc6d16aa87.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/302a8f2d997ff22bedcd837672cdafc2.jpg\" _src=\"http://yanxuan.nosdn.127.net/302a8f2d997ff22bedcd837672cdafc2.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/a39ff68c00522aef0472402958a334d2.jpg\" _src=\"http://yanxuan.nosdn.127.net/a39ff68c00522aef0472402958a334d2.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/86ccd0eb677c8b552398869d11a8917e.jpg\" _src=\"http://yanxuan.nosdn.127.net/86ccd0eb677c8b552398869d11a8917e.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/a6d0ede352da947060d912d903646a5d.jpg\" _src=\"http://yanxuan.nosdn.127.net/a6d0ede352da947060d912d903646a5d.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/e6a118bf95bdb61891409d25f193e9c4.jpg\" _src=\"http://yanxuan.nosdn.127.net/e6a118bf95bdb61891409d25f193e9c4.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/c214066e9bf65d60bcebd691b5b1cbc1.jpg\" _src=\"http://yanxuan.nosdn.127.net/c214066e9bf65d60bcebd691b5b1cbc1.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/c301559ba3ee280bcbf2fc4269bfa9ca.jpg\" _src=\"http://yanxuan.nosdn.127.net/c301559ba3ee280bcbf2fc4269bfa9ca.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/573748f5c12ecb4515ba00a7b6e981dc.jpg\" _src=\"http://yanxuan.nosdn.127.net/573748f5c12ecb4515ba00a7b6e981dc.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/27bcc8bf512a7e6f994a9683b3deea82.jpg\" _src=\"http://yanxuan.nosdn.127.net/27bcc8bf512a7e6f994a9683b3deea82.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/e22a4507fd1e4b5ef859035e857ae419.jpg\" _src=\"http://yanxuan.nosdn.127.net/e22a4507fd1e4b5ef859035e857ae419.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/27b07b4ca709c33ad71b368f87781307.jpg\" _src=\"http://yanxuan.nosdn.127.net/27b07b4ca709c33ad71b368f87781307.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/ef31eb48bcb133728bffda7e1239b592.jpg\" _src=\"http://yanxuan.nosdn.127.net/ef31eb48bcb133728bffda7e1239b592.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/5f49aaaca59c0733ec92f100d01bc0af.jpg\" _src=\"http://yanxuan.nosdn.127.net/5f49aaaca59c0733ec92f100d01bc0af.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/818889261deb75044e1018ec53485d85.jpg\" _src=\"http://yanxuan.nosdn.127.net/818889261deb75044e1018ec53485d85.jpg\" style=\"\"/></p><p><img src=\"http://yanxuan.nosdn.127.net/200369f023243e2faeb18a2a0a352ef1.jpg\" _src=\"http://yanxuan.nosdn.127.net/200369f023243e2faeb18a2a0a352ef1.jpg\" style=\"\"/></p><p><br/></p>",
        "is_on_sale": 1,
        "add_time": 0,
        "sort_order": 1,
        "is_delete": 0,
        "attribute_category": 0,
        "counter_price": 0,
        "extra_price": 0,
        "is_new": 1,
        "goods_unit": "件",
        "primary_pic_url": "http://yanxuan.nosdn.127.net/6f3e94fa4b44341bda5a73224d605896.jpg",
        "list_pic_url": "http://yanxuan.nosdn.127.net/1f67b1970ee20fd572b7202da0ff705d.png",
        "retail_price": 2598,
        "sell_volume": 1533,
        "primary_product_id": 1194000,
        "unit_price": 0,
        "promotion_desc": "限时购",
        "promotion_tag": "",
        "app_exclusive_price": 0,
        "is_app_exclusive": 0,
        "is_limited": 0,
        "is_hot": 0
      }
    ],
    hotGoods: [
      {
        "id": 1006013,
        "name": "双宫茧桑蚕丝被 空调被",
        "list_pic_url": "http://yanxuan.nosdn.127.net/583812520c68ca7995b6fac4c67ae2c7.png",
        "retail_price": 699,
        "goods_brief": "一级桑蚕丝，吸湿透气柔软"
      },
      {
        "id": 1009012,
        "name": "可水洗舒柔丝羽绒枕",
        "list_pic_url": "http://yanxuan.nosdn.127.net/a196b367f23ccfd8205b6da647c62b84.png",
        "retail_price": 59,
        "goods_brief": "超细纤维，蓬松轻盈回弹"
      },
      {
        "id": 1011004,
        "name": "色织精梳AB纱格纹空调被",
        "list_pic_url": "http://yanxuan.nosdn.127.net/0984c9388a2c3fd2335779da904be393.png",
        "retail_price": 199,
        "goods_brief": "加大加厚，双色精彩"
      },
      {
        "id": 1019002,
        "name": "升级款护颈双人记忆枕",
        "list_pic_url": "http://yanxuan.nosdn.127.net/0118039f7cda342651595d994ed09567.png",
        "retail_price": 199,
        "goods_brief": "共享亲密2人时光"
      },
      {
        "id": 1019006,
        "name": "植物填充护颈夜交藤枕",
        "list_pic_url": "http://yanxuan.nosdn.127.net/60c3707837c97a21715ecc3986a744ce.png",
        "retail_price": 99,
        "goods_brief": "健康保护枕"
      }
    ],
    topicList: [
      {
        "id": 314,
        "title": "关爱他成长的每一个足迹",
        "content": "<img src=\"//yanxuan.nosdn.127.net/75c55a13fde5eb2bc2dd6813b4c565cc.jpg\">\n    <img src=\"//yanxuan.nosdn.127.net/e27e1de2b271a28a21c10213b9df7e95.jpg\">\n    <img src=\"//yanxuan.nosdn.127.net/9d413d1d28f753cb19096b533d53418d.jpg\">\n    <img src=\"//yanxuan.nosdn.127.net/64b0f2f350969e9818a3b6c43c217325.jpg\">\n    <img src=\"//yanxuan.nosdn.127.net/a668e6ae7f1fa45565c1eac221787570.jpg\">\n    <img src=\"//yanxuan.nosdn.127.net/0d4004e19728f2707f08f4be79bbc774.jpg\">\n    <img src=\"//yanxuan.nosdn.127.net/79ee021bbe97de7ecda691de6787241f.jpg\">",
        "avatar": "https://yanxuan.nosdn.127.net/14943186689221563.png",
        "item_pic_url": "https://yanxuan.nosdn.127.net/14943267735961674.jpg",
        "subtitle": "专业运动品牌同厂，毛毛虫鞋买二送一",
        "topic_category_id": 2,
        "price_info": 0,
        "read_count": "6.4k",
        "scene_pic_url": "https://yanxuan.nosdn.127.net/14943267735961674.jpg",
        "topic_template_id": 0,
        "topic_tag_id": 0,
        "sort_order": 1,
        "is_show": 1
      },
      {
        "id": 313,
        "title": "一次解决5个节日送礼难题",
        "content": "<img src=\"//yanxuan.nosdn.127.net/75c55a13fde5eb2bc2dd6813b4c565cc.jpg\">\n    <img src=\"//yanxuan.nosdn.127.net/e27e1de2b271a28a21c10213b9df7e95.jpg\">\n    <img src=\"//yanxuan.nosdn.127.net/9d413d1d28f753cb19096b533d53418d.jpg\">\n    <img src=\"//yanxuan.nosdn.127.net/64b0f2f350969e9818a3b6c43c217325.jpg\">\n    <img src=\"//yanxuan.nosdn.127.net/a668e6ae7f1fa45565c1eac221787570.jpg\">\n    <img src=\"//yanxuan.nosdn.127.net/0d4004e19728f2707f08f4be79bbc774.jpg\">\n    <img src=\"//yanxuan.nosdn.127.net/79ee021bbe97de7ecda691de6787241f.jpg\">",
        "avatar": "https://yanxuan.nosdn.127.net/14942967243991290.png",
        "item_pic_url": "https://yanxuan.nosdn.127.net/14942996754171334.jpg",
        "subtitle": "这些就是他们想要的礼物清单",
        "topic_category_id": 0,
        "price_info": 59.9,
        "read_count": "7.8k",
        "scene_pic_url": "https://yanxuan.nosdn.127.net/14942996754171334.jpg",
        "topic_template_id": 0,
        "topic_tag_id": 0,
        "sort_order": 0,
        "is_show": 1
      },
      {
        "id": 300,
        "title": "秒杀化学洗涤剂的纯天然皂",
        "content": "<img src=\"//yanxuan.nosdn.127.net/75c55a13fde5eb2bc2dd6813b4c565cc.jpg\">\n    <img src=\"//yanxuan.nosdn.127.net/e27e1de2b271a28a21c10213b9df7e95.jpg\">\n    <img src=\"//yanxuan.nosdn.127.net/9d413d1d28f753cb19096b533d53418d.jpg\">\n    <img src=\"//yanxuan.nosdn.127.net/64b0f2f350969e9818a3b6c43c217325.jpg\">\n    <img src=\"//yanxuan.nosdn.127.net/a668e6ae7f1fa45565c1eac221787570.jpg\">\n    <img src=\"//yanxuan.nosdn.127.net/0d4004e19728f2707f08f4be79bbc774.jpg\">\n    <img src=\"//yanxuan.nosdn.127.net/79ee021bbe97de7ecda691de6787241f.jpg\">",
        "avatar": "https://yanxuan.nosdn.127.net/14939843011001088.png",
        "item_pic_url": "https://yanxuan.nosdn.127.net/14939843143621089.jpg",
        "subtitle": "前段时间有朋友跟我抱怨，和婆婆住到一起才发现生活理念有太多不和。别的不提，光是洗...",
        "topic_category_id": 1,
        "price_info": 0,
        "read_count": "15.3k",
        "scene_pic_url": "https://yanxuan.nosdn.127.net/14939843143621089.jpg",
        "topic_template_id": 0,
        "topic_tag_id": 0,
        "sort_order": 0,
        "is_show": 1
      }
    ],
    newCategoryList: [
      {
        "id": 1005000,
        "name": "居家",
        "goodsList": [
          {
            "id": 1009024,
            "name": "日式和风懒人沙发",
            "list_pic_url": "http://yanxuan.nosdn.127.net/149dfa87a7324e184c5526ead81de9ad.png",
            "retail_price": 599
          },
          {
            "id": 1015007,
            "name": "典雅美式全棉刺绣抱枕",
            "list_pic_url": "http://yanxuan.nosdn.127.net/a2045004de8a6225289376ad54317fc8.png",
            "retail_price": 59
          },
          {
            "id": 1020000,
            "name": "升级款记忆绵护椎腰靠",
            "list_pic_url": "http://yanxuan.nosdn.127.net/819fdf1f635a694166bcfdd426416e8c.png",
            "retail_price": 79
          },
          {
            "id": 1030001,
            "name": "160*230羊毛手工地毯",
            "list_pic_url": "http://yanxuan.nosdn.127.net/88dc5d80c6f84102f003ecd69c86e1cf.png",
            "retail_price": 969
          },
          {
            "id": 1030002,
            "name": "160*230羊毛圈绒枪刺地毯",
            "list_pic_url": "http://yanxuan.nosdn.127.net/8b9328496990357033d4259fda250679.png",
            "retail_price": 899
          },
          {
            "id": 1030003,
            "name": "160*230羊毛手工几何地毯",
            "list_pic_url": "http://yanxuan.nosdn.127.net/1d1ab099dc0e254c15e57302e78e200b.png",
            "retail_price": 1469
          },
          {
            "id": 1035006,
            "name": "全棉单面割绒浴室地垫",
            "list_pic_url": "http://yanxuan.nosdn.127.net/ee92704f3b8323905b51fc647823e6e5.png",
            "retail_price": 56
          }
        ]
      },
      {
        "id": 1005001,
        "name": "餐厨",
        "goodsList": [
          {
            "id": 1023003,
            "name": "100年传世珐琅锅 全家系列",
            "list_pic_url": "http://yanxuan.nosdn.127.net/c39d54c06a71b4b61b6092a0d31f2335.png",
            "retail_price": 398
          },
          {
            "id": 1025005,
            "name": "100年传世珐琅锅",
            "list_pic_url": "http://yanxuan.nosdn.127.net/49e26f00ca4d0ce00f9960d22c936738.png",
            "retail_price": 268
          },
          {
            "id": 1038004,
            "name": "100年传世珐琅锅 马卡龙系列",
            "list_pic_url": "http://yanxuan.nosdn.127.net/4d3d3eaeb872860539d7faa59f9f84e9.png",
            "retail_price": 359
          },
          {
            "id": 1051000,
            "name": "Carat钻石炒锅30cm",
            "list_pic_url": "http://yanxuan.nosdn.127.net/e564410546a11ddceb5a82bfce8da43d.png",
            "retail_price": 180
          },
          {
            "id": 1051001,
            "name": "Carat钻石煎锅28cm",
            "list_pic_url": "http://yanxuan.nosdn.127.net/f53ed57d9e23fda7e24dfd0e0a50c5d1.png",
            "retail_price": 159
          },
          {
            "id": 1051002,
            "name": "Carat钻石汤锅24cm",
            "list_pic_url": "http://yanxuan.nosdn.127.net/56f4b4753392d27c0c2ccceeb579ed6f.png",
            "retail_price": 228
          },
          {
            "id": 1051003,
            "name": "Carat钻石奶锅18cm",
            "list_pic_url": "http://yanxuan.nosdn.127.net/6a54ccc389afb2459b163245bbb2c978.png",
            "retail_price": 148
          }
        ]
      },
      {
        "id": 1005002,
        "name": "饮食",
        "goodsList": [
          {
            "id": 1045000,
            "name": "绿茶蛋黄酥 200克/4枚入",
            "list_pic_url": "http://yanxuan.nosdn.127.net/b2adc3fd9b84a289a1be03e8ee400e61.png",
            "retail_price": 28
          },
          {
            "id": 1070000,
            "name": "星云酥 180克/3颗",
            "list_pic_url": "http://yanxuan.nosdn.127.net/8392725765cdd57fdae3f173877f4bda.png",
            "retail_price": 26
          },
          {
            "id": 1111007,
            "name": "妙曲奇遇记曲奇礼盒 520克",
            "list_pic_url": "http://yanxuan.nosdn.127.net/8d228f767b136a67aaf2cbbf6deb46fa.png",
            "retail_price": 78
          },
          {
            "id": 1116011,
            "name": "蔓越莓曲奇 200克",
            "list_pic_url": "http://yanxuan.nosdn.127.net/767b370d07f3973500db54900bcbd2a7.png",
            "retail_price": 36
          },
          {
            "id": 1134036,
            "name": "凤梨酥 360克",
            "list_pic_url": "http://yanxuan.nosdn.127.net/9356cc27b22bd47ad43913d13226555f.png",
            "retail_price": 38
          },
          {
            "id": 1143018,
            "name": "粽情乡思端午粽礼盒 640克",
            "list_pic_url": "http://yanxuan.nosdn.127.net/d1fd69cee4990f4de1109baef30efeeb.png",
            "retail_price": 68
          },
          {
            "id": 1143019,
            "name": "粽夏冰晶端午粽礼盒 480克",
            "list_pic_url": "http://yanxuan.nosdn.127.net/277b07c1e5e6fb57cf9ca47fcd3903d5.png",
            "retail_price": 98
          }
        ]
      },
      {
        "id": 1008000,
        "name": "配件",
        "goodsList": [
          {
            "id": 1085019,
            "name": "20寸 纯PC“铝框”（非全铝）登机箱",
            "list_pic_url": "http://yanxuan.nosdn.127.net/65c955a7a98e84d44ca30bb88a591eac.png",
            "retail_price": 349
          },
          {
            "id": 1086052,
            "name": "20寸 铝镁合金登机箱",
            "list_pic_url": "http://yanxuan.nosdn.127.net/93171a281c4ed272c007a050816e6f6c.png",
            "retail_price": 859
          },
          {
            "id": 1113019,
            "name": "20寸 PC膜拉链登机箱",
            "list_pic_url": "http://yanxuan.nosdn.127.net/ad504bb389039ff35c4cd6ae912be87e.png",
            "retail_price": 208
          },
          {
            "id": 1114011,
            "name": "104升 纯PC拉链斜纹拉杆箱",
            "list_pic_url": "http://yanxuan.nosdn.127.net/196b5ce11930b4eadaec563cb0406634.png",
            "retail_price": 299
          },
          {
            "id": 1143016,
            "name": "112升 纯PC拉链斜纹拉杆箱",
            "list_pic_url": "http://yanxuan.nosdn.127.net/e56c6239ee4a641ce2a4565c6babb43e.png",
            "retail_price": 319
          },
          {
            "id": 1152101,
            "name": "魔兽世界 部落 奥格瑞玛 拉杆箱 可登机",
            "list_pic_url": "http://yanxuan.nosdn.127.net/c1c62211a17b71a634fa0c705d11fb42.png",
            "retail_price": 888
          },
          {
            "id": 1156006,
            "name": "20寸 全铝镁合金登机箱",
            "list_pic_url": "http://yanxuan.nosdn.127.net/ea5b0a572b35089446fba491db7fbbc3.png",
            "retail_price": 699
          }
        ]
      },
      {
        "id": 1010000,
        "name": "服装",
        "goodsList": [
          {
            "id": 1056002,
            "name": "男式玩色内裤",
            "list_pic_url": "http://yanxuan.nosdn.127.net/922fdbe007033f7a88f7ebc57c3d1e75.png",
            "retail_price": 59
          },
          {
            "id": 1074001,
            "name": "男式莫代尔无痕内裤",
            "list_pic_url": "http://yanxuan.nosdn.127.net/73567265b04a9998f64419186ddd8531.png",
            "retail_price": 59
          },
          {
            "id": 1092025,
            "name": "Let it go男式纯棉免洗内裤",
            "list_pic_url": "http://yanxuan.nosdn.127.net/56a46e9a4832587471c0f9ad7c1b7d85.png",
            "retail_price": 19.9
          },
          {
            "id": 1092026,
            "name": "Let it go女式纯棉免洗内裤",
            "list_pic_url": "http://yanxuan.nosdn.127.net/83433f5a7ef69abda2544a53332a0fad.png",
            "retail_price": 19.9
          },
          {
            "id": 1113010,
            "name": "男式丝滑莫代尔平角内裤",
            "list_pic_url": "http://yanxuan.nosdn.127.net/2d0920b51331bb1636330ad8e07d1b97.png",
            "retail_price": 59
          },
          {
            "id": 1113011,
            "name": "女式丝滑莫代尔三角内裤",
            "list_pic_url": "http://yanxuan.nosdn.127.net/7a683f68fc988df299b5cfe6273d6fb7.png",
            "retail_price": 49
          },
          {
            "id": 1127024,
            "name": "女式无痕真丝内裤",
            "list_pic_url": "http://yanxuan.nosdn.127.net/0a70f12a712e90d7d93beec4f686fe8e.png",
            "retail_price": 39
          }
        ]
      },
      {
        "id": 1011000,
        "name": "婴童",
        "goodsList": [
          {
            "id": 1033000,
            "name": "新生彩棉初衣礼盒（婴童）",
            "list_pic_url": "http://yanxuan.nosdn.127.net/9aab9a0bf4fef8fe3dc8c732bc22d4b7.png",
            "retail_price": 199
          },
          {
            "id": 1116004,
            "name": "条纹长袖海魂衫（男婴童）",
            "list_pic_url": "http://yanxuan.nosdn.127.net/14d3a47ccf52815baf6df308be6db5a6.png",
            "retail_price": 79
          },
          {
            "id": 1116005,
            "name": "条纹长袖海魂衫（女婴童）",
            "list_pic_url": "http://yanxuan.nosdn.127.net/71937456c3cd654f936f619201a79c09.png",
            "retail_price": 79
          },
          {
            "id": 1116008,
            "name": "棉双层纱波点娃娃裙（婴童）",
            "list_pic_url": "http://yanxuan.nosdn.127.net/149a09a391ea5a888debf50b9dc4ed7b.png",
            "retail_price": 99
          },
          {
            "id": 1125010,
            "name": "格纹棉质褶皱娃娃裙（婴童）",
            "list_pic_url": "http://yanxuan.nosdn.127.net/f82995ccb2a2f6beddd4ad794f5da2a1.png",
            "retail_price": 159
          },
          {
            "id": 1125011,
            "name": "格纹棉质衬衣（婴童）",
            "list_pic_url": "http://yanxuan.nosdn.127.net/be9740b734087f294f59a6560b932bc1.png",
            "retail_price": 139
          },
          {
            "id": 1125026,
            "name": "中国红满月百天礼盒",
            "list_pic_url": "http://yanxuan.nosdn.127.net/6308c120c441fd3e47658167ad944156.png",
            "retail_price": 159
          }
        ]
      },
      {
        "id": 1012000,
        "name": "杂货",
        "goodsList": [
          {
            "id": 1039056,
            "name": "金属亚光钢笔",
            "list_pic_url": "http://yanxuan.nosdn.127.net/3e14e82a44c3a250af63df4c29c572d0.png",
            "retail_price": 79
          },
          {
            "id": 1046001,
            "name": "按动式三角中油笔",
            "list_pic_url": "http://yanxuan.nosdn.127.net/74583e585825ecacb11f7c53d2021e00.png",
            "retail_price": 8.9
          },
          {
            "id": 1046002,
            "name": "直杆三角中性笔",
            "list_pic_url": "http://yanxuan.nosdn.127.net/eb486cfe807c4fe5696aa59cbcf1f96a.png",
            "retail_price": 9.9
          },
          {
            "id": 1055022,
            "name": "磨砂杆直杆中性笔",
            "list_pic_url": "http://yanxuan.nosdn.127.net/c7c74a96eacb29455dbf557b840eaaf5.png",
            "retail_price": 4.9
          },
          {
            "id": 1075022,
            "name": "暗格简约钢笔",
            "list_pic_url": "http://yanxuan.nosdn.127.net/97ad483a94ed88216a989df83e39cbf0.png",
            "retail_price": 39
          },
          {
            "id": 1092001,
            "name": "星空原色水晶笔",
            "list_pic_url": "http://yanxuan.nosdn.127.net/8e35b003ce7895c39eeb073b1f61b1d7.png",
            "retail_price": 29
          },
          {
            "id": 1092005,
            "name": "木韵檀香黄铜笔",
            "list_pic_url": "http://yanxuan.nosdn.127.net/ab1992495e0370f09386d418ad45220d.png",
            "retail_price": 39
          }
        ]
      },
      {
        "id": 1013001,
        "name": "洗护",
        "goodsList": [
          {
            "id": 1006051,
            "name": "皇室御用超柔毛巾",
            "list_pic_url": "http://yanxuan.nosdn.127.net/ad5a317216f9da495b144070ecf1f957.png",
            "retail_price": 59
          },
          {
            "id": 1009027,
            "name": "皇室御用超柔毛巾80s",
            "list_pic_url": "http://yanxuan.nosdn.127.net/71cfd849335c498dee3c54d1eb823c17.png",
            "retail_price": 79
          },
          {
            "id": 1021000,
            "name": "埃及进口长绒棉毛巾",
            "list_pic_url": "http://yanxuan.nosdn.127.net/7191f2599c7fe44ed4cff7a76e853154.png",
            "retail_price": 39
          },
          {
            "id": 1021001,
            "name": "全棉进口埃及长绒棉浴巾",
            "list_pic_url": "http://yanxuan.nosdn.127.net/fd5a8622ee1a7dfd4b57b938ebf25b24.png",
            "retail_price": 99
          },
          {
            "id": 1111010,
            "name": "静谧森林简欧色织提花面巾",
            "list_pic_url": "http://yanxuan.nosdn.127.net/ef7efe55839e66993fb604dc3c2d9410.png",
            "retail_price": 69
          },
          {
            "id": 1128010,
            "name": "趣味粉彩单面纱布亲肤毛巾",
            "list_pic_url": "http://yanxuan.nosdn.127.net/a84e8e6979f00efd9a728ed36b154753.png",
            "retail_price": 29
          },
          {
            "id": 1128011,
            "name": "趣味粉彩单面纱布超柔浴巾",
            "list_pic_url": "http://yanxuan.nosdn.127.net/d6e25ec5b4ad7aa37e077ce751b56f46.png",
            "retail_price": 79
          }
        ]
      },
      {
        "id": 1019000,
        "name": "志趣",
        "goodsList": [
          {
            "id": 1152004,
            "name": "魔兽世界 蛋盾包 双肩包",
            "list_pic_url": "http://yanxuan.nosdn.127.net/8c93cef435d888bd79833777df1cd0c2.png",
            "retail_price": 399
          },
          {
            "id": 1152008,
            "name": "魔兽世界 部落 护腕 一只",
            "list_pic_url": "http://yanxuan.nosdn.127.net/203cb83d93606865e3ddde57b69b9e9a.png",
            "retail_price": 29
          },
          {
            "id": 1152009,
            "name": "魔兽世界 联盟 护腕 一只",
            "list_pic_url": "http://yanxuan.nosdn.127.net/ae6d41117717387b82dcaf1dfce0cd97.png",
            "retail_price": 29
          },
          {
            "id": 1152031,
            "name": "魔兽世界-伊利丹颈枕眼罩套装",
            "list_pic_url": "http://yanxuan.nosdn.127.net/fd6e78a397bd9e9804116a36f0270b0a.png",
            "retail_price": 99
          },
          {
            "id": 1152095,
            "name": "魔兽世界 联盟·暴风城 堡垒收纳盒",
            "list_pic_url": "http://yanxuan.nosdn.127.net/c86b49f635fa141decebabbd0966a6ef.png",
            "retail_price": 499
          },
          {
            "id": 1152097,
            "name": "魔兽世界 雷霆之怒逐风者的祝福之剑 雨伞",
            "list_pic_url": "http://yanxuan.nosdn.127.net/532836444ae5eaec40b5810ca4f9b1e6.png",
            "retail_price": 399
          },
          {
            "id": 1152100,
            "name": "魔兽世界 部落·奥格瑞玛 堡垒收纳盒",
            "list_pic_url": "http://yanxuan.nosdn.127.net/a667c4fbbd9c499c0733539d7e986617.png",
            "retail_price": 499
          }
        ]
      }
    ],
  },
  //事件处理函数
  onLoad: function() {

  },
  concatNew() {
    console.log('this.data.status-11-->', this.data.status)
    this.setData({
      status: !this.data.status
    })
  },
  inow(e) {
    console.log(111111, e.currentTarget.dataset.id)
    let id = e.currentTarget.dataset.id;
    if (id == 1) {
      this.setData({
        status: false
      })
    }
    console.log('this.data.status--->', this.data.status)
  },
  copyText(e) {
    console.log('e---->', e)
    wx.setClipboardData({
      data: e.currentTarget.dataset.text,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            wx.showToast({
              title: '复制成功',
              icon: 'none',
              duration: 2000
            })
          }
        })
      }
    })
  },
  catchTouch(){}
})