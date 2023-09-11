(self.mvWrapperJsonp = self.mvWrapperJsonp || []).push([[2208], {
    3359: (e,t,i)=>{
        "use strict";
        i.r(t),
        i.d(t, {
            ImaPlayer: ()=>f
        });
        var n = i(7562)
          , s = i(2110)
          , o = i(3528)
          , r = i(5595)
          , a = i(5671)
          , l = (e,t,i)=>new Promise(((n,s)=>{
            var o = e=>{
                try {
                    a(i.next(e))
                } catch (e) {
                    s(e)
                }
            }
              , r = e=>{
                try {
                    a(i.throw(e))
                } catch (e) {
                    s(e)
                }
            }
              , a = e=>e.done ? n(e.value) : Promise.resolve(e.value).then(o, r);
            a((i = i.apply(e, t)).next())
        }
        ));
        const d = "debug" === (0,
        r.Ph)("loglevel", window.location.search) ? "https://imasdk.googleapis.com/js/sdkloader/ima3_debug.js" : "https://imasdk.googleapis.com/js/sdkloader/ima3.js";
        class c {
            static onReady(e) {
                return window.google && window.google.ima ? Promise.resolve(e()) : new Promise((t=>{
                    a(d, (()=>{
                        t(e())
                    }
                    ))
                }
                )).then((e=>e))
            }
            static getDisplayContainer(e) {
                return l(this, null, (function*() {
                    return c.onReady((()=>{
                        const t = new window.google.ima.AdDisplayContainer(e);
                        return t.initialize(),
                        t
                    }
                    ))
                }
                ))
            }
            static getAdsLoader(e) {
                return l(this, null, (function*() {
                    return c.onReady((()=>new window.google.ima.AdsLoader(e)))
                }
                ))
            }
            static enableVPAID() {
                return l(this, null, (function*() {
                    return c.onReady((()=>{
                        const e = window.google.ima.ImaSdkSettings.VpaidMode.ENABLED;
                        window.google.ima.settings.setVpaidMode(e),
                        window.google.ima.settings.setDisableCustomPlaybackForIOS10Plus(!0)
                    }
                    ))
                }
                ))
            }
            static getAdsRequest(e) {
                return l(this, arguments, (function*({vastXml: e, vastUrl: t, height: i, width: n, autoplay: s, muted: o}) {
                    return c.onReady((()=>{
                        const r = new window.google.ima.AdsRequest;
                        return r.adsResponse = e,
                        !r.adsResponse && t && (r.adTagUrl = t),
                        r.linearAdSlotWidth = n,
                        r.linearAdSlotHeight = i,
                        r.nonLinearAdSlotWidth = n,
                        r.nonLinearAdSlotHeight = i,
                        r.setAdWillAutoPlay(s),
                        r.setAdWillPlayMuted(o),
                        r
                    }
                    ))
                }
                ))
            }
        }
        var u = i(2200)
          , h = i(3194)
          , p = i(5662)
          , m = i(9225);
        const g = "\n    <span class='mv-mute-button' role='button' aria-label='Unmute ad' >\n      <img id=\"iconUnmuteAd\" data-pin-nopin=true src=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0nLjcnIHN0cm9rZS13aWR0aD0iMSI+CiAgPHBhdGggZD0iTTE0LDMuMjNWNS4yOUMxNi44OSw2LjE1IDE5LDguODMgMTksMTJDMTksMTUuMTcgMTYuODksMTcuODQgMTQsMTguN1YyMC43N0MxOCwxOS44NiAyMSwxNi4yOCAyMSwxMkMyMSw3LjcyIDE4LDQuMTQgMTQsMy4yM00xNi41LDEyQzE2LjUsMTAuMjMgMTUuNSw4LjcxIDE0LDcuOTdWMTZDMTUuNSwxNS4yOSAxNi41LDEzLjc2IDE2LjUsMTJNMyw5VjE1SDdMMTIsMjBWNEw3LDlIM1oiIC8+Cjwvc3ZnPg== alt='' aria-label='Unmute Ad' />\n    </span>\n  "
          , b = "\n  <span class='mv-mute-button' role='button' aria-label='Mute ad' >\n    <img id=\"iconMuteAd\" data-pin-nopin=true src=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PScuNycgc3Ryb2tlLXdpZHRoPSIxIiBkPSJNMTIsNEw5LjkxLDYuMDlMMTIsOC4xOE00LjI3LDNMMyw0LjI3TDcuNzMsOUgzVjE1SDdMMTIsMjBWMTMuMjdMMTYuMjUsMTcuNTNDMTUuNTgsMTguMDQgMTQuODMsMTguNDYgMTQsMTguN1YyMC43N0MxNS4zOCwyMC40NSAxNi42MywxOS44MiAxNy42OCwxOC45NkwxOS43MywyMUwyMSwxOS43M0wxMiwxMC43M00xOSwxMkMxOSwxMi45NCAxOC44LDEzLjgyIDE4LjQ2LDE0LjY0TDE5Ljk3LDE2LjE1QzIwLjYyLDE0LjkxIDIxLDEzLjUgMjEsMTJDMjEsNy43MiAxOCw0LjE0IDE0LDMuMjNWNS4yOUMxNi44OSw2LjE1IDE5LDguODMgMTksMTJNMTYuNSwxMkMxNi41LDEwLjIzIDE1LjUsOC43MSAxNCw3Ljk3VjEwLjE4TDE2LjQ1LDEyLjYzQzE2LjUsMTIuNDMgMTYuNSwxMi4yMSAxNi41LDEyWiIgLz4KPC9zdmc+ alt='' aria-label='Mute Ad' />\n  </span>\n";
        var y = (e=>(e.adCanPlay = "adCanPlay",
        e.adError = "adError",
        e.adsCompleted = "adsCompleted",
        e.adCompleted = "adCompleted",
        e.started = "started",
        e.impression = "impression",
        e.visibilityChange = "visibilityChange",
        e))(y || {});
        var v = (e,t,i)=>new Promise(((n,s)=>{
            var o = e=>{
                try {
                    a(i.next(e))
                } catch (e) {
                    s(e)
                }
            }
              , r = e=>{
                try {
                    a(i.throw(e))
                } catch (e) {
                    s(e)
                }
            }
              , a = e=>e.done ? n(e.value) : Promise.resolve(e.value).then(o, r);
            a((i = i.apply(e, t)).next())
        }
        ));
        class f extends class {
            constructor(e) {
                this.config = e,
                this.events = y,
                this.eventManager = new h.p(y),
                this._playerState = s.f.init,
                this.isVisible = !1,
                this.enableViewablePlayMode = (0,
                m.r)((()=>{
                    this.onEvent("visibilityChange", (e=>{
                        this.playerState !== s.f.init && (e ? this.play() : this.pause())
                    }
                    )),
                    this.onEvent("started", (()=>{
                        setTimeout((()=>{
                            this.hasNotBeenOnScreen && this.pause()
                        }
                        ), 1e3)
                    }
                    ))
                }
                )),
                this.onViewportChangeHandler = ({config: {container: e}}=this)=>t=>{
                    t.forEach((t=>{
                        t.target === e && (this.isVisible = t.isIntersecting,
                        this.eventManager.trigger("visibilityChange", this.isVisible))
                    }
                    ))
                }
                ,
                this.muted = e.muted,
                this.muteButton = this.createMuteButton(e.container, e.muted),
                this.createViewportObserver()
            }
            get hasNotBeenOnScreen() {
                return this.playerState !== s.f.resume && !1 === this.isVisible
            }
            get playerState() {
                return this._playerState
            }
            onEvent(e, t) {
                this.eventManager.on(e, t)
            }
            handleMuteClick() {
                this.muted ? this.muteButton.innerHTML = b : this.muteButton.innerHTML = g,
                this.muted = !this.muted
            }
            createMuteButton(e, t) {
                const i = document.createElement("div");
                return i.innerHTML = t ? g : b,
                i.style.display = "none",
                i.addEventListener("click", this.handleMuteClick.bind(this)),
                (0,
                u.cn)(i, "mv-outstream-mute"),
                i.style.display = "block",
                e.insertAdjacentElement("afterbegin", i),
                i
            }
            mute() {
                this.muteButton.innerHTML = g,
                this.muted = !0
            }
            createViewportObserver({config: {container: e}}=this) {
                const t = {
                    rootMargin: "0px 0px 0px 0px",
                    threshold: .51
                };
                (0,
                p.c)().onChange(this.onViewportChangeHandler(), t),
                (0,
                p.c)().observe(e, t)
            }
        }
        {
            constructor(e) {
                super(e),
                this.config = e,
                this.onAdsManagerLoadedHandler = this.onAdsManagerLoaded.bind(this)
            }
            static new(e) {
                return v(this, null, (function*() {
                    c.enableVPAID();
                    const t = new f(e);
                    return t.adDisplayContainer = yield c.getDisplayContainer(e.container),
                    t.adsLoader = yield c.getAdsLoader(t.adDisplayContainer),
                    t.adsLoader.getSettings().setNumRedirects(10),
                    t.addLoaderEvents(),
                    t
                }
                ))
            }
            initVideoAd(e) {
                return v(this, arguments, (function*({vastXml: e, vastUrl: t}) {
                    this.cleanup();
                    const {autoplay: i, muted: n, height: o, width: r} = this.config
                      , a = yield c.getAdsRequest({
                        vastXml: e,
                        vastUrl: t,
                        autoplay: i,
                        height: o,
                        width: r,
                        muted: n
                    });
                    this._playerState = s.f.init,
                    this.adsLoader.requestAds(a)
                }
                ))
            }
            play() {
                var e, t;
                this._playerState === s.f.init ? (null == (e = this.adsManager) || e.start(),
                this._playerState = s.f.start) : (null == (t = this.adsManager) || t.resume(),
                this._playerState = s.f.resume)
            }
            pause() {
                var e;
                null == (e = this.adsManager) || e.pause(),
                this._playerState = s.f.pause
            }
            cleanup() {
                this.adsManager && this.adsManager.destroy(),
                this.muteButton.style.display = "none"
            }
            handleMuteClick() {
                var e, t, i;
                super.handleMuteClick();
                if (0 === (null == (e = this.adsManager) ? void 0 : e.getVolume())) {
                    const e = .8;
                    null == (t = this.adsManager) || t.setVolume(e)
                } else
                    null == (i = this.adsManager) || i.setVolume(0)
            }
            addLoaderEvents() {
                this.adsLoader.addEventListener(window.google.ima.AdErrorEvent.Type.AD_ERROR, (e=>this.eventManager.trigger(this.events.adError, e)), !1),
                this.adsLoader.addEventListener(window.google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this.onAdsManagerLoadedHandler, !1)
            }
            onAdsManagerLoaded(e) {
                const t = new window.google.ima.AdsRenderingSettings;
                t.restoreCustomPlaybackStateOnAdBreakComplete = !0,
                t.uiElements = [],
                t.loadVideoTimeout = n.y9;
                this.adsManager = e.getAdsManager({
                    currentTime: 0,
                    duration: 10
                }, t),
                this.initAdsManager(this.adsManager)
            }
            initAdsManager(e) {
                const {muted: t} = this.config;
                t && (null == e || e.setVolume(0),
                super.mute()),
                this.addAdListeners(e);
                try {
                    const {height: t, width: i} = this.config;
                    e.init(i, t, window.google.ima.ViewMode.NORMAL),
                    this.muteButton.style.display = "block",
                    this.play()
                } catch (e) {
                    o.ZP.debug("playAds Error: ", e)
                }
            }
            addAdListeners(e) {
                e.addEventListener(window.google.ima.AdErrorEvent.Type.AD_ERROR, (e=>this.eventManager.trigger(this.events.adError, e))),
                e.addEventListener(window.google.ima.AdEvent.Type.ALL_ADS_COMPLETED, (e=>this.eventManager.trigger(this.events.adsCompleted, e))),
                e.addEventListener(window.google.ima.AdEvent.Type.COMPLETE, (e=>this.eventManager.trigger(this.events.adCompleted, e))),
                e.addEventListener(window.google.ima.AdEvent.Type.STARTED, (e=>this.eventManager.trigger(this.events.started, e))),
                e.addEventListener(window.google.ima.AdEvent.Type.IMPRESSION, (e=>this.eventManager.trigger(this.events.impression, e))),
                e.addEventListener(window.google.ima.AdEvent.Type.AD_CAN_PLAY, (e=>this.eventManager.trigger(this.events.adCanPlay, e)))
            }
        }
    }
    ,
    9514: (e,t,i)=>{
        "use strict";
        i.r(t),
        i.d(t, {
            load: ()=>yi
        });
        var n = i(8129)
          , s = i(700)
          , o = i(5077)
          , r = i(2845);
        function a(e) {
            return !(!e.native || !e.native.video || !e.native.video.vastUrl && !e.native.video.vastXml)
        }
        var l = i(8391)
          , d = i(2321)
          , c = i(6497);
        let u;
        var h;
        (e=>{
            let t;
            e.load = i=>{
                return n = void 0,
                s = null,
                o = function*() {
                    var n, s;
                    const o = null != (s = null == (n = i.offering) ? void 0 : n.offering_code) ? s : "No_Offering_here";
                    u = `https://errors.${o}.com/record`,
                    t = yield c.Z.fetchJson(`${i.launcherUrl}/creativeBlocks`),
                    d.Z.on(d.Z.events.outstreamAdError, (i=>{
                        i.bidResponse.creativeId && (t[i.bidResponse.creativeId] = !0),
                        e.reportCreativeError(i)
                    }
                    ))
                }
                ,
                new Promise(((e,t)=>{
                    var i = e=>{
                        try {
                            a(o.next(e))
                        } catch (e) {
                            t(e)
                        }
                    }
                      , r = e=>{
                        try {
                            a(o.throw(e))
                        } catch (e) {
                            t(e)
                        }
                    }
                      , a = t=>t.done ? e(t.value) : Promise.resolve(t.value).then(i, r);
                    a((o = o.apply(n, s)).next())
                }
                ));
                var n, s, o
            }
            ,
            e.includes = e=>!!t && !!t[e],
            e.reportCreativeError = ({adError: t, bidResponse: i})=>{
                const {creativeId: n, bidder: s, s2sBidder: o} = i
                  , r = o || s
                  , a = t.getVastErrorCode().toString()
                  , l = e.buildErrorUrl(n, r, a);
                c.Z.fetch(l, "GET")
            }
            ,
            e.buildErrorUrl = (e,t,i,n=u)=>{
                const s = new URL(n);
                return s.searchParams.append("creativeId", e),
                s.searchParams.append("bidder", t),
                s.searchParams.append("errorCode", i),
                s.toString()
            }
        }
        )(h || (h = {}));
        var p = i(1711)
          , m = i(8152)
          , g = i(1374);
        const b = 16738488e5
          , y = (Date.now() - b) / 9504e5
          , v = Math.random() < y;
        class f {
            constructor(e, t=h) {
                this.model = e,
                this.creativeBlocks = t,
                this.receivedBids = [],
                this.ttlOverrideValue = 60
            }
            addBids(e) {
                for (const i of e) {
                    if (this.creativeBlocks.includes(i.creativeId)) {
                        p.ZP.new(this.model).record("creativeBlocked", i);
                        continue
                    }
                    let e;
                    const n = i.adUnitCode.match(/_(\d+)_/)
                      , r = n ? parseInt(n[1]) : 1;
                    if (i.number = r,
                    i.adUnitCode.includes("_outstream") ? i.isOutstream = !0 : i.adUnitCode.includes("_ibv") && (i.isIBV = !0),
                    i.isOutstream || i.isIBV)
                        e = s.CP.getOutstreamFloor(this.model, (0,
                        m.BL)(i.adUnitCode)),
                        this.convertOutstreamBidsAdunits(i);
                    else if (a(i))
                        e = s.CP.getOutstreamFloor(this.model, (0,
                        m.BL)(i.adUnitCode));
                    else if (i.mediaType === o.D.video) {
                        if (e = s.CP.getVideoFloor(this.model),
                        !(t = i).vastUrl && !t.vastXml)
                            continue
                    } else
                        e = s.CP.getDisplayFloor(this.model, (0,
                        m.BL)(i.adUnitCode)),
                        i.height && i.height > l.H8 && (e *= s.ZW);
                    i.cpm >= e && (i.mediaType === o.D.video && (i.ttl = Math.min(i.ttl, 600)),
                    i.url = window.location.href,
                    this.receivedBids.push(i));
                    const d = this.model.llCpm;
                    if (v && i.cpm >= d && i.mediaType !== o.D.video) {
                        const e = !0;
                        g.ZP.renderLazyAds(document.body, e)
                    }
                }
                var t
            }
            convertOutstreamBidsAdunits(e) {
                let t = e.adUnitCode;
                t = t.replace("_outstream_desktop", ""),
                t = t.replace("_outstream_mobile", ""),
                t = t.replace("_ibv_desktop", ""),
                t = t.replace("_ibv_mobile", ""),
                e.outstreamAdUnitCode = e.adUnitCode,
                e.adUnitCode = t
            }
            getHighestBidData(e, t, i={}) {
                const n = this.getHbCountForSlot(e)
                  , s = this.popHighestBidForSlot(e, i);
                return {
                    hbCount: n,
                    highestBid: s,
                    currentBidWon: !(!s || !s.adId) && s.adId !== (t.targeting && t.targeting.hb_adid)
                }
            }
            popHighestBidForSlot(e, t={}) {
                const i = this.getHighestBidForSlot(e, t);
                return function(e, t) {
                    const i = e.indexOf(t);
                    -1 !== i && e.splice(i, 1)
                }(this.receivedBids, i),
                i
            }
            getBiddersForSlot(e) {
                const t = {};
                return this.getValidBidsForSlot(e).forEach((e=>{
                    t[e.bidder] = !0
                }
                )),
                Object.keys(t)
            }
            getSize() {
                return this.receivedBids.length
            }
            getHbCountForSlot(e, t={}) {
                const i = this.getValidBidsForSlot(e, t);
                return i.length > 20 ? 20 : i.length
            }
            getValidBidsForSlot(e, t={}) {
                this.cleanPool();
                const i = e.id
                  , n = e.sizes;
                return this.receivedBids.filter((s=>{
                    if (s.url !== window.location.href)
                        return !1;
                    if (n && s.width && s.height && e.refreshSizeRestricted)
                        if (s.isOutstream) {
                            const e = Math.max(...n.map((e=>Array.isArray(e) && e[1] || 0)));
                            if (s.height > e)
                                return !1
                        } else {
                            const e = s.width <= 1 && s.height <= 1 ? "fluid" : [s.width, s.height];
                            if (!n.reduce(((t,i)=>!!t || typeof i == typeof e && ("string" == typeof i ? i === e : i[0] === e[0] && i[1] === e[1])), !1))
                                return !1
                        }
                    if (s.adUnitCode.replace(/_[0-9]+/g, "") !== i.replace(/_[0-9]+/g, ""))
                        return !1;
                    if ("GutterAtf" === e.type) {
                        const e = n[0];
                        if (!e || e[0] !== s.width || e[1] !== s.height)
                            return !1
                    }
                    return !((s.isOutstream || s.isIBV) && !e.meetsOutstreamCriteria()) && !!function(e, t) {
                        if (void 0 !== t.startDelay && !function(e, t) {
                            var i, n, s, o, a, l;
                            if ((null == (i = e.bidRequest) ? void 0 : i.bidder) === r.SL.indexExchange)
                                return w((null == (s = null == (n = e.bidRequest.mediaTypes) ? void 0 : n.video) ? void 0 : s.startdelay) || 0, t);
                            if ((null == (o = e.bidRequest) ? void 0 : o.bidder) === r.SL.pubmatic)
                                return w((null == (l = null == (a = e.bidRequest.mediaTypes) ? void 0 : a.video) ? void 0 : l.startdelay) || 0, t);
                            return !0
                        }(e, t.startDelay))
                            return !1;
                        return !0
                    }(s, t)
                }
                ))
            }
            getHighestBidForSlot(e, t={}) {
                let i = null;
                return this.getValidBidsForSlot(e, t).forEach((e=>{
                    i ? e.cpm > i.cpm && (i = e) : i = e
                }
                )),
                i
            }
            cleanPool() {
                const e = Date.now() + 1e3;
                this.receivedBids = this.receivedBids.filter((t=>t.responseTimestamp + 1e3 * t.ttl > e))
            }
        }
        function w(e, t) {
            return !!e == !!t
        }
        var S = i(9353)
          , A = i(7363)
          , T = i(3769);
        const M = class {
            constructor(e, t) {
                window.$adManagementConfig.web.fillHints = ()=>(this.render(),
                !0),
                this.hintConfig = {
                    desktopSelector: M.DESKTOP_SELECTOR,
                    mobileSelector: M.MOBILE_SELECTOR,
                    prebidFacade: e,
                    slotFactory: t
                },
                this.render()
            }
            render() {
                T.k.addSlotsToHints(this.hintConfig)
            }
        }
        ;
        let C = M;
        C.MOBILE_SELECTOR = ".mv_slot_target, .mv_slot_target_mobile",
        C.DESKTOP_SELECTOR = ".mv_slot_target, .mv_slot_target_desktop";
        const x = {
            init({indexExchange: e}, {all: t}) {
                e && !t && function() {
                    window.headertag || (window.headertag = {});
                    window.headertag.getIdentityInfo = ()=>{
                        const e = window.localStorage.getItem("idl_env")
                          , t = window.localStorage.getItem("_unifiedId")
                          , i = window.localStorage.getItem("IXWRAPPERLiveRampIp")
                          , n = window.localStorage.getItem("IXWRAPPERAdserverOrgIp")
                          , s = JSON.parse(decodeURIComponent(t || n || "{}"))
                          , o = [];
                        for (const e in s)
                            o.push({
                                id: s[e],
                                ext: {
                                    rtiPartner: e
                                }
                            });
                        return {
                            AdserverOrgIp: {
                                data: {
                                    source: "adserver.org",
                                    uids: o
                                },
                                responsePending: !1
                            },
                            LiveRampIp: {
                                data: {
                                    source: "liveramp.com",
                                    uids: [{
                                        id: e || i,
                                        ext: {
                                            rtiPartner: "idl"
                                        }
                                    }]
                                },
                                responsePending: !1
                            }
                        }
                    }
                }()
            }
        };
        var k = i(6039)
          , _ = i(9906)
          , O = i(2200)
          , I = i(953);
        class P extends _.g7 {
            constructor(e, t, i) {
                super(P.setupInterstitialSlot(), e),
                this.model = e,
                this.blocklist = t,
                this.prebidFacade = i,
                this.slotName = "interstitial",
                this.lazy = !0,
                this.outOfPage = !0,
                this.adUnitId = k.A.isMobileOrTablet ? "interstitial_mobile" : "interstitial_desktop",
                this._sizes = this.adSizes;
                const n = this.blocklist.isBlockListed(this);
                k.A.isMobileOrTablet && !e.enable_interstitial_ads || !k.A.isMobileOrTablet && !e.enable_desktop_interstitial_ads || n || (I.Z.add(this),
                (0,
                O.AE)((()=>{
                    setTimeout((()=>{
                        P.canDisplayInterstitial() && this.prebidFacade.requestBids([this], this.timeout.value)
                    }
                    ), 6e3)
                }
                )))
            }
            static setupInterstitialSlot() {
                return {
                    type: "Interstitial",
                    selector: ".mv-find-nothing-plz",
                    insertPosition: void 0,
                    refreshTime: void 0
                }
            }
            static canDisplayInterstitial() {
                const e = JSON.parse(localStorage.getItem("__lsv__"));
                if (e) {
                    const t = 36e5;
                    return (new Date).getTime() - e[0] > t
                }
                return !0
            }
            get adSizes() {
                const e = [];
                return k.A.isMobile ? e.push([300, 250], [320, 480]) : k.A.isTablet ? e.push([336, 280], [320, 480]) : e.push([320, 480], [300, 250], [336, 280]),
                e
            }
        }
        var E = i(2946);
        const D = class {
            constructor(e, t) {
                this.hintConfig = {
                    desktopSelector: D.SELECTOR,
                    mobileSelector: D.SELECTOR,
                    prebidFacade: e,
                    slotFactory: t,
                    slot: D.SLOT_CLASS
                },
                this.render()
            }
            render() {
                T.k.addSlotsToHints(this.hintConfig)
            }
        }
        ;
        let B = D;
        B.SELECTOR = ".mv-create-list-target",
        B.SLOT_CLASS = "Content";
        var R = i(1577)
          , L = Object.defineProperty
          , z = Object.getOwnPropertySymbols
          , N = Object.prototype.hasOwnProperty
          , $ = Object.prototype.propertyIsEnumerable
          , j = (e,t,i)=>t in e ? L(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : e[t] = i;
        function F() {
            var e;
            const t = null == (e = window.navigator) ? void 0 : e.globalPrivacyControl;
            if (t) {
                const e = window.$adManagementConfig.bowser.getParser(window.navigator.userAgent);
                window.$adManagementConfig.newrelic.addPageAction("GPCSet", ((e,t)=>{
                    for (var i in t || (t = {}))
                        N.call(t, i) && j(e, i, t[i]);
                    if (z)
                        for (var i of z(t))
                            $.call(t, i) && j(e, i, t[i]);
                    return e
                }
                )({
                    errorMessage: "Global Privacy Controls is set, skipping"
                }, e.parsedResult))
            }
            return !!t
        }
        var H = i(2379)
          , U = i(8858)
          , W = i(7562)
          , G = i(6091)
          , V = i(3222)
          , Z = i(5595)
          , q = i(2456)
          , Q = i(7713)
          , Y = i(3528)
          , J = i(958)
          , K = i(3322)
          , X = i(9909);
        class ee extends _.g7 {
            constructor() {
                super(...arguments),
                this.slotName = "video"
            }
            get id() {
                return "video"
            }
        }
        var te = i(9860)
          , ie = i(2183)
          , ne = i(6135)
          , se = Object.defineProperty
          , oe = Object.defineProperties
          , re = Object.getOwnPropertyDescriptors
          , ae = Object.getOwnPropertySymbols
          , le = Object.prototype.hasOwnProperty
          , de = Object.prototype.propertyIsEnumerable
          , ce = (e,t,i)=>t in e ? se(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : e[t] = i
          , ue = (e,t)=>{
            for (var i in t || (t = {}))
                le.call(t, i) && ce(e, i, t[i]);
            if (ae)
                for (var i of ae(t))
                    de.call(t, i) && ce(e, i, t[i]);
            return e
        }
          , he = (e,t)=>oe(e, re(t))
          , pe = (e,t,i)=>new Promise(((n,s)=>{
            var o = e=>{
                try {
                    a(i.next(e))
                } catch (e) {
                    s(e)
                }
            }
              , r = e=>{
                try {
                    a(i.throw(e))
                } catch (e) {
                    s(e)
                }
            }
              , a = e=>e.done ? n(e.value) : Promise.resolve(e.value).then(o, r);
            a((i = i.apply(e, t)).next())
        }
        ));
        const me = class {
            constructor(e, t, i, n) {
                this.webModel = e,
                this.keywordService = t,
                this.liftTest = i,
                this.auctionHouse = n,
                this.inited = !1
            }
            init(e) {
                return pe(this, null, (function*() {
                    if (!this.inited) {
                        if (this.inited = !0,
                        window.pbjs)
                            this.prebid = window.pbjs;
                        else {
                            const e = yield Promise.all([i.e(8788), i.e(9598)]).then(i.bind(i, 5473));
                            this.prebid = e.default
                        }
                        this.videoPrebidManager = new V.default(e,this.webModel,this.prebid,this.auctionHouse,this.liftTest),
                        this.slot = new ee(me.slotModel,this.webModel),
                        I.Z.add(this.slot)
                    }
                }
                ))
            }
            getAdTagAndHighBid(e) {
                return pe(this, arguments, (function*(e, t={}, i=!1) {
                    if ((0,
                    Z.DY)("test", "skippable"))
                        return {
                            adTagUrl: W.sY,
                            onAdStart: ()=>{}
                        };
                    if (e.test)
                        return {
                            adTagUrl: W.KB,
                            onAdStart: ()=>{}
                        };
                    let n = [];
                    const s = yield this.getAdTagHelper(e, t, i);
                    return n = n.concat(s.callbacks),
                    {
                        adTagUrl: `${W.Je}?${(0,
                        Z.nB)(s.params)}`,
                        highBid: s.highBid,
                        onAdStart: ()=>{
                            n.forEach((e=>e()))
                        }
                    }
                }
                ))
            }
            getNextAdTagAndHighBid(e) {
                return pe(this, arguments, (function*(e, t={}, i=!1) {
                    var n;
                    let s;
                    this.inited || (yield this.init(e));
                    let o = {};
                    const r = {
                        id: this.videoPrebidManager.options.adunitId
                    }
                      , a = [];
                    if (!i) {
                        const t = this.videoPrebidManager.getFormattedBidFromAuctionHouse({
                            startDelay: e.startDelay
                        }, r);
                        o = t.formattedBid,
                        s = t.highBid,
                        this.slot.highestPrebid = s,
                        (null == (n = null == s ? void 0 : s.ext) ? void 0 : n.iiq) && a.push(this.generateCacheCheck(s).bind(this))
                    }
                    const l = yield this.getTcData()
                      , d = this.createAdTagParams(e, o, t, l);
                    return {
                        adTagUrl: `${W.Je}?${(0,
                        Z.nB)(d)}`,
                        highBid: s,
                        onAdStart: ()=>{
                            a.forEach((e=>e()))
                        }
                    }
                }
                ))
            }
            getAdTagHelper(e) {
                return pe(this, arguments, (function*(e, t={}, i=!1) {
                    this.inited || (yield this.init(e));
                    let n, s = {};
                    const o = {
                        id: this.videoPrebidManager.options.adunitId
                    }
                      , r = [];
                    if (!i && e.prebid) {
                        yield this.videoPrebidManager.runVideoAuction({
                            startDelay: e.startDelay
                        });
                        const t = this.videoPrebidManager.getFormattedBidFromAuctionHouse({
                            startDelay: e.startDelay
                        }, o);
                        s = t.formattedBid,
                        n = t.highBid,
                        this.slot.highestPrebid = n,
                        n && r.push(this.generateCacheCheck(n).bind(this))
                    }
                    const a = yield this.getTcData();
                    return {
                        params: this.createAdTagParams(e, s, t, a),
                        highBid: n,
                        callbacks: r
                    }
                }
                ))
            }
            createAdTagParams(e, t, i={}, n) {
                var o;
                const r = this.getBaseParams(e)
                  , a = K.Z.amazonTargeting[e.adunitId] || {}
                  , l = this.webModel.mcmNetworkCode
                  , d = (0,
                te.B5)(s.CP.getVideoFloor(this.webModel))
                  , c = null == (o = this.slot) ? void 0 : o.getAdUnitPathMode()
                  , u = this.webModel.offering.gam_network_code
                  , h = "mcm" === c ? `/${u},${l}/${this.webModel.adunit}/video` : `/${u}/${this.webModel.adunit}/video`
                  , p = {
                    correlator: Math.round(Date.now() / 1e3),
                    cust_params: encodeURIComponent((0,
                    Z.nB)(he(ue(ue(ue({}, r), t), i), {
                        amznbid: a.amznbid,
                        amznadj: a.amznadj,
                        amznbidub: a.amznbidub,
                        amzniid: a.amzniid,
                        amznp: a.amznp,
                        bidFloor: d,
                        gid: ie.iJ.gid || X.Z.gid,
                        popout_placement: this.webModel.videoSettings.mobile_popout_placement,
                        UR: this.calculateAndGetUR(t)
                    }))),
                    description_url: encodeURIComponent(e.permalink),
                    env: "vp",
                    gdfp_req: "1",
                    impl: "s",
                    iu: encodeURIComponent(h),
                    npa: e.npa || 0,
                    output: "xml_vast3",
                    sz: "640x480",
                    unviewed_position_start: "1",
                    url: encodeURIComponent(window.location.href),
                    vad_type: "linear",
                    vpos: e.startDelay ? "midroll" : "preroll",
                    addtl_consent: n
                };
                return window.__tcfapi && delete p.npa,
                n || delete p.addtl_consent,
                p
            }
            getBaseParams(e) {
                var t;
                let i = ue(ue(ue({
                    google: this.webModel.google ? "1" : null,
                    player_group: J.ZP.group.name,
                    player_version: J.ZP.group.version,
                    slot: this.getAdUnitType(e),
                    test: e.test,
                    up_next: e.videosPlayed || (e.playlist.length ? 0 : null),
                    video_id: e.slug,
                    video_num: e.videoNumber,
                    video_service: 3,
                    hb_liv: this.webModel.videoLineItemVersion,
                    tam_liv: W.ee,
                    wrapper_group: (0,
                    U.Z)(window, "$adManagementConfig.web.model.versionGroup.name"),
                    s2sVersion: (0,
                    q.oH)().name,
                    wswy: this.webModel.wswy,
                    groupm: this.webModel.group_m_approved ? "1" : "0"
                }, this.getConditionalBaseParams(e)), this.webModel.customTargeting), this.keywordService.getResults());
                if (!e.omitFloorParams) {
                    const e = `${Math.floor(100 * Math.random()) + 1}`
                      , n = new Date
                      , s = null == (t = this.liftTest.getPartnerLiftValue()) ? void 0 : t.join(",");
                    i = he(ue({}, i), {
                        partnerLift: s,
                        bucket: e,
                        day: n.getUTCDate().toString(),
                        dow: n.getUTCDay().toString(),
                        hour: n.getUTCHours().toString(),
                        month: String(n.getUTCMonth() + 1)
                    })
                }
                return (0,
                G.mT)(i)
            }
            getConditionalBaseParams(e) {
                const t = window.$adManagementConfig.web.model
                  , i = t.categories.map((e=>e.slug))
                  , n = t.optouts.map((e=>e.slug))
                  , s = {};
                return n.length && (s.optout = n.join(",")),
                i.length && (s.categories = i.map((e=>e.substring(0, 40))).join(",")),
                e.autoplay ? ("video" === e.unitType ? s.ap = e.contentWidth >= 400 ? 2 : 1 : s.ap = 3,
                s.ctp = "0") : (s.ap = "0",
                s.ctp = "1"),
                s
            }
            calculateAndGetUR(e) {
                const t = e.hb_pb ? parseFloat(e.hb_pb) : 0
                  , i = s.CP.getVideoFloor(this.webModel);
                return (0,
                Q.sS)(Math.max(t, i))
            }
            getAdUnitType(e) {
                return e.autoplay && e.mobile ? "adhesion_video" : e.autoplay && !e.mobile ? "sticky_video" : e.unitType
            }
            getTcData() {
                return pe(this, null, (function*() {
                    try {
                        return window.__tcfapi ? yield new Promise(((e,t)=>{
                            window.__tcfapi("getTCData", 2, ((i,n)=>n ? e(i.addtlConsent) : t()))
                        }
                        )) : null
                    } catch (e) {
                        return Y.ZP.custom(["debug", "gpdr"], "GDPR: error getting tcData from window.__tcfapi"),
                        null
                    }
                }
                ))
            }
            generateCacheCheck(e) {
                return ()=>pe(this, null, (function*() {
                    !!e.videoCacheKey && (yield this.cacheCheck(e.videoCacheKey)) && (0,
                    ne.CK)(e)
                }
                ))
            }
            cacheCheck(e) {
                return pe(this, null, (function*() {
                    return 200 === (yield fetch(`${this.webModel.videoCacheUrl}/impression/query?uuid=${e}`)).status
                }
                ))
            }
        }
        ;
        let ge = me;
        ge.slotModel = {
            selector: "placeholder",
            insertPosition: "afterbegin",
            type: "Video"
        };
        var be = i(5671)
          , ye = i(4222)
          , ve = i(8100)
          , fe = i(7856)
          , we = i(3583);
        class Se {
            constructor(e, t) {
                this.webModel = e,
                this.slotFactory = t;
                let i = !1;
                k.A.isMobile ? (i = e.adhesion_mobile,
                this.slotId = "adhesion_mobile") : k.A.isTablet ? (i = e.adhesion_tablet,
                this.slotId = "adhesion_tablet") : (i = e.adhesion_desktop,
                this.slotId = "adhesion_desktop"),
                this.renderedPromise = i ? new Promise((e=>{
                    (0,
                    O.AE)((()=>{
                        const t = this.setupAdhesionSlotModel(this.webModel);
                        this.createAndDisplaySlot(t).then((()=>{
                            e()
                        }
                        ))
                    }
                    ))
                }
                )) : Promise.resolve()
            }
            createAndDisplaySlot(e) {
                return t = this,
                i = null,
                n = function*() {
                    try {
                        const t = yield this.slotFactory.new(e);
                        return this.createdSlot = t,
                        t
                    } catch (e) {
                        Y.ZP.debug(e)
                    }
                }
                ,
                new Promise(((e,s)=>{
                    var o = e=>{
                        try {
                            a(n.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                      , r = e=>{
                        try {
                            a(n.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                      , a = t=>t.done ? e(t.value) : Promise.resolve(t.value).then(o, r);
                    a((n = n.apply(t, i)).next())
                }
                ));
                var t, i, n
            }
            setupAdhesionSlotModel(e) {
                const t = e.adhesion_selector || "body"
                  , i = e.adhesion_position || "beforeend"
                  , n = e.adhesion_mobile_selector
                  , s = e.adhesion_mobile_position;
                return {
                    type: "Adhesion",
                    allowSelector: e.adhesion_allow_selector,
                    selector: t,
                    insertPosition: i,
                    mobileSelector: n,
                    mobileInsertPosition: s,
                    refreshTime: we.Q0 || void 0
                }
            }
        }
        var Ae = i(5629)
          , Te = i(2726)
          , Me = (e,t,i)=>new Promise(((n,s)=>{
            var o = e=>{
                try {
                    a(i.next(e))
                } catch (e) {
                    s(e)
                }
            }
              , r = e=>{
                try {
                    a(i.throw(e))
                } catch (e) {
                    s(e)
                }
            }
              , a = e=>e.done ? n(e.value) : Promise.resolve(e.value).then(o, r);
            a((i = i.apply(e, t)).next())
        }
        ));
        class Ce {
            constructor(e, t, i, n) {
                if (this.webModel = e,
                this.slotFactory = t,
                this.blocklist = i,
                this.prebidFacade = n,
                this.handleCTPClick = ()=>{
                    var e;
                    null == (e = this.createdSlot) || e.onClose()
                }
                ,
                window.addEventListener(J.yq, this.handleCTPClick),
                !this.shouldDisplayUniversalPlayer())
                    return this.renderedPromise = Promise.resolve(),
                    void this.setupUvpListener();
                this.renderedPromise = new Promise((e=>{
                    (0,
                    O.AE)((()=>{
                        this.initUniversalPlayer().then((()=>{
                            e()
                        }
                        ))
                    }
                    ))
                }
                ))
            }
            initUniversalPlayer() {
                return Me(this, null, (function*() {
                    if (this.createdSlot && !Te.UniversalPlayer.hasBeenClosed)
                        return;
                    return yield this.createAndDisplaySlot(this.slotFactory)
                }
                ))
            }
            setupUvpListener() {
                return Me(this, null, (function*() {
                    window.addEventListener("mv-init-uvp", (()=>Me(this, null, (function*() {
                        const e = yield this.initUniversalPlayer();
                        e && this.prebidFacade.requestBids([e], e.timeout.value)
                    }
                    ))))
                }
                ))
            }
            shouldDisplayUniversalPlayer() {
                const e = !!document.querySelector(`.${J.Y0}[data-autoplay=true],.${J.Y0}[data-automobile=true]`)
                  , t = !k.A.isMobileOrTablet
                  , i = !t && !!this.webModel.universal_player_mobile && !this.blocklist.contains("universal_player_mobile");
                return (t && !!this.webModel.universal_player_desktop && !this.blocklist.contains("universal_player_desktop") || i) && !e
            }
            setupUniversalPlayerSlot() {
                return {
                    type: "UniversalPlayer",
                    allowSelector: this.webModel.universal_player_allow_selector,
                    selector: "body",
                    insertPosition: "beforeend",
                    refreshTime: Ae.OUTSTREAM_REFRESH_TIME
                }
            }
            createAndDisplaySlot(e) {
                return Me(this, null, (function*() {
                    try {
                        const t = yield e.new(this.setupUniversalPlayerSlot());
                        return this.createdSlot = t,
                        t
                    } catch (e) {
                        Y.ZP.debug(e)
                    }
                }
                ))
            }
        }
        var xe = i(2783);
        class ke {
            constructor(e, t, i, n) {
                this.model = e,
                this.slotFactory = t,
                this.prebidFacade = i,
                this.blocklist = n,
                this.renderedPromise = new Promise((e=>{
                    (0,
                    O.AE)((()=>{
                        this.render().then((()=>{
                            e()
                        }
                        ))
                    }
                    ))
                }
                ))
            }
            render() {
                return e = this,
                t = null,
                i = function*() {
                    for (const e of this.model.slots)
                        e.lazy || (_e(e) ? Y.ZP.debug(`${e.type} disabled for Desktop Pagespeed Optimization`) : yield this.slotFactory.new(e));
                    const e = new Ce(this.model,this.slotFactory,this.blocklist,this.prebidFacade)
                      , t = new Se(this.model,this.slotFactory)
                      , i = new xe.T(this.model,this.slotFactory);
                    yield Promise.all([t.renderedPromise, e.renderedPromise, i.renderedPromise]);
                    let n = I.Z.all().filter((e=>!e.lazy));
                    const s = n.map((e=>e.timeout.value))
                      , o = Math.max(...s);
                    n = function(e, t) {
                        if ((0,
                        Z.DY)("test", "outstream")) {
                            const {soloSlots: i, theRest: n} = function(e) {
                                return e.reduce(((e,t)=>("UniversalPlayer" === t.type || k.A.isMobileOrTablet && "Adhesion" === t.type ? e.soloSlots.push(t) : e.theRest.push(t),
                                e)), {
                                    soloSlots: [],
                                    theRest: []
                                })
                            }(e);
                            e = n,
                            i.forEach((e=>{
                                t.requestBids([e], e.timeout.value)
                            }
                            ))
                        }
                        return e
                    }(n, this.prebidFacade),
                    this.prebidFacade.requestBids(n, o).then((()=>{
                        be.done(ye.w.nonLazyRequestsLoaded)
                    }
                    )),
                    setTimeout((()=>{
                        be.done(ye.w.nonLazyRequestsLoaded)
                    }
                    ), 5e3)
                }
                ,
                new Promise(((n,s)=>{
                    var o = e=>{
                        try {
                            a(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                      , r = e=>{
                        try {
                            a(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                      , a = e=>e.done ? n(e.value) : Promise.resolve(e.value).then(o, r);
                    a((i = i.apply(e, t)).next())
                }
                ));
                var e, t, i
            }
        }
        function _e(e) {
            return ((0,
            fe.WA)() || (0,
            fe.CX)()) && !(0,
            ve.T)(e)
        }
        var Oe = i(7825);
        class Ie {
            constructor(e, t) {
                if (this.blocklist = t,
                this.loaded = !1,
                !e.chicory)
                    return this;
                d.Z.on(d.Z.events.slotWrapperRenderEnded, (e=>this.load(e)))
            }
            load(e) {
                const t = this.blocklist.all || this.blocklist.contains("chicory");
                !(e instanceof Oe.Recipe && e.target) || e.target.getAttribute("data-disable-chicory") || this.blocklist.contains(e.adUnitId) || t || this.loaded || (Y.ZP.debug("Loading Chicory"),
                this.loaded = !0,
                be("//www.chicoryapp.com/widget_v2/?location=below-ingredient&source=mediavine", "chicory"))
            }
        }
        class Pe {
            constructor(e, t=window) {
                if (this._window = t,
                !e.mediavine_comscore || void 0 !== (0,
                Z.Ph)("disableComscore") || !e.enable_mvp_branding)
                    return;
                this._window._comscore = this._window._comscore || [],
                this._window._comscore.push({
                    c1: "2",
                    c2: "27053452"
                });
                const i = this.getComscoreUrl();
                try {
                    be(i, ye.w.comscore)
                } catch (e) {}
            }
            getComscoreUrl() {
                return `${"https:" === this._window.document.location.protocol ? "https://sb." : "http://b."}scorecardresearch.com/beacon.js`
            }
        }
        var Ee = i(8250)
          , De = i(6616);
        const Be = {
            default: {
                mobile: .28,
                desktop: .25,
                buffer: 2
            },
            medium: {
                mobile: .24,
                desktop: .2,
                buffer: 2
            },
            low: {
                mobile: .2,
                desktop: .15,
                buffer: 3
            },
            none: {
                mobile: 0,
                desktop: 0,
                buffer: 0
            }
        };
        class Re {
            constructor(e, t) {
                this.model = e,
                this.slotFactory = t,
                this.SLOT_CLASS = "Recipe",
                this.startingParagraphNumber = 0,
                this.endingParagraphNumber = 0,
                this.contentRequireText = De.$.anywhere,
                this.target = [".wprm-recipe-instructions-container", ".tasty-recipes-instructions", ".mv-create-instructions-slot-v2", ".mv-create-notes-slot-v2", ".mv-create-after-supplies-slot-v2"].join(", "),
                this.divBuster = !0,
                this.listBuster = !0;
                const i = Be[e.recipe_instruction_density || "default"];
                this.density = k.A.isMobileOrTablet ? i.mobile : i.desktop,
                this.minParagraphBuffer = i.buffer,
                this.unbustableSelector = e.divbuster_exclusions,
                (0,
                O.AE)((()=>{
                    this.render()
                }
                ))
            }
            render() {
                if (!this.model.dynamic_recipe_slots || "none" === this.model.recipe_instruction_density)
                    return;
                Array.from(document.querySelectorAll(`${this.target}`)).forEach((e=>this.dynamicallyCreateSlots(e)))
            }
            dynamicallyCreateSlots(e) {
                if (!(e && e instanceof Element))
                    return Y.ZP.debug("Mediavine: Must provide a valid element to insert ads into.", e),
                    !1;
                if ("true" === e.getAttribute("data-recipe-ads-inserted"))
                    return !1;
                e.setAttribute("data-recipe-ads-inserted", "true");
                return new Ee.ZP({
                    slotFactory: this.slotFactory,
                    slotClass: this.SLOT_CLASS,
                    target: e,
                    startingParagraphNumber: this.startingParagraphNumber,
                    endingParagraphNumber: this.endingParagraphNumber,
                    density: this.density,
                    contentRequireText: this.contentRequireText,
                    minParagraphBuffer: this.minParagraphBuffer,
                    divBuster: this.divBuster,
                    listBuster: this.listBuster,
                    unbustableSelector: this.unbustableSelector,
                    optShortFormContent: !1,
                    optimizeCLSMode: !1,
                    minSlotsToInsert: 1,
                    displayContentAfterFlex: !1
                }).createSlots(),
                !0
            }
        }
        var Le = i(8982)
          , ze = i(9)
          , Ne = i(7457);
        function $e(e) {
            var t = window.document.body
              , i = e.ad
              , n = e.adUrl
              , s = e.width
              , o = e.height;
            if ("video" === e.mediaType)
                console.log("Error trying to write ad.");
            else if (i) {
                var r = document.createElement("iframe");
                if (r.setAttribute("FRAMEBORDER", "0"),
                r.setAttribute("SCROLLING", "no"),
                r.setAttribute("MARGINHEIGHT", "0"),
                r.setAttribute("MARGINWIDTH", "0"),
                r.setAttribute("TOPMARGIN", "0"),
                r.setAttribute("LEFTMARGIN", "0"),
                r.setAttribute("ALLOWTRANSPARENCY", "true"),
                r.setAttribute("width", s.toString()),
                r.setAttribute("height", o.toString()),
                t.appendChild(r),
                r.contentDocument && (r.contentDocument.open(),
                r.contentDocument.write(i),
                r.contentDocument.close(),
                "interstitial_mobile" === e.adUnitCode || "interstitial_desktop" === e.adUnitCode)) {
                    const e = window.parent.document.querySelector("iframe#ad_iframe");
                    e && (e.style.width = `${s}px`,
                    e.style.height = `${o}px`)
                }
            } else
                n && t.insertAdjacentHTML("beforeend", '<IFRAME SRC="' + n + '" FRAMEBORDER="0" SCROLLING="no" MARGINHEIGHT="0" MARGINWIDTH="0" TOPMARGIN="0" LEFTMARGIN="0" ALLOWTRANSPARENCY="true" WIDTH="' + s + '" HEIGHT="' + o + '"></IFRAME>')
        }
        function je(e) {
            for (var t = window, i = 0; i < 10; i++)
                if ((t = t.parent).pbjs)
                    try {
                        t.pbjs.renderAd(document, e.adId);
                        break
                    } catch (e) {
                        continue
                    }
        }
        function Fe(e) {
            for (var t = window, i = 0; i < 5; )
                if ((t = t.parent).apstag) {
                    try {
                        t.apstag.renderImp(document, e.ext.amzniid),
                        i = 5
                    } catch (e) {}
                    i++
                }
        }
        var He = (e=>(e[e.img = 1] = "img",
        e[e.js = 2] = "js",
        e))(He || {})
          , Ue = (e=>(e[e.impression = 1] = "impression",
        e[e.viewableMRC50 = 2] = "viewableMRC50",
        e))(Ue || {})
          , We = i(9383);
        const Ge = `<div><img style="${(0,
        i(2978).W)({
            height: "10px",
            width: "16px",
            "align-items": "center",
            "justify-content": "center",
            position: "absolute",
            top: "2px",
            right: "5px",
            "line-height": "1",
            border: "none"
        })}" data-pin-nopin=true src=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxNCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuNjg0IDlINy43ODhMNC41NiAwLjk5NTk5OUgzLjMyNEwwLjEwOCA5SDEuMjEyTDEuOTIgNy4yMjRINS45NzZMNi42ODQgOVpNMy45NDggMS44ODRMNS42NzYgNi4zMzZIMi4yMDhMMy45NDggMS44ODRaTTEyLjk5ODQgOUgxMy44OTg0VjAuOTk1OTk5SDEyLjk5ODRWNC4wOEMxMi41MzA0IDMuNDQ0IDExLjgyMjQgMy4wNiAxMS4wNDI0IDMuMDZDOS41MTg0NCAzLjA2IDguNDYyNDQgNC4yNiA4LjQ2MjQ0IDYuMTA4QzguNDYyNDQgNy45OTIgOS41MzA0NCA5LjE0NCAxMS4wNDI0IDkuMTQ0QzExLjg1ODQgOS4xNDQgMTIuNTY2NCA4LjcyNCAxMi45OTg0IDguMTM2VjlaTTEyLjk5ODQgNy40MjhDMTIuNjc0NCA3LjkzMiAxMS45Nzg0IDguMzQgMTEuMjU4NCA4LjM0QzEwLjA5NDQgOC4zNCA5LjM5ODQ0IDcuMzkyIDkuMzk4NDQgNi4xMDhDOS4zOTg0NCA0LjgyNCAxMC4wOTQ0IDMuODY0IDExLjI1ODQgMy44NjRDMTEuOTc4NCAzLjg2NCAxMi42NzQ0IDQuMjk2IDEyLjk5ODQgNC44VjcuNDI4WiIgZmlsbD0iIzkxOTE5MSIvPgo8L3N2Zz4K alt='' aria-label='Ad' /> </div>`;
        var Ve = i(6409);
        function Ze(e) {
            try {
                const t = new Image
                  , i = new URL(e).searchParams.has("type");
                t.src = i ? e : `${e}&type='pixel'`
            } catch (e) {}
        }
        function qe(e) {
            const t = document.createElement("script");
            return t.setAttribute("src", e),
            t.setAttribute("type", "text/javascript"),
            t
        }
        function Qe(e, t) {
            const i = document.getElementsByTagName("script")[0]
              , n = i.parentNode
              , s = `Error loading asset ${e.getAttribute("src")}`;
            n.insertBefore(e, i),
            e.addEventListener("load", (()=>t ? t() : null)),
            e.addEventListener("error", (()=>t ? t(s) : null))
        }
        var Ye = i(9300)
          , Je = (e,t,i)=>new Promise(((n,s)=>{
            var o = e=>{
                try {
                    a(i.next(e))
                } catch (e) {
                    s(e)
                }
            }
              , r = e=>{
                try {
                    a(i.throw(e))
                } catch (e) {
                    s(e)
                }
            }
              , a = e=>e.done ? n(e.value) : Promise.resolve(e.value).then(o, r);
            a((i = i.apply(e, t)).next())
        }
        ));
        class Ke {
            constructor({slot: e, bidResponse: t}) {
                this.slot = e,
                this.bidResponse = t
            }
            render() {
                Xe(this),
                function({bidResponse: e, slot: t}) {
                    (e.native.impressionTrackers || []).forEach((e=>{
                        Ze(e)
                    }
                    ))
                }(this),
                dt(this),
                it(this)
            }
        }
        const Xe = e=>Je(void 0, [e], (function*({slot: e, bidResponse: {native: t}}) {
            const i = e.wrapper
              , n = et(e, t);
            return i ? (i.prepend(n),
            (null == t ? void 0 : t.video) && (t.video.vastUrl || t.video.vastXml) && setTimeout((()=>Je(void 0, null, (function*() {
                const e = yield lt(t, n);
                e.onEvent(e.events.adError, e.cleanup)
            }
            ))), 100),
            n) : n
        }
        ))
          , et = (e,t)=>{
            const i = document.createElement("div");
            i.classList.add(We.D),
            i.innerHTML = (0,
            Ve.getTemplate)(e),
            at(i);
            return i.querySelectorAll("[data-native-type]").forEach((i=>{
                if (i instanceof HTMLElement)
                    return st(t, i, e)
            }
            )),
            i.querySelectorAll("img").forEach((e=>{
                e.classList.add("ggnoads")
            }
            )),
            i
        }
          , tt = ({method: e, url: t})=>{
            switch (e) {
            case He.img:
                Ze(t);
                break;
            case He.js:
                Qe(qe(t))
            }
        }
          , it = ({bidResponse: {native: e}, slot: t})=>{
            if (!e)
                return;
            const {eventTrackers: i} = e;
            i && i.forEach((e=>{
                switch (e.event) {
                case Ue.impression:
                    tt(e);
                    break;
                case Ue.viewableMRC50:
                    d.Z.on(d.Z.events.impressionViewable, (i=>{
                        i === t && tt(e)
                    }
                    ))
                }
            }
            ))
        }
          , nt = (e,t)=>{
            const i = []
              , {clickTrackers: n} = e;
            null == n || n.forEach((e=>{
                i.push(`<script type="text/javascript" src=${e}><\/script>`)
            }
            )),
            t.setAttribute("role", "link"),
            t.setAttribute("tabindex", "0"),
            t.setAttribute("rel", "nonopener sponsor"),
            t.style.cursor = "pointer",
            t.setAttribute("href", e.clickUrl || ""),
            t.addEventListener("click", (()=>{
                null == n || n.forEach((e=>Ze(e))),
                window.open(e.clickUrl, "_blank")
            }
            ))
        }
          , st = (e,t,i)=>{
            if (!e)
                return;
            const n = t.getAttribute("data-native-type") || ""
              , s = e[n] || "";
            if (s)
                switch (n) {
                case "image":
                    if (e.video && (e.video.vastUrl || e.video.vastXml)) {
                        t.style.display = "none";
                        break
                    }
                    if (t.style.display = "block",
                    t.style.backgroundImage = `url(${s.url})`,
                    s.width && s.height && !k.A.isMobileOrTablet) {
                        const {width: e, height: n} = ot(i, s.width, s.height);
                        t.style.height = `${n}px`,
                        t.style.width = `${e}px`
                    } else
                        k.A.isMobileOrTablet ? t.style.height = "100px" : t.style.height = "300px";
                    nt(e, t);
                    break;
                case "icon":
                    t.setAttribute("src", s.url),
                    nt(e, t);
                    break;
                case "clickUrl":
                    t.setAttribute("href", s),
                    t.setAttribute("rel", "sponsered noopener"),
                    t.setAttribute("target", "_blank"),
                    nt(e, t);
                    break;
                case "displayurl":
                case "sponsoredBy":
                    t.innerText += s,
                    nt(e, t);
                    break;
                case "title":
                    t.innerText = rt(t, s),
                    nt(e, t);
                    break;
                case "video":
                    s.vastXml || s.vastUrl ? (t.style.display = "block",
                    nt(e, t)) : t.style.display = "none";
                    break;
                case "body":
                    e.video && (e.video.vastUrl || e.video.vastXml) && k.A.isMobileOrTablet ? t.style.display = "none" : t.innerText = rt(t, s);
                    break;
                default:
                    t.innerText = rt(t, s)
                }
            else
                t.style.display = "none"
        }
          , ot = (e,t,i)=>{
            if ("adhesion" === e.slotName)
                return {
                    height: 100,
                    width: 100 / i * t
                };
            if ("sticky_sidebar" === e.slotName || "recipe" === e.slotName)
                return {
                    width: 300,
                    height: 300 / t * i
                };
            if ("content" === e.slotName || "feed" === e.slotName) {
                const e = 696 / 2;
                return {
                    width: e,
                    height: e / t * i
                }
            }
            return {
                width: 300,
                height: 250
            }
        }
          , rt = (e,t)=>{
            const i = (0,
            Ye.getLen)(e);
            return t.substr && t.substr(0, i) || ""
        }
          , at = e=>{
            const t = function(e) {
                const t = document.createElement("div");
                return t.innerHTML = e,
                t.children[0] || document.createElement("div")
            }(Ge);
            e.appendChild(t)
        }
          , lt = (e,t)=>Je(void 0, null, (function*() {
            var n;
            const s = t.querySelector('[data-native-type="video"]') || document.createElement("div")
              , {width: o} = s.getBoundingClientRect()
              , r = o * (9 / 16);
            s.style.height = `${r}px`;
            const {ImaPlayer: a} = yield Promise.all([i.e(6629), i.e(8322), i.e(9906), i.e(8982), i.e(1969), i.e(2208)]).then(i.bind(i, 3359))
              , l = yield a.new({
                container: s,
                autoplay: !0,
                muted: !0,
                height: r,
                width: o
            })
              , d = (null == (n = e.video) ? void 0 : n.vastXml) || "";
            return l.enableViewablePlayMode(),
            l.initVideoAd({
                vastXml: d
            }),
            l
        }
        ));
        const dt = ({bidResponse: {native: e}, slot: t})=>{
            if (!e || !e.jstracker)
                return;
            const {jstracker: i} = e
              , n = i.replace("%native_dom_id%", t.wrapperId)
              , s = null == n ? void 0 : n.match(/src=["'](.*)["']\s/)
              , o = s && s[1] || ""
              , r = document.createElement("script");
            r.setAttribute("src", o),
            t.wrapper.appendChild(r)
        }
        ;
        var ct = i(2415)
          , ut = i(7344);
        class ht {
            constructor(e, t=window.pbjs) {
                this.model = e,
                this.bidsByAdId = {},
                addEventListener("message", (e=>this.listenAdRequestFromCreative(e)), !1),
                t.onEvent(d.Z.events.bidResponse, (e=>{
                    this.bidsByAdId[e.adId] = e
                }
                ))
            }
            listenAdRequestFromCreative(e) {
                return t = this,
                i = null,
                n = function*() {
                    var t;
                    let i, n, s = !1, o = !1;
                    try {
                        if (i = JSON.parse(e.data),
                        "requestFunction" !== i.message)
                            return;
                        n = JSON.parse(i.targeting),
                        o = !!i.amazonVastUrl,
                        s = i.isAmazon || o
                    } catch (e) {
                        return
                    }
                    const r = n.slot_id && n.slot_id[0] || ""
                      , a = I.Z.getSlotById(r);
                    let l;
                    if (s)
                        l = this.getAmazonBidResponse(n);
                    else {
                        const e = n.hb_adid && n.hb_adid[0] || "";
                        l = this.bidsByAdId[e]
                    }
                    if (!l || !a)
                        return;
                    if (a.adType = function(e) {
                        return e.native ? ze.Z9.prebidNative : (0,
                        Ne.G4)(e) ? ze.Z9.inBannerNative : ze.Z9.prebidStandard
                    }(l),
                    l.isOutstream || l.isIBV) {
                        const [e,i] = (0,
                        ct.f1)(a, null == (t = a.target) ? void 0 : t.parentElement);
                        if (a.height = i,
                        a.width = e,
                        l.isOutstream) {
                            const e = yield a.getRenderer();
                            l.renderer._render = e
                        }
                    } else
                        a.height = l.height,
                        a.width = l.width;
                    a.sizeContainers(),
                    (function(e) {
                        return e.hb_safeframe && "1" === e.hb_safeframe[0]
                    }(n) || (0,
                    Ne.tY)(l) || s) && d.Z.trigger(d.Z.events.bidWon, l);
                    let c = ((e,t=!1,i=!1)=>t ? i ? je : Fe : e.hb_safeframe && "0" === e.hb_safeframe[0] ? je : $e)(n, s, l.isOutstream);
                    (0,
                    Ne.tY)(l) && (c = ()=>({}),
                    new Ke({
                        slot: a,
                        bidResponse: l
                    }).render());
                    const u = {
                        args: [l],
                        functionStr: encodeURI(c.toString()),
                        type: "creativeDelivery"
                    };
                    !function({source: e}, t) {
                        e && e.postMessage(JSON.stringify(t), "*")
                    }(e, u)
                }
                ,
                new Promise(((e,s)=>{
                    var o = e=>{
                        try {
                            a(n.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                      , r = e=>{
                        try {
                            a(n.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                      , a = t=>t.done ? e(t.value) : Promise.resolve(t.value).then(o, r);
                    a((n = n.apply(t, i)).next())
                }
                ));
                var t, i, n
            }
            getAmazonBidResponse(e) {
                var t, i, n, s, o;
                const a = e.amznadid && e.amznadid[0] || "";
                let l = this.bidsByAdId[a];
                l || (l = window.pbjs.createBid(ut.i.NO_BID),
                l.bidder = r.tO.uam,
                l.bidderCode = r.tO.uam,
                l.adUnitCode = (null == (t = e.slot_id) ? void 0 : t[0]) || "");
                const d = null == (i = e.amznsize) ? void 0 : i[0].split("x");
                return d && (l.width = Number(d[0]),
                l.height = Number(d[1])),
                l.ext = {
                    amzniid: null == (n = e.amzniid) ? void 0 : n[0],
                    isGumGum: (null == (s = e.amznp) ? void 0 : s[0]) === we.Tq
                },
                l.creativeId = (null == (o = e.amzniid) ? void 0 : o[0]) || "",
                l
            }
        }
        const pt = window.$adManagementConfig.web.model.keywordSrc;
        class mt {
            constructor(e) {
                this.sda = e,
                this.previousUrl = window.location.href,
                this.sdaLogKeywords(window.$adManagementConfig.web.keywords || {})
            }
            getResults() {
                const e = window.location.href
                  , {keywords: t} = window.$adManagementConfig.web;
                if (e !== this.previousUrl && (this.previousUrl = e,
                this.keywordRequest()),
                t) {
                    const {sales_cat: e, sales_safety: i, sales_kw: n, sales_segment: s} = t;
                    return {
                        sales_cat: e,
                        sales_safety: i,
                        sales_kw: n,
                        sales_segment: s
                    }
                }
            }
            keywordRequest() {
                c.Z.fetchJson(`${pt}?pageUrl=${this.previousUrl}`).then((e=>{
                    const {sales_cat: t, sales_safety: i, sales_kw: n, sales_segment: s} = e;
                    this.updateKeywords({
                        sales_cat: t,
                        sales_safety: i,
                        sales_kw: n,
                        sales_segment: s
                    })
                }
                )).catch((e=>{}
                ))
            }
            updateKeywords(e) {
                this.sdaLogKeywords(e),
                window.$adManagementConfig.web.keywords = e
            }
            sdaLogKeywords(e) {
                this.sda.handleKeywordSalesCat(e.sales_cat)
            }
        }
        var gt = i(6528)
          , bt = Object.defineProperty
          , yt = Object.defineProperties
          , vt = Object.getOwnPropertyDescriptors
          , ft = Object.getOwnPropertySymbols
          , wt = Object.prototype.hasOwnProperty
          , St = Object.prototype.propertyIsEnumerable
          , At = (e,t,i)=>t in e ? bt(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : e[t] = i
          , Tt = (e,t)=>{
            for (var i in t || (t = {}))
                wt.call(t, i) && At(e, i, t[i]);
            if (ft)
                for (var i of ft(t))
                    St.call(t, i) && At(e, i, t[i]);
            return e
        }
        ;
        class Mt {
            constructor(e, t, i, n) {
                this.model = e,
                this.slotFactory = t,
                this.prebidFacade = i,
                this.blocklist = n,
                this.lazyables = [],
                (0,
                O.AE)((()=>{
                    this.render()
                }
                ))
            }
            render() {
                for (const e of this.model.slots) {
                    if (!e.lazy || e.dynamic)
                        continue;
                    const t = (0,
                    gt.bZ)(e.type);
                    if (t && this.blocklist.contains(t))
                        continue;
                    if (document.querySelectorAll(`.mv_slot_target[data-slot=${e.type}]`).length > 0)
                        continue;
                    let i;
                    const n = k.A.isMobileOrTablet && e.mobileSelector ? e.mobileSelector : e.selector;
                    i = n instanceof HTMLElement ? [n] : Array.from(document.querySelectorAll(n)),
                    i.forEach((t=>{
                        var i, n;
                        t.hasAttribute(`${we.Mg}-${e.type}`) || this.slotFactory.new((i = Tt({}, e),
                        n = {
                            selector: t
                        },
                        yt(i, vt(n)))).then((e=>{
                            e && this.lazyables.push(new g.ZP(e,this.prebidFacade))
                        }
                        ))
                    }
                    ))
                }
            }
        }
        const Ct = [1];
        class xt {
            constructor(e, t, i, n=window) {
                this.isGumGumBidder = e=>{
                    var t;
                    return e.bidder === r.tO.gumgum || e.s2sBidder === r.tO.gumgum || (null == (t = e.ext) ? void 0 : t.isGumGum)
                }
                ,
                this.isAdhesion = e=>-1 !== e.adUnitCode.indexOf("adhesion"),
                d.Z.on(d.Z.events.bidWon, (e=>this.handleGumGumAdhesionRefresh(e, i))),
                d.Z.on(d.Z.events.bidReady, this.handleGumGumInScreen.bind(this)),
                (0,
                O.AE)((()=>{
                    const i = {
                        noId: !e.gumgum_id,
                        noInImage: !e.gumgum_in_image,
                        isTestSite: e.testSite,
                        isBlocklistAll: t.all,
                        inImageBlocklisted: t.contains("in_image"),
                        hasNoGGParam: (0,
                        Z.DY)("noGG", "true", n.location.search),
                        hasPlaceholdersParam: (0,
                        Z.DY)("test", "placeholders", n.location.search)
                    };
                    if (function(e) {
                        for (const t in e)
                            if (e[t])
                                return !0;
                        return !1
                    }(i))
                        return Y.ZP.debug("GumGum InImage Disabled!", i),
                        this;
                    e.gumgum_skip_first_image && this.disableFirstImage(e.content_selector),
                    window.ggv2id = e.gumgum_id,
                    window.ggproducts = Ct,
                    be("//g2.gumgum.com/javascripts/ggv2.js", ye.w.gumgum)
                }
                ))
            }
            disableFirstImage(e) {
                const t = e && document.querySelector(`${e} img`);
                return t ? t.className += " ggnoads" : null
            }
            handleGumGumAdhesionRefresh(e, t) {
                if (!this.isAdhesion(e) || !this.isGumGumBidder(e))
                    return !1;
                if (e.isOutstream)
                    return !1;
                const i = I.Z.adhesionSlot;
                return i ? ((0,
                O.cn)(document.body, "gumgumAdhesion"),
                t.registerNewRefreshable(i),
                !0) : (Y.ZP.debug(`Could not find slot ${e.adUnitCode} for refresh!`),
                !1)
            }
            handleGumGumInScreen(e) {
                for (const t of e) {
                    const e = t.slot;
                    if (!e)
                        return;
                    if ("Adhesion" === e.type && e.isRefreshing && window.GUMGUM) {
                        window.GUMGUM && window.GUMGUM.isad && window.GUMGUM.removeISAd ? (Y.ZP.debug("Closing GumGum ad"),
                        window.GUMGUM.removeISAd(),
                        (0,
                        O.IV)(document.body, "gumgumAdhesion")) : window.GUMGUM.container && (Y.ZP.debug("Closing removing GumGum ad from container"),
                        (0,
                        O.Od)(window.GUMGUM.container.querySelector("[id^=is_]")));
                        break
                    }
                }
            }
        }
        var kt = i(4493);
        const _t = class {
            constructor(e, t=0) {
                this.func = e,
                this.callTime = t,
                this.timer = 0,
                this.start()
            }
            start() {
                this.interval || this.callTimeHasPassed() || (this.interval = window.setInterval((()=>this.tick()), _t.tickRate))
            }
            pause() {
                this.interval && window.clearInterval(this.interval),
                this.interval = void 0
            }
            shortCircuit() {
                this.timer < this.callTime && (this.timer = this.callTime,
                this.func(),
                window.clearInterval(this.interval))
            }
            disable() {
                this.func = ()=>{}
                ,
                window.clearInterval(this.interval),
                this.interval = void 0
            }
            tick() {
                this.timer++,
                this.timer === this.callTime && (this.func(),
                window.clearInterval(this.interval))
            }
            callTimeHasPassed() {
                return this.timer >= this.callTime
            }
        }
        ;
        let Ot = _t;
        Ot.tickRate = 1e3;
        class It {
            constructor(e, t) {
                this.slot = e,
                this.refresh = t,
                this.readyToReAuction = !1,
                this.readyToRefresh = !1,
                Y.ZP.debug("Creating Refreshable for slot", e, "in " + 1e3 * e.refreshTime),
                this.url = window.location.href,
                this.reAuctionFunction = new Ot((()=>this.onReAuctionTimePassed()),(e.refreshTime || 0) - e.preAuctionTime),
                this.refreshFunction = new Ot((()=>this.onRefreshTimePassed()),e.refreshTime),
                e.visible || (Y.ZP.debug("Pausing non-visible refreshable", e),
                this.pauseTimers()),
                this.removeVisibilityListener = function(e) {
                    let t = ""
                      , i = "";
                    function n() {
                        switch (document[t]) {
                        case "visible":
                            e.onVisible();
                            break;
                        case "hidden":
                            e.onHidden()
                        }
                    }
                    return void 0 !== document.hidden ? (i = "visibilitychange",
                    t = "visibilityState") : void 0 !== document.mozHidden ? (i = "mozvisibilitychange",
                    t = "mozVisibilityState") : void 0 !== document.msHidden ? (i = "msvisibilitychange",
                    t = "msVisibilityState") : void 0 !== document.webkitHidden && (i = "webkitvisibilitychange",
                    t = "webkitVisibilityState"),
                    document.addEventListener(i, n, !1),
                    ()=>{
                        document.removeEventListener(i, n, !1)
                    }
                }({
                    onHidden: ()=>{}
                    ,
                    onVisible: ()=>{
                        e.visible && (this.readyToReAuction && this.reAuctionSlot(),
                        this.readyToRefresh && (this.refreshSlot(),
                        this.resetRefreshable()))
                    }
                }),
                this.turnOffSlotVisibilityChanged = d.Z.on(d.Z.events.slotVisibilityChanged, this.handleVisibilityChange.bind(this))
            }
            handleVisibilityChange(e, t) {
                t === this.slot && t.visible && (this.startTimers(),
                this.readyToReAuction && this.reAuctionSlot(),
                this.readyToRefresh && (this.refreshSlot(),
                this.resetRefreshable()))
            }
            shortCircuit() {
                this.shortCircuitTimers()
            }
            reset() {
                this.resetRefreshable()
            }
            onReAuctionTimePassed() {
                this.readyToReAuction = !0,
                this.slot.visible && !document.hidden && this.reAuctionSlot()
            }
            onRefreshTimePassed() {
                this.readyToRefresh = !0,
                this.slot.visible && !document.hidden && (this.refreshSlot(),
                this.resetRefreshable())
            }
            resetRefreshable() {
                this.disableTimers(),
                this.removeVisibilityListener(),
                this.turnOffSlotVisibilityChanged(),
                this.refresh.registry[this.slot.id] = null
            }
            startTimers() {
                this.reAuctionFunction.start(),
                this.refreshFunction.start()
            }
            pauseTimers() {
                this.refreshFunction.pause(),
                this.reAuctionFunction.pause()
            }
            shortCircuitTimers() {
                this.reAuctionFunction.shortCircuit(),
                this.refreshFunction.shortCircuit()
            }
            disableTimers() {
                this.refreshFunction.disable(),
                this.reAuctionFunction.disable()
            }
            reAuctionSlot() {
                this.readyToReAuction = !1;
                const e = window.location.href;
                this.url !== e ? this.slot.reauctions = 1 : this.slot.reauctions++,
                Y.ZP.debug("Running auction:", this.slot),
                this.refresh.prebidFacade.requestBids([this.slot], this.slot.timeout.value)
            }
            refreshSlot() {
                this.readyToRefresh = !1;
                const e = window.location.href;
                this.url !== e ? this.slot.refreshes = 1 : this.slot.refreshes++,
                this.slot.adType === ze.Z9.inBannerNative ? Pt(this.slot) : (({wrapper: e, type: t})=>{
                    if (e) {
                        "Adhesion" === t && (0,
                        O.IV)(document.body, we.U4);
                        const i = e.querySelector(`.${We.D}`);
                        i && i.remove()
                    }
                }
                )(this.slot),
                !this.slot.refreshSizeRestricted && this.slot.fixedHeight && (this.slot.refreshSizeRestricted = !0,
                this.slot.destroyGSlot()),
                d.Z.trigger(d.Z.events.refreshTimeReached, this.slot)
            }
        }
        const Pt = e=>{
            const t = e.wrapper.querySelector(".tlod");
            null == t || t.remove();
            e.wrapper.querySelector(".adunit").setAttribute("style", "")
        }
        ;
        class Et {
            constructor(e) {
                this.prebidFacade = e,
                this.registry = {},
                d.Z.on(d.Z.events.slotRenderEnded, ((e,t)=>this.registerNewRefreshable(t))),
                d.Z.on(d.Z.events.registerRefreshable, (e=>{
                    this.registerNewRefreshable(e)
                }
                )),
                d.Z.on(d.Z.events.shortCircuitRefresh, (e=>{
                    const t = this.registry[e.id];
                    t && t.shortCircuit()
                }
                )),
                d.Z.on(d.Z.events.resetRefreshable, (e=>{
                    const t = this.registry[e.id];
                    t && t.reset()
                }
                ))
            }
            registerNewRefreshable(e) {
                e && function(e) {
                    return !!e.refreshTime && e.refreshTime >= 0
                }(e) && (this.registry[e.id] = this.registry[e.id] || new It(e,this))
            }
        }
        var Dt = i(2037)
          , Bt = i(7666)
          , Rt = i(8662)
          , Lt = i(5146)
          , zt = i(7065)
          , Nt = i(4262);
        class $t {
            constructor(e) {
                this.element = e,
                this.handlers = {}
            }
            innerHeight() {
                return jt(this.element) ? this.element.innerHeight : this.element.clientHeight
            }
            innerWidth() {
                return jt(this.element) ? this.element.innerWidth : this.element.clientWidth
            }
            off(e, t) {
                function i(e, t, i) {
                    for (let n = 0, s = t.length - 1; n < s; n++) {
                        const s = t[n];
                        i && i !== s || e.removeEventListener(s)
                    }
                }
                const n = e.split(".")
                  , s = n[0]
                  , o = n[1]
                  , r = this.element;
                if (o && this.handlers[o] && s)
                    i(r, this.handlers[o][s], t),
                    this.handlers[o][s] = [];
                else if (s)
                    for (const e in this.handlers)
                        i(r, this.handlers[e][s] || [], t),
                        this.handlers[e][s] = [];
                else if (o && this.handlers[o]) {
                    for (const e in this.handlers[o])
                        i(r, this.handlers[o][e], t);
                    this.handlers[o] = {}
                }
            }
            offset() {
                if (!this.element.ownerDocument)
                    return null;
                const e = this.element.ownerDocument.documentElement
                  , t = Ft(this.element.ownerDocument);
                let i = {
                    top: 0,
                    left: 0
                };
                this.element.getBoundingClientRect && (i = this.element.getBoundingClientRect());
                const n = t ? t.scrollY : 0
                  , s = t ? t.scrollX : 0;
                return {
                    top: i.top + n - e.clientTop,
                    left: i.left + s - e.clientLeft
                }
            }
            on(e, t) {
                const i = e.split(".")
                  , n = i[0]
                  , s = i[1] || "__default"
                  , o = this.handlers[s] = this.handlers[s] || {};
                (o[n] = o[n] || []).push(t),
                this.element.addEventListener(n, t)
            }
            outerHeight(e) {
                let t = this.innerHeight();
                if (e && !jt(this.element)) {
                    const e = window.getComputedStyle(this.element);
                    t += parseInt(e.marginTop, 10),
                    t += parseInt(e.marginBottom, 10)
                }
                return t
            }
            outerWidth(e) {
                let t = this.innerWidth();
                if (e && !jt(this.element)) {
                    const e = window.getComputedStyle(this.element);
                    t += parseInt(e.marginLeft, 10),
                    t += parseInt(e.marginRight, 10)
                }
                return t
            }
            scrollLeft() {
                const e = Ft(this.element);
                return e ? e.scrollX : this.element.scrollLeft
            }
            scrollTop() {
                const e = Ft(this.element);
                return e ? e.scrollY : this.element.scrollTop
            }
            static extend() {
                const e = Array.prototype.slice.call(arguments);
                function t(e, t) {
                    if ("object" == typeof e && "object" == typeof t)
                        for (const i in t)
                            t.hasOwnProperty(i) && (e[i] = t[i]);
                    return e
                }
                for (let i = 1, n = e.length; i < n; i++)
                    t(e[0], e[i]);
                return e[0]
            }
            static inArray(e, t, i) {
                return null === t ? -1 : t.indexOf(e, i)
            }
            static isEmptyObject(e) {
                for (const t in e)
                    return !1;
                return !0
            }
        }
        function jt(e) {
            return e instanceof Window
        }
        function Ft(e) {
            return jt(e) ? e : function(e) {
                return e instanceof Document
            }(e) ? e.defaultView : e.ownerDocument ? e.ownerDocument.defaultView : null
        }
        Nt.adapters.push({
            name: "WaypointAdapter",
            Adapter: $t
        }),
        Nt.Group = Lt,
        Nt.Context = Rt,
        Nt.Adapter = $t,
        Nt.Inview = zt;
        const Ht = Nt
          , Ut = 12e4;
        class Wt {
            constructor(e) {
                this.model = e,
                this.recalculate = {},
                this.slotWaypoints = {},
                this.slotStopWaypoints = {},
                d.Z.on(d.Z.events.slotWrapperRenderEnded, (e=>{
                    this.handleSticky(e)
                }
                ))
            }
            handleSticky(e) {
                const {stickyConfig: t} = e;
                return t.isSticky && (this.wrapSticky(e),
                this.writePseudoStickyCss(e),
                d.Z.on(d.Z.events.slotRenderEnded, ((t,i)=>{
                    i === e && this.stickySlotRenderEnded(t, i)
                }
                ))),
                e
            }
            writePseudoStickyCss({stickyConfig: e, adUnitId: t}) {
                const i = e.offset
                  , n = `\n      #${t}_sticky_wrapper.stuck {\n        position : fixed;\n        top : ${i || 10}px;\n      }\n    `;
                return (0,
                O.hm)(n),
                n
            }
            wrapSticky(e) {
                const t = document.createElement("div");
                t.id = `${e.adUnitId}_placeholder`,
                (0,
                O.cn)(t, `${e.adUnitId}_placeholder`);
                const i = document.createElement("div");
                i.id = `${e.adUnitId}_sticky_wrapper`;
                Gt(e.wrapper, i),
                Gt(i, t)
            }
            computeFullOffset(e) {
                let t = e
                  , i = 0;
                for (; t; )
                    i += t.offsetTop || 0,
                    t = t.offsetParent;
                return i
            }
            computeOffsetDiff(e, t) {
                return this.computeFullOffset(t) - this.computeFullOffset(e)
            }
            getContainingElement(e, t) {
                let i = e;
                for (; i.parentElement; ) {
                    if (i.parentElement.querySelector(t))
                        return i;
                    i = i.parentElement
                }
            }
            computeVerticalSpaceAvailable(e, t) {
                const i = e.getBoundingClientRect();
                let n = t.getBoundingClientRect().bottom - i.top
                  , s = e;
                for (; s !== t && s.parentElement; ) {
                    const e = getComputedStyle(s)
                      , t = getComputedStyle(s.parentElement);
                    n -= parseInt(e.marginTop) + parseInt(e.marginBottom) || 0,
                    n -= parseInt(t.paddingTop) + parseInt(t.paddingBottom) || 0,
                    s = s.parentElement
                }
                return n
            }
            computeScrollHeightWithStop(e, t, i) {
                let n = 0;
                const s = document.querySelector(e);
                if (s) {
                    const o = this.computeOffsetDiff(i, s);
                    n = o;
                    const r = this.getContainingElement(i, e)
                      , a = r && this.computeVerticalSpaceAvailable(i, r) || 0;
                    a && a > t.getBoundingClientRect().height && (n = Math.min(a, o))
                }
                return n
            }
            computeScrollHeightWithLeaderboard(e) {
                let t = 0;
                const i = document.getElementById("leaderboard_btf_waypoint");
                return i && (t = this.computeOffsetDiff(e, i)),
                t
            }
            computeScrollHeightWithContent(e, t) {
                let i = 0;
                const n = document.querySelector(e);
                if (n) {
                    i = n.getBoundingClientRect().bottom - t.getBoundingClientRect().top
                }
                return i
            }
            computeScrollHeight(e, t, i) {
                let n = 0;
                return e.stopSelector ? n = this.computeScrollHeightWithStop(e.stopSelector, t, i) : this.model.leaderboard_btf_selector && (n = this.computeScrollHeightWithLeaderboard(i)),
                !n && this.model.content_selector && (n = this.computeScrollHeightWithContent(this.model.content_selector, i)),
                n
            }
            guardScrollHeight(e, t, i) {
                const n = Math.max(...i.map((e=>Array.isArray(e) && e[1] || 0)))
                  , s = parseInt(getComputedStyle(t).height);
                return s && e - s <= n && (e = s),
                e
            }
            setupTrueStickyStyles({stickyConfig: e, sizes: t}, i, n) {
                let s = this.computeScrollHeight(e, i, n);
                if (!s)
                    return;
                s = this.guardScrollHeight(s, n, t);
                const o = e.offset || 10;
                this.setupCssStickySidebar(n, i, s, o)
            }
            getTranslateY(e) {
                const t = getComputedStyle(e)
                  , i = (t.transform || t.webkitTransform || t.mozTransform || "").match(/matrix.*\((.+)\)/)
                  , n = i && i[1] && i[1].split(", ");
                return n && n[5] && parseInt(n[5]) || 0
            }
            setupCssStickySidebar(e, t, i, n) {
                (0,
                Bt.F)(t, {
                    overflow: "visible"
                }, !!this.model.optimize_sticky_sidebar_cls_log),
                e.style.height = `${i}px`,
                t.style.position = "sticky",
                t.style.top = `${n}px`;
                const s = e.getBoundingClientRect()
                  , o = t.getBoundingClientRect()
                  , r = this.getTranslateY(t);
                s.top === o.top - r ? t.className = "" : t.className = "stuck"
            }
            stickySlotRenderEnded(e, t) {
                const {adUnitId: i, stickyConfig: n, selector: s, model: o} = t
                  , r = document.getElementById(`${i}_sticky_wrapper`)
                  , a = document.getElementById(`${i}_placeholder`);
                if (!s || !n.isSticky)
                    return !1;
                if (e.isEmpty)
                    return !1;
                if (null === a)
                    return !1;
                const l = a.parentNode;
                if (r.style.width = `${Math.max((0,
                Dt.Z)(l), 300)}px`,
                o.optimize_sticky_sidebar_cls) {
                    this.setupTrueStickyStyles(t, r, a);
                    const e = setInterval((()=>this.setupTrueStickyStyles(t, r, a)), 1e3);
                    setTimeout((()=>{
                        clearInterval(e)
                    }
                    ), Ut)
                } else
                    this.setupWaypoints(e, t, r, a)
            }
            setupWaypoints(e, t, i, n) {
                const {stickyConfig: s} = t;
                this.destroyOldWaypoints(t);
                let o = Number(e.size[1]);
                1 === o && t.highestPrebid && (o = t.highestPrebid.height || 300,
                (0,
                Ne.tY)(t.highestPrebid) && (o = 600)),
                o += 15,
                n.style.height = `${o}px`;
                let r = null;
                s.stopSelector ? r = document.querySelector(s.stopSelector) : this.model.leaderboard_btf_selector && (r = document.getElementById("leaderboard_btf_waypoint"));
                const a = s.offset || 10;
                if (this.slotWaypoints[t.adUnitId] = new Ht({
                    element: n,
                    handler(e) {
                        if ("down" === e)
                            if (null !== r) {
                                const e = r.offsetTop - n.offsetTop
                                  , t = 2 * n.offsetHeight + 120;
                                i.className = e > t ? "stuck" : ""
                            } else
                                i.className = "stuck";
                        else
                            i.className = ""
                    },
                    offset: a
                }),
                null !== r) {
                    const e = 5;
                    this.slotStopWaypoints[t.adUnitId] = new Ht({
                        element: r,
                        handler(e) {
                            if ("down" === e)
                                i.className = "";
                            else {
                                const e = this.element.offsetTop - n.offsetTop
                                  , t = 2 * n.offsetHeight + 120;
                                i.className = e > t ? "stuck" : ""
                            }
                        },
                        offset: o + e + a
                    })
                }
                this.recalculate[t.id] = setInterval((()=>{
                    Ht.Context.refreshAll()
                }
                ), 1e3),
                setTimeout((()=>{
                    clearInterval(this.recalculate[t.id])
                }
                ), Ut)
            }
            destroyOldWaypoints(e) {
                this.slotWaypoints[e.adUnitId] && this.slotWaypoints[e.adUnitId].destroy(),
                this.slotStopWaypoints[e.adUnitId] && this.slotStopWaypoints[e.adUnitId].destroy()
            }
        }
        function Gt(e, t) {
            var i;
            null == (i = e.parentNode) || i.insertBefore(t, e),
            t.appendChild(e)
        }
        function Vt(e) {
            return new Promise((t=>{
                setTimeout(t, e)
            }
            ))
        }
        let Zt = 0;
        var qt;
        (qt || (qt = {})).init = e=>{
            return t = void 0,
            i = null,
            n = function*() {
                for (; !window.$adManagementConfig.web.usersyncInit && Zt < 100; )
                    yield Vt(100),
                    Zt += 1;
                if (window.$adManagementConfig.web.usersyncInit)
                    return window.$adManagementConfig.web.usersyncInit(e)
            }
            ,
            new Promise(((e,s)=>{
                var o = e=>{
                    try {
                        a(n.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                  , r = e=>{
                    try {
                        a(n.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                  , a = t=>t.done ? e(t.value) : Promise.resolve(t.value).then(o, r);
                a((n = n.apply(t, i)).next())
            }
            ));
            var t, i, n
        }
        ;
        const Qt = "//www.zergnet.com/zerg.js";
        class Yt {
            constructor(e, t) {
                (0,
                O.AE)((()=>{
                    if (t.all || t.contains("zergnet"))
                        return this;
                    if (!e.zergnet || !e.zergnet_id || !e.zergnet_content_selector && !e.content_selector)
                        return this;
                    const i = this.getZergnetSelector(e)
                      , n = document.querySelector(i);
                    if (n) {
                        let t = `<div id="zergnet-widget-${e.zergnet_id}"></div>`;
                        e.zergnet_traffic_id && (t += `<div id="zergnet-widget-${e.zergnet_traffic_id}"></div>`);
                        const i = e.zergnet_content_position ? e.zergnet_content_position : "afterend";
                        n.insertAdjacentHTML(i, t),
                        be(`${Qt}?id=${e.zergnet_id}`, ye.w.zergnet_id),
                        e.zergnet_traffic_id && be(`${Qt}?id=${e.zergnet_traffic_id}`, ye.w.zergnet_traffic_id)
                    }
                    return this
                }
                ))
            }
            getZergnetSelector(e) {
                let t;
                return t = e.zergnet_content_selector ? e.zergnet_content_selector : e.content_selector_mobile && k.A.isMobileOrTablet ? e.content_selector_mobile : e.content_selector,
                t
            }
        }
        var Jt, Kt, Xt = i(6921), ei = i(9225), ti = (e,t,i)=>new Promise(((n,s)=>{
            var o = e=>{
                try {
                    a(i.next(e))
                } catch (e) {
                    s(e)
                }
            }
              , r = e=>{
                try {
                    a(i.throw(e))
                } catch (e) {
                    s(e)
                }
            }
              , a = e=>e.done ? n(e.value) : Promise.resolve(e.value).then(o, r);
            a((i = i.apply(e, t)).next())
        }
        ));
        (Kt = Jt || (Jt = {})).init = e=>{
            const t = qe("https://pghub.io/js/pandg-sdk.js");
            t.onload = ()=>setTimeout((()=>Kt.onTapadLoad(e)), 3e3),
            Qe(t)
        }
        ,
        Kt.initOnce = (0,
        ei.r)(Kt.init),
        Kt.onTapadLoad = e=>ti(void 0, [e], (function*({model: e, gpp: t}) {
            var i, n;
            const s = Kt.getPnGConfig()
              , o = yield Kt.checkAndGetTCString({
                gpp: t
            });
            if (!o.hasConsent || t.isUSNatV1OptOut())
                return;
            const r = null != (n = null == (i = e.offering) ? void 0 : i.offering_code) ? n : "unknown-offering"
              , a = Kt.getPnGMetaData(o.gdpr_consent, r)
              , l = Kt.getPnGData({
                model: e
            });
            Kt.sync({
                metadata: a,
                config: s,
                data: l
            })
        }
        )),
        Kt.sync = ({metadata: e, config: t, data: i},n=window)=>{
            var s;
            const o = null == (s = n.Tapad) ? void 0 : s.init(e, t);
            o && o.sync(i)
        }
        ,
        Kt.checkAndGetTCString = e=>ti(void 0, [e], (function*({gpp: e}) {
            if (e.enableGdpr) {
                const {TCF: e} = yield Promise.all([i.e(8114), i.e(8262)]).then(i.bind(i, 9265))
                  , t = 577
                  , n = e.tcModel.vendorLegitimateInterests.has(t)
                  , s = e.tcModel.vendorConsents.has(t);
                return {
                    gdpr_consent: e.tcString,
                    hasConsent: n && s
                }
            }
            return {
                gdpr_consent: null,
                hasConsent: !0
            }
        }
        )),
        Kt.getPnGMetaData = (e,t,i=Xt.Yg)=>({
            gdpr: e ? 1 : 0,
            gdpr_consent: e,
            bp_id: t,
            ccpa: (null == i ? void 0 : i.uspString) || null
        }),
        Kt.getPnGConfig = ()=>({
            name: "P&G",
            pixelUrl: "https://feed.pghub.io/tag"
        }),
        Kt.getPnGData = ({model: e},t=window)=>{
            var i;
            const n = t.pbjs.getUserIds()
              , s = t.$adManagementConfig.uid2 || (null == (i = n.uid2) ? void 0 : i.id)
              , o = n.idl_env;
            return {
                category: e.topLevelCategory.title,
                subcategory: e.category.title,
                uid2: s,
                liveramp_idl: o
            }
        }
        ;
        const ii = (e,t)=>{
            return i = void 0,
            n = [e, t],
            s = function*(e, {uam: t, offering: i}) {
                try {
                    const n = (null == i ? void 0 : i.offering_code) || "";
                    if (t && !window.$adManagementConfig.web.amazonMap) {
                        const t = `${window.$adManagementConfig.web.model.launcherUrl}/amazon/${e}/adjustments?offering=${n}`
                          , i = yield c.Z.fetchJson(t);
                        window.$adManagementConfig.web.amazonMap = i
                    }
                } catch (e) {
                    Y.ZP.debug("Failed to download Amazon Adjustments")
                }
            }
            ,
            new Promise(((e,t)=>{
                var o = e=>{
                    try {
                        a(s.next(e))
                    } catch (e) {
                        t(e)
                    }
                }
                  , r = e=>{
                    try {
                        a(s.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }
                  , a = t=>t.done ? e(t.value) : Promise.resolve(t.value).then(o, r);
                a((s = s.apply(i, n)).next())
            }
            ));
            var i, n, s
        }
        ;
        var ni = i(2226)
          , si = (e=>(e["Alcoholic Beverages"] = "211",
        e["Barbecues and Grilling"] = "215",
        e.Cooking = "216",
        e["Desserts and Baking"] = "217",
        e["Dining Out"] = "218",
        e["Food Allergies"] = "219",
        e["Food Movements"] = "220",
        e["Healthy Cooking and Eating"] = "221",
        e["Non-Alcoholic Beverages"] = "222",
        e["Vegan Diets"] = "212",
        e["Vegetarian Diets"] = "213",
        e["World Cuisines"] = "214",
        e["Food & Drink"] = "210",
        e["Hobbies & Interests"] = "239",
        e["Home & Garden"] = "274",
        e["Business and Finance"] = "52",
        e.Business = "53",
        e["Business Accounting & Finance"] = "54",
        e["Human Resources"] = "55",
        e["Large Business"] = "56",
        e["Small and Medium-sized Business"] = "60",
        e.Startups = "61",
        e["Business Administration"] = "62",
        e["Business Banking & Finance"] = "63",
        e["Angel Investment"] = "64",
        e["Business Loans"] = "66",
        e["Mergers and Acquisitions"] = "68",
        e["Private Equity"] = "69",
        e["Venture Capital"] = "71",
        e["Business Operations"] = "73",
        e["Executive Leadership & Management"] = "76",
        e["Business Utilities"] = "79",
        e.Economy = "80",
        e["Financial Reform"] = "84",
        e["Healthy Living"] = "223",
        e["Music and Audio"] = "338",
        e["Style & Fashion"] = "552",
        e.Automotive = "1",
        e["Auto Buying and Selling"] = "30",
        e["Auto Shows"] = "36",
        e["Auto Technology"] = "37",
        e["Budget Cars"] = "17",
        e["Car Culture"] = "25",
        e["Classic Cars"] = "19",
        e["Concept Cars"] = "20",
        e["Dash Cam Videos"] = "26",
        e["Driverless Cars"] = "21",
        e["Green Vehicles"] = "22",
        e["Luxury Cars"] = "23",
        e.Motorcycles = "27",
        e["Performance Cars"] = "24",
        e.Scooters = "29",
        e["Technology & Computing"] = "596",
        e["Artificial Intelligence"] = "597",
        e["Augmented Reality"] = "598",
        e.Computing = "599",
        e["Computer Networking"] = "600",
        e["Computer Peripherals"] = "601",
        e["Computer Software and Applications"] = "602",
        e["3-D Graphics"] = "603",
        e["Photo Editing Software"] = "604",
        e["Video Software"] = "606",
        e["Web Conferencing"] = "607",
        e["Antivirus Software"] = "608",
        e.Browsers = "609",
        e["Computer Animation"] = "610",
        e.Databases = "611",
        e["Desktop Publishing"] = "612",
        e["Digital Audio"] = "613",
        e["Graphics Software"] = "614",
        e["Operating Systems"] = "615",
        e.Desktops = "617",
        e["Information and Network Security"] = "618",
        e.Internet = "619",
        e["Cloud Computing"] = "620",
        e["Web Development"] = "621",
        e["Web Hosting"] = "622",
        e.Email = "623",
        e["Internet for Beginners"] = "624",
        e["Internet of Things"] = "625",
        e["IT and Internet Support"] = "626",
        e.Search = "627",
        e["Social Networking"] = "628",
        e["Web Design and HTML"] = "629",
        e.Laptops = "630",
        e["Programming Languages"] = "631",
        e["Consumer Electronics"] = "632",
        e["Cameras and Camcorders"] = "633",
        e["Home Entertainment Systems"] = "634",
        e.Smartphones = "635",
        e["Tablets and E-readers"] = "636",
        e["Wearable Technology"] = "637",
        e.Robotics = "638",
        e["Virtual Reality"] = "639",
        e.Travel = "653",
        e["Travel Accessories"] = "654",
        e["Travel Locations"] = "655",
        e["Africa Travel"] = "656",
        e["Asia Travel"] = "657",
        e["Australia and Oceania Travel"] = "658",
        e["Europe Travel"] = "659",
        e["North America Travel"] = "660",
        e["Polar Travel"] = "661",
        e["South America Travel"] = "662",
        e["Travel Preparation and Advice"] = "663",
        e["Travel Type"] = "664",
        e["Adventure Travel"] = "665",
        e["Family Travel"] = "666",
        e["Honeymoons and Getaways"] = "667",
        e["Hotels and Motels"] = "668",
        e["Rail Travel"] = "669",
        e["Road Trips"] = "670",
        e.Spas = "671",
        e["Air Travel"] = "672",
        e["Beach Travel"] = "673",
        e["Bed & Breakfasts"] = "674",
        e["Budget Travel"] = "675",
        e["Business Travel"] = "676",
        e))(si || {});
        const oi = {
            [si["Alcoholic Beverages"]]: ni.i["Aolcoholic Beverages"],
            [si["Barbecues and Grilling"]]: ni.i["Barbecues and Grilling"],
            [si.Cooking]: ni.i.Cooking,
            [si["Desserts and Baking"]]: ni.i["Desserts and Baking"],
            [si["Dining Out"]]: ni.i["Dining Out"],
            [si["Food Allergies"]]: ni.i["Food Allergies"],
            [si["Food Movements"]]: ni.i["Food Movements"],
            [si["Healthy Cooking and Eating"]]: ni.i["Healthy Cooking and Eating"],
            [si["Non-Alcoholic Beverages"]]: ni.i["Non-Alcoholic Beverages"],
            [si["Vegan Diets"]]: ni.i["Vegan Diets"],
            [si["Vegetarian Diets"]]: ni.i["Vegetarian Diets"],
            [si["World Cuisines"]]: ni.i["World Cuisines"],
            [si["Food & Drink"]]: ni.i["Food & Drink"],
            [si["Hobbies & Interests"]]: ni.i["Hobbies & Interests"],
            [si["Home & Garden"]]: ni.i["Home & Garden"],
            [si["Business and Finance"]]: ni.i["Business and Finance"],
            [si.Business]: ni.i["Business and Finance"],
            [si["Business Accounting & Finance"]]: ni.i["Business and Finance"],
            [si["Human Resources"]]: ni.i["Business and Finance"],
            [si["Large Business"]]: ni.i["Business and Finance"],
            [si["Small and Medium-sized Business"]]: ni.i["Business and Finance"],
            [si.Startups]: ni.i["Business and Finance"],
            [si["Business Administration"]]: ni.i["Business and Finance"],
            [si["Business Banking & Finance"]]: ni.i["Business and Finance"],
            [si["Angel Investment"]]: ni.i["Business and Finance"],
            [si["Business Loans"]]: ni.i["Business and Finance"],
            [si["Mergers and Acquisitions"]]: ni.i["Business and Finance"],
            [si["Private Equity"]]: ni.i["Business and Finance"],
            [si["Venture Capital"]]: ni.i["Business and Finance"],
            [si["Business Operations"]]: ni.i["Business and Finance"],
            [si["Executive Leadership & Management"]]: ni.i["Business and Finance"],
            [si["Business Utilities"]]: ni.i["Business and Finance"],
            [si.Economy]: ni.i["Business and Finance"],
            [si["Financial Reform"]]: ni.i["Business and Finance"],
            [si["Healthy Living"]]: ni.i["Healthy Living"],
            [si["Music and Audio"]]: ni.i["Music and Audio"],
            [si["Style & Fashion"]]: ni.i["Style & Fashion"],
            [si.Automotive]: ni.i.Automotive,
            [si["Auto Buying and Selling"]]: ni.i.Automotive,
            [si["Auto Shows"]]: ni.i.Automotive,
            [si["Auto Technology"]]: ni.i.Automotive,
            [si["Budget Cars"]]: ni.i.Automotive,
            [si["Car Culture"]]: ni.i.Automotive,
            [si["Classic Cars"]]: ni.i.Automotive,
            [si["Concept Cars"]]: ni.i.Automotive,
            [si["Dash Cam Videos"]]: ni.i.Automotive,
            [si["Driverless Cars"]]: ni.i.Automotive,
            [si["Green Vehicles"]]: ni.i.Automotive,
            [si["Luxury Cars"]]: ni.i.Automotive,
            [si.Motorcycles]: ni.i.Automotive,
            [si["Performance Cars"]]: ni.i.Automotive,
            [si.Scooters]: ni.i.Automotive,
            [si["Technology & Computing"]]: ni.i["Technology & Computing"],
            [si["Artificial Intelligence"]]: ni.i["Technology & Computing"],
            [si["Augmented Reality"]]: ni.i["Technology & Computing"],
            [si.Computing]: ni.i["Technology & Computing"],
            [si["Computer Networking"]]: ni.i["Technology & Computing"],
            [si["Computer Peripherals"]]: ni.i["Technology & Computing"],
            [si["Computer Software and Applications"]]: ni.i["Technology & Computing"],
            [si["3-D Graphics"]]: ni.i["Technology & Computing"],
            [si["Photo Editing Software"]]: ni.i["Technology & Computing"],
            [si["Video Software"]]: ni.i["Technology & Computing"],
            [si["Web Conferencing"]]: ni.i["Technology & Computing"],
            [si["Antivirus Software"]]: ni.i["Technology & Computing"],
            [si.Browsers]: ni.i["Technology & Computing"],
            [si["Computer Animation"]]: ni.i["Technology & Computing"],
            [si.Databases]: ni.i["Technology & Computing"],
            [si["Desktop Publishing"]]: ni.i["Technology & Computing"],
            [si["Digital Audio"]]: ni.i["Technology & Computing"],
            [si["Graphics Software"]]: ni.i["Technology & Computing"],
            [si["Operating Systems"]]: ni.i["Technology & Computing"],
            [si.Desktops]: ni.i["Technology & Computing"],
            [si["Information and Network Security"]]: ni.i["Technology & Computing"],
            [si.Internet]: ni.i["Technology & Computing"],
            [si["Cloud Computing"]]: ni.i["Technology & Computing"],
            [si["Web Development"]]: ni.i["Technology & Computing"],
            [si["Web Hosting"]]: ni.i["Technology & Computing"],
            [si.Email]: ni.i["Technology & Computing"],
            [si["Internet for Beginners"]]: ni.i["Technology & Computing"],
            [si["Internet of Things"]]: ni.i["Technology & Computing"],
            [si["IT and Internet Support"]]: ni.i["Technology & Computing"],
            [si.Search]: ni.i["Technology & Computing"],
            [si["Social Networking"]]: ni.i["Technology & Computing"],
            [si["Web Design and HTML"]]: ni.i["Technology & Computing"],
            [si.Laptops]: ni.i["Technology & Computing"],
            [si["Programming Languages"]]: ni.i["Technology & Computing"],
            [si["Consumer Electronics"]]: ni.i["Technology & Computing"],
            [si["Cameras and Camcorders"]]: ni.i["Technology & Computing"],
            [si["Home Entertainment Systems"]]: ni.i["Technology & Computing"],
            [si.Smartphones]: ni.i["Technology & Computing"],
            [si["Tablets and E-readers"]]: ni.i["Technology & Computing"],
            [si["Wearable Technology"]]: ni.i["Technology & Computing"],
            [si.Robotics]: ni.i["Technology & Computing"],
            [si["Virtual Reality"]]: ni.i["Technology & Computing"],
            [si.Travel]: ni.i.Travel,
            [si["Travel Accessories"]]: ni.i.Travel,
            [si["Travel Locations"]]: ni.i.Travel,
            [si["Africa Travel"]]: ni.i.Travel,
            [si["Asia Travel"]]: ni.i.Travel,
            [si["Australia and Oceania Travel"]]: ni.i.Travel,
            [si["Europe Travel"]]: ni.i.Travel,
            [si["North America Travel"]]: ni.i.Travel,
            [si["Polar Travel"]]: ni.i.Travel,
            [si["South America Travel"]]: ni.i.Travel,
            [si["Travel Preparation and Advice"]]: ni.i.Travel,
            [si["Travel Type"]]: ni.i.Travel,
            [si["Adventure Travel"]]: ni.i.Travel,
            [si["Family Travel"]]: ni.i.Travel,
            [si["Honeymoons and Getaways"]]: ni.i.Travel,
            [si["Hotels and Motels"]]: ni.i.Travel,
            [si["Rail Travel"]]: ni.i.Travel,
            [si["Road Trips"]]: ni.i.Travel,
            [si.Spas]: ni.i.Travel,
            [si["Air Travel"]]: ni.i.Travel,
            [si["Beach Travel"]]: ni.i.Travel,
            [si["Bed & Breakfasts"]]: ni.i.Travel,
            [si["Budget Travel"]]: ni.i.Travel,
            [si["Business Travel"]]: ni.i.Travel
        };
        class ri {
            constructor(e) {
                this.gpp = e
            }
            handleKeywordSalesCat(e="") {
                !this.gpp.isUSNatV1OptOut() && this.gpp.onReady((()=>{
                    this.updateKeywordSalesCat(e).catch((e=>{
                        Y.ZP.debug("SDA Error:", e)
                    }
                    ))
                }
                ))
            }
            updateKeywordSalesCat(e) {
                return t = this,
                i = null,
                n = function*() {
                    const t = this.getMatchedCategories(e)
                      , i = yield c.Z.fetchJson(`https://sda.fyi/update?cats=${t.join(",")}`, "GET", null, (e=>e.withCredentials = !0))
                      , n = this.accumulateCountData(i);
                    this.setTargeting(n)
                }
                ,
                new Promise(((e,s)=>{
                    var o = e=>{
                        try {
                            a(n.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                      , r = e=>{
                        try {
                            a(n.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                      , a = t=>t.done ? e(t.value) : Promise.resolve(t.value).then(o, r);
                    a((n = n.apply(t, i)).next())
                }
                ));
                var t, i, n
            }
            accumulateCountData(e) {
                const t = {};
                for (const i in e) {
                    let n;
                    for (n in e[i]) {
                        const s = e[i][n];
                        s && (t[n] = t[n] || 0,
                        t[n] += s)
                    }
                }
                return t
            }
            setTargeting(e) {
                const t = [];
                Object.keys(e).forEach((i=>{
                    const n = i
                      , s = e[n];
                    s && s >= 3 && t.push(n)
                }
                )),
                window.$adManagementConfig.web.sda = t
            }
            getMatchedCategories(e) {
                return e.split(",").reduce(((e,t)=>{
                    const i = oi[t];
                    return i && e.push(i),
                    e
                }
                ), [])
            }
        }
        var ai, li = i(2137);
        (ai || (ai = {})).init = ()=>{
            const e = document.createElement("script");
            e.innerHTML = di,
            document.body.appendChild(e)
        }
        ;
        const di = '(function(o,n,e,p,l,u,s){o[l]=o[l]||function(){(o[l].q=o[l].q||[]).push(arguments);};\n\nu=n.createElement(e);u.async=1;u.src=p;s=n.getElementsByTagName(e)[0];s.parentNode.insertBefore(u,s);\n\n}(window,document,"script","https://cdn.opecloud.com/ope-dmplite.js","ope"));\n\nope("dmplite", "init", "b4", "implied");';
        class ci {
            constructor(e) {
                this.gpp = e,
                this.gpp.onReady((()=>{
                    this.init()
                }
                ))
            }
            init() {
                var e, t;
                if (!("browsingTopics"in document) || !(null == (t = null == (e = document.featurePolicy) ? void 0 : e.allowsFeature) ? void 0 : t.call(e, "browsing-topics")))
                    return;
                addEventListener("message", (e=>{
                    try {
                        const t = JSON.parse(e.data);
                        "topicsAPIResults" === t.message ? window.$adManagementConfig.web.topics = t.topics.map((e=>e.topic.toString())) : "topicsLog" === t.message && Y.ZP.debug(`Topics iframe log: ${t.log}`)
                    } catch (e) {}
                }
                ), !1);
                const i = document.createElement("iframe");
                i.setAttribute("src", "https://sda.fyi/topics/"),
                i.setAttribute("height", "0"),
                i.setAttribute("width", "0"),
                i.setAttribute("frameborder", "0"),
                i.setAttribute("marginheight", "0"),
                i.setAttribute("marginwidth", "0"),
                i.setAttribute("style", "display:none!important"),
                document.body.appendChild(i)
            }
        }
        var ui = i(5683)
          , hi = i(1272)
          , pi = i(7548)
          , mi = (e,t,i)=>new Promise(((n,s)=>{
            var o = e=>{
                try {
                    a(i.next(e))
                } catch (e) {
                    s(e)
                }
            }
              , r = e=>{
                try {
                    a(i.throw(e))
                } catch (e) {
                    s(e)
                }
            }
              , a = e=>e.done ? n(e.value) : Promise.resolve(e.value).then(o, r);
            a((i = i.apply(e, t)).next())
        }
        ));
        const gi = e=>Y.ZP.custom(["debug", "wrapper"], e)
          , bi = new Set([hi.C.Brazil, hi.C.China])
          , yi = (e,t,s,o,...r)=>mi(void 0, [e, t, s, o, ...r], (function*(e, t, s, o, r=[]) {
            if (ui.S.mark("afterScrollMark"),
            F() || function() {
                const e = window.$adManagementConfig.web.model.whitelistDomain && !!window.$adManagementConfig.web.model.domain && window.$adManagementConfig.web.model.domain !== window.location.hostname;
                e && gi("Domain not whitelisted. Halting Execution.");
                return e
            }() || vi(e) || fi(e) || wi())
                return A.F6.halted;
            (e=>{
                e.blockthrough_enabled && be("https://btloader.com/tag?o=5161256536244224&upapi=true", {
                    async: !0
                })
            }
            )(e),
            new ci(o);
            const a = new ri(o)
              , l = new mt(a);
            h.load(e),
            yield Promise.all([kt.Z.loadPrebidImports(), X.Z.growHasLoaded.catch((()=>{}
            ))]),
            ii("v1", e),
            ie.iJ.init(e);
            const d = E.Rw.new(e)
              , c = new f(e);
            s.registerSlotRenderEndedHandler(c);
            const u = new ge(e,l,d,c);
            return window.$adManagementConfig.web.getVideoAdTagAndHighBid = u.getAdTagAndHighBid.bind(u),
            window.$adManagementConfig.web.getNextVideoAdTagAndHighBid = u.getNextAdTagAndHighBid.bind(u),
            window.$adManagementConfig.web.auctionHouse = c,
            t.all ? (gi("Blocklist.all triggered. Halting execution."),
            new Pe(e),
            A.F6.halted) : (o.onReady((()=>mi(void 0, null, (function*() {
                ui.S.mark("cmpReady");
                const a = new Le.ZP(e,c,l);
                bi.has(e.geoLoc.country_code) ? Le.ZP.onReady((()=>{
                    window.googletag.pubads().setRequestNonPersonalizedAds(1)
                }
                )).catch() : qt.init(e).then((()=>a.setPPID())),
                x.init(e, t);
                const d = new kt.Z(e,o,c);
                if ((0,
                ne.Kv)(e, o)) {
                    const {IIQ: e} = yield i.e(1145).then(i.bind(i, 3761));
                    e.init()
                }
                R.X.init(),
                X.Z.growIsLoading && X.Z.growHasLoaded.catch((e=>{}
                )).finally((()=>{
                    Y.ZP.debug("Triggering User Syncs"),
                    window.pbjs.triggerUserSyncs(),
                    window.pbjs.setConfig({
                        userSync: {
                            enableOverride: !1
                        }
                    })
                }
                )),
                new li.z_(!0),
                new ht(e),
                new Wt(e);
                const u = new Et(d);
                new Ie(e,t),
                Ee.ZP.attachPrebidFacade(d),
                new P(e,t,d);
                const h = new ke(e,s,d,t);
                yield h.renderedPromise,
                r.push(new Mt(e,s,d,t)),
                r.push(new pi.Z(e,s)),
                r.push(new B(d,s)),
                r.push(new S.d(d,s)),
                r.push(new C(d,s)),
                r.push(new n.l(e,s,d)),
                r.push(new Re(e,s)),
                setInterval((()=>r.forEach((e=>e.render()))), 1e3);
                try {
                    new Pe(e),
                    new xt(e,t,u),
                    new Yt(e,t),
                    class {
                        static insertESPscript(e) {
                            if (!e.openx)
                                return;
                            const t = qe("https://oa.openxcdn.net/esp.js");
                            t.setAttribute("data-ox-ats", "1"),
                            Qe(t)
                        }
                    }
                    .insertESPscript(e),
                    Jt.init({
                        model: e,
                        gpp: o
                    }),
                    ai.init()
                } catch (e) {
                    Y.ZP.debug(`Partner init error ${e} `)
                }
            }
            )))),
            A.F6.executed)
        }
        ));
        const vi = e=>(0,
        A.Gu)(e.deactivated, "Site has been deactivated.")
          , fi = e=>(0,
        A.Gu)(e.killswitch, "Site killswitch is activated.")
          , wi = ()=>(0,
        A.Gu)(H.G.isWindowTooSmall(), "Window is too small.")
    }
    ,
    7562: (e,t,i)=>{
        "use strict";
        i.d(t, {
            FW: ()=>h,
            Je: ()=>p,
            KB: ()=>m,
            Og: ()=>r,
            QC: ()=>c,
            UI: ()=>l,
            bM: ()=>s,
            bg: ()=>n,
            ee: ()=>b,
            qA: ()=>o,
            r2: ()=>u,
            sY: ()=>g,
            t_: ()=>a,
            y9: ()=>d
        });
        const n = 300
          , s = 5
          , o = 30
          , r = 5
          , a = 480
          , l = 640
          , d = 8e3
          , c = 2
          , u = 1500
          , h = .01
          , p = "https://securepubads.g.doubleclick.net/gampad/live/ads"
          , m = "https://pubads.g.doubleclick.net/gampad/ads?slotname=/124319096/external/ad_rule_samples&sz=640x480&ciu_szs=300x250&cust_params=deployment%3Ddevsite%26sample_ar%3Dpremidpost&url=https://developers.google.com/interactive-media-ads/docs/sdks/html5/tags&unviewed_position_start=1&output=xml_vast3&impl=s&env=vp&gdfp_req=1&ad_rule=0&vad_type=linear&vpos=preroll&pod=1&ppos=1&lip=true&min_ad_duration=0&max_ad_duration=30000&vrid=6256&video_doc_id=short_onecue&cmsid=496&kfa=0&tfcd=0"
          , g = "https://securepubads.g.doubleclick.net/gampad/live/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dskippablelinear&correlator="
          , b = "tamvid_1"
    }
    ,
    7666: (e,t,i)=>{
        "use strict";
        i.d(t, {
            F: ()=>o
        });
        var n = i(3528);
        const s = new n.Yd(n.in.debug);
        function o(e, t, i) {
            let n = e.parentElement
              , o = !1;
            for (; n; ) {
                for (const r in t) {
                    const a = t[r];
                    if (i) {
                        const t = getComputedStyle(n)[r];
                        t !== a && (s.debug(`MEDIAVINE OVERRIDE ANCESTOR REPORT:\n                \nModifying ancestor element from '${r}: ${t}' to '${r}: ${a}'\n                \nBase Element`, e, "\nAncestor Modified: ", n),
                        o = !0)
                    }
                    n.style.setProperty(r, a, "important")
                }
                n = n.parentElement
            }
            i && !o && s.debug("MEDIAVINE OVERRIDE ANCESTOR REPORT: No ancestors of base element")
        }
    }
    ,
    4548: (e,t,i)=>{
        "use strict";
        i.d(t, {
            b: ()=>a
        });
        var n = i(6469)
          , s = i(6039)
          , o = Object.getPrototypeOf
          , r = Reflect.get;
        function a(e, t) {
            return class t extends e {
                validate() {
                    return super.validate()
                }
                adunits() {
                    return e = this,
                    i = null,
                    n = function*() {
                        var e;
                        const i = [];
                        if (null == (e = this.ibvConfig) ? void 0 : e.meetsIBVCriteria()) {
                            const e = this.getIBVAdunit();
                            e && i.push(e)
                        }
                        var n, s, a;
                        return i.push(...yield(n = t.prototype,
                        s = this,
                        a = "adunits",
                        r(o(n), a, s)).call(this)),
                        i
                    }
                    ,
                    new Promise(((t,s)=>{
                        var o = e=>{
                            try {
                                a(n.next(e))
                            } catch (e) {
                                s(e)
                            }
                        }
                          , r = e=>{
                            try {
                                a(n.throw(e))
                            } catch (e) {
                                s(e)
                            }
                        }
                          , a = e=>e.done ? t(e.value) : Promise.resolve(e.value).then(o, r);
                        a((n = n.apply(e, i)).next())
                    }
                    ));
                    var e, i, n
                }
                getIBVAdunit() {
                    var e;
                    let t, i;
                    s.A.isMobileOrTablet ? (t = `${this.slotName}_ibv_mobile`,
                    i = `${this.id}_ibv_mobile`) : (t = `${this.slotName}_ibv_desktop`,
                    i = `${this.id}_ibv_desktop`);
                    const o = this.model.bidRequests[t];
                    if (!o)
                        return;
                    const r = (0,
                    n.X)(o, "Error copying outstream bid requests");
                    return r ? (r.forEach((e=>{
                        e.isIBV = !0,
                        e.outstreamAdUnitCode = i
                    }
                    )),
                    {
                        code: i,
                        bids: r,
                        mediaTypes: {
                            banner: {
                                sizes: (null == (e = this.ibvConfig) ? void 0 : e.ibvSizes()) || []
                            }
                        }
                    }) : void 0
                }
            }
        }
    }
    ,
    8001: (e,t,i)=>{
        "use strict";
        i.d(t, {
            G: ()=>n
        });
        var n = (e=>(e.title = "title",
        e.body = "body",
        e.sponsoredBy = "sponsoredBy",
        e.displayurl = "displayurl",
        e.icon = "icon",
        e.image = "image",
        e.clickUrl = "clickUrl",
        e.cta = "cta",
        e.video = "video",
        e))(n || {})
    }
    ,
    9300: (e,t,i)=>{
        "use strict";
        i.r(t),
        i.d(t, {
            buildRequestFromTemplate: ()=>d,
            getLen: ()=>h
        });
        var n = i(5182)
          , s = i(8074)
          , o = i(6039)
          , r = i(3528)
          , a = i(8001);
        const l = {}
          , d = e=>{
            if (l[e])
                return l[e];
            const t = {
                sponsoredBy: {
                    required: !1
                }
            }
              , i = document.createElement("div");
            return i.innerHTML = e,
            i.querySelectorAll("[data-native-type]").forEach((e=>{
                const i = e.getAttribute("data-native-type")
                  , o = c(e)
                  , r = u(e)
                  , l = "true" === e.getAttribute("data-native-required")
                  , d = h(e);
                switch (i) {
                case a.G.title:
                case a.G.body:
                    t[i] = {
                        required: l,
                        len: d
                    };
                    break;
                case a.G.displayurl:
                case a.G.cta:
                case a.G.clickUrl:
                case a.G.sponsoredBy:
                    t[i] = {
                        required: l
                    };
                    break;
                case a.G.icon:
                case a.G.image:
                    e.style.display = "none",
                    t[i] = {
                        required: l,
                        size: o,
                        minSize: r
                    };
                    break;
                case a.G.video:
                    e.style.display = "none",
                    t[i] = {
                        required: l,
                        mimes: [n.Dn.javascript, n.Dn.mp4],
                        protocols: [s.b$.VAST_2_0, s.b$.VAST_3_0, s.b$.VAST_2_0_wrapper, s.b$.VAST_3_0_wrapper, s.b$.VAST_4_0, s.b$.VAST_4_0_wrapper]
                    }
                }
            }
            )),
            l[e] = t,
            t
        }
          , c = e=>{
            const t = e.getAttribute("data-native-size")
              , i = e.getAttribute("data-native-m-size")
              , n = e.getAttribute("data-native-d-size")
              , s = e.getAttribute("data-native-t-size");
            try {
                if (o.A.isMobile && i)
                    return JSON.parse(i);
                if (o.A.isTablet && s)
                    return JSON.parse(s);
                if (n)
                    return JSON.parse(n);
                if (t)
                    return JSON.parse(t)
            } catch (e) {
                r.ZP.debug(e)
            }
            return []
        }
          , u = e=>{
            const t = e.getAttribute("data-native-min-size")
              , i = e.getAttribute("data-native-m-min-size")
              , n = e.getAttribute("data-native-d-min-size")
              , s = e.getAttribute("data-native-t-min-size");
            try {
                if (o.A.isMobile && i)
                    return JSON.parse(i);
                if (o.A.isTablet && s)
                    return JSON.parse(s);
                if (n)
                    return JSON.parse(n);
                if (t)
                    return JSON.parse(t)
            } catch (e) {
                r.ZP.debug(e)
            }
            return []
        }
          , h = e=>{
            const t = e.getAttribute("data-native-m-len")
              , i = e.getAttribute("data-native-t-len")
              , n = e.getAttribute("data-native-d-len")
              , s = e.getAttribute("data-native-len") || "50";
            return o.A.isMobile && t ? parseInt(t, 10) : o.A.isTablet && i ? parseInt(i, 10) : n && o.A.isDesktop ? parseInt(n, 10) : parseInt(s, 10)
        }
    }
    ,
    6409: (e,t,i)=>{
        "use strict";
        i.r(t),
        i.d(t, {
            getTemplate: ()=>Ce,
            getTemplateName: ()=>Me
        });
        var n = i(5595)
          , s = i(3528)
          , o = i(6039)
          , r = i(2978)
          , a = i(8001);
        const l = {
            "grid-area": "content",
            margin: 0,
            display: "grid",
            "grid-template-areas": "'icon content'",
            "font-size": "12px !important",
            "line-height": "1.2 !important",
            "column-gap": "4px",
            "align-items": "center"
        }
          , d = {
            "font-size": "12px",
            "font-weight": 300,
            margin: 0,
            "text-decoration": "none",
            color: "#555"
        }
          , c = {
            margin: 0,
            "font-style": "italic"
        }
          , u = {
            "grid-area": "icon",
            overflow: "hidden",
            height: "32px",
            width: "32px",
            "border-radius": "1000px",
            margin: 0
        }
          , h = ()=>`\n    <div style="${(0,
        r.W)(l)}">\n    <div style="${(0,
        r.W)(u)}">\n      <img data-native-min-size="[100, 100]" data-native-type="${a.G.icon}" /> \n    </div>\n    <div style="${(0,
        r.W)(d)}">\n      <span data-native-type="${a.G.sponsoredBy}">Sponsored by </span>\n      <span style="${(0,
        r.W)(c)}" data-native-type="${a.G.displayurl}">on </span>\n    </div>\n  </div>\n  `
          , p = {
            background: "white",
            display: "grid",
            "border-radius": "3px",
            overflow: "hidden",
            gap: "12px",
            "grid-template-columns": o.A.isMobileOrTablet ? "1fr" : "minmax(max-content, 1fr) 1fr",
            "grid-template-areas": o.A.isMobileOrTablet ? "'media' 'content'" : "'media content'"
        }
          , m = {
            display: "flex",
            "flex-direction": "column",
            padding: o.A.isMobileOrTablet ? "10px" : "16px",
            "justify-content": "space-evenly",
            "align-items": "flex-start"
        }
          , g = {
            "line-height": "1.2",
            "letter-spacing": "initial",
            margin: "0",
            color: "#333",
            "font-weight": "bold",
            "font-size": o.A.isMobileOrTablet ? "16px !important" : "20px !important",
            "text-transform": "none",
            "grid-area": "content",
            overflow: "hidden",
            "-webkit-line-clamp": 2,
            "-webkit-box-orient": "vertical",
            "text-align": "left"
        }
          , b = {
            display: "inline-block",
            "text-decoration": "none",
            "background-color": "#eee",
            padding: o.A.isMobileOrTablet ? "4px 32px" : "8px 48px",
            color: "#333",
            "font-weight": "300",
            "text-align": "center",
            "font-size": o.A.isMobileOrTablet ? "12px !important" : "15px !important",
            "border-radius": "50px"
        }
          , y = {
            "align-self": "center",
            "grid-area": "content",
            "line-height": "initial",
            "letter-spacing": "initial",
            "font-weight": "300",
            "font-size": o.A.isMobileOrTablet ? "12px !important" : "15px !important",
            margin: "0px",
            overflow: "hidden",
            "-webkit-line-clamp": 3,
            "-webkit-box-orient": "vertical",
            "text-align": "left"
        }
          , v = `\n<div style="${(0,
        r.W)(p)}">\n\n  <div style="${(0,
        r.W)({
            "grid-area": "media"
        })}" data-native-size="[300, 250]" data-native-type="${a.G.video}">\n  </div>\n\n  <div style="${(0,
        r.W)({
            "min-height": "100px",
            width: "100%",
            "grid-area": "media",
            "background-repeat": "no-repeat",
            "background-position": "center center",
            "background-size": "contain!important",
            "background-color": "black"
        })}" data-native-min-size="[100, 100]" data-native-type="${a.G.image}">\n  </div>\n  <div class="native-content" style="${(0,
        r.W)(m)}">\n    ${h()}\n    <h3 style="${(0,
        r.W)(g)}" data-native-type="${a.G.title}" data-native-len="80" data-native-d-len="120"></h3>\n    <p style="${(0,
        r.W)(y)}"  data-native-type="${a.G.body}" data-native-len="140" data-native-d-len="340"></p>\n    <div style="${(0,
        r.W)({
            "grid-area": "content",
            "align-self": "center",
            "text-align": "left"
        })}" data-native-type="${a.G.clickUrl}">\n        <span style="${(0,
        r.W)(b)}" data-native-type="${a.G.cta}"></span>\n      </a>\n    </div>\n  </div>\n</div>\n`;
        var f = Object.defineProperty
          , w = Object.defineProperties
          , S = Object.getOwnPropertyDescriptors
          , A = Object.getOwnPropertySymbols
          , T = Object.prototype.hasOwnProperty
          , M = Object.prototype.propertyIsEnumerable
          , C = (e,t,i)=>t in e ? f(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : e[t] = i
          , x = (e,t)=>{
            for (var i in t || (t = {}))
                T.call(t, i) && C(e, i, t[i]);
            if (A)
                for (var i of A(t))
                    M.call(t, i) && C(e, i, t[i]);
            return e
        }
          , k = (e,t)=>w(e, S(t));
        const _ = {
            display: "grid",
            "grid-template-columns": "1fr",
            "grid-template-areas": "'media' 'content'",
            "background-color": "white",
            "border-radius": "5px",
            margin: "0 auto",
            padding: "0",
            "max-width": "300px"
        }
          , O = "#2A2F2F"
          , I = {
            background: "none!important",
            "box-shadow": "none!important",
            border: "none!important"
        }
          , P = k(x({}, I), {
            "grid-area": "media",
            position: "relative",
            "background-repeat": "no-repeat!important",
            "background-position": "center center!important",
            "background-size": "contain!important",
            "border-top": "8px solid #bebebe",
            "border-bottom": "8px solid #bebebe",
            "border-radius": "5px",
            margin: "0 auto",
            width: "100%"
        })
          , E = k(x({}, I), {
            "line-height": "initial",
            "letter-spacing": "initial",
            color: O,
            "font-family": "inherit",
            "font-weight": "bold",
            "font-size": "18px",
            "text-transform": "none",
            "text-decoration": "none"
        })
          , D = k(x({}, I), {
            overflow: "hidden",
            "-webkit-line-clamp": 2,
            "-webkit-box-orient": "vertical"
        })
          , B = k(x({}, I), {
            margin: 0,
            "align-self": "center",
            "text-align": "center",
            padding: o.A.isMobileOrTablet ? "auto 10px" : "8px 0px"
        })
          , R = k(x({}, I), {
            "text-decoration": "none",
            "background-color": "#eee!important",
            padding: "12px 48px",
            color: O,
            "font-weight": "300",
            "text-align": "center",
            "font-size": "14px",
            "border-radius": "35px"
        })
          , L = k(x({}, I), {
            margin: 0,
            "align-self": "center",
            "line-height": "initial",
            "letter-spacing": "initial",
            "font-size": "15px",
            "font-weight": "300",
            overflow: "hidden",
            "-webkit-line-clamp": 3,
            "-webkit-box-orient": "vertical"
        })
          , z = {
            display: "flex",
            "grid-area": "content",
            margin: 0,
            "flex-direction": "column",
            padding: o.A.isMobileOrTablet ? "10px" : "16px",
            "justify-content": "space-evenly",
            "align-items": "center",
            "row-gap": "12px"
        }
          , N = `\n<div style="${(0,
        r.W)(_)}">\n\n  <div style="${(0,
        r.W)({
            "grid-area": "media"
        })}" data-native-size="[300, 250]" data-native-type="${a.G.video}">\n  </div>\n\n  <a target="_blank" style="${(0,
        r.W)(P)}" data-native-min-size="[100, 100]" data-native-type="${a.G.image}">\n  </a>\n  <div class="native-recipe-content-wrapper" style="${(0,
        r.W)(z)}">\n    ${h()}\n    <a target="_blank" style="${(0,
        r.W)(E)}" data-native-type="${a.G.title}">\n      <h3 style="${(0,
        r.W)(D)}" data-native-len="80" data-native-d-len="120">\n      </h3>\n    </a>\n    <p style="${(0,
        r.W)(L)}"  data-native-type="${a.G.body}" data-native-len="140" data-native-d-len="340"></p>\n    <div style="${(0,
        r.W)(B)}">\n      <a style="${(0,
        r.W)(R)}" data-native-type="${a.G.clickUrl}">\n        <span data-native-type="cta"></span>\n      </a>\n    </div>\n  </div>\n</div>\n`;
        var $ = Object.defineProperty
          , j = Object.defineProperties
          , F = Object.getOwnPropertyDescriptors
          , H = Object.getOwnPropertySymbols
          , U = Object.prototype.hasOwnProperty
          , W = Object.prototype.propertyIsEnumerable
          , G = (e,t,i)=>t in e ? $(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : e[t] = i
          , V = (e,t)=>{
            for (var i in t || (t = {}))
                U.call(t, i) && G(e, i, t[i]);
            if (H)
                for (var i of H(t))
                    W.call(t, i) && G(e, i, t[i]);
            return e
        }
          , Z = (e,t)=>j(e, F(t));
        const q = {
            "max-width": "300px",
            "max-height": "350px",
            display: "grid",
            background: "white",
            "border-radius": "3px",
            "grid-template-columns": "300px",
            "grid-template-areas": "'media' 'content'"
        }
          , Q = "#2A2F2F"
          , Y = {
            background: "none!important",
            "box-shadow": "none!important",
            border: "none!important"
        }
          , J = Z(V({}, Y), {
            width: "300px",
            "grid-area": "media",
            "align-items": "center",
            "align-self": "center",
            "justify-content": "center",
            overflow: "hidden",
            position: "relative",
            "background-repeat": "no-repeat!important",
            "background-position": "center center!important",
            "background-size": "contain!important",
            "background-color": "black !important",
            "border-radius": "5px"
        })
          , K = Z(V({}, Y), {
            margin: 0,
            "line-height": "initial",
            "letter-spacing": "initial",
            color: Q,
            "font-family": "inherit",
            "font-weight": "bold",
            "text-transform": "none",
            "text-decoration": "none",
            "font-size": "16px"
        })
          , X = Z(V({}, Y), {
            margin: 0,
            "align-items": "left",
            overflow: "hidden",
            "-webkit-line-clamp": 2,
            "-webkit-box-orient": "vertical"
        })
          , ee = Z(V({}, Y), {
            "text-align": "center",
            padding: "8px"
        })
          , te = Z(V({}, Y), {
            display: "inline-block",
            "text-decoration": "none",
            "background-color": "#eee!important",
            padding: "8px 24px",
            color: Q,
            "text-align": "center",
            "font-size": "14px",
            "font-weight": "100",
            "text-transform": "none",
            "border-radius": "35px"
        });
        Z(V({}, Y), {
            "line-height": "initial",
            "letter-spacing": "initial",
            "font-size": "15px",
            overflow: "hidden",
            "-webkit-line-clamp": 3,
            "-webkit-box-orient": "vertical"
        }).margin = 0,
        K.margin = 0,
        J["min-height"] = "175px";
        const ie = `\n<div style="${(0,
        r.W)(q)}">\n  \n  <div style="${(0,
        r.W)({
            "grid-area": "media",
            width: "300px",
            "align-items": "center",
            "align-self": "center",
            "justify-content": "center"
        })}" data-native-size="[300, 250]" data-native-type="${a.G.video}">\n  </div>\n\n  <a target="_blank" style="${(0,
        r.W)(J)}" data-native-min-size="[100, 100]" data-native-type="${a.G.image}">\n  </a>\n  <div class="native-recipe-content-wrapper" style="${(0,
        r.W)({
            display: "flex",
            "grid-area": "content",
            "flex-direction": "column",
            padding: "10px",
            "justify-content": "space-evenly",
            "align-items": "center"
        })}">\n    ${h()}\n    <a target="_blank" style="${(0,
        r.W)(K)}" data-native-type="${a.G.title}">\n    <h3 style="${(0,
        r.W)(X)}" data-native-len="80" data-native-d-len="120">\n      \n    </h3></a>\n\n    <div style="${(0,
        r.W)(ee)}">\n      <a style="${(0,
        r.W)(te)}" data-native-type="${a.G.clickUrl}"><span data-native-type="cta"></span></a>\n    </div>\n  </div>\n</div>\n`;
        var ne = i(3583)
          , se = Object.defineProperty
          , oe = Object.defineProperties
          , re = Object.getOwnPropertyDescriptors
          , ae = Object.getOwnPropertySymbols
          , le = Object.prototype.hasOwnProperty
          , de = Object.prototype.propertyIsEnumerable
          , ce = (e,t,i)=>t in e ? se(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : e[t] = i
          , ue = (e,t)=>{
            for (var i in t || (t = {}))
                le.call(t, i) && ce(e, i, t[i]);
            if (ae)
                for (var i of ae(t))
                    de.call(t, i) && ce(e, i, t[i]);
            return e
        }
          , he = (e,t)=>oe(e, re(t));
        const pe = {
            display: "grid",
            width: "100%",
            height: "100px",
            "grid-column-gap": o.A.isMobile ? "5px" : "10px",
            "border-radius": "5px",
            "background-color": "inherit",
            "max-width": "fit-content",
            padding: o.A.isMobileOrTablet ? "0 10px" : 0
        };
        let me;
        me = window.$adManagementConfig.web.model.adhesion_light ? "#2A2F2F" : "#DADFDF";
        const ge = {
            background: "none!important",
            "box-shadow": "none!important",
            border: "none!important"
        }
          , be = he(ue({}, ge), {
            width: "150px",
            "grid-area": "media",
            "justify-self": "end",
            display: "block",
            "z-index": "100",
            position: "relative",
            "background-repeat": "no-repeat!important",
            "background-position": "center center!important",
            "background-size": "contain!important",
            "border-radius": "5px !important",
            transform: "translateY(-15px)"
        })
          , ye = he(ue({}, ge), {
            "letter-spacing": "initial",
            display: "inline-block",
            color: me,
            "font-family": "inherit",
            "font-weight": "bold",
            "font-size": o.A.isMobileOrTablet ? "16px" : "18px",
            margin: 0,
            padding: 0,
            "text-transform": "none",
            "text-decoration": "none",
            overflow: "hidden",
            "text-overflow": "ellipsis",
            "white-space": "nowrap",
            "max-width": "40vw"
        })
          , ve = he(ue({}, ge), {
            margin: 0,
            padding: 0,
            overflow: "hidden",
            "-webkit-line-clamp": 2,
            "-webkit-box-orient": "vertical"
        })
          , fe = he(ue({}, ge), {
            "grid-column": "2 / span 1",
            "grid-row": "1 / span 1",
            "text-transform": "emphasis",
            "font-size": o.A.isMobileOrTablet ? "12px" : "14px",
            "font-weight": 300,
            "text-decoration": "none",
            color: me
        })
          , we = he(ue({}, ge), {
            "grid-area": "cta",
            "align-self": "center",
            "text-align": "left"
        })
          , Se = he(ue({}, ge), {
            margin: 0,
            "text-decoration": "none",
            "background-color": "#eee!important",
            padding: "8px 30px",
            color: "#3A3F3F",
            "font-weight": "300",
            "text-align": "center",
            "font-size": o.A.isMobileOrTablet ? "12px" : "14px",
            "border-radius": "35px",
            "justify-self": "flex-start"
        });
        window.outerWidth > ne.Cf ? (pe.width = "100%",
        pe["min-width"] = "auto",
        pe["grid-template-columns"] = "minmax() repeat(3, max-content)",
        pe["grid-template-areas"] = "'media content cta'",
        pe["align-content"] = "start",
        pe.padding = "0px 20px",
        Se.display = "inline-block") : (pe["grid-template-columns"] = " max-content minmax(min-content, 1fr)",
        pe["grid-template-areas"] = "'media content' 'media cta'",
        pe["align-content"] = "start");
        const Ae = he(ue({}, ge), {
            display: "flex",
            "grid-area": "content",
            margin: 0,
            "flex-direction": "column",
            "justify-content": "center"
        })
          , Te = {
            content: v,
            feed: v,
            sticky_sidebar: N,
            recipe: ie,
            adhesion: `\n<div style="${(0,
            r.W)({
                "border-radius": "5px",
                "background-color": "var(--adhesion-background-color, rgb(0, 0, 0));",
                position: "relative",
                "max-height": "100px",
                "max-width": "calc(100vw - 65px)"
            })}">\n  <div style="${(0,
            r.W)(pe)}">\n    <div style="${(0,
            r.W)({
                display: "block",
                "grid-area": "media",
                "z-index": "100",
                height: "100%",
                width: "100%",
                "min-width": "200px",
                transform: "translateY(-40px)"
            })}" data-native-size="[300, 250]" data-native-type="${a.G.video}" loop></div>\n    <a target="_blank" style="${(0,
            r.W)(be)}" data-native-min-size="[100, 100]" data-native-type="${a.G.image}">\n    </a>\n\n    <div class="native-recipe-content-wrapper" style="${(0,
            r.W)(Ae)}">\n    <a target="_blank" style="${(0,
            r.W)(fe)}" data-native-type="${a.G.sponsoredBy}">Sponsored by </a>\n\n      <a target="_blank" style="${(0,
            r.W)(ye)}" data-native-type="${a.G.title}">\n      <h3 style="${(0,
            r.W)(ve)}" data-native-len="80"  data-native-m-len="20" data-native-t-len="80" data-native-d-len="120"></h3></a>\n    </div>\n    <div style="${(0,
            r.W)(we)}">\n      <a data-native-type="${a.G.clickUrl}"><span data-native-type="cta" style="${(0,
            r.W)(Se)}"></span></a>\n    </div>\n\n  </div>\n</div>\n`
        }
          , Me = ({target: e, slotName: t})=>e && e.getAttribute("data-native-template") || t
          , Ce = ({model: e, target: t, slotName: i})=>{
            const o = Me({
                target: t,
                slotName: i
            });
            if (document.body.classList.contains("mvt-js") && !(0,
            n.DY)("enableTrellisNative", "true"))
                return Te[o];
            const r = e.native_html_templates && e.native_html_templates[o] || Te[o];
            return r || (s.ZP.debug(`Cannot find a template name for ${i}!`),
            "")
        }
    }
    ,
    2978: (e,t,i)=>{
        "use strict";
        function n(e) {
            const t = [];
            return Object.keys(e).forEach((i=>{
                t.push(`${i}:${e[i]}`)
            }
            )),
            t.join(";").concat(";")
        }
        i.d(t, {
            W: ()=>n
        })
    }
    ,
    2456: (e,t,i)=>{
        "use strict";
        i.d(t, {
            DV: ()=>r,
            oH: ()=>a
        });
        var n = i(6185)
          , s = i(3127)
          , o = i(5595);
        const r = ({s2sSrc: e, s2sStagingSrc: t},{name: i})=>new RegExp("(.*)s2sStagingEnv-t$").test(i) ? t : e
          , a = (e=window.$adManagementConfig.web.model.s2sBetas || [])=>{
            const t = (0,
            o.Ph)("s2sVersion");
            if (t)
                return {
                    group: "t",
                    version: t,
                    name: t
                };
            if (window.$adManagementConfig.web.s2sBetaSelection)
                return window.$adManagementConfig.web.s2sBetaSelection;
            const i = l(e)
              , r = new n.K(i).activate(s.l.s2sBeta) || "production"
              , a = Math.random() > .5 ? "t" : "c"
              , d = {
                group: a,
                version: r,
                name: "production" === r ? "production" : `${r}-${a}`
            };
            return window.$adManagementConfig.web.s2sBetaSelection = d,
            d
        }
          , l = e=>{
            const t = e.map((e=>({
                flag: s.l.s2sBeta,
                percent: parseFloat(e.trafficPercentage),
                value: e.version
            })));
            return t.push({
                default: !0,
                value: "production",
                flag: s.l.s2sBeta
            }),
            t
        }
    }
    ,
    3222: (e,t,i)=>{
        "use strict";
        i.r(t),
        i.d(t, {
            default: ()=>F
        });
        var n = i(7562)
          , s = (e=>(e.mediavine = "mediavine",
        e.pubnation = "pubnation",
        e))(s || {})
          , o = (e=>(e.siteIdCTPDesktop = "desktop_ctp",
        e.siteIdAutoplayDesktop = "desktop_autoplay",
        e.siteIdCTPMobile = "mobile_ctp",
        e.siteIdAutoplayMobile = "mobile_autoplay",
        e.siteIdOutstreamMobile = "outstream_mobile",
        e.siteIdOutstreamDesktop = "outstream_desktop",
        e.siteIdStickyOutstreamMobile = "sticky_outstream_mobile",
        e.siteIdStickyOutstreamDesktop = "sticky_outstream_desktop",
        e))(o || {})
          , r = (e=>(e[e.bidAdjustment = .7] = "bidAdjustment",
        e.id = "indexExchange",
        e.testSiteId = "199990",
        e[e.timeout = 1e3] = "timeout",
        e))(r || {});
        const a = {
            [s.mediavine]: {
                desktop: {
                    ctp: "341819",
                    outstream: "502649"
                },
                mobile: {
                    ctp: "341821",
                    outstream: "502650"
                }
            },
            [s.pubnation]: {
                desktop: {
                    ctp: "872634",
                    outstream: "872633"
                },
                mobile: {
                    ctp: "872636",
                    outstream: "872632"
                }
            }
        }
          , l = {
            [s.mediavine]: {
                accountId: "17404",
                categoryLength: 40,
                id: "rubicon",
                siteId: {
                    desktop: "169104",
                    mobile: "169104"
                },
                sizeId: 201,
                outstreamSizeId: 203,
                testAccountId: "7780",
                testSizeId: 87184,
                testZone: "412394",
                zoneDesktopCTP: {
                    unsensitive: "891510",
                    sensitive: "891510"
                },
                zoneMobileCTP: {
                    unsensitive: "891512",
                    sensitive: "891512"
                },
                zoneOutstreamDesktop: "2831368",
                zoneOutstreamMobile: "2831370",
                zoneStickyOutstreamDesktop: "2761116",
                zoneStickyOutstreamMobile: "2761118",
                zoneOutstreamDesktopSens: "2787474",
                zoneOutstreamMobileSens: "2787476",
                zoneStickyOutstreamDesktopSens: "2787478",
                zoneStickyOutstreamMobileSens: "2787480"
            },
            [s.pubnation]: {
                accountId: "24214",
                categoryLength: 40,
                id: "rubicon",
                siteId: {
                    desktop: "499906",
                    mobile: "499920"
                },
                sizeId: 201,
                outstreamSizeId: 203,
                testAccountId: "7780",
                testSizeId: 87184,
                testZone: "412394",
                zoneDesktopCTP: {
                    unsensitive: "2979468",
                    sensitive: "3003876"
                },
                zoneMobileCTP: {
                    unsensitive: "2979542",
                    sensitive: "3003892"
                },
                zoneOutstreamDesktop: "2979464",
                zoneOutstreamMobile: "2979538",
                zoneStickyOutstreamDesktop: "2979466",
                zoneStickyOutstreamMobile: "2979540",
                zoneOutstreamDesktopSens: "3003870",
                zoneOutstreamMobileSens: "3003888",
                zoneStickyOutstreamDesktopSens: "3003872",
                zoneStickyOutstreamMobileSens: "3003890"
            }
        }
          , d = {
            [s.mediavine]: {
                mobile: {
                    unsticky: {
                        unsensitive: l[s.mediavine].zoneOutstreamMobile,
                        sensitive: l[s.mediavine].zoneOutstreamMobileSens
                    },
                    sticky: {
                        unsensitive: l[s.mediavine].zoneStickyOutstreamMobile,
                        sensitive: l[s.mediavine].zoneStickyOutstreamMobileSens
                    }
                },
                desktop: {
                    unsticky: {
                        unsensitive: l[s.mediavine].zoneOutstreamDesktop,
                        sensitive: l[s.mediavine].zoneOutstreamDesktopSens
                    },
                    sticky: {
                        unsensitive: l[s.mediavine].zoneStickyOutstreamDesktop,
                        sensitive: l[s.mediavine].zoneStickyOutstreamDesktopSens
                    }
                }
            },
            [s.pubnation]: {
                mobile: {
                    unsticky: {
                        unsensitive: l[s.pubnation].zoneOutstreamMobile,
                        sensitive: l[s.pubnation].zoneOutstreamMobileSens
                    },
                    sticky: {
                        unsensitive: l[s.pubnation].zoneStickyOutstreamMobile,
                        sensitive: l[s.pubnation].zoneStickyOutstreamMobileSens
                    }
                },
                desktop: {
                    unsticky: {
                        unsensitive: l[s.pubnation].zoneOutstreamDesktop,
                        sensitive: l[s.pubnation].zoneOutstreamDesktopSens
                    },
                    sticky: {
                        unsensitive: l[s.pubnation].zoneStickyOutstreamDesktop,
                        sensitive: l[s.pubnation].zoneStickyOutstreamDesktopSens
                    }
                }
            }
        };
        var c = (e=>(e.stickyOutstreamDesktop = "Pubnation_sticky_desktop_outstream_Prebid",
        e.stickyOutstreamMobile = "Pubnation_sticky_mobile_outstream_Prebid",
        e))(c || {})
          , u = i(8074)
          , h = Object.defineProperty
          , p = Object.defineProperties
          , m = Object.getOwnPropertyDescriptors
          , g = Object.getOwnPropertySymbols
          , b = Object.prototype.hasOwnProperty
          , y = Object.prototype.propertyIsEnumerable
          , v = (e,t,i)=>t in e ? h(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : e[t] = i;
        const f = {
            adSlotOutstreamDesktop: "desktop_outstream",
            adSlotOutstreamMobile: "mobile_outstream",
            adSlotStickyOutstreamDesktop: "sticky_outstream_desktop",
            adSlotStickyOutstreamMobile: "sticky_outstream_mobile",
            adSlotAdhesion: "adhesion_video",
            adSlotDesktop: "desktop_video",
            adSlotMobile: "mobile_video",
            adSlotSticky: "sticky_video",
            id: "pubmatic",
            publisherId: "157108",
            testAdSlot: "test_video",
            testPublisherId: "157593"
        }
          , w = new Map;
        var S;
        w.set("1", f),
        w.set("2", (S = ((e,t)=>{
            for (var i in t || (t = {}))
                b.call(t, i) && v(e, i, t[i]);
            if (g)
                for (var i of g(t))
                    y.call(t, i) && v(e, i, t[i]);
            return e
        }
        )({}, f),
        p(S, m({
            publisherId: "162150"
        }))));
        var A = i(2845)
          , T = i(3583)
          , M = i(700)
          , C = i(2946)
          , x = i(5595)
          , k = i(8152);
        class _ {
            constructor(e, t, i={}, s) {
                this.options = e,
                this.overrides = i,
                this.webModel = t,
                this.playerHeight = this.options.contentHeight || n.t_,
                this.playerWidth = this.options.contentWidth || n.UI,
                this.testBids = s || {},
                this.isOutstream = !!this.options.isOutstream,
                this.floor = this.isOutstream ? M.CP.getOutstreamFloor(t, (0,
                k.BL)(e.adunitId)) : M.CP.getVideoFloor(t),
                this.minDuration = this.isOutstream ? n.Og : n.bM,
                this.maxDuration = this.isOutstream ? n.qA : n.bg,
                this.discrepancies = this.isOutstream ? this.webModel.outstreamDiscrepancies : this.webModel.videoDiscrepancies,
                this.skippable = !this.isOutstream
            }
            calcFloor(e, t=1) {
                const i = (this.discrepancies || {})[e] || 1;
                return function(e, t) {
                    const i = Math.pow(10, t);
                    return Math.floor(e * i) / i
                }(this.floor / t / i + .01, T.bZ)
            }
            get amazon() {
                const e = this.calcFloor(A.SL.uam);
                let t;
                return t = this.options.mobile ? this.isOutstream ? this.options.placement === u.ug.floating ? o.siteIdStickyOutstreamMobile : o.siteIdOutstreamMobile : this.options.autoplay ? o.siteIdAutoplayMobile : o.siteIdCTPMobile : this.isOutstream ? this.options.placement === u.ug.floating ? o.siteIdStickyOutstreamDesktop : o.siteIdOutstreamDesktop : this.options.autoplay ? o.siteIdAutoplayDesktop : o.siteIdCTPDesktop,
                {
                    bidder: A.SL.uam,
                    params: {
                        bidfloor: e,
                        slotId: t
                    }
                }
            }
            getIndexExchangeBidRequest(e) {
                const t = this.testBids.indexExchange;
                let i;
                if (t)
                    i = r.testSiteId;
                else {
                    const e = this.webModel.offering.offering_code
                      , t = this.options.mobile ? "mobile" : "desktop"
                      , n = this.isOutstream ? "outstream" : "ctp";
                    i = a[e][t][n]
                }
                return {
                    bidder: A.SL.indexExchange,
                    params: {
                        bidFloor: this.calcFloor(A.SL.indexExchange),
                        bidFloorCur: "USD",
                        debug: t,
                        referrer: (null == top ? void 0 : top.window.location.href) || "",
                        siteId: i,
                        size: [this.playerWidth, this.playerHeight],
                        timeout: r.timeout
                    }
                }
            }
            get S2S() {
                const e = C.Rw.new(this.webModel)
                  , t = e.bidder
                  , i = e.mediaType;
                return {
                    bidder: A.tO.S2S,
                    params: {
                        floor: this.floor,
                        autoplay: this.options.autoplay,
                        mobile: this.options.mobile,
                        desktop: !this.options.mobile,
                        placement: this.isOutstream ? this.options.placement : u.ug.stream,
                        plcmt: this.isOutstream ? this.options.plcmt : u.rI.instream,
                        skip: this.isOutstream ? 0 : 1,
                        liftTestBidder: t,
                        liftTestMediaType: i
                    }
                }
            }
            getPubmaticBidRequest(e) {
                var t;
                const i = (null == (t = this.webModel.offering) ? void 0 : t.id) || "1"
                  , n = w.get(i) || f
                  , s = `${this.playerWidth}x ${this.playerHeight}`;
                let o, r = n.publisherId;
                const a = this.isOutstream && (0,
                x.DY)("test", "outstream");
                return this.testBids.pubmatic || a ? (r = n.testPublisherId,
                o = `${n.testAdSlot}@${s}`) : o = this.isOutstream ? this.options.placement === u.ug.floating ? this.options.mobile ? `${n.adSlotStickyOutstreamMobile}@${s}` : `${n.adSlotStickyOutstreamDesktop}@${s}` : this.options.mobile ? `${n.adSlotOutstreamMobile}@${s}` : `${n.adSlotOutstreamDesktop}@${s}` : this.isMobileAutoplay() ? `${n.adSlotAdhesion}@${s}` : !this.options.mobile && this.options.sticky || this.isDesktopAutoplay() ? `${n.adSlotSticky}@${s}` : this.options.mobile ? `${n.adSlotMobile}@${s}` : `${n.adSlotDesktop}@${s}`,
                {
                    bidder: A.SL.pubmatic,
                    params: {
                        adSlot: o,
                        kadfloor: this.calcFloor(A.SL.pubmatic).toString(),
                        bcat: this.webModel.iabOptouts,
                        outstreamAU: "no thank you",
                        publisherId: r
                    }
                }
            }
            getRubiconBidRequest(e) {
                const t = this.webModel.offering.offering_code === s.mediavine ? l[s.mediavine] : l[s.pubnation]
                  , i = this.webModel.offering.offering_code === s.mediavine ? d[s.mediavine] : d[s.pubnation]
                  , o = this.testBids.rubicon;
                let r, a = this.calcFloor(A.SL.rubicon, .865);
                const c = this.options.placement === u.ug.floating ? "sticky" : "unsticky"
                  , h = this.options.mobile ? "mobile" : "desktop"
                  , p = this.webModel.triplelift_sensitive ? "sensitive" : "unsensitive";
                return o ? (r = t.testZone,
                a = n.FW) : r = this.isOutstream ? i[h][c][p] : this.options.mobile ? t.zoneMobileCTP[p] : t.zoneDesktopCTP[p],
                {
                    bidder: A.SL.rubicon,
                    params: {
                        accountId: o ? t.testAccountId : t.accountId,
                        siteId: o ? t.testSizeId : t.siteId[h],
                        zoneId: r,
                        floor: o ? n.FW : a,
                        inventory: {
                            category: this.webModel.categories.map((e=>e.slug.substring(0, t.categoryLength)))
                        },
                        video: {
                            aeParams: {
                                "p_aso.video.ext.boxingallowed": "1"
                            },
                            language: "en",
                            size_id: this.isOutstream ? t.outstreamSizeId : t.sizeId
                        }
                    }
                }
            }
            getTripleliftBidRequest(e) {
                let t;
                return this.isOutstream && "2" === this.webModel.offering.id ? this.options.placement !== u.ug.floating ? null : (t = this.options.mobile ? c.stickyOutstreamMobile : c.stickyOutstreamDesktop,
                {
                    bidder: A.L4.triplelift,
                    params: {
                        floor: this.calcFloor(A.L4.triplelift),
                        inventoryCode: t
                    }
                }) : null
            }
            isMobileAutoplay() {
                return this.options.mobile && !!this.options.manualOptions.isAutomobile
            }
            isDesktopAutoplay() {
                return !this.options.mobile && !!this.options.manualOptions.isAutoplay
            }
        }
        var O = i(5077)
          , I = i(6057)
          , P = i(6091)
          , E = Object.defineProperty
          , D = Object.defineProperties
          , B = Object.getOwnPropertyDescriptors
          , R = Object.getOwnPropertySymbols
          , L = Object.prototype.hasOwnProperty
          , z = Object.prototype.propertyIsEnumerable
          , N = (e,t,i)=>t in e ? E(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : e[t] = i
          , $ = (e,t)=>{
            for (var i in t || (t = {}))
                L.call(t, i) && N(e, i, t[i]);
            if (R)
                for (var i of R(t))
                    z.call(t, i) && N(e, i, t[i]);
            return e
        }
          , j = (e,t)=>D(e, B(t));
        class F {
            constructor(e, t, i=window.pbjs, n, s, o={}) {
                this.webModel = t,
                this.auctionHouse = n,
                this.liftTest = s,
                this.options = e,
                this.overrides = o,
                this.prebid = i,
                this.isOutstream = !!this.options.isOutstream,
                this.testBids = F.getTestBids();
                const r = (0,
                P.RR)(this.testBids).filter((e=>this.testBids[e]))
                  , a = !!r.length;
                a && i.setConfig({
                    debugging: {
                        bidders: r,
                        adUnitCode: "content_2_outstream_desktop",
                        bids: r.map((e=>({
                            bidder: e,
                            cpm: 20
                        }))),
                        enabled: a
                    }
                })
            }
            static getTestBids() {
                const e = (0,
                x.Ph)("video_test_bids", window.location.search) || "";
                return Object.keys(A.SL).reduce(((t,i)=>j($({}, t), {
                    [i]: -1 !== e.indexOf(i)
                })), {})
            }
            getFormattedBidFromAuctionHouse(e, t) {
                const i = new I.d(this.webModel,t,{})
                  , {highestBid: n, hbCount: s} = this.auctionHouse.getHighestBidData(t, i, e);
                return n ? {
                    formattedBid: j($({}, this.formatBidAsDFPCustomParams(n)), {
                        hb_count: s
                    }),
                    highBid: n
                } : this.webModel.google ? {
                    formattedBid: {
                        hb_bid: 0,
                        hb_count: 0
                    }
                } : {
                    formattedBid: {
                        error: "No bids returned",
                        maxBid: 0
                    }
                }
            }
            runVideoAuction(e) {
                return t = this,
                i = null,
                s = function*() {
                    return new Promise(((t,i)=>{
                        this.prebid.bidderSettings = $($({}, this.prebid.bidderSettings), this.bidderSettings),
                        this.prebid.que.push((()=>{
                            this.prebid.requestBids({
                                adUnits: [this.getAdUnits(e)],
                                auctionId: O.D.video,
                                bidsBackHandler: (e={})=>{
                                    t(e)
                                }
                                ,
                                timeout: n.r2
                            })
                        }
                        ))
                    }
                    ))
                }
                ,
                new Promise(((e,n)=>{
                    var o = e=>{
                        try {
                            a(s.next(e))
                        } catch (e) {
                            n(e)
                        }
                    }
                      , r = e=>{
                        try {
                            a(s.throw(e))
                        } catch (e) {
                            n(e)
                        }
                    }
                      , a = t=>t.done ? e(t.value) : Promise.resolve(t.value).then(o, r);
                    a((s = s.apply(t, i)).next())
                }
                ));
                var t, i, s
            }
            getAdUnits(e={}) {
                const t = [this.options.contentWidth, this.options.contentHeight];
                return {
                    bids: this.getBidRequests(e),
                    code: this.options.adunitId,
                    mediaTypes: {
                        video: {
                            api: [u.bl.VPAID_1_0, u.bl.VPAID_2_0, u.bl.OMID_1_0],
                            context: this.isOutstream ? "outstream" : "instream",
                            delivery: [u.Gl.progressive],
                            linearity: u.cU.linear,
                            maxduration: this.isOutstream ? n.qA : n.bg,
                            minduration: this.isOutstream ? n.Og : n.bM,
                            mimes: this.options.mimes,
                            placement: this.isOutstream ? this.options.placement : u.ug.stream,
                            plcmt: this.isOutstream ? this.options.plcmt : u.rI.instream,
                            playbackmethod: this.options.autoplay ? [u.ZA.autoplaySoundOff] : [u.ZA.ctp],
                            playerSize: t,
                            protocols: [u.b$.VAST_2_0, u.b$.VAST_3_0, u.b$.VAST_2_0_wrapper, u.b$.VAST_3_0_wrapper, u.b$.VAST_4_0, u.b$.VAST_4_0_wrapper],
                            sizes: [t],
                            skip: this.isOutstream ? 0 : 1,
                            startdelay: e.startDelay || 0,
                            h: this.options.contentHeight,
                            w: this.options.contentWidth
                        }
                    }
                }
            }
            get bidderSettings() {
                return {
                    [r.id]: {
                        adserverTargeting: [{
                            key: "hb_vpmp_ixVideo",
                            val: e=>e.hb_vpmp_ixVideo
                        }]
                    }
                }
            }
            getBidRequests(e) {
                const t = new _(this.options,this.webModel,this.overrides,this.testBids);
                let i = [];
                if (this.shouldGetBid("indexExchange") && i.push(t.getIndexExchangeBidRequest(e)),
                this.shouldGetBid("uam") && i.push(t.amazon),
                this.shouldGetBid("pubmatic") && i.push(t.getPubmaticBidRequest(e)),
                this.shouldGetBid("rubicon")) {
                    const n = t.getRubiconBidRequest(e);
                    n && i.push(n)
                }
                if (this.shouldGetBid("triplelift")) {
                    const n = t.getTripleliftBidRequest(e);
                    n && i.push(n)
                }
                if (this.liftTest.bidder && this.liftTest.isVideo() && this.liftTest.isPrebid()) {
                    const e = this.liftTest.bidder;
                    i = i.filter((t=>t.bidder !== e))
                }
                return i.unshift(t.S2S),
                i
            }
            shouldGetBid(e) {
                return this.isOutstream ? this.isOutstreamBidder(e) : this.isVideoBidder(e)
            }
            isOutstreamBidder(e) {
                return Boolean(this.webModel[e] && A.L4[e])
            }
            isVideoBidder(e) {
                return Boolean(this.webModel[e] && A.SL[e])
            }
            formatBidAsDFPCustomParams(e) {
                let t;
                if (e && "number" == typeof e.cpm) {
                    const i = 200;
                    t = e.cpm < i ? e.cpm.toFixed(n.QC) : "200.00"
                } else
                    t = "no_bid";
                let i = e.s2sBidder ? `${e.s2sBidder}_s2s` : e.bidderCode;
                return i = i.substring(0, 20),
                {
                    hb_bid: t,
                    hb_pb: e.adserverTargeting.hb_pb,
                    hb_ub: e.adserverTargeting.hb_ub,
                    hb_uuid: e.videoCacheKey,
                    hb_bidder: i
                }
            }
        }
    }
    ,
    7548: (e,t,i)=>{
        "use strict";
        i.d(t, {
            Z: ()=>p,
            c: ()=>u
        });
        var n = i(8250)
          , s = i(6039)
          , o = i(2379)
          , r = i(2200)
          , a = i(2723)
          , l = i(9909)
          , d = i(3528)
          , c = i(953);
        const u = Math.round(2 * o.G.height)
          , h = 400;
        class p {
            constructor(e, t) {
                this.model = e,
                this.slotFactory = t,
                this.accountedForContentHeight = 0,
                this.resizeObs = new ResizeObserver(v)
            }
            render() {
                if (!this.shouldRenderDynamicSidebarSlots())
                    return;
                const e = document.querySelectorAll(this.model.sidebar_btf_selector);
                0 !== e.length && Array.from(e).forEach((e=>{
                    if ("true" === e.getAttribute("data-sidebar-ads-inserted"))
                        return !1;
                    e.setAttribute("data-sidebar-ads-inserted", "true");
                    setTimeout((()=>{
                        this.insertSidebars(e)
                    }
                    ), 1e3)
                }
                ))
            }
            insertSidebars(e) {
                let t, i = 0;
                e.offsetHeight <= 50 && (e = e.parentElement);
                const s = m(this.model)
                  , o = s.reduce(((e,t)=>e + t.offsetHeight), 0) - this.accountedForContentHeight;
                this.accountedForContentHeight += o;
                let a = e.offsetHeight;
                const l = f(e, this.model.sidebar_btf_stop_selector);
                o / a > 2 && (void 0 === l ? a = o : a += l),
                t = a;
                const c = this.getLastUnstickyElement(e);
                for (c && (t = a - (c.getBoundingClientRect().bottom - e.getBoundingClientRect().top)); t > u || 0 === i; ) {
                    i++;
                    const c = document.createElement("div");
                    (0,
                    r.cn)(c, "sidebarBtfStacked"),
                    e.insertAdjacentElement("beforeend", c);
                    const p = n.ZP.insertSlot(c, "SidebarBtfStacked", this.slotFactory, "beforeend")
                      , m = t;
                    t -= u,
                    t -= h,
                    t < u ? p.then((n=>{
                        if (n && n.adBoxConfig) {
                            this.finalSlot = n,
                            s.forEach((e=>{
                                void 0 === e.previousHeight && (e.previousHeight = e.offsetHeight,
                                e.sidebarSlot = n,
                                this.resizeObs.observe(e))
                            }
                            ));
                            const r = this.calculateTotalExtraPixels(n, c, i);
                            let u = n.adBoxConfig.heightPxToContain + (t + h) - r;
                            u = Math.max(250, u),
                            n.adBoxConfig.heightPxToContain = u,
                            n.rail._frame.style.height = `${u}px`,
                            n.adBox.style.height = `${u}px`;
                            setTimeout((()=>{
                                g(n, this.model)
                            }
                            ), 3e3),
                            d.ZP.custom(["dynamic"], "Last Stacked:", "numSlotsInserted", i, "contentHeight", o, "sidebarHeight", a, "oldRemainingHeight", m, "remainingHeight", t, "AddedHeight", t + h, "newHeight", u, "extraPixels", r, "distanceFromFooter", l, e)
                        }
                    }
                    )) : this.createGrowContentSpacer(e)
                }
            }
            getLastUnstickyElement(e) {
                let t = e.lastElementChild
                  , i = t && getComputedStyle(t);
                for (; i && t && ("fixed" === i.position || "sticky" === i.position); )
                    t = t.previousElementSibling,
                    i = t && getComputedStyle(t);
                return t
            }
            calculateTotalExtraPixels(e, t, i) {
                let n = 0;
                const s = (t.getBoundingClientRect().height - u) * i
                  , o = t.previousElementSibling;
                if (o) {
                    n = (y(o.previousElementSibling, o) + y(o, t)) * i
                }
                return s + n
            }
            createGrowContentSpacer(e) {
                const t = document.createElement("div");
                t.style.height = "400px",
                (0,
                r.cn)(t, "sidebarBtfStackedSpacer");
                const i = document.createElement("div");
                return this.insertGrowContent(i),
                t.insertAdjacentElement("beforeend", i),
                e.insertAdjacentElement("beforeend", t),
                t
            }
            insertGrowContent(e) {
                const t = {
                    type: "recommendedContent",
                    targetElement: e
                };
                l.Z.insert(t)
            }
            shouldRenderDynamicSidebarSlots() {
                var e;
                const t = this.model.sidebar_minimum_width || a.DEFAULT_MIN_WIDTH_FOR_STICKY;
                return Boolean(o.G.width > t && !s.A.isMobile && this.model.enable_grow_slidebar && this.model.sidebar_btf_selector && (l.Z.willGrowLoad || (null == (e = window.GrowMeSite) ? void 0 : e.growEnabled)))
            }
        }
        function m(e) {
            return Array.from(document.querySelectorAll(e.content_selector)).filter((e=>e.clientHeight > 300))
        }
        function g(e, t) {
            if (e && e.adBoxConfig) {
                const i = m(t);
                if (i.length > 0) {
                    const t = i[i.length - 1].getBoundingClientRect().bottom
                      , n = e.getSlotDom().getBoundingClientRect().bottom
                      , s = t - n;
                    t > n && b(e, s)
                }
            }
        }
        function b(e, t) {
            if (e && e.adBoxConfig) {
                const i = e.adBoxConfig.heightPxToContain + t;
                e.adBoxConfig.heightPxToContain = i,
                e.rail._frame.style.height = `${i}px`,
                e.adBox.style.height = `${i}px`,
                d.ZP.custom(["dynamic"], "Changed SidebarHeight by: ", t)
            }
        }
        function y(e, t) {
            const i = e.getBoundingClientRect()
              , n = t.getBoundingClientRect();
            return Math.abs(i.bottom - n.top)
        }
        const v = e=>{
            const t = window.$adManagementConfig.web.model;
            e.forEach((e=>{
                const i = e.target.sidebarSlot;
                if (e.target.previousHeight && i) {
                    const n = e.contentRect.height - e.target.previousHeight
                      , s = f(i.getSlotDom(), t.sidebar_btf_stop_selector) || n;
                    if (s > 100)
                        e.target.previousHeight = Math.round(e.contentRect.height),
                        b(i, s);
                    else if (n < -100) {
                        !function(e, t) {
                            var i;
                            let n = null == (i = e.getSlotDom().parentElement) ? void 0 : i.previousElementSibling;
                            for (; t > u + h && n; ) {
                                const e = n.previousElementSibling
                                  , i = e && e.querySelector(".sidebar_btf_wrapper")
                                  , s = i && c.Z.getSlotByWrapper(i);
                                n.remove(),
                                t -= h,
                                n = e && e.previousElementSibling,
                                s && (d.ZP.custom(["dynamic"], "REMOVING: ", null == s ? void 0 : s.id),
                                s.destroy(),
                                e.remove(),
                                t -= u)
                            }
                        }(i, Math.abs(n)),
                        e.target.previousHeight = Math.round(e.target.clientHeight)
                    }
                }
            }
            ))
        }
        ;
        function f(e, t) {
            let i;
            if (t) {
                const n = document.querySelectorAll(t);
                n.length > 0 && (i = y(e, n[n.length - 1]))
            }
            return i
        }
    }
    ,
    7825: (e,t,i)=>{
        "use strict";
        i.r(t),
        i.d(t, {
            DESKTOP_ADUNIT_ID: ()=>f,
            MOBILE_ADUNIT_ID: ()=>v,
            Recipe: ()=>S
        });
        var n = i(3583)
          , s = i(6039)
          , o = i(2379)
          , r = i(9906)
          , a = i(3127)
          , l = i(2415)
          , d = i(9)
          , c = i(2180)
          , u = i(9383)
          , h = i(7879)
          , p = i(8970)
          , m = i(4548)
          , g = i(3190)
          , b = Object.defineProperty
          , y = Object.getOwnPropertyDescriptor;
        const v = "recipe_mobile"
          , f = "recipe_btf"
          , w = {
            desktop: {
                lazy: 2600,
                ref: 1900
            },
            mobile: {
                lazy: 3400,
                ref: 2300
            }
        };
        let S = class extends r.g7 {
            constructor(e, t) {
                super(e, t),
                this.refreshTime = n.Q0,
                this.lazy = !0,
                this.slotName = "recipe",
                this.restrictRefreshSize = !0,
                this.adBoxConfig = new h.HB({
                    heightPxToContain: 320,
                    widthStyle: "300px"
                }),
                this.maxOutstreamWidth = 300,
                this.ibvConfig = new g.O(this),
                this.adUnitId = s.A.isMobileOrTablet ? v : f,
                this._sizes = this.adSizes,
                this.timeout = new c.V7(this,w),
                this.selector = s.A.isMobileOrTablet && e.mobileSelector ? e.mobileSelector : e.selector,
                this.insertPosition = s.A.isMobileOrTablet && e.mobileInsertPosition ? e.mobileInsertPosition : e.insertPosition;
                const i = parseFloat(t.experiment.activate(a.l.recipeOffset) || "1.00001");
                this._offset = o.G.height * i,
                this.setTargeting({
                    offsetMultiplier: i
                })
            }
            get offset() {
                return this._offset
            }
            get id() {
                return 1 === this.number ? this.adUnitId : this.adUnitId.replace("_", `_ ${this.number}_`)
            }
            validate() {
                const e = super.validate()
                  , t = !this.target || this.target.matches(":not(#chicory_button *)");
                return e && t
            }
            meetsOutstreamCriteria() {
                const e = {
                    off: 1 / 0,
                    light: 2,
                    medium: 1,
                    high: 1
                }[this.model.outstream_density] || 1;
                return (this.number + 1) % e == 0
            }
            template() {
                const e = super.template();
                return s.A.isMobileOrTablet ? `\n        <div class='remove_padding'>\n          ${e}\n        </div>\n      ` : e
            }
            sizeContainersLogic() {
                super.sizeContainersLogic(),
                this.adType === d.Z9.inBannerNative && (this.wrapper.style.width = "300px")
            }
            get adSizes() {
                const e = [[300, 250], [300, 200], [468, 60]];
                return s.A.isMobile ? e.push([320, 50], [300, 50], [320, 100]) : e.push([250, 250]),
                e
            }
        }
        ;
        S = ((e,t,i,n)=>{
            for (var s, o = n > 1 ? void 0 : n ? y(t, i) : t, r = e.length - 1; r >= 0; r--)
                (s = e[r]) && (o = (n ? s(t, i, o) : s(o)) || o);
            return n && o && b(t, i, o),
            o
        }
        )([m.b, l.q5, u.H, p.LB, h.DP], S)
    }
    ,
    8970: (e,t,i)=>{
        "use strict";
        i.d(t, {
            LB: ()=>h
        });
        var n = i(2321)
          , s = i(6039)
          , o = i(2200)
          , r = i(7666)
          , a = i(9225)
          , l = i(5595)
          , d = i(7879)
          , c = i(5571);
        const u = "mv-inview-sticky"
          , h = (e,t)=>class extends e {
            constructor(...e) {
                super(...e),
                this.inViewIsEnabled && this.setupSlotAndModel()
            }
            setupSlotAndModel() {
                this.onRail = !0,
                this.restrictRefreshSize = !1,
                this.adBoxConfig && (this.adBoxConfig.heightPxToContain = 400),
                this.rail.setupWrapElementListener(),
                n.Z.on(n.Z.events.slotWrapperRenderEnded, (e=>{
                    e === this && (p(`\n  [class*='${c.Ux}'].mv-inview-sticky {\n    display: block;\n  }\n\n  [class*='${c.z}'].mv-inview-sticky {\n    position: sticky;\n    position: -webkit-sticky;\n  }\n`),
                    (0,
                    r.F)(this.rail.sticky, {
                        overflow: "visible"
                    }, (0,
                    l.DY)("test", "mobileInview")))
                }
                ))
            }
            get inViewIsEnabled() {
                return e = this.model,
                (0,
                d.XH)(e) && (s.A.isMobileOrTablet && e.mobile_inview || s.A.isDesktop && e.desktop_inview) || this.forceInView;
                var e
            }
            applyInViewLayout() {
                this.rail.slide.classList.add(u),
                this.rail.sticky.classList.add(u);
                const e = this.rail.spaceNeededForAdReport();
                this.rail.slide.style.paddingBottom = `${e}px`
            }
            removeInViewLayout() {
                this.rail.slide.classList.remove(u),
                this.rail.sticky.classList.remove(u),
                this.rail.slide.style.paddingBottom = ""
            }
        }
        ;
        const p = (0,
        a.r)((e=>(0,
        o.hm)(e)))
    }
    ,
    8391: (e,t,i)=>{
        "use strict";
        i.d(t, {
            H8: ()=>m,
            iP: ()=>w
        });
        i(2321);
        var n = i(2379)
          , s = i(6039)
          , o = i(2200)
          , r = (i(7666),
        i(9225))
          , a = i(5595)
          , l = i(5662)
          , d = i(953)
          , c = i(7879)
          , u = i(5571);
        const h = "mv-interscroller-outer"
          , p = "mv-interscroller-inner"
          , m = 401
          , g = {
            threshold: 0,
            rootMargin: "200px 0px 200px 0px"
        }
          , b = (0,
        a.DY)("forceInterscroll", "true")
          , y = (0,
        a.DY)("forceTallOnly", "true");
        let v = (0,
        a.Ph)("parallaxShift") || "";
        v && "object" == typeof v && (v = v[0]);
        const f = [[300, 600], [320, 480], [300, 400]]
          , w = (e,t)=>class extends e {
            constructor(...e) {
                super(...e),
                this.isInWindow = !1,
                this.adReportSpace = 0,
                this._gSlotSizeFilter = f,
                this.updatePosition = ()=>{
                    this.isInWindow && this.updateParallax()
                }
                ,
                this.setupObserver = (0,
                r.r)((e=>{
                    (0,
                    l.c)().onChange((t=>{
                        t.forEach((({target: t, intersectionRatio: i})=>{
                            const n = t.getAttribute("data-slotid") || ""
                              , s = d.Z.getSlotById(n);
                            if (!s || e !== s)
                                return;
                            const o = e.rail.slide;
                            o && i > 0 ? (e.isInWindow = !0,
                            o.style.display = "") : o && (e.isInWindow = !1,
                            o.style.display = "none")
                        }
                        ))
                    }
                    ), g)
                }
                )),
                this.observeRail = ()=>{
                    this.setupObserver(this),
                    (0,
                    l.c)().observe(this.rail.frame, g)
                }
                ,
                this.interscrollerIsEnabled && this.interscrollerSetup()
            }
            interscrollerSetup() {
                T(`\n\t.mv-interscroller-outer,\n\t.mv-interscroller-outer[class*='${u.U}'] {\n\t\tposition: absolute;\n\t\tdisplay: block;\n\t\tmargin: 0 auto;\n\t\tinset: 0px;\n    top: 0px;\n    bottom: 0px;\n    left: 0px;\n    right: 0px;\n    ${A()};\n\t}\n\n\t.mv-interscroller-inner,\n\t.mv-ad-box .adunitwrapper.mv-interscroller-inner{\n\t\tposition: absolute;\n\t\ttop: 0;\n\t}\n`),
                this.setupObserver(this),
                this.adBoxConfig && (this.adBoxConfig.heightPxToContain = 329),
                this.rail.setupWrapElementListener()
            }
            validate() {
                return super.validate() && !!this.interscrollerConfig
            }
            get sizes() {
                const e = super.sizes.slice();
                if (!this.interscrollerIsEnabled)
                    return e;
                if (!this.interscrollerEnalbedForSlot)
                    return this.refreshSizeRestricted = !0,
                    e;
                const t = f;
                return y ? t : (e.splice(1, 0, ...t),
                e)
            }
            set sizes(e) {
                super.sizes = e
            }
            applyInterscrollerLayout() {
                this.adReportSpace = this.rail.spaceNeededForAdReport();
                const e = this.labelBuffer || 0;
                var t, i;
                this.observeRail(),
                t = this.rail.frame,
                i = this.wrapper,
                t.classList.add(h),
                i.classList.add(p),
                this.rail.frame.style.top = `${e}px`,
                this.rail.frame.style.height = `calc(100% - ${this.adReportSpace + e}px)`,
                window.addEventListener("scroll", this.updatePosition, {
                    passive: !0,
                    capture: !1
                }),
                this.updatePosition()
            }
            removeInterscrollerLayout() {
                var e, t;
                e = this.rail.frame,
                t = this.wrapper,
                e.classList.remove(h),
                t.classList.remove(p),
                window.removeEventListener("scroll", this.updatePosition),
                this.wrapper.style.transform = "",
                this.rail.frame.style.top = "",
                this.rail.frame.style.height = ""
            }
            updateParallax() {
                const {DIST_unavailableTopOfScreen: e, DIST_functionalAvailableViewport: t} = this.getScreenPositionValues()
                  , i = (n = this).height - n.rail.frame.getBoundingClientRect().height;
                var n;
                const s = function(e, t) {
                    var i;
                    return t - ((null == (i = e.adBoxConfig) ? void 0 : i.heightPxToContain) || m)
                }(this, t)
                  , o = function(e, t, i) {
                    const n = e.rail.frame.getBoundingClientRect().top
                      , s = (i - n + t) / i;
                    return s <= 0 ? 0 : s >= 1 ? 1 : s
                }(this, e, s);
                S(this, o * i * -1)
            }
            updateCentering() {
                const {DIST_unavailableTopOfScreen: e, DIST_functionalAvailableViewport: t} = this.getScreenPositionValues();
                S(this, (t - this.height) / 2 + e)
            }
            getScreenPositionValues() {
                const e = function(e) {
                    const t = s.A.isMobileOrTablet && e.model.mobile_header_offset || 0
                      , i = document.querySelector("body.grow-me-scroll-carousel-active");
                    return t + (i ? 60 : 0)
                }(this)
                  , t = function() {
                    if (!document.querySelector("body.adhesion"))
                        return 0;
                    return s.A.isDesktop ? 90 : 50
                }();
                return {
                    DIST_unavailableTopOfScreen: e,
                    DIST_functionalAvailableViewport: n.G.height - e - t + this.adReportSpace
                }
            }
            get interscrollerEnalbedForSlot() {
                var e;
                return this.interscrollerIsEnabled && !!(null == (e = this.interscrollerConfig) ? void 0 : e.isSlotValid())
            }
            get interscrollerLayoutApplies() {
                return this.interscrollerEnalbedForSlot && this.height >= m
            }
            get interscrollerIsEnabled() {
                return function(e) {
                    if (b)
                        return !0;
                    return (0,
                    c.XH)(e) && (s.A.isMobileOrTablet && e.interscroller_mobile || s.A.isDesktop && e.interscroller_desktop)
                }(this.model)
            }
        }
        ;
        function S(e, t) {
            const [i,n] = A().split(":");
            e.wrapper.style.setProperty("top", `${t}px`),
            e.rail.frame.style.setProperty(i, "none"),
            e.rail.frame.offsetWidth,
            e.rail.frame.style.setProperty(i, n)
        }
        function A() {
            return "Safari" === s.A.browser && s.A.isIOS && parseInt(s.A.osversion.split(".")[0], 10) <= 14 ? "clip: rect(0px, auto, auto, 0px)" : "clip-path: inset(0px 0px)"
        }
        const T = (0,
        r.r)((e=>(0,
        o.hm)(e)))
    }
    ,
    8662: (e,t,i)=>{
        "use strict";
        var n = i(4262);
        function s(e) {
            i.g.setTimeout(e, 1e3 / 60)
        }
        var o = 0
          , r = {}
          , a = i.g.onload;
        function l(e) {
            this.element = e,
            this.Adapter = n.Adapter,
            this.adapter = new this.Adapter(e),
            this.key = "waypoint-context-" + o,
            this.didScroll = !1,
            this.didResize = !1,
            this.oldScroll = {
                x: this.adapter.scrollLeft(),
                y: this.adapter.scrollTop()
            },
            this.waypoints = {
                vertical: {},
                horizontal: {}
            },
            e.waypointContextKey = this.key,
            r[e.waypointContextKey] = this,
            o += 1,
            this.createThrottledScrollHandler(),
            this.createThrottledResizeHandler()
        }
        l.prototype.add = function(e) {
            var t = e.options.horizontal ? "horizontal" : "vertical";
            this.waypoints[t][e.key] = e,
            this.refresh()
        }
        ,
        l.prototype.checkEmpty = function() {
            var e = this.Adapter.isEmptyObject(this.waypoints.horizontal)
              , t = this.Adapter.isEmptyObject(this.waypoints.vertical);
            e && t && (this.adapter.off(".waypoints"),
            delete r[this.key])
        }
        ,
        l.prototype.createThrottledResizeHandler = function() {
            var e = this;
            function t() {
                e.handleResize(),
                e.didResize = !1
            }
            this.adapter.on("resize.waypoints", (function() {
                e.didResize || (e.didResize = !0,
                n.requestAnimationFrame(t))
            }
            ))
        }
        ,
        l.prototype.createThrottledScrollHandler = function() {
            var e = this;
            function t() {
                e.handleScroll(),
                e.didScroll = !1
            }
            this.adapter.on("scroll.waypoints", (function() {
                e.didScroll && !n.isTouch || (e.didScroll = !0,
                n.requestAnimationFrame(t))
            }
            ))
        }
        ,
        l.prototype.handleResize = function() {
            n.Context.refreshAll()
        }
        ,
        l.prototype.handleScroll = function() {
            var e = {}
              , t = {
                horizontal: {
                    newScroll: this.adapter.scrollLeft(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left"
                },
                vertical: {
                    newScroll: this.adapter.scrollTop(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up"
                }
            };
            for (var i in t) {
                var n = t[i]
                  , s = n.newScroll > n.oldScroll ? n.forward : n.backward;
                for (var o in this.waypoints[i]) {
                    var r = this.waypoints[i][o]
                      , a = n.oldScroll < r.triggerPoint
                      , l = n.newScroll >= r.triggerPoint;
                    (a && l || !a && !l) && (r.queueTrigger(s),
                    e[r.group.id] = r.group)
                }
            }
            for (var d in e)
                e[d].flushTriggers();
            this.oldScroll = {
                x: t.horizontal.newScroll,
                y: t.vertical.newScroll
            }
        }
        ,
        l.prototype.innerHeight = function() {
            return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight()
        }
        ,
        l.prototype.remove = function(e) {
            delete this.waypoints[e.axis][e.key],
            this.checkEmpty()
        }
        ,
        l.prototype.innerWidth = function() {
            return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth()
        }
        ,
        l.prototype.destroy = function() {
            var e = [];
            for (var t in this.waypoints)
                for (var i in this.waypoints[t])
                    e.push(this.waypoints[t][i]);
            for (var n = 0, s = e.length; n < s; n++)
                e[n].destroy()
        }
        ,
        l.prototype.refresh = function() {
            var e, t = this.element == this.element.window, i = t ? void 0 : this.adapter.offset(), s = {};
            for (var o in this.handleScroll(),
            e = {
                horizontal: {
                    contextOffset: t ? 0 : i.left,
                    contextScroll: t ? 0 : this.oldScroll.x,
                    contextDimension: this.innerWidth(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left",
                    offsetProp: "left"
                },
                vertical: {
                    contextOffset: t ? 0 : i.top,
                    contextScroll: t ? 0 : this.oldScroll.y,
                    contextDimension: this.innerHeight(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up",
                    offsetProp: "top"
                }
            }) {
                var r = e[o];
                for (var a in this.waypoints[o]) {
                    var l, d, c, u, h = this.waypoints[o][a], p = h.options.offset, m = h.triggerPoint, g = 0, b = null == m;
                    h.element !== h.element.window && (g = h.adapter.offset()[r.offsetProp]),
                    "function" == typeof p ? p = p.apply(h) : "string" == typeof p && (p = parseFloat(p),
                    h.options.offset.indexOf("%") > -1 && (p = Math.ceil(r.contextDimension * p / 100))),
                    l = r.contextScroll - r.contextOffset,
                    h.triggerPoint = g + l - p,
                    d = m < r.oldScroll,
                    c = h.triggerPoint >= r.oldScroll,
                    u = !d && !c,
                    !b && (d && c) ? (h.queueTrigger(r.backward),
                    s[h.group.id] = h.group) : (!b && u || b && r.oldScroll >= h.triggerPoint) && (h.queueTrigger(r.forward),
                    s[h.group.id] = h.group)
                }
            }
            return n.requestAnimationFrame((function() {
                for (var e in s)
                    s[e].flushTriggers()
            }
            )),
            this
        }
        ,
        l.findOrCreateByElement = function(e) {
            return l.findByElement(e) || new l(e)
        }
        ,
        l.refreshAll = function() {
            for (var e in r)
                r[e].refresh()
        }
        ,
        l.findByElement = function(e) {
            return r[e.waypointContextKey]
        }
        ,
        i.g.onload = function() {
            a && a(),
            l.refreshAll()
        }
        ,
        n.requestAnimationFrame = function(e) {
            (i.g.requestAnimationFrame || i.g.mozRequestAnimationFrame || i.g.webkitRequestAnimationFrame || s).call(window, e)
        }
        ,
        e.exports = l
    }
    ,
    5146: (e,t,i)=>{
        "use strict";
        var n = i(4262);
        function s(e, t) {
            return e.triggerPoint - t.triggerPoint
        }
        function o(e, t) {
            return t.triggerPoint - e.triggerPoint
        }
        var r = {
            vertical: {},
            horizontal: {}
        };
        function a(e) {
            this.name = e.name,
            this.axis = e.axis,
            this.id = this.name + "-" + this.axis,
            this.waypoints = [],
            this.clearTriggerQueues(),
            r[this.axis][this.name] = this
        }
        a.prototype.add = function(e) {
            this.waypoints.push(e)
        }
        ,
        a.prototype.clearTriggerQueues = function() {
            this.triggerQueues = {
                up: [],
                down: [],
                left: [],
                right: []
            }
        }
        ,
        a.prototype.flushTriggers = function() {
            for (var e in this.triggerQueues) {
                var t = this.triggerQueues[e]
                  , i = "up" === e || "left" === e;
                t.sort(i ? o : s);
                for (var n = 0, r = t.length; n < r; n += 1) {
                    var a = t[n];
                    (a.options.continuous || n === t.length - 1) && a.trigger([e])
                }
            }
            this.clearTriggerQueues()
        }
        ,
        a.prototype.next = function(e) {
            this.waypoints.sort(s);
            var t = n.Adapter.inArray(e, this.waypoints);
            return t === this.waypoints.length - 1 ? null : this.waypoints[t + 1]
        }
        ,
        a.prototype.previous = function(e) {
            this.waypoints.sort(s);
            var t = n.Adapter.inArray(e, this.waypoints);
            return t ? this.waypoints[t - 1] : null
        }
        ,
        a.prototype.queueTrigger = function(e, t) {
            this.triggerQueues[t].push(e)
        }
        ,
        a.prototype.remove = function(e) {
            var t = n.Adapter.inArray(e, this.waypoints);
            t > -1 && this.waypoints.splice(t, 1)
        }
        ,
        a.prototype.first = function() {
            return this.waypoints[0]
        }
        ,
        a.prototype.last = function() {
            return this.waypoints[this.waypoints.length - 1]
        }
        ,
        a.findOrCreate = function(e) {
            return r[e.axis][e.name] || new a(e)
        }
        ,
        e.exports = a
    }
    ,
    7065: (e,t,i)=>{
        !function(t) {
            "use strict";
            var n;
            function s() {}
            function o(e) {
                this.options = n.Adapter.extend({}, o.defaults, e),
                this.axis = this.options.horizontal ? "horizontal" : "vertical",
                this.waypoints = [],
                this.element = this.options.element,
                this.createWaypoints()
            }
            n = i(4262),
            o.prototype.createWaypoints = function() {
                for (var e = {
                    vertical: [{
                        down: "enter",
                        up: "exited",
                        offset: "100%"
                    }, {
                        down: "entered",
                        up: "exit",
                        offset: "bottom-in-view"
                    }, {
                        down: "exit",
                        up: "entered",
                        offset: 0
                    }, {
                        down: "exited",
                        up: "enter",
                        offset: function() {
                            return -this.adapter.outerHeight()
                        }
                    }],
                    horizontal: [{
                        right: "enter",
                        left: "exited",
                        offset: "100%"
                    }, {
                        right: "entered",
                        left: "exit",
                        offset: "right-in-view"
                    }, {
                        right: "exit",
                        left: "entered",
                        offset: 0
                    }, {
                        right: "exited",
                        left: "enter",
                        offset: function() {
                            return -this.adapter.outerWidth()
                        }
                    }]
                }, t = 0, i = e[this.axis].length; t < i; t++) {
                    var n = e[this.axis][t];
                    this.createWaypoint(n)
                }
            }
            ,
            o.prototype.createWaypoint = function(e) {
                var t = this;
                this.waypoints.push(new n({
                    context: this.options.context,
                    element: this.options.element,
                    enabled: this.options.enabled,
                    handler: function(e) {
                        return function(i) {
                            t.options[e[i]].call(t, i)
                        }
                    }(e),
                    offset: e.offset,
                    horizontal: this.options.horizontal
                }))
            }
            ,
            o.prototype.destroy = function() {
                for (var e = 0, t = this.waypoints.length; e < t; e++)
                    this.waypoints[e].destroy();
                this.waypoints = []
            }
            ,
            o.prototype.disable = function() {
                for (var e = 0, t = this.waypoints.length; e < t; e++)
                    this.waypoints[e].disable()
            }
            ,
            o.prototype.enable = function() {
                for (var e = 0, t = this.waypoints.length; e < t; e++)
                    this.waypoints[e].enable()
            }
            ,
            o.defaults = {
                context: t,
                enabled: !0,
                enter: s,
                entered: s,
                exit: s,
                exited: s
            },
            e.exports = o
        }(void 0 !== i.g ? i.g : window)
    }
    ,
    4262: (e,t,i)=>{
        "use strict";
        var n = 0
          , s = {};
        function o(e) {
            if (!e)
                throw new Error("No options passed to Waypoint constructor");
            if (!e.element)
                throw new Error("No element option passed to Waypoint constructor");
            if (!e.handler)
                throw new Error("No handler option passed to Waypoint constructor");
            this.key = "waypoint-" + n,
            this.options = o.Adapter.extend({}, o.defaults, e),
            this.element = this.options.element,
            this.adapter = new o.Adapter(this.element),
            this.callback = e.handler,
            this.axis = this.options.horizontal ? "horizontal" : "vertical",
            this.enabled = this.options.enabled,
            this.triggerPoint = null,
            this.group = o.Group.findOrCreate({
                name: this.options.group,
                axis: this.axis
            }),
            this.context = o.Context.findOrCreateByElement(this.options.context),
            o.offsetAliases[this.options.offset] && (this.options.offset = o.offsetAliases[this.options.offset]),
            this.group.add(this),
            this.context.add(this),
            s[this.key] = this,
            n += 1
        }
        o.prototype.queueTrigger = function(e) {
            this.group.queueTrigger(this, e)
        }
        ,
        o.prototype.trigger = function(e) {
            this.enabled && this.callback && this.callback.apply(this, e)
        }
        ,
        o.prototype.destroy = function() {
            this.context.remove(this),
            this.group.remove(this),
            delete s[this.key]
        }
        ,
        o.prototype.disable = function() {
            return this.enabled = !1,
            this
        }
        ,
        o.prototype.enable = function() {
            return this.context.refresh(),
            this.enabled = !0,
            this
        }
        ,
        o.prototype.next = function() {
            return this.group.next(this)
        }
        ,
        o.prototype.previous = function() {
            return this.group.previous(this)
        }
        ,
        o.invokeAll = function(e) {
            var t = [];
            for (var i in s)
                t.push(s[i]);
            for (var n = 0, o = t.length; n < o; n++)
                t[n][e]()
        }
        ,
        o.destroyAll = function() {
            o.invokeAll("destroy")
        }
        ,
        o.disableAll = function() {
            o.invokeAll("disable")
        }
        ,
        o.enableAll = function() {
            o.invokeAll("enable")
        }
        ,
        o.refreshAll = function() {
            o.Context.refreshAll()
        }
        ,
        o.viewportHeight = function() {
            return i.g.innerHeight || document.documentElement.clientHeight
        }
        ,
        o.viewportWidth = function() {
            return document.documentElement.clientWidth
        }
        ,
        o.adapters = [],
        o.defaults = {
            context: i.g,
            continuous: !0,
            enabled: !0,
            group: "default",
            horizontal: !1,
            offset: 0
        },
        o.offsetAliases = {
            "bottom-in-view": function() {
                return this.context.innerHeight() - this.adapter.outerHeight()
            },
            "right-in-view": function() {
                return this.context.innerWidth() - this.adapter.outerWidth()
            }
        },
        e.exports = o
    }
}]);
