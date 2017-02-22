webpackJsonp([1,0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _vue = __webpack_require__(4);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _App = __webpack_require__(103);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _index = __webpack_require__(24);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _goods = __webpack_require__(106);
	
	var _goods2 = _interopRequireDefault(_goods);
	
	var _test = __webpack_require__(119);
	
	var _test2 = _interopRequireDefault(_test);
	
	var _vueRouter = __webpack_require__(138);
	
	var _vueRouter2 = _interopRequireDefault(_vueRouter);
	
	var _elementUi = __webpack_require__(70);
	
	var _elementUi2 = _interopRequireDefault(_elementUi);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_vue2.default.use(_vueRouter2.default);
	_vue2.default.use(_elementUi2.default);
	var routes = [{ path: '/', redirect: '/index' }, { path: '/index', component: _index2.default }, { path: '/goods', component: _goods2.default }, { path: '/test', component: _test2.default }];
	var router = new _vueRouter2.default({
	  routes: routes
	});
	
	new _vue2.default({
	  router: router,
	  el: '#app',
	  template: '<App/>',
	  components: { App: _App2.default }
	});

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports) {

	module.exports = {
		"banner": {
			"bannerTop": [
				"https://i8.mifile.cn/v1/a1/45e7752a-192a-c2b2-3978-a43ccfc49de0.webp",
				"https://i8.mifile.cn/v1/a1/89a33760-240c-e5e2-50ff-b8a864a2aba5.webp",
				"https://i8.mifile.cn/v1/a1/2e1d1dc6-536e-933b-df99-428343fdf62c.webp"
			],
			"img1": "https://i8.mifile.cn/v1/a1/89a33760-240c-e5e2-50ff-b8a864a2aba5.webp",
			"img2": "https://i8.mifile.cn/v1/a1/f6225781-335e-1d31-a99f-760977c18c65.webp?width=720&heihgt=200"
		},
		"menu": {
			"img1": "https://i8.mifile.cn/v1/a1/6bc707a3-927e-ebcd-3c7a-1e91d6f793aa.webp?width=360&heihgt=513",
			"img2": "https://i8.mifile.cn/v1/a1/bb2a27db-0433-47dc-b55c-c36b81fa7e41.webp?width=360&heihgt=256",
			"img3": "https://i8.mifile.cn/v1/a1/1fbd6d1f-05bf-f22e-cba8-250dfade437d.webp?width=360&heihgt=256"
		},
		"starGoods": {
			"img": "https://i8.mifile.cn/v1/a1/6ee55dad-dadc-79d4-1c37-d1694c088d40.webp?width=720&heihgt=440",
			"starGoodsList": [
				{
					"imgSrc": "https://i8.mifile.cn/v1/a1/03d1e94c-b0ed-9a22-70d7-cc6cbd90ec79.webp?width=360&height=360",
					"title": "红米Note 4 移动定制版",
					"desc": "全金属十核旗舰手机",
					"price": 1199
				},
				{
					"imgSrc": "https://i8.mifile.cn/v1/a1/ecb64c5e-9741-1535-dab6-28d47e2b0d10.webp?width=360&height=360",
					"title": "红米4 32G版",
					"desc": "长续航金属千元旗舰手机",
					"price": 899
				},
				{
					"imgSrc": "https://i8.mifile.cn/v1/a1/97c2e91e-523e-3988-3abc-aacc824f2737.webp?width=360&height=360",
					"title": "小米手环2",
					"desc": "OLED显示屏，触摸操作",
					"price": 149
				},
				{
					"imgSrc": "https://i8.mifile.cn/v1/a1/6f19ca85-2326-8e80-0ecc-16134c33a89b.webp?width=360&height=360",
					"title": "小米净水器（厨下式）",
					"desc": "健康家庭必备",
					"price": 1999
				},
				{
					"imgSrc": "https://i8.mifile.cn/v1/a1/22f1a143-59fc-fc88-ced9-4f6edf5f4f6e.webp?width=360&height=360",
					"title": "米家小白智能摄像头",
					"desc": "360度 全景带夜视",
					"price": 399
				},
				{
					"imgSrc": "https://i8.mifile.cn/v1/a1/fd88c85e-d74f-1002-61d0-e001fbb02cf6.webp?width=360&height=360",
					"title": "米家恒温电水壶",
					"desc": "一杯水的温度，刚刚好",
					"price": 199
				}
			]
		},
		"newGoods": {
			"img": "https://i8.mifile.cn/v1/a1/5e7d9b5b-3e6a-3720-7ea2-50f92aad856c.webp?width=720&heihgt=440",
			"newGoodsList": [
				{
					"imgSrc": "https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360",
					"title": "小米USB充电器",
					"desc": "精致小巧，便携出行",
					"price": 49
				},
				{
					"imgSrc": "https://i8.mifile.cn/v1/a1/9f7e141c-87a7-82c6-7170-599504ce2630.webp?width=360&height=360",
					"title": "小米便携鼠标",
					"desc": "轻薄便携，含电池仅重77.5g",
					"price": 99
				},
				{
					"imgSrc": "https://i8.mifile.cn/v1/a1/a4c8c780-acbd-23c7-6ae2-f1abe5e5d34d.webp?width=360&height=360",
					"title": "WIFI放大器 2",
					"desc": "速率翻倍 覆盖无忧",
					"price": 49
				},
				{
					"imgSrc": "https://i8.mifile.cn/v1/a1/21763033-81c2-8cc5-f012-ae1616059ce9.webp?width=360&height=360",
					"title": "小米移动电源2",
					"desc": "便携轻便，出行无忧",
					"price": 149
				},
				{
					"imgSrc": "https://i8.mifile.cn/v1/a1/f935b1a8-92e9-22d6-7c6c-c602b33fd750.webp?width=360&height=360",
					"title": "防雾霾口罩",
					"desc": "PM2.5颗粒物，健康防护",
					"price": 69
				},
				{
					"imgSrc": "https://i8.mifile.cn/v1/a1/1fd7f261-1d68-784e-a1f7-17384d00dc1d.webp?width=360&height=360",
					"title": "小米米家电动滑板车",
					"desc": "便携折叠，自由穿行",
					"price": 1999
				}
			]
		},
		"intelligenceGoods": {
			"img": "https://i8.mifile.cn/v1/a1/41e31ea6-a34e-69d4-aba3-a9ec2cf2f802.webp?width=720&heihgt=440",
			"intelligenceGoodsList": [
				{
					"imgSrc": "https://i8.mifile.cn/v1/a1/97c2e91e-523e-3988-3abc-aacc824f2737.webp?width=360&height=360",
					"title": "小米手环2",
					"desc": "OLED显示屏，触摸操作",
					"price": 149
				},
				{
					"imgSrc": "https://i8.mifile.cn/v1/a1/1ef4e430-b65a-2655-791a-680a49668005.webp?width=360&height=360",
					"title": "小米移动电源2",
					"desc": "双向快充，仅14.1mm薄",
					"price": 79
				},
				{
					"imgSrc": "https://i8.mifile.cn/v1/a1/5f78e5ba-cd16-0c67-3784-c64651596f94.webp?width=360&height=360",
					"title": "米加扫地机器人",
					"desc": "智商高，扫的干净扫的快",
					"price": 1699
				},
				{
					"imgSrc": "https://i8.mifile.cn/v1/a1/24a3df8b-415c-a7df-96b6-a125d9e91746.webp?width=360&height=360",
					"title": "小米路由器3",
					"desc": "全向高增益4天线",
					"price": 149
				}
			]
		},
		"newHomeGoods": {
			"img": "https://i8.mifile.cn/v1/a1/e70cee4f-e1fd-0f0b-8d3b-e695d0b42323.webp",
			"newHomeGoodsList": [
				{
					"imgSrc": "https://i8.mifile.cn/v1/a1/03d1e94c-b0ed-9a22-70d7-cc6cbd90ec79.webp?width=360&height=360",
					"title": "红米Note 4 移动定制版",
					"desc": "全金属十核旗舰手机",
					"price": 1199
				},
				{
					"imgSrc": "https://i8.mifile.cn/v1/a1/ecb64c5e-9741-1535-dab6-28d47e2b0d10.webp?width=360&height=360",
					"title": "红米4 32G版",
					"desc": "长续航金属千元旗舰手机",
					"price": 899
				},
				{
					"imgSrc": "https://i8.mifile.cn/v1/a1/97c2e91e-523e-3988-3abc-aacc824f2737.webp?width=360&height=360",
					"title": "小米手环2",
					"desc": "OLED显示屏，触摸操作",
					"price": 149
				},
				{
					"imgSrc": "https://i8.mifile.cn/v1/a1/6f19ca85-2326-8e80-0ecc-16134c33a89b.webp?width=360&height=360",
					"title": "小米净水器（厨下式）",
					"desc": "健康家庭必备",
					"price": 1999
				},
				{
					"imgSrc": "https://i8.mifile.cn/v1/a1/22f1a143-59fc-fc88-ced9-4f6edf5f4f6e.webp?width=360&height=360",
					"title": "米家小白智能摄像头",
					"desc": "360度 全景带夜视",
					"price": 399
				},
				{
					"imgSrc": "https://i8.mifile.cn/v1/a1/fd88c85e-d74f-1002-61d0-e001fbb02cf6.webp?width=360&height=360",
					"title": "米家恒温电水壶",
					"desc": "一杯水的温度，刚刚好",
					"price": 199
				},
				{
					"imgSrc": "https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360",
					"title": "小米USB充电器",
					"desc": "精致小巧，便携出行",
					"price": 49
				},
				{
					"imgSrc": "https://i8.mifile.cn/v1/a1/9f7e141c-87a7-82c6-7170-599504ce2630.webp?width=360&height=360",
					"title": "小米便携鼠标",
					"desc": "轻薄便携，含电池仅重77.5g",
					"price": 99
				},
				{
					"imgSrc": "https://i8.mifile.cn/v1/a1/a4c8c780-acbd-23c7-6ae2-f1abe5e5d34d.webp?width=360&height=360",
					"title": "WIFI放大器 2",
					"desc": "速率翻倍 覆盖无忧",
					"price": 49
				},
				{
					"imgSrc": "https://i8.mifile.cn/v1/a1/21763033-81c2-8cc5-f012-ae1616059ce9.webp?width=360&height=360",
					"title": "小米移动电源2",
					"desc": "便携轻便，出行无忧",
					"price": 149
				},
				{
					"imgSrc": "https://i8.mifile.cn/v1/a1/f935b1a8-92e9-22d6-7c6c-c602b33fd750.webp?width=360&height=360",
					"title": "防雾霾口罩",
					"desc": "PM2.5颗粒物，健康防护",
					"price": 69
				},
				{
					"imgSrc": "https://i8.mifile.cn/v1/a1/1fd7f261-1d68-784e-a1f7-17384d00dc1d.webp?width=360&height=360",
					"title": "小米米家电动滑板车",
					"desc": "便携折叠，自由穿行",
					"price": 1999
				}
			]
		},
		"detail": {
			"img": [
				"https://i8.mifile.cn/v1/a1/8264fcff-a5db-6d74-cfc2-aa0ea8d6805a.webp",
				"https://i8.mifile.cn/v1/a1/02437ee9-f6e6-0f81-71b5-61333c1822d4.webp",
				"https://i8.mifile.cn/v1/a1/754a3bb3-14aa-1dc1-c8f2-fd12a22cd64e.webp"
			],
			"detailList": [
				"https://i8.mifile.cn/v1/a1/5700ba33-8b7c-bb14-b6fe-258d6309993d.webp",
				"https://i8.mifile.cn/v1/a1/a43e9125-59b3-6dd2-6d2b-587d5614e2d4.webp",
				"https://i8.mifile.cn/v1/a1/123ff16a-2064-5a5f-66ff-c967836afa23.webp",
				"https://i8.mifile.cn/v1/a1/158832b9-89b4-901e-b30d-59c42190b9ad.webp",
				"https://i8.mifile.cn/v1/a1/a6bb656f-27c4-695e-483a-44b087d246c8.webp",
				"https://i8.mifile.cn/v1/a1/a807d8bd-10ea-c4b9-d2c4-5e31685cb04d.webp",
				"https://i8.mifile.cn/v1/a1/a4946495-1afb-25bd-c1a7-e4c6197d50d9.webp",
				"https://i8.mifile.cn/v1/a1/cf8400fd-8d7c-1d10-0459-d0186b61a2a4.webp",
				"https://i8.mifile.cn/v1/a1/7a779a78-9fd9-e87c-5473-2e710e894bdc.webp",
				"https://i8.mifile.cn/v1/a1/608e27b2-6725-73c7-c4bb-86a75a3336a4.webp",
				"https://i8.mifile.cn/v1/a1/48504beb-6f3b-3c0c-f38e-fe30e3ff6d37.webp",
				"https://i8.mifile.cn/v1/a1/c1040e71-7a3c-e4f9-1c7e-d35690798fc7.webp",
				"https://i8.mifile.cn/v1/a1/4dc17959-3cfb-ca3a-8c2c-0941f12a7912.webp",
				"https://i8.mifile.cn/v1/a1/63a1f9ba-2e16-3f83-38f0-de07ef2108b5.webp",
				"https://i8.mifile.cn/v1/a1/51749d01-d7a6-3d9a-937c-fc982966291c.webp",
				"https://i8.mifile.cn/v1/a1/192a4869-8857-39fd-3a2d-b01f2669e2ce.webp",
				"https://i8.mifile.cn/v1/a1/2fd53659-9251-9781-6124-7ebe7bc18e4f.webp",
				"https://i8.mifile.cn/v1/a1/6d6bfd8d-da13-d707-9a72-15710c4b1364.webp",
				"https://i8.mifile.cn/v1/a1/5b8eb8a7-4a04-fe77-91a1-7664d0207a28.webp",
				"https://i8.mifile.cn/v1/a1/b35fc2b3-329a-eab1-74b2-8ab955cbd374.webp",
				"https://i8.mifile.cn/v1/a1/0bac064d-9098-fe37-5ce7-42fceba83160.webp",
				"https://i8.mifile.cn/v1/a1/e6aa6506-6571-25a4-0b40-cbfe57baf1a6.webp",
				"https://i8.mifile.cn/v1/a1/9d770dbd-2023-26c6-b672-6a15eec764ef.webp",
				"https://i8.mifile.cn/v1/a1/aad5f5c5-147e-46eb-22e7-6827c7f65164.webp",
				"https://i8.mifile.cn/v1/a1/476e16c0-13db-49d6-9570-3fe20f2dc3d9.webp",
				"https://i8.mifile.cn/v1/a1/e7c40d54-2a6e-f293-3561-dc01be915eab.webp",
				"https://i8.mifile.cn/v1/a1/760291fd-7657-4711-302a-7021cccca134.webp",
				"https://i8.mifile.cn/v1/a1/9fa77a3f-f778-eb32-3e4f-d588c927788f.webp",
				"https://i8.mifile.cn/v1/a1/501d8a62-2d0a-2016-f225-cd6073b555d5.webp"
			],
			"attrList": [
				"https://i8.mifile.cn/v1/a1/b842a9b2-a9b9-39a2-3b83-ec05d8f2d5b3.webp",
				"https://i8.mifile.cn/v1/a1/8201d243-8591-26f0-ee06-e73bb118712d.webp",
				"https://i8.mifile.cn/v1/a1/df69a034-4c4f-fef5-fa2a-32f62458d5e2.webp",
				"https://i8.mifile.cn/v1/a1/0554258d-85b3-8169-86d7-3d3c9a605cf8.webp",
				"https://i8.mifile.cn/v1/a1/f394c0ef-aa3d-ce9e-9529-d1a7cbe27202.webp",
				"https://i8.mifile.cn/v1/a1/1137f0f8-1a7b-c81c-8b80-a60137e3999f.webp",
				"https://i8.mifile.cn/v1/a1/76788e58-4c4d-f878-7e3a-8732cd658f76.webp",
				"https://i8.mifile.cn/v1/a1/4d8fb225-17db-7d59-f580-53462f0a69d7.webp",
				"https://i8.mifile.cn/v1/a1/0da47b1d-cfbe-4369-b6e9-50f1dd610bc5.webp",
				"https://i8.mifile.cn/v1/a1/f02cfbb5-d362-5c74-b7a5-7729c6cb75d3.webp",
				"https://i8.mifile.cn/v1/a1/4a796142-f064-51e2-cddb-882aee93b838.webp",
				"https://i8.mifile.cn/v1/a1/76346306-832d-6d37-71ab-29702fbeff82.webp",
				"https://i8.mifile.cn/v1/a1/e864c3de-0a8a-0c37-8eaf-b69f789b49c2.webp",
				"https://i8.mifile.cn/v1/a1/83c5d6da-6988-704f-dcb3-b34b9d2a75e7.webp",
				"https://i8.mifile.cn/v1/a1/f2472fce-7af0-c7b0-d357-a081edd07de6.webp"
			],
			"goodsAttr": {
				"title": "红米Note 4 移动定制版 64GB版 金色",
				"price": 1199,
				"desc": {
					"tag": "全网通双卡双待",
					"sc": "Helio X20 十核旗舰处理器 / 全金属一体化机身 / 4100mAh 大电量"
				},
				"attr": {
					"color": [
						{
							"id": 0,
							"text": "天空灰"
						},
						{
							"id": 1,
							"text": "玫瑰金"
						},
						{
							"id": 2,
							"text": "钻石蓝"
						}
					],
					"ram": [
						{
							"id": 0,
							"text": "16GB"
						},
						{
							"id": 1,
							"text": "32GB"
						},
						{
							"id": 2,
							"text": "64GB"
						}
					]
				}
			}
		},
		"searchImg": "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a425e85fa21ed71c2a8d64fe86f833f9.jpg?width=720&heihgt=200"
	};

/***/ },
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Swiper 3.4.1
	 * Most modern mobile touch slider and framework with hardware accelerated transitions
	 * 
	 * http://www.idangero.us/swiper/
	 * 
	 * Copyright 2016, Vladimir Kharlampidi
	 * The iDangero.us
	 * http://www.idangero.us/
	 * 
	 * Licensed under MIT
	 * 
	 * Released on: December 13, 2016
	 */
	(function () {
	    'use strict';
	    var $;
	    /*===========================
	    Swiper
	    ===========================*/
	    var Swiper = function (container, params) {
	        if (!(this instanceof Swiper)) return new Swiper(container, params);
	
	        var defaults = {
	            direction: 'horizontal',
	            touchEventsTarget: 'container',
	            initialSlide: 0,
	            speed: 300,
	            // autoplay
	            autoplay: false,
	            autoplayDisableOnInteraction: true,
	            autoplayStopOnLast: false,
	            // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
	            iOSEdgeSwipeDetection: false,
	            iOSEdgeSwipeThreshold: 20,
	            // Free mode
	            freeMode: false,
	            freeModeMomentum: true,
	            freeModeMomentumRatio: 1,
	            freeModeMomentumBounce: true,
	            freeModeMomentumBounceRatio: 1,
	            freeModeMomentumVelocityRatio: 1,
	            freeModeSticky: false,
	            freeModeMinimumVelocity: 0.02,
	            // Autoheight
	            autoHeight: false,
	            // Set wrapper width
	            setWrapperSize: false,
	            // Virtual Translate
	            virtualTranslate: false,
	            // Effects
	            effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
	            coverflow: {
	                rotate: 50,
	                stretch: 0,
	                depth: 100,
	                modifier: 1,
	                slideShadows : true
	            },
	            flip: {
	                slideShadows : true,
	                limitRotation: true
	            },
	            cube: {
	                slideShadows: true,
	                shadow: true,
	                shadowOffset: 20,
	                shadowScale: 0.94
	            },
	            fade: {
	                crossFade: false
	            },
	            // Parallax
	            parallax: false,
	            // Zoom
	            zoom: false,
	            zoomMax: 3,
	            zoomMin: 1,
	            zoomToggle: true,
	            // Scrollbar
	            scrollbar: null,
	            scrollbarHide: true,
	            scrollbarDraggable: false,
	            scrollbarSnapOnRelease: false,
	            // Keyboard Mousewheel
	            keyboardControl: false,
	            mousewheelControl: false,
	            mousewheelReleaseOnEdges: false,
	            mousewheelInvert: false,
	            mousewheelForceToAxis: false,
	            mousewheelSensitivity: 1,
	            mousewheelEventsTarged: 'container',
	            // Hash Navigation
	            hashnav: false,
	            hashnavWatchState: false,
	            // History
	            history: false,
	            // Commong Nav State
	            replaceState: false,
	            // Breakpoints
	            breakpoints: undefined,
	            // Slides grid
	            spaceBetween: 0,
	            slidesPerView: 1,
	            slidesPerColumn: 1,
	            slidesPerColumnFill: 'column',
	            slidesPerGroup: 1,
	            centeredSlides: false,
	            slidesOffsetBefore: 0, // in px
	            slidesOffsetAfter: 0, // in px
	            // Round length
	            roundLengths: false,
	            // Touches
	            touchRatio: 1,
	            touchAngle: 45,
	            simulateTouch: true,
	            shortSwipes: true,
	            longSwipes: true,
	            longSwipesRatio: 0.5,
	            longSwipesMs: 300,
	            followFinger: true,
	            onlyExternal: false,
	            threshold: 0,
	            touchMoveStopPropagation: true,
	            touchReleaseOnEdges: false,
	            // Unique Navigation Elements
	            uniqueNavElements: true,
	            // Pagination
	            pagination: null,
	            paginationElement: 'span',
	            paginationClickable: false,
	            paginationHide: false,
	            paginationBulletRender: null,
	            paginationProgressRender: null,
	            paginationFractionRender: null,
	            paginationCustomRender: null,
	            paginationType: 'bullets', // 'bullets' or 'progress' or 'fraction' or 'custom'
	            // Resistance
	            resistance: true,
	            resistanceRatio: 0.85,
	            // Next/prev buttons
	            nextButton: null,
	            prevButton: null,
	            // Progress
	            watchSlidesProgress: false,
	            watchSlidesVisibility: false,
	            // Cursor
	            grabCursor: false,
	            // Clicks
	            preventClicks: true,
	            preventClicksPropagation: true,
	            slideToClickedSlide: false,
	            // Lazy Loading
	            lazyLoading: false,
	            lazyLoadingInPrevNext: false,
	            lazyLoadingInPrevNextAmount: 1,
	            lazyLoadingOnTransitionStart: false,
	            // Images
	            preloadImages: true,
	            updateOnImagesReady: true,
	            // loop
	            loop: false,
	            loopAdditionalSlides: 0,
	            loopedSlides: null,
	            // Control
	            control: undefined,
	            controlInverse: false,
	            controlBy: 'slide', //or 'container'
	            normalizeSlideIndex: true,
	            // Swiping/no swiping
	            allowSwipeToPrev: true,
	            allowSwipeToNext: true,
	            swipeHandler: null, //'.swipe-handler',
	            noSwiping: true,
	            noSwipingClass: 'swiper-no-swiping',
	            // Passive Listeners
	            passiveListeners: true,
	            // NS
	            containerModifierClass: 'swiper-container-', // NEW
	            slideClass: 'swiper-slide',
	            slideActiveClass: 'swiper-slide-active',
	            slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
	            slideVisibleClass: 'swiper-slide-visible',
	            slideDuplicateClass: 'swiper-slide-duplicate',
	            slideNextClass: 'swiper-slide-next',
	            slideDuplicateNextClass: 'swiper-slide-duplicate-next',
	            slidePrevClass: 'swiper-slide-prev',
	            slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
	            wrapperClass: 'swiper-wrapper',
	            bulletClass: 'swiper-pagination-bullet',
	            bulletActiveClass: 'swiper-pagination-bullet-active',
	            buttonDisabledClass: 'swiper-button-disabled',
	            paginationCurrentClass: 'swiper-pagination-current',
	            paginationTotalClass: 'swiper-pagination-total',
	            paginationHiddenClass: 'swiper-pagination-hidden',
	            paginationProgressbarClass: 'swiper-pagination-progressbar',
	            paginationClickableClass: 'swiper-pagination-clickable', // NEW
	            paginationModifierClass: 'swiper-pagination-', // NEW
	            lazyLoadingClass: 'swiper-lazy',
	            lazyStatusLoadingClass: 'swiper-lazy-loading',
	            lazyStatusLoadedClass: 'swiper-lazy-loaded',
	            lazyPreloaderClass: 'swiper-lazy-preloader',
	            notificationClass: 'swiper-notification',
	            preloaderClass: 'preloader',
	            zoomContainerClass: 'swiper-zoom-container',
	        
	            // Observer
	            observer: false,
	            observeParents: false,
	            // Accessibility
	            a11y: false,
	            prevSlideMessage: 'Previous slide',
	            nextSlideMessage: 'Next slide',
	            firstSlideMessage: 'This is the first slide',
	            lastSlideMessage: 'This is the last slide',
	            paginationBulletMessage: 'Go to slide {{index}}',
	            // Callbacks
	            runCallbacksOnInit: true
	            /*
	            Callbacks:
	            onInit: function (swiper)
	            onDestroy: function (swiper)
	            onClick: function (swiper, e)
	            onTap: function (swiper, e)
	            onDoubleTap: function (swiper, e)
	            onSliderMove: function (swiper, e)
	            onSlideChangeStart: function (swiper)
	            onSlideChangeEnd: function (swiper)
	            onTransitionStart: function (swiper)
	            onTransitionEnd: function (swiper)
	            onImagesReady: function (swiper)
	            onProgress: function (swiper, progress)
	            onTouchStart: function (swiper, e)
	            onTouchMove: function (swiper, e)
	            onTouchMoveOpposite: function (swiper, e)
	            onTouchEnd: function (swiper, e)
	            onReachBeginning: function (swiper)
	            onReachEnd: function (swiper)
	            onSetTransition: function (swiper, duration)
	            onSetTranslate: function (swiper, translate)
	            onAutoplayStart: function (swiper)
	            onAutoplayStop: function (swiper),
	            onLazyImageLoad: function (swiper, slide, image)
	            onLazyImageReady: function (swiper, slide, image)
	            */
	        
	        };
	        var initialVirtualTranslate = params && params.virtualTranslate;
	        
	        params = params || {};
	        var originalParams = {};
	        for (var param in params) {
	            if (typeof params[param] === 'object' && params[param] !== null && !(params[param].nodeType || params[param] === window || params[param] === document || (typeof Dom7 !== 'undefined' && params[param] instanceof Dom7) || (typeof jQuery !== 'undefined' && params[param] instanceof jQuery))) {
	                originalParams[param] = {};
	                for (var deepParam in params[param]) {
	                    originalParams[param][deepParam] = params[param][deepParam];
	                }
	            }
	            else {
	                originalParams[param] = params[param];
	            }
	        }
	        for (var def in defaults) {
	            if (typeof params[def] === 'undefined') {
	                params[def] = defaults[def];
	            }
	            else if (typeof params[def] === 'object') {
	                for (var deepDef in defaults[def]) {
	                    if (typeof params[def][deepDef] === 'undefined') {
	                        params[def][deepDef] = defaults[def][deepDef];
	                    }
	                }
	            }
	        }
	        
	        // Swiper
	        var s = this;
	        
	        // Params
	        s.params = params;
	        s.originalParams = originalParams;
	        
	        // Classname
	        s.classNames = [];
	        /*=========================
	          Dom Library and plugins
	          ===========================*/
	        if (typeof $ !== 'undefined' && typeof Dom7 !== 'undefined'){
	            $ = Dom7;
	        }
	        if (typeof $ === 'undefined') {
	            if (typeof Dom7 === 'undefined') {
	                $ = window.Dom7 || window.Zepto || window.jQuery;
	            }
	            else {
	                $ = Dom7;
	            }
	            if (!$) return;
	        }
	        // Export it to Swiper instance
	        s.$ = $;
	        
	        /*=========================
	          Breakpoints
	          ===========================*/
	        s.currentBreakpoint = undefined;
	        s.getActiveBreakpoint = function () {
	            //Get breakpoint for window width
	            if (!s.params.breakpoints) return false;
	            var breakpoint = false;
	            var points = [], point;
	            for ( point in s.params.breakpoints ) {
	                if (s.params.breakpoints.hasOwnProperty(point)) {
	                    points.push(point);
	                }
	            }
	            points.sort(function (a, b) {
	                return parseInt(a, 10) > parseInt(b, 10);
	            });
	            for (var i = 0; i < points.length; i++) {
	                point = points[i];
	                if (point >= window.innerWidth && !breakpoint) {
	                    breakpoint = point;
	                }
	            }
	            return breakpoint || 'max';
	        };
	        s.setBreakpoint = function () {
	            //Set breakpoint for window width and update parameters
	            var breakpoint = s.getActiveBreakpoint();
	            if (breakpoint && s.currentBreakpoint !== breakpoint) {
	                var breakPointsParams = breakpoint in s.params.breakpoints ? s.params.breakpoints[breakpoint] : s.originalParams;
	                var needsReLoop = s.params.loop && (breakPointsParams.slidesPerView !== s.params.slidesPerView);
	                for ( var param in breakPointsParams ) {
	                    s.params[param] = breakPointsParams[param];
	                }
	                s.currentBreakpoint = breakpoint;
	                if(needsReLoop && s.destroyLoop) {
	                    s.reLoop(true);
	                }
	            }
	        };
	        // Set breakpoint on load
	        if (s.params.breakpoints) {
	            s.setBreakpoint();
	        }
	        
	        /*=========================
	          Preparation - Define Container, Wrapper and Pagination
	          ===========================*/
	        s.container = $(container);
	        if (s.container.length === 0) return;
	        if (s.container.length > 1) {
	            var swipers = [];
	            s.container.each(function () {
	                var container = this;
	                swipers.push(new Swiper(this, params));
	            });
	            return swipers;
	        }
	        
	        // Save instance in container HTML Element and in data
	        s.container[0].swiper = s;
	        s.container.data('swiper', s);
	        
	        s.classNames.push(s.params.containerModifierClass + s.params.direction);
	        
	        if (s.params.freeMode) {
	            s.classNames.push(s.params.containerModifierClass + 'free-mode');
	        }
	        if (!s.support.flexbox) {
	            s.classNames.push(s.params.containerModifierClass + 'no-flexbox');
	            s.params.slidesPerColumn = 1;
	        }
	        if (s.params.autoHeight) {
	            s.classNames.push(s.params.containerModifierClass + 'autoheight');
	        }
	        // Enable slides progress when required
	        if (s.params.parallax || s.params.watchSlidesVisibility) {
	            s.params.watchSlidesProgress = true;
	        }
	        // Max resistance when touchReleaseOnEdges
	        if (s.params.touchReleaseOnEdges) {
	            s.params.resistanceRatio = 0;
	        }
	        // Coverflow / 3D
	        if (['cube', 'coverflow', 'flip'].indexOf(s.params.effect) >= 0) {
	            if (s.support.transforms3d) {
	                s.params.watchSlidesProgress = true;
	                s.classNames.push(s.params.containerModifierClass + '3d');
	            }
	            else {
	                s.params.effect = 'slide';
	            }
	        }
	        if (s.params.effect !== 'slide') {
	            s.classNames.push(s.params.containerModifierClass + s.params.effect);
	        }
	        if (s.params.effect === 'cube') {
	            s.params.resistanceRatio = 0;
	            s.params.slidesPerView = 1;
	            s.params.slidesPerColumn = 1;
	            s.params.slidesPerGroup = 1;
	            s.params.centeredSlides = false;
	            s.params.spaceBetween = 0;
	            s.params.virtualTranslate = true;
	            s.params.setWrapperSize = false;
	        }
	        if (s.params.effect === 'fade' || s.params.effect === 'flip') {
	            s.params.slidesPerView = 1;
	            s.params.slidesPerColumn = 1;
	            s.params.slidesPerGroup = 1;
	            s.params.watchSlidesProgress = true;
	            s.params.spaceBetween = 0;
	            s.params.setWrapperSize = false;
	            if (typeof initialVirtualTranslate === 'undefined') {
	                s.params.virtualTranslate = true;
	            }
	        }
	        
	        // Grab Cursor
	        if (s.params.grabCursor && s.support.touch) {
	            s.params.grabCursor = false;
	        }
	        
	        // Wrapper
	        s.wrapper = s.container.children('.' + s.params.wrapperClass);
	        
	        // Pagination
	        if (s.params.pagination) {
	            s.paginationContainer = $(s.params.pagination);
	            if (s.params.uniqueNavElements && typeof s.params.pagination === 'string' && s.paginationContainer.length > 1 && s.container.find(s.params.pagination).length === 1) {
	                s.paginationContainer = s.container.find(s.params.pagination);
	            }
	        
	            if (s.params.paginationType === 'bullets' && s.params.paginationClickable) {
	                s.paginationContainer.addClass(s.params.paginationModifierClass + 'clickable');
	            }
	            else {
	                s.params.paginationClickable = false;
	            }
	            s.paginationContainer.addClass(s.params.paginationModifierClass + s.params.paginationType);
	        }
	        // Next/Prev Buttons
	        if (s.params.nextButton || s.params.prevButton) {
	            if (s.params.nextButton) {
	                s.nextButton = $(s.params.nextButton);
	                if (s.params.uniqueNavElements && typeof s.params.nextButton === 'string' && s.nextButton.length > 1 && s.container.find(s.params.nextButton).length === 1) {
	                    s.nextButton = s.container.find(s.params.nextButton);
	                }
	            }
	            if (s.params.prevButton) {
	                s.prevButton = $(s.params.prevButton);
	                if (s.params.uniqueNavElements && typeof s.params.prevButton === 'string' && s.prevButton.length > 1 && s.container.find(s.params.prevButton).length === 1) {
	                    s.prevButton = s.container.find(s.params.prevButton);
	                }
	            }
	        }
	        
	        // Is Horizontal
	        s.isHorizontal = function () {
	            return s.params.direction === 'horizontal';
	        };
	        // s.isH = isH;
	        
	        // RTL
	        s.rtl = s.isHorizontal() && (s.container[0].dir.toLowerCase() === 'rtl' || s.container.css('direction') === 'rtl');
	        if (s.rtl) {
	            s.classNames.push(s.params.containerModifierClass + 'rtl');
	        }
	        
	        // Wrong RTL support
	        if (s.rtl) {
	            s.wrongRTL = s.wrapper.css('display') === '-webkit-box';
	        }
	        
	        // Columns
	        if (s.params.slidesPerColumn > 1) {
	            s.classNames.push(s.params.containerModifierClass + 'multirow');
	        }
	        
	        // Check for Android
	        if (s.device.android) {
	            s.classNames.push(s.params.containerModifierClass + 'android');
	        }
	        
	        // Add classes
	        s.container.addClass(s.classNames.join(' '));
	        
	        // Translate
	        s.translate = 0;
	        
	        // Progress
	        s.progress = 0;
	        
	        // Velocity
	        s.velocity = 0;
	        
	        /*=========================
	          Locks, unlocks
	          ===========================*/
	        s.lockSwipeToNext = function () {
	            s.params.allowSwipeToNext = false;
	            if (s.params.allowSwipeToPrev === false && s.params.grabCursor) {
	                s.unsetGrabCursor();
	            }
	        };
	        s.lockSwipeToPrev = function () {
	            s.params.allowSwipeToPrev = false;
	            if (s.params.allowSwipeToNext === false && s.params.grabCursor) {
	                s.unsetGrabCursor();
	            }
	        };
	        s.lockSwipes = function () {
	            s.params.allowSwipeToNext = s.params.allowSwipeToPrev = false;
	            if (s.params.grabCursor) s.unsetGrabCursor();
	        };
	        s.unlockSwipeToNext = function () {
	            s.params.allowSwipeToNext = true;
	            if (s.params.allowSwipeToPrev === true && s.params.grabCursor) {
	                s.setGrabCursor();
	            }
	        };
	        s.unlockSwipeToPrev = function () {
	            s.params.allowSwipeToPrev = true;
	            if (s.params.allowSwipeToNext === true && s.params.grabCursor) {
	                s.setGrabCursor();
	            }
	        };
	        s.unlockSwipes = function () {
	            s.params.allowSwipeToNext = s.params.allowSwipeToPrev = true;
	            if (s.params.grabCursor) s.setGrabCursor();
	        };
	        
	        /*=========================
	          Round helper
	          ===========================*/
	        function round(a) {
	            return Math.floor(a);
	        }
	        /*=========================
	          Set grab cursor
	          ===========================*/
	        s.setGrabCursor = function(moving) {
	            s.container[0].style.cursor = 'move';
	            s.container[0].style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
	            s.container[0].style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
	            s.container[0].style.cursor = moving ? 'grabbing': 'grab';
	        };
	        s.unsetGrabCursor = function () {
	            s.container[0].style.cursor = '';
	        };
	        if (s.params.grabCursor) {
	            s.setGrabCursor();
	        }
	        /*=========================
	          Update on Images Ready
	          ===========================*/
	        s.imagesToLoad = [];
	        s.imagesLoaded = 0;
	        
	        s.loadImage = function (imgElement, src, srcset, sizes, checkForComplete, callback) {
	            var image;
	            function onReady () {
	                if (callback) callback();
	            }
	            if (!imgElement.complete || !checkForComplete) {
	                if (src) {
	                    image = new window.Image();
	                    image.onload = onReady;
	                    image.onerror = onReady;
	                    if (sizes) {
	                        image.sizes = sizes;
	                    }
	                    if (srcset) {
	                        image.srcset = srcset;
	                    }
	                    if (src) {
	                        image.src = src;
	                    }
	                } else {
	                    onReady();
	                }
	        
	            } else {//image already loaded...
	                onReady();
	            }
	        };
	        s.preloadImages = function () {
	            s.imagesToLoad = s.container.find('img');
	            function _onReady() {
	                if (typeof s === 'undefined' || s === null || !s) return;
	                if (s.imagesLoaded !== undefined) s.imagesLoaded++;
	                if (s.imagesLoaded === s.imagesToLoad.length) {
	                    if (s.params.updateOnImagesReady) s.update();
	                    s.emit('onImagesReady', s);
	                }
	            }
	            for (var i = 0; i < s.imagesToLoad.length; i++) {
	                s.loadImage(s.imagesToLoad[i], (s.imagesToLoad[i].currentSrc || s.imagesToLoad[i].getAttribute('src')), (s.imagesToLoad[i].srcset || s.imagesToLoad[i].getAttribute('srcset')), s.imagesToLoad[i].sizes || s.imagesToLoad[i].getAttribute('sizes'), true, _onReady);
	            }
	        };
	        
	        /*=========================
	          Autoplay
	          ===========================*/
	        s.autoplayTimeoutId = undefined;
	        s.autoplaying = false;
	        s.autoplayPaused = false;
	        function autoplay() {
	            var autoplayDelay = s.params.autoplay;
	            var activeSlide = s.slides.eq(s.activeIndex);
	            if (activeSlide.attr('data-swiper-autoplay')) {
	                autoplayDelay = activeSlide.attr('data-swiper-autoplay') || s.params.autoplay;
	            }
	            s.autoplayTimeoutId = setTimeout(function () {
	                if (s.params.loop) {
	                    s.fixLoop();
	                    s._slideNext();
	                    s.emit('onAutoplay', s);
	                }
	                else {
	                    if (!s.isEnd) {
	                        s._slideNext();
	                        s.emit('onAutoplay', s);
	                    }
	                    else {
	                        if (!params.autoplayStopOnLast) {
	                            s._slideTo(0);
	                            s.emit('onAutoplay', s);
	                        }
	                        else {
	                            s.stopAutoplay();
	                        }
	                    }
	                }
	            }, autoplayDelay);
	        }
	        s.startAutoplay = function () {
	            if (typeof s.autoplayTimeoutId !== 'undefined') return false;
	            if (!s.params.autoplay) return false;
	            if (s.autoplaying) return false;
	            s.autoplaying = true;
	            s.emit('onAutoplayStart', s);
	            autoplay();
	        };
	        s.stopAutoplay = function (internal) {
	            if (!s.autoplayTimeoutId) return;
	            if (s.autoplayTimeoutId) clearTimeout(s.autoplayTimeoutId);
	            s.autoplaying = false;
	            s.autoplayTimeoutId = undefined;
	            s.emit('onAutoplayStop', s);
	        };
	        s.pauseAutoplay = function (speed) {
	            if (s.autoplayPaused) return;
	            if (s.autoplayTimeoutId) clearTimeout(s.autoplayTimeoutId);
	            s.autoplayPaused = true;
	            if (speed === 0) {
	                s.autoplayPaused = false;
	                autoplay();
	            }
	            else {
	                s.wrapper.transitionEnd(function () {
	                    if (!s) return;
	                    s.autoplayPaused = false;
	                    if (!s.autoplaying) {
	                        s.stopAutoplay();
	                    }
	                    else {
	                        autoplay();
	                    }
	                });
	            }
	        };
	        /*=========================
	          Min/Max Translate
	          ===========================*/
	        s.minTranslate = function () {
	            return (-s.snapGrid[0]);
	        };
	        s.maxTranslate = function () {
	            return (-s.snapGrid[s.snapGrid.length - 1]);
	        };
	        /*=========================
	          Slider/slides sizes
	          ===========================*/
	        s.updateAutoHeight = function () {
	            var activeSlides = [];
	            var newHeight = 0;
	            var i;
	        
	            // Find slides currently in view
	            if(s.params.slidesPerView !== 'auto' && s.params.slidesPerView > 1) {
	                for (i = 0; i < Math.ceil(s.params.slidesPerView); i++) {
	                    var index = s.activeIndex + i;
	                    if(index > s.slides.length) break;
	                    activeSlides.push(s.slides.eq(index)[0]);
	                }
	            } else {
	                activeSlides.push(s.slides.eq(s.activeIndex)[0]);
	            }
	        
	            // Find new height from heighest slide in view
	            for (i = 0; i < activeSlides.length; i++) {
	                if (typeof activeSlides[i] !== 'undefined') {
	                    var height = activeSlides[i].offsetHeight;
	                    newHeight = height > newHeight ? height : newHeight;
	                }
	            }
	        
	            // Update Height
	            if (newHeight) s.wrapper.css('height', newHeight + 'px');
	        };
	        s.updateContainerSize = function () {
	            var width, height;
	            if (typeof s.params.width !== 'undefined') {
	                width = s.params.width;
	            }
	            else {
	                width = s.container[0].clientWidth;
	            }
	            if (typeof s.params.height !== 'undefined') {
	                height = s.params.height;
	            }
	            else {
	                height = s.container[0].clientHeight;
	            }
	            if (width === 0 && s.isHorizontal() || height === 0 && !s.isHorizontal()) {
	                return;
	            }
	        
	            //Subtract paddings
	            width = width - parseInt(s.container.css('padding-left'), 10) - parseInt(s.container.css('padding-right'), 10);
	            height = height - parseInt(s.container.css('padding-top'), 10) - parseInt(s.container.css('padding-bottom'), 10);
	        
	            // Store values
	            s.width = width;
	            s.height = height;
	            s.size = s.isHorizontal() ? s.width : s.height;
	        };
	        
	        s.updateSlidesSize = function () {
	            s.slides = s.wrapper.children('.' + s.params.slideClass);
	            s.snapGrid = [];
	            s.slidesGrid = [];
	            s.slidesSizesGrid = [];
	        
	            var spaceBetween = s.params.spaceBetween,
	                slidePosition = -s.params.slidesOffsetBefore,
	                i,
	                prevSlideSize = 0,
	                index = 0;
	            if (typeof s.size === 'undefined') return;
	            if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
	                spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * s.size;
	            }
	        
	            s.virtualSize = -spaceBetween;
	            // reset margins
	            if (s.rtl) s.slides.css({marginLeft: '', marginTop: ''});
	            else s.slides.css({marginRight: '', marginBottom: ''});
	        
	            var slidesNumberEvenToRows;
	            if (s.params.slidesPerColumn > 1) {
	                if (Math.floor(s.slides.length / s.params.slidesPerColumn) === s.slides.length / s.params.slidesPerColumn) {
	                    slidesNumberEvenToRows = s.slides.length;
	                }
	                else {
	                    slidesNumberEvenToRows = Math.ceil(s.slides.length / s.params.slidesPerColumn) * s.params.slidesPerColumn;
	                }
	                if (s.params.slidesPerView !== 'auto' && s.params.slidesPerColumnFill === 'row') {
	                    slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, s.params.slidesPerView * s.params.slidesPerColumn);
	                }
	            }
	        
	            // Calc slides
	            var slideSize;
	            var slidesPerColumn = s.params.slidesPerColumn;
	            var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
	            var numFullColumns = slidesPerRow - (s.params.slidesPerColumn * slidesPerRow - s.slides.length);
	            for (i = 0; i < s.slides.length; i++) {
	                slideSize = 0;
	                var slide = s.slides.eq(i);
	                if (s.params.slidesPerColumn > 1) {
	                    // Set slides order
	                    var newSlideOrderIndex;
	                    var column, row;
	                    if (s.params.slidesPerColumnFill === 'column') {
	                        column = Math.floor(i / slidesPerColumn);
	                        row = i - column * slidesPerColumn;
	                        if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn-1)) {
	                            if (++row >= slidesPerColumn) {
	                                row = 0;
	                                column++;
	                            }
	                        }
	                        newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
	                        slide
	                            .css({
	                                '-webkit-box-ordinal-group': newSlideOrderIndex,
	                                '-moz-box-ordinal-group': newSlideOrderIndex,
	                                '-ms-flex-order': newSlideOrderIndex,
	                                '-webkit-order': newSlideOrderIndex,
	                                'order': newSlideOrderIndex
	                            });
	                    }
	                    else {
	                        row = Math.floor(i / slidesPerRow);
	                        column = i - row * slidesPerRow;
	                    }
	                    slide
	                        .css(
	                            'margin-' + (s.isHorizontal() ? 'top' : 'left'),
	                            (row !== 0 && s.params.spaceBetween) && (s.params.spaceBetween + 'px')
	                        )
	                        .attr('data-swiper-column', column)
	                        .attr('data-swiper-row', row);
	        
	                }
	                if (slide.css('display') === 'none') continue;
	                if (s.params.slidesPerView === 'auto') {
	                    slideSize = s.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
	                    if (s.params.roundLengths) slideSize = round(slideSize);
	                }
	                else {
	                    slideSize = (s.size - (s.params.slidesPerView - 1) * spaceBetween) / s.params.slidesPerView;
	                    if (s.params.roundLengths) slideSize = round(slideSize);
	        
	                    if (s.isHorizontal()) {
	                        s.slides[i].style.width = slideSize + 'px';
	                    }
	                    else {
	                        s.slides[i].style.height = slideSize + 'px';
	                    }
	                }
	                s.slides[i].swiperSlideSize = slideSize;
	                s.slidesSizesGrid.push(slideSize);
	        
	        
	                if (s.params.centeredSlides) {
	                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
	                    if (i === 0) slidePosition = slidePosition - s.size / 2 - spaceBetween;
	                    if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
	                    if ((index) % s.params.slidesPerGroup === 0) s.snapGrid.push(slidePosition);
	                    s.slidesGrid.push(slidePosition);
	                }
	                else {
	                    if ((index) % s.params.slidesPerGroup === 0) s.snapGrid.push(slidePosition);
	                    s.slidesGrid.push(slidePosition);
	                    slidePosition = slidePosition + slideSize + spaceBetween;
	                }
	        
	                s.virtualSize += slideSize + spaceBetween;
	        
	                prevSlideSize = slideSize;
	        
	                index ++;
	            }
	            s.virtualSize = Math.max(s.virtualSize, s.size) + s.params.slidesOffsetAfter;
	            var newSlidesGrid;
	        
	            if (
	                s.rtl && s.wrongRTL && (s.params.effect === 'slide' || s.params.effect === 'coverflow')) {
	                s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});
	            }
	            if (!s.support.flexbox || s.params.setWrapperSize) {
	                if (s.isHorizontal()) s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});
	                else s.wrapper.css({height: s.virtualSize + s.params.spaceBetween + 'px'});
	            }
	        
	            if (s.params.slidesPerColumn > 1) {
	                s.virtualSize = (slideSize + s.params.spaceBetween) * slidesNumberEvenToRows;
	                s.virtualSize = Math.ceil(s.virtualSize / s.params.slidesPerColumn) - s.params.spaceBetween;
	                if (s.isHorizontal()) s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});
	                else s.wrapper.css({height: s.virtualSize + s.params.spaceBetween + 'px'});
	                if (s.params.centeredSlides) {
	                    newSlidesGrid = [];
	                    for (i = 0; i < s.snapGrid.length; i++) {
	                        if (s.snapGrid[i] < s.virtualSize + s.snapGrid[0]) newSlidesGrid.push(s.snapGrid[i]);
	                    }
	                    s.snapGrid = newSlidesGrid;
	                }
	            }
	        
	            // Remove last grid elements depending on width
	            if (!s.params.centeredSlides) {
	                newSlidesGrid = [];
	                for (i = 0; i < s.snapGrid.length; i++) {
	                    if (s.snapGrid[i] <= s.virtualSize - s.size) {
	                        newSlidesGrid.push(s.snapGrid[i]);
	                    }
	                }
	                s.snapGrid = newSlidesGrid;
	                if (Math.floor(s.virtualSize - s.size) - Math.floor(s.snapGrid[s.snapGrid.length - 1]) > 1) {
	                    s.snapGrid.push(s.virtualSize - s.size);
	                }
	            }
	            if (s.snapGrid.length === 0) s.snapGrid = [0];
	        
	            if (s.params.spaceBetween !== 0) {
	                if (s.isHorizontal()) {
	                    if (s.rtl) s.slides.css({marginLeft: spaceBetween + 'px'});
	                    else s.slides.css({marginRight: spaceBetween + 'px'});
	                }
	                else s.slides.css({marginBottom: spaceBetween + 'px'});
	            }
	            if (s.params.watchSlidesProgress) {
	                s.updateSlidesOffset();
	            }
	        };
	        s.updateSlidesOffset = function () {
	            for (var i = 0; i < s.slides.length; i++) {
	                s.slides[i].swiperSlideOffset = s.isHorizontal() ? s.slides[i].offsetLeft : s.slides[i].offsetTop;
	            }
	        };
	        
	        /*=========================
	          Dynamic Slides Per View
	          ===========================*/
	        s.currentSlidesPerView = function () {
	            var spv = 1, i, j;
	            if (s.params.centeredSlides) {
	                var size = s.slides[s.activeIndex].swiperSlideSize;
	                var breakLoop;
	                for (i = s.activeIndex + 1; i < s.slides.length; i++) {
	                    if (s.slides[i] && !breakLoop) {
	                        size += s.slides[i].swiperSlideSize;
	                        spv ++;
	                        if (size > s.size) breakLoop = true;
	                    }
	                }
	                for (j = s.activeIndex - 1; j >= 0; j--) {
	                    if (s.slides[j] && !breakLoop) {
	                        size += s.slides[j].swiperSlideSize;
	                        spv ++;
	                        if (size > s.size) breakLoop = true;
	                    }
	                }
	            }
	            else {
	                for (i = s.activeIndex + 1; i < s.slides.length; i++) {
	                    if (s.slidesGrid[i] - s.slidesGrid[s.activeIndex] < s.size) {
	                        spv++;
	                    }
	                }
	            }
	            return spv;
	        };
	        /*=========================
	          Slider/slides progress
	          ===========================*/
	        s.updateSlidesProgress = function (translate) {
	            if (typeof translate === 'undefined') {
	                translate = s.translate || 0;
	            }
	            if (s.slides.length === 0) return;
	            if (typeof s.slides[0].swiperSlideOffset === 'undefined') s.updateSlidesOffset();
	        
	            var offsetCenter = -translate;
	            if (s.rtl) offsetCenter = translate;
	        
	            // Visible Slides
	            s.slides.removeClass(s.params.slideVisibleClass);
	            for (var i = 0; i < s.slides.length; i++) {
	                var slide = s.slides[i];
	                var slideProgress = (offsetCenter + (s.params.centeredSlides ? s.minTranslate() : 0) - slide.swiperSlideOffset) / (slide.swiperSlideSize + s.params.spaceBetween);
	                if (s.params.watchSlidesVisibility) {
	                    var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
	                    var slideAfter = slideBefore + s.slidesSizesGrid[i];
	                    var isVisible =
	                        (slideBefore >= 0 && slideBefore < s.size) ||
	                        (slideAfter > 0 && slideAfter <= s.size) ||
	                        (slideBefore <= 0 && slideAfter >= s.size);
	                    if (isVisible) {
	                        s.slides.eq(i).addClass(s.params.slideVisibleClass);
	                    }
	                }
	                slide.progress = s.rtl ? -slideProgress : slideProgress;
	            }
	        };
	        s.updateProgress = function (translate) {
	            if (typeof translate === 'undefined') {
	                translate = s.translate || 0;
	            }
	            var translatesDiff = s.maxTranslate() - s.minTranslate();
	            var wasBeginning = s.isBeginning;
	            var wasEnd = s.isEnd;
	            if (translatesDiff === 0) {
	                s.progress = 0;
	                s.isBeginning = s.isEnd = true;
	            }
	            else {
	                s.progress = (translate - s.minTranslate()) / (translatesDiff);
	                s.isBeginning = s.progress <= 0;
	                s.isEnd = s.progress >= 1;
	            }
	            if (s.isBeginning && !wasBeginning) s.emit('onReachBeginning', s);
	            if (s.isEnd && !wasEnd) s.emit('onReachEnd', s);
	        
	            if (s.params.watchSlidesProgress) s.updateSlidesProgress(translate);
	            s.emit('onProgress', s, s.progress);
	        };
	        s.updateActiveIndex = function () {
	            var translate = s.rtl ? s.translate : -s.translate;
	            var newActiveIndex, i, snapIndex;
	            for (i = 0; i < s.slidesGrid.length; i ++) {
	                if (typeof s.slidesGrid[i + 1] !== 'undefined') {
	                    if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1] - (s.slidesGrid[i + 1] - s.slidesGrid[i]) / 2) {
	                        newActiveIndex = i;
	                    }
	                    else if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1]) {
	                        newActiveIndex = i + 1;
	                    }
	                }
	                else {
	                    if (translate >= s.slidesGrid[i]) {
	                        newActiveIndex = i;
	                    }
	                }
	            }
	            // Normalize slideIndex
	            if(s.params.normalizeSlideIndex){
	                if (newActiveIndex < 0 || typeof newActiveIndex === 'undefined') newActiveIndex = 0;
	            }
	            // for (i = 0; i < s.slidesGrid.length; i++) {
	                // if (- translate >= s.slidesGrid[i]) {
	                    // newActiveIndex = i;
	                // }
	            // }
	            snapIndex = Math.floor(newActiveIndex / s.params.slidesPerGroup);
	            if (snapIndex >= s.snapGrid.length) snapIndex = s.snapGrid.length - 1;
	        
	            if (newActiveIndex === s.activeIndex) {
	                return;
	            }
	            s.snapIndex = snapIndex;
	            s.previousIndex = s.activeIndex;
	            s.activeIndex = newActiveIndex;
	            s.updateClasses();
	            s.updateRealIndex();
	        };
	        s.updateRealIndex = function(){
	            s.realIndex = parseInt(s.slides.eq(s.activeIndex).attr('data-swiper-slide-index') || s.activeIndex, 10);
	        };
	        
	        /*=========================
	          Classes
	          ===========================*/
	        s.updateClasses = function () {
	            s.slides.removeClass(s.params.slideActiveClass + ' ' + s.params.slideNextClass + ' ' + s.params.slidePrevClass + ' ' + s.params.slideDuplicateActiveClass + ' ' + s.params.slideDuplicateNextClass + ' ' + s.params.slideDuplicatePrevClass);
	            var activeSlide = s.slides.eq(s.activeIndex);
	            // Active classes
	            activeSlide.addClass(s.params.slideActiveClass);
	            if (params.loop) {
	                // Duplicate to all looped slides
	                if (activeSlide.hasClass(s.params.slideDuplicateClass)) {
	                    s.wrapper.children('.' + s.params.slideClass + ':not(.' + s.params.slideDuplicateClass + ')[data-swiper-slide-index="' + s.realIndex + '"]').addClass(s.params.slideDuplicateActiveClass);
	                }
	                else {
	                    s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + s.realIndex + '"]').addClass(s.params.slideDuplicateActiveClass);
	                }
	            }
	            // Next Slide
	            var nextSlide = activeSlide.next('.' + s.params.slideClass).addClass(s.params.slideNextClass);
	            if (s.params.loop && nextSlide.length === 0) {
	                nextSlide = s.slides.eq(0);
	                nextSlide.addClass(s.params.slideNextClass);
	            }
	            // Prev Slide
	            var prevSlide = activeSlide.prev('.' + s.params.slideClass).addClass(s.params.slidePrevClass);
	            if (s.params.loop && prevSlide.length === 0) {
	                prevSlide = s.slides.eq(-1);
	                prevSlide.addClass(s.params.slidePrevClass);
	            }
	            if (params.loop) {
	                // Duplicate to all looped slides
	                if (nextSlide.hasClass(s.params.slideDuplicateClass)) {
	                    s.wrapper.children('.' + s.params.slideClass + ':not(.' + s.params.slideDuplicateClass + ')[data-swiper-slide-index="' + nextSlide.attr('data-swiper-slide-index') + '"]').addClass(s.params.slideDuplicateNextClass);
	                }
	                else {
	                    s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + nextSlide.attr('data-swiper-slide-index') + '"]').addClass(s.params.slideDuplicateNextClass);
	                }
	                if (prevSlide.hasClass(s.params.slideDuplicateClass)) {
	                    s.wrapper.children('.' + s.params.slideClass + ':not(.' + s.params.slideDuplicateClass + ')[data-swiper-slide-index="' + prevSlide.attr('data-swiper-slide-index') + '"]').addClass(s.params.slideDuplicatePrevClass);
	                }
	                else {
	                    s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + prevSlide.attr('data-swiper-slide-index') + '"]').addClass(s.params.slideDuplicatePrevClass);
	                }
	            }
	        
	            // Pagination
	            if (s.paginationContainer && s.paginationContainer.length > 0) {
	                // Current/Total
	                var current,
	                    total = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;
	                if (s.params.loop) {
	                    current = Math.ceil((s.activeIndex - s.loopedSlides)/s.params.slidesPerGroup);
	                    if (current > s.slides.length - 1 - s.loopedSlides * 2) {
	                        current = current - (s.slides.length - s.loopedSlides * 2);
	                    }
	                    if (current > total - 1) current = current - total;
	                    if (current < 0 && s.params.paginationType !== 'bullets') current = total + current;
	                }
	                else {
	                    if (typeof s.snapIndex !== 'undefined') {
	                        current = s.snapIndex;
	                    }
	                    else {
	                        current = s.activeIndex || 0;
	                    }
	                }
	                // Types
	                if (s.params.paginationType === 'bullets' && s.bullets && s.bullets.length > 0) {
	                    s.bullets.removeClass(s.params.bulletActiveClass);
	                    if (s.paginationContainer.length > 1) {
	                        s.bullets.each(function () {
	                            if ($(this).index() === current) $(this).addClass(s.params.bulletActiveClass);
	                        });
	                    }
	                    else {
	                        s.bullets.eq(current).addClass(s.params.bulletActiveClass);
	                    }
	                }
	                if (s.params.paginationType === 'fraction') {
	                    s.paginationContainer.find('.' + s.params.paginationCurrentClass).text(current + 1);
	                    s.paginationContainer.find('.' + s.params.paginationTotalClass).text(total);
	                }
	                if (s.params.paginationType === 'progress') {
	                    var scale = (current + 1) / total,
	                        scaleX = scale,
	                        scaleY = 1;
	                    if (!s.isHorizontal()) {
	                        scaleY = scale;
	                        scaleX = 1;
	                    }
	                    s.paginationContainer.find('.' + s.params.paginationProgressbarClass).transform('translate3d(0,0,0) scaleX(' + scaleX + ') scaleY(' + scaleY + ')').transition(s.params.speed);
	                }
	                if (s.params.paginationType === 'custom' && s.params.paginationCustomRender) {
	                    s.paginationContainer.html(s.params.paginationCustomRender(s, current + 1, total));
	                    s.emit('onPaginationRendered', s, s.paginationContainer[0]);
	                }
	            }
	        
	            // Next/active buttons
	            if (!s.params.loop) {
	                if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
	                    if (s.isBeginning) {
	                        s.prevButton.addClass(s.params.buttonDisabledClass);
	                        if (s.params.a11y && s.a11y) s.a11y.disable(s.prevButton);
	                    }
	                    else {
	                        s.prevButton.removeClass(s.params.buttonDisabledClass);
	                        if (s.params.a11y && s.a11y) s.a11y.enable(s.prevButton);
	                    }
	                }
	                if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
	                    if (s.isEnd) {
	                        s.nextButton.addClass(s.params.buttonDisabledClass);
	                        if (s.params.a11y && s.a11y) s.a11y.disable(s.nextButton);
	                    }
	                    else {
	                        s.nextButton.removeClass(s.params.buttonDisabledClass);
	                        if (s.params.a11y && s.a11y) s.a11y.enable(s.nextButton);
	                    }
	                }
	            }
	        };
	        
	        /*=========================
	          Pagination
	          ===========================*/
	        s.updatePagination = function () {
	            if (!s.params.pagination) return;
	            if (s.paginationContainer && s.paginationContainer.length > 0) {
	                var paginationHTML = '';
	                if (s.params.paginationType === 'bullets') {
	                    var numberOfBullets = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;
	                    for (var i = 0; i < numberOfBullets; i++) {
	                        if (s.params.paginationBulletRender) {
	                            paginationHTML += s.params.paginationBulletRender(s, i, s.params.bulletClass);
	                        }
	                        else {
	                            paginationHTML += '<' + s.params.paginationElement+' class="' + s.params.bulletClass + '"></' + s.params.paginationElement + '>';
	                        }
	                    }
	                    s.paginationContainer.html(paginationHTML);
	                    s.bullets = s.paginationContainer.find('.' + s.params.bulletClass);
	                    if (s.params.paginationClickable && s.params.a11y && s.a11y) {
	                        s.a11y.initPagination();
	                    }
	                }
	                if (s.params.paginationType === 'fraction') {
	                    if (s.params.paginationFractionRender) {
	                        paginationHTML = s.params.paginationFractionRender(s, s.params.paginationCurrentClass, s.params.paginationTotalClass);
	                    }
	                    else {
	                        paginationHTML =
	                            '<span class="' + s.params.paginationCurrentClass + '"></span>' +
	                            ' / ' +
	                            '<span class="' + s.params.paginationTotalClass+'"></span>';
	                    }
	                    s.paginationContainer.html(paginationHTML);
	                }
	                if (s.params.paginationType === 'progress') {
	                    if (s.params.paginationProgressRender) {
	                        paginationHTML = s.params.paginationProgressRender(s, s.params.paginationProgressbarClass);
	                    }
	                    else {
	                        paginationHTML = '<span class="' + s.params.paginationProgressbarClass + '"></span>';
	                    }
	                    s.paginationContainer.html(paginationHTML);
	                }
	                if (s.params.paginationType !== 'custom') {
	                    s.emit('onPaginationRendered', s, s.paginationContainer[0]);
	                }
	            }
	        };
	        /*=========================
	          Common update method
	          ===========================*/
	        s.update = function (updateTranslate) {
	            if (!s) return;
	            s.updateContainerSize();
	            s.updateSlidesSize();
	            s.updateProgress();
	            s.updatePagination();
	            s.updateClasses();
	            if (s.params.scrollbar && s.scrollbar) {
	                s.scrollbar.set();
	            }
	            function forceSetTranslate() {
	                var translate = s.rtl ? -s.translate : s.translate;
	                newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
	                s.setWrapperTranslate(newTranslate);
	                s.updateActiveIndex();
	                s.updateClasses();
	            }
	            if (updateTranslate) {
	                var translated, newTranslate;
	                if (s.controller && s.controller.spline) {
	                    s.controller.spline = undefined;
	                }
	                if (s.params.freeMode) {
	                    forceSetTranslate();
	                    if (s.params.autoHeight) {
	                        s.updateAutoHeight();
	                    }
	                }
	                else {
	                    if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
	                        translated = s.slideTo(s.slides.length - 1, 0, false, true);
	                    }
	                    else {
	                        translated = s.slideTo(s.activeIndex, 0, false, true);
	                    }
	                    if (!translated) {
	                        forceSetTranslate();
	                    }
	                }
	            }
	            else if (s.params.autoHeight) {
	                s.updateAutoHeight();
	            }
	        };
	        
	        /*=========================
	          Resize Handler
	          ===========================*/
	        s.onResize = function (forceUpdatePagination) {
	            //Breakpoints
	            if (s.params.breakpoints) {
	                s.setBreakpoint();
	            }
	        
	            // Disable locks on resize
	            var allowSwipeToPrev = s.params.allowSwipeToPrev;
	            var allowSwipeToNext = s.params.allowSwipeToNext;
	            s.params.allowSwipeToPrev = s.params.allowSwipeToNext = true;
	        
	            s.updateContainerSize();
	            s.updateSlidesSize();
	            if (s.params.slidesPerView === 'auto' || s.params.freeMode || forceUpdatePagination) s.updatePagination();
	            if (s.params.scrollbar && s.scrollbar) {
	                s.scrollbar.set();
	            }
	            if (s.controller && s.controller.spline) {
	                s.controller.spline = undefined;
	            }
	            var slideChangedBySlideTo = false;
	            if (s.params.freeMode) {
	                var newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
	                s.setWrapperTranslate(newTranslate);
	                s.updateActiveIndex();
	                s.updateClasses();
	        
	                if (s.params.autoHeight) {
	                    s.updateAutoHeight();
	                }
	            }
	            else {
	                s.updateClasses();
	                if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
	                    slideChangedBySlideTo = s.slideTo(s.slides.length - 1, 0, false, true);
	                }
	                else {
	                    slideChangedBySlideTo = s.slideTo(s.activeIndex, 0, false, true);
	                }
	            }
	            if (s.params.lazyLoading && !slideChangedBySlideTo && s.lazy) {
	                s.lazy.load();
	            }
	            // Return locks after resize
	            s.params.allowSwipeToPrev = allowSwipeToPrev;
	            s.params.allowSwipeToNext = allowSwipeToNext;
	        };
	        
	        /*=========================
	          Events
	          ===========================*/
	        
	        //Define Touch Events
	        s.touchEventsDesktop = {start: 'mousedown', move: 'mousemove', end: 'mouseup'};
	        if (window.navigator.pointerEnabled) s.touchEventsDesktop = {start: 'pointerdown', move: 'pointermove', end: 'pointerup'};
	        else if (window.navigator.msPointerEnabled) s.touchEventsDesktop = {start: 'MSPointerDown', move: 'MSPointerMove', end: 'MSPointerUp'};
	        s.touchEvents = {
	            start : s.support.touch || !s.params.simulateTouch  ? 'touchstart' : s.touchEventsDesktop.start,
	            move : s.support.touch || !s.params.simulateTouch ? 'touchmove' : s.touchEventsDesktop.move,
	            end : s.support.touch || !s.params.simulateTouch ? 'touchend' : s.touchEventsDesktop.end
	        };
	        
	        
	        // WP8 Touch Events Fix
	        if (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) {
	            (s.params.touchEventsTarget === 'container' ? s.container : s.wrapper).addClass('swiper-wp8-' + s.params.direction);
	        }
	        
	        // Attach/detach events
	        s.initEvents = function (detach) {
	            var actionDom = detach ? 'off' : 'on';
	            var action = detach ? 'removeEventListener' : 'addEventListener';
	            var touchEventsTarget = s.params.touchEventsTarget === 'container' ? s.container[0] : s.wrapper[0];
	            var target = s.support.touch ? touchEventsTarget : document;
	        
	            var moveCapture = s.params.nested ? true : false;
	        
	            //Touch Events
	            if (s.browser.ie) {
	                touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, false);
	                target[action](s.touchEvents.move, s.onTouchMove, moveCapture);
	                target[action](s.touchEvents.end, s.onTouchEnd, false);
	            }
	            else {
	                if (s.support.touch) {
	                    var passiveListener = s.touchEvents.start === 'touchstart' && s.support.passiveListener && s.params.passiveListeners ? {passive: true, capture: false} : false;
	                    touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, passiveListener);
	                    touchEventsTarget[action](s.touchEvents.move, s.onTouchMove, moveCapture);
	                    touchEventsTarget[action](s.touchEvents.end, s.onTouchEnd, passiveListener);
	                }
	                if ((params.simulateTouch && !s.device.ios && !s.device.android) || (params.simulateTouch && !s.support.touch && s.device.ios)) {
	                    touchEventsTarget[action]('mousedown', s.onTouchStart, false);
	                    document[action]('mousemove', s.onTouchMove, moveCapture);
	                    document[action]('mouseup', s.onTouchEnd, false);
	                }
	            }
	            window[action]('resize', s.onResize);
	        
	            // Next, Prev, Index
	            if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
	                s.nextButton[actionDom]('click', s.onClickNext);
	                if (s.params.a11y && s.a11y) s.nextButton[actionDom]('keydown', s.a11y.onEnterKey);
	            }
	            if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
	                s.prevButton[actionDom]('click', s.onClickPrev);
	                if (s.params.a11y && s.a11y) s.prevButton[actionDom]('keydown', s.a11y.onEnterKey);
	            }
	            if (s.params.pagination && s.params.paginationClickable) {
	                s.paginationContainer[actionDom]('click', '.' + s.params.bulletClass, s.onClickIndex);
	                if (s.params.a11y && s.a11y) s.paginationContainer[actionDom]('keydown', '.' + s.params.bulletClass, s.a11y.onEnterKey);
	            }
	        
	            // Prevent Links Clicks
	            if (s.params.preventClicks || s.params.preventClicksPropagation) touchEventsTarget[action]('click', s.preventClicks, true);
	        };
	        s.attachEvents = function () {
	            s.initEvents();
	        };
	        s.detachEvents = function () {
	            s.initEvents(true);
	        };
	        
	        /*=========================
	          Handle Clicks
	          ===========================*/
	        // Prevent Clicks
	        s.allowClick = true;
	        s.preventClicks = function (e) {
	            if (!s.allowClick) {
	                if (s.params.preventClicks) e.preventDefault();
	                if (s.params.preventClicksPropagation && s.animating) {
	                    e.stopPropagation();
	                    e.stopImmediatePropagation();
	                }
	            }
	        };
	        // Clicks
	        s.onClickNext = function (e) {
	            e.preventDefault();
	            if (s.isEnd && !s.params.loop) return;
	            s.slideNext();
	        };
	        s.onClickPrev = function (e) {
	            e.preventDefault();
	            if (s.isBeginning && !s.params.loop) return;
	            s.slidePrev();
	        };
	        s.onClickIndex = function (e) {
	            e.preventDefault();
	            var index = $(this).index() * s.params.slidesPerGroup;
	            if (s.params.loop) index = index + s.loopedSlides;
	            s.slideTo(index);
	        };
	        
	        /*=========================
	          Handle Touches
	          ===========================*/
	        function findElementInEvent(e, selector) {
	            var el = $(e.target);
	            if (!el.is(selector)) {
	                if (typeof selector === 'string') {
	                    el = el.parents(selector);
	                }
	                else if (selector.nodeType) {
	                    var found;
	                    el.parents().each(function (index, _el) {
	                        if (_el === selector) found = selector;
	                    });
	                    if (!found) return undefined;
	                    else return selector;
	                }
	            }
	            if (el.length === 0) {
	                return undefined;
	            }
	            return el[0];
	        }
	        s.updateClickedSlide = function (e) {
	            var slide = findElementInEvent(e, '.' + s.params.slideClass);
	            var slideFound = false;
	            if (slide) {
	                for (var i = 0; i < s.slides.length; i++) {
	                    if (s.slides[i] === slide) slideFound = true;
	                }
	            }
	        
	            if (slide && slideFound) {
	                s.clickedSlide = slide;
	                s.clickedIndex = $(slide).index();
	            }
	            else {
	                s.clickedSlide = undefined;
	                s.clickedIndex = undefined;
	                return;
	            }
	            if (s.params.slideToClickedSlide && s.clickedIndex !== undefined && s.clickedIndex !== s.activeIndex) {
	                var slideToIndex = s.clickedIndex,
	                    realIndex,
	                    duplicatedSlides,
	                    slidesPerView = s.params.slidesPerView === 'auto' ? s.currentSlidesPerView() : s.params.slidesPerView;
	                if (s.params.loop) {
	                    if (s.animating) return;
	                    realIndex = parseInt($(s.clickedSlide).attr('data-swiper-slide-index'), 10);
	                    if (s.params.centeredSlides) {
	                        if ((slideToIndex < s.loopedSlides - slidesPerView/2) || (slideToIndex > s.slides.length - s.loopedSlides + slidesPerView/2)) {
	                            s.fixLoop();
	                            slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.' + s.params.slideDuplicateClass + ')').eq(0).index();
	                            setTimeout(function () {
	                                s.slideTo(slideToIndex);
	                            }, 0);
	                        }
	                        else {
	                            s.slideTo(slideToIndex);
	                        }
	                    }
	                    else {
	                        if (slideToIndex > s.slides.length - slidesPerView) {
	                            s.fixLoop();
	                            slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.' + s.params.slideDuplicateClass + ')').eq(0).index();
	                            setTimeout(function () {
	                                s.slideTo(slideToIndex);
	                            }, 0);
	                        }
	                        else {
	                            s.slideTo(slideToIndex);
	                        }
	                    }
	                }
	                else {
	                    s.slideTo(slideToIndex);
	                }
	            }
	        };
	        
	        var isTouched,
	            isMoved,
	            allowTouchCallbacks,
	            touchStartTime,
	            isScrolling,
	            currentTranslate,
	            startTranslate,
	            allowThresholdMove,
	            // Form elements to match
	            formElements = 'input, select, textarea, button, video',
	            // Last click time
	            lastClickTime = Date.now(), clickTimeout,
	            //Velocities
	            velocities = [],
	            allowMomentumBounce;
	        
	        // Animating Flag
	        s.animating = false;
	        
	        // Touches information
	        s.touches = {
	            startX: 0,
	            startY: 0,
	            currentX: 0,
	            currentY: 0,
	            diff: 0
	        };
	        
	        // Touch handlers
	        var isTouchEvent, startMoving;
	        s.onTouchStart = function (e) {
	            if (e.originalEvent) e = e.originalEvent;
	            isTouchEvent = e.type === 'touchstart';
	            if (!isTouchEvent && 'which' in e && e.which === 3) return;
	            if (s.params.noSwiping && findElementInEvent(e, '.' + s.params.noSwipingClass)) {
	                s.allowClick = true;
	                return;
	            }
	            if (s.params.swipeHandler) {
	                if (!findElementInEvent(e, s.params.swipeHandler)) return;
	            }
	        
	            var startX = s.touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
	            var startY = s.touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
	        
	            // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore
	            if(s.device.ios && s.params.iOSEdgeSwipeDetection && startX <= s.params.iOSEdgeSwipeThreshold) {
	                return;
	            }
	        
	            isTouched = true;
	            isMoved = false;
	            allowTouchCallbacks = true;
	            isScrolling = undefined;
	            startMoving = undefined;
	            s.touches.startX = startX;
	            s.touches.startY = startY;
	            touchStartTime = Date.now();
	            s.allowClick = true;
	            s.updateContainerSize();
	            s.swipeDirection = undefined;
	            if (s.params.threshold > 0) allowThresholdMove = false;
	            if (e.type !== 'touchstart') {
	                var preventDefault = true;
	                if ($(e.target).is(formElements)) preventDefault = false;
	                if (document.activeElement && $(document.activeElement).is(formElements)) {
	                    document.activeElement.blur();
	                }
	                if (preventDefault) {
	                    e.preventDefault();
	                }
	            }
	            s.emit('onTouchStart', s, e);
	        };
	        
	        s.onTouchMove = function (e) {
	            if (e.originalEvent) e = e.originalEvent;
	            if (isTouchEvent && e.type === 'mousemove') return;
	            if (e.preventedByNestedSwiper) {
	                s.touches.startX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
	                s.touches.startY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
	                return;
	            }
	            if (s.params.onlyExternal) {
	                // isMoved = true;
	                s.allowClick = false;
	                if (isTouched) {
	                    s.touches.startX = s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
	                    s.touches.startY = s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
	                    touchStartTime = Date.now();
	                }
	                return;
	            }
	            if (isTouchEvent && s.params.touchReleaseOnEdges && !s.params.loop) {
	                if (!s.isHorizontal()) {
	                    // Vertical
	                    if (
	                        (s.touches.currentY < s.touches.startY && s.translate <= s.maxTranslate()) ||
	                        (s.touches.currentY > s.touches.startY && s.translate >= s.minTranslate())
	                        ) {
	                        return;
	                    }
	                }
	                else {
	                    if (
	                        (s.touches.currentX < s.touches.startX && s.translate <= s.maxTranslate()) ||
	                        (s.touches.currentX > s.touches.startX && s.translate >= s.minTranslate())
	                        ) {
	                        return;
	                    }
	                }
	            }
	            if (isTouchEvent && document.activeElement) {
	                if (e.target === document.activeElement && $(e.target).is(formElements)) {
	                    isMoved = true;
	                    s.allowClick = false;
	                    return;
	                }
	            }
	            if (allowTouchCallbacks) {
	                s.emit('onTouchMove', s, e);
	            }
	            if (e.targetTouches && e.targetTouches.length > 1) return;
	        
	            s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
	            s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
	        
	            if (typeof isScrolling === 'undefined') {
	                var touchAngle;
	                if (s.isHorizontal() && s.touches.currentY === s.touches.startY || !s.isHorizontal() && s.touches.currentX === s.touches.startX) {
	                    isScrolling = false;
	                }
	                else {
	                    touchAngle = Math.atan2(Math.abs(s.touches.currentY - s.touches.startY), Math.abs(s.touches.currentX - s.touches.startX)) * 180 / Math.PI;
	                    isScrolling = s.isHorizontal() ? touchAngle > s.params.touchAngle : (90 - touchAngle > s.params.touchAngle);
	                }
	            }
	            if (isScrolling) {
	                s.emit('onTouchMoveOpposite', s, e);
	            }
	            if (typeof startMoving === 'undefined' && s.browser.ieTouch) {
	                if (s.touches.currentX !== s.touches.startX || s.touches.currentY !== s.touches.startY) {
	                    startMoving = true;
	                }
	            }
	            if (!isTouched) return;
	            if (isScrolling)  {
	                isTouched = false;
	                return;
	            }
	            if (!startMoving && s.browser.ieTouch) {
	                return;
	            }
	            s.allowClick = false;
	            s.emit('onSliderMove', s, e);
	            e.preventDefault();
	            if (s.params.touchMoveStopPropagation && !s.params.nested) {
	                e.stopPropagation();
	            }
	        
	            if (!isMoved) {
	                if (params.loop) {
	                    s.fixLoop();
	                }
	                startTranslate = s.getWrapperTranslate();
	                s.setWrapperTransition(0);
	                if (s.animating) {
	                    s.wrapper.trigger('webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd');
	                }
	                if (s.params.autoplay && s.autoplaying) {
	                    if (s.params.autoplayDisableOnInteraction) {
	                        s.stopAutoplay();
	                    }
	                    else {
	                        s.pauseAutoplay();
	                    }
	                }
	                allowMomentumBounce = false;
	                //Grab Cursor
	                if (s.params.grabCursor && (s.params.allowSwipeToNext === true || s.params.allowSwipeToPrev === true)) {
	                    s.setGrabCursor(true);
	                }
	            }
	            isMoved = true;
	        
	            var diff = s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;
	        
	            diff = diff * s.params.touchRatio;
	            if (s.rtl) diff = -diff;
	        
	            s.swipeDirection = diff > 0 ? 'prev' : 'next';
	            currentTranslate = diff + startTranslate;
	        
	            var disableParentSwiper = true;
	            if ((diff > 0 && currentTranslate > s.minTranslate())) {
	                disableParentSwiper = false;
	                if (s.params.resistance) currentTranslate = s.minTranslate() - 1 + Math.pow(-s.minTranslate() + startTranslate + diff, s.params.resistanceRatio);
	            }
	            else if (diff < 0 && currentTranslate < s.maxTranslate()) {
	                disableParentSwiper = false;
	                if (s.params.resistance) currentTranslate = s.maxTranslate() + 1 - Math.pow(s.maxTranslate() - startTranslate - diff, s.params.resistanceRatio);
	            }
	        
	            if (disableParentSwiper) {
	                e.preventedByNestedSwiper = true;
	            }
	        
	            // Directions locks
	            if (!s.params.allowSwipeToNext && s.swipeDirection === 'next' && currentTranslate < startTranslate) {
	                currentTranslate = startTranslate;
	            }
	            if (!s.params.allowSwipeToPrev && s.swipeDirection === 'prev' && currentTranslate > startTranslate) {
	                currentTranslate = startTranslate;
	            }
	        
	        
	            // Threshold
	            if (s.params.threshold > 0) {
	                if (Math.abs(diff) > s.params.threshold || allowThresholdMove) {
	                    if (!allowThresholdMove) {
	                        allowThresholdMove = true;
	                        s.touches.startX = s.touches.currentX;
	                        s.touches.startY = s.touches.currentY;
	                        currentTranslate = startTranslate;
	                        s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;
	                        return;
	                    }
	                }
	                else {
	                    currentTranslate = startTranslate;
	                    return;
	                }
	            }
	        
	            if (!s.params.followFinger) return;
	        
	            // Update active index in free mode
	            if (s.params.freeMode || s.params.watchSlidesProgress) {
	                s.updateActiveIndex();
	            }
	            if (s.params.freeMode) {
	                //Velocity
	                if (velocities.length === 0) {
	                    velocities.push({
	                        position: s.touches[s.isHorizontal() ? 'startX' : 'startY'],
	                        time: touchStartTime
	                    });
	                }
	                velocities.push({
	                    position: s.touches[s.isHorizontal() ? 'currentX' : 'currentY'],
	                    time: (new window.Date()).getTime()
	                });
	            }
	            // Update progress
	            s.updateProgress(currentTranslate);
	            // Update translate
	            s.setWrapperTranslate(currentTranslate);
	        };
	        s.onTouchEnd = function (e) {
	            if (e.originalEvent) e = e.originalEvent;
	            if (allowTouchCallbacks) {
	                s.emit('onTouchEnd', s, e);
	            }
	            allowTouchCallbacks = false;
	            if (!isTouched) return;
	            //Return Grab Cursor
	            if (s.params.grabCursor && isMoved && isTouched  && (s.params.allowSwipeToNext === true || s.params.allowSwipeToPrev === true)) {
	                s.setGrabCursor(false);
	            }
	        
	            // Time diff
	            var touchEndTime = Date.now();
	            var timeDiff = touchEndTime - touchStartTime;
	        
	            // Tap, doubleTap, Click
	            if (s.allowClick) {
	                s.updateClickedSlide(e);
	                s.emit('onTap', s, e);
	                if (timeDiff < 300 && (touchEndTime - lastClickTime) > 300) {
	                    if (clickTimeout) clearTimeout(clickTimeout);
	                    clickTimeout = setTimeout(function () {
	                        if (!s) return;
	                        if (s.params.paginationHide && s.paginationContainer.length > 0 && !$(e.target).hasClass(s.params.bulletClass)) {
	                            s.paginationContainer.toggleClass(s.params.paginationHiddenClass);
	                        }
	                        s.emit('onClick', s, e);
	                    }, 300);
	        
	                }
	                if (timeDiff < 300 && (touchEndTime - lastClickTime) < 300) {
	                    if (clickTimeout) clearTimeout(clickTimeout);
	                    s.emit('onDoubleTap', s, e);
	                }
	            }
	        
	            lastClickTime = Date.now();
	            setTimeout(function () {
	                if (s) s.allowClick = true;
	            }, 0);
	        
	            if (!isTouched || !isMoved || !s.swipeDirection || s.touches.diff === 0 || currentTranslate === startTranslate) {
	                isTouched = isMoved = false;
	                return;
	            }
	            isTouched = isMoved = false;
	        
	            var currentPos;
	            if (s.params.followFinger) {
	                currentPos = s.rtl ? s.translate : -s.translate;
	            }
	            else {
	                currentPos = -currentTranslate;
	            }
	            if (s.params.freeMode) {
	                if (currentPos < -s.minTranslate()) {
	                    s.slideTo(s.activeIndex);
	                    return;
	                }
	                else if (currentPos > -s.maxTranslate()) {
	                    if (s.slides.length < s.snapGrid.length) {
	                        s.slideTo(s.snapGrid.length - 1);
	                    }
	                    else {
	                        s.slideTo(s.slides.length - 1);
	                    }
	                    return;
	                }
	        
	                if (s.params.freeModeMomentum) {
	                    if (velocities.length > 1) {
	                        var lastMoveEvent = velocities.pop(), velocityEvent = velocities.pop();
	        
	                        var distance = lastMoveEvent.position - velocityEvent.position;
	                        var time = lastMoveEvent.time - velocityEvent.time;
	                        s.velocity = distance / time;
	                        s.velocity = s.velocity / 2;
	                        if (Math.abs(s.velocity) < s.params.freeModeMinimumVelocity) {
	                            s.velocity = 0;
	                        }
	                        // this implies that the user stopped moving a finger then released.
	                        // There would be no events with distance zero, so the last event is stale.
	                        if (time > 150 || (new window.Date().getTime() - lastMoveEvent.time) > 300) {
	                            s.velocity = 0;
	                        }
	                    } else {
	                        s.velocity = 0;
	                    }
	                    s.velocity = s.velocity * s.params.freeModeMomentumVelocityRatio;
	        
	                    velocities.length = 0;
	                    var momentumDuration = 1000 * s.params.freeModeMomentumRatio;
	                    var momentumDistance = s.velocity * momentumDuration;
	        
	                    var newPosition = s.translate + momentumDistance;
	                    if (s.rtl) newPosition = - newPosition;
	                    var doBounce = false;
	                    var afterBouncePosition;
	                    var bounceAmount = Math.abs(s.velocity) * 20 * s.params.freeModeMomentumBounceRatio;
	                    if (newPosition < s.maxTranslate()) {
	                        if (s.params.freeModeMomentumBounce) {
	                            if (newPosition + s.maxTranslate() < -bounceAmount) {
	                                newPosition = s.maxTranslate() - bounceAmount;
	                            }
	                            afterBouncePosition = s.maxTranslate();
	                            doBounce = true;
	                            allowMomentumBounce = true;
	                        }
	                        else {
	                            newPosition = s.maxTranslate();
	                        }
	                    }
	                    else if (newPosition > s.minTranslate()) {
	                        if (s.params.freeModeMomentumBounce) {
	                            if (newPosition - s.minTranslate() > bounceAmount) {
	                                newPosition = s.minTranslate() + bounceAmount;
	                            }
	                            afterBouncePosition = s.minTranslate();
	                            doBounce = true;
	                            allowMomentumBounce = true;
	                        }
	                        else {
	                            newPosition = s.minTranslate();
	                        }
	                    }
	                    else if (s.params.freeModeSticky) {
	                        var j = 0,
	                            nextSlide;
	                        for (j = 0; j < s.snapGrid.length; j += 1) {
	                            if (s.snapGrid[j] > -newPosition) {
	                                nextSlide = j;
	                                break;
	                            }
	        
	                        }
	                        if (Math.abs(s.snapGrid[nextSlide] - newPosition) < Math.abs(s.snapGrid[nextSlide - 1] - newPosition) || s.swipeDirection === 'next') {
	                            newPosition = s.snapGrid[nextSlide];
	                        } else {
	                            newPosition = s.snapGrid[nextSlide - 1];
	                        }
	                        if (!s.rtl) newPosition = - newPosition;
	                    }
	                    //Fix duration
	                    if (s.velocity !== 0) {
	                        if (s.rtl) {
	                            momentumDuration = Math.abs((-newPosition - s.translate) / s.velocity);
	                        }
	                        else {
	                            momentumDuration = Math.abs((newPosition - s.translate) / s.velocity);
	                        }
	                    }
	                    else if (s.params.freeModeSticky) {
	                        s.slideReset();
	                        return;
	                    }
	        
	                    if (s.params.freeModeMomentumBounce && doBounce) {
	                        s.updateProgress(afterBouncePosition);
	                        s.setWrapperTransition(momentumDuration);
	                        s.setWrapperTranslate(newPosition);
	                        s.onTransitionStart();
	                        s.animating = true;
	                        s.wrapper.transitionEnd(function () {
	                            if (!s || !allowMomentumBounce) return;
	                            s.emit('onMomentumBounce', s);
	        
	                            s.setWrapperTransition(s.params.speed);
	                            s.setWrapperTranslate(afterBouncePosition);
	                            s.wrapper.transitionEnd(function () {
	                                if (!s) return;
	                                s.onTransitionEnd();
	                            });
	                        });
	                    } else if (s.velocity) {
	                        s.updateProgress(newPosition);
	                        s.setWrapperTransition(momentumDuration);
	                        s.setWrapperTranslate(newPosition);
	                        s.onTransitionStart();
	                        if (!s.animating) {
	                            s.animating = true;
	                            s.wrapper.transitionEnd(function () {
	                                if (!s) return;
	                                s.onTransitionEnd();
	                            });
	                        }
	        
	                    } else {
	                        s.updateProgress(newPosition);
	                    }
	        
	                    s.updateActiveIndex();
	                }
	                if (!s.params.freeModeMomentum || timeDiff >= s.params.longSwipesMs) {
	                    s.updateProgress();
	                    s.updateActiveIndex();
	                }
	                return;
	            }
	        
	            // Find current slide
	            var i, stopIndex = 0, groupSize = s.slidesSizesGrid[0];
	            for (i = 0; i < s.slidesGrid.length; i += s.params.slidesPerGroup) {
	                if (typeof s.slidesGrid[i + s.params.slidesPerGroup] !== 'undefined') {
	                    if (currentPos >= s.slidesGrid[i] && currentPos < s.slidesGrid[i + s.params.slidesPerGroup]) {
	                        stopIndex = i;
	                        groupSize = s.slidesGrid[i + s.params.slidesPerGroup] - s.slidesGrid[i];
	                    }
	                }
	                else {
	                    if (currentPos >= s.slidesGrid[i]) {
	                        stopIndex = i;
	                        groupSize = s.slidesGrid[s.slidesGrid.length - 1] - s.slidesGrid[s.slidesGrid.length - 2];
	                    }
	                }
	            }
	        
	            // Find current slide size
	            var ratio = (currentPos - s.slidesGrid[stopIndex]) / groupSize;
	        
	            if (timeDiff > s.params.longSwipesMs) {
	                // Long touches
	                if (!s.params.longSwipes) {
	                    s.slideTo(s.activeIndex);
	                    return;
	                }
	                if (s.swipeDirection === 'next') {
	                    if (ratio >= s.params.longSwipesRatio) s.slideTo(stopIndex + s.params.slidesPerGroup);
	                    else s.slideTo(stopIndex);
	        
	                }
	                if (s.swipeDirection === 'prev') {
	                    if (ratio > (1 - s.params.longSwipesRatio)) s.slideTo(stopIndex + s.params.slidesPerGroup);
	                    else s.slideTo(stopIndex);
	                }
	            }
	            else {
	                // Short swipes
	                if (!s.params.shortSwipes) {
	                    s.slideTo(s.activeIndex);
	                    return;
	                }
	                if (s.swipeDirection === 'next') {
	                    s.slideTo(stopIndex + s.params.slidesPerGroup);
	        
	                }
	                if (s.swipeDirection === 'prev') {
	                    s.slideTo(stopIndex);
	                }
	            }
	        };
	        /*=========================
	          Transitions
	          ===========================*/
	        s._slideTo = function (slideIndex, speed) {
	            return s.slideTo(slideIndex, speed, true, true);
	        };
	        s.slideTo = function (slideIndex, speed, runCallbacks, internal) {
	            if (typeof runCallbacks === 'undefined') runCallbacks = true;
	            if (typeof slideIndex === 'undefined') slideIndex = 0;
	            if (slideIndex < 0) slideIndex = 0;
	            s.snapIndex = Math.floor(slideIndex / s.params.slidesPerGroup);
	            if (s.snapIndex >= s.snapGrid.length) s.snapIndex = s.snapGrid.length - 1;
	        
	            var translate = - s.snapGrid[s.snapIndex];
	            // Stop autoplay
	            if (s.params.autoplay && s.autoplaying) {
	                if (internal || !s.params.autoplayDisableOnInteraction) {
	                    s.pauseAutoplay(speed);
	                }
	                else {
	                    s.stopAutoplay();
	                }
	            }
	            // Update progress
	            s.updateProgress(translate);
	        
	            // Normalize slideIndex
	            if(s.params.normalizeSlideIndex){
	                for (var i = 0; i < s.slidesGrid.length; i++) {
	                    if (- Math.floor(translate * 100) >= Math.floor(s.slidesGrid[i] * 100)) {
	                        slideIndex = i;
	                    }
	                }
	            }
	        
	            // Directions locks
	            if (!s.params.allowSwipeToNext && translate < s.translate && translate < s.minTranslate()) {
	                return false;
	            }
	            if (!s.params.allowSwipeToPrev && translate > s.translate && translate > s.maxTranslate()) {
	                if ((s.activeIndex || 0) !== slideIndex ) return false;
	            }
	        
	            // Update Index
	            if (typeof speed === 'undefined') speed = s.params.speed;
	            s.previousIndex = s.activeIndex || 0;
	            s.activeIndex = slideIndex;
	            s.updateRealIndex();
	            if ((s.rtl && -translate === s.translate) || (!s.rtl && translate === s.translate)) {
	                // Update Height
	                if (s.params.autoHeight) {
	                    s.updateAutoHeight();
	                }
	                s.updateClasses();
	                if (s.params.effect !== 'slide') {
	                    s.setWrapperTranslate(translate);
	                }
	                return false;
	            }
	            s.updateClasses();
	            s.onTransitionStart(runCallbacks);
	        
	            if (speed === 0 || s.browser.lteIE9) {
	                s.setWrapperTranslate(translate);
	                s.setWrapperTransition(0);
	                s.onTransitionEnd(runCallbacks);
	            }
	            else {
	                s.setWrapperTranslate(translate);
	                s.setWrapperTransition(speed);
	                if (!s.animating) {
	                    s.animating = true;
	                    s.wrapper.transitionEnd(function () {
	                        if (!s) return;
	                        s.onTransitionEnd(runCallbacks);
	                    });
	                }
	        
	            }
	        
	            return true;
	        };
	        
	        s.onTransitionStart = function (runCallbacks) {
	            if (typeof runCallbacks === 'undefined') runCallbacks = true;
	            if (s.params.autoHeight) {
	                s.updateAutoHeight();
	            }
	            if (s.lazy) s.lazy.onTransitionStart();
	            if (runCallbacks) {
	                s.emit('onTransitionStart', s);
	                if (s.activeIndex !== s.previousIndex) {
	                    s.emit('onSlideChangeStart', s);
	                    if (s.activeIndex > s.previousIndex) {
	                        s.emit('onSlideNextStart', s);
	                    }
	                    else {
	                        s.emit('onSlidePrevStart', s);
	                    }
	                }
	        
	            }
	        };
	        s.onTransitionEnd = function (runCallbacks) {
	            s.animating = false;
	            s.setWrapperTransition(0);
	            if (typeof runCallbacks === 'undefined') runCallbacks = true;
	            if (s.lazy) s.lazy.onTransitionEnd();
	            if (runCallbacks) {
	                s.emit('onTransitionEnd', s);
	                if (s.activeIndex !== s.previousIndex) {
	                    s.emit('onSlideChangeEnd', s);
	                    if (s.activeIndex > s.previousIndex) {
	                        s.emit('onSlideNextEnd', s);
	                    }
	                    else {
	                        s.emit('onSlidePrevEnd', s);
	                    }
	                }
	            }
	            if (s.params.history && s.history) {
	                s.history.setHistory(s.params.history, s.activeIndex);
	            }
	            if (s.params.hashnav && s.hashnav) {
	                s.hashnav.setHash();
	            }
	        
	        };
	        s.slideNext = function (runCallbacks, speed, internal) {
	            if (s.params.loop) {
	                if (s.animating) return false;
	                s.fixLoop();
	                var clientLeft = s.container[0].clientLeft;
	                return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);
	            }
	            else return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);
	        };
	        s._slideNext = function (speed) {
	            return s.slideNext(true, speed, true);
	        };
	        s.slidePrev = function (runCallbacks, speed, internal) {
	            if (s.params.loop) {
	                if (s.animating) return false;
	                s.fixLoop();
	                var clientLeft = s.container[0].clientLeft;
	                return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);
	            }
	            else return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);
	        };
	        s._slidePrev = function (speed) {
	            return s.slidePrev(true, speed, true);
	        };
	        s.slideReset = function (runCallbacks, speed, internal) {
	            return s.slideTo(s.activeIndex, speed, runCallbacks);
	        };
	        
	        s.disableTouchControl = function () {
	            s.params.onlyExternal = true;
	            return true;
	        };
	        s.enableTouchControl = function () {
	            s.params.onlyExternal = false;
	            return true;
	        };
	        
	        /*=========================
	          Translate/transition helpers
	          ===========================*/
	        s.setWrapperTransition = function (duration, byController) {
	            s.wrapper.transition(duration);
	            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
	                s.effects[s.params.effect].setTransition(duration);
	            }
	            if (s.params.parallax && s.parallax) {
	                s.parallax.setTransition(duration);
	            }
	            if (s.params.scrollbar && s.scrollbar) {
	                s.scrollbar.setTransition(duration);
	            }
	            if (s.params.control && s.controller) {
	                s.controller.setTransition(duration, byController);
	            }
	            s.emit('onSetTransition', s, duration);
	        };
	        s.setWrapperTranslate = function (translate, updateActiveIndex, byController) {
	            var x = 0, y = 0, z = 0;
	            if (s.isHorizontal()) {
	                x = s.rtl ? -translate : translate;
	            }
	            else {
	                y = translate;
	            }
	        
	            if (s.params.roundLengths) {
	                x = round(x);
	                y = round(y);
	            }
	        
	            if (!s.params.virtualTranslate) {
	                if (s.support.transforms3d) s.wrapper.transform('translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px)');
	                else s.wrapper.transform('translate(' + x + 'px, ' + y + 'px)');
	            }
	        
	            s.translate = s.isHorizontal() ? x : y;
	        
	            // Check if we need to update progress
	            var progress;
	            var translatesDiff = s.maxTranslate() - s.minTranslate();
	            if (translatesDiff === 0) {
	                progress = 0;
	            }
	            else {
	                progress = (translate - s.minTranslate()) / (translatesDiff);
	            }
	            if (progress !== s.progress) {
	                s.updateProgress(translate);
	            }
	        
	            if (updateActiveIndex) s.updateActiveIndex();
	            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
	                s.effects[s.params.effect].setTranslate(s.translate);
	            }
	            if (s.params.parallax && s.parallax) {
	                s.parallax.setTranslate(s.translate);
	            }
	            if (s.params.scrollbar && s.scrollbar) {
	                s.scrollbar.setTranslate(s.translate);
	            }
	            if (s.params.control && s.controller) {
	                s.controller.setTranslate(s.translate, byController);
	            }
	            s.emit('onSetTranslate', s, s.translate);
	        };
	        
	        s.getTranslate = function (el, axis) {
	            var matrix, curTransform, curStyle, transformMatrix;
	        
	            // automatic axis detection
	            if (typeof axis === 'undefined') {
	                axis = 'x';
	            }
	        
	            if (s.params.virtualTranslate) {
	                return s.rtl ? -s.translate : s.translate;
	            }
	        
	            curStyle = window.getComputedStyle(el, null);
	            if (window.WebKitCSSMatrix) {
	                curTransform = curStyle.transform || curStyle.webkitTransform;
	                if (curTransform.split(',').length > 6) {
	                    curTransform = curTransform.split(', ').map(function(a){
	                        return a.replace(',','.');
	                    }).join(', ');
	                }
	                // Some old versions of Webkit choke when 'none' is passed; pass
	                // empty string instead in this case
	                transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
	            }
	            else {
	                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform  || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
	                matrix = transformMatrix.toString().split(',');
	            }
	        
	            if (axis === 'x') {
	                //Latest Chrome and webkits Fix
	                if (window.WebKitCSSMatrix)
	                    curTransform = transformMatrix.m41;
	                //Crazy IE10 Matrix
	                else if (matrix.length === 16)
	                    curTransform = parseFloat(matrix[12]);
	                //Normal Browsers
	                else
	                    curTransform = parseFloat(matrix[4]);
	            }
	            if (axis === 'y') {
	                //Latest Chrome and webkits Fix
	                if (window.WebKitCSSMatrix)
	                    curTransform = transformMatrix.m42;
	                //Crazy IE10 Matrix
	                else if (matrix.length === 16)
	                    curTransform = parseFloat(matrix[13]);
	                //Normal Browsers
	                else
	                    curTransform = parseFloat(matrix[5]);
	            }
	            if (s.rtl && curTransform) curTransform = -curTransform;
	            return curTransform || 0;
	        };
	        s.getWrapperTranslate = function (axis) {
	            if (typeof axis === 'undefined') {
	                axis = s.isHorizontal() ? 'x' : 'y';
	            }
	            return s.getTranslate(s.wrapper[0], axis);
	        };
	        
	        /*=========================
	          Observer
	          ===========================*/
	        s.observers = [];
	        function initObserver(target, options) {
	            options = options || {};
	            // create an observer instance
	            var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
	            var observer = new ObserverFunc(function (mutations) {
	                mutations.forEach(function (mutation) {
	                    s.onResize(true);
	                    s.emit('onObserverUpdate', s, mutation);
	                });
	            });
	        
	            observer.observe(target, {
	                attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
	                childList: typeof options.childList === 'undefined' ? true : options.childList,
	                characterData: typeof options.characterData === 'undefined' ? true : options.characterData
	            });
	        
	            s.observers.push(observer);
	        }
	        s.initObservers = function () {
	            if (s.params.observeParents) {
	                var containerParents = s.container.parents();
	                for (var i = 0; i < containerParents.length; i++) {
	                    initObserver(containerParents[i]);
	                }
	            }
	        
	            // Observe container
	            initObserver(s.container[0], {childList: false});
	        
	            // Observe wrapper
	            initObserver(s.wrapper[0], {attributes: false});
	        };
	        s.disconnectObservers = function () {
	            for (var i = 0; i < s.observers.length; i++) {
	                s.observers[i].disconnect();
	            }
	            s.observers = [];
	        };
	        /*=========================
	          Loop
	          ===========================*/
	        // Create looped slides
	        s.createLoop = function () {
	            // Remove duplicated slides
	            s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();
	        
	            var slides = s.wrapper.children('.' + s.params.slideClass);
	        
	            if(s.params.slidesPerView === 'auto' && !s.params.loopedSlides) s.params.loopedSlides = slides.length;
	        
	            s.loopedSlides = parseInt(s.params.loopedSlides || s.params.slidesPerView, 10);
	            s.loopedSlides = s.loopedSlides + s.params.loopAdditionalSlides;
	            if (s.loopedSlides > slides.length) {
	                s.loopedSlides = slides.length;
	            }
	        
	            var prependSlides = [], appendSlides = [], i;
	            slides.each(function (index, el) {
	                var slide = $(this);
	                if (index < s.loopedSlides) appendSlides.push(el);
	                if (index < slides.length && index >= slides.length - s.loopedSlides) prependSlides.push(el);
	                slide.attr('data-swiper-slide-index', index);
	            });
	            for (i = 0; i < appendSlides.length; i++) {
	                s.wrapper.append($(appendSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));
	            }
	            for (i = prependSlides.length - 1; i >= 0; i--) {
	                s.wrapper.prepend($(prependSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));
	            }
	        };
	        s.destroyLoop = function () {
	            s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();
	            s.slides.removeAttr('data-swiper-slide-index');
	        };
	        s.reLoop = function (updatePosition) {
	            var oldIndex = s.activeIndex - s.loopedSlides;
	            s.destroyLoop();
	            s.createLoop();
	            s.updateSlidesSize();
	            if (updatePosition) {
	                s.slideTo(oldIndex + s.loopedSlides, 0, false);
	            }
	        
	        };
	        s.fixLoop = function () {
	            var newIndex;
	            //Fix For Negative Oversliding
	            if (s.activeIndex < s.loopedSlides) {
	                newIndex = s.slides.length - s.loopedSlides * 3 + s.activeIndex;
	                newIndex = newIndex + s.loopedSlides;
	                s.slideTo(newIndex, 0, false, true);
	            }
	            //Fix For Positive Oversliding
	            else if ((s.params.slidesPerView === 'auto' && s.activeIndex >= s.loopedSlides * 2) || (s.activeIndex > s.slides.length - s.params.slidesPerView * 2)) {
	                newIndex = -s.slides.length + s.activeIndex + s.loopedSlides;
	                newIndex = newIndex + s.loopedSlides;
	                s.slideTo(newIndex, 0, false, true);
	            }
	        };
	        /*=========================
	          Append/Prepend/Remove Slides
	          ===========================*/
	        s.appendSlide = function (slides) {
	            if (s.params.loop) {
	                s.destroyLoop();
	            }
	            if (typeof slides === 'object' && slides.length) {
	                for (var i = 0; i < slides.length; i++) {
	                    if (slides[i]) s.wrapper.append(slides[i]);
	                }
	            }
	            else {
	                s.wrapper.append(slides);
	            }
	            if (s.params.loop) {
	                s.createLoop();
	            }
	            if (!(s.params.observer && s.support.observer)) {
	                s.update(true);
	            }
	        };
	        s.prependSlide = function (slides) {
	            if (s.params.loop) {
	                s.destroyLoop();
	            }
	            var newActiveIndex = s.activeIndex + 1;
	            if (typeof slides === 'object' && slides.length) {
	                for (var i = 0; i < slides.length; i++) {
	                    if (slides[i]) s.wrapper.prepend(slides[i]);
	                }
	                newActiveIndex = s.activeIndex + slides.length;
	            }
	            else {
	                s.wrapper.prepend(slides);
	            }
	            if (s.params.loop) {
	                s.createLoop();
	            }
	            if (!(s.params.observer && s.support.observer)) {
	                s.update(true);
	            }
	            s.slideTo(newActiveIndex, 0, false);
	        };
	        s.removeSlide = function (slidesIndexes) {
	            if (s.params.loop) {
	                s.destroyLoop();
	                s.slides = s.wrapper.children('.' + s.params.slideClass);
	            }
	            var newActiveIndex = s.activeIndex,
	                indexToRemove;
	            if (typeof slidesIndexes === 'object' && slidesIndexes.length) {
	                for (var i = 0; i < slidesIndexes.length; i++) {
	                    indexToRemove = slidesIndexes[i];
	                    if (s.slides[indexToRemove]) s.slides.eq(indexToRemove).remove();
	                    if (indexToRemove < newActiveIndex) newActiveIndex--;
	                }
	                newActiveIndex = Math.max(newActiveIndex, 0);
	            }
	            else {
	                indexToRemove = slidesIndexes;
	                if (s.slides[indexToRemove]) s.slides.eq(indexToRemove).remove();
	                if (indexToRemove < newActiveIndex) newActiveIndex--;
	                newActiveIndex = Math.max(newActiveIndex, 0);
	            }
	        
	            if (s.params.loop) {
	                s.createLoop();
	            }
	        
	            if (!(s.params.observer && s.support.observer)) {
	                s.update(true);
	            }
	            if (s.params.loop) {
	                s.slideTo(newActiveIndex + s.loopedSlides, 0, false);
	            }
	            else {
	                s.slideTo(newActiveIndex, 0, false);
	            }
	        
	        };
	        s.removeAllSlides = function () {
	            var slidesIndexes = [];
	            for (var i = 0; i < s.slides.length; i++) {
	                slidesIndexes.push(i);
	            }
	            s.removeSlide(slidesIndexes);
	        };
	        
	
	        /*=========================
	          Effects
	          ===========================*/
	        s.effects = {
	            fade: {
	                setTranslate: function () {
	                    for (var i = 0; i < s.slides.length; i++) {
	                        var slide = s.slides.eq(i);
	                        var offset = slide[0].swiperSlideOffset;
	                        var tx = -offset;
	                        if (!s.params.virtualTranslate) tx = tx - s.translate;
	                        var ty = 0;
	                        if (!s.isHorizontal()) {
	                            ty = tx;
	                            tx = 0;
	                        }
	                        var slideOpacity = s.params.fade.crossFade ?
	                                Math.max(1 - Math.abs(slide[0].progress), 0) :
	                                1 + Math.min(Math.max(slide[0].progress, -1), 0);
	                        slide
	                            .css({
	                                opacity: slideOpacity
	                            })
	                            .transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px)');
	        
	                    }
	        
	                },
	                setTransition: function (duration) {
	                    s.slides.transition(duration);
	                    if (s.params.virtualTranslate && duration !== 0) {
	                        var eventTriggered = false;
	                        s.slides.transitionEnd(function () {
	                            if (eventTriggered) return;
	                            if (!s) return;
	                            eventTriggered = true;
	                            s.animating = false;
	                            var triggerEvents = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];
	                            for (var i = 0; i < triggerEvents.length; i++) {
	                                s.wrapper.trigger(triggerEvents[i]);
	                            }
	                        });
	                    }
	                }
	            },
	            flip: {
	                setTranslate: function () {
	                    for (var i = 0; i < s.slides.length; i++) {
	                        var slide = s.slides.eq(i);
	                        var progress = slide[0].progress;
	                        if (s.params.flip.limitRotation) {
	                            progress = Math.max(Math.min(slide[0].progress, 1), -1);
	                        }
	                        var offset = slide[0].swiperSlideOffset;
	                        var rotate = -180 * progress,
	                            rotateY = rotate,
	                            rotateX = 0,
	                            tx = -offset,
	                            ty = 0;
	                        if (!s.isHorizontal()) {
	                            ty = tx;
	                            tx = 0;
	                            rotateX = -rotateY;
	                            rotateY = 0;
	                        }
	                        else if (s.rtl) {
	                            rotateY = -rotateY;
	                        }
	        
	                        slide[0].style.zIndex = -Math.abs(Math.round(progress)) + s.slides.length;
	        
	                        if (s.params.flip.slideShadows) {
	                            //Set shadows
	                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
	                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
	                            if (shadowBefore.length === 0) {
	                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
	                                slide.append(shadowBefore);
	                            }
	                            if (shadowAfter.length === 0) {
	                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
	                                slide.append(shadowAfter);
	                            }
	                            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
	                            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
	                        }
	        
	                        slide
	                            .transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)');
	                    }
	                },
	                setTransition: function (duration) {
	                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
	                    if (s.params.virtualTranslate && duration !== 0) {
	                        var eventTriggered = false;
	                        s.slides.eq(s.activeIndex).transitionEnd(function () {
	                            if (eventTriggered) return;
	                            if (!s) return;
	                            if (!$(this).hasClass(s.params.slideActiveClass)) return;
	                            eventTriggered = true;
	                            s.animating = false;
	                            var triggerEvents = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];
	                            for (var i = 0; i < triggerEvents.length; i++) {
	                                s.wrapper.trigger(triggerEvents[i]);
	                            }
	                        });
	                    }
	                }
	            },
	            cube: {
	                setTranslate: function () {
	                    var wrapperRotate = 0, cubeShadow;
	                    if (s.params.cube.shadow) {
	                        if (s.isHorizontal()) {
	                            cubeShadow = s.wrapper.find('.swiper-cube-shadow');
	                            if (cubeShadow.length === 0) {
	                                cubeShadow = $('<div class="swiper-cube-shadow"></div>');
	                                s.wrapper.append(cubeShadow);
	                            }
	                            cubeShadow.css({height: s.width + 'px'});
	                        }
	                        else {
	                            cubeShadow = s.container.find('.swiper-cube-shadow');
	                            if (cubeShadow.length === 0) {
	                                cubeShadow = $('<div class="swiper-cube-shadow"></div>');
	                                s.container.append(cubeShadow);
	                            }
	                        }
	                    }
	                    for (var i = 0; i < s.slides.length; i++) {
	                        var slide = s.slides.eq(i);
	                        var slideAngle = i * 90;
	                        var round = Math.floor(slideAngle / 360);
	                        if (s.rtl) {
	                            slideAngle = -slideAngle;
	                            round = Math.floor(-slideAngle / 360);
	                        }
	                        var progress = Math.max(Math.min(slide[0].progress, 1), -1);
	                        var tx = 0, ty = 0, tz = 0;
	                        if (i % 4 === 0) {
	                            tx = - round * 4 * s.size;
	                            tz = 0;
	                        }
	                        else if ((i - 1) % 4 === 0) {
	                            tx = 0;
	                            tz = - round * 4 * s.size;
	                        }
	                        else if ((i - 2) % 4 === 0) {
	                            tx = s.size + round * 4 * s.size;
	                            tz = s.size;
	                        }
	                        else if ((i - 3) % 4 === 0) {
	                            tx = - s.size;
	                            tz = 3 * s.size + s.size * 4 * round;
	                        }
	                        if (s.rtl) {
	                            tx = -tx;
	                        }
	        
	                        if (!s.isHorizontal()) {
	                            ty = tx;
	                            tx = 0;
	                        }
	        
	                        var transform = 'rotateX(' + (s.isHorizontal() ? 0 : -slideAngle) + 'deg) rotateY(' + (s.isHorizontal() ? slideAngle : 0) + 'deg) translate3d(' + tx + 'px, ' + ty + 'px, ' + tz + 'px)';
	                        if (progress <= 1 && progress > -1) {
	                            wrapperRotate = i * 90 + progress * 90;
	                            if (s.rtl) wrapperRotate = -i * 90 - progress * 90;
	                        }
	                        slide.transform(transform);
	                        if (s.params.cube.slideShadows) {
	                            //Set shadows
	                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
	                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
	                            if (shadowBefore.length === 0) {
	                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
	                                slide.append(shadowBefore);
	                            }
	                            if (shadowAfter.length === 0) {
	                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
	                                slide.append(shadowAfter);
	                            }
	                            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
	                            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
	                        }
	                    }
	                    s.wrapper.css({
	                        '-webkit-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
	                        '-moz-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
	                        '-ms-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
	                        'transform-origin': '50% 50% -' + (s.size / 2) + 'px'
	                    });
	        
	                    if (s.params.cube.shadow) {
	                        if (s.isHorizontal()) {
	                            cubeShadow.transform('translate3d(0px, ' + (s.width / 2 + s.params.cube.shadowOffset) + 'px, ' + (-s.width / 2) + 'px) rotateX(90deg) rotateZ(0deg) scale(' + (s.params.cube.shadowScale) + ')');
	                        }
	                        else {
	                            var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
	                            var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
	                            var scale1 = s.params.cube.shadowScale,
	                                scale2 = s.params.cube.shadowScale / multiplier,
	                                offset = s.params.cube.shadowOffset;
	                            cubeShadow.transform('scale3d(' + scale1 + ', 1, ' + scale2 + ') translate3d(0px, ' + (s.height / 2 + offset) + 'px, ' + (-s.height / 2 / scale2) + 'px) rotateX(-90deg)');
	                        }
	                    }
	                    var zFactor = (s.isSafari || s.isUiWebView) ? (-s.size / 2) : 0;
	                    s.wrapper.transform('translate3d(0px,0,' + zFactor + 'px) rotateX(' + (s.isHorizontal() ? 0 : wrapperRotate) + 'deg) rotateY(' + (s.isHorizontal() ? -wrapperRotate : 0) + 'deg)');
	                },
	                setTransition: function (duration) {
	                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
	                    if (s.params.cube.shadow && !s.isHorizontal()) {
	                        s.container.find('.swiper-cube-shadow').transition(duration);
	                    }
	                }
	            },
	            coverflow: {
	                setTranslate: function () {
	                    var transform = s.translate;
	                    var center = s.isHorizontal() ? -transform + s.width / 2 : -transform + s.height / 2;
	                    var rotate = s.isHorizontal() ? s.params.coverflow.rotate: -s.params.coverflow.rotate;
	                    var translate = s.params.coverflow.depth;
	                    //Each slide offset from center
	                    for (var i = 0, length = s.slides.length; i < length; i++) {
	                        var slide = s.slides.eq(i);
	                        var slideSize = s.slidesSizesGrid[i];
	                        var slideOffset = slide[0].swiperSlideOffset;
	                        var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * s.params.coverflow.modifier;
	        
	                        var rotateY = s.isHorizontal() ? rotate * offsetMultiplier : 0;
	                        var rotateX = s.isHorizontal() ? 0 : rotate * offsetMultiplier;
	                        // var rotateZ = 0
	                        var translateZ = -translate * Math.abs(offsetMultiplier);
	        
	                        var translateY = s.isHorizontal() ? 0 : s.params.coverflow.stretch * (offsetMultiplier);
	                        var translateX = s.isHorizontal() ? s.params.coverflow.stretch * (offsetMultiplier) : 0;
	        
	                        //Fix for ultra small values
	                        if (Math.abs(translateX) < 0.001) translateX = 0;
	                        if (Math.abs(translateY) < 0.001) translateY = 0;
	                        if (Math.abs(translateZ) < 0.001) translateZ = 0;
	                        if (Math.abs(rotateY) < 0.001) rotateY = 0;
	                        if (Math.abs(rotateX) < 0.001) rotateX = 0;
	        
	                        var slideTransform = 'translate3d(' + translateX + 'px,' + translateY + 'px,' + translateZ + 'px)  rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
	        
	                        slide.transform(slideTransform);
	                        slide[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
	                        if (s.params.coverflow.slideShadows) {
	                            //Set shadows
	                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
	                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
	                            if (shadowBefore.length === 0) {
	                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
	                                slide.append(shadowBefore);
	                            }
	                            if (shadowAfter.length === 0) {
	                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
	                                slide.append(shadowAfter);
	                            }
	                            if (shadowBefore.length) shadowBefore[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
	                            if (shadowAfter.length) shadowAfter[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
	                        }
	                    }
	        
	                    //Set correct perspective for IE10
	                    if (s.browser.ie) {
	                        var ws = s.wrapper[0].style;
	                        ws.perspectiveOrigin = center + 'px 50%';
	                    }
	                },
	                setTransition: function (duration) {
	                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
	                }
	            }
	        };
	
	        /*=========================
	          Images Lazy Loading
	          ===========================*/
	        s.lazy = {
	            initialImageLoaded: false,
	            loadImageInSlide: function (index, loadInDuplicate) {
	                if (typeof index === 'undefined') return;
	                if (typeof loadInDuplicate === 'undefined') loadInDuplicate = true;
	                if (s.slides.length === 0) return;
	        
	                var slide = s.slides.eq(index);
	                var img = slide.find('.' + s.params.lazyLoadingClass + ':not(.' + s.params.lazyStatusLoadedClass + '):not(.' + s.params.lazyStatusLoadingClass + ')');
	                if (slide.hasClass(s.params.lazyLoadingClass) && !slide.hasClass(s.params.lazyStatusLoadedClass) && !slide.hasClass(s.params.lazyStatusLoadingClass)) {
	                    img = img.add(slide[0]);
	                }
	                if (img.length === 0) return;
	        
	                img.each(function () {
	                    var _img = $(this);
	                    _img.addClass(s.params.lazyStatusLoadingClass);
	                    var background = _img.attr('data-background');
	                    var src = _img.attr('data-src'),
	                        srcset = _img.attr('data-srcset'),
	                        sizes = _img.attr('data-sizes');
	                    s.loadImage(_img[0], (src || background), srcset, sizes, false, function () {
	                        if (background) {
	                            _img.css('background-image', 'url("' + background + '")');
	                            _img.removeAttr('data-background');
	                        }
	                        else {
	                            if (srcset) {
	                                _img.attr('srcset', srcset);
	                                _img.removeAttr('data-srcset');
	                            }
	                            if (sizes) {
	                                _img.attr('sizes', sizes);
	                                _img.removeAttr('data-sizes');
	                            }
	                            if (src) {
	                                _img.attr('src', src);
	                                _img.removeAttr('data-src');
	                            }
	        
	                        }
	        
	                        _img.addClass(s.params.lazyStatusLoadedClass).removeClass(s.params.lazyStatusLoadingClass);
	                        slide.find('.' + s.params.lazyPreloaderClass + ', .' + s.params.preloaderClass).remove();
	                        if (s.params.loop && loadInDuplicate) {
	                            var slideOriginalIndex = slide.attr('data-swiper-slide-index');
	                            if (slide.hasClass(s.params.slideDuplicateClass)) {
	                                var originalSlide = s.wrapper.children('[data-swiper-slide-index="' + slideOriginalIndex + '"]:not(.' + s.params.slideDuplicateClass + ')');
	                                s.lazy.loadImageInSlide(originalSlide.index(), false);
	                            }
	                            else {
	                                var duplicatedSlide = s.wrapper.children('.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + slideOriginalIndex + '"]');
	                                s.lazy.loadImageInSlide(duplicatedSlide.index(), false);
	                            }
	                        }
	                        s.emit('onLazyImageReady', s, slide[0], _img[0]);
	                    });
	        
	                    s.emit('onLazyImageLoad', s, slide[0], _img[0]);
	                });
	        
	            },
	            load: function () {
	                var i;
	                var slidesPerView = s.params.slidesPerView;
	                if (slidesPerView === 'auto') {
	                    slidesPerView = 0;
	                }
	                if (!s.lazy.initialImageLoaded) s.lazy.initialImageLoaded = true;
	                if (s.params.watchSlidesVisibility) {
	                    s.wrapper.children('.' + s.params.slideVisibleClass).each(function () {
	                        s.lazy.loadImageInSlide($(this).index());
	                    });
	                }
	                else {
	                    if (slidesPerView > 1) {
	                        for (i = s.activeIndex; i < s.activeIndex + slidesPerView ; i++) {
	                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
	                        }
	                    }
	                    else {
	                        s.lazy.loadImageInSlide(s.activeIndex);
	                    }
	                }
	                if (s.params.lazyLoadingInPrevNext) {
	                    if (slidesPerView > 1 || (s.params.lazyLoadingInPrevNextAmount && s.params.lazyLoadingInPrevNextAmount > 1)) {
	                        var amount = s.params.lazyLoadingInPrevNextAmount;
	                        var spv = slidesPerView;
	                        var maxIndex = Math.min(s.activeIndex + spv + Math.max(amount, spv), s.slides.length);
	                        var minIndex = Math.max(s.activeIndex - Math.max(spv, amount), 0);
	                        // Next Slides
	                        for (i = s.activeIndex + slidesPerView; i < maxIndex; i++) {
	                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
	                        }
	                        // Prev Slides
	                        for (i = minIndex; i < s.activeIndex ; i++) {
	                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
	                        }
	                    }
	                    else {
	                        var nextSlide = s.wrapper.children('.' + s.params.slideNextClass);
	                        if (nextSlide.length > 0) s.lazy.loadImageInSlide(nextSlide.index());
	        
	                        var prevSlide = s.wrapper.children('.' + s.params.slidePrevClass);
	                        if (prevSlide.length > 0) s.lazy.loadImageInSlide(prevSlide.index());
	                    }
	                }
	            },
	            onTransitionStart: function () {
	                if (s.params.lazyLoading) {
	                    if (s.params.lazyLoadingOnTransitionStart || (!s.params.lazyLoadingOnTransitionStart && !s.lazy.initialImageLoaded)) {
	                        s.lazy.load();
	                    }
	                }
	            },
	            onTransitionEnd: function () {
	                if (s.params.lazyLoading && !s.params.lazyLoadingOnTransitionStart) {
	                    s.lazy.load();
	                }
	            }
	        };
	        
	
	        /*=========================
	          Scrollbar
	          ===========================*/
	        s.scrollbar = {
	            isTouched: false,
	            setDragPosition: function (e) {
	                var sb = s.scrollbar;
	                var x = 0, y = 0;
	                var translate;
	                var pointerPosition = s.isHorizontal() ?
	                    ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageX : e.pageX || e.clientX) :
	                    ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageY : e.pageY || e.clientY) ;
	                var position = (pointerPosition) - sb.track.offset()[s.isHorizontal() ? 'left' : 'top'] - sb.dragSize / 2;
	                var positionMin = -s.minTranslate() * sb.moveDivider;
	                var positionMax = -s.maxTranslate() * sb.moveDivider;
	                if (position < positionMin) {
	                    position = positionMin;
	                }
	                else if (position > positionMax) {
	                    position = positionMax;
	                }
	                position = -position / sb.moveDivider;
	                s.updateProgress(position);
	                s.setWrapperTranslate(position, true);
	            },
	            dragStart: function (e) {
	                var sb = s.scrollbar;
	                sb.isTouched = true;
	                e.preventDefault();
	                e.stopPropagation();
	        
	                sb.setDragPosition(e);
	                clearTimeout(sb.dragTimeout);
	        
	                sb.track.transition(0);
	                if (s.params.scrollbarHide) {
	                    sb.track.css('opacity', 1);
	                }
	                s.wrapper.transition(100);
	                sb.drag.transition(100);
	                s.emit('onScrollbarDragStart', s);
	            },
	            dragMove: function (e) {
	                var sb = s.scrollbar;
	                if (!sb.isTouched) return;
	                if (e.preventDefault) e.preventDefault();
	                else e.returnValue = false;
	                sb.setDragPosition(e);
	                s.wrapper.transition(0);
	                sb.track.transition(0);
	                sb.drag.transition(0);
	                s.emit('onScrollbarDragMove', s);
	            },
	            dragEnd: function (e) {
	                var sb = s.scrollbar;
	                if (!sb.isTouched) return;
	                sb.isTouched = false;
	                if (s.params.scrollbarHide) {
	                    clearTimeout(sb.dragTimeout);
	                    sb.dragTimeout = setTimeout(function () {
	                        sb.track.css('opacity', 0);
	                        sb.track.transition(400);
	                    }, 1000);
	        
	                }
	                s.emit('onScrollbarDragEnd', s);
	                if (s.params.scrollbarSnapOnRelease) {
	                    s.slideReset();
	                }
	            },
	            draggableEvents: (function () {
	                if ((s.params.simulateTouch === false && !s.support.touch)) return s.touchEventsDesktop;
	                else return s.touchEvents;
	            })(),
	            enableDraggable: function () {
	                var sb = s.scrollbar;
	                var target = s.support.touch ? sb.track : document;
	                $(sb.track).on(sb.draggableEvents.start, sb.dragStart);
	                $(target).on(sb.draggableEvents.move, sb.dragMove);
	                $(target).on(sb.draggableEvents.end, sb.dragEnd);
	            },
	            disableDraggable: function () {
	                var sb = s.scrollbar;
	                var target = s.support.touch ? sb.track : document;
	                $(sb.track).off(sb.draggableEvents.start, sb.dragStart);
	                $(target).off(sb.draggableEvents.move, sb.dragMove);
	                $(target).off(sb.draggableEvents.end, sb.dragEnd);
	            },
	            set: function () {
	                if (!s.params.scrollbar) return;
	                var sb = s.scrollbar;
	                sb.track = $(s.params.scrollbar);
	                if (s.params.uniqueNavElements && typeof s.params.scrollbar === 'string' && sb.track.length > 1 && s.container.find(s.params.scrollbar).length === 1) {
	                    sb.track = s.container.find(s.params.scrollbar);
	                }
	                sb.drag = sb.track.find('.swiper-scrollbar-drag');
	                if (sb.drag.length === 0) {
	                    sb.drag = $('<div class="swiper-scrollbar-drag"></div>');
	                    sb.track.append(sb.drag);
	                }
	                sb.drag[0].style.width = '';
	                sb.drag[0].style.height = '';
	                sb.trackSize = s.isHorizontal() ? sb.track[0].offsetWidth : sb.track[0].offsetHeight;
	        
	                sb.divider = s.size / s.virtualSize;
	                sb.moveDivider = sb.divider * (sb.trackSize / s.size);
	                sb.dragSize = sb.trackSize * sb.divider;
	        
	                if (s.isHorizontal()) {
	                    sb.drag[0].style.width = sb.dragSize + 'px';
	                }
	                else {
	                    sb.drag[0].style.height = sb.dragSize + 'px';
	                }
	        
	                if (sb.divider >= 1) {
	                    sb.track[0].style.display = 'none';
	                }
	                else {
	                    sb.track[0].style.display = '';
	                }
	                if (s.params.scrollbarHide) {
	                    sb.track[0].style.opacity = 0;
	                }
	            },
	            setTranslate: function () {
	                if (!s.params.scrollbar) return;
	                var diff;
	                var sb = s.scrollbar;
	                var translate = s.translate || 0;
	                var newPos;
	        
	                var newSize = sb.dragSize;
	                newPos = (sb.trackSize - sb.dragSize) * s.progress;
	                if (s.rtl && s.isHorizontal()) {
	                    newPos = -newPos;
	                    if (newPos > 0) {
	                        newSize = sb.dragSize - newPos;
	                        newPos = 0;
	                    }
	                    else if (-newPos + sb.dragSize > sb.trackSize) {
	                        newSize = sb.trackSize + newPos;
	                    }
	                }
	                else {
	                    if (newPos < 0) {
	                        newSize = sb.dragSize + newPos;
	                        newPos = 0;
	                    }
	                    else if (newPos + sb.dragSize > sb.trackSize) {
	                        newSize = sb.trackSize - newPos;
	                    }
	                }
	                if (s.isHorizontal()) {
	                    if (s.support.transforms3d) {
	                        sb.drag.transform('translate3d(' + (newPos) + 'px, 0, 0)');
	                    }
	                    else {
	                        sb.drag.transform('translateX(' + (newPos) + 'px)');
	                    }
	                    sb.drag[0].style.width = newSize + 'px';
	                }
	                else {
	                    if (s.support.transforms3d) {
	                        sb.drag.transform('translate3d(0px, ' + (newPos) + 'px, 0)');
	                    }
	                    else {
	                        sb.drag.transform('translateY(' + (newPos) + 'px)');
	                    }
	                    sb.drag[0].style.height = newSize + 'px';
	                }
	                if (s.params.scrollbarHide) {
	                    clearTimeout(sb.timeout);
	                    sb.track[0].style.opacity = 1;
	                    sb.timeout = setTimeout(function () {
	                        sb.track[0].style.opacity = 0;
	                        sb.track.transition(400);
	                    }, 1000);
	                }
	            },
	            setTransition: function (duration) {
	                if (!s.params.scrollbar) return;
	                s.scrollbar.drag.transition(duration);
	            }
	        };
	
	        /*=========================
	          Controller
	          ===========================*/
	        s.controller = {
	            LinearSpline: function (x, y) {
	                this.x = x;
	                this.y = y;
	                this.lastIndex = x.length - 1;
	                // Given an x value (x2), return the expected y2 value:
	                // (x1,y1) is the known point before given value,
	                // (x3,y3) is the known point after given value.
	                var i1, i3;
	                var l = this.x.length;
	        
	                this.interpolate = function (x2) {
	                    if (!x2) return 0;
	        
	                    // Get the indexes of x1 and x3 (the array indexes before and after given x2):
	                    i3 = binarySearch(this.x, x2);
	                    i1 = i3 - 1;
	        
	                    // We have our indexes i1 & i3, so we can calculate already:
	                    // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
	                    return ((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1]) + this.y[i1];
	                };
	        
	                var binarySearch = (function() {
	                    var maxIndex, minIndex, guess;
	                    return function(array, val) {
	                        minIndex = -1;
	                        maxIndex = array.length;
	                        while (maxIndex - minIndex > 1)
	                            if (array[guess = maxIndex + minIndex >> 1] <= val) {
	                                minIndex = guess;
	                            } else {
	                                maxIndex = guess;
	                            }
	                        return maxIndex;
	                    };
	                })();
	            },
	            //xxx: for now i will just save one spline function to to
	            getInterpolateFunction: function(c){
	                if(!s.controller.spline) s.controller.spline = s.params.loop ?
	                    new s.controller.LinearSpline(s.slidesGrid, c.slidesGrid) :
	                    new s.controller.LinearSpline(s.snapGrid, c.snapGrid);
	            },
	            setTranslate: function (translate, byController) {
	               var controlled = s.params.control;
	               var multiplier, controlledTranslate;
	               function setControlledTranslate(c) {
	                    // this will create an Interpolate function based on the snapGrids
	                    // x is the Grid of the scrolled scroller and y will be the controlled scroller
	                    // it makes sense to create this only once and recall it for the interpolation
	                    // the function does a lot of value caching for performance
	                    translate = c.rtl && c.params.direction === 'horizontal' ? -s.translate : s.translate;
	                    if (s.params.controlBy === 'slide') {
	                        s.controller.getInterpolateFunction(c);
	                        // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
	                        // but it did not work out
	                        controlledTranslate = -s.controller.spline.interpolate(-translate);
	                    }
	        
	                    if(!controlledTranslate || s.params.controlBy === 'container'){
	                        multiplier = (c.maxTranslate() - c.minTranslate()) / (s.maxTranslate() - s.minTranslate());
	                        controlledTranslate = (translate - s.minTranslate()) * multiplier + c.minTranslate();
	                    }
	        
	                    if (s.params.controlInverse) {
	                        controlledTranslate = c.maxTranslate() - controlledTranslate;
	                    }
	                    c.updateProgress(controlledTranslate);
	                    c.setWrapperTranslate(controlledTranslate, false, s);
	                    c.updateActiveIndex();
	               }
	               if (s.isArray(controlled)) {
	                   for (var i = 0; i < controlled.length; i++) {
	                       if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
	                           setControlledTranslate(controlled[i]);
	                       }
	                   }
	               }
	               else if (controlled instanceof Swiper && byController !== controlled) {
	        
	                   setControlledTranslate(controlled);
	               }
	            },
	            setTransition: function (duration, byController) {
	                var controlled = s.params.control;
	                var i;
	                function setControlledTransition(c) {
	                    c.setWrapperTransition(duration, s);
	                    if (duration !== 0) {
	                        c.onTransitionStart();
	                        c.wrapper.transitionEnd(function(){
	                            if (!controlled) return;
	                            if (c.params.loop && s.params.controlBy === 'slide') {
	                                c.fixLoop();
	                            }
	                            c.onTransitionEnd();
	        
	                        });
	                    }
	                }
	                if (s.isArray(controlled)) {
	                    for (i = 0; i < controlled.length; i++) {
	                        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
	                            setControlledTransition(controlled[i]);
	                        }
	                    }
	                }
	                else if (controlled instanceof Swiper && byController !== controlled) {
	                    setControlledTransition(controlled);
	                }
	            }
	        };
	
	        /*=========================
	          Hash Navigation
	          ===========================*/
	        s.hashnav = {
	            onHashCange: function (e, a) {
	                var newHash = document.location.hash.replace('#', '');
	                var activeSlideHash = s.slides.eq(s.activeIndex).attr('data-hash');
	                if (newHash !== activeSlideHash) {
	                    s.slideTo(s.wrapper.children('.' + s.params.slideClass + '[data-hash="' + (newHash) + '"]').index());
	                }
	            },
	            attachEvents: function (detach) {
	                var action = detach ? 'off' : 'on';
	                $(window)[action]('hashchange', s.hashnav.onHashCange);
	            },
	            setHash: function () {
	                if (!s.hashnav.initialized || !s.params.hashnav) return;
	                if (s.params.replaceState && window.history && window.history.replaceState) {
	                    window.history.replaceState(null, null, ('#' + s.slides.eq(s.activeIndex).attr('data-hash') || ''));
	                } else {
	                    var slide = s.slides.eq(s.activeIndex);
	                    var hash = slide.attr('data-hash') || slide.attr('data-history');
	                    document.location.hash = hash || '';
	                }
	            },
	            init: function () {
	                if (!s.params.hashnav || s.params.history) return;
	                s.hashnav.initialized = true;
	                var hash = document.location.hash.replace('#', '');
	                if (hash) {
	                    var speed = 0;
	                    for (var i = 0, length = s.slides.length; i < length; i++) {
	                        var slide = s.slides.eq(i);
	                        var slideHash = slide.attr('data-hash') || slide.attr('data-history');
	                        if (slideHash === hash && !slide.hasClass(s.params.slideDuplicateClass)) {
	                            var index = slide.index();
	                            s.slideTo(index, speed, s.params.runCallbacksOnInit, true);
	                        }
	                    }
	                }
	                if (s.params.hashnavWatchState) s.hashnav.attachEvents();
	            },
	            destroy: function () {
	                if (s.params.hashnavWatchState) s.hashnav.attachEvents(true);
	            }
	        };
	
	        /*=========================
	          History Api with fallback to Hashnav
	          ===========================*/
	        s.history = {
	            init: function () {
	                if (!s.params.history) return;
	                if (!window.history || !window.history.pushState) {
	                    s.params.history = false;
	                    s.params.hashnav = true;
	                    return;
	                }
	                s.history.initialized = true;
	                this.paths = this.getPathValues();
	                if (!this.paths.key && !this.paths.value) return;
	                this.scrollToSlide(0, this.paths.value, s.params.runCallbacksOnInit);
	                if (!s.params.replaceState) {
	                    window.addEventListener('popstate', this.setHistoryPopState);
	                }
	            },
	            setHistoryPopState: function() {
	                s.history.paths = s.history.getPathValues();
	                s.history.scrollToSlide(s.params.speed, s.history.paths.value, false);
	            },
	            getPathValues: function() {
	                var pathArray = window.location.pathname.slice(1).split('/');
	                var total = pathArray.length;
	                var key = pathArray[total - 2];
	                var value = pathArray[total - 1];
	                return { key: key, value: value };
	            },
	            setHistory: function (key, index) {
	                if (!s.history.initialized || !s.params.history) return;
	                var slide = s.slides.eq(index);
	                var value = this.slugify(slide.attr('data-history'));
	                if (!window.location.pathname.includes(key)) {
	                    value = key + '/' + value;
	                }
	                if (s.params.replaceState) {
	                    window.history.replaceState(null, null, value);
	                } else {
	                    window.history.pushState(null, null, value);
	                }
	            },
	            slugify: function(text) {
	                return text.toString().toLowerCase()
	                    .replace(/\s+/g, '-')
	                    .replace(/[^\w\-]+/g, '')
	                    .replace(/\-\-+/g, '-')
	                    .replace(/^-+/, '')
	                    .replace(/-+$/, '');
	            },
	            scrollToSlide: function(speed, value, runCallbacks) {
	                if (value) {
	                    for (var i = 0, length = s.slides.length; i < length; i++) {
	                        var slide = s.slides.eq(i);
	                        var slideHistory = this.slugify(slide.attr('data-history'));
	                        if (slideHistory === value && !slide.hasClass(s.params.slideDuplicateClass)) {
	                            var index = slide.index();
	                            s.slideTo(index, speed, runCallbacks);
	                        }
	                    }
	                } else {
	                    s.slideTo(0, speed, runCallbacks);
	                }
	            }
	        };
	
	        /*=========================
	          Keyboard Control
	          ===========================*/
	        function handleKeyboard(e) {
	            if (e.originalEvent) e = e.originalEvent; //jquery fix
	            var kc = e.keyCode || e.charCode;
	            // Directions locks
	            if (!s.params.allowSwipeToNext && (s.isHorizontal() && kc === 39 || !s.isHorizontal() && kc === 40)) {
	                return false;
	            }
	            if (!s.params.allowSwipeToPrev && (s.isHorizontal() && kc === 37 || !s.isHorizontal() && kc === 38)) {
	                return false;
	            }
	            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
	                return;
	            }
	            if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
	                return;
	            }
	            if (kc === 37 || kc === 39 || kc === 38 || kc === 40) {
	                var inView = false;
	                //Check that swiper should be inside of visible area of window
	                if (s.container.parents('.' + s.params.slideClass).length > 0 && s.container.parents('.' + s.params.slideActiveClass).length === 0) {
	                    return;
	                }
	                var windowScroll = {
	                    left: window.pageXOffset,
	                    top: window.pageYOffset
	                };
	                var windowWidth = window.innerWidth;
	                var windowHeight = window.innerHeight;
	                var swiperOffset = s.container.offset();
	                if (s.rtl) swiperOffset.left = swiperOffset.left - s.container[0].scrollLeft;
	                var swiperCoord = [
	                    [swiperOffset.left, swiperOffset.top],
	                    [swiperOffset.left + s.width, swiperOffset.top],
	                    [swiperOffset.left, swiperOffset.top + s.height],
	                    [swiperOffset.left + s.width, swiperOffset.top + s.height]
	                ];
	                for (var i = 0; i < swiperCoord.length; i++) {
	                    var point = swiperCoord[i];
	                    if (
	                        point[0] >= windowScroll.left && point[0] <= windowScroll.left + windowWidth &&
	                        point[1] >= windowScroll.top && point[1] <= windowScroll.top + windowHeight
	                    ) {
	                        inView = true;
	                    }
	        
	                }
	                if (!inView) return;
	            }
	            if (s.isHorizontal()) {
	                if (kc === 37 || kc === 39) {
	                    if (e.preventDefault) e.preventDefault();
	                    else e.returnValue = false;
	                }
	                if ((kc === 39 && !s.rtl) || (kc === 37 && s.rtl)) s.slideNext();
	                if ((kc === 37 && !s.rtl) || (kc === 39 && s.rtl)) s.slidePrev();
	            }
	            else {
	                if (kc === 38 || kc === 40) {
	                    if (e.preventDefault) e.preventDefault();
	                    else e.returnValue = false;
	                }
	                if (kc === 40) s.slideNext();
	                if (kc === 38) s.slidePrev();
	            }
	        }
	        s.disableKeyboardControl = function () {
	            s.params.keyboardControl = false;
	            $(document).off('keydown', handleKeyboard);
	        };
	        s.enableKeyboardControl = function () {
	            s.params.keyboardControl = true;
	            $(document).on('keydown', handleKeyboard);
	        };
	        
	
	        /*=========================
	          Mousewheel Control
	          ===========================*/
	        s.mousewheel = {
	            event: false,
	            lastScrollTime: (new window.Date()).getTime()
	        };
	        if (s.params.mousewheelControl) {
	            /**
	             * The best combination if you prefer spinX + spinY normalization.  It favors
	             * the older DOMMouseScroll for Firefox, as FF does not include wheelDelta with
	             * 'wheel' event, making spin speed determination impossible.
	             */
	            s.mousewheel.event = (navigator.userAgent.indexOf('firefox') > -1) ?
	                'DOMMouseScroll' :
	                isEventSupported() ?
	                    'wheel' : 'mousewheel';
	        }
	        
	        function isEventSupported() {
	            var eventName = 'onwheel';
	            var isSupported = eventName in document;
	        
	            if (!isSupported) {
	                var element = document.createElement('div');
	                element.setAttribute(eventName, 'return;');
	                isSupported = typeof element[eventName] === 'function';
	            }
	        
	            if (!isSupported &&
	                document.implementation &&
	                document.implementation.hasFeature &&
	                    // always returns true in newer browsers as per the standard.
	                    // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
	                document.implementation.hasFeature('', '') !== true ) {
	                // This is the only way to test support for the `wheel` event in IE9+.
	                isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
	            }
	        
	            return isSupported;
	        }
	        
	        function handleMousewheel(e) {
	            if (e.originalEvent) e = e.originalEvent; //jquery fix
	            var delta = 0;
	            var rtlFactor = s.rtl ? -1 : 1;
	        
	            var data = normalizeWheel( e );
	        
	            if (s.params.mousewheelForceToAxis) {
	                if (s.isHorizontal()) {
	                    if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = data.pixelX * rtlFactor;
	                    else return;
	                }
	                else {
	                    if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = data.pixelY;
	                    else return;
	                }
	            }
	            else {
	                delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? - data.pixelX * rtlFactor : - data.pixelY;
	            }
	        
	            if (delta === 0) return;
	        
	            if (s.params.mousewheelInvert) delta = -delta;
	        
	            if (!s.params.freeMode) {
	                if ((new window.Date()).getTime() - s.mousewheel.lastScrollTime > 60) {
	                    if (delta < 0) {
	                        if ((!s.isEnd || s.params.loop) && !s.animating) {
	                            s.slideNext();
	                            s.emit('onScroll', s, e);
	                        }
	                        else if (s.params.mousewheelReleaseOnEdges) return true;
	                    }
	                    else {
	                        if ((!s.isBeginning || s.params.loop) && !s.animating) {
	                            s.slidePrev();
	                            s.emit('onScroll', s, e);
	                        }
	                        else if (s.params.mousewheelReleaseOnEdges) return true;
	                    }
	                }
	                s.mousewheel.lastScrollTime = (new window.Date()).getTime();
	        
	            }
	            else {
	                //Freemode or scrollContainer:
	                var position = s.getWrapperTranslate() + delta * s.params.mousewheelSensitivity;
	                var wasBeginning = s.isBeginning,
	                    wasEnd = s.isEnd;
	        
	                if (position >= s.minTranslate()) position = s.minTranslate();
	                if (position <= s.maxTranslate()) position = s.maxTranslate();
	        
	                s.setWrapperTransition(0);
	                s.setWrapperTranslate(position);
	                s.updateProgress();
	                s.updateActiveIndex();
	        
	                if (!wasBeginning && s.isBeginning || !wasEnd && s.isEnd) {
	                    s.updateClasses();
	                }
	        
	                if (s.params.freeModeSticky) {
	                    clearTimeout(s.mousewheel.timeout);
	                    s.mousewheel.timeout = setTimeout(function () {
	                        s.slideReset();
	                    }, 300);
	                }
	                else {
	                    if (s.params.lazyLoading && s.lazy) {
	                        s.lazy.load();
	                    }
	                }
	                // Emit event
	                s.emit('onScroll', s, e);
	        
	                // Stop autoplay
	                if (s.params.autoplay && s.params.autoplayDisableOnInteraction) s.stopAutoplay();
	        
	                // Return page scroll on edge positions
	                if (position === 0 || position === s.maxTranslate()) return;
	            }
	        
	            if (e.preventDefault) e.preventDefault();
	            else e.returnValue = false;
	            return false;
	        }
	        s.disableMousewheelControl = function () {
	            if (!s.mousewheel.event) return false;
	            var target = s.container;
	            if (s.params.mousewheelEventsTarged !== 'container') {
	                target = $(s.params.mousewheelEventsTarged);
	            }
	            target.off(s.mousewheel.event, handleMousewheel);
	            return true;
	        };
	        
	        s.enableMousewheelControl = function () {
	            if (!s.mousewheel.event) return false;
	            var target = s.container;
	            if (s.params.mousewheelEventsTarged !== 'container') {
	                target = $(s.params.mousewheelEventsTarged);
	            }
	            target.on(s.mousewheel.event, handleMousewheel);
	            return true;
	        };
	        
	        /**
	         * Mouse wheel (and 2-finger trackpad) support on the web sucks.  It is
	         * complicated, thus this doc is long and (hopefully) detailed enough to answer
	         * your questions.
	         *
	         * If you need to react to the mouse wheel in a predictable way, this code is
	         * like your bestest friend. * hugs *
	         *
	         * As of today, there are 4 DOM event types you can listen to:
	         *
	         *   'wheel'                -- Chrome(31+), FF(17+), IE(9+)
	         *   'mousewheel'           -- Chrome, IE(6+), Opera, Safari
	         *   'MozMousePixelScroll'  -- FF(3.5 only!) (2010-2013) -- don't bother!
	         *   'DOMMouseScroll'       -- FF(0.9.7+) since 2003
	         *
	         * So what to do?  The is the best:
	         *
	         *   normalizeWheel.getEventType();
	         *
	         * In your event callback, use this code to get sane interpretation of the
	         * deltas.  This code will return an object with properties:
	         *
	         *   spinX   -- normalized spin speed (use for zoom) - x plane
	         *   spinY   -- " - y plane
	         *   pixelX  -- normalized distance (to pixels) - x plane
	         *   pixelY  -- " - y plane
	         *
	         * Wheel values are provided by the browser assuming you are using the wheel to
	         * scroll a web page by a number of lines or pixels (or pages).  Values can vary
	         * significantly on different platforms and browsers, forgetting that you can
	         * scroll at different speeds.  Some devices (like trackpads) emit more events
	         * at smaller increments with fine granularity, and some emit massive jumps with
	         * linear speed or acceleration.
	         *
	         * This code does its best to normalize the deltas for you:
	         *
	         *   - spin is trying to normalize how far the wheel was spun (or trackpad
	         *     dragged).  This is super useful for zoom support where you want to
	         *     throw away the chunky scroll steps on the PC and make those equal to
	         *     the slow and smooth tiny steps on the Mac. Key data: This code tries to
	         *     resolve a single slow step on a wheel to 1.
	         *
	         *   - pixel is normalizing the desired scroll delta in pixel units.  You'll
	         *     get the crazy differences between browsers, but at least it'll be in
	         *     pixels!
	         *
	         *   - positive value indicates scrolling DOWN/RIGHT, negative UP/LEFT.  This
	         *     should translate to positive value zooming IN, negative zooming OUT.
	         *     This matches the newer 'wheel' event.
	         *
	         * Why are there spinX, spinY (or pixels)?
	         *
	         *   - spinX is a 2-finger side drag on the trackpad, and a shift + wheel turn
	         *     with a mouse.  It results in side-scrolling in the browser by default.
	         *
	         *   - spinY is what you expect -- it's the classic axis of a mouse wheel.
	         *
	         *   - I dropped spinZ/pixelZ.  It is supported by the DOM 3 'wheel' event and
	         *     probably is by browsers in conjunction with fancy 3D controllers .. but
	         *     you know.
	         *
	         * Implementation info:
	         *
	         * Examples of 'wheel' event if you scroll slowly (down) by one step with an
	         * average mouse:
	         *
	         *   OS X + Chrome  (mouse)     -    4   pixel delta  (wheelDelta -120)
	         *   OS X + Safari  (mouse)     -  N/A   pixel delta  (wheelDelta  -12)
	         *   OS X + Firefox (mouse)     -    0.1 line  delta  (wheelDelta  N/A)
	         *   Win8 + Chrome  (mouse)     -  100   pixel delta  (wheelDelta -120)
	         *   Win8 + Firefox (mouse)     -    3   line  delta  (wheelDelta -120)
	         *
	         * On the trackpad:
	         *
	         *   OS X + Chrome  (trackpad)  -    2   pixel delta  (wheelDelta   -6)
	         *   OS X + Firefox (trackpad)  -    1   pixel delta  (wheelDelta  N/A)
	         *
	         * On other/older browsers.. it's more complicated as there can be multiple and
	         * also missing delta values.
	         *
	         * The 'wheel' event is more standard:
	         *
	         * http://www.w3.org/TR/DOM-Level-3-Events/#events-wheelevents
	         *
	         * The basics is that it includes a unit, deltaMode (pixels, lines, pages), and
	         * deltaX, deltaY and deltaZ.  Some browsers provide other values to maintain
	         * backward compatibility with older events.  Those other values help us
	         * better normalize spin speed.  Example of what the browsers provide:
	         *
	         *                          | event.wheelDelta | event.detail
	         *        ------------------+------------------+--------------
	         *          Safari v5/OS X  |       -120       |       0
	         *          Safari v5/Win7  |       -120       |       0
	         *         Chrome v17/OS X  |       -120       |       0
	         *         Chrome v17/Win7  |       -120       |       0
	         *                IE9/Win7  |       -120       |   undefined
	         *         Firefox v4/OS X  |     undefined    |       1
	         *         Firefox v4/Win7  |     undefined    |       3
	         *
	         */
	        function normalizeWheel( /*object*/ event ) /*object*/ {
	            // Reasonable defaults
	            var PIXEL_STEP = 10;
	            var LINE_HEIGHT = 40;
	            var PAGE_HEIGHT = 800;
	        
	            var sX = 0, sY = 0,       // spinX, spinY
	                pX = 0, pY = 0;       // pixelX, pixelY
	        
	            // Legacy
	            if( 'detail' in event ) {
	                sY = event.detail;
	            }
	            if( 'wheelDelta' in event ) {
	                sY = -event.wheelDelta / 120;
	            }
	            if( 'wheelDeltaY' in event ) {
	                sY = -event.wheelDeltaY / 120;
	            }
	            if( 'wheelDeltaX' in event ) {
	                sX = -event.wheelDeltaX / 120;
	            }
	        
	            // side scrolling on FF with DOMMouseScroll
	            if( 'axis' in event && event.axis === event.HORIZONTAL_AXIS ) {
	                sX = sY;
	                sY = 0;
	            }
	        
	            pX = sX * PIXEL_STEP;
	            pY = sY * PIXEL_STEP;
	        
	            if( 'deltaY' in event ) {
	                pY = event.deltaY;
	            }
	            if( 'deltaX' in event ) {
	                pX = event.deltaX;
	            }
	        
	            if( (pX || pY) && event.deltaMode ) {
	                if( event.deltaMode === 1 ) {          // delta in LINE units
	                    pX *= LINE_HEIGHT;
	                    pY *= LINE_HEIGHT;
	                } else {                             // delta in PAGE units
	                    pX *= PAGE_HEIGHT;
	                    pY *= PAGE_HEIGHT;
	                }
	            }
	        
	            // Fall-back if spin cannot be determined
	            if( pX && !sX ) {
	                sX = (pX < 1) ? -1 : 1;
	            }
	            if( pY && !sY ) {
	                sY = (pY < 1) ? -1 : 1;
	            }
	        
	            return {
	                spinX: sX,
	                spinY: sY,
	                pixelX: pX,
	                pixelY: pY
	            };
	        }
	
	        /*=========================
	          Parallax
	          ===========================*/
	        function setParallaxTransform(el, progress) {
	            el = $(el);
	            var p, pX, pY;
	            var rtlFactor = s.rtl ? -1 : 1;
	        
	            p = el.attr('data-swiper-parallax') || '0';
	            pX = el.attr('data-swiper-parallax-x');
	            pY = el.attr('data-swiper-parallax-y');
	            if (pX || pY) {
	                pX = pX || '0';
	                pY = pY || '0';
	            }
	            else {
	                if (s.isHorizontal()) {
	                    pX = p;
	                    pY = '0';
	                }
	                else {
	                    pY = p;
	                    pX = '0';
	                }
	            }
	        
	            if ((pX).indexOf('%') >= 0) {
	                pX = parseInt(pX, 10) * progress * rtlFactor + '%';
	            }
	            else {
	                pX = pX * progress * rtlFactor + 'px' ;
	            }
	            if ((pY).indexOf('%') >= 0) {
	                pY = parseInt(pY, 10) * progress + '%';
	            }
	            else {
	                pY = pY * progress + 'px' ;
	            }
	        
	            el.transform('translate3d(' + pX + ', ' + pY + ',0px)');
	        }
	        s.parallax = {
	            setTranslate: function () {
	                s.container.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(){
	                    setParallaxTransform(this, s.progress);
	        
	                });
	                s.slides.each(function () {
	                    var slide = $(this);
	                    slide.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function () {
	                        var progress = Math.min(Math.max(slide[0].progress, -1), 1);
	                        setParallaxTransform(this, progress);
	                    });
	                });
	            },
	            setTransition: function (duration) {
	                if (typeof duration === 'undefined') duration = s.params.speed;
	                s.container.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(){
	                    var el = $(this);
	                    var parallaxDuration = parseInt(el.attr('data-swiper-parallax-duration'), 10) || duration;
	                    if (duration === 0) parallaxDuration = 0;
	                    el.transition(parallaxDuration);
	                });
	            }
	        };
	        
	
	        /*=========================
	          Zoom
	          ===========================*/
	        s.zoom = {
	            // "Global" Props
	            scale: 1,
	            currentScale: 1,
	            isScaling: false,
	            gesture: {
	                slide: undefined,
	                slideWidth: undefined,
	                slideHeight: undefined,
	                image: undefined,
	                imageWrap: undefined,
	                zoomMax: s.params.zoomMax
	            },
	            image: {
	                isTouched: undefined,
	                isMoved: undefined,
	                currentX: undefined,
	                currentY: undefined,
	                minX: undefined,
	                minY: undefined,
	                maxX: undefined,
	                maxY: undefined,
	                width: undefined,
	                height: undefined,
	                startX: undefined,
	                startY: undefined,
	                touchesStart: {},
	                touchesCurrent: {}
	            },
	            velocity: {
	                x: undefined,
	                y: undefined,
	                prevPositionX: undefined,
	                prevPositionY: undefined,
	                prevTime: undefined
	            },
	            // Calc Scale From Multi-touches
	            getDistanceBetweenTouches: function (e) {
	                if (e.targetTouches.length < 2) return 1;
	                var x1 = e.targetTouches[0].pageX,
	                    y1 = e.targetTouches[0].pageY,
	                    x2 = e.targetTouches[1].pageX,
	                    y2 = e.targetTouches[1].pageY;
	                var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
	                return distance;
	            },
	            // Events
	            onGestureStart: function (e) {
	                var z = s.zoom;
	                if (!s.support.gestures) {
	                    if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
	                        return;
	                    }
	                    z.gesture.scaleStart = z.getDistanceBetweenTouches(e);
	                }
	                if (!z.gesture.slide || !z.gesture.slide.length) {
	                    z.gesture.slide = $(this);
	                    if (z.gesture.slide.length === 0) z.gesture.slide = s.slides.eq(s.activeIndex);
	                    z.gesture.image = z.gesture.slide.find('img, svg, canvas');
	                    z.gesture.imageWrap = z.gesture.image.parent('.' + s.params.zoomContainerClass);
	                    z.gesture.zoomMax = z.gesture.imageWrap.attr('data-swiper-zoom') || s.params.zoomMax ;
	                    if (z.gesture.imageWrap.length === 0) {
	                        z.gesture.image = undefined;
	                        return;
	                    }
	                }
	                z.gesture.image.transition(0);
	                z.isScaling = true;
	            },
	            onGestureChange: function (e) {
	                var z = s.zoom;
	                if (!s.support.gestures) {
	                    if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
	                        return;
	                    }
	                    z.gesture.scaleMove = z.getDistanceBetweenTouches(e);
	                }
	                if (!z.gesture.image || z.gesture.image.length === 0) return;
	                if (s.support.gestures) {
	                    z.scale = e.scale * z.currentScale;
	                }
	                else {
	                    z.scale = (z.gesture.scaleMove / z.gesture.scaleStart) * z.currentScale;
	                }
	                if (z.scale > z.gesture.zoomMax) {
	                    z.scale = z.gesture.zoomMax - 1 + Math.pow((z.scale - z.gesture.zoomMax + 1), 0.5);
	                }
	                if (z.scale < s.params.zoomMin) {
	                    z.scale =  s.params.zoomMin + 1 - Math.pow((s.params.zoomMin - z.scale + 1), 0.5);
	                }
	                z.gesture.image.transform('translate3d(0,0,0) scale(' + z.scale + ')');
	            },
	            onGestureEnd: function (e) {
	                var z = s.zoom;
	                if (!s.support.gestures) {
	                    if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2) {
	                        return;
	                    }
	                }
	                if (!z.gesture.image || z.gesture.image.length === 0) return;
	                z.scale = Math.max(Math.min(z.scale, z.gesture.zoomMax), s.params.zoomMin);
	                z.gesture.image.transition(s.params.speed).transform('translate3d(0,0,0) scale(' + z.scale + ')');
	                z.currentScale = z.scale;
	                z.isScaling = false;
	                if (z.scale === 1) z.gesture.slide = undefined;
	            },
	            onTouchStart: function (s, e) {
	                var z = s.zoom;
	                if (!z.gesture.image || z.gesture.image.length === 0) return;
	                if (z.image.isTouched) return;
	                if (s.device.os === 'android') e.preventDefault();
	                z.image.isTouched = true;
	                z.image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
	                z.image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
	            },
	            onTouchMove: function (e) {
	                var z = s.zoom;
	                if (!z.gesture.image || z.gesture.image.length === 0) return;
	                s.allowClick = false;
	                if (!z.image.isTouched || !z.gesture.slide) return;
	        
	                if (!z.image.isMoved) {
	                    z.image.width = z.gesture.image[0].offsetWidth;
	                    z.image.height = z.gesture.image[0].offsetHeight;
	                    z.image.startX = s.getTranslate(z.gesture.imageWrap[0], 'x') || 0;
	                    z.image.startY = s.getTranslate(z.gesture.imageWrap[0], 'y') || 0;
	                    z.gesture.slideWidth = z.gesture.slide[0].offsetWidth;
	                    z.gesture.slideHeight = z.gesture.slide[0].offsetHeight;
	                    z.gesture.imageWrap.transition(0);
	                    if (s.rtl) z.image.startX = -z.image.startX;
	                    if (s.rtl) z.image.startY = -z.image.startY;
	                }
	                // Define if we need image drag
	                var scaledWidth = z.image.width * z.scale;
	                var scaledHeight = z.image.height * z.scale;
	        
	                if (scaledWidth < z.gesture.slideWidth && scaledHeight < z.gesture.slideHeight) return;
	        
	                z.image.minX = Math.min((z.gesture.slideWidth / 2 - scaledWidth / 2), 0);
	                z.image.maxX = -z.image.minX;
	                z.image.minY = Math.min((z.gesture.slideHeight / 2 - scaledHeight / 2), 0);
	                z.image.maxY = -z.image.minY;
	        
	                z.image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
	                z.image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
	        
	                if (!z.image.isMoved && !z.isScaling) {
	                    if (s.isHorizontal() &&
	                        (Math.floor(z.image.minX) === Math.floor(z.image.startX) && z.image.touchesCurrent.x < z.image.touchesStart.x) ||
	                        (Math.floor(z.image.maxX) === Math.floor(z.image.startX) && z.image.touchesCurrent.x > z.image.touchesStart.x)
	                        ) {
	                        z.image.isTouched = false;
	                        return;
	                    }
	                    else if (!s.isHorizontal() &&
	                        (Math.floor(z.image.minY) === Math.floor(z.image.startY) && z.image.touchesCurrent.y < z.image.touchesStart.y) ||
	                        (Math.floor(z.image.maxY) === Math.floor(z.image.startY) && z.image.touchesCurrent.y > z.image.touchesStart.y)
	                        ) {
	                        z.image.isTouched = false;
	                        return;
	                    }
	                }
	                e.preventDefault();
	                e.stopPropagation();
	        
	                z.image.isMoved = true;
	                z.image.currentX = z.image.touchesCurrent.x - z.image.touchesStart.x + z.image.startX;
	                z.image.currentY = z.image.touchesCurrent.y - z.image.touchesStart.y + z.image.startY;
	        
	                if (z.image.currentX < z.image.minX) {
	                    z.image.currentX =  z.image.minX + 1 - Math.pow((z.image.minX - z.image.currentX + 1), 0.8);
	                }
	                if (z.image.currentX > z.image.maxX) {
	                    z.image.currentX = z.image.maxX - 1 + Math.pow((z.image.currentX - z.image.maxX + 1), 0.8);
	                }
	        
	                if (z.image.currentY < z.image.minY) {
	                    z.image.currentY =  z.image.minY + 1 - Math.pow((z.image.minY - z.image.currentY + 1), 0.8);
	                }
	                if (z.image.currentY > z.image.maxY) {
	                    z.image.currentY = z.image.maxY - 1 + Math.pow((z.image.currentY - z.image.maxY + 1), 0.8);
	                }
	        
	                //Velocity
	                if (!z.velocity.prevPositionX) z.velocity.prevPositionX = z.image.touchesCurrent.x;
	                if (!z.velocity.prevPositionY) z.velocity.prevPositionY = z.image.touchesCurrent.y;
	                if (!z.velocity.prevTime) z.velocity.prevTime = Date.now();
	                z.velocity.x = (z.image.touchesCurrent.x - z.velocity.prevPositionX) / (Date.now() - z.velocity.prevTime) / 2;
	                z.velocity.y = (z.image.touchesCurrent.y - z.velocity.prevPositionY) / (Date.now() - z.velocity.prevTime) / 2;
	                if (Math.abs(z.image.touchesCurrent.x - z.velocity.prevPositionX) < 2) z.velocity.x = 0;
	                if (Math.abs(z.image.touchesCurrent.y - z.velocity.prevPositionY) < 2) z.velocity.y = 0;
	                z.velocity.prevPositionX = z.image.touchesCurrent.x;
	                z.velocity.prevPositionY = z.image.touchesCurrent.y;
	                z.velocity.prevTime = Date.now();
	        
	                z.gesture.imageWrap.transform('translate3d(' + z.image.currentX + 'px, ' + z.image.currentY + 'px,0)');
	            },
	            onTouchEnd: function (s, e) {
	                var z = s.zoom;
	                if (!z.gesture.image || z.gesture.image.length === 0) return;
	                if (!z.image.isTouched || !z.image.isMoved) {
	                    z.image.isTouched = false;
	                    z.image.isMoved = false;
	                    return;
	                }
	                z.image.isTouched = false;
	                z.image.isMoved = false;
	                var momentumDurationX = 300;
	                var momentumDurationY = 300;
	                var momentumDistanceX = z.velocity.x * momentumDurationX;
	                var newPositionX = z.image.currentX + momentumDistanceX;
	                var momentumDistanceY = z.velocity.y * momentumDurationY;
	                var newPositionY = z.image.currentY + momentumDistanceY;
	        
	                //Fix duration
	                if (z.velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - z.image.currentX) / z.velocity.x);
	                if (z.velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - z.image.currentY) / z.velocity.y);
	                var momentumDuration = Math.max(momentumDurationX, momentumDurationY);
	        
	                z.image.currentX = newPositionX;
	                z.image.currentY = newPositionY;
	        
	                // Define if we need image drag
	                var scaledWidth = z.image.width * z.scale;
	                var scaledHeight = z.image.height * z.scale;
	                z.image.minX = Math.min((z.gesture.slideWidth / 2 - scaledWidth / 2), 0);
	                z.image.maxX = -z.image.minX;
	                z.image.minY = Math.min((z.gesture.slideHeight / 2 - scaledHeight / 2), 0);
	                z.image.maxY = -z.image.minY;
	                z.image.currentX = Math.max(Math.min(z.image.currentX, z.image.maxX), z.image.minX);
	                z.image.currentY = Math.max(Math.min(z.image.currentY, z.image.maxY), z.image.minY);
	        
	                z.gesture.imageWrap.transition(momentumDuration).transform('translate3d(' + z.image.currentX + 'px, ' + z.image.currentY + 'px,0)');
	            },
	            onTransitionEnd: function (s) {
	                var z = s.zoom;
	                if (z.gesture.slide && s.previousIndex !== s.activeIndex) {
	                    z.gesture.image.transform('translate3d(0,0,0) scale(1)');
	                    z.gesture.imageWrap.transform('translate3d(0,0,0)');
	                    z.gesture.slide = z.gesture.image = z.gesture.imageWrap = undefined;
	                    z.scale = z.currentScale = 1;
	                }
	            },
	            // Toggle Zoom
	            toggleZoom: function (s, e) {
	                var z = s.zoom;
	                if (!z.gesture.slide) {
	                    z.gesture.slide = s.clickedSlide ? $(s.clickedSlide) : s.slides.eq(s.activeIndex);
	                    z.gesture.image = z.gesture.slide.find('img, svg, canvas');
	                    z.gesture.imageWrap = z.gesture.image.parent('.' + s.params.zoomContainerClass);
	                }
	                if (!z.gesture.image || z.gesture.image.length === 0) return;
	        
	                var touchX, touchY, offsetX, offsetY, diffX, diffY, translateX, translateY, imageWidth, imageHeight, scaledWidth, scaledHeight, translateMinX, translateMinY, translateMaxX, translateMaxY, slideWidth, slideHeight;
	        
	                if (typeof z.image.touchesStart.x === 'undefined' && e) {
	                    touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
	                    touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
	                }
	                else {
	                    touchX = z.image.touchesStart.x;
	                    touchY = z.image.touchesStart.y;
	                }
	        
	                if (z.scale && z.scale !== 1) {
	                    // Zoom Out
	                    z.scale = z.currentScale = 1;
	                    z.gesture.imageWrap.transition(300).transform('translate3d(0,0,0)');
	                    z.gesture.image.transition(300).transform('translate3d(0,0,0) scale(1)');
	                    z.gesture.slide = undefined;
	                }
	                else {
	                    // Zoom In
	                    z.scale = z.currentScale = z.gesture.imageWrap.attr('data-swiper-zoom') || s.params.zoomMax;
	                    if (e) {
	                        slideWidth = z.gesture.slide[0].offsetWidth;
	                        slideHeight = z.gesture.slide[0].offsetHeight;
	                        offsetX = z.gesture.slide.offset().left;
	                        offsetY = z.gesture.slide.offset().top;
	                        diffX = offsetX + slideWidth/2 - touchX;
	                        diffY = offsetY + slideHeight/2 - touchY;
	        
	                        imageWidth = z.gesture.image[0].offsetWidth;
	                        imageHeight = z.gesture.image[0].offsetHeight;
	                        scaledWidth = imageWidth * z.scale;
	                        scaledHeight = imageHeight * z.scale;
	        
	                        translateMinX = Math.min((slideWidth / 2 - scaledWidth / 2), 0);
	                        translateMinY = Math.min((slideHeight / 2 - scaledHeight / 2), 0);
	                        translateMaxX = -translateMinX;
	                        translateMaxY = -translateMinY;
	        
	                        translateX = diffX * z.scale;
	                        translateY = diffY * z.scale;
	        
	                        if (translateX < translateMinX) {
	                            translateX =  translateMinX;
	                        }
	                        if (translateX > translateMaxX) {
	                            translateX = translateMaxX;
	                        }
	        
	                        if (translateY < translateMinY) {
	                            translateY =  translateMinY;
	                        }
	                        if (translateY > translateMaxY) {
	                            translateY = translateMaxY;
	                        }
	                    }
	                    else {
	                        translateX = 0;
	                        translateY = 0;
	                    }
	                    z.gesture.imageWrap.transition(300).transform('translate3d(' + translateX + 'px, ' + translateY + 'px,0)');
	                    z.gesture.image.transition(300).transform('translate3d(0,0,0) scale(' + z.scale + ')');
	                }
	            },
	            // Attach/Detach Events
	            attachEvents: function (detach) {
	                var action = detach ? 'off' : 'on';
	        
	                if (s.params.zoom) {
	                    var target = s.slides;
	                    var passiveListener = s.touchEvents.start === 'touchstart' && s.support.passiveListener && s.params.passiveListeners ? {passive: true, capture: false} : false;
	                    // Scale image
	                    if (s.support.gestures) {
	                        s.slides[action]('gesturestart', s.zoom.onGestureStart, passiveListener);
	                        s.slides[action]('gesturechange', s.zoom.onGestureChange, passiveListener);
	                        s.slides[action]('gestureend', s.zoom.onGestureEnd, passiveListener);
	                    }
	                    else if (s.touchEvents.start === 'touchstart') {
	                        s.slides[action](s.touchEvents.start, s.zoom.onGestureStart, passiveListener);
	                        s.slides[action](s.touchEvents.move, s.zoom.onGestureChange, passiveListener);
	                        s.slides[action](s.touchEvents.end, s.zoom.onGestureEnd, passiveListener);
	                    }
	        
	                    // Move image
	                    s[action]('touchStart', s.zoom.onTouchStart);
	                    s.slides.each(function (index, slide){
	                        if ($(slide).find('.' + s.params.zoomContainerClass).length > 0) {
	                            $(slide)[action](s.touchEvents.move, s.zoom.onTouchMove);
	                        }
	                    });
	                    s[action]('touchEnd', s.zoom.onTouchEnd);
	        
	                    // Scale Out
	                    s[action]('transitionEnd', s.zoom.onTransitionEnd);
	                    if (s.params.zoomToggle) {
	                        s.on('doubleTap', s.zoom.toggleZoom);
	                    }
	                }
	            },
	            init: function () {
	                s.zoom.attachEvents();
	            },
	            destroy: function () {
	                s.zoom.attachEvents(true);
	            }
	        };
	
	        /*=========================
	          Plugins API. Collect all and init all plugins
	          ===========================*/
	        s._plugins = [];
	        for (var plugin in s.plugins) {
	            var p = s.plugins[plugin](s, s.params[plugin]);
	            if (p) s._plugins.push(p);
	        }
	        // Method to call all plugins event/method
	        s.callPlugins = function (eventName) {
	            for (var i = 0; i < s._plugins.length; i++) {
	                if (eventName in s._plugins[i]) {
	                    s._plugins[i][eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
	                }
	            }
	        };
	
	        /*=========================
	          Events/Callbacks/Plugins Emitter
	          ===========================*/
	        function normalizeEventName (eventName) {
	            if (eventName.indexOf('on') !== 0) {
	                if (eventName[0] !== eventName[0].toUpperCase()) {
	                    eventName = 'on' + eventName[0].toUpperCase() + eventName.substring(1);
	                }
	                else {
	                    eventName = 'on' + eventName;
	                }
	            }
	            return eventName;
	        }
	        s.emitterEventListeners = {
	        
	        };
	        s.emit = function (eventName) {
	            // Trigger callbacks
	            if (s.params[eventName]) {
	                s.params[eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
	            }
	            var i;
	            // Trigger events
	            if (s.emitterEventListeners[eventName]) {
	                for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {
	                    s.emitterEventListeners[eventName][i](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
	                }
	            }
	            // Trigger plugins
	            if (s.callPlugins) s.callPlugins(eventName, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
	        };
	        s.on = function (eventName, handler) {
	            eventName = normalizeEventName(eventName);
	            if (!s.emitterEventListeners[eventName]) s.emitterEventListeners[eventName] = [];
	            s.emitterEventListeners[eventName].push(handler);
	            return s;
	        };
	        s.off = function (eventName, handler) {
	            var i;
	            eventName = normalizeEventName(eventName);
	            if (typeof handler === 'undefined') {
	                // Remove all handlers for such event
	                s.emitterEventListeners[eventName] = [];
	                return s;
	            }
	            if (!s.emitterEventListeners[eventName] || s.emitterEventListeners[eventName].length === 0) return;
	            for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {
	                if(s.emitterEventListeners[eventName][i] === handler) s.emitterEventListeners[eventName].splice(i, 1);
	            }
	            return s;
	        };
	        s.once = function (eventName, handler) {
	            eventName = normalizeEventName(eventName);
	            var _handler = function () {
	                handler(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
	                s.off(eventName, _handler);
	            };
	            s.on(eventName, _handler);
	            return s;
	        };
	
	        // Accessibility tools
	        s.a11y = {
	            makeFocusable: function ($el) {
	                $el.attr('tabIndex', '0');
	                return $el;
	            },
	            addRole: function ($el, role) {
	                $el.attr('role', role);
	                return $el;
	            },
	        
	            addLabel: function ($el, label) {
	                $el.attr('aria-label', label);
	                return $el;
	            },
	        
	            disable: function ($el) {
	                $el.attr('aria-disabled', true);
	                return $el;
	            },
	        
	            enable: function ($el) {
	                $el.attr('aria-disabled', false);
	                return $el;
	            },
	        
	            onEnterKey: function (event) {
	                if (event.keyCode !== 13) return;
	                if ($(event.target).is(s.params.nextButton)) {
	                    s.onClickNext(event);
	                    if (s.isEnd) {
	                        s.a11y.notify(s.params.lastSlideMessage);
	                    }
	                    else {
	                        s.a11y.notify(s.params.nextSlideMessage);
	                    }
	                }
	                else if ($(event.target).is(s.params.prevButton)) {
	                    s.onClickPrev(event);
	                    if (s.isBeginning) {
	                        s.a11y.notify(s.params.firstSlideMessage);
	                    }
	                    else {
	                        s.a11y.notify(s.params.prevSlideMessage);
	                    }
	                }
	                if ($(event.target).is('.' + s.params.bulletClass)) {
	                    $(event.target)[0].click();
	                }
	            },
	        
	            liveRegion: $('<span class="' + s.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
	        
	            notify: function (message) {
	                var notification = s.a11y.liveRegion;
	                if (notification.length === 0) return;
	                notification.html('');
	                notification.html(message);
	            },
	            init: function () {
	                // Setup accessibility
	                if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
	                    s.a11y.makeFocusable(s.nextButton);
	                    s.a11y.addRole(s.nextButton, 'button');
	                    s.a11y.addLabel(s.nextButton, s.params.nextSlideMessage);
	                }
	                if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
	                    s.a11y.makeFocusable(s.prevButton);
	                    s.a11y.addRole(s.prevButton, 'button');
	                    s.a11y.addLabel(s.prevButton, s.params.prevSlideMessage);
	                }
	        
	                $(s.container).append(s.a11y.liveRegion);
	            },
	            initPagination: function () {
	                if (s.params.pagination && s.params.paginationClickable && s.bullets && s.bullets.length) {
	                    s.bullets.each(function () {
	                        var bullet = $(this);
	                        s.a11y.makeFocusable(bullet);
	                        s.a11y.addRole(bullet, 'button');
	                        s.a11y.addLabel(bullet, s.params.paginationBulletMessage.replace(/{{index}}/, bullet.index() + 1));
	                    });
	                }
	            },
	            destroy: function () {
	                if (s.a11y.liveRegion && s.a11y.liveRegion.length > 0) s.a11y.liveRegion.remove();
	            }
	        };
	        
	
	        /*=========================
	          Init/Destroy
	          ===========================*/
	        s.init = function () {
	            if (s.params.loop) s.createLoop();
	            s.updateContainerSize();
	            s.updateSlidesSize();
	            s.updatePagination();
	            if (s.params.scrollbar && s.scrollbar) {
	                s.scrollbar.set();
	                if (s.params.scrollbarDraggable) {
	                    s.scrollbar.enableDraggable();
	                }
	            }
	            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
	                if (!s.params.loop) s.updateProgress();
	                s.effects[s.params.effect].setTranslate();
	            }
	            if (s.params.loop) {
	                s.slideTo(s.params.initialSlide + s.loopedSlides, 0, s.params.runCallbacksOnInit);
	            }
	            else {
	                s.slideTo(s.params.initialSlide, 0, s.params.runCallbacksOnInit);
	                if (s.params.initialSlide === 0) {
	                    if (s.parallax && s.params.parallax) s.parallax.setTranslate();
	                    if (s.lazy && s.params.lazyLoading) {
	                        s.lazy.load();
	                        s.lazy.initialImageLoaded = true;
	                    }
	                }
	            }
	            s.attachEvents();
	            if (s.params.observer && s.support.observer) {
	                s.initObservers();
	            }
	            if (s.params.preloadImages && !s.params.lazyLoading) {
	                s.preloadImages();
	            }
	            if (s.params.zoom && s.zoom) {
	                s.zoom.init();
	            }
	            if (s.params.autoplay) {
	                s.startAutoplay();
	            }
	            if (s.params.keyboardControl) {
	                if (s.enableKeyboardControl) s.enableKeyboardControl();
	            }
	            if (s.params.mousewheelControl) {
	                if (s.enableMousewheelControl) s.enableMousewheelControl();
	            }
	            // Deprecated hashnavReplaceState changed to replaceState for use in hashnav and history
	            if (s.params.hashnavReplaceState) {
	                s.params.replaceState = s.params.hashnavReplaceState;
	            }
	            if (s.params.history) {
	                if (s.history) s.history.init();
	            }
	            if (s.params.hashnav) {
	                if (s.hashnav) s.hashnav.init();
	            }
	            if (s.params.a11y && s.a11y) s.a11y.init();
	            s.emit('onInit', s);
	        };
	        
	        // Cleanup dynamic styles
	        s.cleanupStyles = function () {
	            // Container
	            s.container.removeClass(s.classNames.join(' ')).removeAttr('style');
	        
	            // Wrapper
	            s.wrapper.removeAttr('style');
	        
	            // Slides
	            if (s.slides && s.slides.length) {
	                s.slides
	                    .removeClass([
	                      s.params.slideVisibleClass,
	                      s.params.slideActiveClass,
	                      s.params.slideNextClass,
	                      s.params.slidePrevClass
	                    ].join(' '))
	                    .removeAttr('style')
	                    .removeAttr('data-swiper-column')
	                    .removeAttr('data-swiper-row');
	            }
	        
	            // Pagination/Bullets
	            if (s.paginationContainer && s.paginationContainer.length) {
	                s.paginationContainer.removeClass(s.params.paginationHiddenClass);
	            }
	            if (s.bullets && s.bullets.length) {
	                s.bullets.removeClass(s.params.bulletActiveClass);
	            }
	        
	            // Buttons
	            if (s.params.prevButton) $(s.params.prevButton).removeClass(s.params.buttonDisabledClass);
	            if (s.params.nextButton) $(s.params.nextButton).removeClass(s.params.buttonDisabledClass);
	        
	            // Scrollbar
	            if (s.params.scrollbar && s.scrollbar) {
	                if (s.scrollbar.track && s.scrollbar.track.length) s.scrollbar.track.removeAttr('style');
	                if (s.scrollbar.drag && s.scrollbar.drag.length) s.scrollbar.drag.removeAttr('style');
	            }
	        };
	        
	        // Destroy
	        s.destroy = function (deleteInstance, cleanupStyles) {
	            // Detach evebts
	            s.detachEvents();
	            // Stop autoplay
	            s.stopAutoplay();
	            // Disable draggable
	            if (s.params.scrollbar && s.scrollbar) {
	                if (s.params.scrollbarDraggable) {
	                    s.scrollbar.disableDraggable();
	                }
	            }
	            // Destroy loop
	            if (s.params.loop) {
	                s.destroyLoop();
	            }
	            // Cleanup styles
	            if (cleanupStyles) {
	                s.cleanupStyles();
	            }
	            // Disconnect observer
	            s.disconnectObservers();
	        
	            // Destroy zoom
	            if (s.params.zoom && s.zoom) {
	                s.zoom.destroy();
	            }
	            // Disable keyboard/mousewheel
	            if (s.params.keyboardControl) {
	                if (s.disableKeyboardControl) s.disableKeyboardControl();
	            }
	            if (s.params.mousewheelControl) {
	                if (s.disableMousewheelControl) s.disableMousewheelControl();
	            }
	            // Disable a11y
	            if (s.params.a11y && s.a11y) s.a11y.destroy();
	            // Delete history popstate
	            if (s.params.history && !s.params.replaceState) {
	                window.removeEventListener('popstate', s.history.setHistoryPopState);
	            }
	            if (s.params.hashnav && s.hashnav)  {
	                s.hashnav.destroy();
	            }
	            // Destroy callback
	            s.emit('onDestroy');
	            // Delete instance
	            if (deleteInstance !== false) s = null;
	        };
	        
	        s.init();
	        
	
	    
	        // Return swiper instance
	        return s;
	    };
	    
	
	    /*==================================================
	        Prototype
	    ====================================================*/
	    Swiper.prototype = {
	        isSafari: (function () {
	            var ua = window.navigator.userAgent.toLowerCase();
	            return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0);
	        })(),
	        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
	        isArray: function (arr) {
	            return Object.prototype.toString.apply(arr) === '[object Array]';
	        },
	        /*==================================================
	        Browser
	        ====================================================*/
	        browser: {
	            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
	            ieTouch: (window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1) || (window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1),
	            lteIE9: (function() {
	                // create temporary DIV
	                var div = document.createElement('div');
	                // add content to tmp DIV which is wrapped into the IE HTML conditional statement
	                div.innerHTML = '<!--[if lte IE 9]><i></i><![endif]-->';
	                // return true / false value based on what will browser render
	                return div.getElementsByTagName('i').length === 1;
	            })()
	        },
	        /*==================================================
	        Devices
	        ====================================================*/
	        device: (function () {
	            var ua = window.navigator.userAgent;
	            var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
	            var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
	            var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
	            var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
	            return {
	                ios: ipad || iphone || ipod,
	                android: android
	            };
	        })(),
	        /*==================================================
	        Feature Detection
	        ====================================================*/
	        support: {
	            touch : (window.Modernizr && Modernizr.touch === true) || (function () {
	                return !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
	            })(),
	    
	            transforms3d : (window.Modernizr && Modernizr.csstransforms3d === true) || (function () {
	                var div = document.createElement('div').style;
	                return ('webkitPerspective' in div || 'MozPerspective' in div || 'OPerspective' in div || 'MsPerspective' in div || 'perspective' in div);
	            })(),
	    
	            flexbox: (function () {
	                var div = document.createElement('div').style;
	                var styles = ('alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient').split(' ');
	                for (var i = 0; i < styles.length; i++) {
	                    if (styles[i] in div) return true;
	                }
	            })(),
	    
	            observer: (function () {
	                return ('MutationObserver' in window || 'WebkitMutationObserver' in window);
	            })(),
	    
	            passiveListener: (function () {
	                var supportsPassive = false;
	                try {
	                    var opts = Object.defineProperty({}, 'passive', {
	                        get: function() {
	                            supportsPassive = true;
	                        }
	                    });
	                    window.addEventListener('testPassiveListener', null, opts);
	                } catch (e) {}
	                return supportsPassive;
	            })(),
	    
	            gestures: (function () {
	                return 'ongesturestart' in window;
	            })()
	        },
	        /*==================================================
	        Plugins
	        ====================================================*/
	        plugins: {}
	    };
	    
	
	    /*===========================
	    Dom7 Library
	    ===========================*/
	    var Dom7 = (function () {
	        var Dom7 = function (arr) {
	            var _this = this, i = 0;
	            // Create array-like object
	            for (i = 0; i < arr.length; i++) {
	                _this[i] = arr[i];
	            }
	            _this.length = arr.length;
	            // Return collection with methods
	            return this;
	        };
	        var $ = function (selector, context) {
	            var arr = [], i = 0;
	            if (selector && !context) {
	                if (selector instanceof Dom7) {
	                    return selector;
	                }
	            }
	            if (selector) {
	                // String
	                if (typeof selector === 'string') {
	                    var els, tempParent, html = selector.trim();
	                    if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
	                        var toCreate = 'div';
	                        if (html.indexOf('<li') === 0) toCreate = 'ul';
	                        if (html.indexOf('<tr') === 0) toCreate = 'tbody';
	                        if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
	                        if (html.indexOf('<tbody') === 0) toCreate = 'table';
	                        if (html.indexOf('<option') === 0) toCreate = 'select';
	                        tempParent = document.createElement(toCreate);
	                        tempParent.innerHTML = selector;
	                        for (i = 0; i < tempParent.childNodes.length; i++) {
	                            arr.push(tempParent.childNodes[i]);
	                        }
	                    }
	                    else {
	                        if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
	                            // Pure ID selector
	                            els = [document.getElementById(selector.split('#')[1])];
	                        }
	                        else {
	                            // Other selectors
	                            els = (context || document).querySelectorAll(selector);
	                        }
	                        for (i = 0; i < els.length; i++) {
	                            if (els[i]) arr.push(els[i]);
	                        }
	                    }
	                }
	                // Node/element
	                else if (selector.nodeType || selector === window || selector === document) {
	                    arr.push(selector);
	                }
	                //Array of elements or instance of Dom
	                else if (selector.length > 0 && selector[0].nodeType) {
	                    for (i = 0; i < selector.length; i++) {
	                        arr.push(selector[i]);
	                    }
	                }
	            }
	            return new Dom7(arr);
	        };
	        Dom7.prototype = {
	            // Classes and attriutes
	            addClass: function (className) {
	                if (typeof className === 'undefined') {
	                    return this;
	                }
	                var classes = className.split(' ');
	                for (var i = 0; i < classes.length; i++) {
	                    for (var j = 0; j < this.length; j++) {
	                        this[j].classList.add(classes[i]);
	                    }
	                }
	                return this;
	            },
	            removeClass: function (className) {
	                var classes = className.split(' ');
	                for (var i = 0; i < classes.length; i++) {
	                    for (var j = 0; j < this.length; j++) {
	                        this[j].classList.remove(classes[i]);
	                    }
	                }
	                return this;
	            },
	            hasClass: function (className) {
	                if (!this[0]) return false;
	                else return this[0].classList.contains(className);
	            },
	            toggleClass: function (className) {
	                var classes = className.split(' ');
	                for (var i = 0; i < classes.length; i++) {
	                    for (var j = 0; j < this.length; j++) {
	                        this[j].classList.toggle(classes[i]);
	                    }
	                }
	                return this;
	            },
	            attr: function (attrs, value) {
	                if (arguments.length === 1 && typeof attrs === 'string') {
	                    // Get attr
	                    if (this[0]) return this[0].getAttribute(attrs);
	                    else return undefined;
	                }
	                else {
	                    // Set attrs
	                    for (var i = 0; i < this.length; i++) {
	                        if (arguments.length === 2) {
	                            // String
	                            this[i].setAttribute(attrs, value);
	                        }
	                        else {
	                            // Object
	                            for (var attrName in attrs) {
	                                this[i][attrName] = attrs[attrName];
	                                this[i].setAttribute(attrName, attrs[attrName]);
	                            }
	                        }
	                    }
	                    return this;
	                }
	            },
	            removeAttr: function (attr) {
	                for (var i = 0; i < this.length; i++) {
	                    this[i].removeAttribute(attr);
	                }
	                return this;
	            },
	            data: function (key, value) {
	                if (typeof value === 'undefined') {
	                    // Get value
	                    if (this[0]) {
	                        var dataKey = this[0].getAttribute('data-' + key);
	                        if (dataKey) return dataKey;
	                        else if (this[0].dom7ElementDataStorage && (key in this[0].dom7ElementDataStorage)) return this[0].dom7ElementDataStorage[key];
	                        else return undefined;
	                    }
	                    else return undefined;
	                }
	                else {
	                    // Set value
	                    for (var i = 0; i < this.length; i++) {
	                        var el = this[i];
	                        if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
	                        el.dom7ElementDataStorage[key] = value;
	                    }
	                    return this;
	                }
	            },
	            // Transforms
	            transform : function (transform) {
	                for (var i = 0; i < this.length; i++) {
	                    var elStyle = this[i].style;
	                    elStyle.webkitTransform = elStyle.MsTransform = elStyle.msTransform = elStyle.MozTransform = elStyle.OTransform = elStyle.transform = transform;
	                }
	                return this;
	            },
	            transition: function (duration) {
	                if (typeof duration !== 'string') {
	                    duration = duration + 'ms';
	                }
	                for (var i = 0; i < this.length; i++) {
	                    var elStyle = this[i].style;
	                    elStyle.webkitTransitionDuration = elStyle.MsTransitionDuration = elStyle.msTransitionDuration = elStyle.MozTransitionDuration = elStyle.OTransitionDuration = elStyle.transitionDuration = duration;
	                }
	                return this;
	            },
	            //Events
	            on: function (eventName, targetSelector, listener, capture) {
	                function handleLiveEvent(e) {
	                    var target = e.target;
	                    if ($(target).is(targetSelector)) listener.call(target, e);
	                    else {
	                        var parents = $(target).parents();
	                        for (var k = 0; k < parents.length; k++) {
	                            if ($(parents[k]).is(targetSelector)) listener.call(parents[k], e);
	                        }
	                    }
	                }
	                var events = eventName.split(' ');
	                var i, j;
	                for (i = 0; i < this.length; i++) {
	                    if (typeof targetSelector === 'function' || targetSelector === false) {
	                        // Usual events
	                        if (typeof targetSelector === 'function') {
	                            listener = arguments[1];
	                            capture = arguments[2] || false;
	                        }
	                        for (j = 0; j < events.length; j++) {
	                            this[i].addEventListener(events[j], listener, capture);
	                        }
	                    }
	                    else {
	                        //Live events
	                        for (j = 0; j < events.length; j++) {
	                            if (!this[i].dom7LiveListeners) this[i].dom7LiveListeners = [];
	                            this[i].dom7LiveListeners.push({listener: listener, liveListener: handleLiveEvent});
	                            this[i].addEventListener(events[j], handleLiveEvent, capture);
	                        }
	                    }
	                }
	    
	                return this;
	            },
	            off: function (eventName, targetSelector, listener, capture) {
	                var events = eventName.split(' ');
	                for (var i = 0; i < events.length; i++) {
	                    for (var j = 0; j < this.length; j++) {
	                        if (typeof targetSelector === 'function' || targetSelector === false) {
	                            // Usual events
	                            if (typeof targetSelector === 'function') {
	                                listener = arguments[1];
	                                capture = arguments[2] || false;
	                            }
	                            this[j].removeEventListener(events[i], listener, capture);
	                        }
	                        else {
	                            // Live event
	                            if (this[j].dom7LiveListeners) {
	                                for (var k = 0; k < this[j].dom7LiveListeners.length; k++) {
	                                    if (this[j].dom7LiveListeners[k].listener === listener) {
	                                        this[j].removeEventListener(events[i], this[j].dom7LiveListeners[k].liveListener, capture);
	                                    }
	                                }
	                            }
	                        }
	                    }
	                }
	                return this;
	            },
	            once: function (eventName, targetSelector, listener, capture) {
	                var dom = this;
	                if (typeof targetSelector === 'function') {
	                    targetSelector = false;
	                    listener = arguments[1];
	                    capture = arguments[2];
	                }
	                function proxy(e) {
	                    listener(e);
	                    dom.off(eventName, targetSelector, proxy, capture);
	                }
	                dom.on(eventName, targetSelector, proxy, capture);
	            },
	            trigger: function (eventName, eventData) {
	                for (var i = 0; i < this.length; i++) {
	                    var evt;
	                    try {
	                        evt = new window.CustomEvent(eventName, {detail: eventData, bubbles: true, cancelable: true});
	                    }
	                    catch (e) {
	                        evt = document.createEvent('Event');
	                        evt.initEvent(eventName, true, true);
	                        evt.detail = eventData;
	                    }
	                    this[i].dispatchEvent(evt);
	                }
	                return this;
	            },
	            transitionEnd: function (callback) {
	                var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
	                    i, j, dom = this;
	                function fireCallBack(e) {
	                    /*jshint validthis:true */
	                    if (e.target !== this) return;
	                    callback.call(this, e);
	                    for (i = 0; i < events.length; i++) {
	                        dom.off(events[i], fireCallBack);
	                    }
	                }
	                if (callback) {
	                    for (i = 0; i < events.length; i++) {
	                        dom.on(events[i], fireCallBack);
	                    }
	                }
	                return this;
	            },
	            // Sizing/Styles
	            width: function () {
	                if (this[0] === window) {
	                    return window.innerWidth;
	                }
	                else {
	                    if (this.length > 0) {
	                        return parseFloat(this.css('width'));
	                    }
	                    else {
	                        return null;
	                    }
	                }
	            },
	            outerWidth: function (includeMargins) {
	                if (this.length > 0) {
	                    if (includeMargins)
	                        return this[0].offsetWidth + parseFloat(this.css('margin-right')) + parseFloat(this.css('margin-left'));
	                    else
	                        return this[0].offsetWidth;
	                }
	                else return null;
	            },
	            height: function () {
	                if (this[0] === window) {
	                    return window.innerHeight;
	                }
	                else {
	                    if (this.length > 0) {
	                        return parseFloat(this.css('height'));
	                    }
	                    else {
	                        return null;
	                    }
	                }
	            },
	            outerHeight: function (includeMargins) {
	                if (this.length > 0) {
	                    if (includeMargins)
	                        return this[0].offsetHeight + parseFloat(this.css('margin-top')) + parseFloat(this.css('margin-bottom'));
	                    else
	                        return this[0].offsetHeight;
	                }
	                else return null;
	            },
	            offset: function () {
	                if (this.length > 0) {
	                    var el = this[0];
	                    var box = el.getBoundingClientRect();
	                    var body = document.body;
	                    var clientTop  = el.clientTop  || body.clientTop  || 0;
	                    var clientLeft = el.clientLeft || body.clientLeft || 0;
	                    var scrollTop  = window.pageYOffset || el.scrollTop;
	                    var scrollLeft = window.pageXOffset || el.scrollLeft;
	                    return {
	                        top: box.top  + scrollTop  - clientTop,
	                        left: box.left + scrollLeft - clientLeft
	                    };
	                }
	                else {
	                    return null;
	                }
	            },
	            css: function (props, value) {
	                var i;
	                if (arguments.length === 1) {
	                    if (typeof props === 'string') {
	                        if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
	                    }
	                    else {
	                        for (i = 0; i < this.length; i++) {
	                            for (var prop in props) {
	                                this[i].style[prop] = props[prop];
	                            }
	                        }
	                        return this;
	                    }
	                }
	                if (arguments.length === 2 && typeof props === 'string') {
	                    for (i = 0; i < this.length; i++) {
	                        this[i].style[props] = value;
	                    }
	                    return this;
	                }
	                return this;
	            },
	    
	            //Dom manipulation
	            each: function (callback) {
	                for (var i = 0; i < this.length; i++) {
	                    callback.call(this[i], i, this[i]);
	                }
	                return this;
	            },
	            html: function (html) {
	                if (typeof html === 'undefined') {
	                    return this[0] ? this[0].innerHTML : undefined;
	                }
	                else {
	                    for (var i = 0; i < this.length; i++) {
	                        this[i].innerHTML = html;
	                    }
	                    return this;
	                }
	            },
	            text: function (text) {
	                if (typeof text === 'undefined') {
	                    if (this[0]) {
	                        return this[0].textContent.trim();
	                    }
	                    else return null;
	                }
	                else {
	                    for (var i = 0; i < this.length; i++) {
	                        this[i].textContent = text;
	                    }
	                    return this;
	                }
	            },
	            is: function (selector) {
	                if (!this[0]) return false;
	                var compareWith, i;
	                if (typeof selector === 'string') {
	                    var el = this[0];
	                    if (el === document) return selector === document;
	                    if (el === window) return selector === window;
	    
	                    if (el.matches) return el.matches(selector);
	                    else if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
	                    else if (el.mozMatchesSelector) return el.mozMatchesSelector(selector);
	                    else if (el.msMatchesSelector) return el.msMatchesSelector(selector);
	                    else {
	                        compareWith = $(selector);
	                        for (i = 0; i < compareWith.length; i++) {
	                            if (compareWith[i] === this[0]) return true;
	                        }
	                        return false;
	                    }
	                }
	                else if (selector === document) return this[0] === document;
	                else if (selector === window) return this[0] === window;
	                else {
	                    if (selector.nodeType || selector instanceof Dom7) {
	                        compareWith = selector.nodeType ? [selector] : selector;
	                        for (i = 0; i < compareWith.length; i++) {
	                            if (compareWith[i] === this[0]) return true;
	                        }
	                        return false;
	                    }
	                    return false;
	                }
	    
	            },
	            index: function () {
	                if (this[0]) {
	                    var child = this[0];
	                    var i = 0;
	                    while ((child = child.previousSibling) !== null) {
	                        if (child.nodeType === 1) i++;
	                    }
	                    return i;
	                }
	                else return undefined;
	            },
	            eq: function (index) {
	                if (typeof index === 'undefined') return this;
	                var length = this.length;
	                var returnIndex;
	                if (index > length - 1) {
	                    return new Dom7([]);
	                }
	                if (index < 0) {
	                    returnIndex = length + index;
	                    if (returnIndex < 0) return new Dom7([]);
	                    else return new Dom7([this[returnIndex]]);
	                }
	                return new Dom7([this[index]]);
	            },
	            append: function (newChild) {
	                var i, j;
	                for (i = 0; i < this.length; i++) {
	                    if (typeof newChild === 'string') {
	                        var tempDiv = document.createElement('div');
	                        tempDiv.innerHTML = newChild;
	                        while (tempDiv.firstChild) {
	                            this[i].appendChild(tempDiv.firstChild);
	                        }
	                    }
	                    else if (newChild instanceof Dom7) {
	                        for (j = 0; j < newChild.length; j++) {
	                            this[i].appendChild(newChild[j]);
	                        }
	                    }
	                    else {
	                        this[i].appendChild(newChild);
	                    }
	                }
	                return this;
	            },
	            prepend: function (newChild) {
	                var i, j;
	                for (i = 0; i < this.length; i++) {
	                    if (typeof newChild === 'string') {
	                        var tempDiv = document.createElement('div');
	                        tempDiv.innerHTML = newChild;
	                        for (j = tempDiv.childNodes.length - 1; j >= 0; j--) {
	                            this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
	                        }
	                        // this[i].insertAdjacentHTML('afterbegin', newChild);
	                    }
	                    else if (newChild instanceof Dom7) {
	                        for (j = 0; j < newChild.length; j++) {
	                            this[i].insertBefore(newChild[j], this[i].childNodes[0]);
	                        }
	                    }
	                    else {
	                        this[i].insertBefore(newChild, this[i].childNodes[0]);
	                    }
	                }
	                return this;
	            },
	            insertBefore: function (selector) {
	                var before = $(selector);
	                for (var i = 0; i < this.length; i++) {
	                    if (before.length === 1) {
	                        before[0].parentNode.insertBefore(this[i], before[0]);
	                    }
	                    else if (before.length > 1) {
	                        for (var j = 0; j < before.length; j++) {
	                            before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
	                        }
	                    }
	                }
	            },
	            insertAfter: function (selector) {
	                var after = $(selector);
	                for (var i = 0; i < this.length; i++) {
	                    if (after.length === 1) {
	                        after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
	                    }
	                    else if (after.length > 1) {
	                        for (var j = 0; j < after.length; j++) {
	                            after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
	                        }
	                    }
	                }
	            },
	            next: function (selector) {
	                if (this.length > 0) {
	                    if (selector) {
	                        if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) return new Dom7([this[0].nextElementSibling]);
	                        else return new Dom7([]);
	                    }
	                    else {
	                        if (this[0].nextElementSibling) return new Dom7([this[0].nextElementSibling]);
	                        else return new Dom7([]);
	                    }
	                }
	                else return new Dom7([]);
	            },
	            nextAll: function (selector) {
	                var nextEls = [];
	                var el = this[0];
	                if (!el) return new Dom7([]);
	                while (el.nextElementSibling) {
	                    var next = el.nextElementSibling;
	                    if (selector) {
	                        if($(next).is(selector)) nextEls.push(next);
	                    }
	                    else nextEls.push(next);
	                    el = next;
	                }
	                return new Dom7(nextEls);
	            },
	            prev: function (selector) {
	                if (this.length > 0) {
	                    if (selector) {
	                        if (this[0].previousElementSibling && $(this[0].previousElementSibling).is(selector)) return new Dom7([this[0].previousElementSibling]);
	                        else return new Dom7([]);
	                    }
	                    else {
	                        if (this[0].previousElementSibling) return new Dom7([this[0].previousElementSibling]);
	                        else return new Dom7([]);
	                    }
	                }
	                else return new Dom7([]);
	            },
	            prevAll: function (selector) {
	                var prevEls = [];
	                var el = this[0];
	                if (!el) return new Dom7([]);
	                while (el.previousElementSibling) {
	                    var prev = el.previousElementSibling;
	                    if (selector) {
	                        if($(prev).is(selector)) prevEls.push(prev);
	                    }
	                    else prevEls.push(prev);
	                    el = prev;
	                }
	                return new Dom7(prevEls);
	            },
	            parent: function (selector) {
	                var parents = [];
	                for (var i = 0; i < this.length; i++) {
	                    if (selector) {
	                        if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
	                    }
	                    else {
	                        parents.push(this[i].parentNode);
	                    }
	                }
	                return $($.unique(parents));
	            },
	            parents: function (selector) {
	                var parents = [];
	                for (var i = 0; i < this.length; i++) {
	                    var parent = this[i].parentNode;
	                    while (parent) {
	                        if (selector) {
	                            if ($(parent).is(selector)) parents.push(parent);
	                        }
	                        else {
	                            parents.push(parent);
	                        }
	                        parent = parent.parentNode;
	                    }
	                }
	                return $($.unique(parents));
	            },
	            find : function (selector) {
	                var foundElements = [];
	                for (var i = 0; i < this.length; i++) {
	                    var found = this[i].querySelectorAll(selector);
	                    for (var j = 0; j < found.length; j++) {
	                        foundElements.push(found[j]);
	                    }
	                }
	                return new Dom7(foundElements);
	            },
	            children: function (selector) {
	                var children = [];
	                for (var i = 0; i < this.length; i++) {
	                    var childNodes = this[i].childNodes;
	    
	                    for (var j = 0; j < childNodes.length; j++) {
	                        if (!selector) {
	                            if (childNodes[j].nodeType === 1) children.push(childNodes[j]);
	                        }
	                        else {
	                            if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) children.push(childNodes[j]);
	                        }
	                    }
	                }
	                return new Dom7($.unique(children));
	            },
	            remove: function () {
	                for (var i = 0; i < this.length; i++) {
	                    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
	                }
	                return this;
	            },
	            add: function () {
	                var dom = this;
	                var i, j;
	                for (i = 0; i < arguments.length; i++) {
	                    var toAdd = $(arguments[i]);
	                    for (j = 0; j < toAdd.length; j++) {
	                        dom[dom.length] = toAdd[j];
	                        dom.length++;
	                    }
	                }
	                return dom;
	            }
	        };
	        $.fn = Dom7.prototype;
	        $.unique = function (arr) {
	            var unique = [];
	            for (var i = 0; i < arr.length; i++) {
	                if (unique.indexOf(arr[i]) === -1) unique.push(arr[i]);
	            }
	            return unique;
	        };
	    
	        return $;
	    })();
	    
	
	    /*===========================
	     Get Dom libraries
	     ===========================*/
	    var swiperDomPlugins = ['jQuery', 'Zepto', 'Dom7'];
	    for (var i = 0; i < swiperDomPlugins.length; i++) {
	    	if (window[swiperDomPlugins[i]]) {
	    		addLibraryPlugin(window[swiperDomPlugins[i]]);
	    	}
	    }
	    // Required DOM Plugins
	    var domLib;
	    if (typeof Dom7 === 'undefined') {
	    	domLib = window.Dom7 || window.Zepto || window.jQuery;
	    }
	    else {
	    	domLib = Dom7;
	    }
	
	    /*===========================
	    Add .swiper plugin from Dom libraries
	    ===========================*/
	    function addLibraryPlugin(lib) {
	        lib.fn.swiper = function (params) {
	            var firstInstance;
	            lib(this).each(function () {
	                var s = new Swiper(this, params);
	                if (!firstInstance) firstInstance = s;
	            });
	            return firstInstance;
	        };
	    }
	    
	    if (domLib) {
	        if (!('transitionEnd' in domLib.fn)) {
	            domLib.fn.transitionEnd = function (callback) {
	                var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
	                    i, j, dom = this;
	                function fireCallBack(e) {
	                    /*jshint validthis:true */
	                    if (e.target !== this) return;
	                    callback.call(this, e);
	                    for (i = 0; i < events.length; i++) {
	                        dom.off(events[i], fireCallBack);
	                    }
	                }
	                if (callback) {
	                    for (i = 0; i < events.length; i++) {
	                        dom.on(events[i], fireCallBack);
	                    }
	                }
	                return this;
	            };
	        }
	        if (!('transform' in domLib.fn)) {
	            domLib.fn.transform = function (transform) {
	                for (var i = 0; i < this.length; i++) {
	                    var elStyle = this[i].style;
	                    elStyle.webkitTransform = elStyle.MsTransform = elStyle.msTransform = elStyle.MozTransform = elStyle.OTransform = elStyle.transform = transform;
	                }
	                return this;
	            };
	        }
	        if (!('transition' in domLib.fn)) {
	            domLib.fn.transition = function (duration) {
	                if (typeof duration !== 'string') {
	                    duration = duration + 'ms';
	                }
	                for (var i = 0; i < this.length; i++) {
	                    var elStyle = this[i].style;
	                    elStyle.webkitTransitionDuration = elStyle.MsTransitionDuration = elStyle.msTransitionDuration = elStyle.MozTransitionDuration = elStyle.OTransitionDuration = elStyle.transitionDuration = duration;
	                }
	                return this;
	            };
	        }
	        if (!('outerWidth' in domLib.fn)) {
	            domLib.fn.outerWidth = function (includeMargins) {
	                if (this.length > 0) {
	                    if (includeMargins)
	                        return this[0].offsetWidth + parseFloat(this.css('margin-right')) + parseFloat(this.css('margin-left'));
	                    else
	                        return this[0].offsetWidth;
	                }
	                else return null;
	            };
	        }
	    }
	
	    window.Swiper = Swiper;
	})();
	/*===========================
	Swiper AMD Export
	===========================*/
	if (true)
	{
	    module.exports = window.Swiper;
	}
	else if (typeof define === 'function' && define.amd) {
	    define([], function () {
	        'use strict';
	        return window.Swiper;
	    });
	}
	//# sourceMappingURL=maps/swiper.js.map


/***/ },
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(85)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(56),
	  /* template */
	  __webpack_require__(122),
	  /* scopeId */
	  "data-v-197b45e3",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 25 */
/***/ function(module, exports) {

	/**
	 * Created by user on 2017/2/17.
	 */
	
	utilObj = {
	  screenSize () {
	    var width = window.screen.width;
	    var height = window.screen.height;
	    return {width: width, height: height};
	  }
	};
	module.exports = utilObj;


/***/ },
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _index = __webpack_require__(24);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'app',
	  components: {
	    'mi-index': _index2.default
	  },
	  data: function data() {
	    return {};
	  }
	};

/***/ },
/* 48 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: ['goodsAttr'],
	  data: function data() {
	    return {
	      colorIndex: 0,
	      ramIndex: 0
	    };
	  },
	
	  components: {},
	  methods: {
	    checkColorEvent: function checkColorEvent(num) {
	      this.colorIndex = num;
	    },
	    checkRamEvent: function checkRamEvent(num) {
	      this.ramIndex = num;
	    },
	    submitBuyInfo: function submitBuyInfo() {
	      var ram = this.goodsAttr.attr.ram[this.ramIndex];
	      var color = this.goodsAttr.attr.color[this.colorIndex];
	      return { ram: ram, color: color };
	    }
	  }
	};

/***/ },
/* 49 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: ['detailData'],
	  created: function created() {
	    this.detailList = this.detailData.detailList;
	    this.attrList = this.detailData.attrList;
	  },
	  data: function data() {
	    return {
	      tabState: true,
	      detailList: [],
	      attrList: []
	    };
	  },
	
	  components: {},
	  methods: {
	    tabEvent1: function tabEvent1() {
	      this.tabState = true;
	    },
	    tabEvent2: function tabEvent2() {
	      this.tabState = false;
	    }
	  }
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _img = __webpack_require__(107);
	
	var _img2 = _interopRequireDefault(_img);
	
	var _buyControl = __webpack_require__(104);
	
	var _buyControl2 = _interopRequireDefault(_buyControl);
	
	var _detail = __webpack_require__(105);
	
	var _detail2 = _interopRequireDefault(_detail);
	
	var _data = __webpack_require__(7);
	
	var _data2 = _interopRequireDefault(_data);
	
	var _model = __webpack_require__(118);
	
	var _model2 = _interopRequireDefault(_model);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    'mi-img': _img2.default,
	    'mi-buyControl': _buyControl2.default,
	    'mi-detail': _detail2.default,
	    'mi-model': _model2.default
	  },
	  created: function created() {
	    this.detailData = _data2.default.detail;
	    this.goodsAttr = _data2.default.detail.goodsAttr;
	  },
	  data: function data() {
	    return {
	      detailData: [],
	      goodsAttr: {},
	      searchState: false,
	      popInfo: {}
	    };
	  },
	
	  methods: {
	    toHomeEvent: function toHomeEvent() {
	      this.$router.replace({ path: '/index' });
	    },
	    butEvent: function butEvent() {
	      var checkInfo = this.$refs.control.submitBuyInfo();
	      var info = {};
	      info.title = _data2.default.detail.goodsAttr.title;
	      info.ram = checkInfo.ram.text;
	      info.color = checkInfo.color.text;
	      this.popInfo = info;
	      this.$refs.alert.modelOpen();
	    },
	    addCartEvent: function addCartEvent() {
	      console.log('添加到购物车成功');
	    },
	    searchHandle: function searchHandle(Boolean) {
	      if (Boolean) {
	        this.searchState = true;
	      } else {
	        this.searchState = false;
	      }
	    },
	    alertBtnEvent: function alertBtnEvent() {}
	  }
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _swiper = __webpack_require__(14);
	
	var _swiper2 = _interopRequireDefault(_swiper);
	
	var _data = __webpack_require__(7);
	
	var _data2 = _interopRequireDefault(_data);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      bannerList: []
	    };
	  },
	
	  components: {},
	  created: function created() {
	    this.bannerList = _data2.default.detail.img;
	  },
	
	  methods: {
	    goBackEvent: function goBackEvent() {
	      this.$router.go(-1);
	    },
	    goodSearchEvent: function goodSearchEvent() {
	      this.$router.push({ path: '/index', query: { sign: 1 } });
	    }
	  },
	  mounted: function mounted() {
	    var mySwiper = new _swiper2.default(this.$refs.a, {
	      loop: true,
	      autoplay: 3000,
	      pagination: '.swiper-pagination',
	      autoplayDisableOnInteraction: false
	    });
	    console.log(mySwiper);
	  }
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _data = __webpack_require__(7);
	
	var _data2 = _interopRequireDefault(_data);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: ['banner'],
	  data: function data() {
	    return {
	      bannerTop: []
	    };
	  },
	  created: function created() {
	    this.bannerTop = _data2.default.banner.bannerTop;
	  }
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _starGoods = __webpack_require__(116);
	
	var _starGoods2 = _interopRequireDefault(_starGoods);
	
	var _newGoods = __webpack_require__(114);
	
	var _newGoods2 = _interopRequireDefault(_newGoods);
	
	var _intelligenceGoods = __webpack_require__(112);
	
	var _intelligenceGoods2 = _interopRequireDefault(_intelligenceGoods);
	
	var _newHomeGoods = __webpack_require__(115);
	
	var _newHomeGoods2 = _interopRequireDefault(_newHomeGoods);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: ['body'],
	  components: {
	    'mi-starGoods': _starGoods2.default,
	    'mi-newGoods': _newGoods2.default,
	    'mi-intelligenceGoods': _intelligenceGoods2.default,
	    'mi-newHomeGoods': _newHomeGoods2.default
	  },
	  data: function data() {
	    return {};
	  }
	};

/***/ },
/* 54 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  data: function data() {
	    return {
	      footerIndex: 0
	    };
	  },
	
	  methods: {
	    footerEvent: function footerEvent(num) {
	      this.footerIndex = num;
	    }
	  }
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _data = __webpack_require__(7);
	
	var _data2 = _interopRequireDefault(_data);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: ['opac'],
	  data: function data() {
	    return {
	      focus: false,
	      inputText: '',
	      hotWord: ['红米4 超长续航', '小米Note 2', '小米5s', '笔记本', '小米电视3s', '智能电饭煲'],
	      bgOpacSty: {
	        opacity: 0
	      },
	      searchImg: ''
	    };
	  },
	  created: function created() {
	    this.searchImg = _data2.default.searchImg;
	  },
	
	  watch: {
	    opac: function opac() {
	      this.bgOpacSty.opacity = this.opac;
	    }
	  },
	  methods: {
	    handleFocus: function handleFocus() {
	      this.focus = true;
	      this.$emit('searchEvent', true);
	    },
	    goBackEvent: function goBackEvent() {
	      this.focus = false;
	      this.$emit('searchEvent', false);
	    },
	    inputFillEvent: function inputFillEvent(word) {
	      this.inputText = word;
	    }
	  }
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _util = __webpack_require__(25);
	
	var _util2 = _interopRequireDefault(_util);
	
	var _loading = __webpack_require__(117);
	
	var _loading2 = _interopRequireDefault(_loading);
	
	var _header = __webpack_require__(111);
	
	var _header2 = _interopRequireDefault(_header);
	
	var _banner = __webpack_require__(108);
	
	var _banner2 = _interopRequireDefault(_banner);
	
	var _menu = __webpack_require__(113);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	var _body = __webpack_require__(109);
	
	var _body2 = _interopRequireDefault(_body);
	
	var _footer = __webpack_require__(110);
	
	var _footer2 = _interopRequireDefault(_footer);
	
	var _data = __webpack_require__(7);
	
	var _data2 = _interopRequireDefault(_data);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    'mi-header': _header2.default,
	    'mi-banner': _banner2.default,
	    'mi-menu': _menu2.default,
	    'mi-body': _body2.default,
	    'mi-load': _loading2.default,
	    'mi-footer': _footer2.default
	  },
	  created: function created() {
	    var me = this;
	    setTimeout(function () {
	      me.a = true;
	    }, 2000);
	    me.banner = _data2.default.banner;
	    me.menu = _data2.default.menu;
	    me.body = _data2.default;
	    me.bannerList = _data2.default.banner.bannerTop;
	  },
	  mounted: function mounted() {
	    var me = this;
	    console.log(_util2.default.screenSize());
	    this.c_height = 0.711 * _util2.default.screenSize().width;
	    var height = _util2.default.screenSize().width * 256 / 360;
	    this.$refs.index.onscroll = function () {
	      me.headerOpacity = this.scrollTop / height;
	    };
	  },
	  data: function data() {
	    return {
	      banner: {},
	      menu: {},
	      body: {},
	      bannerList: [],
	      scrollX: 0,
	      scrollY: 0,
	      searchState: false,
	      headOpac: '',
	      load: false,
	      a: false,
	      c_height: 0,
	      indexStyle: {
	        height: _util2.default.screenSize().height + 'px',
	        'overflow-y': 'scroll',
	        width: '100%'
	      },
	      headerOpacity: 0
	    };
	  },
	
	  methods: {
	    searchHandle: function searchHandle(Boolean) {
	      if (Boolean) {
	        this.searchState = true;
	      } else {
	        this.searchState = false;
	      }
	    }
	  }
	};

/***/ },
/* 57 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: ['body'],
	  created: function created() {
	    this.intelligenceGoodsList = this.body.intelligenceGoods.intelligenceGoodsList;
	    this.intelligenceGoodsBannerSrc = this.body.intelligenceGoods.img;
	  },
	  data: function data() {
	    return {
	      intelligenceGoodsList: [],
	      intelligenceGoodsBannerSrc: ''
	    };
	  },
	
	  methods: {
	    productEvent: function productEvent() {
	      this.$router.push({ path: '/goods' });
	    }
	  }
	};

/***/ },
/* 58 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: ['menu'],
	  data: function data() {
	    return {};
	  }
	};

/***/ },
/* 59 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: ['body'],
	  created: function created() {
	    this.newGoodsList = this.body.newGoods.newGoodsList;
	    this.newGoodsBannerSrc = this.body.newGoods.img;
	  },
	  data: function data() {
	    return {
	      newGoodsList: [],
	      newGoodsBannerSrc: ''
	    };
	  },
	
	  methods: {
	    productEvent: function productEvent() {
	      this.$router.push({ path: '/goods' });
	    }
	  }
	};

/***/ },
/* 60 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: ['body'],
	  created: function created() {
	    this.newHomeGoodsList = this.body.newHomeGoods.newHomeGoodsList;
	    this.newHomeGoodsBannerSrc = this.body.newHomeGoods.img;
	  },
	  data: function data() {
	    return {
	      newHomeGoodsList: [],
	      newHomeGoodsBannerSrc: ''
	    };
	  },
	
	  methods: {
	    productEvent: function productEvent() {
	      this.$router.push({ path: '/goods' });
	    }
	  }
	};

/***/ },
/* 61 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: ['body'],
	  created: function created() {
	    this.starGoodsList = this.body.starGoods.starGoodsList;
	    this.startGoodsBannerSrc = this.body.starGoods.img;
	  },
	  data: function data() {
	    return {
	      starGoodsList: [],
	      startGoodsBannerSrc: ''
	    };
	  },
	
	  methods: {
	    productEvent: function productEvent() {
	      this.$router.push({ path: '/goods' });
	    }
	  }
	};

/***/ },
/* 62 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: ['load'],
	  data: function data() {
	    return {
	      loadState: true,
	      loadStatus: true
	    };
	  },
	  mounted: function mounted() {
	    var me = this;
	    setTimeout(function () {
	      me.loadState = false;
	      setTimeout(function () {
	        me.loadStatus = false;
	      }, 500);
	    }, 1500);
	  }
	};

/***/ },
/* 63 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    name: 'vModel',
	    created: function created() {
	        console.log(this.type);
	    },
	    props: ['isHeadShow', 'type'],
	    data: function data() {
	        return {
	            isModelShow: false
	        };
	    },
	
	    methods: {
	        popupClick: function popupClick() {},
	        modelClose: function modelClose() {
	            this.isModelShow = false;
	        },
	        modelOpen: function modelOpen() {
	            this.isModelShow = true;
	        },
	        modelBgHide: function modelBgHide() {
	            if (this.type === 'pop') {
	                this.modelClose();
	            }
	        },
	        alert_BtnEvent: function alert_BtnEvent() {
	            this.modelClose();
	            this.$emit('alertEvent');
	        },
	        confirm_BtnEvent: function confirm_BtnEvent(num) {
	            this.modelClose();
	            this.$emit('confirmEvent', num);
	        }
	    }
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _swiper = __webpack_require__(14);
	
	var _swiper2 = _interopRequireDefault(_swiper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {};
	  },
	  mounted: function mounted() {
	    var mySwiper = new _swiper2.default(this.$refs.a, {
	      loop: true,
	      autoplay: 2500
	    });
	    console.log(mySwiper);
	  },
	
	  components: {}
	};

/***/ },
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 84 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 85 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 86 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 87 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 88 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 89 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 90 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 91 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 92 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 93 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 94 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 95 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 96 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 97 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 98 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 99 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 100 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 101 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/img/mitugongzai.99d8881.png";

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(84)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(47),
	  /* template */
	  __webpack_require__(121),
	  /* scopeId */
	  "data-v-13dcc9ec",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(87)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(48),
	  /* template */
	  __webpack_require__(124),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(90)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(49),
	  /* template */
	  __webpack_require__(127),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(86)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(50),
	  /* template */
	  __webpack_require__(123),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(96)
	__webpack_require__(95)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(51),
	  /* template */
	  __webpack_require__(132),
	  /* scopeId */
	  "data-v-5e99edd0",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(100)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(52),
	  /* template */
	  __webpack_require__(136),
	  /* scopeId */
	  "data-v-a2f1f12a",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(99)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(53),
	  /* template */
	  __webpack_require__(135),
	  /* scopeId */
	  "data-v-9bc356be",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(91)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(54),
	  /* template */
	  __webpack_require__(128),
	  /* scopeId */
	  "data-v-40b16e5a",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(98)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(55),
	  /* template */
	  __webpack_require__(134),
	  /* scopeId */
	  "data-v-61e3d24c",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(97)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(57),
	  /* template */
	  __webpack_require__(133),
	  /* scopeId */
	  "data-v-5fe92ce8",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(89)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(58),
	  /* template */
	  __webpack_require__(126),
	  /* scopeId */
	  "data-v-28a509de",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(101)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(59),
	  /* template */
	  __webpack_require__(137),
	  /* scopeId */
	  "data-v-b63411d6",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(92)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(60),
	  /* template */
	  __webpack_require__(129),
	  /* scopeId */
	  "data-v-5334c176",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(93)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(61),
	  /* template */
	  __webpack_require__(130),
	  /* scopeId */
	  "data-v-55c583b5",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(88)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(62),
	  /* template */
	  __webpack_require__(125),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(94)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(63),
	  /* template */
	  __webpack_require__(131),
	  /* scopeId */
	  "data-v-5a539637",
	  /* cssModules */
	  null
	)
	
	
	module.exports = Component.exports


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(83)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(64),
	  /* template */
	  __webpack_require__(120),
	  /* scopeId */
	  "data-v-0d72b8fd",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 120 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    ref: "a",
	    staticClass: "swiper-container"
	  }, [_vm._m(0)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "swiper-wrapper"
	  }, [_c('div', {
	    staticClass: "swiper-slide"
	  }, [_c('img', {
	    attrs: {
	      "src": "http://i8.mifile.cn/v1/a1/89a33760-240c-e5e2-50ff-b8a864a2aba5.webp"
	    }
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "swiper-slide"
	  }, [_c('img', {
	    attrs: {
	      "src": "http://i8.mifile.cn/v1/a1/89a33760-240c-e5e2-50ff-b8a864a2aba5.webp"
	    }
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "swiper-slide"
	  }, [_c('img', {
	    attrs: {
	      "src": "http://i8.mifile.cn/v1/a1/89a33760-240c-e5e2-50ff-b8a864a2aba5.webp"
	    }
	  })])])
	}]}

/***/ },
/* 121 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('keep-alive', [_c('router-view')], 1)
	},staticRenderFns: []}

/***/ },
/* 122 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "app"
	  }, [_c('div', {
	    ref: "index",
	    style: (_vm.indexStyle)
	  }, [_c('mi-load', {
	    attrs: {
	      "load": _vm.load
	    }
	  }), _vm._v(" "), _c('mi-header', {
	    attrs: {
	      "opac": _vm.headerOpacity
	    },
	    on: {
	      "searchEvent": _vm.searchHandle
	    }
	  }), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.a),
	      expression: "a"
	    }]
	  }, [_c('mi-banner', {
	    attrs: {
	      "banner": _vm.banner,
	      "id": "bannerImg"
	    }
	  }), _vm._v(" "), _c('mi-menu', {
	    attrs: {
	      "menu": _vm.menu
	    }
	  }), _vm._v(" "), _c('mi-body', {
	    attrs: {
	      "body": _vm.body
	    }
	  }), _vm._v(" "), _c('div', {
	    staticStyle: {
	      "width": "100%",
	      "height": "60px",
	      "background": "#eee"
	    }
	  }), _vm._v(" "), _c('mi-footer')], 1)], 1)])
	},staticRenderFns: []}

/***/ },
/* 123 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "wripper"
	  }, [_c('mi-img'), _vm._v(" "), _c('mi-buyControl', {
	    ref: "control",
	    attrs: {
	      "goodsAttr": _vm.goodsAttr
	    }
	  }), _vm._v(" "), _c('mi-detail', {
	    attrs: {
	      "detailData": _vm.detailData
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "addCart"
	  }, [_c('div', {
	    staticClass: "home",
	    on: {
	      "click": _vm.toHomeEvent
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "add"
	  }, [_c('span', {
	    on: {
	      "click": _vm.butEvent
	    }
	  }, [_vm._v("立即购买")])]), _vm._v(" "), _c('div', {
	    staticClass: "cart",
	    on: {
	      "click": _vm.addCartEvent
	    }
	  })]), _vm._v(" "), _c('mi-model', {
	    ref: "alert",
	    attrs: {
	      "type": "alert"
	    },
	    on: {
	      "confirmEvent": _vm.alertBtnEvent
	    }
	  }, [_c('div', {
	    staticClass: "alert",
	    slot: "alert"
	  }, [_c('h5', [_vm._v("您选择的产品")]), _vm._v(" "), _c('h6', [_vm._v(_vm._s(_vm.popInfo.title))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.popInfo.ram) + "　　" + _vm._s(_vm.popInfo.color))])])])], 1)
	},staticRenderFns: []}

/***/ },
/* 124 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('div', {
	    staticClass: "buy-control"
	  }, [_c('div', {
	    staticClass: "title"
	  }, [_vm._v(_vm._s(_vm.goodsAttr.title))]), _vm._v(" "), _c('div', {
	    staticClass: "price"
	  }, [_vm._v(_vm._s(_vm.goodsAttr.price) + "元")]), _vm._v(" "), _c('div', {
	    staticClass: "desc"
	  }, [_c('span', {
	    staticClass: "tag"
	  }, [_vm._v("【" + _vm._s(_vm.goodsAttr.desc.tag) + "】")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.goodsAttr.desc.sc))])]), _vm._v(" "), _c('div', {
	    staticClass: "attr"
	  }, [_c('ul', _vm._l((_vm.goodsAttr.attr.color), function(item, index) {
	    return _c('li', {
	      class: {
	        active: index === _vm.colorIndex
	      },
	      on: {
	        "click": function($event) {
	          _vm.checkColorEvent(index)
	        }
	      }
	    }, [_vm._v(_vm._s(item.text) + "\n        ")])
	  })), _vm._v(" "), _c('ul', _vm._l((_vm.goodsAttr.attr.ram), function(item, index) {
	    return _c('li', {
	      class: {
	        active: index === _vm.ramIndex
	      },
	      on: {
	        "click": function($event) {
	          _vm.checkRamEvent(index)
	        }
	      }
	    }, [_vm._v(_vm._s(item.text) + "\n        ")])
	  }))])])])
	},staticRenderFns: []}

/***/ },
/* 125 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.loadStatus),
	      expression: "loadStatus"
	    }],
	    staticClass: "base load-once",
	    class: {
	      remove: !_vm.loadState
	    }
	  }), _vm._v(" "), _c('transition', {
	    attrs: {
	      "name": "fade"
	    }
	  }, [(_vm.load) ? _c('div', {
	    staticClass: "base load"
	  }) : _vm._e()])], 1)
	},staticRenderFns: []}

/***/ },
/* 126 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "menu-box"
	  }, [_c('div', {
	    staticClass: "menu"
	  }, [_c('div', {
	    staticClass: "left"
	  }, [_c('img', {
	    attrs: {
	      "src": _vm.menu.img1
	    }
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "right"
	  }, [_c('img', {
	    attrs: {
	      "src": _vm.menu.img2
	    }
	  }), _vm._v(" "), _c('img', {
	    attrs: {
	      "src": _vm.menu.img3
	    }
	  })])])])
	},staticRenderFns: []}

/***/ },
/* 127 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('div', {
	    staticClass: "tab"
	  }, [_c('span', {
	    class: {
	      'active': _vm.tabState
	    },
	    on: {
	      "click": _vm.tabEvent1
	    }
	  }, [_vm._v("商品详情")]), _vm._v(" "), _c('span', {
	    class: {
	      'active': !_vm.tabState
	    },
	    on: {
	      "click": _vm.tabEvent2
	    }
	  }, [_vm._v("参数")])]), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.tabState),
	      expression: "tabState"
	    }],
	    staticClass: "detail"
	  }, _vm._l((_vm.detailList), function(item) {
	    return _c('img', {
	      attrs: {
	        "src": item
	      }
	    })
	  })), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (!_vm.tabState),
	      expression: "!tabState"
	    }],
	    staticClass: "attr"
	  }, _vm._l((_vm.attrList), function(item) {
	    return _c('img', {
	      attrs: {
	        "src": item
	      }
	    })
	  }))])
	},staticRenderFns: []}

/***/ },
/* 128 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "footer"
	  }, [_c('div', {
	    staticClass: "item",
	    class: {
	      icon11: _vm.footerIndex === 0, icon1: _vm.footerIndex !== 0
	    },
	    on: {
	      "click": function($event) {
	        _vm.footerEvent(0)
	      }
	    }
	  }, [_vm._v("首页")]), _vm._v(" "), _c('div', {
	    staticClass: "item",
	    class: {
	      icon22: _vm.footerIndex === 1, icon2: _vm.footerIndex !== 1
	    },
	    on: {
	      "click": function($event) {
	        _vm.footerEvent(1)
	      }
	    }
	  }, [_vm._v("分类")]), _vm._v(" "), _c('div', {
	    staticClass: "item",
	    class: {
	      icon33: _vm.footerIndex === 2, icon3: _vm.footerIndex !== 2
	    },
	    on: {
	      "click": function($event) {
	        _vm.footerEvent(2)
	      }
	    }
	  }, [_vm._v("购物车")]), _vm._v(" "), _c('div', {
	    staticClass: "item",
	    class: {
	      icon44: _vm.footerIndex === 3, icon4: _vm.footerIndex !== 3
	    },
	    on: {
	      "click": function($event) {
	        _vm.footerEvent(3)
	      }
	    }
	  }, [_vm._v("我")])])
	},staticRenderFns: []}

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "new-box"
	  }, [_c('div', {
	    staticClass: "newHomeGoodsBanner"
	  }, [_c('img', {
	    attrs: {
	      "src": _vm.newHomeGoodsBannerSrc
	    }
	  })]), _vm._v(" "), _vm._l((_vm.newHomeGoodsList), function(good, index) {
	    return _c('div', {
	      class: {
	        'item1': index % 2 === 0, 'item2': index % 2 !== 0
	      },
	      on: {
	        "click": _vm.productEvent
	      }
	    }, [(index !== 0) ? _c('div', {
	      staticClass: "top"
	    }, [_c('img', {
	      attrs: {
	        "src": good.imgSrc
	      }
	    })]) : _vm._e(), _vm._v(" "), (index === 0) ? _c('div', {
	      staticClass: "top",
	      staticStyle: {
	        "margin-bottom": "2px"
	      }
	    }, [_c('img', {
	      attrs: {
	        "src": __webpack_require__(102)
	      }
	    })]) : _vm._e(), _vm._v(" "), (index !== 0) ? _c('div', {
	      staticClass: "bottom"
	    }, [_c('span', {
	      staticClass: "title"
	    }, [_vm._v(_vm._s(good.title))]), _vm._v(" "), _c('span', {
	      staticClass: "desc"
	    }, [_vm._v(_vm._s(good.desc))]), _vm._v(" "), _c('span', {
	      staticClass: "price"
	    }, [_vm._v("￥" + _vm._s(good.price))])]) : _vm._e()])
	  })], 2)
	},staticRenderFns: []}

/***/ },
/* 130 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "star-box"
	  }, [_c('div', {
	    staticClass: "starBanner"
	  }, [_c('img', {
	    attrs: {
	      "src": _vm.startGoodsBannerSrc
	    }
	  })]), _vm._v(" "), _vm._l((_vm.starGoodsList), function(good, index) {
	    return _c('div', {
	      class: {
	        'item1': index % 2 === 0, 'item2': index % 2 !== 0
	      },
	      on: {
	        "click": _vm.productEvent
	      }
	    }, [_c('div', {
	      staticClass: "top"
	    }, [_c('img', {
	      attrs: {
	        "src": good.imgSrc
	      }
	    })]), _vm._v(" "), _c('div', {
	      staticClass: "bottom"
	    }, [_c('span', {
	      staticClass: "title"
	    }, [_vm._v(_vm._s(good.title))]), _vm._v(" "), _c('span', {
	      staticClass: "desc"
	    }, [_vm._v(_vm._s(good.desc))]), _vm._v(" "), _c('span', {
	      staticClass: "price"
	    }, [_vm._v("￥" + _vm._s(good.price))])])])
	  })], 2)
	},staticRenderFns: []}

/***/ },
/* 131 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('transition', {
	    attrs: {
	      "name": "animateBase"
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.isModelShow),
	      expression: "isModelShow"
	    }],
	    staticClass: "screen1",
	    on: {
	      "click": _vm.modelBgHide
	    }
	  }, [_c('div', {
	    staticClass: "model-box"
	  }, [_c('div', {
	    staticClass: "model"
	  }, [_c('div', {
	    staticClass: "main",
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        _vm.popupClick($event)
	      }
	    }
	  }, [(_vm.type == 'pop') ? _c('div', {
	    staticClass: "pop"
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.isHeadShow),
	      expression: "isHeadShow"
	    }],
	    staticClass: "head"
	  }, [_c('span', {
	    staticClass: "title"
	  }, [_vm._v("弹出窗口")]), _vm._v(" "), _c('span', {
	    staticClass: "close",
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        _vm.modelClose($event)
	      }
	    }
	  }, [_vm._v("x")])]), _vm._v(" "), _c('div', {
	    staticClass: "body"
	  }, [_vm._t("modalbody")], 2), _vm._v(" "), _c('div', {
	    staticClass: "foot"
	  }, [_vm._t("modalfoot")], 2)]) : _vm._e(), _vm._v(" "), (_vm.type == 'alert') ? _c('div', [_c('div', {
	    staticClass: "alert"
	  }, [_c('div', {
	    staticClass: "top"
	  }, [_vm._t("alert")], 2), _vm._v(" "), _c('div', {
	    staticClass: "bottom"
	  }, [_c('button', {
	    on: {
	      "click": _vm.alert_BtnEvent
	    }
	  }, [_vm._v("确 认")])])])]) : _vm._e(), _vm._v(" "), (_vm.type == 'confirm') ? _c('div', [_c('div', {
	    staticClass: "confirm"
	  }, [_c('div', {
	    staticClass: "top"
	  }, [_vm._t("confirm")], 2), _vm._v(" "), _c('div', {
	    staticClass: "bottom"
	  }, [_c('button', {
	    staticClass: "radius-left",
	    on: {
	      "click": function($event) {
	        _vm.confirm_BtnEvent(1)
	      }
	    }
	  }, [_vm._v("确 认")]), _vm._v(" "), _c('button', {
	    staticClass: "radius-right",
	    on: {
	      "click": function($event) {
	        _vm.confirm_BtnEvent(0)
	      }
	    }
	  }, [_vm._v("取 消")])])])]) : _vm._e()])])])])])
	},staticRenderFns: []}

/***/ },
/* 132 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "img"
	  }, [_c('div', {
	    staticClass: "control"
	  }, [_c('div', {
	    staticClass: "left hook",
	    on: {
	      "click": _vm.goBackEvent
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "right hook",
	    on: {
	      "click": _vm.goodSearchEvent
	    }
	  })]), _vm._v(" "), _c('div', {
	    ref: "a",
	    staticClass: "swiper-container"
	  }, [_c('div', {
	    staticClass: "swiper-wrapper"
	  }, _vm._l((_vm.bannerList), function(item) {
	    return _c('div', {
	      staticClass: "swiper-slide"
	    }, [_c('img', {
	      attrs: {
	        "src": item
	      }
	    })])
	  })), _vm._v(" "), _c('div', {
	    staticClass: "swiper-pagination"
	  })])])
	},staticRenderFns: []}

/***/ },
/* 133 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "intelligence-box"
	  }, [_c('div', {
	    staticClass: "intelligenceGoodsBanner"
	  }, [_c('img', {
	    attrs: {
	      "src": _vm.intelligenceGoodsBannerSrc
	    }
	  })]), _vm._v(" "), _vm._l((_vm.intelligenceGoodsList), function(good, index) {
	    return _c('div', {
	      class: {
	        'item1': index % 2 === 0, 'item2': index % 2 !== 0
	      },
	      on: {
	        "click": _vm.productEvent
	      }
	    }, [_c('div', {
	      staticClass: "top"
	    }, [_c('img', {
	      attrs: {
	        "src": good.imgSrc
	      }
	    })]), _vm._v(" "), _c('div', {
	      staticClass: "bottom"
	    }, [_c('span', {
	      staticClass: "title"
	    }, [_vm._v(_vm._s(good.title))]), _vm._v(" "), _c('span', {
	      staticClass: "desc"
	    }, [_vm._v(_vm._s(good.desc))]), _vm._v(" "), _c('span', {
	      staticClass: "price"
	    }, [_vm._v("￥" + _vm._s(good.price))])])])
	  })], 2)
	},staticRenderFns: []}

/***/ },
/* 134 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('div', {
	    class: {
	      screen: _vm.focus
	    }
	  }, [_c('div', {
	    staticClass: "top"
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (!_vm.focus),
	      expression: "!focus"
	    }],
	    staticClass: "bg",
	    style: (_vm.bgOpacSty)
	  }), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.focus),
	      expression: "focus"
	    }],
	    staticClass: "bg1"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "main-head"
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (!_vm.focus),
	      expression: "!focus"
	    }],
	    staticClass: "left logo"
	  }), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.focus),
	      expression: "focus"
	    }],
	    staticClass: "left back",
	    on: {
	      "click": _vm.goBackEvent
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "center"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.inputText),
	      expression: "inputText"
	    }],
	    class: {
	      border: _vm.focus
	    },
	    attrs: {
	      "type": "text"
	    },
	    domProps: {
	      "value": _vm._s(_vm.inputText)
	    },
	    on: {
	      "focus": _vm.handleFocus,
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.inputText = $event.target.value
	      }
	    }
	  })]), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (!_vm.focus),
	      expression: "!focus"
	    }],
	    staticClass: "right"
	  }, [_vm._v("登录")]), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.focus),
	      expression: "focus"
	    }],
	    staticClass: "right search"
	  })])]), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.focus),
	      expression: "focus"
	    }],
	    staticClass: "main"
	  }, [_c('div', {
	    staticClass: "title"
	  }, [_vm._v("热门搜索")]), _vm._v(" "), _c('img', {
	    attrs: {
	      "src": _vm.searchImg
	    }
	  }), _vm._v(" "), _c('ul', _vm._l((_vm.hotWord), function(item) {
	    return _c('li', {
	      on: {
	        "click": function($event) {
	          _vm.inputFillEvent(item)
	        }
	      }
	    }, [_vm._v(_vm._s(item))])
	  }))])]), _vm._v(" "), _c('div', {
	    ref: "loading",
	    staticClass: "load",
	    attrs: {
	      "id": "load"
	    }
	  })])
	},staticRenderFns: []}

/***/ },
/* 135 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "body-box"
	  }, [_c('mi-starGoods', {
	    attrs: {
	      "body": _vm.body
	    }
	  }), _vm._v(" "), _c('mi-newGoods', {
	    attrs: {
	      "body": _vm.body
	    }
	  }), _vm._v(" "), _c('mi-intelligenceGoods', {
	    attrs: {
	      "body": _vm.body
	    }
	  }), _vm._v(" "), _c('mi-newHomeGoods', {
	    attrs: {
	      "body": _vm.body
	    }
	  })], 1)
	},staticRenderFns: []}

/***/ },
/* 136 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "banner-box"
	  }, [_c('div', {
	    ref: "swipe",
	    staticClass: "banner-img"
	  }, [_c('img', {
	    attrs: {
	      "src": _vm.banner.img1
	    }
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "bottom"
	  }, [_c('img', {
	    attrs: {
	      "src": _vm.banner.img2
	    }
	  })])])
	},staticRenderFns: []}

/***/ },
/* 137 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "new-box"
	  }, [_c('div', {
	    staticClass: "newGoodsBanner"
	  }, [_c('img', {
	    attrs: {
	      "src": _vm.newGoodsBannerSrc
	    }
	  })]), _vm._v(" "), _vm._l((_vm.newGoodsList), function(good, index) {
	    return _c('div', {
	      class: {
	        'item1': index % 2 === 0, 'item2': index % 2 !== 0
	      },
	      on: {
	        "click": _vm.productEvent
	      }
	    }, [_c('div', {
	      staticClass: "top"
	    }, [_c('img', {
	      attrs: {
	        "src": good.imgSrc
	      }
	    })]), _vm._v(" "), _c('div', {
	      staticClass: "bottom"
	    }, [_c('span', {
	      staticClass: "title"
	    }, [_vm._v(_vm._s(good.title))]), _vm._v(" "), _c('span', {
	      staticClass: "desc"
	    }, [_vm._v(_vm._s(good.desc))]), _vm._v(" "), _c('span', {
	      staticClass: "price"
	    }, [_vm._v("￥" + _vm._s(good.price))])])])
	  })], 2)
	},staticRenderFns: []}

/***/ }
]);
//# sourceMappingURL=app.b5fcc98af3bedc9674f4.js.map