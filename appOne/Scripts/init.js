function $_global_init() {
    if ("undefined" == typeof g_all_modules) g_all_modules = {};
    g_all_modules["init.js"] = {
        version: {
            rmj: 16,
            rmm: 0,
            rup: 5611,
            rpr: 1207
        }
    };
    if (-1 != navigator.userAgent.indexOf("ProfilerMark") && "function" == typeof msWriteProfilerMark) spWriteProfilerMark = function(a) {
        window.msWriteProfilerMark(a)
    };
    typeof spWriteProfilerMark == "function" && spWriteProfilerMark("perfMarkBegin_init.js");
    if (typeof OffSwitch == "undefined") {
        OffSwitch = {
            __namespace: true
        };
        OffSwitch_module_def()
    }
    if (typeof RuntimeErrors == "undefined") {
        RuntimeErrors = {
            __namespace: true
        };
        RuntimeErrors_module_def()
    }
    if (typeof Verify == "undefined") {
        Verify = {
            __namespace: true
        };
        Verify_module_def()
    }
    if (typeof Define == "undefined") {
        Define = {
            __namespace: true
        };
        Define_module_def()
    }
    if (typeof BrowserDetection == "undefined") {
        BrowserDetection = {
            __namespace: true
        };
        BrowserDetection_module_def()
    }(function() {
        b.prototype = {
            firefox: undefined,
            firefox36up: undefined,
            firefox3up: undefined,
            firefox4up: undefined,
            ie: undefined,
            ie55up: undefined,
            ie5up: undefined,
            ie7down: undefined,
            ie8down: undefined,
            ie8standard: undefined,
            ie8standardUp: undefined,
            ie9down: undefined,
            ie9standardUp: undefined,
            ipad: undefined,
            windowsphone: undefined,
            chrome: undefined,
            chrome7up: undefined,
            chrome8up: undefined,
            chrome9up: undefined,
            iever: undefined,
            mac: undefined,
            major: undefined,
            msTouch: undefined,
            isTouch: undefined,
            nav: undefined,
            nav6: undefined,
            nav6up: undefined,
            nav7up: undefined,
            osver: undefined,
            safari: undefined,
            safari125up: undefined,
            safari3up: undefined,
            verIEFull: undefined,
            w3c: undefined,
            webKit: undefined,
            win: undefined,
            win8AppHost: undefined,
            win32: undefined,
            win64bit: undefined,
            winnt: undefined,
            armProcessor: undefined
        };
        a.prototype = b.prototype;
        a.prototype.ie10standardUp = undefined;
        a.prototype.ie11 = undefined;
        a.prototype.ie11up = undefined;
        a.prototype.msEdge = undefined;

        function a() {
            var a = navigator.userAgent.toLowerCase(),
                b;
            this.osver = 1;
            if (Boolean(a)) {
                var m = a.substring(a.indexOf("windows ") + 11);
                this.osver = parseFloat(m)
            }
            this.major = parseInt(navigator.appVersion);
            this.msEdge = a.indexOf("edge/") != -1;
            var f = a.indexOf("msie"),
                k = a.indexOf("trident");
            this.ie = f != -1 || k != -1;
            var c = "0";
            if (this.ie)
                if (f != -1) c = a.substring(f + 5);
                else {
                    var j = a.indexOf("rv:");
                    if (j != -1) c = a.substring(j + 3)
                }
            this.iever = parseInt(c);
            this.verIEFull = parseFloat(c);
            this.ie4up = this.ie && this.major >= 4;
            this.ie5up = this.ie && this.iever >= 5;
            this.ie55up = this.ie && this.verIEFull >= 5.5;
            this.ie6up = this.ie && this.iever >= 6;
            this.ie7down = this.ie && this.iever <= 7;
            this.ie8down = this.ie && this.iever <= 8;
            this.ie9down = this.ie && this.iever <= 9;
            this.ie7up = this.ie && this.iever >= 7;
            this.ie8standard = this.ie && Boolean(document.documentMode) && document.documentMode == 8;
            this.ie8standardUp = this.ie && Boolean(document.documentMode) && document.documentMode >= 8;
            this.ie9standardUp = this.ie && Boolean(document.documentMode) && document.documentMode >= 9;
            this.ie10standardUp = this.ie && Boolean(document.documentMode) && document.documentMode >= 10;
            this.ie11 = this.ie && Boolean(document.documentMode) && document.documentMode == 11;
            this.ie11up = this.ie && Boolean(document.documentMode) && document.documentMode >= 11;
            this.nav = a.indexOf("mozilla") != -1 && a.indexOf("spoofer") == -1 && a.indexOf("compatible") == -1 && !this.ie;
            this.nav6 = this.nav && this.major == 5;
            this.nav6up = this.nav && this.major >= 5;
            this.nav7up = false;
            if (this.nav6up) {
                b = a.indexOf("netscape/");
                if (b >= 0) this.nav7up = parseInt(a.substring(b + 9)) >= 7
            }
            this.winnt = a.indexOf("winnt") != -1 || a.indexOf("windows nt") != -1;
            this.win32 = this.major >= 4 && navigator.platform == "Win32" || a.indexOf("win32") != -1 || a.indexOf("32bit") != -1;
            this.win64bit = a.indexOf("win64") != -1;
            this.win = this.winnt || this.win32 || this.win64bit;
            this.safari = a.indexOf("webkit") != -1 && !this.ie && !this.msEdge;
            this.safari125up = false;
            this.safari3up = false;
            if (this.safari && this.major >= 5) {
                b = a.indexOf("webkit/");
                if (b >= 0) this.safari125up = parseInt(a.substring(b + 7)) >= 125;
                var i = a.indexOf("version/");
                if (i >= 0) this.safari3up = parseInt(a.substring(i + 8)) >= 3
            }
            this.firefox = this.nav && a.indexOf("firefox") != -1;
            this.firefox3up = false;
            this.firefox36up = false;
            this.firefox4up = false;
            if (this.firefox && this.major >= 5) {
                var h = a.indexOf("firefox/");
                if (h >= 0) {
                    var d = a.substring(h + 8);
                    this.firefox3up = parseInt(d) >= 3;
                    this.firefox36up = parseFloat(d) >= 3.6;
                    this.firefox4up = parseInt(d) >= 4
                }
            }
            this.chrome = this.nav && a.indexOf("chrome") != -1 && !this.ie && !this.msEdge;
            this.chrome7up = false;
            this.chrome8up = false;
            this.chrome9up = false;
            if (this.chrome && this.major >= 5) {
                var g = a.indexOf("chrome/");
                if (g >= 0) {
                    var l = a.substring(g + 7),
                        e = parseInt(l);
                    this.chrome7up = e >= 7;
                    this.chrome8up = e >= 8;
                    this.chrome9up = e >= 9
                }
            }
            this.ipad = a.indexOf("ipad") != -1;
            this.windowsphone = a.indexOf("windows phone") != -1;
            this.aol = this.ie && a.indexOf(" aol ") != -1;
            this.mac = a.indexOf("mac") != -1;
            this.w3c = this.nav6up;
            this.webKit = a.indexOf("webkit") != -1 && !this.ie && !this.msEdge;
            this.win8AppHost = a.indexOf("msapphost") != -1;
            this.msTouch = typeof navigator.msMaxTouchPoints != "undefined" && navigator.msMaxTouchPoints > 0;
            this.isTouch = this.msTouch || "ontouchstart" in document.documentElement;
            this.armProcessor = a.indexOf("arm") != -1
        }

        function b() {
            var a = navigator.userAgent.toLowerCase(),
                b;
            this.osver = 1;
            if (Boolean(a)) {
                var j = a.substring(a.indexOf("windows ") + 11);
                this.osver = parseFloat(j)
            }
            this.major = parseInt(navigator.appVersion);
            this.nav = a.indexOf("mozilla") != -1 && a.indexOf("spoofer") == -1 && a.indexOf("compatible") == -1;
            this.nav6 = this.nav && this.major == 5;
            this.nav6up = this.nav && this.major >= 5;
            this.nav7up = false;
            if (this.nav6up) {
                b = a.indexOf("netscape/");
                if (b >= 0) this.nav7up = parseInt(a.substring(b + 9)) >= 7
            }
            this.ie = a.indexOf("msie") != -1;
            this.ipad = a.indexOf("ipad") != -1;
            this.windowsphone = a.indexOf("windows phone") != -1;
            this.aol = this.ie && a.indexOf(" aol ") != -1;
            if (this.ie) {
                var g = a.substring(a.indexOf("msie ") + 5);
                this.iever = parseInt(g);
                this.verIEFull = parseFloat(g)
            } else this.iever = 0;
            this.ie4up = this.ie && this.major >= 4;
            this.ie5up = this.ie && this.iever >= 5;
            this.ie55up = this.ie && this.verIEFull >= 5.5;
            this.ie6up = this.ie && this.iever >= 6;
            this.ie7down = this.ie && this.iever <= 7;
            this.ie8down = this.ie && this.iever <= 8;
            this.ie9down = this.ie && this.iever <= 9;
            this.ie7up = this.ie && this.iever >= 7;
            this.ie8standard = this.ie && Boolean(document.documentMode) && document.documentMode == 8;
            this.ie8standardUp = this.ie && Boolean(document.documentMode) && document.documentMode >= 8;
            this.ie9standardUp = this.ie && Boolean(document.documentMode) && document.documentMode >= 9;
            this.ie10standardUp = this.ie && Boolean(document.documentMode) && document.documentMode >= 10;
            this.winnt = a.indexOf("winnt") != -1 || a.indexOf("windows nt") != -1;
            this.win32 = this.major >= 4 && navigator.platform == "Win32" || a.indexOf("win32") != -1 || a.indexOf("32bit") != -1;
            this.win64bit = a.indexOf("win64") != -1;
            this.win = this.winnt || this.win32 || this.win64bit;
            this.mac = a.indexOf("mac") != -1;
            this.w3c = this.nav6up;
            this.webKit = a.indexOf("webkit") != -1;
            this.safari = a.indexOf("webkit") != -1;
            this.safari125up = false;
            this.safari3up = false;
            if (this.safari && this.major >= 5) {
                b = a.indexOf("webkit/");
                if (b >= 0) this.safari125up = parseInt(a.substring(b + 7)) >= 125;
                var h = a.indexOf("version/");
                if (h >= 0) this.safari3up = parseInt(a.substring(h + 8)) >= 3
            }
            this.firefox = this.nav && a.indexOf("firefox") != -1;
            this.firefox3up = false;
            this.firefox36up = false;
            this.firefox4up = false;
            if (this.firefox && this.major >= 5) {
                var f = a.indexOf("firefox/");
                if (f >= 0) {
                    var c = a.substring(f + 8);
                    this.firefox3up = parseInt(c) >= 3;
                    this.firefox36up = parseFloat(c) >= 3.6;
                    this.firefox4up = parseInt(c) >= 4
                }
            }
            this.win8AppHost = a.indexOf("msapphost") != -1;
            this.chrome = this.nav && a.indexOf("chrome") != -1;
            this.chrome7up = false;
            this.chrome8up = false;
            this.chrome9up = false;
            if (this.chrome && this.major >= 5) {
                var e = a.indexOf("chrome/");
                if (e >= 0) {
                    var i = a.substring(e + 7),
                        d = parseInt(i);
                    this.chrome7up = d >= 7;
                    this.chrome8up = d >= 8;
                    this.chrome9up = d >= 9
                }
            }
            this.msTouch = typeof navigator.msMaxTouchPoints != "undefined" && navigator.msMaxTouchPoints > 0;
            this.isTouch = this.msTouch || "ontouchstart" in document.documentElement;
            this.armProcessor = a.indexOf("arm") != -1
        }
        if (typeof _browserisFlight !== "undefined") BrowserDetection.userAgent = new a;
        else BrowserDetection.userAgent = new b
    })();
    browseris = BrowserDetection.userAgent;
    bis = BrowserDetection.userAgent;
    if (typeof BrowserStorage == "undefined") {
        BrowserStorage = {
            __namespace: true
        };
        BrowserStorage_module_def()
    }
    if (typeof CSSUtil == "undefined") {
        CSSUtil = {
            __namespace: true
        };
        CSSUtil_module_def()
    }
    pxToNum = CSSUtil.pxToNum;
    GetWidthFromPxString = CSSUtil.pxToFloat;
    GetCurrentEltStyle = CSSUtil.getCurrentStyle;
    GetCurrentEltStyleByNames = CSSUtil.getCurrentEltStyleByNames;
    GetOpacity = CSSUtil.getOpacity;
    SetOpacity = CSSUtil.setOpacity;
    HasCssClass = CSSUtil.HasClass;
    AddCssClassToElement = CSSUtil.AddClass;
    RemoveCssClassFromElement = CSSUtil.RemoveClass;
    getCurrentEltStyleByNames = CSSUtil.getCurrentEltStyleByNames;
    if (typeof DOM == "undefined") {
        DOM = {
            __namespace: true
        };
        DOM_module_def()
    }
    fRightToLeft = DOM.rightToLeft;
    cancelDefault = DOM.cancelDefault;
    AbsLeft = DOM.AbsLeft;
    AbsTop = DOM.AbsTop;
    CancelEvent = DOM.CancelEvent;
    GetElementsByName = DOM.GetElementsByName;
    GetEventCoords = DOM.GetEventCoords;
    GetEventSrcElement = DOM.GetEventSrcElement;
    GetInnerText = DOM.GetInnerText;
    PreventDefaultNavigation = DOM.PreventDefaultNavigation;
    SetEvent = DOM.SetEvent;
    if (typeof Encoding == "undefined") {
        Encoding = {
            __namespace: true
        };
        Encoding_module_def()
    }
    encodeScriptQuote = Encoding.EncodeScriptQuote;
    STSHtmlEncode = Encoding.HtmlEncode;
    STSHtmlDecode = Encoding.HtmlDecode;
    StAttrQuote = Encoding.AttrQuote;
    STSScriptEncode = Encoding.ScriptEncode;
    STSScriptEncodeWithQuote = Encoding.ScriptEncodeWithQuote;
    CanonicalizeUrlEncodingCase = Encoding.CanonicalizeUrlEncodingCase;
    if (typeof ExpFlighting == "undefined") {
        ExpFlighting = {
            __namespace: true
        };
        ExpFlighting_module_def()
    }
    if (typeof IE8Support == "undefined") {
        IE8Support = {
            __namespace: true
        };
        IE8Support_module_def()
    }
    if (typeof RequestUtil == "undefined") {
        RequestUtil = {
            __namespace: true
        };
        RequestUtil_module_def()
    }
    if (typeof StringUtil == "undefined") {
        StringUtil = {
            __namespace: true
        };
        StringUtil_module_def()
    }
    StBuildParam = StringUtil.BuildParam;
    if (typeof TypeUtil == "undefined") {
        TypeUtil = {
            __namespace: true
        };
        TypeUtil_module_def()
    }
    IsArray = TypeUtil.IsArray;
    IsNullOrUndefined = TypeUtil.IsNullOrUndefined;
    ObjectUtil = {
        __namespace: true
    };
    ObjectUtil_module_def();
    URI = function(M, f) {
        var c = this,
            w = "#",
            r = ":",
            l = "/",
            y = "//",
            s = "?",
            p = ";",
            E = "&",
            H = "@",
            v = "=",
            L = ";/?:@&=$,",
            J = "/?",
            o = false;
        if (typeof f !== "undefined" && typeof f.queryCaseInsensitive === "boolean") o = f.queryCaseInsensitive;
        var n = false;
        if (typeof f !== "undefined" && typeof f.disableEncodingDecodingForLegacyCode === "boolean") n = f.disableEncodingDecodingForLegacyCode;
        var z = false;
        if (typeof f !== "undefined" && typeof f.pathCaseInsensitive === "boolean") z = f.pathCaseInsensitive;
        var h = "",
            g = "",
            a = "",
            k = "",
            m = "",
            t = "",
            q = "",
            j = {},
            i = "";
        this.getScheme = function() {
            return h
        };
        this.setScheme = function(a) {
            h = b(a)
        };
        this.getAuthority = function() {
            return F(false)
        };
        this.setAuthority = function(a) {
            B(a)
        };
        this.getUser = function() {
            return g
        };
        this.getHost = function() {
            return a
        };
        this.getPort = function() {
            return k
        };
        this.getPath = function(b) {
            var a = m;
            if (typeof b === "boolean" && b)
                if (a !== null && a.lastIndexOf(l) === a.length - 1) a = a.slice(0, -1);
            return a
        };
        this.setPath = function(a) {
            if (a.indexOf(l) !== 0) a = l + a;
            u(a)
        };
        this.getPathSegments = function() {
            if (m === null) return [];
            var a = m.split(l);
            if (a.length > 0)
                if (a[0] === "") a.shift();
                else a[a.length - 1] === "" && a.pop();
            return a
        };
        this.getLastPathSegment = function(d) {
            var b = c.getPathSegments();
            if (b.length === 0) return "";
            else {
                var a = b[b.length - 1];
                if (typeof d !== "boolean" || !d) {
                    var e = a.indexOf(p);
                    if (e >= 0) a = a.substring(0, e)
                }
                return a
            }
        };
        this.getParameters = function() {
            return q
        };
        this.getQuery = function() {
            return C(j)
        };
        this.setQuery = function(b) {
            var a = K(b);
            c.setQueryFromObject(a)
        };
        this.getQueryAsObject = function() {
            return j
        };
        this.setQueryFromObject = function(b) {
            j = {};
            for (var a in b) b.hasOwnProperty(a) && c.setQueryParameter(a, b[a])
        };
        this.getQueryParameter = function(e) {
            var a = null,
                b = c.getQueryAsObject();
            if (o) {
                for (var d in b)
                    if (j.hasOwnProperty(d) && d.toLowerCase() === e.toLowerCase()) a = b[d]
            } else a = b[e];
            return typeof a !== "undefined" ? a : null
        };
        this.setQueryParameter = function(e, d) {
            var c = b(e),
                a = b(d);
            j[c] = a
        };
        this.removeQueryParameter = function(c) {
            var a = b(c);
            delete j[a]
        };
        this.getFragment = function() {
            return i
        };
        this.setFragment = function(a) {
            if (a.indexOf(w) === 0) a = a.substring(1);
            i = b(a)
        };
        var e = function(a, b) {
                return a != null && b != null ? a.toLowerCase() === b.toLowerCase() : a === b
            },
            D = function(a, b) {
                return a === b
            };
        this.equals = function(b) {
            return h.toLowerCase() === b.getScheme().toLowerCase() && g === b.getUser() && a.toLowerCase() === b.getHost().toLowerCase() && k === b.getPort() && (z ? e : D)(c.getPath(true), b.getPath(true)) && q === b.getParameters() && (o ? e : D)(c.getQuery(), b.getQuery()) && i === b.getFragment()
        };
        this.equivalent = function(b) {
            return e(h, b.getScheme()) && e(g, b.getUser()) && e(a, b.getHost()) && e(k, b.getPort()) && e(c.getPath(true), b.getPath(true)) && e(q, b.getParameters()) && ObjectUtil.deepCompare(c.getQueryAsObject(), b.getQueryAsObject(), d) && e(i, b.getFragment());

            function d(c, d) {
                var a = URI.decodeURIComponent(c),
                    b = URI.decodeURIComponent(d);
                return a === b
            }
        };
        this.getString = function(a) {
            return A(true, a)
        };
        this.getDecodedStringForDisplay = function() {
            return A(false)
        };
        this.getStringWithoutQueryAndFragment = function() {
            return x(true)
        };
        var A = function(a, e) {
                var b = x(a, e),
                    c = C(j, a);
                if (c !== "") b += s + c;
                if (i !== "") b += w + (a ? d(i) : i);
                return b
            },
            x = function(b, e) {
                var a = "";
                if (h !== "") a += (b ? d(h) : h) + r;
                var c = F(b, e);
                if (c !== "") a += y + c;
                if (t !== "") a += b ? t : m;
                return a
            },
            O = function(b) {
                var a = b;
                if (o) a = a.toLowerCase();
                return a
            },
            K = function(b) {
                var g = {};
                if (b.indexOf(s) === 0) b = b.substring(1);
                for (var d = b.split(/[;&]+/), c = 0; c < d.length; c++) {
                    var h = d[c],
                        a = h.split(v);
                    if (a.length > 0) {
                        var f = a[0];
                        if (f.length > 0) {
                            var e = "";
                            if (a.length == 2) e = a[1];
                            g[f] = e
                        }
                    }
                }
                return g
            },
            C = function(g, c) {
                c = typeof c === "undefined" ? false : c;
                var a = "";
                for (var f in g)
                    if (g.hasOwnProperty(f)) {
                        var e = f,
                            b = g[f];
                        if (c) {
                            e = d(e);
                            b = d(b)
                        }
                        if (b === null || b === "") a += e + v + E;
                        else a += e + v + b + E
                    }
                if (a !== "") a = a.slice(0, -1);
                return a
            },
            N = function() {
                var a = M,
                    d = a.indexOf(w);
                if (d >= 0) {
                    var l = a.substring(d + 1);
                    c.setFragment(l);
                    a = a.substring(0, d)
                }
                var b = G(a, L);
                if (b >= 0) {
                    var k = a.indexOf(r);
                    if (k >= 0 && k === b) {
                        h = a.substring(0, b);
                        a = a.substring(b + 1)
                    }
                } else {
                    u(a);
                    return
                }
                var i = "",
                    j = a.indexOf(y);
                if (j >= 0 && j === 0) {
                    a = a.substring(2);
                    var f, e = G(a, J);
                    if (e >= 0) {
                        i = a.substring(0, e);
                        a = a.substring(e);
                        f = false
                    } else {
                        i = a;
                        f = true
                    }
                    B(i);
                    if (f) return
                }
                var g = a.indexOf(s);
                if (g >= 0) {
                    c.setQuery(a.substring(g + 1));
                    a = a.substring(0, g)
                }
                u(a)
            },
            B = function(f) {
                a = f;
                var c = f.lastIndexOf(H);
                if (c >= 0) a = a.substring(c + 1);
                var d = a.indexOf(r);
                if (c < 0 && d < 0) return;
                var e = f;
                if (c < 0) a = e;
                else {
                    g = e.substring(0, c);
                    a = e.substring(c + 1)
                }
                if (d >= 0) {
                    k = a.substring(d + 1);
                    a = a.substring(0, d)
                }
                g = b(g);
                a = b(a)
            },
            u = function(e) {
                var h = e.indexOf(p);
                if (h >= 0) q = b(e.substring(h + 1));
                m = b(e);
                for (var a = e.split(l), c = 0; c < a.length; ++c) {
                    var k = a[c],
                        f = k.split(p),
                        j = b(f[0]);
                    a[c] = d(j);
                    for (var g = 1; g < f.length; ++g) {
                        var i = b(f[g]);
                        a[c] += p + d(i)
                    }
                }
                t = a.join(l)
            },
            G = function(d, c) {
                for (var a = 0; a < d.length; a++)
                    for (var e = d[a], b = 0; b < c.length; b++)
                        if (e === c[b]) return a;
                return -1
            },
            I = function() {
                var a;
                if (n) a = g;
                else {
                    a = d(g);
                    a = a.replace("%3A", ":")
                }
                return a
            },
            F = function(j, f) {
                var i = false;
                if (typeof f !== "undefined" && typeof f.doNotPercentEncodeHost === "boolean") i = f.doNotPercentEncodeHost;
                var b = "",
                    e, c, h;
                if (j) {
                    e = I();
                    if (i) c = a;
                    else c = d(a);
                    h = d(k)
                } else {
                    e = g;
                    c = a;
                    h = k
                }
                if (e !== "") b = e + H;
                if (a !== "") b += c;
                if (k !== "") b += r + h;
                return b
            },
            d = function(a) {
                return n ? a : encodeURIComponent(a)
            },
            b = function(a) {
                return n ? a : URI.decodeURIComponent(a)
            };
        N()
    };
    (function() {
        var j = [0, 128, 2048, 65536, 2097152, 67108864, 2147483648];

        function b(e) {
            var f = 0,
                a = "",
                b, h, c, d, g;
            while (f < e.length)
                if (e[f] <= 127) a += String.fromCharCode(e[f++]);
                else {
                    c = e[f++];
                    d = Boolean(c & 32) ? Boolean(c & 16) ? 3 : 2 : 1;
                    g = d;
                    b = c & 255 >>> 2 + d;
                    while (Boolean(d) && f < e.length) {
                        --d;
                        c = e[f++];
                        if (c == 0) return a;
                        if ((c & 192) != 128) {
                            a += "?";
                            break
                        }
                        b = b << 6 | c & 63
                    }
                    if (Boolean(d)) {
                        a += "?";
                        break
                    }
                    if (b < j[g]) {
                        a += "?";
                        break
                    } else if (b <= 65535) a += String.fromCharCode(b);
                    else if (b <= 1114111) {
                        b -= 65536;
                        a += String.fromCharCode(55296 | b >>> 10);
                        a += String.fromCharCode(56320 | b & 1023)
                    } else a += "?"
                }
            return a
        }

        function g(d) {
            if (d == null) return "null";
            var f = 0,
                h = 0,
                e = "",
                g = [],
                a = 0,
                c, i;
            while (f < d.length)
                if (d.charAt(f) == "%")
                    if (d.charAt(++f) == "u") {
                        c = "";
                        for (h = 0; h < 4 && f < d.length; ++h) c += d.charAt(++f);
                        while (c.length < 4) c += "0";
                        i = parseInt(c, 16);
                        if (isNaN(i)) e += "?";
                        else e += String.fromCharCode(i)
                    } else {
                        c = "";
                        for (h = 0; h < 2 && f < d.length; ++h) c += d.charAt(f++);
                        while (c.length < 2) c += "0";
                        i = parseInt(c, 16);
                        if (isNaN(i)) {
                            if (Boolean(a)) {
                                e += b(g);
                                a = 0;
                                g.length = a
                            }
                            e += "?"
                        } else g[a++] = i
                    }
            else {
                if (Boolean(a)) {
                    e += b(g);
                    a = 0;
                    g.length = a
                }
                e += d.charAt(f++)
            }
            if (Boolean(a)) {
                e += b(g);
                a = 0;
                g.length = a
            }
            return e
        }

        function a(b) {
            var a = null;
            try {
                a = decodeURIComponent(b)
            } catch (c) {
                a = g(b)
            }
            return a
        }

        function l(c) {
            var a = document.createElement("a");
            a.href = c;
            var b = a.href;
            a = null;
            return b
        }

        function d(a, e) {
            var d = a.indexOf("?"),
                c = a.indexOf("#");
            if (-1 == d) return a;
            if (-1 == c) c = a.length;
            if (c <= d) return a;
            var b = a.substr(d, c - d),
                f = new RegExp("[&?]" + e + "=[^&]*", "");
            b = b.replace(f, "");
            if (b.length > 0 && "&" == b[0]) b = "?" + b.substr(1);
            return a.substr(0, d) + b + a.substr(c)
        }

        function i(c, a) {
            var b = new RegExp(c + "=[^&]*&");
            a = a.replace(b, "");
            b = new RegExp(c + "=[^&]*");
            a = a.replace(b, "");
            return a
        }

        function e(a) {
            var b = a.indexOf("?");
            return b == -1 ? a : a.substr(0, b)
        }

        function m(a, d, g) {
            var b = d + "=" + g,
                f = a.indexOf("?"),
                c = a.indexOf("#");
            if (f != -1) {
                var e = a.indexOf("?" + d + "=", f);
                if (e == -1) {
                    e = a.indexOf("&" + d + "=", f);
                    if (e != -1) b = "&" + b
                } else b = "?" + b;
                if (e != -1) {
                    var h = new RegExp("[&?]" + d + "=[^&#]*", "");
                    a = a.replace(h, b)
                } else if (c == -1) a = a + "&" + b;
                else a = a.substr(0, c) + "&" + b + a.substr(c)
            } else if (c == -1) a = a + "?" + b;
            else a = a.substr(0, c) + "?" + b + a.substr(c);
            return a
        }

        function k(c) {
            if (typeof c == "undefined" || c == null) return c;
            var b = c,
                d = a(b);
            while (b != d) {
                b = d;
                d = a(b)
            }
            return b
        }

        function h(a, h) {
            var b = h + 1,
                f = a.match(new RegExp("FilterField" + String(b) + "=[^&]*")),
                g = false;
            if (!Boolean(f)) {
                f = a.match(new RegExp("FilterFields" + String(b) + "=[^&]*"));
                g = f != null
            }
            for (var e = h; f != null; e++) {
                var c = g ? "FilterFields" + String(e) : "FilterField" + String(e),
                    d = g ? "FilterFields" + String(b) : "FilterField" + String(b);
                a = a.replace(d, c);
                c = g ? "FilterValues" + String(e) : "FilterValue" + String(e);
                d = g ? "FilterValues" + String(b) : "FilterValue" + String(b);
                a = a.replace(d, c);
                c = "FilterOp" + String(e);
                d = "FilterOp" + String(b);
                a = a.replace(d, c);
                c = "FilterLookupId" + String(e);
                d = "FilterLookupId" + String(b);
                a = a.replace(d, c);
                c = "FilterData" + String(e);
                d = "FilterData" + String(b);
                a = a.replace(d, c);
                b++;
                f = a.match(new RegExp("FilterField" + String(b) + "=[^&]*"));
                if (!Boolean(f)) f = a.match(new RegExp("FilterFields" + String(b) + "=[^&]*"))
            }
            return a
        }

        function f(b, f, i) {
            var d, e = [];
            if (f == null) f = ";#";
            var p = f.charCodeAt(0),
                o = f.charCodeAt(1);
            if (b == null || b.length == 0) return e;
            var h = f.charAt(0),
                n = h + h,
                l = new RegExp(n, "g"),
                k = f.charAt(0),
                c = 0;
            if (b.substr(0, 2) == f) {
                Boolean(i) && e.push("");
                c = 2
            }
            var a = c,
                g = false,
                j = b.length;
            while (a < j) {
                var m = b.indexOf(h, a);
                if (m >= 0) {
                    a = m;
                    a++;
                    if (b.charCodeAt(a) == o) {
                        if (a - 1 > c) {
                            d = b.substr(c, a - c - 1);
                            if (g) d = d.replace(l, k);
                            e.push(d);
                            g = false
                        } else e.push("");
                        a++;
                        c = a;
                        continue
                    } else if (b.charCodeAt(a) == p) {
                        a++;
                        g = true;
                        continue
                    } else throw "ArgumentException";
                } else a = j
            }
            if (a > c) {
                d = b.substr(c, a - c);
                if (g) d = d.replace(l, k);
                e.push(d)
            } else Boolean(i) && e.push("");
            return e
        }

        function c(f, b, c) {
            if (b == null) b = ";#";
            if (c == null) c = true;
            for (var h = b.charAt(0), i = h + h, j = new RegExp(b.charAt(0), "g"), g = false, d = "", e = 0; e < f.length; e++) {
                var a = f[e];
                if (a != null && a.length > 0) a = a.replace(j, i);
                if (a != null && a.length > 0) g = true;
                if (c || e != 0) d += b;
                d += a
            }
            if (g) {
                if (c) d += b;
                return d
            } else return ""
        }
        URI.decodeURIComponent = a;
        URI.getAbsolute = l;
        URI.removeKeyValue = i;
        URI.removeParameters = e;
        URI.removeQueryParameter = d;
        URI.stURLSetVar2 = m;
        URI.completeDecode = k;
        URI.restructureFilterUrl = h;
        URI.parseMultiColumnValue = f;
        URI.convertMultiColumnValueToString = c
    })();
    unescapeProperly = URI.decodeURIComponent;
    GetAbsoluteUrl = URI.getAbsolute;
    RemoveParametersFromUrl = URI.removeParameters;
    RemoveQueryParameterFromUrl = URI.removeQueryParameter;
    RemoveUrlKeyValue = URI.removeKeyValue;
    StURLSetVar2 = URI.stURLSetVar2;
    ParseMultiColumnValue = URI.parseMultiColumnValue;
    ConvertMultiColumnValueToString = URI.convertMultiColumnValueToString;
    CompleteDecode = URI.completeDecode;
    if (typeof URI_Encoding == "undefined") {
        URI_Encoding = {
            __namespace: true
        };
        URI_Encoding_module_def()
    }
    escapeUrlForCallback = URI_Encoding.escapeUrlForCallback;
    escapeProperly = URI_Encoding.encodeURIComponent;
    escapeProperlyCore = URI_Encoding.encodeURIComponent;
    escapeProperlyCoreCore = URI_Encoding.encodeURIComponent;
    PageContextInfo_InitializePrototype();
    if (typeof Nav == "undefined") {
        Nav = {
            __namespace: true
        };
        Nav_module_def()
    }
    ajaxNavigate = Nav.ajaxNavigate;
    STSNavigate = Nav.navigate;
    GetUrlKeyValue = Nav.getUrlKeyValue;
    STSPageUrlValidation = function(a) {
        return Nav.pageUrlValidation(a, Strings.STS.L_InvalidPageUrl_Text)
    };
    PageUrlValidation = function(a) {
        return Nav.pageUrlValidation(a, Strings.STS.L_InvalidPageUrl_Text)
    };
    AjaxNavigate$isMDSURL = Nav.isMDSUrl;
    isPortalTemplatePage = Nav.isPortalTemplatePage;
    GoToHistoryLink = Nav.goToHistoryLink;
    GetGotoLinkUrl = Nav.getGoToLinkUrl;
    GoToLink = Nav.goToLink;
    GoToLinkOrDialogNewWindow = Nav.goToLinkOrDialogNewWindow;
    GoToDiscussion = Nav.goToDiscussion;
    GetSource = Nav.getSource;
    RemoveMDSQueryParametersFromUrl = Nav.removeMDSQueryParametersFromUrl;
    AjaxNavigate$_GetWindowLocationNoHash = Nav.getWindowLocationNoHash;
    AjaxNavigate$WantsNewTab = Nav.wantsNewTab;
    AjaxNavigate$parseHash = Nav.parseHash;
    AjaxNavigate$_UrlFromHashBag = Nav.urlFromHashBag;
    AjaxNavigate$_getAjaxLocationWindow = Nav.getAjaxLocationWindow;
    IsSTSPageUrlValid = Nav.isPageUrlValid;
    AjaxNavigate$OnClickHook = Nav.onClickHook;
    AjaxNavigate$convertRegularURLtoMDSURL = Nav.convertRegularURLtoMDSURL;
    AjaxNavigate$convertMDSURLtoRegularURL = Nav.ajaxNavigate.convertMDSURLtoRegularURL;
    if (typeof ProfileCache == "undefined") {
        ProfileCache = {
            __namespace: true
        };
        ProfileCache_module_def()
    }
    if (typeof ListModule == "undefined") {
        ListModule = {
            __namespace: true
        };
        ListModule_module_def()
    }
    BasePermissions = ListModule.BasePermissions;
    ContextInfo = ListModule.Context;
    CTXTYPE_EDITMENU = ListModule.Context.Type.EditMenu;
    CTXTYPE_VIEWSELECTOR = ListModule.Context.Type.ViewSelector;
    if (typeof List_Util == "undefined") {
        List_Util = {
            __namespace: true
        };
        List_Util_module_def()
    }
    ctxInitItemState = ListModule.Util.ctxInitItemState;
    ClearSelectedItemsDict = ListModule.Util.clearSelectedItemsDict;
    CreateItemPropertiesTitleUrl = ListModule.Util.createItemPropertiesTitleUrl;
    GetAttributeFromItemTable = ListModule.Util.getAttributeFromItemTable;
    GetSelectedItemsDict = ListModule.Util.getSelectedItemsDict;
    RemoveOnlyPagingArgs = ListModule.Util.removeOnlyPagingArgs;
    RemovePagingArgs = ListModule.Util.removePagingArgs;
    ShowAttachmentRows = ListModule.Util.showAttachmentRows;
    CanUploadFile = ListModule.Util.canUploadFile;
    addWPQtoId = ListModule.Util.addWPQtoId;
    isDefinedAndNotNullOrEmpty = ListModule.Util.isDefinedAndNotNullOrEmpty;
    HasEditPermission = ListModule.Util.hasEditPermission;
    getHostUrl = ListModule.Util.getHostUrl;
    ReconcileQstringFilters = ListModule.Util.reconcileQstringFilters;
    QstringStruct = ListModule.Util.Qstring;
    if (typeof SuiteNavCommon == "undefined") {
        SuiteNavCommon = {
            __namespace: true
        };
        SuiteNavCommon_module_def()
    }
    String.prototype.trim = function() {
        return this.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
    };
    currentCtx = null;
    itemTable = null;
    if ("undefined" == typeof g_supportFiles) g_supportFiles = new Array(0);
    if (!Boolean(ULS)) ULS = new ULSObject;
    ULSObject.prototype = {
        bucket: undefined,
        request: undefined,
        Correlation: undefined,
        OnReceiveBucketParameters: undefined,
        WebServiceNS: undefined,
        file: undefined,
        line: undefined,
        callStack: undefined,
        clientInfo: undefined,
        enable: undefined
    };
    if (typeof window.onerror != "undefined" && window.onerror != ULSOnError) {
        ULS.OriginalOnError = window.onerror;
        window.onerror = ULSOnError
    }
    if (!Boolean(ULSCat)) ULSCat = {};
    ULSCat.msoulscat_WSS_General = "WSS";
    ULSCat.msoulscat_WSS_DeltaManager = "DeltaManager";
    ULSCat.msoulscat_WSS_Inplview = "Inplview";
    ULSCat.msoulscat_WSS_JsGrid = "JsGrid";
    ULSCat.msoulscat_WSS_MediaPlayer = "MediaPlayer";
    ULSCat.msoulscat_WSS_SPGantt = "SPGantt";
    ULS.AssertJS = function(c, b, d) {
        if (b == false) {
            var a = "[Category: " + c + "] [Assert: " + d + "]";
            ULSSendExceptionImpl(a, window.location.href, 0, ULS.AssertJS.caller)
        }
    };
    ULS.SendErrorMessageJS = function(b, c) {
        var a = "[Category: " + b + "] [Error: " + c + "]";
        ULSSendExceptionImpl(a, window.location.href, 0, ULS.SendErrorMessageJS.caller)
    };
    ULS.SendExceptionJS = function(c, b) {
        var a;
        if (b != null) {
            var d = b.message,
                e = b.name;
            if (typeof d != "undefined" && typeof e != "undefined") a = "[Category: " + c + "] [Exception Name: " + e + ", Exception Message: " + d + "]";
            else a = "[Category: " + c + "] [Exception: " + b.toString() + "]"
        } else a = "[Category: " + c + "] [Exception: Null Exception]";
        ULSSendExceptionImpl(a, window.location.href, 0, ULS.SendExceptionJS.caller)
    };
    typeof Sys != "undefined" && Boolean(Sys) && typeof Sys.Application != "undefined" && Boolean(Sys.Application) && typeof Sys.Application.notifyScriptLoaded == "function" && Sys.Application.notifyScriptLoaded();
    typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function" && NotifyScriptLoadedAndExecuteWaitingJobs("owsbrows.js");
    typeof spWriteProfilerMark == "function" && spWriteProfilerMark("perfMarkEnd_init.js");
    g_cde = {};
    LegalUrlChars = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, false, false, true, false, true, true, true, true, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
    typeof Sys != "undefined" && Boolean(Sys) && Boolean(Sys.Application) && Sys.Application.notifyScriptLoaded();
    typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function" && NotifyScriptLoadedAndExecuteWaitingJobs("commonvalidation.js");
    recycleBinEnabled = 0;
    cascadeDeleteWarningMessage = "";
    bIsFileDialogView = false;
    g_ViewIdToViewCounterMap = [];
    g_ctxDict = [];
    bIsFileDialogView = false;
    g_ViewIdToViewCounterMap = [];
    g_ctxDict = [];
    g_objProjectTaskLaunch = null;
    g_ssImporterObj = null;
    g_fSSImporter = false;
    if (typeof Date.now === "undefined" || Date.now === null) Date.now = function() {
        return Number(new Date)
    };
    JSRequest = {
        QueryString: null,
        FileName: null,
        PathName: null,
        EnsureSetup: function() {
            if (JSRequest.QueryString != null) return;
            JSRequest.QueryString = [];
            for (var f = ajaxNavigate.get_search().substring(1), e = f.split("&"), a, d = 0; d < e.length; d++) {
                var b = e[d];
                a = b.indexOf("=");
                if (a > -1) {
                    var h = b.substring(0, a),
                        g = b.substring(a + 1);
                    JSRequest.QueryString[h] = g
                }
            }
            var c = JSRequest.PathName = window.location.pathname;
            a = c.lastIndexOf("/");
            if (a > -1) JSRequest.FileName = c.substring(a + 1);
            else JSRequest.PageName = c
        }
    };
    ExpGroupWPListName = "WSS_ExpGroupWPList";
    ExpGroupCookiePrefix = "WSS_ExpGroup_";
    ExpGroupCookieDelimiter = "&";
    ExpGroupMaxWP = 11;
    ExpGroupMaxCookieLength = 3960;
    g_ExpGroupCAMLQueue = new Array(0);
    g_ExpGroupXSLTQueue = new Array(0);
    g_ExpGroupInProgress = false;
    g_ExpInitializing = false;
    g_ExpGroupTable = [];
    g_ExpGroupNeedsState = false;
    g_ExpGroupParseStage = false;
    locked = false;
    if ("undefined" == typeof _v_dictSod) _v_dictSod = [];
    if ("undefined" == typeof _v_dictCss) _v_dictCss = [];
    Sods = {
        missing: 1,
        loading: 2,
        pending: 3,
        loaded: 4,
        error: 5
    };
    _v_qsod = [];
    _v_sodctx = {
        document: document,
        window: window
    };
    Sod.prototype = {
        url: undefined,
        key: undefined,
        loaded: undefined,
        depkeys: undefined,
        state: undefined,
        qfn: undefined,
        reset: undefined
    };
    SodCallbackInfo.prototype = {
        success: undefined,
        error: undefined,
        expectedType: undefined
    };
    g_PendingLoadSodQueue = null;
    g_viewportHeight = null;
    g_viewportWidth = null;
    g_wpadderHeight = 0;
    g_setWidthInited = false;
    g_workspaceResizedHandlers = [];
    g_setScrollPos = false;
    g_frl = false;
    g_spribbon = {};
    g_spribbon.isMinimized = true;
    g_spribbon.isInited = false;
    g_spribbon.minimizedHeight = "35px";
    g_spribbon.maximizedHeight = "126px";
    v_stsOpenDoc2 = null;
    v_strStsOpenDoc2 = null;
    deleteInstance = 0;
    firstCalled = true;
    _callbackinitdelayed = false;
    g_spDragDropUpload = {};
    SPDragUploadInfo.prototype = {
        webPartId: undefined,
        serverUrl: undefined,
        siteRelativeUrl: undefined,
        listName: undefined,
        rootFolder: undefined,
        overwriteAll: undefined,
        hideProgressBar: undefined,
        refreshFunc: undefined,
        preUploadFunc: undefined,
        postUploadFunc: undefined,
        checkPermissionFunc: undefined
    };
    g_QuickLaunchControlIds = [];
    PageMinimized();
    OverrideDefaultMethod("confirm", "LogConfirm", 1);
    OverrideDefaultMethod("alert", "LogAlert", 1);
    SupplementDefaultMethod("onerror", "LogOnError", 5);
    IMNControlObj = null;
    bIMNControlInited = false;
    IMNDictionaryObj = null;
    IMNDictionaryPresenceTextObj = null;
    bIMNSorted = false;
    bIMNOnloadAttached = false;
    IMNOrigScrollFunc = null;
    bIMNInScrollFunc = false;
    IMNSortableObj = null;
    IMNHeaderObj = null;
    IMNNameDictionaryObj = null;
    IMNNameDictionaryPresenceTextObj = null;
    IMNShowOfflineObj = null;
    OwaLang = "1033";
    OwaRoot = "owa/";
    OwaSharedHoverCardJsKey = "sharedhovercard.js";
    OwaSharedHoverCardStringsJsKey = "sharedhovercard.strings.js";
    SharedHoverCardHideTime = 800;
    SharedHoverCardDelayTimer = null;
    SharedHoverCardDelayTime = 250;
    SharedHoverCardDelayed = null;
    SharedHoverCardPending = null;
    currentShowHoverCardInstance = 0;
    nextShowHoverCardInstance = 0;
    currentShowHoverCardInstanceBootstrappedState = false;
    IMNImageInfo_InitializePrototype();
    imnCount = 0;
    imnElemsCount = 0;
    imnMarkerBatchSize = 4;
    imnMarkerBatchDelay = 40;
    sharedHoverCardsCount = 0;
    sharedHoverCardElementsCount = 0;
    sharedHoverCardMarkerBatchSize = 4;
    sharedHoverCardMarkerBatchDelay = 40;
    IsIFrameSharedHoverCard = false;
    SharedHoverCardIFrame = null;
    SharedHoverCardIFrameCode = "<!DOCTYPE html><html><head></head>    <body style='background-color:#ffffff; left:-9px; top:-9px'>    <script type='text/javascript'>var g_Workspace = 's4-workspace'; var files = new Array();    function FindFiles() {\t    var scripts = window.parent.document.getElementsByTagName('script');\t    for (var i = 0; i < scripts.length; i++) {\t\t    var src = scripts[i].src; if (src.indexOf('/init.js') != -1 || src.indexOf('/init.debug.js') != -1) files[0] = src;\t\t    else if (src.indexOf('/core.js') != -1 || src.indexOf('/core.debug.js') != -1) files[1] = src;\t    }    }    function LoadFiles(index) {\t    if (index >= files.length) {\t\t    InitIFrameSharedHoverCard();\t\t    return;\t    }\t    var scriptTag = document.createElement('script'); scriptTag.src = files[index];\t    if (scriptTag.readyState) {\t\t    scriptTag.onreadystatechange = function () {\t\t\t    if (scriptTag.readyState == 'loaded' || scriptTag.readyState == 'complete') { LoadFiles(index + 1); }\t\t    };\t    } else {\t\t    scriptTag.onload = function () { LoadFiles(index + 1); };\t    }\t    document.getElementsByTagName('head')[0].appendChild(scriptTag);    }    if (window.parent != null) { FindFiles(); LoadFiles(0); }    <\/script></body></html>";
    _spBodyOnLoadCalled = false;
    if (typeof _spBodyOnLoadFunctions === "undefined" || _spBodyOnLoadFunctions === null) _spBodyOnLoadFunctions = [];
    _spFormOnSubmitCalled = false;
    _spBodyOnPageShowRegistered = false;
    _spBodyOnLoadCalled = false;
    if ("undefined" != typeof _spBodyOnLoad) _spBodyOnLoad = undefined;
    if ("undefined" != typeof _spRestoreScrollForDiv_rscr) _spRestoreScrollForDiv_rscr = undefined;
    if (_spBodyOnLoadFunctionNames == null) {
        _spBodyOnLoadFunctionNames = [];
        _spBodyOnLoadFunctionNames.push("_spBodyOnLoad");
        _spBodyOnLoadFunctionNames.push("_spRestoreScrollForDiv_rscr")
    }
    _spFormOnSubmitCalled = false;
    _spBodyOnPageShowRegistered = false;
    _spPageLoadedRegistered = false;
    _inlineEditString = null;
    _spOriginalFormAction = null;
    g_numberOfYields = 10;
    g_spPreFetchKeys = [];
    _spSuppressFormOnSubmitWrapper = false;
    _inlineEditString = null;
    _spPageLoadedRegistered = false;
    g_fAnimateListCSR = true;
    g_fAreAllSodsLoaded = false;
    if (document.body == null || document.body.firstChild == null) {
        typeof document.addEventListener != "undefined" && typeof window.msWriteProfilerMark != "undefined" && document.addEventListener("DOMContentLoaded", function() {
            window.msWriteProfilerMark("DOMContentLoaded")
        }, false);
        AttachEvent("DOMContentLoaded", _spBodyOnLoadWrapper, document);
        window.onload = _spBodyOnLoadWrapper;
        AttachEvent("hashchange", _bodyOnHashChangeHandler, window)
    }
    DeveloperDashboard = {
        wnd: null,
        msgQueue: [],
        cookie: "WSS_DeveloperDashboard",
        PostMsg: function(c, a, b) {
            DeveloperDashboard.msgQueue.push({
                to: c,
                subject: a,
                msg: b
            })
        }
    };
    (function() {
        window.setTimeout(function() {
            ddInit();
            ddToggleCScope()
        }, 0)
    })();
    flyoutsAllowed = false;
    g_ExecuteOrWaitJobs = {};
    cuiKeyHash = {};
    cuiKeyHash[219] = 91;
    cuiKeyHash[221] = 93;
    cuiKeyHash[51] = 35;
    cuiKeyHash[186] = 59;
    cuiKeyHash[187] = 61;
    cuiKeyHash[188] = 44;
    cuiKeyHash[189] = 45;
    cuiKeyHash[190] = 46;
    cuiKeyHash[191] = 47;
    cuiKeyHash[222] = 39;
    g_ribbonHeaderScaleClass = ["ms-cui-tts", "ms-cui-tts-scale-1", "ms-cui-tts-scale-2"];
    SPRibbonInfo.prototype.buildMinimized = undefined;
    SPRibbonInfo.prototype.initialTabId = undefined;
    StatusIdWithTopPriority = null;
    StatusColorWithTopPriority = null;
    StatusPriority = {
        red: 4,
        yellow: 3,
        green: 2,
        blue: 1
    };
    StatusBarClassNames = {
        "4": "ms-status-red",
        "3": "ms-status-yellow",
        "2": "ms-status-green",
        "1": "ms-status-blue"
    };
    g_uniqueIndex = 0;
    g_dlgWndTop = null;
    g_spDlgLauncher = true;
    g_ModalDialogCount = 0;
    g_overlayPopup = undefined;
    g_childDialog = undefined;
    CommonGlobalDialogReturnValue_InitializePrototype();
    commonModalDialogReturnValue = new CommonGlobalDialogReturnValue;
    if (!window.location.pathname.toLowerCase().endsWith("/_layouts/15/start.aspx")) {
        var b = function() {
                "unknown" != typeof Sys && "undefined" != typeof Sys && null != Sys && null != Sys.Application && Sys.Application.add_load(function() {
                    window.setTimeout(function() {
                        ajaxNavigate._raiseNavigate(ajaxNavigate)
                    }, 0)
                })
            },
            a = function() {
                document.removeEventListener("DOMContentLoaded", a, false);
                b()
            };
        if (Boolean(document.addEventListener)) document.addEventListener("DOMContentLoaded", a, false);
        else _spBodyOnLoadFunctions.push(b)
    }
    if (Flighting == null) {
        Flighting = {};
        Flighting.ExpFeatures = []
    }
    Flighting.VariantConfiguration = {};
    Flighting.VariantConfiguration.IsExpFeatureClientEnabled = function(b) {
        var a = Math.floor(b / 32);
        if (a < 0 || a >= Flighting.ExpFeatures.length) return false;
        var c = 1 << b % 32;
        return (Flighting.ExpFeatures[a] & c) != 0
    };
    SPListView = true;
    RenderECBinline = function(c, b, d) {
        var a = [];
        a.push('<span class="js-callout-ecbMenu" CTXName="ctx');
        a.push(c.ctxId);
        a.push('" id="');
        a.push(b.ID);
        a.push('" Field="');
        a.push(d.Name);
        a.push('" Perm="');
        a.push(b.PermMask);
        a.push('" EventType="');
        a.push(b.EventType);
        a.push('">');
        a.push('<a class="js-callout-action ms-calloutLinkEnabled ms-calloutLink js-ellipsis25-a" onclick="calloutCreateAjaxMenu(event); return false;" href="#" title="' + Strings.STS.L_SPCalloutAction_ellipsis + '">');
        a.push('<img class="js-ellipsis25-icon" src="' + GetThemedImageUrl("spcommon.png") + '" alt="' + Encoding.HtmlEncode(Strings.STS.L_SPCalloutAction_ellipsis) + '" />');
        a.push("</a>");
        a.push("</span>");
        return a.join("")
    };
    CALLOUT_STR_ELLIPSIS = "...";
    CALLOUT_ELLIPSIS_LENGTH = CALLOUT_STR_ELLIPSIS.length;
    CALLOUT_CHARS_TO_TRUNCATE_PER_ITERATION = 2 + CALLOUT_ELLIPSIS_LENGTH;
    MountPointSiteIdFieldName = "_mpSPSiteId";
    MountPointWebIdFieldName = "_mpSPWebId";
    MountPointItemUniqueIdFieldName = "_mpItemUniqueId";
    MountPointInfo = function() {
        function a(a) {
            var o = a.rootFolder,
                l = a.siteId,
                m = a.webId,
                k = a.folderId,
                h = a.mpPrefix,
                b = Boolean(h) && Boolean(l) && Boolean(m) && Boolean(k),
                e = Boolean(a.mpLevel) ? a.mpLevel : "1,0",
                d = -1,
                c = -1,
                f = [];
            if (Boolean(e) && b) {
                f = e.split(",");
                if (f.length == 2) {
                    d = j(f[0], 1);
                    c = j(f[1], 0)
                }
            }

            function g(a, b) {
                d += a;
                if (a == 0) c += b;
                else c = 0;
                e = String(d) + "," + String(c)
            }

            function j(c, b) {
                var a = b;
                if (c != null && c.length > 0 && !isNaN(a)) {
                    a = parseInt(c);
                    if (a < b) return b
                }
                return a
            }

            function i(c) {
                if (!b) return {};
                var a = {
                    RemoteSiteId: l,
                    RemoteWebId: m,
                    RemoteFolderId: k
                };
                if (!Boolean(c)) {
                    a.MPLevel = e;
                    a.MPPrefix = h
                }
                return a
            }

            function n(a, f) {
                var e = [];
                if (b) {
                    var d = i(f);
                    for (var c in d) e.push(c + "=" + d[c])
                }
                if (!Boolean(a)) a = "&";
                return e.join(a)
            }
            return {
                isInitProperly: b,
                mpPrefix: b ? h : "",
                rootFolder: b ? o : "",
                getMajorLevel: function() {
                    return d
                },
                getMinorLevel: function() {
                    return c
                },
                incrementMajorLevel: function() {
                    g(1, 0)
                },
                incrementMinorLevel: function() {
                    g(0, 1)
                },
                decrementMinorLevel: function() {
                    g(0, -1)
                },
                getMountPointProperties: i,
                getMountPointUrl: n
            }
        }

        function d(d, f) {
            var c = {};
            if (Boolean(IsMountPoint(d)) && Boolean(f)) {
                var e = null;
                if (Flighting.VariantConfiguration.IsExpFeatureClientEnabled(168)) e = new URI("http://foo?" + b(f));
                if (!Boolean(e)) e = new URI(Nav.ajaxNavigate.get_href());
                if (Boolean(e)) {
                    c.mpPrefix = e.getQueryParameter("MPPrefix");
                    if (!Boolean(c.mpPrefix)) c.mpPrefix = d.FileRef.replace(/.url$/, "");
                    c.siteId = d[MountPointSiteIdFieldName];
                    c.webId = d[MountPointWebIdFieldName];
                    c.folderId = d[MountPointItemUniqueIdFieldName]
                }
            }
            return a(c)
        }

        function e(a) {
            return c(b(a))
        }

        function c(d) {
            var b = {};
            if (Boolean(d)) {
                var c = new URI("http://foo?" + d);
                b.rootFolder = c.getQueryParameter("RootFolder");
                if (!Boolean(b.rootFolder)) b.rootFolder = "";
                b.siteId = c.getQueryParameter("RemoteSiteId");
                b.webId = c.getQueryParameter("RemoteWebId");
                b.folderId = c.getQueryParameter("RemoteFolderId");
                b.mpPrefix = c.getQueryParameter("MPPrefix");
                b.mpLevel = c.getQueryParameter("MPLevel")
            }
            return a(b)
        }

        function b(a) {
            var c = "",
                b = "";
            if (a != null && a.clvp != null && typeof a.clvp.WebPartId == "function") {
                b = GetInplviewHash(a.clvp.WebPartId());
                if (Boolean(b)) c = InplViewUtil.DecodeHashAsQueryString(b)
            }
            return c
        }
        return {
            createByListItem: d,
            createByContext: e,
            createByQueryString: c
        }
    }();
    ShortcutLinkTargetUrlFieldName = "_ShortcutUrl";
    ShortcutLinkSiteIdFieldName = "_ShortcutSiteId";
    ShortcutLinkWebIdFieldName = "_ShortcutWebId";
    ShortcutLinkUniqueIdFieldName = "_ShortcutUniqueId";
    _EnsureJSNamespace("SP");
    if (typeof SP.SOD == "undefined") SP.SOD = {};
    SP.SOD.execute = EnsureScriptParams;
    SP.SOD.executeFunc = EnsureScriptFunc;
    SP.SOD.registerSod = RegisterSod;
    SP.SOD.registerSodDep = RegisterSodDep;
    SP.SOD.executeOrDelayUntilScriptLoaded = ExecuteOrDelayUntilScriptLoaded;
    SP.SOD.executeOrDelayUntilEventNotified = ExecuteOrDelayUntilEventNotified;
    SP.SOD.notifyScriptLoadedAndExecuteWaitingJobs = NotifyScriptLoadedAndExecuteWaitingJobs;
    SP.SOD.notifyEventAndExecuteWaitingJobs = NotifyEventAndExecuteWaitingJobs;
    SP.SOD.loadMultiple = LoadMultipleSods;
    SP.SOD.delayUntilEventNotified = DelayUntilEventNotified;
    g_prefetch = 1;
    SP.SOD.get_prefetch = function() {
        return g_prefetch
    };
    SP.SOD.set_prefetch = function(a) {
        g_prefetch = a
    };
    SP.SOD.prefetch = _spPreFetch;
    g_ribbonImagePrefetch = true;
    SP.SOD.get_ribbonImagePrefetchEnabled = function() {
        return g_ribbonImagePrefetch
    };
    SP.SOD.set_ribbonImagePrefetchEnabled = function(a) {
        g_ribbonImagePrefetch = a
    };
    _EnsureJSNamespace("SP.UI");
    if (typeof SP.UI.Workspace == "undefined") SP.UI.Workspace = {};
    SP.UI.Workspace.add_resized = function(a) {
        g_workspaceResizedHandlers.push(a)
    };
    SP.UI.Workspace.remove_resized = function(c) {
        for (var b = -1, a = 0, d = g_workspaceResizedHandlers.length; a < d; a++)
            if (c == g_workspaceResizedHandlers[a]) {
                b = a;
                break
            }
        b != -1 && g_workspaceResizedHandlers.splice(b, 1)
    };
    BaseLogger = {};
    (function() {
        BaseLogger.Constants = {
            STREAM_ID: 1234,
            JSON_VERSION: "V1",
            IDX_VERSION: 0,
            IDX_EVENTNAME: 1,
            IDX_PROPERTY_START: 2,
            MAX_DATA_SIZE: 64 * 1024,
            MAX_ROWS_IN_STREAM: 1e3,
            SIZE_DWORD: 4,
            SIZE_DATAPOINT_ENTRY: 3 * 4,
            SIZE_STREAM_ENTRY: 3 * 4,
            MS_BTN_EPOCHS: 116444736e5,
            MAX_INT32: 4294967295,
            MAX_SQM_DATAID: 2147483647,
            DATAKEY_SESSION_NORMAL: 0,
            DATAKEY_SESSION_CONTINUATION: 1
        };
        BaseLogger.BSQMFlags = {
            FLAG_BSQM_ENABLED: 16,
            FLAG_QOS_ENABLED: 32
        };
        BaseLogger.DATAID = {
            DATAID_BSQM_MAXSTREAMROWSSTREAMID: 8048,
            DATAID_BSQM_MAXSTREAMROWS: 7993,
            DATAID_SESSION_TYPE: 60
        };
        BaseLogger.UploadCallBack = function(a) {
            if (Boolean(a)) a.readyState === 4 && a.status !== 200 && Boolean(a.status)
        };
        BaseLogger.Logger = function(n) {
            var C = function(c) {
                    this.Tic = t();
                    var b = c.length;
                    this.Vals = new Array(b);
                    for (var a = 0; a < b; a++) this.Vals[a] = c[a]
                },
                B = function(b, a) {
                    this.Id = b;
                    this.Val = a;
                    this.Tic = t()
                },
                E = function(b, a) {
                    this.Id = b;
                    this.Width = a;
                    this.Rows = new Array(0)
                },
                v = function(c, b) {
                    this.StartTime = u();
                    this.EndTime = null;
                    this.CorrelationId = null;
                    var a = 0;
                    if (c) a = BaseLogger.BSQMFlags.FLAG_BSQM_ENABLED;
                    if (b) a |= BaseLogger.BSQMFlags.FLAG_QOS_ENABLED;
                    this.Flags = a;
                    this.wsaDatapoints = new Array(0);
                    this.wsaStreams = new Array(0)
                },
                m = null,
                a = null,
                b = 0,
                k = 0,
                d = 0,
                e = null,
                f = null,
                g = 0,
                i = false,
                o = false,
                q = false,
                c = false,
                s = null;
            this.SetCorrelationId = function(b) {
                j();
                if (Boolean(a)) a.CorrelationId = b
            };
            this.WriteLog = function(e, d) {
                j();
                if (!c || !Boolean(e) || !Boolean(d)) return;
                var b = new Array(BaseLogger.Constants.IDX_PROPERTY_START + 1);
                b[BaseLogger.Constants.IDX_VERSION] = BaseLogger.Constants.JSON_VERSION;
                b[BaseLogger.Constants.IDX_EVENTNAME] = e;
                var f = BaseLogger.Constants.IDX_PROPERTY_START;
                for (var g in d) {
                    b[f++] = g;
                    var a = d[g];
                    if (a != null && a instanceof Date) a = a.getTime();
                    b[f++] = a
                }
                D(BaseLogger.Constants.STREAM_ID, b)
            };
            this.UploadData = function() {
                j();
                r()
            };
            var j = function() {
                    if (q) return;
                    c = A();
                    if (!c) return;
                    a = new v(c, false);
                    m = "/_layouts/15/WsaUpload.ashx";
                    e = new Array(0);
                    f = new Array(0);
                    p(BaseLogger.Constants.STREAM_ID, 1);
                    s = Boolean(n) ? n : y;
                    q = true
                },
                p = function(b, g) {
                    if (!Boolean(e[b])) {
                        var f = new E(b, g),
                            c = k;
                        a.wsaStreams[c] = f;
                        k++;
                        d += BaseLogger.Constants.SIZE_STREAM_ENTRY;
                        e[b] = c
                    }
                },
                D = function(b, j) {
                    try {
                        var c = new C(j);
                        if (x()) return;
                        i = true;
                        h(BaseLogger.DATAID.DATAID_BSQM_MAXSTREAMROWSSTREAMID, b);
                        var f = a.wsaStreams[e[b]];
                        if (Boolean(f))
                            if (g < BaseLogger.Constants.MAX_ROWS_IN_STREAM) {
                                f.Rows[g++] = c;
                                d += z(c);
                                h(BaseLogger.DATAID.DATAID_BSQM_MAXSTREAMROWS, g)
                            } else throw "BaseLogger: MAX_ROWS_IN_STREAM exceeded for stream ID " + String(b);
                    } catch (k) {}
                },
                z = function(b) {
                    for (var a = BaseLogger.Constants.SIZE_DWORD, c = 0; c < b.Vals.length; c++) {
                        var d = String(b.Vals[c]);
                        a += d.length * 2
                    }
                    a += (b.Vals.length - 1) * 6;
                    return a
                },
                h = function(c, d) {
                    if (c < 1 || c > BaseLogger.Constants.MAX_SQM_DATAID) return;
                    if (d < 0 || d > BaseLogger.Constants.MAX_INT32) return;
                    var e = null,
                        h = f[c];
                    if (Boolean(h)) e = a.wsaDatapoints[h];
                    if (e == null) {
                        var i = new B(c, d),
                            g = b;
                        a.wsaDatapoints[g] = i;
                        f[c] = g;
                        b++
                    } else e.Val = d
                },
                r = function() {
                    if (!c || a == null || !Boolean(m)) return;
                    try {
                        if (i) {
                            if (Boolean(o)) h(BaseLogger.DATAID.DATAID_SESSION_TYPE, BaseLogger.Constants.DATAKEY_SESSION_CONTINUATION);
                            else {
                                h(BaseLogger.DATAID.DATAID_SESSION_TYPE, BaseLogger.Constants.DATAKEY_SESSION_NORMAL);
                                o = true
                            }
                            a.EndTime = u();
                            var b = null;
                            try {
                                b = JSON.stringify(a)
                            } catch (e) {}
                            w();
                            b != null && b.length > 0 && s(b)
                        }
                    } catch (d) {}
                },
                w = function() {
                    e = new Array(0);
                    f = new Array(0);
                    b = 0;
                    k = 0;
                    g = 0;
                    d = 0;
                    b = 0;
                    var h = a.CorrelationId;
                    a = new v(c, false);
                    a.CorrelationId = h;
                    p(BaseLogger.Constants.STREAM_ID, 1);
                    i = false
                },
                y = function(b) {
                    var a = new XMLHttpRequest;
                    a.onreadystatechange = function() {
                        BaseLogger.UploadCallBack(a)
                    };
                    a.open("POST", m, true);
                    a.setRequestHeader("Content-Type", "application/json");
                    a.send(b)
                },
                x = function() {
                    var a = b * BaseLogger.Constants.SIZE_DATAPOINT_ENTRY + d;
                    if (a >= BaseLogger.Constants.MAX_DATA_SIZE) {
                        r();
                        a = b * BaseLogger.Constants.SIZE_DATAPOINT_ENTRY + d;
                        return a >= BaseLogger.Constants.MAX_DATA_SIZE
                    }
                    return false
                },
                A = function() {
                    return typeof g_wsaEnabled != "undefined" && g_wsaEnabled
                },
                l = 0,
                t = function() {
                    var b = new Date,
                        a = b.getTime();
                    if (l == 0) l = a;
                    return 1 + a - l & 2147483647
                },
                u = function() {
                    var b = new Date,
                        a = b.getTime();
                    a = a + BaseLogger.Constants.MS_BTN_EPOCHS;
                    a = a * 1e4;
                    return a
                }
        };
        var a = null;
        BaseLogger.GetLogger = function() {
            if (a == null) a = new BaseLogger.Logger;
            return a
        }
    })();
    CacheLogger = {
        __namespace: true
    };
    CacheLogger_module_def();
    DebugLogger = {
        __namespace: true
    };
    DebugLogger_module_def();
    QoSLogger = {
        __namespace: true
    };
    QoSLogger_module_def();
    RUMDelta = {};
    (function() {
        var a = "RUMActionDelta";
        RUMDelta.Logger = function(e) {
            RUMDelta.Application = {
                SharePointTouchAppHost: 1,
                SharePoint: 2,
                SharePointFileXfer: 3
            };
            var f = function(g, b, a, f, c, d, e, h) {
                    this.Version = 1;
                    this.Action = g;
                    this.CorrelationId = b;
                    this.LastSeenCorrelationId = a;
                    this.UserAgent = navigator.userAgent;
                    this.BeginTime = f;
                    this.FirstChance = c;
                    this.NetworkDone = d;
                    this.ServerTime = e;
                    this.EUPL = h
                },
                d = "",
                c = "",
                g = a,
                b = Boolean(e) ? e : BaseLogger.GetLogger();
            this.SetCorrelationId = function(a) {
                b.SetCorrelationId(a);
                d = a
            };
            this.SetLastSeenCorrelationId = function(a) {
                c = a
            };
            this.UploadRUMData = function(k, i, a, e, h, l) {
                try {
                    var j = new f(k, d, c, i, a, e, h, l);
                    b.WriteLog(g, j);
                    b.UploadData()
                } catch (m) {}
            }
        }
    })();
    PerformanceLogger = {
        __namespace: true
    };
    PerformanceLogger_module_def();
    SPRUMLogger = {
        __namespace: true
    };
    SPRUMLogger_module_def();
    SPLoggers = {
        __namespace: true
    };
    SPLoggers_module_def();
    getLoggingInfo = function(a) {
        var b = [];
        if (Boolean(a)) {
            addToInfoIfExists("ErrorCode", b, a, a.get_errorCode);
            addToInfoIfExists("CorrelationID", b, a, a.get_errorTraceCorrelationId);
            addToInfoIfExists("ErrorType", b, a, a.get_errorTypeName);
            addToInfoIfExists("Message", b, a, a.get_message);
            addToInfoIfExists("StackTrace", b, a, a.get_stackTrace)
        }
        return b.join("\n")
    };
    addToInfoIfExists = function(d, e, c, b) {
        if (c != null && typeof b != "undefined" && b != null) {
            var a = b.call(c);
            (a != null || a != "") && e.push(d + ": " + a)
        }
    };
    SP.Performance.UploadNonMDSPageLoadTime = function(a, b) {
        SP.Performance.Log.GetLogger().UploadNonMDSPageLoadTelemetry(a, b)
    };
    _TelemetryEndTime = -1;
    UploadFileXferTelemetry = function(d, c, a, b) {
        SP.Performance.Log.GetLogger().UploadFileXferTelemetry(d, c, a, b);
        _TelemetryEndTime = a
    };
    if (typeof g_mdsReady == "undefined")
        if (typeof window.addEventListener != "undefined") window.addEventListener("load", RumNonMDSHandler, false);
        else window.attachEvent("onload", RumNonMDSHandler);
    if (typeof SPThemeUtils == "undefined") {
        SPThemeUtils = {
            __namespace: true
        };
        SPThemeUtils_module_def()
    }
    if (typeof SuiteNavRendering == "undefined") {
        SuiteNavRendering = {
            __namespace: true
        };
        SuiteNavRendering_module_def()
    }
    if (typeof ModuleLink == "undefined") {
        ModuleLink = {
            __namespace: true
        };
        ModuleLink_module_def()
    }
    _spBodyOnLoadFunctionNames.push("AllowCSSFiltersOnIE8");
    initJsLoaded = true;
    notifyScriptsLoadedAndExecuteWaitingJobs("init.js");
    typeof spWriteProfilerMark == "function" && spWriteProfilerMark("perfMarkEnd_init.js")
}
var spWriteProfilerMark, OffSwitch;

function OffSwitch_module_def() {
    OffSwitch.IsActive = a;

    function a(c) {
        var a = window.g_SPOffSwitches,
            b = a == null ? true : a.hasOwnProperty(c);
        return b
    }
}
var RuntimeErrors;

function RuntimeErrors_module_def() {
    RuntimeErrors.MismatchError = function(a, b, c) {
        Error.call(this, c);
        this.expected = a;
        this.actual = b
    };
    RuntimeErrors.MismatchError.prototype = new Error;
    RuntimeErrors.ArgumentTypeError = function(a, b) {
        RuntimeErrors.MismatchError.call(this, a, b, "runtime type mismatch")
    };
    RuntimeErrors.ArgumentTypeError.prototype = new RuntimeErrors.MismatchError
}
var Verify;

function Verify_module_def() {
    function a(c, a, b) {
        if (b != a) throw new c(a, b);
    }
    Verify.ArgumentType = function(c, b) {
        var d = typeof c;
        if (typeof b == "function") {
            a(RuntimeErrors.ArgumentTypeError, "object", d);
            if (!(c instanceof b)) throw new RuntimeErrors.ArgumentTypeError(b, c.constructor);
        } else if (typeof b == "string") a(RuntimeErrors.ArgumentTypeError, b, d);
        else throw new RuntimeErrors.ArgumentTypeError("function or string", typeof b);
    }
}
var Define;

function Define_module_def() {
    var a = {};
    Define.loadScript = function(g, b, e) {
        Verify.ArgumentType(g, "string");
        Verify.ArgumentType(b, "function");
        Verify.ArgumentType(e, "function");
        var d = navigator.userAgent.toLowerCase(),
            f = d.indexOf("msie") != -1 && parseInt(d.substring(d.indexOf("msie ") + 5)) <= 8,
            a = document.createElement("SCRIPT");
        a.type = "text/javascript";
        a.src = g;
        if (f) a.onreadystatechange = c(b);
        else {
            a.onload = c(b);
            a.onerror = c(e)
        }
        document.getElementsByTagName("HEAD")[0].appendChild(a);
        return a;

        function c(b) {
            return function() {
                var c = false;
                if (f && typeof a.readyState != "undefined") c = a.readyState == "complete" || a.readyState == "loaded";
                else c = true;
                if (c) {
                    a.onreadystatechange = null;
                    a.onload = null;
                    a.onerror = null;
                    b()
                }
            }
        }
    };
    Define.require = function(b, c) {
        if (typeof b == "object" && b instanceof Array) return d(c);
        else {
            Verify.ArgumentType(b, "string");
            return e(b, c)
        }

        function e(b, c) {
            if (a[b] != null) {
                typeof c == "function" && c(a[b]);
                return a[b]
            }
            Verify.ArgumentType(c, "function");
            Define.loadScript("/_layouts/15/" + b + ".js", function() {
                c(a[b])
            }, function() {
                throw "Failed to load module: " + b;
            });
            return undefined
        }

        function d(c) {
            Verify.ArgumentType(c, "function");
            var a = b;
            if (a.length == 0) {
                c();
                return
            }
            var d = a.slice(0, a.length),
                f = a.shift(),
                e = function() {
                    for (var b = [], a = 0; a < d.length; a++) b.push(Define.require(d[a]));
                    c.apply(null, b)
                };
            Define.require(f, function() {
                Define.require(a, e)
            })
        }
    };
    Define.define = function(b, c, d) {
        Verify.ArgumentType(b, "string");
        Verify.ArgumentType(c, Array);
        Verify.ArgumentType(d, "function");
        if (a[b] != null) return;
        Define.require(c, function() {
            a[b] = d.apply(null, Array.prototype.slice.call(arguments))
        })
    }
}
var BrowserDetection;

function BrowserDetection_module_def() {}
var browseris, bis, BrowserStorage;

function BrowserStorage_module_def() {
    d.prototype = {
        getItem: function() {
            return ""
        },
        setItem: function() {},
        removeItem: function() {},
        clear: function() {},
        length: 0
    };

    function d() {
        var b = this,
            a = {};

        function c(b) {
            return a.hasOwnProperty(b)
        }

        function e(c) {
            var b = a[c];
            if (typeof b == "undefined") b = null;
            return b
        }

        function f(d, e) {
            if (!c(d)) b.length++;
            a[d] = String(e)
        }

        function d(d) {
            var e = c(d);
            if (e) {
                delete a[d];
                b.length--
            }
        }

        function g() {
            a = {};
            b.length = 0
        }
        this.length = 0;
        this.getItem = e;
        this.setItem = f;
        this.removeItem = d;
        this.clear = g
    }
    c.prototype = d.prototype;

    function c(a) {
        var c = this;

        function b() {
            c.length = a.length
        }
        b();
        this.getItem = function(b) {
            return a.getItem(b)
        };
        this.setItem = function(d, c) {
            try {
                a.setItem(d, c)
            } catch (e) {}
            b()
        };
        this.removeItem = function(c) {
            try {
                a.removeItem(c)
            } catch (d) {}
            b()
        };
        this.clear = function() {
            a.clear();
            b()
        }
    }
    var e = "BrowserStorageTest",
        i = "1";

    function h(a) {
        var b = false;
        a.setItem(e, i);
        if (a.getItem(e) === i) b = true;
        a.removeItem(e);
        return b
    }
    var b = null,
        a = null;
    try {
        if (typeof window.localStorage != "undefined") {
            var g = window.localStorage;
            if (h(g)) b = g
        }
    } catch (k) {}
    try {
        if (typeof window.sessionStorage != "undefined") {
            var f = window.sessionStorage;
            if (h(f)) a = f
        }
    } catch (j) {}
    if (a == null) a = new d;
    if (b == null) b = a;
    BrowserStorage.local = new c(b);
    BrowserStorage.session = new c(a)
}
var CSSUtil;

function CSSUtil_module_def() {
    function b(a) {
        return new RegExp("(\\s|^)" + a + "(\\s|$)")
    }
    CSSUtil.HasClass = function(c, a) {
        return c == null || a == null ? false : c.className.match(b(a)) != null
    };
    CSSUtil.AddClass = function(a, b) {
        if (a != null && !CSSUtil.HasClass(a, b)) {
            a.className += " " + b;
            return true
        }
        return false
    };
    CSSUtil.RemoveClass = function(a, c) {
        if (CSSUtil.HasClass(a, c)) {
            a.className = a.className.replace(b(c), " ");
            return true
        }
        return false
    };
    CSSUtil.pxToFloat = function(b) {
        if (typeof b != "string") return 0;
        var a = b.trim(),
            c = Number(a.substring(0, a.length - 2).trim());
        return isNaN(c) ? 0 : c
    };
    CSSUtil.pxToNum = function(b) {
        var a;
        if (b === "" || b === "none") a = 0;
        else a = parseInt(b);
        return a
    };
    CSSUtil.numToPx = function(a) {
        if (typeof a != "number") throw new Error("n must be a number.");
        return String(Math.round(a)) + "px"
    };
    CSSUtil.getCurrentEltStyleByNames = function(d, c) {
        var a = null,
            b = 0;
        while (b < c.length) {
            a = CSSUtil.getCurrentStyle(d, c[b]);
            if (a != null) break;
            b++
        }
        return a
    };
    CSSUtil.getCurrentStyle = function(b, c) {
        if (Boolean(b.currentStyle)) return b.currentStyle[c];
        else if (Boolean(window) && Boolean(window.getComputedStyle)) {
            var a = window.getComputedStyle(b, null);
            if (Boolean(a) && Boolean(a.getPropertyValue)) return a.getPropertyValue(c)
        }
        return null
    };
    CSSUtil.getCurrentStyleCorrect = function(a, b, c) {
        return typeof document.defaultView != "undefined" && typeof document.defaultView.getComputedStyle != "undefined" ? document.defaultView.getComputedStyle(a, null).getPropertyValue(c) : b == "width" ? String(a.offsetWidth) + "px" : a.currentStyle[b]
    };
    CSSUtil.getOpacity = function(b) {
        return a.GetOpacity(b)
    };
    CSSUtil.setOpacity = function(b, c) {
        a.SetOpacity(b, c)
    };
    var a = {};
    a.SetOpacity = function(b, c) {
        if (typeof b.style == "undefined") return;
        if (document.body.style.opacity != null)
            if (c == 1) a.RemoveCSSProperty(b, "opacity");
            else b.style.opacity = String(c);
        else if (c == 1) a.RemoveCSSProperty(b, "filter");
        else b.style.filter = "alpha(opacity=" + String(c * 100) + ")"
    };
    a.RemoveCSSProperty = function(a, b) {
        if (typeof a.style.removeProperty != "undefined") a.style.removeProperty(b);
        else a.style.removeAttribute(b)
    };
    a.GetOpacity = function(a) {
        if (typeof a.style == "undefined") return -1;
        if (document.body.style.opacity != null) {
            var c = a.style.opacity;
            return c != null && c != "" ? parseFloat(c) : 1
        } else {
            var b = a.style.filter;
            return b != null && b != "" ? parseInt(b.replace("alpha(opacity=", "").replace(")", "")) / 100 : 1
        }
    }
}
var pxToNum, GetWidthFromPxString, GetCurrentEltStyle, GetCurrentEltStyleByNames, GetOpacity, SetOpacity, HasCssClass, AddCssClassToElement, RemoveCssClassFromElement, getCurrentEltStyleByNames, DOM;

function DOM_module_def() {
    DOM.rightToLeft = document.documentElement.dir == "rtl";
    DOM.cancelDefault = m;
    DOM.AbsLeft = b;
    DOM.AbsTop = c;
    DOM.CancelEvent = o;
    DOM.GetElementsByName = j;
    DOM.GetEventCoords = l;
    DOM.GetEventSrcElement = h;
    DOM.GetInnerText = n;
    DOM.GetParentLinkFromEvent = g;
    DOM.GetSelectedElement = a;
    DOM.PreventDefaultNavigation = f;
    DOM.SetEvent = p;
    DOM.AddEventHandler = k;
    DOM.RemoveEventHandler = i;
    DOM.EnsureElementIsInViewPort = e;

    function m(a) {
        if (typeof a == "undefined" || a == null) a = window.event;
        if (!(typeof a == "undefined" || a == null)) {
            if (typeof a.stopPropagation == "function") a.stopPropagation();
            else a.cancelBubble = true;
            if (typeof a.preventDefault == "function") a.preventDefault();
            else a.returnValue = false
        }
        return false
    }

    function o(a) {
        a.cancelBubble = true;
        Boolean(a.preventDefault) && a.preventDefault();
        a.returnValue = false;
        return false
    }

    function j(b) {
        var a = document.getElementsByName(b);
        if (a.length == 0 && Boolean(XMLHttpRequest)) a = c(document, b);
        return a;

        function c(e, c) {
            var b = [],
                a = e.getElementById(c);
            while (a != null) {
                b.push(a);
                a.id = "";
                a = e.getElementById(c)
            }
            for (var d = 0; d < b.length; d++) b[d].id = c;
            return b
        }
    }

    function h(a) {
        return a.target != null ? a.target : typeof a.srcElement != "undefined" ? a.srcElement : null
    }

    function g(c) {
        if (c == null) c = window.event;
        var d = DOM.GetEventSrcElement(c),
            b = a(d, "A", "a");
        return b !== null && b.tagName != null && b.tagName.toUpperCase() === "A" ? b : null
    }

    function a(a, c, b) {
        while (a != null && a.tagName != c && (b == null || a.tagName != b)) a = a.parentNode;
        return a
    }

    function n(a) {
        return typeof a.textContent !== "undefined" && a.textContent !== null ? a.textContent : typeof a.innerText !== "undefined" ? a.innerText : undefined
    }

    function f(a) {
        if (typeof a == "undefined" || a == null) a = window.event;
        if (!(typeof a == "undefined" || a == null))
            if (a.preventDefault == null) a.returnValue = false;
            else a.preventDefault()
    }

    function d(d, b) {
        var c = d[b],
            a = d.offsetParent;
        while (a != null && a.tagName != "BODY") {
            c += a[b];
            a = a.offsetParent
        }
        if (a != null) c += a[b];
        return c
    }

    function b(a) {
        return d(a, "offsetLeft")
    }

    function c(a) {
        return d(a, "offsetTop")
    }

    function l(a) {
        var b, c;
        if ("undefined" !== typeof a.pageX && "undefined" !== typeof a.pageY) {
            b = a.pageX;
            c = a.pageY
        } else {
            b = a.clientX;
            c = a.clientY;
            if ("undefined" !== typeof document.body && null !== document.body) {
                b += document.body.scrollLeft;
                c += document.body.scrollTop
            }
            if ("undefined" !== typeof document.documentElement && null !== document.documentElement) {
                b += document.documentElement.scrollLeft;
                c += document.documentElement.scrollTop
            }
        }
        return {
            x: b,
            y: c
        }
    }

    function p(c, a, b) {
        if (!Boolean(b)) b = window;
        if (typeof a == "string") a = new Function(a);
        b["on" + c] = a
    }

    function k(b, c, d, a) {
        if (Boolean(b.addEventListener)) {
            a = typeof a != "undefined" && a != null ? a : false;
            b.addEventListener(c.substr(2), d, a)
        } else Boolean(b.attachEvent) && b.attachEvent(c, d)
    }

    function i(b, c, d, a) {
        if (Boolean(b.removeEventListener)) {
            a = typeof a != "undefined" && a != null ? a : false;
            b.removeEventListener(c.substr(2), d, a)
        } else Boolean(b.detachEvent) && b.detachEvent(c, d)
    }

    function e(d, g, k) {
        var j = Number(c(d)),
            f = Number(b(d)),
            n = Number(d.clientHeight),
            i = Number(d.clientWidth),
            m = Number(document.documentElement.clientHeight),
            h = Number(document.documentElement.clientWidth),
            e = j,
            a = f;
        if (j + n > m) e = m - n - g;
        if (f < 0) {
            if (i + g < h) a = g
        } else if (f + i > h)
            if (Boolean(k))
                for (var l = 0; l < k.length; l++) a -= k[l];
            else a = h - i - g;
        if (e !== j || a !== f) {
            e = Math.max(e, 0);
            a = Math.max(a, 0);
            d.style.position = "absolute";
            d.style.top = String(e) + "px";
            d.style.left = String(a) + "px"
        }
    }
}
var fRightToLeft, cancelDefault, AbsLeft, AbsTop, CancelEvent, GetElementsByName, GetEventCoords, GetEventSrcElement, GetInnerText, PreventDefaultNavigation, SetEvent, Encoding;

function Encoding_module_def() {
    Encoding.EncodeScriptQuote = d;
    Encoding.HtmlEncode = f;
    Encoding.HtmlDecode = e;
    Encoding.AttrQuote = g;
    Encoding.ScriptEncode = a;
    Encoding.ScriptEncodeWithQuote = c;
    Encoding.CanonicalizeUrlEncodingCase = b;

    function b(c) {
        for (var b = "", a = 0; a < c.length; a++) {
            var d = c.charAt(a);
            if (d == "%" && a + 2 < c.length) {
                b += d;
                a++;
                b += c.charAt(a).toString().toUpperCase();
                a++;
                b += c.charAt(a).toString().toUpperCase()
            } else b += d
        }
        return b
    }

    function d(f) {
        for (var c = new String(f), b = [], a = 0, e = c.length, a = 0; a < e; a++) {
            var d = c.charAt(a);
            b.push(d == "'" ? "%27" : d)
        }
        return b.join("")
    }

    function f(d) {
        if (null == d) return "";
        for (var c = new String(d), a = [], b = 0, f = c.length, b = 0; b < f; b++) {
            var e = c.charAt(b);
            switch (e) {
                case "<":
                    a.push("&lt;");
                    break;
                case ">":
                    a.push("&gt;");
                    break;
                case "&":
                    a.push("&amp;");
                    break;
                case '"':
                    a.push("&quot;");
                    break;
                case "'":
                    a.push("&#39;");
                    break;
                default:
                    a.push(e)
            }
        }
        return a.join("")
    }

    function e(a) {
        if (null == a) return "";
        for (var e = [/\&lt;/g, /\&gt;/g, /\&quot;/g, /\&#39;/g, /\&#58;/g, /\&#123;/g, /\&#125;/g, /\&amp;/g], f = ["<", ">", '"', "'", ":", "{", "}", "&"], d = [], c = 0, g = e.length, c = 0; c < g; c++) {
            var b = a.indexOf("&");
            if (-1 != b) {
                if (0 < b) {
                    d.push(a.substr(0, b));
                    a = a.substr(b)
                }
                a = a.replace(e[c], f[c])
            } else break
        }
        d.push(a);
        return d.join("")
    }

    function g(a) {
        a = a.toString();
        a = a.replace(/&/g, "&amp;");
        a = a.replace(/\"/g, "&quot;");
        a = a.replace(/\r/g, "&#13;");
        return '"' + a + '"'
    }

    function a(e) {
        if (null == e || typeof e == "undefined") return "";
        for (var d = new String(e), a = [], c = 0, g = d.length, c = 0; c < g; c++) {
            var b = d.charCodeAt(c);
            if (b > 4095) a.push("\\u" + b.toString(16).toUpperCase());
            else if (b > 255) a.push("\\u0" + b.toString(16).toUpperCase());
            else if (b > 127) a.push("\\u00" + b.toString(16).toUpperCase());
            else {
                var f = d.charAt(c);
                switch (f) {
                    case "\n":
                        a.push("\\n");
                        break;
                    case "\r":
                        a.push("\\r");
                        break;
                    case '"':
                        a.push("\\u0022");
                        break;
                    case "%":
                        a.push("\\u0025");
                        break;
                    case "&":
                        a.push("\\u0026");
                        break;
                    case "'":
                        a.push("\\u0027");
                        break;
                    case "(":
                        a.push("\\u0028");
                        break;
                    case ")":
                        a.push("\\u0029");
                        break;
                    case "+":
                        a.push("\\u002b");
                        break;
                    case "/":
                        a.push("\\u002f");
                        break;
                    case "<":
                        a.push("\\u003c");
                        break;
                    case ">":
                        a.push("\\u003e");
                        break;
                    case "\\":
                        a.push("\\\\");
                        break;
                    default:
                        a.push(f)
                }
            }
        }
        return a.join("")
    }

    function c(b) {
        return '"' + a(b) + '"'
    }
}
var encodeScriptQuote, STSHtmlEncode, STSHtmlDecode, StAttrQuote, STSScriptEncode, STSScriptEncodeWithQuote, CanonicalizeUrlEncodingCase, ExpFlighting;

function ExpFlighting_module_def() {
    var b = "undefined";

    function a() {
        var a;
        return typeof Flighting != b && typeof Flighting.VariantConfiguration != b && typeof Flighting.VariantConfiguration.IsExpFeatureClientEnabled != b
    }
    ExpFlighting.UseGU24 = function() {
        var b = false;
        if (a()) b = Flighting.VariantConfiguration.IsExpFeatureClientEnabled(498);
        return b
    };
    ExpFlighting.UseGU25 = function() {
        var b = false;
        if (a()) b = Flighting.VariantConfiguration.IsExpFeatureClientEnabled(499);
        return b
    };
    ExpFlighting.UseGU26 = function() {
        var b = false;
        if (a()) b = Flighting.VariantConfiguration.IsExpFeatureClientEnabled(360);
        return b
    };
    ExpFlighting.UseGU27 = function() {
        var b = false;
        if (a()) b = Flighting.VariantConfiguration.IsExpFeatureClientEnabled(364);
        return b
    };
    ExpFlighting.UseGU28 = function() {
        var b = false;
        if (a()) b = Flighting.VariantConfiguration.IsExpFeatureClientEnabled(365);
        return b
    };
    ExpFlighting.UseGU30 = function() {
        var b = false;
        if (a()) b = Flighting.VariantConfiguration.IsExpFeatureClientEnabled(367);
        return b
    }
}
var IE8Support;

function IE8Support_module_def() {
    IE8Support.arrayIndexOf = function(c, d, a) {
        if (typeof Array.prototype.indexOf != "undefined") return c.indexOf(d, a);
        if (typeof d === "undefined") return -1;
        var e = c.length;
        if (e !== 0) {
            a = a - 0;
            if (isNaN(a)) a = 0;
            else {
                if (isFinite(a)) a = a - a % 1;
                if (a < 0) a = Math.max(0, e + a)
            }
            for (var b = a; b < e; b++)
                if (typeof c[b] !== "undefined" && c[b] === d) return b
        }
        return -1
    };
    IE8Support.attachDOMContentLoaded = function(a) {
        if (typeof document.addEventListener == "undefined") document.onreadystatechange = function() {
            document.readyState == "complete" && a()
        };
        else document.addEventListener("DOMContentLoaded", a, false)
    };
    IE8Support.getComputedStyle = function(a, b, c) {
        return typeof document.defaultView != "undefined" && typeof document.defaultView.getComputedStyle != "undefined" ? document.defaultView.getComputedStyle(a, null).getPropertyValue(c) : b == "width" ? String(a.offsetWidth) + "px" : a.currentStyle[b]
    };
    IE8Support.stopPropagation = function(a) {
        if (typeof a.stopPropagation == "function") a.stopPropagation();
        else a.cancelBubble = true
    };
    IE8Support.getCurrentTarget = function(a) {
        return typeof a.currentTarget != "undefined" ? a.currentTarget : a.srcElement
    };
    if (typeof Array.isArray == "undefined") Array.isArray = function(a) {
        return typeof a == "object" && a instanceof Array
    };
    if (typeof Object.create == "undefined") Object.create = function(b) {
        function a() {}
        a.prototype = b;
        return new a
    };
    if (typeof String.prototype.trim == "undefined") String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, "")
    }
}
var RequestUtil;

function RequestUtil_module_def() {
    RequestUtil.RequestHeader = a;

    function a(a, b) {
        this.header = a;
        this.value = b
    }
    RequestUtil.WithLoadedXMLHttpRequest = b;

    function b(e, f, b) {
        var a = new XMLHttpRequest;
        a.onreadystatechange = function() {
            if (a.readyState != 4) return;
            e(a)
        };
        a.open("GET", f, true);
        if (b != null)
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                a.setRequestHeader(d.header, d.value)
            }
        a.send("")
    }
    RequestUtil.WithUrlContents = c;

    function c(d, e, c) {
        b(a, e, c);

        function a(b) {
            var a = null;
            if (b.status == 200) a = b.responseText;
            d(a)
        }
    }
    var e = [new a("Content-Type", "application/x-www-form-urlencoded"), new a("ACCEPT", "application/json; odata = verbose")];
    RequestUtil.WithRestValue = d;

    function d(a, b) {
        c(a, b, e)
    }
}
var StringUtil;

function StringUtil_module_def() {
    StringUtil.BuildParam = a;
    StringUtil.IsGuid = b;
    if (typeof String.prototype.endsWith == "undefined") String.prototype.endsWith = function(a) {
        return this.substr(this.length - a.length) === a
    };
    if (typeof String.prototype.startsWith == "undefined") String.prototype.startsWith = function(a) {
        return this.substr(0, a.length) === a
    };

    function a(b) {
        for (var c, a = 1; a < arguments.length; a++) {
            c = new RegExp("\\^" + String(a));
            b = b.replace(c, arguments[a])
        }
        return b
    }
    StringUtil.ApplyStringTemplate = function() {
        var a = arguments;
        if (a.length < 1) throw new Error("arguments");
        var c = Array.prototype.shift.call(a);
        return c.replace(/\{(\d+)\}/g, b);

        function b(c, b) {
            return a[Number(b)]
        }
    };

    function b(b) {
        var a = /^((\{[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}\})|([0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}))$/i;
        return a.test(b)
    }
}
var StBuildParam, TypeUtil;

function TypeUtil_module_def() {
    TypeUtil.IsArray = b;
    TypeUtil.IsNullOrUndefined = a;

    function b(a) {
        return typeof a == "object" && a instanceof Array
    }

    function a(a) {
        return a == null || a == undefined
    }
}
var IsArray, IsNullOrUndefined, ObjectUtil;

function ObjectUtil_module_def() {
    ObjectUtil.deepCopy = b;
    ObjectUtil.deepCompare = a;

    function b(c) {
        var a = [];

        function b(c) {
            var e = null;
            if (Boolean(c)) {
                if (c instanceof Array) e = [];
                else e = Object.create(Object.getPrototypeOf(c));
                for (var d in c)
                    if (c.hasOwnProperty(d))
                        if (typeof c[d] === "object") {
                            if (a.indexOf(c[d]) !== -1) throw new Error("Cannot perform DeepCopy() because a circular reference was encountered, object: " + String(c) + ", property: " + String(d));
                            a.push(c[d]);
                            e[d] = b(c[d]);
                            a.pop()
                        } else e[d] = c[d]
            }
            return e
        }
        return b(c)
    }

    function a(f, g, c) {
        var a = [],
            b = [],
            e = Boolean(c) ? c : function(a, b) {
                return a === b
            };

        function d(f, g) {
            if (f === g) return true;
            if (f === null || g === null) return false;
            for (var c in g)
                if (g.hasOwnProperty(c) && !f.hasOwnProperty(c)) return false;
            if (f instanceof Object && g instanceof Object)
                for (c in f) {
                    if (typeof f[c] === "function" || !f.hasOwnProperty(c)) continue;
                    if (!g.hasOwnProperty(c)) return false;
                    if (!Boolean(e(f[c], g[c])))
                        if (typeof f[c] === "object") {
                            if (a.indexOf(f[c]) !== -1) throw new Error("Cannot perform DeepCompare() because a circular reference was encountered, object: " + String(f) + ", property: " + String(c));
                            a.push(f[c]);
                            if (b.indexOf(g[c]) !== -1) throw new Error("Cannot perform DeepCompare() because a circular reference was encountered, object: " + String(g) + ", property: " + String(c));
                            b.push(g[c]);
                            if (!d(f[c], g[c])) return false;
                            a.pop();
                            b.pop()
                        } else return false
                } else return false;
            return true
        }
        return d(f, g)
    }
}
var URI, unescapeProperly, GetAbsoluteUrl, RemoveParametersFromUrl, RemoveQueryParameterFromUrl, RemoveUrlKeyValue, StURLSetVar2, ParseMultiColumnValue, ConvertMultiColumnValueToString, CompleteDecode, URI_Encoding;

function URI_Encoding_module_def() {
    function a(f, g, h, i) {
        var c = "",
            b, d = 0,
            k = " \"%<>'&";
        if (typeof f == "undefined") return "";
        for (d = 0; d < f.length; d++) {
            var a = f.charCodeAt(d),
                e = f.charAt(d);
            if (g && (e == "#" || e == "?")) {
                c += f.substr(d);
                break
            }
            if (h && e == "&") {
                c += e;
                continue
            }
            if (a <= 127) {
                if (i) c += e;
                else if (a >= 97 && a <= 122 || a >= 65 && a <= 90 || a >= 48 && a <= 57 || g && a >= 32 && a <= 95 && k.indexOf(e) < 0) c += e;
                else if (a <= 15) c += "%0" + a.toString(16).toUpperCase();
                else if (a <= 127) c += "%" + a.toString(16).toUpperCase()
            } else if (a <= 2047) {
                b = 192 | a >> 6;
                c += "%" + b.toString(16).toUpperCase();
                b = 128 | a & 63;
                c += "%" + b.toString(16).toUpperCase()
            } else if ((a & 64512) != 55296) {
                b = 224 | a >> 12;
                c += "%" + b.toString(16).toUpperCase();
                b = 128 | (a & 4032) >> 6;
                c += "%" + b.toString(16).toUpperCase();
                b = 128 | a & 63;
                c += "%" + b.toString(16).toUpperCase()
            } else if (d < f.length - 1) {
                a = (a & 1023) << 10;
                d++;
                var j = f.charCodeAt(d);
                a |= j & 1023;
                a += 65536;
                b = 240 | a >> 18;
                c += "%" + b.toString(16).toUpperCase();
                b = 128 | (a & 258048) >> 12;
                c += "%" + b.toString(16).toUpperCase();
                b = 128 | (a & 4032) >> 6;
                c += "%" + b.toString(16).toUpperCase();
                b = 128 | a & 63;
                c += "%" + b.toString(16).toUpperCase()
            }
        }
        return c
    }

    function b(b) {
        var d = b.indexOf("#"),
            c = b.indexOf("?");
        if (d > 0 && (c == -1 || d < c)) {
            var e = b.substr(0, d);
            if (c > 0) e += b.substr(c);
            b = e
        }
        return a(b, true, false, true)
    }
    URI_Encoding.encodeURIComponent = a;
    URI_Encoding.escapeUrlForCallback = b
}
var escapeUrlForCallback, escapeProperly, escapeProperlyCore, escapeProperlyCoreCore;

function PageContextInfo(e, n, h, m, q, p, r, k, c, a, j, l, o, g, i, f, d, b) {
    this.webServerRelativeUrl = e;
    this.webAbsoluteUrl = j;
    this.siteAbsoluteUrl = i;
    this.layoutsUrl = o;
    this.webLanguage = n;
    this.siteClientTag = l;
    this.currentLanguage = h;
    this.webUIVersion = m;
    this.pageListId = q;
    this.pageItemId = p;
    this.userId = r;
    this.alertsEnabled = k;
    this.siteServerRelativeUrl = c;
    this.allowSilverlightPrompt = a;
    this.tenantAppVersion = g;
    this.themedImageRootPath = f;
    this.themedImageFileNames = d;
    this.clientServerTimeDelta = b;
    this.updateFormDigestPageLoaded = new Date
}

function PageContextInfo_InitializePrototype() {
    var a = null;
    PageContextInfo.prototype.webServerRelativeUrl = "";
    PageContextInfo.prototype.webAbsoluteUrl = "";
    PageContextInfo.prototype.siteAbsoluteUrl = "";
    PageContextInfo.prototype.serverRequestPath = "";
    PageContextInfo.prototype.layoutsUrl = "";
    PageContextInfo.prototype.siteClientTag = "";
    PageContextInfo.prototype.webLanguage = 0;
    PageContextInfo.prototype.webTitle = null;
    PageContextInfo.prototype.webLogoUrl = null;
    PageContextInfo.prototype.currentCultureName = null;
    PageContextInfo.prototype.currentUICultureName = null;
    PageContextInfo.prototype.currentLanguage = 0;
    PageContextInfo.prototype.crossDomainPhotosEnabled = false;
    PageContextInfo.prototype.webUIVersion = 0;
    PageContextInfo.prototype.pageListId = "";
    PageContextInfo.prototype.pageItemId = 0;
    PageContextInfo.prototype.userId = "";
    PageContextInfo.prototype.systemUserKey = "";
    PageContextInfo.prototype.alertsEnabled = false;
    PageContextInfo.prototype.siteServerRelativeUrl = "";
    PageContextInfo.prototype.allowSilverlightPrompt = "";
    PageContextInfo.prototype.tenantAppVersion = null;
    PageContextInfo.prototype.themedImageRootPath = null;
    PageContextInfo.prototype.themedImageFileNames = a;
    PageContextInfo.prototype.clientServerTimeDelta = 0;
    PageContextInfo.prototype.webTemplate = "";
    PageContextInfo.prototype.isSLV = false;
    PageContextInfo.prototype.updateFormDigestPageLoaded = new Date
}
var _spPageContextInfo, Nav;

function Nav_module_def() {
    function B() {
        this._list = new Array(0);
        this._fixLayoutsUrl = function(a) {
            var c = a.indexOf("_layouts/");
            if (c != -1) {
                var d = a.substr(c),
                    b = d.split("/")[1];
                if (b != null)
                    if (isNaN(Number(b))) a = a.replace("_layouts/", "_layouts/15/")
            }
            return a
        };
        this.update = function(m, k, p, e) {
            var o = c(window.location.href),
                h = {},
                a = "";
            if (null == m) {
                if (o != null && o.length != 0) {
                    var i = o.substr(1).split("#"),
                        r = i.length,
                        q = 0;
                    if ("undefined" != typeof g_MinimalDownload && g_MinimalDownload && r > 0 && i[0].length > 0 && i[0][0] == "/") {
                        a = i[0];
                        q = 1
                    }
                    d(h, i, r, q)
                }
            } else a = this._fixLayoutsUrl(m);
            if ("undefined" != typeof k)
                for (var f in k) {
                    var l = k[f];
                    if (null != l && "string" != typeof l && "number" != typeof l) throw "Unexpected";
                    if (null == l) {
                        if (h[f] != null) delete h[f]
                    } else h[f] = k[f]
                }
            if ("undefined" != typeof e && e != null && e != "") a += "#" + encodeURIComponent(e);
            for (f in h)
                if (f != "anchorTag") a += "#" + f + "=" + encodeURIComponent(h[f]);
            if (null != m) typeof _dlgWndTop == "function" && typeof commonModalDialogClose == "function" && commonModalDialogClose(0, null);
            var n = "undefined" != typeof asyncDeltaManager && Boolean(asyncDeltaManager) && "undefined" != typeof asyncDeltaManager._handleLocalAnchor && "undefined" != typeof asyncDeltaManager.SetCurrentUrl && "undefined" != typeof asyncDeltaManager._navigate;
            if ("undefined" != typeof p && p || !n)
                if (a.startsWith("#")) try {
                    window.location.hash = a
                } catch (u) {} else try {
                    window.location.href = a
                } catch (u) {} else if (null == m) {
                    if (n) {
                        "undefined" != typeof e && e != null && e != "" && asyncDeltaManager._handleLocalAnchor(e);
                        var t = b(window.location.href),
                            s = j(t, g(a), true);
                        if (Boolean(s)) asyncDeltaManager._savedFormAction = s
                    }
                    try {
                        window.location.hash = a
                    } catch (u) {}
                } else if (n) {
                asyncDeltaManager.SetCurrentUrl(null);
                asyncDeltaManager._navigate(a, e, true)
            }
        };
        this.add_navigate = function(a) {
            if ("function" != typeof a) throw "unexpected";
            var b = IE8Support.arrayIndexOf(this._list, a, 0); - 1 == b && this._list.push(a)
        };
        this.remove_navigate = function(a) {
            if ("function" != typeof a) throw "unexpected";
            var b = IE8Support.arrayIndexOf(this._list, a, 0); - 1 != b && this._list.splice(b, 1)
        };
        this._buildHashBag = function(b) {
            var c = {};
            try {
                if (b == "" || b == "#") c.url = "/";
                else if (b != null && b.length != 0) {
                    var a = b.substr(1).split("#"),
                        f = a.length,
                        e = 0;
                    if ("undefined" != typeof g_MinimalDownload && g_MinimalDownload && f > 0 && a[0].length > 0 && a[0][0] == "/") {
                        c.url = a[0];
                        e = 1
                    }
                    d(c, a, f, e)
                }
            } catch (g) {}
            return c
        };
        this._raiseNavigate = function(e) {
            for (var b = this._buildHashBag(c(window.location.href)), d = this._list.length, a = 0, f = d; a < f; a++) this._list[a](e, b)
        };
        this._clear = function() {
            this._list = new Array(0)
        };
        this.submit = function(a) {
            if ("undefined" != typeof g_MinimalDownload && g_MinimalDownload && window.location.pathname.toLowerCase().endsWith("/_layouts/15/start.aspx") && "undefined" != typeof asyncDeltaManager && "undefined" != typeof asyncDeltaManager._onFormSubmitCore) asyncDeltaManager._onFormSubmitCore(a);
            else a.submit()
        };
        this.getParam = function(b) {
            var a = this._buildHashBag(c(window.location.href));
            return a[b]
        };
        this.getSavedFormAction = function() {
            var a = null;
            if ("undefined" != typeof asyncDeltaManager && Boolean(asyncDeltaManager) && "undefined" != typeof asyncDeltaManager._savedFormAction) {
                a = asyncDeltaManager._savedFormAction;
                if (Boolean(a)) a = q(a)
            }
            return a
        };
        this.get_href = function() {
            var a = null;
            if (window.location.pathname.toLowerCase().endsWith("/_layouts/15/start.aspx")) {
                if ("undefined" != typeof g_MinimalDownload && g_MinimalDownload) a = this.getSavedFormAction();
                if (!Boolean(a)) a = f()
            } else a = window.location.href;
            return a
        };
        this.get_hash = function() {
            var a = window.location.hash;
            if ("undefined" != typeof g_MinimalDownload && g_MinimalDownload && window.location.pathname.toLowerCase().endsWith("/_layouts/15/start.aspx")) {
                var b = a.indexOf("#", 1);
                a = b > 0 ? a.substr(b) : ""
            }
            return a
        };
        this.get_search = function() {
            var a = "";
            if ("undefined" != typeof g_MinimalDownload && g_MinimalDownload && window.location.pathname.toLowerCase().endsWith("/_layouts/15/start.aspx")) {
                var b = this.getSavedFormAction();
                if (Boolean(b)) {
                    var c = b.indexOf("?");
                    if (-1 != c) a = b.substr(c)
                }
            } else a = window.location.search;
            return a
        };
        this.convertMDSURLtoRegularURL = function(b) {
            var d = b;
            if (b != null || b != "") {
                var g = "/_layouts/15/start.aspx",
                    c = b.toLowerCase().indexOf(g);
                if (c != -1) {
                    var e = b.substring(0, c);
                    c += g.length;
                    if (b.length == c) d = e;
                    else if (b[c] == "#") {
                        c += 1;
                        if (b.length == c) d = e;
                        else if (b.length >= c + 2 && b[c] == "/" && b[c + 1] == "/") {
                            var h = b.indexOf("://");
                            if (h != -1) {
                                var f = b.indexOf("/", h + 3);
                                if (f != -1) {
                                    var k = b.substring(0, f),
                                        i = b.substring(c + 1);
                                    d = a(k, i)
                                }
                            }
                        } else if (b.length >= c + 1 && b[c] == "/") {
                            var j = b.substring(c);
                            d = a(e, j)
                        }
                    }
                }
            }
            return d
        }
    }

    function h(b) {
        if ("undefined" != typeof b.ctrlKey && Boolean(b.ctrlKey)) return true;
        if ("undefined" != typeof b.button && 1 == b.button) return true;
        if (ExpFlighting.UseGU26()) {
            var c = DOM.GetParentLinkFromEvent(b);
            if (c != null) {
                var a = c.getAttribute("target");
                if (Boolean(a)) {
                    a = a.toUpperCase();
                    if (a == "_BLANK" || a == "_NEW" || a.charAt(0) != "_") return true
                }
            }
        }
        return false
    }

    function t(b, e) {
        if (!(b.returnValue === false || b.defaultPrevented) && !h(b)) {
            var d = DOM.GetEventSrcElement(b),
                a = d,
                c = false;
            while (null != a) {
                if (null != a.tagName && "A" == a.tagName.toUpperCase()) {
                    c = true;
                    break
                }
                if (a == e) break;
                a = a.parentNode
            }
            if (c && a.href != null && a.href.length > 0 && a.href != "#" && !/^javascript:/i.test(a.href)) {
                DOM.cancelDefault(b);
                Nav.navigate(a.href);
                return false
            }
        }
        return function(a) {
            return a
        }()
    }

    function d(g, j, i, h) {
        for (var e = false, f = h; f < i; f++) {
            var a = j[f];
            if (null == a || 0 == a.length) continue;
            var b = a.indexOf("="),
                d, c;
            if (b >= 1) {
                d = a.substr(0, b);
                c = a.substr(b + 1);
                g[d] = URI.decodeURIComponent(c)
            } else if (b == -1 && !e) {
                if (e) throw "Unexpected";
                d = "anchorTag";
                c = a;
                g[d] = URI.decodeURIComponent(c);
                e = true
            } else throw "Unexpected";
        }
    }

    function c(b) {
        var a = b.indexOf("#");
        a = a > 0 ? a : b.length;
        return b.substr(a)
    }

    function b(b) {
        var a = b.indexOf("#");
        a = a > 0 ? a : b.length;
        return b.substr(0, a)
    }

    function g(a) {
        return URI.removeQueryParameter(URI.removeQueryParameter(URI.removeQueryParameter(a, "AjaxDelta"), "OrigMaster"), "isStartPlt1")
    }

    function j(a, b, h) {
        var c = function() {}();
        if (a == null) return c;
        if (b == null || b.length < 1 || b[0] != "/") return c;
        var d = a.indexOf("/_layouts/15/start.aspx");
        if (-1 == d) return c;
        var e;
        if (h && "/" != a[0]) {
            var f = a.indexOf("://");
            if (-1 == f) return c;
            var g = a.indexOf("/", f + 3);
            e = a.substr(g, d - g)
        } else e = a.substr(0, d);
        return e + b
    }

    function r(c) {
        var a = c.url,
            e = c.anchorTag;
        for (var d in c)
            if (d != "anchorTag" && d != "url") a += "#" + d + "=" + encodeURIComponent(c[d]);
        if (Boolean(e)) a += "#" + e;
        if (null != a && a.length > 1 && "/" == a[0] && "/" == a[1]) return a.substr(1);
        else {
            var f = b(window.location.href);
            return j(f, a, true)
        }
    }

    function u(a) {
        var b = {};
        try {
            if (a != null && a.length != 0) {
                var c = a.split("#");
                d(b, c, c.length, 0)
            }
        } catch (e) {}
        return b
    }

    function q(b) {
        var a = document.createElement("form");
        a.action = b;
        return a.action
    }

    function f() {
        var c = null,
            a = window.location.href,
            e = a.toLowerCase().indexOf("/_layouts/15/start.aspx"),
            f = a.indexOf("://"),
            d = a.indexOf("/", f + 3);
        if (-1 == d) d = a.length;
        var b = a.indexOf("#");
        if (-1 != b && b + 1 <= a.length && "/" == a[b + 1])
            if (b + 2 <= a.length && "/" == a[b + 2]) c = a.substr(0, d) + a.substr(b + 2);
            else c = a.substr(0, e) + a.substr(b + 1);
        else c = a.substr(0, e);
        return c
    }

    function a(b, a) {
        if (b.endsWith("/")) {
            if (a.startsWith("/")) a = a.substring(1);
            return b + a
        } else return a.startsWith("/") ? b + a : b + "/" + a
    }

    function i(a) {
        var b = a.indexOf("?");
        if (-1 == b) b = a.length;
        var c = a.indexOf("#");
        if (-1 == c) c = a.length;
        var d = Math.min(b, c);
        a = a.substr(0, d);
        return a.toLowerCase().endsWith("/_layouts/15/start.aspx")
    }

    function p(e, b) {
        if (i(b)) return b;
        var g = null;
        if (e != null && b.toLowerCase().startsWith(e.toLowerCase() + "/")) {
            var d = b.substring(e.length + 1);
            if (d == null || d == "") d = "/";
            else if ("/" != d[0]) d = "/" + d;
            g = a(e, "/_layouts/15/start.aspx#" + d)
        } else {
            var h = b.indexOf("://");
            if (h != -1) {
                var f = b.indexOf("/", h + 3);
                if (f != -1) {
                    var j = b.substring(0, f),
                        c = b.substring(f);
                    if (c == null || c == "") c = "/";
                    else if ("/" != c[0]) c = "/" + c;
                    g = a(j, "/_layouts/15/start.aspx#/" + c)
                }
            }
        }
        return g
    }
    var y = new B;
    Nav.ajaxNavigate = y;
    Nav.combineUrl = a;
    Nav.convertRegularURLtoMDSURL = p;
    Nav.isMDSUrl = i;
    Nav.isPageUrlValid = l;
    Nav.isPortalTemplatePage = k;
    Nav.getAjaxLocationWindow = f;
    Nav.getSource = A;
    Nav.getUrlKeyValue = n;
    Nav.getWindowLocationNoHash = b;
    Nav.goToHistoryLink = w;
    Nav.getGoToLinkUrl = m;
    Nav.goToLink = o;
    Nav.goToLinkOrDialogNewWindow = s;
    Nav.goToDiscussion = x;
    Nav.onClickHook = t;
    Nav.pageUrlValidation = v;
    Nav.parseHash = u;
    Nav.navigate = z;
    Nav.removeMDSQueryParametersFromUrl = g;
    Nav.urlFromHashBag = r;
    Nav.wantsNewTab = h;

    function z(a) {
        a = URI.getAbsolute(a);
        if (Nav.ajaxNavigate.get_search().indexOf("IsDlg=1") != -1)
            if (a.indexOf("?") != -1)
                if (String(a.match(RegExp("&$"))) != "&") a = a + "&IsDlg=1";
                else a = a + "IsDlg=1";
        else a = a + "?IsDlg=1";
        if (window.frameElement != null || typeof SPUpdatePage === "undefined" || typeof SPUpdatePage !== "undefined" && SPUpdatePage(a))
            if (e(a)) window.top.location.href = Nav.pageUrlValidation(a);
            else window.location.href = Nav.pageUrlValidation(a)
    }

    function e(a) {
        return n("OpenInTopFrame") == "1" || k(a)
    }

    function k(a) {
        return Nav.getUrlKeyValue("PortalTemplate") == "1" || Nav.getUrlKeyValue("PortalTemplate", Boolean(a)) == "1" || typeof currentCtx != "undefined" && currentCtx != null && typeof currentCtx.isPortalTemplate != "undefined" && Boolean(currentCtx.isPortalTemplate) ? true : false
    }

    function n(c, h, a, g) {
        var e = "";
        if (a == null) a = Nav.ajaxNavigate.get_href() + "";
        var b;
        b = a.indexOf("#");
        if (b >= 0) a = a.substr(0, b);
        var d;
        if (g) {
            c = c.toLowerCase();
            d = a.toLowerCase()
        } else d = a;
        b = d.indexOf("&" + c + "=");
        if (b == -1) b = d.indexOf("?" + c + "=");
        if (b != -1) {
            var f = a.indexOf("&", b + 1);
            if (f == -1) f = a.length;
            e = a.substring(b + c.length + 2, f)
        }
        return h ? e : URI.decodeURIComponent(e)
    }

    function l(a) {
        return a.substr(0, 4) == "http" || a.substr(0, 1) == "/" || a.indexOf(":") == -1
    }

    function v(b, a) {
        if (l(b)) return b;
        else {
            Boolean(a) && alert(a);
            return ""
        }
    }

    function w(c, d) {
        if (c.href == null) return;
        var b = c.href,
            g = c.href.indexOf("?") >= 0 ? "&" : "?",
            f = g + "VersionNo=" + d,
            a = Nav.getSource();
        if (a != null && a != "") a = "&Source=" + a;
        b = c.href + f + a;
        if (e(b)) window.top.location.href = Nav.pageUrlValidation(b);
        else window.location.href = Nav.pageUrlValidation(b)
    }

    function m(b) {
        if (b.href == null) return null;
        var d = b.href.indexOf("?") >= 0 ? "&" : "?",
            a = Nav.getSource();
        if (a != null && a != "") a = d + "Source=" + a;
        var c = b.href + a;
        return c
    }

    function o(c) {
        var a = m(c);
        if (a == null) return;
        if (c.target === "_blank") {
            window.open(a, "_blank");
            return
        }
        var b = true;
        if (typeof window.top.SPUpdatePage !== "undefined") b = window.top.SPUpdatePage(a);
        if (b)
            if (e(a)) window.top.location.href = Nav.pageUrlValidation(a);
            else window.location.href = Nav.pageUrlValidation(a)
    }

    function s(a) {
        if (a.href == null) return;
        if (Boolean(Nav.ajaxNavigate.get_search().match(RegExp("[?&]IsDlg=1")))) window.open(a.href);
        else o(a)
    }

    function x(b) {
        var c = b.indexOf("?") >= 0 ? "&" : "?",
            a = Nav.getSource();
        if (a != null && a != "") b += c + "TopicsView=" + a;
        Nav.navigate(b)
    }

    function A(a) {
        if (typeof GetSource2 == "function") return URI_Encoding.encodeURIComponent(GetSource2(a, null));
        var b = Nav.getUrlKeyValue("Source");
        if (b == "")
            if (a != null && a != "") b = a;
            else b = Nav.ajaxNavigate.get_href();
        return URI_Encoding.encodeURIComponent(Nav.pageUrlValidation(b))
    }
}
var ajaxNavigate, STSNavigate, GetUrlKeyValue, STSPageUrlValidation, PageUrlValidation, AjaxNavigate$isMDSURL, isPortalTemplatePage, GoToHistoryLink, GetGotoLinkUrl, GoToLink, GoToLinkOrDialogNewWindow, GoToDiscussion, GetSource, RemoveMDSQueryParametersFromUrl, AjaxNavigate$_GetWindowLocationNoHash, AjaxNavigate$WantsNewTab, AjaxNavigate$parseHash, AjaxNavigate$_UrlFromHashBag, AjaxNavigate$_getAjaxLocationWindow, IsSTSPageUrlValid, AjaxNavigate$OnClickHook, AjaxNavigate$convertRegularURLtoMDSURL, AjaxNavigate$convertMDSURLtoRegularURL, ProfileCache;

function ProfileCache_module_def() {
    ProfileCache.GetCachedProfile = b;

    function b() {
        var c = null,
            d = BrowserStorage.local;
        if (d != null) {
            var b = d.getItem(a());
            if (Boolean(b)) c = JSON.parse(b)
        }
        return c
    }
    ProfileCache.UserProfileLocalStoreKey = a;

    function a() {
        var a = "UserProfileStorage";
        if (window._spPageContextInfo != null) a += _spPageContextInfo.webServerRelativeUrl;
        return a
    }
}
var ListModule;

function ListModule_module_def() {
    ListModule.BasePermissions = function() {};
    ListModule.BasePermissions.prototype = {
        ManageLists: undefined,
        OpenItems: undefined
    };
    ListModule.Context = a;
    ListModule.Context.prototype = {
        AllowGridMode: undefined,
        BasePermissions: undefined,
        BaseViewID: undefined,
        CascadeDeleteWarningMessage: undefined,
        ContentTypesEnabled: undefined,
        CurrentSelectedItems: undefined,
        CurrentUserId: undefined,
        EnableMinorVersions: undefined,
        ExternalDataList: undefined,
        HasRelatedCascadeLists: undefined,
        HttpPath: undefined,
        HttpRoot: undefined,
        RealHttpRoot: undefined,
        NoScriptEnabled: undefined,
        LastSelectableRowIdx: undefined,
        LastSelectedItemIID: undefined,
        LastRowIndexSelected: undefined,
        RowFocusTimerID: undefined,
        ListData: undefined,
        ListSchema: undefined,
        ModerationStatus: undefined,
        mountPointUrl: undefined,
        PortalUrl: undefined,
        RecycleBinEnabled: undefined,
        SelectAllCbx: undefined,
        SendToLocationName: undefined,
        SendToLocationUrl: undefined,
        StateInitDone: undefined,
        TableCbxFocusHandler: undefined,
        TableMouseoverHandler: undefined,
        TotalListItems: undefined,
        WorkflowsAssociated: undefined,
        clvp: undefined,
        ctxId: undefined,
        ctxType: undefined,
        dictSel: undefined,
        displayFormUrl: undefined,
        editFormUrl: undefined,
        imagesPath: undefined,
        inGridMode: undefined,
        inGridFullRender: undefined,
        isForceCheckout: undefined,
        isModerated: undefined,
        isPortalTemplate: undefined,
        isVersions: undefined,
        isWebEditorPreview: undefined,
        leavingGridMode: false,
        loadingAsyncData: false,
        listBaseType: undefined,
        listName: undefined,
        listTemplate: undefined,
        listUrlDir: undefined,
        newFormUrl: undefined,
        onRefreshFailed: undefined,
        overrideDeleteConfirmation: undefined,
        overrideFilterQstring: undefined,
        overrideScope: undefined,
        searchTerm: undefined,
        recursiveView: undefined,
        rootFolderForDisplay: undefined,
        serverUrl: undefined,
        verEnabled: undefined,
        view: undefined,
        queryString: undefined,
        IsClientRendering: undefined,
        wpq: undefined,
        rootFolder: undefined,
        hasRootFolder: undefined,
        IsAppWeb: undefined,
        NewWOPIDocumentEnabled: undefined,
        NewWOPIDocumentUrl: undefined,
        AllowCreateFolder: undefined,
        CanShareLinkForNewDocument: undefined,
        noGroupCollapse: undefined,
        SiteTemplateId: undefined,
        RealSiteTemplateId: undefined,
        ExcludeFromOfflineClient: false,
        onItemSelectionChangedHandlers: undefined,
        bNoDelete: false,
        qcb: undefined
    };
    ListModule.Context.Type = {
        EditMenu: 0,
        ViewSelector: 1
    };

    function a() {
        this.listBaseType = null;
        this.listTemplate = null;
        this.listName = null;
        this.view = null;
        this.listUrlDir = null;
        this.HttpPath = null;
        this.HttpRoot = null;
        this.serverUrl = null;
        this.imagesPath = null;
        this.PortalUrl = null;
        this.RecycleBinEnabled = null;
        this.enteringGridMode = false;
        this.inGridMode = false;
        this.isWebEditorPreview = null;
        this.rootFolderForDisplay = null;
        this.isPortalTemplate = null;
        this.isModerated = false;
        this.recursiveView = false;
        this.displayFormUrl = null;
        this.editFormUrl = null;
        this.newFormUrl = null;
        this.ctxId = null;
        this.CurrentUserId = null;
        this.isForceCheckout = false;
        this.EnableMinorVersions = false;
        this.ModerationStatus = 0;
        this.verEnabled = 0;
        this.isVersions = 0;
        this.WorkflowsAssociated = false;
        this.ExternalDataList = false;
        this.HasRelatedCascadeLists = 0;
        this.CascadeDeleteWarningMessage = null;
        this.ContentTypesEnabled = false;
        this.SendToLocationName = "";
        this.SendToLocationUrl = "";
        this.StateInitDone = false;
        this.TotalListItems = null;
        this.CurrentSelectedItems = null;
        this.LastSelectableRowIdx = null;
        this.SelectAllCbx = null;
        this.TableCbxFocusHandler = null;
        this.TableMouseoverHandler = null;
        this.onItemSelectionChangedHandlers = []
    }
    ListModule.Settings = {
        SupportsCallouts: false,
        SupportsDragDrop: false,
        SupportsRibbon: false,
        SupportsQCB: false,
        SupportsUpload: false,
        SupportsInplHash: false,
        SupportsAnimation: false,
        SupportsGrouping: false,
        SupportsNonCSR: false,
        SupportsInPlaceEdit: false,
        SupportsItemDelete: false,
        SupportsCheckout: false,
        SupportsPopup: false,
        SupportsErrorDlg: false,
        SupportsFileAttach: false,
        SupportsCopies: false,
        SupportsModeration: false,
        SupportsMQuery: false,
        SupportsRest: false,
        SupportsDatapipes: false,
        SupportsAddToOneDrive: false,
        SupportsAddToOneDriveQCB: false,
        SupportsTaskListEditMode: false,
        SupportsPeopleHoverCard: false,
        SupportsMaintainUserChrome: false,
        SupportsInfiniteScroll: false,
        SupportsDragDropAttract: false,
        SupportsDragDropAttractB: false,
        SupportsDoclibAccessibility: false,
        SupportsDoclibQCB: false,
        SupportsOldDesktopMenus: false,
        SupportsPolicyTips: false,
        SupportsRightClickECB: false,
        SupportsShortcutLink: false,
        SupportsFileExtensionDefinition: false,
        SupportsFileExtensionControls: false,
        SupportsFileHandlerForAllNonOfficeFiles: false,
        SupportsFileExtensionDataPipe: false,
        SupportsFileHandlerAddInPicker: false,
        SupportsFileHandlerFileCreation: false
    }
}
var BasePermissions, ContextInfo, CTXTYPE_EDITMENU, CTXTYPE_VIEWSELECTOR, List_Util;

function List_Util_module_def() {
    ListModule.Util = {};
    ListModule.Util.createViewEditUrl = b;
    ListModule.Util.createItemPropertiesTitleUrl = h;
    ListModule.Util.clearSelectedItemsDict = l;
    ListModule.Util.ctxInitItemState = r;
    ListModule.Util.getAttributeFromItemTable = j;
    ListModule.Util.getSelectedItemsDict = n;
    ListModule.Util.removeOnlyPagingArgs = d;
    ListModule.Util.removePagingArgs = s;
    ListModule.Util.showAttachmentRows = p;
    ListModule.Util.canUploadFile = t;
    ListModule.Util.addWPQtoId = u;
    ListModule.Util.isDefinedAndNotNullOrEmpty = i;
    ListModule.Util.hasEditPermission = q;
    ListModule.Util.makeMountedFolderQueryStrParams = g;
    ListModule.Util.tryAppendMountedFolderQueryStrParams = f;
    ListModule.Util.getHostUrl = v;
    ListModule.Util.reconcileQstringFilters = k;
    ListModule.Util.Qstring = a;

    function d(a) {
        var e = /&*Paged=TRUE/gi;
        a = a.replace(e, "");
        var b = /&*PagedPrev=TRUE/gi;
        a = a.replace(b, "");
        var d = /&p_[^&]*/gi;
        a = a.replace(d, "");
        var f = /&PageFirstRow=[^&]*/gi;
        a = a.replace(f, "");
        var c = /&PageLastRow=[^&]*/gi;
        a = a.replace(c, "");
        return a
    }

    function s(a) {
        a = d(a);
        var c = /\?Filter=1&*/gi;
        a = a.replace(c, "?");
        var e = /&Filter=1/gi;
        a = a.replace(e, "");
        var b = /\?$/;
        a = a.replace(b, "");
        return a
    }

    function j(a, d, c) {
        var b = a != null ? a.getAttribute(d) : null;
        if (b == null && a != null && c != null) b = a.getAttribute(c);
        return b
    }

    function r(a) {
        a.TotalListItems = 0;
        a.CurrentSelectedItems = 0;
        a.LastSelectableRowIdx = 0;
        a.StateInitDone = true
    }

    function l(a) {
        if (a != null) a.dictSel = []
    }

    function p() {
        var b = document.getElementById("idAttachmentsTable"),
            a = document.getElementById("idAttachmentsRow");
        if (a != null) {
            var d = new URI(Nav.ajaxNavigate.get_href()),
                c = d.getQueryParameter("OnlyIncludeOneField");
            if (b == null || b.rows.length == 0 || Boolean(c)) a.style.display = "none";
            else a.style.display = "table-row"
        }
    }

    function n(a) {
        return a != null && a.dictSel != null ? a.dictSel : null
    }

    function b(b, c, d, e) {
        var a = [];
        if (d) a.push(b.editFormUrl);
        else a.push(b.displayFormUrl);
        a.push("&ID=");
        a.push(c.ID);
        a.push("&ContentTypeID=");
        a.push(c.ContentTypeId);
        if (e) {
            a.push("&Source=");
            a.push(Nav.getSource())
        }
        return a.join("")
    }

    function h(a, c) {
        return a.inGridMode ? b(a, c, true, false) : b(a, c, false, false)
    }

    function t(b) {
        if (typeof SupportsFileUpload == "function" && SupportsFileUpload()) {
            var a = b.ListSchema;
            return Boolean(a) && Boolean(a.IsDocLib) && !BrowserDetection.userAgent.ipad && !BrowserDetection.userAgent.windowsphone
        } else return false
    }

    function u(a, b) {
        return Boolean(a) && Boolean(b) ? a.lastIndexOf("-") == a.length - 1 ? a + b : a + "-" + b : a
    }

    function i(a) {
        return typeof a !== "undefined" && a !== null && a !== ""
    }

    function q(b) {
        var a = String(b.PermMask);
        return (parseInt("0x" + a.substring(a.length - 1)) & 4) != 0
    }

    function c(d, j) {
        var b = new URI(Nav.ajaxNavigate.get_href()),
            e = b.getQueryParameter("RemoteSiteId"),
            a = [];
        if (Boolean(e)) {
            var f = b.getQueryParameter("RemoteWebId");
            if (Boolean(f)) {
                var c = null;
                if (d) c = b.getQueryParameter("RemoteFolderId");
                if (StringUtil.IsGuid(e) && StringUtil.IsGuid(f) && (!d || Boolean(c) && StringUtil.IsGuid(c))) {
                    a.push({
                        k: "RemoteSiteId",
                        v: e
                    });
                    a.push({
                        k: "RemoteWebId",
                        v: f
                    });
                    d && a.push({
                        k: "RemoteFolderId",
                        v: c
                    })
                }
            }
        } else {
            var i = b.getQueryParameter("GroupSiteUrl");
            if (Boolean(i)) {
                var h = b.getQueryParameter("GroupId");
                if (Boolean(h) && StringUtil.IsGuid(h)) {
                    a.push({
                        k: "GroupSiteUrl",
                        v: i
                    });
                    a.push({
                        k: "GroupId",
                        v: h
                    })
                }
            }
        }
        if (a.length > 0) {
            if (j) {
                var g = b.getQueryParameter("MPPrefix");
                if (Boolean(g)) {
                    a.push({
                        k: "MPPrefix",
                        v: g
                    });
                    a.push("&MPPrefix=");
                    a.push(g)
                }
            }
            return a
        }
        return null
    }

    function g(e, f) {
        var b = c(e, f);
        if (b == null) return null;
        for (var a = [], d = 0; d < b.length; d++) {
            a.push("&");
            a.push(b[d].k);
            a.push("=");
            a.push(b[d].v)
        }
        return a.join("")
    }

    function f(g, e, f) {
        var a = c(e, f);
        if (a == null) return null;
        for (var d = new URI(g), b = 0; b < a.length; b++) d.setQueryParameter(String(a[b].k), String(a[b].v));
        return d.getString()
    }

    function v(b) {
        var a = b;
        if (a.lastIndexOf("/") > a.indexOf("//") + 1) a = a.substring(0, a.indexOf("/", a.indexOf("//") + 2));
        return a
    }

    function a(b) {
        if (b == null) b = "";
        if (b.indexOf("?") == 0) b = b.substring(1);
        this.nonFilterParams = {};
        this.filterParams = {};
        for (var f = b.split("&"), e = 0; e < f.length; e++) {
            var h = f[e],
                a = h.split("=");
            if (a.length == 2)
                if (a[0].search("^Filter") != -1) {
                    var d = a[0].match(new RegExp("[0-9]*$")),
                        c;
                    if (typeof this.filterParams[d] != "undefined") c = this.filterParams[d];
                    else {
                        c = {};
                        this.filterParams[d] = c
                    }
                    var g = a[0].match(new RegExp("^Filter[^0-9]*"));
                    c[g] = a[1]
                } else this.nonFilterParams[a[0]] = a[1]
        }
    }
    a.prototype.filterParams = {};
    a.prototype.nonFilterParams = {};
    a.prototype.toArray = o;

    function o() {
        var c = [],
            b, a, e = 1,
            d = this.filterParams,
            g = typeof d.length == "number" ? d.length : 0;
        for (b in this.filterParams) {
            var f = this.filterParams[b];
            for (b in f) {
                a = [];
                a.push(b);
                a.push(e);
                a.push("=");
                a.push(f[b]);
                c.push(a.join(""))
            }
            e++
        }
        for (b in this.nonFilterParams) {
            a = [];
            a.push(b);
            a.push("=");
            a.push(this.nonFilterParams[b]);
            c.push(a.join(""))
        }
        return c
    }
    a.prototype.toString = m;

    function m() {
        var a = this.toArray();
        return "?" + a.join("&")
    }

    function e() {}
    e.prototype = {
        left: [],
        right: []
    };
    a.Diff = function(j, i) {
        for (var h = new a(j).toArray(), g = new a(i).toArray(), c = {}, f = new e, b = 0; b < h.length; b++) c[h[b]] |= 1;
        for (b = 0; b < g.length; b++) c[g[b]] |= 2;
        for (var d in c)
            if (c[d] == 1) f.left.push(d);
            else c[d] == 2 && f.right.push(d);
        return f
    };

    function k(l, m) {
        var d = [];
        d.push(new a(l));
        d.push(new a(m));
        for (var h = [], k, f, b, c = 0; c < d.length; c++)
            for (f in d[c].nonFilterParams)
                if (c == 0 || typeof d[0].nonFilterParams[f] == "undefined" && c == 1) {
                    b = [];
                    b.push(f);
                    b.push("=");
                    b.push(d[c].nonFilterParams[f]);
                    h.push(b.join(""))
                }
        var j = 1,
            i = {};
        for (c = 0; c < d.length; c++)
            for (k in d[c].filterParams) {
                var e = d[c].filterParams[k],
                    g = typeof e.FilterField == "string" ? e.FilterField : null;
                if (g == null) g = typeof e.FilterFields == "string" ? e.FilterFields : null;
                if (g != null && typeof i[g] == "undefined") {
                    for (f in e) {
                        b = [];
                        b.push(f);
                        b.push(j);
                        b.push("=");
                        b.push(e[f]);
                        h.push(b.join(""))
                    }
                    j++;
                    i[e.FilterField] = e
                }
            }
        return h.join("&")
    }
}
var ctxInitItemState, ClearSelectedItemsDict, CreateItemPropertiesTitleUrl, GetAttributeFromItemTable, GetSelectedItemsDict, RemoveOnlyPagingArgs, RemovePagingArgs, ShowAttachmentRows, CanUploadFile, addWPQtoId, isDefinedAndNotNullOrEmpty, HasEditPermission, getHostUrl, ReconcileQstringFilters, QstringStruct, SuiteNavCommon;

function SuiteNavCommon_module_def() {
    var a = "undefined",
        j = "SPSuiteLinksDate",
        h = "SPSuiteLinksLanguage",
        g = "SPSuiteLinksJson",
        e = "SPSuiteLinksMySiteClientTag",
        m = "SPMySiteLinks",
        l = "SPSuiteNavHeight",
        i = "SPSuiteLinksUserKey",
        d = "SPSuiteLinksWorkProv",
        f = "SPSuiteLinksCached";

    function b(c) {
        var d = null,
            b;
        if (typeof _spPageContextInfo !== a && Boolean(b = _spPageContextInfo) && typeof b[c] !== a) d = String(b[c]);
        return d
    }

    function k() {
        return parseInt(b("siteClientTag"))
    }
    if (typeof GetCurrentUserKey == a) GetCurrentUserKey = function() {
        return b("systemUserKey")
    };
    if (typeof GetCurrentUICultureOrNone == a) GetCurrentUICultureOrNone = function() {
        var a = b("currentUICultureName");
        if (!Boolean(a)) a = "none";
        return a
    };
    var p = 21;

    function n() {
        var a = false,
            h = parseInt(b("webTemplate")) == p;
        if (h) {
            var d, f = ProfileCache.GetCachedProfile();
            if (f != null) a = Boolean(f.isSelf);
            else if (Boolean(d = BrowserStorage.local.getItem(m))) try {
                var c = JSON.parse(d),
                    e = b("webAbsoluteUrl"),
                    g;
                a = Boolean(e) && c != null && Boolean(g = c.Docs) && g.indexOf(e) == 0
            } catch (i) {}
        }
        return a
    }
    var o = ExpFlighting.UseGU28;

    function s() {
        var c = null,
            a = BrowserStorage.local;
        if (GetCurrentUserKey() == a.getItem(i) && GetCurrentUICultureOrNone() == a.getItem(h) && (!o() || !n() || k() == parseInt(a.getItem(e)))) {
            var b = a.getItem(g);
            if (typeof b == "string") c = b
        }
        return c
    }
    if (typeof ExtractSuiteMetadata == a) ExtractSuiteMetadata = function(b) {
        var a = b;
        try {
            if (typeof a == "string") a = JSON.parse(b)
        } catch (c) {
            a = null
        }
        return a
    };
    if (typeof ExtractSuiteProperty == a) ExtractSuiteProperty = function(b, c) {
        try {
            var a = JSON.parse(b);
            if (a != null) return a[c]
        } catch (d) {}
        return undefined
    };
    if (typeof ExtractSuiteVersion == a) ExtractSuiteVersion = function(b) {
        var a = ExtractSuiteProperty(b, "SPSuiteVersion");
        return typeof a == "number" ? a : -1
    };
    if (typeof ExtractIsMobile == a) ExtractIsMobile = function(b) {
        var a = ExtractSuiteProperty(b, "SPIsMobile");
        return typeof a == "boolean" ? a : false
    };
    if (typeof ExtractSuiteLinks == a) ExtractSuiteLinks = function(a) {
        var c = ExtractSuiteVersion(a);
        if (c != -1) {
            var b = ExtractSuiteProperty(a, "NavBarData");
            return typeof b == "string" ? String(b) : JSON.stringify(b)
        }
        return a
    };
    if (typeof ExtractSuiteNavBarData == a) ExtractSuiteNavBarData = function(a) {
        if (a != null) {
            var b = ExtractSuiteMetadata(a);
            return b.NavBarData
        }
        return null
    };

    function q(a) {
        var b = null;
        if (a != null) b = a.NavBarData != null ? a.NavBarData : a;
        return b
    }
    if (typeof GetSuiteLinks == a) GetSuiteLinks = function(h, b, g, n, o) {
        if (typeof g != "number") g = 1;
        var k = g > 1,
            q = null,
            e = !o ? s() : null,
            i = false;
        if (e != null) {
            var m = Date.parse(String(BrowserStorage.local.getItem(j))),
                l = 24 * 60 * 60 * 1e3;
            if (c()) {
                var p = Number(BrowserStorage.local.getItem(d));
                if (p > 0) l = 10 * 1e3
            }
            i = !(m > 0) || +new Date - m > l;
            if (g > 1 && typeof BrowserStorage.session.getItem(f) != "string") i = true
        }
        if (typeof SP !== a && typeof SP._yam !== a)
            if (!i && Boolean(e) && e.indexOf(Boolean(SP._yam) ? "ShellNewsfeed" : "ShellYammer") !== -1) i = true;
        if (e == null) {
            if (h != null) h(function(a) {
                CacheSuiteLinks(a);
                b != null && b(k ? a : ExtractSuiteLinks(a))
            });
            else b != null && b(null);
            return
        }
        if (g != ExtractSuiteVersion(e) || Boolean(n) != ExtractIsMobile(e))
            if (Boolean(h) && (typeof CacheSuiteLinks == a || typeof CacheSuiteLinks._reloadingData != "boolean" || Boolean(CacheSuiteLinks._reloadingData))) {
                CacheSuiteLinks._reloadingData = true;
                ClearSuiteLinksCache();
                GetSuiteLinks(h, b, g, n);
                return
            }
        if (i) h != null && h(function(a) {
            if (CacheSuiteLinks(a)) e = a;
            b != null && g > 1 && b(k ? a : ExtractSuiteLinks(a))
        });
        b != null && b(k ? e : ExtractSuiteLinks(e))
    };

    function r(g) {
        var a = 0,
            d = q(g);
        if (d == null) return a;
        for (var b = d.WorkloadLinks, f = b != null ? b.length : 0, c = 0; c < f; c++) {
            var e = b[c];
            if (e != null && e.Url == null) a++
        }
        return a
    }

    function c() {
        return ExpFlighting.UseGU26()
    }
    if (typeof CacheSuiteLinks == a) CacheSuiteLinks = function(p) {
        var m = 0;
        CacheSuiteLinks._reloadingData = false;
        try {
            var a = JSON.parse(p);
            if (a != null && a.NavBarData != null && a.NavBarData.Dimensions != null) {
                var q = Number(a.NavBarData.Dimensions.Top);
                q > 0 && BrowserStorage.local.setItem(l, String(q) + "px")
            }
            if (a != null && a.DoNotCache === true) return false;
            if (c()) m = r(a)
        } catch (t) {
            return false
        }
        var s = GetCurrentUICultureOrNone(),
            b = BrowserStorage.local;
        b.setItem(g, p);
        b.setItem(h, s);
        b.setItem(j, new Date);
        b.setItem(i, GetCurrentUserKey());
        if (c()) {
            b.setItem(d, m);
            m < 1 && b.removeItem(d)
        }
        BrowserStorage.session.setItem(f, true);
        o() && n() && b.setItem(e, k());
        return true
    };
    if (typeof ClearSuiteLinksCache == a) ClearSuiteLinksCache = function(c) {
        var a = [g, h, j, i, e, l];
        !c && a.push(m);
        for (var b = 0; b < a.length; b++) BrowserStorage.local.removeItem(a[b]);
        BrowserStorage.session.removeItem(f)
    };
    SuiteNavCommon.GetCurrentUserKey = GetCurrentUserKey;
    SuiteNavCommon.GetCurrentUICultureOrNone = GetCurrentUICultureOrNone;
    SuiteNavCommon.ExtractSuiteMetadata = ExtractSuiteMetadata;
    SuiteNavCommon.ExtractSuiteProperty = ExtractSuiteProperty;
    SuiteNavCommon.ExtractSuiteVersion = ExtractSuiteVersion;
    SuiteNavCommon.ExtractIsMobile = ExtractIsMobile;
    SuiteNavCommon.ExtractSuiteLinks = ExtractSuiteLinks;
    SuiteNavCommon.ExtractSuiteNavBarData = ExtractSuiteNavBarData;
    SuiteNavCommon.GetSuiteLinks = GetSuiteLinks;
    SuiteNavCommon.CacheSuiteLinks = CacheSuiteLinks;
    SuiteNavCommon.ClearSuiteLinksCache = ClearSuiteLinksCache
}
var currentCtx, ctx, itemTable, g_supportFiles, g_MDNav, ULS;

function ULSObject() {}

function ULSTrim(a) {
    a = a.replace(/^\s*/, "");
    a = a.replace(/\s*$/, "");
    return a
}

function ULSEncodeXML(a) {
    a = String(a);
    a = a.replace(/&/g, "&amp;");
    a = a.replace(/</g, "&lt;");
    a = a.replace(/>/g, "&gt;");
    a = a.replace(/'/g, "&apos;");
    a = a.replace(/"/g, "&quot;");
    return a
}

function ULSStripPII(a) {
    if (a.indexOf("?") != -1) a = a.substring(0, a.indexOf("?"));
    if (Boolean(window.location)) a = a.replace(window.location.hostname, "[server]");
    return a
}

function ULSGetFunction(e, c) {
    var d = e.toString(),
        a = ULSTrim(d.substring(0, d.indexOf("{")));
    if (a.indexOf("function") == 0) a = ULSTrim(a.substring(8));
    var b = "<function ";
    if (c >= 0) b += 'depth="' + c.toString() + '" ';
    b += 'signature="' + a + '">';
    if (c == 0 || a.indexOf("anonymous") == 0 || a.indexOf("(") == 0) b += "\n<![CDATA[" + d + "]\]>\n";
    b += "</function>";
    return b
}

function ULSGetMetadataFromFrame(oCS) {
    var sFunctionText = oCS.toString(),
        iOpeningBrace = sFunctionText.indexOf("{");
    if (iOpeningBrace == -1) return false;
    sFunctionText = sFunctionText.substr(iOpeningBrace + 1);
    var iFirstStatement = sFunctionText.search(/[^\s]/);
    if (iFirstStatement == -1) return false;
    var reMatch = sFunctionText.match(/ULS[^\s;]*:/);
    if (reMatch == null || typeof reMatch.index != "undefined" && reMatch.index != iFirstStatement) return false;
    var sLabelName = reMatch[0];
    sLabelName = sLabelName.substr(0, sLabelName.length - 1);
    try {
        var o = eval(sLabelName + "()");
        if (typeof o == "undefined" || typeof o.ULSTeamName == "undefined" || typeof o.ULSFileName == "undefined") return false;
        ULS.teamName = o.ULSTeamName;
        ULS.originalFile = o.ULSFileName;
        return true
    } catch (e) {
        return false
    }
}

function ULSGetCallstack(b) {
    var e = "";
    try {
        if (Boolean(b)) {
            var d = false,
                a = b,
                c = 0;
            while (Boolean(a) && c < 20) {
                if (!d) d = ULSGetMetadataFromFrame(a);
                e += ULSGetFunction(a, c, b) + "\n";
                a = a.caller;
                c++
            }
        }
    } catch (f) {}
    return e
}

function ULSGetClientInfo() {
    var a = "";
    try {
        var b = navigator.browserLanguage;
        if (!Boolean(b)) b = navigator.language;
        if (!Boolean(b)) b = navigator.systemLanguage;
        var c = navigator.userAgent.toLowerCase(),
            e = navigator.appName,
            d = parseFloat(navigator.appVersion);
        if (c.indexOf("msie ") != -1) d = parseFloat(c.substring(c.indexOf("msie ") + 5));
        if (c.indexOf("firefox/") != -1) {
            e = "Firefox";
            d = parseFloat(c.substring(c.indexOf("firefox/") + 8))
        }
        a += '<browser name="' + ULSEncodeXML(e) + '" version="' + ULSEncodeXML(d.toString()) + '" />\n';
        a += "<useragent>" + ULSEncodeXML(navigator.userAgent) + "</useragent>\n";
        if (Boolean(b)) a += "<language>" + ULSEncodeXML(b) + "</language>\n";
        if (Boolean(document.referrer)) {
            var g = ULSStripPII(document.referrer);
            a += "<referrer>" + ULSEncodeXML(g) + "</referrer>\n"
        }
        if (Boolean(window.location)) {
            var f = ULSStripPII(window.location.toString());
            a += "<location>" + ULSEncodeXML(f) + "</location>\n"
        }
        if (Boolean(ULS.Correlation)) a += "<correlation>" + ULSEncodeXML(ULS.Correlation) + "</correlation>\n"
    } catch (h) {}
    return a
}

function ULSHandleWebServiceResponse() {
    var a = ULS.request;
    a.readyState == 4 && a.status == 200 && ULSFinishErrorHandling();
    (a.readyState == 0 || a.readyState == 4) && a.status > 200 && ULSFinishErrorHandling()
}

function ULSFinishErrorHandling() {
    ULS.message = null
}

function ULSGetWebServiceUrl() {
    var a = "",
        b = document.URL.indexOf("://");
    if (b > 0) {
        var c = document.URL.indexOf("/", b + 3);
        if (c > 0) a = document.URL.substring(0, c);
        else a = document.URL
    }
    if (a.charAt(a.length - 1) != "/") a += "/";
    a += "_vti_bin/diagnostics.asmx";
    return a
}

function ULSUploadReport(c, b, a) {
    if (Boolean(ULS) && ULS.enable) {
        ULS.message = c;
        if (a.indexOf("?") != -1) a = a.substr(0, a.indexOf("?"));
        ULS.file = a.substr(a.lastIndexOf("/") + 1);
        ULS.line = 0;
        ULS.WebServiceNS = "http://schemas.microsoft.com/sharepoint/diagnostics/";
        ULS.Correlation = b;
        ULS.teamName = "";
        ULS.originalFile = "";
        ULS.callStack = "";
        ULS.clientInfo = "<client>\n" + ULSGetClientInfo() + "</client>";
        ULSSendReport(false)
    }
}

function ULSSendReport(a) {
    ULS.request = new XMLHttpRequest;
    ULS.request.onreadystatechange = ULSHandleWebServiceResponse;
    ULS.request.open("POST", ULSGetWebServiceUrl(), a);
    ULS.request.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
    ULS.request.setRequestHeader("SOAPAction", ULS.WebServiceNS + "SendClientScriptErrorReport");
    ULS.request.send('<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><SendClientScriptErrorReport xmlns="' + ULS.WebServiceNS + '"><message>' + ULSEncodeXML(ULS.message) + "</message><file>" + ULSEncodeXML(ULS.file) + "</file><line>" + String(ULS.line) + "</line><stack>" + ULSEncodeXML(ULS.callStack) + "</stack><client>" + ULSEncodeXML(ULS.clientInfo) + "</client><team>" + ULSEncodeXML(ULS.teamName) + "</team><originalFile>" + ULSEncodeXML(ULS.originalFile) + "</originalFile></SendClientScriptErrorReport></soap:Body></soap:Envelope>")
}

function ULSSendExceptionImpl(c, a, b, d) {
    if (Boolean(ULS) && ULS.enable) {
        ULS.enable = false;
        window.onerror = ULS.OriginalOnError;
        ULS.WebServiceNS = "http://schemas.microsoft.com/sharepoint/diagnostics/";
        try {
            ULS.message = c;
            if (a.indexOf("?") != -1) a = a.substr(0, a.indexOf("?"));
            ULS.file = a.substr(a.lastIndexOf("/") + 1);
            ULS.line = b;
            ULS.teamName = "";
            ULS.originalFile = "";
            ULS.callStack = "<stack>\n" + ULSGetCallstack(d) + "</stack>";
            ULS.clientInfo = "<client>\n" + ULSGetClientInfo() + "</client>";
            ULSSendReport(true)
        } catch (e) {}
    }
    return Boolean(ULS) && Boolean(ULS.OriginalOnError) ? ULS.OriginalOnError(c, a, String(b)) : false
}

function ULSOnError(b, c, a) {
    return ULSSendExceptionImpl(b, c, a, ULSOnError.caller)
}

function ULSSendException(b) {
    var a = b.message;
    if (typeof a == "undefined") a = b.toString();
    ULSSendExceptionImpl(a, location.href, 0, ULSSendException.caller)
}
var ULSCat;

function GetXMLHttpRequestObject() {
    return new XMLHttpRequest
}

function insertAdjacentElement(a, c, b) {
    if (typeof a.insertAdjacentElement != "undefined" && Boolean(a.insertAdjacentElement)) return a.insertAdjacentElement(c, b);
    switch (c) {
        case "beforeBegin":
            return a.parentNode.insertBefore(b, a);
        case "afterBegin":
            return a.insertBefore(b, a.firstChild);
        case "beforeEnd":
            return a.appendChild(b);
        case "afterEnd":
            return Boolean(a.nextSibling) ? a.parentNode.insertBefore(b, a.nextSibling) : a.parentNode.appendChild(b)
    }
    return null
}

function insertAdjacentHTML(a, d, c) {
    if (typeof a.insertAdjacentHTML != "undefined" && Boolean(a.insertAdjacentHTML)) return a.insertAdjacentHTML(d, c);
    if (typeof a.ownerDocument.createRange != "undefined") {
        var b = a.ownerDocument.createRange();
        if (typeof b.setStartBefore != "undefined" && typeof b.createContextualFragment != "undefined") {
            b.setStartBefore(a);
            var e = b.createContextualFragment(c);
            return insertAdjacentElement(a, d, e)
        }
    }
    return null
}

function insertAdjacentText(a, c, b) {
    if (typeof a.insertAdjacentText != "undefined" && Boolean(a.insertAdjacentText)) return a.insertAdjacentText(c, b);
    var d = document.createTextNode(b);
    return insertAdjacentElement(a, c, d)
}

function contains(c, a) {
    var b = false;
    do {
        b = c == a;
        if (b) break;
        a = a.parentNode
    } while (a != null);
    return b
}

function getFirstElementByName(b, a) {
    return getFirstElementByProperty(b, "name", a)
}

function getFirstElementByProperty(d, c, b) {
    if (c == null || b == null || c == "" || b == "") return null;
    if (d[c] == b) return d;
    var a = d.firstChild;
    while (Boolean(a) && typeof a != "undefined") {
        var e = getFirstElementByProperty(a, c, b);
        if (Boolean(e)) return e;
        a = a.nextSibling
    }
    return null
}

function documentGetElementsByName(b) {
    if (!BrowserDetection.userAgent.ie && Boolean(document.getElementsByName)) return document.getElementsByName(b);
    for (var d = [], e = document.getElementsByTagName("*"), f = e.length, c = 0; c < f; c++) {
        var a = e[c];
        (a.name == b || typeof a.getAttribute != "unknown" && Boolean(a.getAttribute) && a.getAttribute("name") == b) && d.push(a)
    }
    return d
}

function getFirstChild(b) {
    var a = b.firstChild;
    while (Boolean(a) && a.nodeType == 3) a = a.nextSibling;
    return a
}

function byid(a) {
    return document.getElementById(a)
}

function newE(a) {
    return document.createElement(a)
}

function wpf() {
    return typeof window.MSOWebPartPageFormName != "undefined" ? document.forms[window.MSOWebPartPageFormName] : null
}

function startReplacement() {}

function AttachEvent(a, c, b) {
    if (!b) b = window;
    if (a == "domLoad") a = typeof b.addEventListener != "undefined" && b.addEventListener && BrowserDetection.userAgent.nav ? "DOMContentLoaded" : "load";
    else if (a != "undefined" && a != null && a.indexOf("touch") == 0 && BrowserDetection.userAgent.msTouch) switch (a) {
        case "touchstart":
            a = "MSPointerDown";
            break;
        case "touchmove":
            a = "MSPointerMove";
            break;
        case "touchend":
            a = "MSPointerUp"
    }
    if (typeof c == "string") c = new Function(c);
    if (typeof b.addEventListener != "undefined" && b.addEventListener) b.addEventListener(a, c, false);
    else typeof b.attachEvent != "undefined" && b.attachEvent("on" + a, c)
}

function DetachEvent(c, b, a) {
    if (!a) a = window;
    if (c == "domLoad") c = typeof a.removeEventListener != "undefined" && a.removeEventListener && BrowserDetection.userAgent.nav ? "DOMContentLoaded" : "load";
    if (typeof b == "string") b = new Function(b);
    if (typeof a.removeEventListener != "undefined" && a.removeEventListener) a.removeEventListener(c, b, false);
    else typeof a.detachEvent != "undefined" && a.detachEvent("on" + c, b)
}

function GetEventKeyCode(a) {
    return BrowserDetection.userAgent.nav ? a.which : a.keyCode
}
var g_cde;

function GetCachedElement(b) {
    var a = null;
    if (!Boolean(a = g_cde[b])) {
        a = document.getElementById(b);
        g_cde[b] = a
    }
    return a
}

function $dg(a) {
    if (!(a in window)) window[a] = undefined
}

function SelectRibbonTab(b, c) {
    var a;
    try {
        a = SP.Ribbon.PageManager.get_instance().get_ribbon()
    } catch (d) {}
    if (!Boolean(a)) typeof _ribbonStartInit != "undefined" && _ribbonStartInit(b, false, null);
    else(c || a.get_selectedTabId() == "Ribbon.Read") && a.selectTabById(b)
}

function FV4UI() {
    return typeof _fV4UI != "undefined" && _fV4UI
}

function EEDecodeSpecialChars(b) {
    var a = b.replace(/&quot;/g, '"');
    a = a.replace(/&gt;/g, ">");
    a = a.replace(/&lt;/g, "<");
    a = a.replace(/&#39;/g, "'");
    a = a.replace(/&amp;/g, "&");
    return a
}

function SP_JSONParse(f) {
    var a = false,
        d = JSON.parse(f, b);
    a && c(d, b);
    return d;

    function c(a, d) {
        if (a !== null && typeof a === "object")
            for (var b in a)
                if (a.hasOwnProperty(b)) {
                    c(a[b], d);
                    a[b] = d(b, a[b])
                }
    }

    function b(d, a) {
        e(d, a);
        if (typeof a === "string") {
            var b = /^\/Date\((-?\d+\))\/$/g.exec(a);
            if (b !== null) {
                var c = parseInt(b[1]);
                return new Date(c)
            }
        }
        return a
    }

    function e(c, b) {
        a = a || b === void 0 && /^\d+$/.test(c)
    }
}

function DeferCall() {
    if (arguments.length == 0) return null;
    var args = arguments,
        fn = null;
    if (browseris.ie5up || browseris.nav6up) eval("if (typeof(" + args[0] + ") == 'function') { fn = " + args[0] + "; }");
    if (fn == null) return null;
    if (args.length == 1) return fn();
    else if (args.length == 2) return fn(args[1]);
    else if (args.length == 3) return fn(args[1], args[2]);
    else if (args.length == 4) return fn(args[1], args[2], args[3]);
    else if (args.length == 5) return fn(args[1], args[2], args[3], args[4]);
    else if (args.length == 6) return fn(args[1], args[2], args[3], args[4], args[5]);
    else if (args.length == 7) return fn(args[1], args[2], args[3], args[4], args[5], args[6]);
    else if (args.length == 8) return fn(args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
    else if (args.length == 9) return fn(args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8]);
    else if (args.length == 10) return fn(args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8], args[9]);
    else alert(Strings.STS.L_TooManyDefers_Text);
    return null
}

function CollectRUMNonMDS() {
    var a = function() {
            var a = GetRUMWSA();
            if (IsNullOrUndefined(a)) return;
            a.CollectRUMDataForNonMDS()
        },
        b = _v_dictSod["sp.core.js"];
    if (IsNullOrUndefined(b)) return;
    EnsureScriptFunc("SP.core.js", "SP.RUMLogger", a);
    EnsureScriptFunc("sp.core.js", "SP.SlapiInternal", function() {
        var b = IsNullOrUndefined(PerformanceLogger) ? null : PerformanceLogger.GetLogger();
        if (!IsNullOrUndefined(b)) {
            b.CollectW3CPerfTimings();
            var a = 0;
            if (SP.ScriptUtility.isNullOrEmptyString(document.referrer)) a = SP.PageTransitionType.nonMdsToNonMds;
            else if (document.referrer.indexOf("/start.aspx") !== -1) a = SP.PageTransitionType.mdsToNonMds;
            else a = SP.PageTransitionType.nonMdsToNonMds;
            b.WritePageTransitionType(a);
            typeof g_duration != "undefined" && typeof g_iisLatency != "undefined" && b.WriteServerSideLatency(g_duration, g_iisLatency)
        }
    })
}
var LegalUrlChars;

function AdmBuildParam(b) {
    for (var c, a = 1; a < arguments.length; a++) {
        c = new RegExp("\\^" + String(a));
        b = b.replace(c, arguments[a])
    }
    return b
}

function IndexOfIllegalCharInUrlLeafName(b) {
    for (var a = 0; a < b.length; a++) {
        var c = b.charCodeAt(a);
        if (b.charAt(a) == "." && a == b.length - 1) return a;
        if (c < 160 && (b.charAt(a) == "/" || !LegalUrlChars[c])) return a
    }
    return -1
}

function IndexOfIllegalCharInUrlPath(b) {
    for (var a = 0; a < b.length; a++) {
        var c = b.charCodeAt(a);
        if (c < 160 && !LegalUrlChars[c]) return a
    }
    return -1
}

function UrlContainsIllegalStrings(a) {
    return a.indexOf("//") >= 0 || a.indexOf("./") >= 0 || a.lastIndexOf(".") == a.length - 1 ? true : false
}

function UrlLeafNameValidate(a, b) {
    var c = "";
    if (typeof a.MessagePrefix == "string") c = a.MessagePrefix;
    else c = a.id;
    var d = IndexOfIllegalCharInUrlLeafName(b.Value);
    if (d >= 0) {
        if (typeof a.errormessage == "string") a.errormessage = AdmBuildParam(Strings.STS.L_ContainIllegalChar_Text, c, b.Value.charAt(d));
        b.IsValid = false
    } else if (UrlContainsIllegalStrings(b.Value)) {
        if (typeof a.errormessage == "string") a.errormessage = AdmBuildParam(Strings.STS.L_ContainIllegalString_Text, c);
        b.IsValid = false
    } else b.IsValid = true
}

function UrlPathValidate(a, b) {
    var c = "";
    if (typeof a.MessagePrefix == "string") c = a.MessagePrefix;
    else c = a.id;
    var d = IndexOfIllegalCharInUrlPath(b.Value);
    if (d >= 0) {
        if (typeof a.errormessage == "string") a.errormessage = AdmBuildParam(Strings.STS.L_ContainIllegalChar_Text, c, b.Value.charAt(d));
        b.IsValid = false
    } else if (UrlContainsIllegalStrings(b.Value)) {
        if (typeof a.errormessage == "string") a.errormessage = AdmBuildParam(Strings.STS.L_ContainIllegalString_Text, c);
        b.IsValid = false
    } else b.IsValid = true
}

function IsCheckBoxListSelected(a) {
    if (a == null) return false;
    var c = a.length;
    if (c == null) return a.checked;
    else
        for (var b = 0; b < c; b++) {
            var d = a[b];
            if (d.checked) return true
        }
    return false
}

function STSValidatorEnable(d, b, c) {
    var a = document.getElementById(d);
    if (a == null) return;
    if (c || Boolean(a.getAttribute("AlwaysEnableSilent"))) a.enabled = b == true;
    else typeof ValidatorEnable == "function" && ValidatorEnable(a, b)
}
var recycleBinEnabled, cascadeDeleteWarningMessage, bIsFileDialogView, g_ViewIdToViewCounterMap, g_ctxDict;

function NotifyBrowserOfAsyncUpdate() {
    var b = "__spAjaxIframe",
        a = document.getElementById(b);
    if (a == null) {
        a = document.createElement("IFRAME");
        a.name = a.id = b;
        a.width = a.height = "0";
        a.src = "about:blank";
        a.style.display = "none";
        document.body.appendChild(a)
    }
    a.contentWindow.location.replace("/_layouts/15/images/blank.gif")
}

function IsSafeHrefAlert(a, b) {
    if (a.match(new RegExp("^[^?]{257}")) != null) {
        alert(Strings.STS.L_UrlTooLongError_Text);
        return false
    } else if (IsSafeHref(a)) return true;
    else if (a.match(new RegExp("^[a-zA-Z]*:")) != null) {
        alert(Strings.STS.L_UnknownProtocolUrlError_Text);
        return false
    } else if (true == b) return true;
    else {
        alert(Strings.STS.L_UnknownProtocolUrlError_Text);
        return false
    }
}

function UpdateAccessibilityUI() {
    var a = document.getElementById("TurnOnAccessibility"),
        b = document.getElementById("TurnOffAccessibility");
    if (IsAccessibilityFeatureEnabled()) {
        if (a != null) a.style.display = "none";
        if (b != null) b.style.display = ""
    } else {
        if (a != null) a.style.display = "";
        if (b != null) b.style.display = "none"
    }
}

function SetIsAccessibilityFeatureEnabled(c) {
    if (c) document.cookie = "WSS_AccessibilityFeature=true;path=/;";
    else document.cookie = "WSS_AccessibilityFeature=false;path=/;";
    var a = document.getElementById("HiddenAnchor"),
        b;
    if (browseris.ie) b = {
        srcElement: a,
        fakeEvent: 1,
        enableStatus: c
    };
    else b = {
        target: a,
        fakeEvent: 1,
        enableStatus: c
    };
    if (a == null || typeof a.onclick == "undefined" || a.onclick == null) return;
    a.onclick(b)
}

function DeleteCookie(a) {
    document.cookie = a + "=; expires=Thu, 01-Jan-70 00:00:01 GMT"
}

function GetCookie(a) {
    return GetCookieEx(a, window)
}

function GetCookieEx(e, f) {
    for (var c = f.document.cookie.split("; "), b = 0; b < c.length; b++) {
        var d = c[b],
            a = d.split("=");
        if (e == a[0]) return a.length > 1 ? unescapeProperly(a[1]) : null
    }
    return null
}

function SetCookie(a, b) {
    SetCookieEx(a, b, false, window)
}

function SetCookieEx(b, c, a, d) {
    var e = b + (c ? "=true" : "=false"),
        f = a ? ";path=/" : "";
    d.document.cookie = e + f
}

function IsAccessibilityFeatureEnabled() {
    return GetCookie("WSS_AccessibilityFeature") == "true"
}

function escapeForSync(e) {
    for (var b = "", d = 0, c = false, g = "\\&|[]", d = 0; d < e.length; d++) {
        var a = e.charCodeAt(d),
            f = e.charAt(d);
        if (c && a <= 127) {
            b += "]";
            c = false
        }
        if (!c && a > 127) {
            b += "[";
            c = true
        }
        if (g.indexOf(f) >= 0) b += "|";
        if (a >= 97 && a <= 122 || a >= 65 && a <= 90 || a >= 48 && a <= 57) b += f;
        else if (a <= 15) b += "%0" + a.toString(16).toUpperCase();
        else if (a <= 127) b += "%" + a.toString(16).toUpperCase();
        else if (a <= 255) b += "00" + a.toString(16).toUpperCase();
        else if (a <= 4095) b += "0" + a.toString(16).toUpperCase();
        else b += a.toString(16).toUpperCase()
    }
    if (c) b += "]";
    return b
}

function navigateMailToLink(a) {
    window.location.href = "mailto:?body=" + escapeProperly(a)
}

function navigateMailToLinkWithMessage(b, a) {
    window.location.href = "mailto:" + escapeProperly(b) + "?body=" + escapeProperly(escapeProperlyCoreCore(a, false, false, true))
}

function newBlogPostOnClient(b, d, c) {
    var a, e;
    a = StsOpenEnsureEx2("SharePoint.OpenDocuments.3");
    if (a == null) {
        alert(Strings.STS.L_NewBlogPost_Text);
        return
    }
    try {
        if (typeof a.NewBlogPost != "undefined") e = a.NewBlogPost(b, d, c)
    } catch (f) {
        alert(Strings.STS.L_NewBlogPostFailed_Text)
    }
}

function GetUrlFromWebUrlAndWebRelativeUrl(b, c) {
    var a = b == null || b.length <= 0 ? "/" : b;
    if (a.charAt(a.length - 1) != "/") a += "/";
    a += c;
    return a
}

function UpdateFormDigest(g, j) {
    try {
        var d = window._spPageContextInfo;
        if (d == null || d.updateFormDigestPageLoaded == null) return;
        var l = new Date;
        if (l.getTime() - d.updateFormDigestPageLoaded.getTime() < j) return;
        if (g == null || g.length <= 0) return;
        var a = document.getElementsByName("__REQUESTDIGEST")[0];
        if (a == null || a.tagName.toLowerCase() != "input" || a.type.toLowerCase() != "hidden" || a.value == null || a.value.length <= 0) return;
        var b = new XMLHttpRequest;
        if (b == null) return;
        b.open("POST", GetUrlFromWebUrlAndWebRelativeUrl(g, "_vti_bin/sites.asmx"), false);
        b.setRequestHeader("Content-Type", "text/xml");
        b.setRequestHeader("SOAPAction", "http://schemas.microsoft.com/sharepoint/soap/GetUpdatedFormDigest");
        b.send('<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">  <soap:Body>    <GetUpdatedFormDigest xmlns="http://schemas.microsoft.com/sharepoint/soap/" />  </soap:Body></soap:Envelope>');
        var c = b.responseText;
        if (c == null || c.length <= 0) return;
        var h = "<GetUpdatedFormDigestResult>",
            k = "</GetUpdatedFormDigestResult>",
            f = c.indexOf(h),
            i = c.indexOf(k, f + h.length),
            e = null;
        if (f >= 0 && i > f) e = c.substring(f + h.length, i);
        if (e == null || e.length <= 0) return;
        var m = a.value;
        a.value = e;
        d.updateFormDigestPageLoaded = new Date
    } catch (n) {}
}

function IsSupportedFirefoxOnWin() {
    return browseris.win && browseris.firefox3up
}

function IsSupportedChromeOnWin() {
    return browseris.win && browseris.chrome
}

function IsSupportedNPApiBrowserOnWin() {
    return IsSupportedChromeOnWin() || IsSupportedFirefoxOnWin()
}

function IsNPAPIOnWinPluginInstalled(a) {
    return Boolean(navigator.mimeTypes) && navigator.mimeTypes[a] && navigator.mimeTypes[a].enabledPlugin
}

function CreateNPApiOnWindowsPlugin(b) {
    var c = null;
    if (IsSupportedNPApiBrowserOnWin()) try {
        c = document.getElementById(b);
        if (!Boolean(c) && IsNPAPIOnWinPluginInstalled(b)) {
            var a = document.createElement("object");
            a.id = b;
            a.type = b;
            a.width = "0";
            a.height = "0";
            a.style.setProperty("visibility", "hidden", "");
            document.body.appendChild(a);
            c = document.getElementById(b)
        }
    } catch (d) {
        c = null
    }
    return c
}

function IsSupportedMacBrowser() {
    return browseris.mac && (browseris.firefox3up || browseris.safari3up || browseris.chrome)
}

function IsBrowserPluginInstalled(a) {
    var b = Boolean(navigator.mimeTypes) && navigator.mimeTypes[a];
    if (b) {
        var c = navigator.mimeTypes[a];
        return !!c.enabledPlugin
    }
    return false
}

function IsMacPluginInstalled() {
    var a = IsBrowserPluginInstalled("application/x-sharepoint-webkit"),
        b = IsBrowserPluginInstalled("application/x-sharepoint");
    return browseris.safari3up && a ? true : b
}

function CreateMacPlugin() {
    var b = null;
    if (IsSupportedMacBrowser() && !browseris.chrome) {
        b = document.getElementById("macSharePointPlugin");
        if (b == null && IsMacPluginInstalled()) {
            var c = null;
            if (browseris.safari3up && IsBrowserPluginInstalled("application/x-sharepoint-webkit")) c = "application/x-sharepoint-webkit";
            else c = "application/x-sharepoint";
            var a = document.createElement("object");
            a.id = "macSharePointPlugin";
            a.type = c;
            a.width = "0";
            a.height = "0";
            a.style.visibility = "hidden";
            document.body.appendChild(a);
            b = document.getElementById("macSharePointPlugin")
        }
    }
    return b
}
var g_objStssync;

function GetStssyncHandler(a) {
    if (!IsSupportedMacBrowser()) try {
        g_objStssync = new ActiveXObject("SharePoint.StssyncHandler" + a)
    } catch (b) {
        g_objStssync = null
    } else g_objStssync = CreateMacPlugin()
}

function GetStssyncData(d, g, e, h) {
    var a = null;
    if (document.cookie.indexOf("stsSyncAppName") == -1 && document.cookie.indexOf("stsSyncIconPath") == -1) {
        if (IsSupportedMacBrowser()) {
            var f = GetStssyncHandler("");
            if (f == null || typeof f.StssyncEnabled == "undefined" || !f.StssyncEnabled) {
                document.cookie = "stsSyncAppName=0;";
                document.cookie = "stsSyncIconPath=0;";
                return a
            }
        }
        if (browseris.ie5up && browseris.win32 || IsSupportedMacBrowser()) {
            var b, c;
            try {
                d != "" && GetStssyncHandler(".3");
                if (!g_objStssync) {
                    if (d != "" && d != "calendar" && d != "contacts") {
                        document.cookie = "stsSyncAppName=0;";
                        document.cookie = "stsSyncIconPath=0;";
                        return a
                    }
                    GetStssyncHandler(".2");
                    if (!g_objStssync || typeof g_objStssync.GetStssyncAppName == "undefined" || !Boolean(b = g_objStssync.GetStssyncAppName())) {
                        document.cookie = "stsSyncAppName=0;";
                        document.cookie = "stsSyncIconPath=0;";
                        return a
                    }
                } else if (typeof g_objStssync.GetStssyncAppNameForType == "undefined" || !Boolean(b = g_objStssync.GetStssyncAppNameForType(d))) {
                    document.cookie = "stsSyncAppName=0;";
                    document.cookie = "stsSyncIconPath=0;";
                    return a
                }
            } catch (i) {
                SP.DebugLogger.Write("FailureGetStssync", SP.DebugLogger.LoggingLevel.Interesting, "Failed to access stssync ActiveX");
                document.cookie = "stsSyncAppName=0;";
                document.cookie = "stsSyncIconPath=0;";
                return a
            }
            document.cookie = "stsSyncAppName=" + escapeProperly(b) + ";";
            try {
                if (typeof g_objStssync.GetStssyncIconName == "undefined") throw 0;
                c = g_objStssync.GetStssyncIconName();
                c = h + c;
                document.cookie = "stsSyncIconPath=" + escapeProperly(c) + ";"
            } catch (i) {
                document.cookie = "stsSyncIconPath=0;";
                c = e
            }
        } else {
            b = g;
            c = e;
            document.cookie = "stsSyncAppName=" + escapeProperly(g);
            document.cookie = "stsSyncIconPath=" + escapeProperly(e)
        }
    } else {
        b = GetCookie("stsSyncAppName");
        c = GetCookie("stsSyncIconPath");
        if (b == "0") return a
    }
    b = Strings.STS.L_LinkToBefore_Text + b;
    a = {};
    a.BtnText = b;
    a.BtnImagePath = c;
    return a
}

function GetStssyncAppName(b) {
    var a = GetStssyncData("", b, "", "");
    return a.BtnText
}

function makeAbsUrl(a) {
    if (a.length > 0 && "/" == a.substr(0, 1)) a = window.location.protocol + "//" + window.location.host + a;
    return a
}

function ExportHailStorm(o, k, n, c, b, m, q, l, i, j) {
    var h = GetCookie("stsSyncAppName"),
        p = GetCookie("stsSyncIconPath");
    if (h != null && h != "0") {
        var g = 500,
            a = 20,
            d = "stssync://sts/?ver=1.1&type=" + escapeProperly(o) + "&cmd=add-folder&base-url=" + escapeForSync(k) + "&list-url=" + escapeForSync("/" + makeAbsUrl(m).substr(k.length + 1) + "/") + "&guid=" + escapeProperly(n);
        if (typeof offlineBtnUser != "undefined") d += "&user-id=" + offlineBtnUser;
        var f = "&site-name=" + escapeForSync(c) + "&list-name=" + escapeForSync(b),
            e = "";
        if (Boolean(i)) e += "&folder-url=" + escapeForSync("/" + i.substr(l.length + 1));
        if (Boolean(j)) e += "&folder-id=" + j;
        if (d.length + f.length + e.length > g && (c.length > a || b.length > a)) {
            if (c.length > a) c = c.substring(0, a - 1) + "...";
            if (b.length > a) b = b.substring(0, a - 1) + "...";
            f = "&site-name=" + escapeForSync(c) + "&list-name=" + escapeForSync(b)
        }
        d = d + f + e;
        if (d.length > g) alert(Strings.STS.L_StssyncTooLong_Text);
        else try {
            window.location.href = d
        } catch (r) {}
    }
}
var g_objDiagramLaunch;

function GetDiagramLaunchInstalled() {
    var a = "";
    if (document.cookie.indexOf("digInstalled") == -1) try {
        g_objDiagramLaunch = new ActiveXObject("DiagramLaunch.DiagramLauncher");
        if (typeof g_objDiagramLaunch.EnsureDiagramApplication != "undefined") a = g_objDiagramLaunch.EnsureDiagramApplication();
        document.cookie = "digInstalled=" + escapeProperly(a) + ";"
    } catch (b) {
        g_objDiagramLaunch = null;
        document.cookie = "digInstalled=0;"
    } else {
        a = GetCookie("digInstalled");
        if (a == "0") a = ""
    }
    return a
}
var g_objProjectTaskLaunch;

function GetProjectTaskLaunchInstalled() {
    if (document.cookie.indexOf("projInstalled") == -1) {
        var a = "";
        try {
            g_objProjectTaskLaunch = new ActiveXObject("WinProj.Activator");
            if (typeof g_objProjectTaskLaunch.EnsureTaskApplication != "undefined") a = g_objProjectTaskLaunch.EnsureTaskApplication();
            document.cookie = "projInstalled=" + escapeProperly(a) + ";"
        } catch (b) {
            document.cookie = "projInstalled=0;";
            g_objProjectTaskLaunch = null
        }
    } else {
        a = GetCookie("projInstalled");
        if (a == "0") a = ""
    }
    return a
}
var g_expDatabase;

function GetDataBaseInstalled() {
    var a = "",
        c = "";
    if (document.cookie.indexOf("databaseBtnText") == -1 || document.cookie.indexOf("databaseBtnDesc") == -1) try {
        g_expDatabase = new ActiveXObject("SharePoint.ExportDatabase");
        if (Boolean(g_expDatabase) && typeof g_expDatabase.IsDBProgramInstalled != "undefined" && g_expDatabase.IsDBProgramInstalled()) {
            if (typeof g_expDatabase.MenuTitle != "undefined") document.cookie = "databaseBtnText=" + escapeProperly(g_expDatabase.MenuTitle) + ";";
            if (typeof g_expDatabase.MenuDescription != "undefined") document.cookie = "databaseBtnDesc=" + escapeProperly(g_expDatabase.MenuDescription) + ";"
        } else {
            document.cookie = "databaseBtnText=0;";
            document.cookie = "databaseBtnDesc=0;";
            g_expDatabase = null
        }
    } catch (d) {
        document.cookie = "databaseBtnText=0;";
        document.cookie = "databaseBtnDesc=0;";
        g_expDatabase = null
    } else {
        a = GetCookie("databaseBtnText");
        c = GetCookie("databaseBtnDesc");
        if (a != "0" && a != "0") {
            var b = {};
            b.MenuTitle = a;
            b.MenuDescription = c;
            return b
        } else g_expDatabase = null
    }
    return g_expDatabase
}
var g_ssImporterObj, g_fSSImporter;

function EnsureSSImportInner() {
    if (browseris.ie5up && browseris.win32) try {
        g_ssImporterObj = new ActiveXObject("SharePoint.SpreadsheetLauncher.2");
        if (g_ssImporterObj) g_fSSImporter = true
    } catch (a) {
        try {
            g_ssImporterObj = new ActiveXObject("SharePoint.SpreadsheetLauncher.1");
            if (g_ssImporterObj) g_fSSImporter = true
        } catch (a) {
            g_fSSImporter = false
        }
    } else if (IsSupportedMacBrowser()) {
        g_ssImporterObj = CreateMacPlugin();
        if (g_ssImporterObj) g_fSSImporter = true;
        else g_fSSImporter = false
    }
}

function EnsureSSImporter(a) {
    a = typeof a == undefined ? false : a;
    if (document.cookie.indexOf("EnsureSSImporter") == -1 || a) {
        EnsureSSImportInner();
        document.cookie = "EnsureSSImporter=" + String(g_fSSImporter) + ";"
    } else g_fSSImporter = GetCookie("EnsureSSImporter") == "true" ? true : false;
    return g_fSSImporter
}

function GetThemedImageUrl(a) {
    return GetThemedImageUrl_Core(a, "/_layouts/15/images/")
}

function GetThemedLocalizedImageUrl(b) {
    var a = "/_layouts/15/" + Strings.STS.L_Language_Text + "/images/";
    return GetThemedImageUrl_Core(b, a)
}

function GetThemedImageUrl_Core(g, i) {
    var a, h = i + g,
        f = SPThemeUtils.UseClientSideTheming(),
        d = window._spPageContextInfo;
    if (d != null && !f) {
        var c = d.themedCssFolderUrl,
            e = d.themedImageFileNames,
            b = null;
        if (e != null) b = e[g];
        if (c != null && c.length > 0 && b != null) h = c + "/" + b
    }
    a = GetImageUrlWithRevision(h);
    if (f) {
        Theming.GetPageManager().RegisterAllImages();
        a += "#ThemeKey=";
        a = Theming.GetPageManager().GetThemedImageSrc(a)
    }
    return a
}

function GetImageUrlWithRevision(a) {
    return a.search(/[?]/) > -1 ? a : a + "?rev=44"
}

function ShowHideSection(c, d) {
    var a = document.getElementById(c),
        b = document.getElementById(d);
    if (a == null) return;
    if (a.style.display != "none") {
        a.style.display = "none";
        b.src = GetThemedImageUrl("commentexpand12.png")
    } else {
        a.style.display = "";
        b.src = GetThemedImageUrl("commentcollapse12.png")
    }
}

function ShowSection(b, c) {
    var a = document.getElementById(b),
        d = document.getElementById(c);
    if (a == null) return;
    if (a.style.display == "none") {
        a.style.display = "";
        d.src = GetThemedImageUrl("commentcollapse12.png")
    }
}

function ShowHideInputFormSection(c, d) {
    var a = document.getElementById(c);
    if (a != null) a.style.display = d ? "" : "none";
    for (var b = 1; b < 3; b++) {
        a = document.getElementById(c + "_tablerow" + String(b));
        if (a != null) a.style.display = d ? "" : "none"
    }
}

function ShowHideInputFormControl(id, bHide, bDisableValidators, bSilent) {
    var displaySetting = "";
    if (bHide == true) displaySetting = "none";
    var validators = eval(id + "_validators"),
        i = 0;
    if (validators != null)
        for (i = 0; i < validators.length; i++) STSValidatorEnable(validators[i], !bDisableValidators, bSilent);
    for (i = 1; i <= 5; i++) {
        var rowId = id + "_tablerow" + String(i),
            row = document.getElementById(rowId);
        if (row != null && !browseris.mac) row.style.display = displaySetting
    }
}

function HideMenuControl(menuControlId) {
    if (typeof menuControlId == "undefined" || menuControlId == null) return;
    var menu = document.getElementById(menuControlId);
    if (typeof menu == "undefined" || menu == null) return;
    var menuItems = menu.getElementsByTagName("ie:menuitem");
    if (typeof menuItems == "undefined" || menuItems == null) return;
    for (var i = 0; i < menuItems.length; i++) {
        var menuItem = menuItems[i],
            hiddenScript = menuItem.getAttribute("hidden");
        if (typeof hiddenScript == "undefined" || hiddenScript == null || !eval(hiddenScript)) return
    }
    menu.style.display = "none"
}

function SetControlDisabledStatus(a, b) {
    try {
        Boolean(a.setAttribute) && a.setAttribute("disabled", String(b));
        !b && Boolean(a.removeAttribute) && a.removeAttribute("disabled")
    } catch (c) {}
}

function SetControlDisabledStatusRecursively(a, c) {
    if (a == null) return;
    SetControlDisabledStatus(a, c);
    for (var d = a.childNodes, b = 0; d.length > b; b++) SetControlDisabledStatusRecursively(d[b], c)
}

function SetChildControlsDisabledStatus(d, c) {
    for (var b = d.childNodes, a = 0; a < b.length; a++) SetControlDisabledStatusRecursively(b[a], c)
}
var g_PNGImageIds, g_PNGImageSources;

function displayPNGImage(e, d, b, a, f) {
    if (g_PNGImageIds == null) g_PNGImageIds = [];
    if (g_PNGImageSources == null) g_PNGImageSources = [];
    var c = null;
    document.write("<IMG id='" + e + "' ");
    Boolean(b) && b > 0 && document.write("width='" + String(b) + "' ");
    Boolean(a) && a > 0 && document.write("height='" + String(a) + "' ");
    document.write("alt='" + f + "' ");
    Boolean(c) && document.write("style='" + c + "' ");
    document.write(" src='" + d + "' />");
    g_PNGImageIds.push(e);
    g_PNGImageSources.push(d)
}

function ProcessPNGImages() {
    var c = browseris.ie && browseris.ie55up && browseris.verIEFull < 7;
    if (g_PNGImageIds != null && c)
        for (var a = 0; a < g_PNGImageIds.length; a++) {
            var b = document.getElementById(g_PNGImageIds[a]);
            if (b != null && g_PNGImageSources[a] != null) {
                b.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + g_PNGImageSources[a] + "),sizingMethod=scale);";
                b.src = "/_layouts/15/images/blank.gif?rev=44"
            }
        }
}

function CtxSetIsWebEditorPreview(a) {
    ctx.isWebEditorPreview = a
}

function CtxSetCurrentUserId(a) {
    ctx.CurrentUserId = a
}

function CtxSetIsForceCheckout(a) {
    ctx.isForceCheckout = a
}

function LoginAsAnother(a, b) {
    document.cookie = "loginAsDifferentAttemptCount=0";
    if (b == "1") GoToPage(a);
    else {
        var c = a.indexOf("?") >= 0 ? "&" : "?";
        a += c + "Source=" + escapeProperly(window.location.href);
        Nav.navigate(a)
    }
}

function CLVPFromEvent(a) {
    return DeferCall("CLVPFromEventReal", a)
}

function STSNavigateToView(b, a) {
    Nav.navigate(a)
}

function STSNavigate2(b, a) {
    Nav.navigate(a)
}

function STSNavigateTop(a) {
    var b = true;
    if (typeof window.top.SPUpdatePage !== "undefined") b = window.top.SPUpdatePage(a);
    if (b) window.top.location.href = STSPageUrlValidation(a)
}

function GoToPage(b, c) {
    var d = b.indexOf("?") >= 0 ? "&" : "?";
    if (GetUrlKeyValue("Source", true, b).length == 0) {
        var a = c ? GetUrlKeyValue("Source") : GetSource();
        if (a != null && a != "") {
            if (c) a = escapeProperly(STSPageUrlValidation(a));
            if (b.length + a.length <= 1950) b += d + "Source=" + a
        }
    }
    Nav.navigate(b)
}

function TrimSpaces(c) {
    var a, b;
    c = c.toString();
    var d = c.length;
    for (a = 0; a < d; a++)
        if (c.charAt(a) != " ") break;
    if (a == d) return "";
    for (b = d - 1; b > a; b--)
        if (c.charAt(b) != " ") break;
    b++;
    return c.substring(a, b)
}

function TrimWhiteSpaces(d) {
    var b, c;
    d = d.toString();
    var e = d.length,
        a;
    for (b = 0; b < e; b++) {
        a = d.charAt(b);
        if (a != " " && a != "\t" && a != "\n" && a != "\r" && a != "\f") break
    }
    if (b == e) return "";
    for (c = e - 1; c > b; c--) {
        a = d.charAt(c);
        if (a != " " && a != "\t" && a != "\n" && a != "\r" && a != "\f") break
    }
    c++;
    return d.substring(b, c)
}

function ShowMtgNavigatorPane() {
    document.getElementById("MeetingNavigatorPane").style.display = "block"
}

function HideMtgNavigatorPane() {
    document.getElementById("MeetingNavigatorPane").style.display = "none"
}

function HideMtgDesc() {
    document.getElementById("MeetingDescription").style.display = "none"
}

function GetMultipleUploadEnabled() {
    try {
        if (browseris.ie5up && !browseris.mac && new ActiveXObject("STSUpld.UploadCtl")) return true
    } catch (a) {}
    return false
}

function SetUploadPageTitle() {
    if (Number(GetUrlKeyValue("Type")) == 1) {
        document.title = Strings.STS.L_NewFormClickOnce1_Text;
        if (browseris.ie || browseris.nav6up) {
            var a = document.getElementById("onetidTextTitle");
            if (a != null) a.innerHTML = Strings.STS.L_NewFormClickOnce1_Text
        }
        typeof SP != "undefined" && SP != null && SP.QoS != null && SP.QoS.WriteUserEngagement("CreateFolder_Old")
    }
}

function GetSelectedValue(a) {
    if (Boolean(a) && a.selectedIndex > -1) {
        var b = a.options[a.selectedIndex];
        return b.value
    } else return ""
}

function GetSelectedText(a) {
    if (Boolean(a) && a.selectedIndex > -1) {
        var b = a.options[a.selectedIndex];
        return b.text
    } else return ""
}

function MtgShowTimeZone() {
    GetCookie("MtgTimeZone") == "1" && EnsureScriptParams("core.js", "MtgToggleTimeZone")
}

function FormatDate(a, b, d, e) {
    var c = Strings.STS.L_DateSeparator_Text;
    if (browseris.win32 && a == d) c = Strings.STS.L_DateSeparatorEx_Text;
    if (a == d) {
        document.write(Strings.STS.L_Date_Text + " " + a);
        if (b != e) document.write(" " + Strings.STS.L_TimeLong_Text + " " + b + c + e);
        else document.write(" " + Strings.STS.L_TimeLong_Text + " " + b)
    } else document.write(Strings.STS.L_TimeLong_Text + " " + a + " (" + b + ")" + c + d + " (" + e + ")")
}

function GetAlertText(c) {
    var a = c & 16 - 1,
        b = c - a;
    if (Boolean(a)) switch (a) {
            case 1:
                return typeof g_meetingCount != "undefined" && g_meetingCount == 1 ? Strings.STS.L_DETACHEDSINGLEEXCEPT_Text : Strings.STS.L_DETACHEDCANCELLEDEXCEPT_Text;
            case 2:
                return Strings.STS.L_DETACHEDCANCELLEDSERIES_Text;
            case 3:
                return Strings.STS.L_DETACHEDCANCELLEDEXCEPT_Text;
            case 4:
                return typeof g_meetingCount != "undefined" && g_meetingCount == 1 ? Strings.STS.L_DETACHEDSINGLEEXCEPT_Text : Strings.STS.L_DETACHEDUNLINKEDSINGLE_Text;
            case 5:
                return Strings.STS.L_DETACHEDUNLINKEDSERIES_Text;
            case 6:
                return Strings.STS.L_DETACHEDSERIESNOWSINGLE_Text;
            case 7:
                return Strings.STS.L_DETACHEDSINGLENOWSERIES_Text;
            case 8:
                return Strings.STS.L_DETACHEDPASTEXCPMODIFIED_Text
        } else if (Boolean(b)) switch (b) {
            case 16:
                return Strings.STS.L_DETACHEDNONGREGORIANCAL_Text
        }
        return null
}

function retrieveCurrentThemeLink() {
    for (var a, d = document.getElementsByTagName("link"), c = 0; c < d.length; c++) {
        var b = d[c];
        if (b.type == "text/css" && b.id == "onetidThemeCSS") a = b
    }
    if (Boolean(a)) {
        var g = /(\.\.\/)+/,
            e = a.href,
            f = e.replace(g, "/");
        return f
    }
    return null
}
var JSRequest, ExpGroupWPListName, ExpGroupCookiePrefix, ExpGroupCookieDelimiter, ExpGroupMaxWP, ExpGroupMaxCookieLength, g_ExpGroupCAMLQueue, g_ExpGroupXSLTQueue, g_ExpGroupInProgress, g_ExpInitializing, g_ExpGroupTable, g_ExpGroupNeedsState, g_ExpGroupParseStage;

function ExpCollGroup(c, G, z, x) {
    if (z != null) g_ExpGroupNeedsState = true;
    if (document.getElementById("titl" + c) == null) return;
    var n = document.getElementById("titl" + c).parentNode;
    if (n == null) return;
    var J = c.substr(0, c.indexOf("-")),
        b = window["ctx" + J];
    if (!Boolean(b)) return;
    !b.StateInitDone && ctxInitItemState(b);
    if (b.SelectAllCbx == null) b.SelectAllCbx = getSelectAllCbxFromTable(n);
    var v = n.getElementsByTagName("TBODY"),
        H = v.length,
        s = c.length,
        d = document.getElementById(G);
    if (d == null) return;
    var I = d.src,
        o = d.getAttribute("src"),
        k = I.lastIndexOf("/"),
        l = GetThemedImageUrl("spcommon.png"),
        C = fRightToLeft ? "ms-commentcollapsertl-icon" : "ms-commentcollapse-icon",
        B = fRightToLeft ? "ms-commentcollapsertl-iconouter" : "ms-commentcollapse-iconouter",
        r = fRightToLeft ? "ms-commentexpandrtl-icon" : "ms-commentexpand-icon",
        u = fRightToLeft ? "ms-commentexpandrtl-iconouter" : "ms-commentexpand-iconouter",
        q = "/_layouts/15/images/plus.gif",
        A = "/_layouts/15/images/minus.gif",
        e = false,
        h, p = typeof ExpFlighting != "undefined" && ExpFlighting.UseGU30();
    if (o == q || o == l && d.className == r || g_ExpInitializing) {
        e = true;
        h = "";
        if (p) d.alt = Strings.STS.L_SPCollapse;
        if (o == l) {
            d.className = C;
            d.parentNode.className = B
        } else d.src = A
    } else {
        e = false;
        h = "none";
        if (p) d.alt = Strings.STS.L_SPExpand;
        if (o == l) {
            d.className = r;
            d.parentNode.className = u
        } else d.src = q
    }
    for (var f = 0, t = 0; t < H; t++) {
        var a = v[t];
        if (a.id != null && a.id.length > s + 4 && c == a.id.slice(4).substr(0, s)) {
            if (e) {
                k = a.id.indexOf("_", s + 4);
                if (k != -1) {
                    k = a.id.indexOf("_", k + 1);
                    if (k != -1) continue
                }
            }
            var D = a.style.display;
            a.style.display = h;
            var m = 0;
            if (Boolean(a.getAttribute("selectableRows"))) m = Number(a.getAttribute("selectableRows"));
            if (typeof FV4UI != "undefined" && FV4UI() && Boolean(m))
                if (!e) {
                    if (D != "none") b.TotalListItems -= m;
                    EnsureScriptParams("core.js", "DeselectCollapsedGroup", b, a);
                    EnsureScriptParams("core.js", "UpdateSelectAllCbx", b, true)
                } else {
                    b.TotalListItems += m;
                    EnsureScriptParams("core.js", "UpdateSelectAllCbx", b, false)
                }
            if (e && a.id.substr(0, 4) == "titl") {
                var i = document.getElementById("img_" + a.id.slice(4)),
                    E = i.getAttribute("src");
                if (p) i.alt = Strings.STS.L_SPExpand;
                if (E == l) {
                    i.className = r;
                    i.parentNode.className = u
                } else i.src = q
            }
            var w = "tbod" + c,
                j;
            if (a.id.substr(0, w.length) == w) {
                if (x)
                    for (f = 0; f < a.childNodes.length; f++) {
                        j = a.childNodes[f];
                        j.style.display = h
                    }
                if (a.childNodes.length == 0) {
                    var g = a.nextSibling;
                    while (g != null)
                        if (g.tagName == "TBODY" && g.id == "") {
                            for (f = 0; f < g.childNodes.length; f++) {
                                j = g.childNodes[f];
                                j.style.display = h;
                                if (typeof FV4UI != "undefined" && FV4UI()) {
                                    HandleSingleGroupByRow(b, j, e);
                                    UpdateSelectAllCbx(b, true)
                                }
                            }
                            break
                        } else g = g.nextSibling
                }
            }
        }
    }
    FV4UI() && EnsureScriptParams("core.js", "UpdateCtxLastSelectableRow", b, n);
    if (!x && !g_ExpGroupParseStage) {
        if (g_ExpGroupNeedsState && ExpGroupFetchWebPartID(c) != null && !Boolean(b.noGroupCollapse))
            if (e) AddGroupToCookie(c);
            else RemoveGroupFromCookie(c);
        if (e) {
            var y = document.getElementById("tbod" + c + "_");
            if (y != null) {
                var F = y.getAttribute("isLoaded");
                F == "false" && ExpGroupFetchData(c, z)
            }
        }
    }
}

function ExpGroupFetchData(b, a) {
    var c = '<tr><td colspan="100" class="ms-gbload">' + Strings.STS.L_Loading_Text + "</td></tr>";
    ExpGroupRenderData(c, b, "false");
    if (!g_ExpGroupInProgress) {
        var d = ExpGroupFetchGroupString(b);
        if (d == null) {
            c = '<tr><td></td><td class="ms-gbload">' + Strings.STS.L_Loading_Error_Text + "</td></tr>";
            ExpGroupRenderData(c, b, "false");
            if (Boolean(a) && g_ExpGroupXSLTQueue.length > 0) ExpGroupFetchData(g_ExpGroupXSLTQueue.shift(), a);
            else !Boolean(a) && g_ExpGroupCAMLQueue.length > 0 && ExpGroupFetchData(g_ExpGroupCAMLQueue.shift(), a);
            return
        }
        if (typeof InitAllClvps == "undefined" && a != null) g_ExpInitializing = true;
        else {
            g_ExpInitializing = false;
            g_ExpGroupInProgress = true
        }
        ExpGroupCallServer(d, b, a);
        g_ExpGroupCAMLQueue.length > 0 && a == null && ExpGroupFetchData(g_ExpGroupCAMLQueue.shift())
    } else if (Boolean(a)) g_ExpGroupXSLTQueue.push(b);
    else g_ExpGroupCAMLQueue.push(b)
}

function ExpGroupCallServer(groupString, groupName, evt) {
    if (evt != null) {
        var obj = evt;
        if (evt == "PageLoad") {
            obj = {};
            obj.fakeEvent = true
        }
        EnsureScriptParams("inplview", "inplview.ExpGroup", obj, groupName)
    } else {
        var viewCounter = groupName.substring(0, groupName.indexOf("-")),
            myCtx = window["ctx" + viewCounter],
            webPartID = ExpGroupFetchWebPartID(groupName);
        if (webPartID != null) {
            var functionName = "ExpGroupCallServer" + webPartID;
            if (myCtx != null && myCtx.clvp != null) {
                var myClvp = myCtx.clvp,
                    strFilter = myClvp.FilterString();
                if (strFilter != null) groupString += "|" + strFilter
            }
            var functionCall = functionName + "('" + groupString + "','" + groupName + "')";
            eval(functionCall)
        }
    }
}

function DoPagingCallback(webPartID, pagingParam) {
    if (webPartID != null) {
        var functionName = "DoPagingCallback" + webPartID,
            functionCall = functionName + "('" + pagingParam + "')";
        eval(functionCall)
    }
}

function ExpGroupReceiveData(a, c) {
    var d = "ctx" + c.substring(0, c.indexOf("-")),
        e = a.indexOf('CTXName="');
    if (e != -1)
        if (d != "ctx1") a = a.replace(/ CTXName=\"ctx1\" /g, ' CTXName="' + d + '" ');
    var b = false;
    if (a.length < 4) b = true;
    else if (a.substring(0, 3) != "<tr") b = true;
    if (b) a = "<TR><TD>" + a + "</TD></TR>";
    ExpGroupRenderData(a, c, "true");
    ProcessImn();
    g_ExpGroupInProgress = false;
    g_ExpGroupCAMLQueue.length > 0 && ExpGroupFetchData(g_ExpGroupCAMLQueue.shift())
}

function ExpGroupRenderData(d, a, e) {
    var c = document.getElementById("tbod" + a + "_"),
        b = document.createElement("DIV"),
        f = a.split("-");
    b.innerHTML = '<TABLE><TBODY id="tbod' + a + '_" isLoaded="' + e + '">' + d + "</TBODY></TABLE>";
    c.parentNode.replaceChild(b.firstChild.firstChild, c)
}
var titlTbody;

function ExpGroupFetchGroupString(b) {
    titlTbody = document.getElementById("titl" + b);
    return titlTbody == null ? null : titlTbody.getAttribute("groupString")
}

function ExpGroupFetchWebPartID(b) {
    var c = b.substring(0, b.indexOf("-")),
        a = document.getElementById("GroupByWebPartID" + c);
    return a == null ? null : a.getAttribute("webPartID")
}

function RenderActiveX(a) {
    document.write(a)
}

function RenderActiveX2(f, d) {
    if (d == null) return;
    var a = document.getElementById(d);
    if (a != null) {
        var e = a.parentNode,
            c = document.createElement("div");
        c.innerHTML = f;
        var b = c.childNodes[0];
        b != null && e.replaceChild(b, a)
    }
}

function OnItem(a) {
    DeferCall("OnItemDeferCall", a)
}

function OnChildItem(c) {
    for (var b = 0; b < c.childNodes.length; b++) {
        var a = c.childNodes[b];
        if (a.nodeType == 1 && a.tagName == "TABLE" && Boolean(a.getAttribute("NameOrTitle"))) break;
        if (a.nodeType == 1 && a.tagName == "DIV" && a.style.display != "none" && a.style.visibility != "hidden") {
            OnItem(a);
            break
        }
    }
}

function OnLink(a) {
    DeferCall("OnLinkDeferCall", a)
}

function MMU_PopMenuIfShowing(a) {
    DeferCall("MMU_PopMenuIfShowingDeferCall", a)
}

function OnMouseOverFilter(a) {
    DeferCall("OnMouseOverFilterDeferCall", a)
}

function OnChildColumn(c) {
    for (var b = 0; b < c.childNodes.length; b++) {
        var a = c.childNodes[b];
        if (a.nodeType == 1 && a.tagName == "DIV" && a.getAttribute("CtxNum") != null) {
            OnMouseOverFilter(a);
            break
        }
    }
}

function MMU_EcbTableMouseOverOut(b, a) {
    DeferCall("MMU_EcbTableMouseOverOutDeferCall", b, a)
}

function OnMouseOverAdHocFilter(b, a) {
    DeferCall("OnMouseOverAdHocFilterDeferCall", b, a)
}

function MMU_EcbLinkOnFocusBlur(c, b, a) {
    DeferCall("MMU_EcbLinkOnFocusBlurDeferCall", c, b, a)
}

function GetElementByClassName(a, d) {
    if (Boolean(a.className) && typeof a.className.indexOf != "undefined")
        if (a.className.indexOf(d) > -1) return a;
    for (var b, c = 0; c < a.childNodes.length; c++) {
        b = GetElementByClassName(a.childNodes[c], d);
        if (b != null) return b
    }
    return null
}

function AddWhiteBG() {
    if (searcharea.className.indexOf(" " + whitebgclass) == -1) {
        var a = searcharea.className.trim() + " " + whitebgclass;
        a = a.trim();
        searcharea.className = a
    }
}

function RemoveWhiteBG() {
    if (locked) return;
    searcharea.className = searcharea.className.replace(RegExp(" " + whitebgclass), "")
}
var locked;

function LockBG() {
    locked = !locked;
    if (locked) AddWhiteBG();
    else RemoveWhiteBG()
}
var searcharea, searchbox, searchimage, whitebgclass;

function InitSearchBoxStyleEvents(c, d, a, b) {
    searcharea = document.getElementById(c);
    searchbox = document.getElementById(d);
    searchimage = GetElementByClassName(searcharea, a);
    whitebgclass = b;
    if (searchbox == null || searchimage == null) return;
    searchbox.onfocus = LockBG;
    searchbox.onmouseover = AddWhiteBG;
    searchbox.onblur = LockBG;
    searchbox.onmouseout = RemoveWhiteBG;
    searchimage.onmouseover = AddWhiteBG;
    searchimage.onmouseout = RemoveWhiteBG
}

function IsFullNameDefined(c) {
    if (!Boolean(c)) return false;
    for (var d = c.split("."), e = d.length, a = window, b = 0; b < e; b++) {
        a = a[d[b]];
        if (typeof a == "undefined") return false
    }
    return true
}

function TypeofFullName(c) {
    if (!Boolean(c)) return "undefined";
    for (var d = c.split("."), e = d.length, a = window, b = 0; b < e; b++) {
        a = a[d[b]];
        if (typeof a == "undefined") return "undefined"
    }
    return typeof a
}
var _v_dictSod, _v_dictCss, Sods, _v_qsod, _v_sodctx;

function Sod(b, a) {
    this.url = b;
    this.key = a;
    this.loaded = false;
    this.depkeys = null;
    this.state = 1;
    this.qfn = null
}

function SodCallbackInfo(c, b, a) {
    this.success = c;
    this.error = b;
    this.expectedType = a
}

function AreAllSodsLoaded() {
    var a;
    if (g_PendingLoadSodQueue != null)
        for (var c = 0; c < g_PendingLoadSodQueue.length; c++) {
            var d = g_PendingLoadSodQueue[c];
            a = d.sod;
            if (Boolean(a) && a.state != Sods.loaded) return false
        }
    if (g_spPreFetchKeys != null)
        for (var b = 0; b < g_spPreFetchKeys.length; b++) {
            var f = g_spPreFetchKeys[b];
            a = _v_dictSod[f];
            if (Boolean(a) && a.state != Sods.loaded) return false
        }
    for (var e in _v_dictSod) {
        a = _v_dictSod[e];
        if (Boolean(a) && (a.state == Sods.loading || a.state == Sods.pending || a.state == Sods.error)) return false
    }
    return true
}

function UrlToSod(b) {
    for (var c in _v_dictSod) {
        var a = _v_dictSod[c];
        if (a.url == b) return a
    }
    return null
}

function ResetSodState() {
    for (var b in _v_dictSod) {
        var a = _v_dictSod[b];
        if (a.state == Sods.loaded && a.url != null) a.reset = true;
        a.qfn = null
    }
}

function RegisterOnDemandCss(a, b) {
    _v_dictCss[a] = new Sod(b, a)
}

function LoadCssOnDemand(c, a) {
    var b = _v_dictCss[c];
    if (b != null) _ensureCssLink(b.url, a);
    else a != null && a()
}

function RegisterSod(b, c) {
    b = NormalizeSodKey(b);
    var a = _v_dictSod[b];
    if (a != null) {
        if ("undefined" != typeof a.url && a.url == null && c != null) {
            a.url = c;
            if (AjaxNavigate$isMDSURL(window.location.href)) a.reset = true
        }
        return
    }
    a = new Sod(c, b);
    _v_dictSod[b] = a
}

function NormalizeListViewSodKey(b) {
    var c = typeof _spPageContextInfo !== "undefined" && typeof _spPageContextInfo.isSLV !== "undefined" && Boolean(_spPageContextInfo) && Boolean(_spPageContextInfo.isSLV);
    if (c) {
        var a = b.toLowerCase(),
            f = a == "inplview" || a == "inplview.js",
            d = a == "clienttemplates" || a == "clienttemplates.js",
            e = a == "clientrenderer" || a == "clientrenderer.js";
        if (f || d || e) return "listview.js"
    }
    return b
}

function ResetListViewSods(a) {
    ResetSod("inplview", a);
    ResetSod("inplview.js", a);
    ResetSod("clienttemplates", a);
    ResetSod("clienttemplates.js", a);
    ResetSod("clientrenderer", a);
    ResetSod("clientrenderer.js", a)
}

function ResetSod(c, b) {
    var a = _v_dictSod[c];
    if (Boolean(a)) a.reset = b
}

function RegisterSodDep(c, b) {
    c = NormalizeSodKey(c);
    b = NormalizeSodKey(b);
    var a = _v_dictSod[c];
    if (a == null) return;
    if (a.depkeys == null) a.depkeys = []; - 1 == ArrayIndexOf(a.depkeys, b) && a.depkeys.push(b)
}

function LoadSodByKey(a, c, f, e, d) {
    a = NormalizeSodKey(a);
    a = NormalizeListViewSodKey(a);
    var b = _v_dictSod[a];
    if (c != null && b != null) {
        if (b.qfn == null) b.qfn = [];
        b.qfn.push(new SodCallbackInfo(c, e, d))
    }
    return LoadSod(b, f)
}

function LoadSodByKeySync(a) {
    return LoadSodByKey(a, null, true)
}

function LoadMultipleSods(a, k, j) {
    for (var d = a.length, c = {}, e = 0; e < d; e++) c[a[e]] = false;
    for (var g = 0, f = function() {
            g++;
            g == d && k()
        }, b = 0; b < d; b++) {
        var h = function(a) {
                return function() {
                    if (!Boolean(c[a])) {
                        c[a] = true;
                        f()
                    }
                }
            }(a[b]),
            i = LoadSodByKey(a[b], h, j);
        if (i == Sods.loaded && !Boolean(c[a[b]])) {
            c[a[b]] = true;
            f()
        }
    }
}
var g_PendingLoadSodQueue;

function IsSodLoaded(a) {
    return a.state == Sods.loaded && !Boolean(a.reset)
}

function LoadSod(b, a) {
    if (!a && typeof g_mdsReady != "undefined" && Boolean(g_mdsReady) && typeof g_MDSPageLoaded != "undefined" && !Boolean(g_MDSPageLoaded)) {
        if (g_PendingLoadSodQueue == null) g_PendingLoadSodQueue = [];
        var c = {
            sod: b
        };
        g_PendingLoadSodQueue.push(c);
        return Sods.pending
    } else return LoadSodInternal(b, a)
}

function LoadPendingSods() {
    if (g_PendingLoadSodQueue != null) {
        for (var c = g_PendingLoadSodQueue.length, a = 0; a < c; a++) {
            var b = g_PendingLoadSodQueue[a];
            LoadSodInternal(b.sod, false)
        }
        g_PendingLoadSodQueue = null
    }
}

function LoadSodInternal(a, e) {
    if (a == null) return Sods.missing;
    if (IsSodLoaded(a) || !e && a.state == Sods.loading) return a.state;
    if (a.state == Sods.error) {
        NotifyOnLoad(a);
        return a.state
    }
    a.state = Sods.pending;
    var n = [],
        l = a.depkeys;
    if (l != null) {
        for (var s = true, o = l.length, b, d = 0; d < o; d++) {
            var y = NormalizeListViewSodKey(l[d]);
            b = _v_dictSod[y];
            if (b == null) continue;
            if (!IsSodLoaded(b)) {
                s = false;
                n.push(b)
            }
        }
        if (!s) {
            _v_qsod.push(a);
            o = n.length;
            for (d = 0; d < o; d++) {
                b = n[d];
                !IsSodLoaded(b) && (e || b.state != Sods.loading && b.state != Sods.error) && LoadSodInternal(b, e)
            }
            if (!e) return a.state
        }
    }
    if (a.reset) Boolean(a.url) && window.location.pathname.toLowerCase().endsWith("/_layouts/15/start.aspx") && "undefined" != typeof DeltaManager$_ScriptLoader$_loadTargetInternal && DeltaManager$_ScriptLoader$_loadTargetInternal(a.url, a, a.url != null);
    if (IsSodLoaded(a) || !e && a.state == Sods.loading) return a.state;
    if (e) {
        var j = "",
            c;
        if (browseris.ie9down) {
            var f = new XDomainRequest,
                h = false;
            f.onerror = function() {
                h = true
            };
            f.ontimeout = function() {
                h = true
            };
            f.onload = function() {
                h = true
            };
            f.open("GET", a.url);
            f.send();
            while (!h) {
                c = new XMLHttpRequest;
                c.open("GET", "/_layouts/15/blank.htm", false);
                c.setRequestHeader("If-Modified-Since", (new Date).toUTCString());
                c.send(null)
            }
            j = f.responseText
        } else {
            c = new XMLHttpRequest;
            c.open("GET", a.url, false);
            c.send(null);
            j = c.responseText
        }
        var p = document.createElement("script");
        document.getElementsByTagName("head")[0].appendChild(p);
        var t = a.state == Sods.loading;
        p.text = j;
        if (!browseris.ie || browseris.ie9standardUp) p.src = a.url;
        if (t && typeof a.s != "undefined") {
            var g = a.s;
            a.s = undefined;
            g.parentNode.removeChild(g);
            g.onreadystatechange = null;
            g.onload = null
        }
        a.state = Sods.loaded;
        t && NotifyOnLoad(a);
        return a.state
    } else {
        var r = false,
            x = document.getElementsByTagName("head")[0],
            q = x.getElementsByTagName("script"),
            u = q.length,
            i = document.createElement("script");
        i.src = a.url;
        var w = i.src;
        i = null;
        for (var k = 0; k < u; k++) {
            var m = q[k].src;
            if (null != m && m.length > 0)
                if (w == m) {
                    r = true;
                    break
                }
        }
        if (r)
            if (a.reset) Boolean(a.url) && window.location.pathname.toLowerCase().endsWith("/_layouts/15/start.aspx") && "undefined" != typeof DeltaManager$_ScriptLoader$_loadTargetInternal && DeltaManager$_ScriptLoader$_loadTargetInternal(a.url, a, a.url != null);
            else {
                if (a.state != Sods.error) a.state = Sods.loaded;
                NotifyOnLoad(a)
            }
        else {
            a.state = Sods.loading;
            var z = GetOnLoad(a),
                v = GetOnLoad(a, true),
                A = Define.loadScript(a.url, z, v);
            a.s = A
        }
        return a.state
    }
}

function GetOnLoad(a, b) {
    return function() {
        if (b) a.state = Sods.error;
        NotifyOnLoad(a)
    }
}

function NotifyOnLoad(a) {
    function c() {
        if (a.qfn != null) {
            var c = a.state == Sods.error;
            while (a.qfn.length > 0) {
                var b = a.qfn.shift(),
                    d = Boolean(b.error) && (c || Boolean(b.expectedType) && !IsFullNameDefined(b.expectedType));
                if (d) b.error();
                else !c && b.success()
            }
        }
    }
    var b = function() {
        var d = a.state == Sods.error;
        a.reset = false;
        a.key == "listview.js" && ResetListViewSods(false);
        if (!d) {
            a.state = Sods.loaded;
            while (_v_qsod.length > 0) {
                var b = _v_qsod.pop();
                if (b.state == Sods.pending) {
                    LoadSod(b);
                    break
                }
            }
        }
        c();
        if (_v_qsod.length == 0 && AreAllSodsLoaded() && !d) {
            var e = function() {
                var a = GetRUMWSA();
                if (IsNullOrUndefined(a)) return;
                var c = typeof g_mdsReady != "undefined" && Boolean(g_mdsReady);
                if (c && typeof g_MDSPageLoaded != "undefined" && Boolean(g_MDSPageLoaded)) {
                    if (!a.get_IsMDSBlockCollected()) {
                        var b = asyncDeltaManager;
                        !IsNullOrUndefined(b) && a.AddMDSBlock(b._admtt)
                    }
                    a.AddTTLB()
                }
            };
            if (!(typeof g_mdsReady != "undefined" && Boolean(g_mdsReady))) {
                var f = _v_dictSod["sp.core.js"];
                if (IsNullOrUndefined(f)) return
            }
            EnsureScriptFunc("SP.core.js", "SP.RUMLogger", e)
        }
    };
    if (browseris.ie8down) setTimeout(b, 0);
    else b()
}

function EnsureScript(e, i, b, d, c, g) {
    if (Boolean(d) && Boolean(c)) throw new Error("bSync==true && errorFn");
    var a = true,
        h = NormalizeSodKey(e),
        f = _v_dictSod[h];
    if (f != null && f.reset) a = false;
    if (i != "undefined" && a) {
        b != null && b();
        return true
    }
    LoadSodByKey(e, b, d, c, g);
    return a ? true : false
}

function EnsureScriptFunc(c, a, d, b) {
    EnsureScript(c, TypeofFullName(a), d, false, b, a)
}

function EnsureScriptParams() {
    if (arguments.length < 2) return;
    var a = arguments,
        c = Array.prototype.shift.call(a),
        b = Array.prototype.shift.call(a),
        d = function() {
            for (var e = b.split("."), c = window, d = 0, g = e.length; d < g; d++) c = c[e[d]];
            var f = c;
            f.apply(null, a)
        };
    EnsureScriptFunc(c, b, d)
}

function NormalizeSodKey(a) {
    var b = a.toLowerCase(),
        d = b.length;
    if (d >= 3 && ".js" == b.substr(d - 3)) a = b;
    else if (b.indexOf(".resx") > 0) {
        var c = b.indexOf(".resx");
        a = a.substr(0, c + 5).toLowerCase() + a.substr(c + 5)
    }
    return a
}

function ArrayIndexOf(c, e, a) {
    if (typeof e === "undefined") return -1;
    var d = c.length;
    if (d !== 0) {
        a = a - 0;
        if (isNaN(a)) a = 0;
        else {
            if (isFinite(a)) a = a - a % 1;
            if (a < 0) a = Math.max(0, d + a)
        }
        for (var b = a; b < d; b++)
            if (typeof c[b] !== "undefined" && c[b] === e) return b
    }
    return -1
}

function SodCloneEvent(b) {
    var a;
    if (browseris.ie) a = document.createEventObject(b);
    else {
        a = document.createEvent("MouseEvents");
        a.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    }
    return a
}

function SodDispatchEvent(d, e, a) {
    var c = SodCloneEvent(a),
        b;
    if (browseris.ie) b = function() {
        c.srcElement.fireEvent("onclick", c)
    };
    else {
        var f = a.target;
        b = function() {
            f.dispatchEvent(c)
        }
    }
    if (!EnsureScript(d, e, b))
        if (browseris.ie) a.cancelBubble = true;
        else a.stopPropagation()
}

function AddTabHeadHandler(b, c) {
    var a = document.getElementById(b);
    if (a != null) {
        var d = a.getElementsByTagName("A")[0];
        AddEvtHandler(d, "onclick", c)
    }
}

function LoadWPAdderOnDemand() {
    typeof loadWPAdderCallback == "function" && EnsureScriptParams("WPAdderClass", "WPAdderClassLoad", loadWPAdderCallback)
}

function showSaveConflictDialog(c, b, d, a, f, e) {
    EnsureScriptParams("ribbon", "ribbon.showSaveConflictDialog", c, b, d, a, f, e)
}

function ClkElmt(a) {
    if (browseris.ie) a.click();
    else FFClick(a)
}

function EnsureSelectionHandlerOnFocus(c, b, a) {
    EnsureScriptFunc("core.js", "EnsureSelectionHandlerDeferred", function() {
        DeferCall("EnsureSelectionHandlerOnFocusDeferred", c, b, a)
    })
}

function EnsureSelectionHandler(b, c, a) {
    EnsureScriptFunc("core.js", "EnsureSelectionHandlerDeferred", function() {
        DeferCall("EnsureSelectionHandlerDeferred", b, c, a)
    })
}

function StopEvt(a) {
    !browseris.ie && a.stopPropagation()
}

function AddEvtHandler(b, c, d, a) {
    if (Boolean(b.addEventListener)) {
        a = typeof a != "undefined" && a != null ? a : false;
        b.addEventListener(c.substr(2), d, a)
    } else Boolean(b.attachEvent) && b.attachEvent(c, d)
}

function RemoveEvtHandler(b, c, d, a) {
    if (Boolean(b.removeEventListener)) {
        a = typeof a != "undefined" && a != null ? a : false;
        b.removeEventListener(c.substr(2), d, a)
    } else Boolean(b.detachEvent) && b.detachEvent(c, d)
}

function HideListViewRows(a) {
    var c = document.getElementById(a);
    if (c == null) return;
    resetSelectAllCbx(c);
    var e = ajaxNavigate.getParam("InplviewHash");
    if (null == e) return;
    var d = e.substr(0, 42);
    d = d.replace(/--/g, "-");
    if (a.length == 77) a = a.substr(39);
    else {
        var f, b;
        if (a.indexOf("onetidDoclibViewTbl") != 0) return;
        a = a.substr(19);
        if (a == "0") {
            if (c.className.indexOf("ms-emptyView") >= 0) return;
            for (f in g_ctxDict) {
                b = g_ctxDict[f];
                a = b.view;
                break
            }
        } else {
            b = g_ctxDict["ctx" + a];
            a = b.view
        }
    }
    if (d != a) return;
    EnsureScriptParams("core.js", "AddCssClassToElement", c, "s4-hide-tr")
}

function resetSelectAllCbx(b) {
    var a = getSelectAllCbxFromTable(b);
    if (a != null) a.checked = false
}

function getSelectAllCbxFromTable(e) {
    if (e == null) return null;
    var c = e.rows;
    if (Boolean(c) && c.length > 0) {
        var d = c[0];
        if (!Boolean(d.className.indexOf("ms-viewheadertr"))) {
            var b = d.cells;
            if (b.length > 0) {
                var a = b[0].getElementsByTagName("INPUT")[0];
                if (a != null) return a;
                a = b[0].querySelector(".ms-selectall-span");
                if (a != null) return a
            }
        }
    }
    return null
}
var g_pageIsDeRibboned;

function WpClick(b) {
    if (Boolean(g_pageIsDeRibboned)) return;
    var c = GetEventSrcElement(b),
        a = c;
    while (a != null && a.tagName != "BODY" && (a.className == null || a.className.indexOf == null || a.className.indexOf("s4-wpcell") < 0)) {
        if (a.tagName == "A" && a.getAttribute("data-sp-continueWPSelect") == null) return;
        if (a.getAttribute("data-sp-cancelWPSelect") != null) return;
        if (a.tagName == "DIV" && a.className != null && a.className.indexOf("s4-ctx") != -1) return;
        if (a.tagName == "TH" && a.className != null && a.className.indexOf("ms-vh2") != -1) return;
        a = a.parentNode
    }
    a != null && a.tagName != "BODY" && EnsureScriptParams("ribbon", "SelectWp", a)
}

function WpKeyUp(b) {
    var a = GetEventSrcElement(b);
    b.keyCode == 32 && Boolean(a) && a.tagName == "INPUT" && (HasCssClass(a, "s4-selectAllCbx") || HasCssClass(a, "s4-itm-cbx")) && WpClick(b)
}

function WzClick(c, b) {
    var d = GetEventSrcElement(c),
        a = d;
    while (a != null) {
        var e = a.getAttribute("ZoneID");
        if (e == b) break;
        if (a.tagName == "A") return;
        a = a.parentNode
    }
    a != null && EnsureScriptParams("ribbon", "SelectWz", a, b)
}

function WpCbxSelect(a) {
    var b = GetEventSrcElement(a),
        c = b.checked;
    if (!c) WpClick(a);
    else EnsureScriptParams("ribbon", "DeselectWpWz");
    TrapMenuClick(a);
    if (a.type != "keyup") b.className = "ms-webpart-checkboxHide"
}

function WpCbxKeyHandler(b) {
    var a;
    if (browseris.ie) a = b.keyCode;
    else a = b.which;
    a == 13 && WpCbxSelect(b)
}

function PopoutMenuMaybeSwapImage(b, c, d) {
    var a = document.getElementById(b);
    if (Boolean(a) && typeof a != "undefined") {
        if (a.rel == "_spPopoutMenuIsOpen") return;
        SwapImage(c, d)
    }
}

function PopoutMenuMaybeSwapImageClustered(d, f, h, i, j, e, g) {
    var a = document.getElementById(d);
    if (Boolean(a) && typeof a != "undefined") {
        if (a.rel == "_spPopoutMenuIsOpen") return;
        var b = document.getElementById(f),
            c = b.firstChild;
        SwapImageInternal(c, h);
        b.style.height = e + "px";
        b.style.width = g + "px";
        c.style.top = "-" + j + "px";
        c.style.left = "-" + i + "px"
    }
}

function SwapImage(c, b) {
    var a = document.getElementById(c);
    SwapImageInternal(a, b)
}

function SwapImageInternal(a, b) {
    if (Boolean(a) && typeof a != "undefined") a.src = b
}

function GetViewportHeight() {
    return document.documentElement.clientHeight
}

function GetViewportWidth() {
    return document.documentElement.clientWidth
}
var g_viewportHeight, g_viewportWidth, g_wpadderHeight, g_setWidth, g_setWidthInited, g_workspaceResizedHandlers, g_setScrollPos, g_frl;

function FixRibbonAndWorkspaceDimensionsForResize() {
    if (g_frl) return;
    var a = GetViewportHeight(),
        b = GetViewportWidth();
    if (g_viewportHeight == a && g_viewportWidth == b) return;
    g_viewportHeight = a;
    g_viewportWidth = b;
    window.setTimeout(FixRibbonAndWorkspaceDimensions, 0)
}

function FixRibbonAndWorkspaceDimensions() {
    g_frl = true;
    var o = GetCachedElement("s4-ribbonrow"),
        a = GetCachedElement("s4-workspace"),
        b = GetCachedElement("s4-titlerow"),
        l = GetCachedElement("s4-bodyContainer"),
        x = GetCachedElement("footer"),
        u = GetCachedElement("ms-core-overlay"),
        r = GetCachedElement("globalNavBox"),
        c;
    if (!Boolean(o) || !Boolean(a) || !Boolean(l)) {
        CallWorkspaceResizedEventHandlers();
        return
    }
    if (!g_setWidthInited) {
        c = true;
        if (a.className.indexOf("s4-nosetwidth") > -1) c = false;
        g_setWidth = c;
        g_setWidthInited = true
    } else c = g_setWidth;
    var g = 0,
        q = Boolean(ajaxNavigate.get_search().match(RegExp("[?&]IsDlg=1")));
    if (Boolean(r) && !q) g = RibbonIsMinimized() ? r.offsetHeight : 126;
    else g = RibbonIsMinimized() ? 35 : 126;
    var m = g + g_wpadderHeight;
    if (GetCurrentEltStyle(o, "visibility") == "hidden") m = 0;
    if (Boolean(b))
        if (RibbonIsMinimized()) {
            b.className = b.className.replace(RegExp("s4-titlerowhidetitle"), "");
            b.style.display = "block"
        } else {
            var v = b.className;
            if (v.indexOf("s4-titlerowhidetitle") < 0) b.className = v.concat("s4-titlerowhidetitle");
            b.style.display = "none"
        }
    o.style.height = String(m) + "px";
    var s = GetCachedElement("s4-ribbonrow"),
        e = s.querySelector(".ms-core-webpartadder");
    if (Boolean(e) && GetCurrentEltStyle(e, "position") == "absolute") {
        var h = m,
            d = document.getElementById("Ribbon");
        if (Boolean(d)) {
            var j = d.querySelector(".ms-cui-tabContainer");
            if (RibbonIsMinimized() || !Boolean(j)) h = AbsTop(d) + d.offsetHeight;
            else h = AbsTop(j) + j.offsetHeight;
            h -= AbsTop(s);
            e.style.top = h.toString() + "px"
        } else e.style.top = g.toString() + "px"
    }
    var i = g_viewportHeight;
    if (null === i) {
        i = GetViewportHeight();
        g_viewportHeight = i
    }
    var f = i - AbsTop(a);
    if (f < 0) f = 0;
    if (!browseris.ipad || !q) a.style.height = String(f) + "px";
    if (Boolean(u) && !q) {
        var k = f;
        if (k < 0) k = 0;
        u.style.height = String(k) + "px"
    }
    if (c) {
        a.style.width = String(document.documentElement.clientWidth) + "px";
        if (l.offsetWidth < a.clientWidth) l.style.width = String(a.clientWidth) + "px"
    }
    var w = browseris.ie && browseris.iever == 7 && !browseris.ie8standard;
    if (!g_setScrollPos) {
        browseris.firefox && browseris.firefox36up && window.scrollTo(0, 0);
        if (Boolean(ajaxNavigate.get_search().match(RegExp("[?&]IsDlg=1"))))
            if (!w || a.scrollHeight < a.clientHeight) a.style.overflowY = "auto";
        var n = document.getElementById("_maintainWorkspaceScrollPosition");
        if (n != null && n.value != null) {
            var t = Number(n.value),
                p = GetElementByClassName(a, "ms-blog-postList");
            if (p != null && t > 0) {
                var y = p.getBoundingClientRect().top;
                a.scrollTop = p.getBoundingClientRect().top - a.getBoundingClientRect().top
            } else a.scrollTop = t
        }
        g_setScrollPos = true
    }
    CallWorkspaceResizedEventHandlers();
    g_frl = false
}

function CallWorkspaceResizedEventHandlers() {
    for (var b = [].concat(g_workspaceResizedHandlers), a = 0, c = b.length; a < c; a++) b[a]()
}

function RibbonIsMinimized() {
    return g_spribbon.isInited ? g_spribbon.isMinimized : typeof _ribbon == "undefined" || null === _ribbon ? true : typeof _ribbon.buildMinimized == "undefined" ? undefined : _ribbon.buildMinimized
}
var g_spribbon;

function OnRibbonMinimizedChanged(a) {
    if (ajaxNavigate.get_search().indexOf("IsDlg=1") != -1) return;
    ExecuteOrDelayUntilScriptLoaded(function() {
        AnimateRibbonMinimizedChanged(a)
    }, "core.js")
}

function PreRibbonTabSwitched(a) {
    ExecuteOrDelayUntilScriptLoaded(function() {
        g_fSkipAnimation = false;
        PrepareRibbonForAnimation(a, true)
    }, "core.js")
}

function CatchCreateError() {
    return true
}

function ExpandBody(d, c) {
    if (typeof MSOWebPartPageFormName == "undefined") return false;
    var a = document.forms[MSOWebPartPageFormName],
        b = a.elements.CAML_Expand;
    b.value = b.value.concat(d);
    a.action = a.action.concat("#" + c);
    a.submit();
    return false
}

function CollapseBody(b, f) {
    if (typeof MSOWebPartPageFormName == "undefined") return false;
    var c = document.forms[MSOWebPartPageFormName],
        a = new RegExp("{", "g");
    b = b.replace(a, "\\{");
    a = new RegExp("}", "g");
    b = b.replace(a, "\\}");
    a = new RegExp(b, "g");
    var e = c.elements.CAML_Expand;
    e.value = e.value.replace(a, "");
    var d = c.elements.CAML_ShowOriginalEmailBody;
    d.value = d.value.replace(a, "");
    c.action = c.action.concat("#" + f);
    c.submit();
    return false
}

function ShowQuotedText(d, c) {
    if (typeof MSOWebPartPageFormName == "undefined") return false;
    var a = document.forms[MSOWebPartPageFormName],
        b = a.elements.CAML_ShowOriginalEmailBody;
    b.value = b.value.concat(d);
    if (a.action.indexOf("#") > 0) a.action = a.action.substr(0, a.action.indexOf("#"));
    a.action = a.action.concat("#" + c);
    a.submit();
    return false
}

function HideQuotedText(b, e) {
    if (typeof MSOWebPartPageFormName == "undefined") return false;
    var a = document.forms[MSOWebPartPageFormName],
        c = new RegExp("{", "g");
    b = b.replace(c, "\\{");
    c = new RegExp("}", "g");
    b = b.replace(c, "\\}");
    c = new RegExp(b, "g");
    var d = a.elements.CAML_ShowOriginalEmailBody;
    d.value = d.value.replace(c, "");
    if (a.action.indexOf("#") > 0) a.action = a.action.substr(0, a.action.indexOf("#"));
    a.action = a.action.concat("#" + e);
    a.submit();
    return false
}
var v_stsOpenDoc2, v_strStsOpenDoc2;

function StsOpenEnsureEx2(b) {
    if (v_stsOpenDoc2 == null || v_strStsOpenDoc2 != b) {
        v_stsOpenDoc2 = null;
        v_strStsOpenDoc2 = null;
        var a;
        if (Boolean(window.ActiveXObject)) try {
            v_stsOpenDoc2 = new ActiveXObject(b);
            v_strStsOpenDoc2 = b
        } catch (c) {
            v_stsOpenDoc2 = null;
            v_strStsOpenDoc2 = null
        } else if (IsSupportedMacBrowser() && b.indexOf("SharePoint.OpenDocuments") >= 0) {
            a = CreateMacPlugin();
            if (a != null) {
                v_stsOpenDoc2 = a;
                v_strStsOpenDoc2 = "SharePoint.MacPlugin"
            }
        } else if (IsSupportedNPApiBrowserOnWin() && b.indexOf("SharePoint.OpenDocuments") >= 0) {
            a = CreateNPApiOnWindowsPlugin("application/x-sharepoint");
            if (a != null) {
                v_stsOpenDoc2 = a;
                v_strStsOpenDoc2 = "SharePoint.FFWinPlugin"
            }
        }
    }
    return v_stsOpenDoc2
}

function HasValidUrlPrefix(b) {
    var a = b.toLowerCase();
    return -1 == a.search(RegExp("^http://")) && -1 == a.search(RegExp("^https://")) ? false : true
}

function IsLeavingObject(b, c) {
    var a;
    if (!Boolean(b)) b = window.event;
    a = Boolean(b.toElement) ? b.toElement : b.relatedTarget;
    if (null == a) return false;
    while (a != c && a != null) a = a.parentNode;
    return a != c
}
var deleteInstance;

function DeleteItemConfirmation() {
    var a = "";
    if (typeof ItemIsCopy != "undefined")
        if (ItemIsCopy) a = Strings.STS.L_NotifyThisIsCopy_Text;
    if (cascadeDeleteWarningMessage != "") a += cascadeDeleteWarningMessage;
    if (recycleBinEnabled == 1 && deleteInstance != 1) a += Strings.STS.L_STSRecycleConfirm_Text;
    else a += Strings.STS.L_STSDelConfirm_Text;
    return confirm(a)
}

function DeleteInstanceConfirmation() {
    deleteInstance = 1;
    return DeleteItemConfirmation()
}

function CancelMultiPageConfirmation(b) {
    var a = "";
    if (recycleBinEnabled == 1) a = Strings.STS.L_DeletePartialResponse1_text;
    else a = Strings.STS.L_DeletePartialResponse2_text;
    if (confirm(a) == true) return true;
    else Nav.navigate(b);
    return false
}

function RestoreItemVersionConfirmation() {
    var a = Strings.STS.L_Version_Restore_Confirm_Text;
    return confirm(a)
}

function DeleteItemVersionConfirmation(a) {
    return a ? confirm(Strings.STS.L_Version_Recycle_Confirm_Text) : confirm(Strings.STS.L_Version_Delete_Confirm_Text)
}

function DeleteUserInfoItemConfirmation() {
    var a = Strings.STS.L_User_Delete_Confirm_Text;
    return confirm(a)
}

function UnlinkCopyConfirmation() {
    return confirm(Strings.STS.L_ConfirmUnlinkCopy_Text)
}

function SupportsNavigateHttpFolder() {
    return browseris.ie5up
}

function MtgDeletePageConfirm() {
    var a;
    if (document.getElementById("MtgTlPart_PageType").value == "MtgTlPart_LocalPage") a = Strings.STS.L_DeleteConfirm_Text;
    else a = Strings.STS.L_DeleteGlobalConfirm_Text + Strings.STS.L_DeleteConfirm_Text;
    return confirm(a)
}

function IsImgLibJssLoaded() {
    return typeof fImglibJssLoaded != "undefined" ? fImglibJssLoaded : false
}

function GetFirstChildElement(b) {
    for (var a = 0; a < b.childNodes.length; a++)
        if (b.childNodes[a].nodeType == 1) return b.childNodes[a];
    return null
}

function TestGCObject(a) {
    return browseris.ie55up && typeof a == "undefined" || a == null || typeof a.object == "undefined" || a.object == null ? false : true
}

function MMU_GetMenuFromClientId(a) {
    return document.getElementById(a)
}

function MMU_EcbLinkOnKeyDown(g, b, a) {
    if (a == null) {
        a = window.event;
        if (a == null) return false
    }
    var e = GetEventKeyCode(a),
        f = b.href != null && b.href.length > 0;
    if ((a.shiftKey || !f) && e == 13 || e == 32 || a.altKey && e == 40) {
        var c = byid(b.id + "_ti");
        if (c == null) {
            var d = b.getAttribute("serverclientid");
            if (d != null && d.length > 0) c = byid(d + "_ti")
        }
        if (c != null) ClkElmt(c);
        else ClkElmt(b);
        return false
    } else return true
}
var firstCalled, _callbackinitdelayed;

function DeferWebFormInitCallback() {
    if (typeof WebForm_InitCallback == "function" && "undefined" == typeof WebForm_InitCallback.deferred && typeof window._WebForm_InitCallback == "undefined") window._WebForm_InitCallback = window.WebForm_InitCallback;

    function a() {
        if (firstCalled) {
            firstCalled = false;
            _callbackinitdelayed = true;
            _spBodyOnLoadFunctionNames.push("WebForm_InitCallback")
        } else {
            _callbackinitdelayed = false;
            typeof window._WebForm_InitCallback == "function" && window._WebForm_InitCallback()
        }
    }
    a.deferred = true;
    window.WebForm_InitCallback = a;
    if (typeof WebForm_DoCallback == "function" && "undefined" == typeof WebForm_DoCallback.deferred && typeof window._WebForm_DoCallback == "undefined") window._WebForm_DoCallback = window.WebForm_DoCallback;

    function b(e, c, d, g, b, f) {
        if (_callbackinitdelayed) {
            _callbackinitdelayed = false;
            if (_spBodyOnLoadFunctionNames != null)
                for (var h = _spBodyOnLoadFunctionNames.length, a = 0; a < h; a++)
                    if (_spBodyOnLoadFunctionNames[a] == "WebForm_InitCallback") {
                        _spBodyOnLoadFunctionNames.splice(a, 1);
                        break
                    }
            typeof window._WebForm_InitCallback == "function" && window._WebForm_InitCallback()
        }
        window._WebForm_DoCallback(e, c, d, g, b, f)
    }
    b.deferred = true;
    window.WebForm_DoCallback = b
}

function _ribbonShouldFixRtlHeaders(a) {
    return browseris.ie && browseris.iever == 7 && !browseris.ie8standard && a
}
var g_spDragDropUpload;

function WPQRegisterDragDropUpload() {
    var a = function() {
        for (var c in g_spDragDropUpload) {
            var a = g_spDragDropUpload[c],
                b = document.getElementById(c);
            b != null && typeof b != "undefined" && registerDragUpload(b, a.serverUrl, a.siteRelativeUrl, a.listName, a.rootFolder, a.overwriteAll, a.hideProgressBar, a.refreshFunc, a.preUploadFunc, a.postUploadFunc, a.checkPermissionFunc)
        }
    };
    EnsureScriptFunc("DragDrop.js", "registerDragUpload", a)
}

function SPDragUploadInfo(j, i, c, k, h, f, b, g, e, d, a) {
    this.webPartId = j;
    this.serverUrl = i;
    this.siteRelativeUrl = c;
    this.listName = k;
    this.rootFolder = h;
    this.overwriteAll = f;
    this.hideProgressBar = b;
    this.refreshFunc = g;
    this.preUploadFunc = e;
    this.postUploadFunc = d;
    this.checkPermissionFunc = a
}
var g_QuickLaunchControlIds;

function _registerCommonComponents() {
    SP.Ribbon.HelpPageComponent.registerWithPageManager();
    SP.Ribbon.UserInterfacePageComponent.registerWithPageManager()
}

function ExecuteAndRegisterBeginEndFunctions(d, a, c, b) {
    RegisterBeginEndFunctions(d, d, a, c, b);
    null != a && a();
    null != c && c();
    null != b && b()
}

function RegisterBeginEndFunctions(e, a, b, d, c) {
    if ("string" != typeof a) throw "Unexpected";
    if (!(null == b || "function" == typeof b)) throw "Unexpected";
    if (!(null == d || "function" == typeof d)) throw "Unexpected";
    if (!(null == c || "function" == typeof c)) throw "Unexpected";
    if (!g_supportFiles[a]) g_supportFiles[a] = {
        tag: a,
        scriptURI: new URI(e),
        beginFunc: b,
        endFunc: d,
        loadFunc: c,
        executed: false
    }
}

function RegisterModuleInit(a, b) {
    RegisterBeginEndFunctions(a, a, b, null, null)
}

function SetElementStyle(c, b) {
    var a = document.getElementById(c);
    if (typeof a != "undefined" && a != null && a.className != b) a.className = b
}

function RemoveCachingParamsFromUrl(a) {
    return RemoveQueryParameterFromUrl(RemoveQueryParameterFromUrl(a, "rev"), "ctag")
}

function registerCssLink(c, a, b) {
    _registerCssLink(c, null, function(b) {
        "undefined" != typeof g_MinimalDownload && g_MinimalDownload && "undefined" != typeof asyncDeltaManager && "undefined" != typeof AsyncDeltaManager$_registerLinkCallback && AsyncDeltaManager$_registerLinkCallback(b);
        "function" == typeof a && a(b)
    }, null, b)
}

function _ensureCssLink(c, a) {
    var b = _registerCssLink(c, null, null, a);
    b == 0 && a != null && a();
    return b
}

function setAdditionalCssLinkAttributes(c, b) {
    if (null == c || null == b) return;
    var a = b["data-original-href"];
    null != a && c.setAttribute("data-original-href", a)
}

function _registerCssLink(i, k, h, d, s, e) {
    var m = false,
        l = 0;
    if (null == k) k = document.getElementsByTagName("head")[0];
    for (var f = !s && SPThemeUtils.UseClientSideTheming(), c = k.getElementsByTagName(f ? "style" : "link"), u = c.length, p = f ? i : GetAbsoluteUrl(i), b = 0; b < u; b++)
        if (c[b].rel == "stylesheet" && c[b].type == "text/css" || f && c[b].hasAttribute("data-ThemingSource")) {
            var j = f ? c[b].getAttribute("data-ThemingSource") : c[b].href;
            if (null != j && j.length > 0) {
                if (p == j) {
                    var r = c[b].getAttribute("toDelete");
                    Boolean(r) && c[b].removeAttribute("toDelete");
                    null != e && setAdditionalCssLinkAttributes(c[b], e);
                    m = true;
                    break
                }
                if (RemoveCachingParamsFromUrl(p) == RemoveCachingParamsFromUrl(j)) return -1
            }
        }
    if (f && !m) {
        var o, g;
        if (null != e) g = e["data-original-href"];
        o = Theming.GetPageManager().AddCssLink(i, g, null, d, SPThemeUtils.UseCdnForCss() && null != g ? Theming.Utilities.MakeFixupCallbackForCssFile(g) : null);
        null != h && h(o);
        l = 1
    } else if (!m) {
        var a = document.createElement("link");
        a.rel = "stylesheet";
        a.type = "text/css";
        a.href = i;
        k.appendChild(a);
        null != e && setAdditionalCssLinkAttributes(a, e);
        if (browseris.chrome || browseris.safari) {
            var n = 10,
                v = Number(new Date),
                t = 500;
            setTimeout(bindArguments(function q(b, a) {
                if (a != null)
                    if (typeof a.sheet == "undefined" || a.sheet == null || typeof a.sheet.cssRules == "undefined" || a.sheet.cssRules == null)
                        if (Number(new Date) - b < t) setTimeout(bindArguments(q, b, a), n);
                        else typeof d == "function" && d();
                else a.sheet.cssRules && typeof d == "function" && d()
            }, v, a), n)
        } else if (typeof d == "function") {
            $addHandler(a, "load", d);
            Boolean(a.addEventListener) && a.addEventListener("error", d, false)
        }
        null != h && h(a);
        l = 1
    }
    return l
}

function replacePlaceholderElement(g, f) {
    var b = document.getElementById(g),
        a = document.createElement("span"),
        c = b.parentNode;
    a.innerHTML = f;
    var d = a.childNodes.length;
    switch (d) {
        case 0:
            break;
        case 1:
            c.replaceChild(a.childNodes[0], b);
            break;
        default:
            for (var e = 0; e < d; e++) c.insertBefore(a.childNodes[0], b);
            c.removeChild(b)
    }
}

function fIsNullOrUndefined(a) {
    return typeof a == "undefined" || a == null
}

function IsStrNullOrEmpty(a) {
    return a == null || a.length == 0
}

function bindArguments() {
    var a = arguments,
        b = Array.prototype.shift.call(a);
    return function() {
        return b.apply(this, a)
    }
}

function OpenSuiteLinksJson() {
    var a = null;
    GetSuiteLinks(null, function(b) {
        a = b
    });
    return a
}

function RecordClick(b, a) {
    EnsureScriptFunc("sp.pageinstrumentation.js", "SP.PageInstrumentation.Clicks", function() {
        SP.PageInstrumentation.Clicks.recordClick(b, a)
    })
}

function RecordClickForPaging(b, a, c) {
    EnsureScriptFunc("sp.pageinstrumentation.js", "SP.PageInstrumentation.Clicks", function() {
        SP.PageInstrumentation.Clicks.recordClickForPaging(b, a, c)
    })
}

function RecordClickClientId(a, b) {
    EnsureScriptFunc("sp.pageinstrumentation.js", "SP.PageInstrumentation.Clicks", function() {
        SP.PageInstrumentation.Clicks.recordClickClientId(a, b)
    })
}

function LogRUMExtendedAction(e, d, b, a, c) {
    EnsureScriptFunc("sp.core.js", "SP.SlapiInternal", function() {
        var g = SP.SlapiInternal,
            f = new g.RUMExtended;
        f.ActionName = e;
        if (typeof d != "undefined" && d != null) f.ActionId = d;
        if (typeof b != "undefined" && b != null) f.ActionGuid = b;
        if (typeof a != "undefined" && a != null) f.ActionDate = a;
        else f.ActionDate = +new Date;
        if (typeof c != "undefined" && c != null) f.ActionType = c;
        WriteLog(f)
    })
}

function _AddTrySPListNextBanner(n) {
    var l = '<div class="ms-fullWidth" style="background-color:#F8F8F8;position:relative;">  <div class="ms-tableCell ms-verticalAlignMiddle" style="width:256px;background-color:#24BBED;">    <img src=' + StAttrQuote("/_layouts/15/images/PaintRoller.215x90x32.png?rev=44") + ' style="height:90px;width:215px;margin:auto 20px;">  </div>  <div class="ms-tableCell ms-verticalAlignTop ms-fullWidth" style="padding:16px">\t<h2 style="color:#444">' + STSHtmlEncode(Boolean(n) ? Strings.STS.L_ListNewLookHeading : Strings.STS.L_DocLibNewLookHeading) + '      <span class="ms-dlgTitleBtns" style="margin-top:-23px">        <a title=' + StAttrQuote(Strings.STS.L_DocLibNewLookDismiss) + ' class="ms-dlgCloseBtn" id="doclibNewLookClose" href="javascript:;">          <span style="padding: 8px; width: 16px; height: 16px; display: inline-block;">            <span class="s4-clust" style="width: 16px; height: 16px; overflow: hidden; display: inline-block; position: relative;">              <img class="ms-dlgCloseBtnImg" style="left: 0px !important; top: -645px !important; position: absolute;" alt=' + StAttrQuote(Strings.STS.L_DocLibNewLookDismiss) + " src=" + StAttrQuote("/_layouts/15/images/fgimg.png?rev=44") + '>            </span>          </span>        </a>      </span>    </h2>    <p style="margin: 0px; padding: 8px 0px 60px; color:#444">' + STSHtmlEncode(Strings.STS.L_DocLibNewLookBody) + '</p>    <input class="ms-button-emphasize" id="doclibNewLookTry" style="position:absolute;bottom:16px;margin:0px;border-color:#005da1;background-color:#005da1;color:#fff" type="button" value=' + StAttrQuote(Strings.STS.L_DocLibNewLookCheckItOutButton) + "/>  </div></div><br/>\n",
        c = new f("SPNewDoclibBannerClose"),
        e = new f("SPNewDoclibBannerClosedSession", true);
    if (c.getValue() > 1 || e.getValue() > 0) return;
    var h = "doclibNewLookBanner",
        d = document.createElement("div");
    d.id = h;
    d.innerHTML = l;
    var b = document.getElementById("pageStatusBar"),
        g = b ? b.parentNode : null;
    if (!g) return;
    g.insertBefore(d, b);
    var i = document.getElementById("doclibNewLookClose");
    i && AddEvtHandler(i, "onclick", k);
    var j = document.getElementById("doclibNewLookTry");
    j && AddEvtHandler(j, "onclick", m);
    a("NewDoclibExperience_Banner_Rendered");

    function k() {
        var b = document.getElementById(h);
        if (b && b.parentNode) {
            b.parentNode.removeChild(b);
            b = null
        }
        e.incrementValue();
        var d = c.incrementValue();
        a("NewDoclibExperience_Banner_Close" + d.toString(10))
    }

    function m() {
        c.resetValue();
        a("NewDoclibExperience_Banner_Try");
        document.cookie = "splnu=1;path=/;";
        document.location.reload()
    }

    function a(a) {
        typeof SP != "undefined" && SP != null && SP.QoS != null && SP.QoS.WriteUserEngagement(a)
    }

    function f(b, a) {
        this._cacheKey = b;
        this._storage = !a ? BrowserStorage.local : BrowserStorage.session;
        this.getValue = function() {
            var a = Number(this._storage.getItem(this._cacheKey));
            return a ? a : 0
        };
        this.incrementValue = function() {
            var a = this.getValue() + 1;
            this._storage.setItem(this._cacheKey, a);
            return a
        };
        this.resetValue = function() {
            this._storage.removeItem(this._cacheKey)
        }
    }
}

function HandleDLPStatus() {
    document.getElementById("pageStatusBar") != null && EnsureScriptFunc("core.js", "ProcessDLPStatus", function() {
        ProcessDLPStatus()
    })
}

function GetCachedProfile() {
    return ProfileCache.GetCachedProfile()
}

function UserProfileLocalStoreKey() {
    return ProfileCache.UserProfileLocalStoreKey()
}

function getCtx(c) {
    if (fIsNullOrUndefined(g_ctxDict)) return undefined;
    for (var b in g_ctxDict) {
        var a = g_ctxDict[b];
        if (c == "WebPart" + a.wpq) return a
    }
    return undefined
}

function PageMinimized() {
    if (typeof PageMinimized.minimized === "undefined") {
        var a = new URI(ajaxNavigate.get_href());
        PageMinimized.minimized = Boolean(a.getQueryParameter("Minimized"));
        PageMinimized.minimized && AddCssClassToElement(document.body, "ms-fullscreenmode")
    }
    return PageMinimized.minimized
}

function IsXhrAborted(a) {
    try {
        if (a.readyState == 4 && (typeof a.status == "undefined" || a.status == 0)) return true
    } catch (b) {
        return true
    }
    return false
}

function IsXhrGoodAndReady(a) {
    try {
        if (a.readyState == 4 && a.status == 200) return true
    } catch (b) {
        return false
    }
    return false
}

function IsXhrReady(a) {
    try {
        if (a.readyState == 4) return true
    } catch (b) {
        return false
    }
    return false
}

function OverrideDefaultMethod(b, a, c) {
    return SupplementDefaultMethod(b, a, c, true)
}

function SupplementDefaultMethod(b, a, c, d) {
    var e = window[b];
    try {
        if (window.opener != null && window.opener.LogFromProduct != null) {
            var f = d ? "Overriding" : "Supplementing";
            window.opener.LogFromProduct("SupplementDefaultMethod -- " + f + " " + b + " with " + a)
        }
    } catch (g) {}
    window[b] = function(f, h, i, j, k) {
        var g = function(b) {
                if (c == 1) return b[a](f);
                else if (c == 3) return b[a](f, h, i);
                else if (c == 5) return b[a](f, h, i, j, k);
                else throw "Unexpected argument count in SupplementDefaultMethod";
            },
            b;
        try {
            if (Boolean(window.opener) && window != window.opener && Boolean(window.opener[a])) {
                b = g(window.opener);
                if (d) return b
            } else if (Boolean(window.frameElement) && Boolean(window.parent) && window != window.parent && typeof window.parent.opener != "undefined" && Boolean(window.parent.opener) && window != window.parent.opener && window.parent != window.parent.opener && Boolean(window.parent.opener[a])) {
                b = g(window.parent.opener);
                if (d) return b
            }
        } catch (l) {}
        return Boolean(e) ? Function.prototype.apply.call(e, window, arguments) : null
    }
}
var IMNControlObj, bIMNControlInited, IMNDictionaryObj, IMNDictionaryPresenceTextObj, bIMNSorted, bIMNOnloadAttached, IMNOrigScrollFunc, bIMNInScrollFunc, IMNSortableObj, IMNHeaderObj, IMNNameDictionaryObj, IMNNameDictionaryPresenceTextObj, IMNShowOfflineObj, OwaLang, OwaRoot, OwaSharedHoverCardJsKey, OwaSharedHoverCardStringsJsKey, ActiveSharedHoverCard, ActiveUserField, SharedHoverCardHideTimer, SharedHoverCardHideTime, SharedHoverCardDelayTimer, SharedHoverCardDelayTime, SharedHoverCardDelayed, SharedHoverCardContainer, sharedHoverCardShimParameters, SharedHoverCardShimParameters, sharedHoverCardShim, SharedHoverCardShim, serverSettings, slabManifest, jQueryPatch, SharedHoverCardDependenciesLoaded, SharedHoverCardDependenciesRegistered, FallbackToActiveX, SharedHoverCardBootStrapped, SharedHoverCardPending, currentShowHoverCardInstance, nextShowHoverCardInstance, currentShowHoverCardInstanceBootstrappedState;

function GetCurrentEvent(a) {
    return browseris.ie5up ? window.event : Boolean(a) ? a : window.event
}

function GetEventTarget(a) {
    return Boolean(a.srcElement) ? a.srcElement : a.target
}

function EnsureIMNControl() {
    if (!bIMNControlInited || IMNControlObj == null) {
        var b = typeof g_presenceEnabled != "undefined" && g_presenceEnabled;
        try {
            if (IsSupportedMacBrowser()) IMNControlObj = CreateMacPlugin();
            else if (IsSupportedNPApiBrowserOnWin()) {
                IMNControlObj = CreateNPApiOnWindowsPlugin("application/x-sharepoint-uc");
                if (IMNControlObj != null && b) IMNControlObj.OnStatusChange = IMNOnStatusChange
            } else if (browseris.ie5up)
                if (Boolean(window.ActiveXObject)) {
                    IMNControlObj = new ActiveXObject("Name.NameCtrl.1");
                    if (IMNControlObj && b) {
                        var a;
                        if (IsSupportedMacBrowser()) a = "IMNOnStatusChange";
                        else a = IMNOnStatusChange;
                        IMNControlObj.OnStatusChange = a
                    }
                }
            bIMNControlInited = true
        } catch (c) {
            IMNControlObj = null
        }
        AddEvtHandler(window, "onbeforeunload", DiscardIMNControl)
    }
    return IMNControlObj
}

function DiscardIMNControl() {
    if (typeof IMNHideOOUI == "undefined" || typeof IMNControlObj == "undefined" || typeof bIMNControlInited == "undefined") return;
    IMNHideOOUI();
    IMNControlObj = null;
    bIMNControlInited = false
}

function IMNImageInfo_InitializePrototype() {
    IMNImageInfo.prototype.img = null;
    IMNImageInfo.prototype.classPrefix = null;
    IMNImageInfo.prototype.alt = ""
}

function IMNImageInfo() {}

function IMNGetStatusImage(e, d) {
    var f = "spimn.png",
        a = "ms-spimn-presence-disconnected",
        b = "";
    switch (e) {
        case 0:
            a = "ms-spimn-presence-online";
            b = Strings.STS.L_IMNOnline_Text;
            break;
        case 11:
            a = "ms-spimn-presence-online-oof";
            b = Strings.STS.L_IMNOnline_OOF_Text;
            break;
        case 1:
            if (d) {
                a = "ms-spimn-presence-offline";
                b = Strings.STS.L_IMNOffline_Text
            } else {
                a = "";
                b = ""
            }
            break;
        case 12:
            if (d) {
                a = "ms-spimn-presence-offline-oof";
                b = Strings.STS.L_IMNOffline_OOF_Text
            } else {
                a = "";
                b = ""
            }
            break;
        case 2:
            a = "ms-spimn-presence-away";
            b = Strings.STS.L_IMNAway_Text;
            break;
        case 13:
            a = "ms-spimn-presence-away-oof";
            b = Strings.STS.L_IMNAway_OOF_Text;
            break;
        case 3:
            a = "ms-spimn-presence-busy";
            b = Strings.STS.L_IMNBusy_Text;
            break;
        case 14:
            a = "ms-spimn-presence-busy-oof";
            b = Strings.STS.L_IMNBusy_OOF_Text;
            break;
        case 4:
            a = "ms-spimn-presence-away";
            b = Strings.STS.L_IMNAway_Text;
            break;
        case 5:
            a = "ms-spimn-presence-busy";
            b = Strings.STS.L_IMNBusy_Text;
            break;
        case 6:
            a = "ms-spimn-presence-away";
            b = Strings.STS.L_IMNAway_Text;
            break;
        case 7:
            a = "ms-spimn-presence-busy";
            b = Strings.STS.L_IMNBusy_Text;
            break;
        case 8:
            a = "ms-spimn-presence-away";
            b = Strings.STS.L_IMNAway_Text;
            break;
        case 9:
            a = "ms-spimn-presence-donotdisturb";
            b = Strings.STS.L_IMNDoNotDisturb_Text;
            break;
        case 15:
            a = "ms-spimn-presence-donotdisturb-oof";
            b = Strings.STS.L_IMNDoNotDisturb_OOF_Text;
            break;
        case 21:
            a = "ms-spimn-presence-donotdisturb";
            b = Strings.STS.L_IMNInPresentation_Text;
            break;
        case 10:
            a = "ms-spimn-presence-busy";
            b = Strings.STS.L_IMNBusy_Text;
            break;
        case 16:
            a = "ms-spimn-presence-away";
            b = Strings.STS.L_IMNIdle_Text;
            break;
        case 17:
            a = "ms-spimn-presence-away-oof";
            b = Strings.STS.L_IMNIdle_OOF_Text;
            break;
        case 18:
            a = "ms-spimn-presence-blocked";
            b = Strings.STS.L_IMNBlocked_Text;
            break;
        case 19:
            a = "ms-spimn-presence-busy";
            b = Strings.STS.L_IMNBusy_Text;
            break;
        case 20:
            a = "ms-spimn-presence-busy-oof";
            b = Strings.STS.L_IMNBusy_OOF_Text
    }
    var c = new IMNImageInfo;
    c.img = f;
    c.classPrefix = a;
    c.alt = b;
    return c
}

function IMNGetHeaderImage() {
    var a = new IMNImageInfo;
    a.img = "imnhdr.gif";
    a.alt = "";
    return a
}

function IMNIsOnlineState(a) {
    return a == 1 ? false : true
}

function IMNSortList(g, e, f) {
    var d = null,
        b = null;
    if (Boolean(IMNSortableObj) && IMNSortableObj[g]) {
        b = document.getElementById(g);
        while (Boolean(b) && !(b.tagName == "TR" && typeof b.Sortable != "undefined")) b = b.parentNode;
        d = b;
        while (Boolean(d) && d.tagName != "TABLE") d = d.parentNode;
        var a = d.rows;
        if (d != null && b != null) {
            if (a[1].style.display == "none")
                for (var c = 1; c < 4; c++) a[c].style.display = "block";
            if (!IMNIsOnlineState(e) && IMNIsOnlineState(f)) {
                a[2].style.display = "none";
                c = 3;
                while (a[c].id != "Offline" && Number(a[c].innerText) < Number(b.innerText)) c++;
                typeof d.moveRow == "function" && d.moveRow(b.rowIndex, c);
                if (a[a.length - 3].id == "Offline") a[a.length - 2].style.display = "block"
            } else if (IMNIsOnlineState(e) && !IMNIsOnlineState(f)) {
                if (b.rowIndex == 3 && a[b.rowIndex + 1].id == "Offline") a[2].style.display = "block";
                if (a[a.length - 3].id == "Offline") a[a.length - 2].style.display = "none";
                c = a.length - 2;
                while (a[c - 1].id != "Offline" && Number(a[c].innerText) > Number(b.innerText)) c--;
                d.moveRow(b.rowIndex, c)
            }
        }
    }
}

function IMNOnStatusChange(e, b, a) {
    if (Boolean(IMNDictionaryObj) && typeof IMNDictionaryObj[a] != "undefined") {
        var d = IMNGetStatusImage(b, IMNSortableObj[a] || IMNShowOfflineObj[a]);
        if (IMNDictionaryObj[a] != b) {
            bIMNSorted && IMNSortList(a, IMNDictionaryObj[a], b);
            IMNUpdateImage(a, d);
            IMNDictionaryObj[a] = b
        }
    }
    if (Boolean(IMNDictionaryPresenceTextObj) && typeof IMNDictionaryPresenceTextObj[a] != "undefined") {
        var c = document.getElementById(a);
        IMNUpdatePresenceText(c, b)
    }
}

function IMNUpdateImageClassPrefix(b, c) {
    var d = /ms-spimn-presence-[a-zA-Z]*-([0-9])/i,
        a = b.getAttribute("class");
    a != null && b.setAttribute("class", a.replace(d, c + "-$1"))
}

function IMNUpdateImage(l, e) {
    var a = document.images[l];
    if (Boolean(a)) {
        var d = a.parentNode;
        d.firstChild != a && d.insertBefore(a, d.firstChild);
        var f = e.img,
            g = e.classPrefix,
            k = e.alt,
            c = a.src;
        if (typeof a.src == "undefined") c = a.item(0).src;
        var i = c.lastIndexOf("/"),
            b = c.slice(0, i + 1);
        b += f;
        IMNUpdateImageClassPrefix(a, g);
        if (c == b && f != "blank.gif") return;
        if (typeof a.altbase != "undefined" && Boolean(a.altbase)) a.alt = a.altbase;
        else if (typeof a.getAttribute("altbase") != "undefined" && Boolean(a.getAttribute("altbase"))) a.alt = a.getAttribute("altbase");
        else a.alt = k;
        var h = browseris.ie && browseris.ie55up && browseris.verIEFull < 7,
            j = b.toLowerCase().indexOf(".png") > 0;
        if (h)
            if (j) {
                a.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + b + "),sizingMethod=scale,enabled=true);";
                a.src = "/_layouts/15/images/blank.gif?rev=44"
            } else {
                a.style.filter = "";
                a.src = b
            }
        else a.src = b
    }
}

function IMNHandleAccelerator(b) {
    if (IMNControlObj) {
        var a = GetCurrentEvent(b);
        if (a.altKey && a.shiftKey && a.keyCode == 121) typeof IMNControlObj.DoAccelerator != "undefined" && IMNControlObj.DoAccelerator()
    }
}

function IMNImageOnClick(a) {
    if (IMNControlObj) {
        IMNShowOOUIKyb(a);
        typeof IMNControlObj.DoAccelerator != "undefined" && IMNControlObj.DoAccelerator();
        HideSharedHoverCard()
    }
}

function IMNGetOOUILocation(m) {
    var g = {},
        a = m,
        c = m,
        o = m,
        h = 0,
        i = 0,
        t = 0,
        u = document.dir == "rtl",
        k = a.className;
    while (Boolean(a) && (k == null || k.indexOf("ms-imnSpan") == -1) && a.tagName != "TABLE") {
        if (a.tagName == "TD" && k.indexOf("ms-vb") >= 0) break;
        a = a.parentNode;
        if (!Boolean(a)) return null;
        k = a.className
    }
    if (Boolean(a)) {
        var b;
        if (a.tagName == "TABLE") {
            var s = a.rows(0),
                r = s.cells(0);
            b = r.firstChild
        } else b = a.firstChild;
        while (b != null) {
            if (b.tagName == "A") {
                var d = b.firstChild;
                while (d != null) {
                    if (d.tagName == "IMG" && Boolean(d.id)) {
                        b = d;
                        break
                    }
                    d = d.firstChild
                }
            }
            if (b.tagName == "IMG" && Boolean(b.id)) {
                c = b;
                break
            }
            b = b.nextSibling
        }
        o = c;
        c = a
    }
    m = c;
    var j = 1;
    if (Boolean(browseris.ie9standardUp)) j = window.screen.deviceXDPI / window.screen.logicalXDPI;
    i = c.getBoundingClientRect().top * j - 5;
    h = c.getBoundingClientRect().left * j - 5;
    var f = c.parentNode;
    while ((h < 0 || i < 0) && f != null && Boolean(f.getBoundingClientRect)) {
        i = f.getBoundingClientRect().top * j - 5;
        h = f.getBoundingClientRect().left * j - 5;
        f = f.parentNode
    }
    try {
        var e = window;
        while (Boolean(e) && e != e.parent) {
            var n = e.frameElement,
                l = Boolean(n) ? n.getBoundingClientRect() : null,
                q = Boolean(l) ? l.top : 0,
                p = Boolean(l) ? l.left : 0;
            i += q;
            h += p;
            e = e.parent
        }
    } catch (v) {}
    g.objSpan = a;
    g.objOOUI = c != a ? c : o;
    g.oouiX = h;
    g.oouiY = i;
    return g
}

function IMNShowOOUIMouse(a) {
    IMNShowOOUI(a, 0)
}

function IMNShowOOUIKyb(a) {
    IMNShowOOUI(a, 1)
}

function IMNShowOOUI(j, i) {
    if (browseris.ie5up || IsSupportedMacBrowser() || IsSupportedNPApiBrowserOnWin()) {
        var b = GetCurrentEvent(j),
            f = GetEventTarget(b),
            d = f,
            g = f,
            e = 0,
            h = 0;
        if (EnsureIMNControl() && Boolean(IMNNameDictionaryObj)) {
            var a = IMNGetOOUILocation(f);
            if (Boolean(a)) {
                d = a.objSpan;
                g = a.objOOUI;
                e = a.oouiX;
                h = a.oouiY;
                if (Boolean(b.clientX)) e = b.clientX;
                var c = IMNNameDictionaryObj[g.id];
                if (c == null || c.length < 1) return;
                if (Boolean(d)) d.onkeydown = IMNHandleAccelerator;
                typeof IMNControlObj.ShowOOUI != "undefined" && IMNControlObj.ShowOOUI(c, i, Math.round(e), Math.round(h))
            }
        }
    }
}

function IMNHideOOUI() {
    if (Boolean(IMNControlObj)) {
        typeof IMNControlObj.HideOOUI != "undefined" && IMNControlObj.HideOOUI();
        return false
    }
    return true
}

function IMNScroll() {
    if (!bIMNInScrollFunc) {
        bIMNInScrollFunc = true;
        IMNHideOOUI()
    }
    bIMNInScrollFunc = false;
    return IMNOrigScrollFunc == IMNScroll ? true : Boolean(IMNOrigScrollFunc) ? IMNOrigScrollFunc() : true
}
var imnCount, imnElems, imnElemsCount, imnMarkerBatchSize, imnMarkerBatchDelay, sharedHoverCardsCount, sharedHoverCardElements, sharedHoverCardElementsCount, sharedHoverCardMarkerBatchSize, sharedHoverCardMarkerBatchDelay, IsIFrameSharedHoverCard, SharedHoverCardIFrame, SharedHoverCardIFrameCode;

function GetHoverCardJsUrls(c) {
    var b = new Array(0);
    if (IsIFrameSharedHoverCard || _v_dictSod == null) return b;
    for (var a = 0; a < c.length; a++) {
        var d = _v_dictSod[c[a]];
        b[a] = d == null ? "" : d.url
    }
    return b
}

function InitIFrameSharedHoverCard() {
    IsIFrameSharedHoverCard = true;
    sharedHoverCardsCount = 0;
    if (window.parent != null) {
        var a = new Array(0);
        a[0] = OwaSharedHoverCardJsKey;
        a[1] = OwaSharedHoverCardStringsJsKey;
        for (var d = parent.window.GetHoverCardJsUrls(a), b = 0; b < d.length; b++) {
            var c = d[b];
            c != null && c.length > 0 && RegisterSod(a[b], c)
        }
    }
    RenderSharedHoverCardContainer()
}

function ProcessImn() {
    if (typeof _spPageContextInfo == "undefined" || _spPageContextInfo == null) return;
    if (typeof _spPageContextInfo.userId == "undefined" || _spPageContextInfo.userId == String(-1)) return;
    imnCount = 0;
    imnElems = document.getElementsByName("imnmark");
    imnElemsCount = imnElems.length;
    if (EnsureIMNControl()) ProcessImnMarkers();
    else RemoveImnAnchors();
    if (IsPeopleHoverCardEnabled()) {
        sharedHoverCardsCount = 0;
        sharedHoverCardElements = document.getElementsByName("SharedHoverCardMarker");
        sharedHoverCardElementsCount = sharedHoverCardElements.length;
        if (sharedHoverCardElementsCount > 0) {
            ProcessSharedHoverCardMarkers();
            RenderSharedHoverCardContainer()
        }
    }
}

function ClientCanHandleImn() {
    return EnsureIMNControl() && typeof IMNControlObj.PresenceEnabled != "undefined" && IMNControlObj.PresenceEnabled
}

function RemoveImnAnchors() {
    for (var b = 0; b < imnElemsCount; b++) {
        var c = imnElems[b],
            a = c.parentNode;
        while (a != null && !IsImnAnchor(a)) {
            c = a;
            a = a.parentNode
        }
        if (IsImnAnchor(a) && a.childNodes.length == 1) {
            a.setAttribute("tabIndex", "-1");
            a.onclick = null
        }
    }
    var d = document.getElementsByName("imnempty");
    for (b = 0; b < d.length; b++) {
        c = d[b];
        a = c.parentNode;
        a != null && a.tagName == "SPAN" && !Boolean(a.getAttribute("title")) && a.appendChild(c)
    }
}

function ProcessImnMarkers() {
    for (var b = 0; b < imnMarkerBatchSize; ++b) {
        if (imnCount == imnElemsCount) return;
        var a = imnElems[imnCount];
        a != null && typeof a != "undefined" && IMNRC(a.getAttribute("sip"), a);
        imnCount++
    }
    setTimeout("ProcessImnMarkers()", imnMarkerBatchDelay)
}

function IMNRC(d, h) {
    if (d == null || d == "") return;
    var g = typeof g_presenceEnabled != "undefined" && g_presenceEnabled && EnsureIMNControl() && IMNControlObj.PresenceEnabled;
    if (browseris.ie5up || IsSupportedMacBrowser() || IsSupportedNPApiBrowserOnWin()) {
        var b = Boolean(h) ? h : window.event.srcElement,
            c = b,
            a = b.id;
        if (!Boolean(IMNDictionaryObj)) {
            IMNDictionaryObj = {};
            IMNNameDictionaryObj = {};
            IMNSortableObj = {};
            IMNShowOfflineObj = {};
            if (!Boolean(IMNOrigScrollFunc)) {
                if (typeof window.onscroll != "undefined") IMNOrigScrollFunc = window.onscroll;
                window.onscroll = IMNScroll
            }
        }
        if (Boolean(IMNDictionaryObj)) {
            if (!IMNNameDictionaryObj[a]) IMNNameDictionaryObj[a] = d;
            if (typeof IMNDictionaryObj[a] == "undefined") IMNDictionaryObj[a] = 1;
            if (!IMNSortableObj[a] && typeof b.Sortable != "undefined") {
                IMNSortableObj[a] = b.Sortable;
                if (!bIMNOnloadAttached && g) {
                    AttachEvent("load", IMNSortTable, window);
                    bIMNOnloadAttached = true
                }
            }
            if (!IMNShowOfflineObj[a] && b.getAttribute("ShowOfflinePawn") != null) IMNShowOfflineObj[a] = b.getAttribute("ShowOfflinePawn");
            if (g) {
                var e = 1,
                    i;
                if (typeof IMNControlObj.GetStatus != "undefined") e = IMNControlObj.GetStatus(d, a);
                if (IMNIsOnlineState(e) || IMNSortableObj[a] || IMNShowOfflineObj[a]) {
                    i = IMNGetStatusImage(e, IMNSortableObj[a] || IMNShowOfflineObj[a]);
                    IMNUpdateImage(a, i);
                    IMNDictionaryObj[a] = e
                }
            }
        }
        var f = IMNGetOOUILocation(b);
        if (Boolean(f)) {
            SetImnOnClickHandler(f.objOOUI);
            c = f.objSpan;
            if (Boolean(c))
                if (!IsPeopleHoverCardEnabled()) {
                    c.onmouseover = IMNShowOOUIMouse;
                    c.onfocusin = IMNShowOOUIKyb;
                    c.onmouseout = IMNHideOOUI;
                    c.onfocusout = IMNHideOOUI
                }
        }
    }
}

function IsImnAnchor(b) {
    if (!Boolean(b)) return false;
    var a = b.className;
    return a != null && a.indexOf("ms-imnlink") != -1
}

function SetImnOnClickHandler(d) {
    var b = d.parentNode,
        a = b,
        e = a.className;
    while (Boolean(a) && !IsImnAnchor(a)) a = a.parentNode;
    if (Boolean(a)) b = a;
    if (IsImnAnchor(b)) {
        if (typeof b.onclick == "undefined") b.onclick = IMNImageOnClickHandler
    } else {
        var c = document.createElement("a");
        c.onclick = IMNImageOnClickHandler;
        c.className = "ms-imnlink";
        c.href = "javascript:;";
        b.insertBefore(c, d);
        c.appendChild(d)
    }
}

function IMNImageOnClickHandler(a) {
    IMNImageOnClick(a);
    return false
}

function IMNSortTable() {
    var a;
    for (a in IMNDictionaryObj) IMNSortList(a, 1, IMNDictionaryObj[a]);
    bIMNSorted = true
}

function IMNRegisterHeader(d) {
    if (browseris.ie5up || IsSupportedMacBrowser() || IsSupportedNPApiBrowserOnWin()) {
        var b = GetCurrentEvent(d);
        if (b == null) return;
        var e = GetEventTarget(b);
        if (!Boolean(IMNHeaderObj)) IMNHeaderObj = {};
        if (Boolean(IMNHeaderObj)) {
            var a = e.id;
            IMNHeaderObj[a] = a;
            var c;
            c = IMNGetHeaderImage();
            IMNUpdateImage(a, c)
        }
    }
}

function ProcessSharedHoverCardMarkers() {
    for (var b = 0; b < sharedHoverCardMarkerBatchSize; ++b) {
        if (sharedHoverCardsCount == sharedHoverCardElementsCount) return;
        var a = sharedHoverCardElements[sharedHoverCardsCount];
        a != null && typeof a != "undefined" && AddSharedHoverCardHandlers(a.getAttribute("sip"), a);
        sharedHoverCardsCount++
    }
    setTimeout("ProcessSharedHoverCardMarkers()", sharedHoverCardMarkerBatchDelay)
}

function AddSharedHoverCardHandlers(b, a) {
    if (b == null || b == "" || a == null) return;
    if (!IsIFrameSharedHoverCard) {
        a.onmouseover = ShowSharedHoverCardHandler;
        a.onmouseout = HideSharedHoverCardHandler
    }
}

function ShowSharedHoverCardHandler(e) {
    if (IsPeopleHoverCardEnabled()) {
        var d = GetCurrentEvent(e),
            c = GetEventTarget(d);
        if (Boolean(c)) {
            var a = GetUserField(c);
            if (a != null) {
                var f = a.getAttribute("sip"),
                    b = SharedHoverCardContainer;
                if (Boolean(b)) {
                    CancelSharedHoverCardHideTimer();
                    if (ActiveUserField != a) {
                        SharedHoverCardDelayTimer != null && clearTimeout(SharedHoverCardDelayTimer);
                        SharedHoverCardDelayed = b;
                        SharedHoverCardDelayTimer = setTimeout(function() {
                            if (IsIFrameSharedHoverCard) {
                                SharedHoverCardDelayed = null;
                                ShowSharedHoverCard(b, a)
                            } else {
                                var c = SharedHoverCardIFrame != null ? SharedHoverCardIFrame.contentWindow : null;
                                if (Boolean(c) && Boolean(c.IFrameShowSharedHoverCard)) {
                                    SP.QoS.WriteUserEngagement("SharedHoverCard_ShowCard");
                                    SharedHoverCardDelayed = null;
                                    ShowSharedHoverCard(b, a);
                                    c.IFrameShowSharedHoverCard(a)
                                }
                            }
                        }, SharedHoverCardDelayTime)
                    }
                }
            }
        }
    }
}

function SharedHoverCardLogRUMExtendedAction(c, e, b, a, d) {
    LogRUMExtendedAction(c, e, b, a, d)
}

function IFrameShowSharedHoverCard(a) {
    ShowSharedHoverCard(SharedHoverCardContainer, a)
}

function ShowSharedHoverCard(a, b) {
    if (Boolean(a) && (a.style.visibility != "" || ActiveUserField != b)) {
        currentShowHoverCardInstanceBootstrappedState = Boolean(SharedHoverCardBootStrapped);
        currentShowHoverCardInstance = nextShowHoverCardInstance++;
        var e = +new Date,
            d = currentShowHoverCardInstanceBootstrappedState ? "ShowHoverCardWithBootStrappedBegin" : "ShowHoverCardWithoutBootStrappedBegin";
        if (IsIFrameSharedHoverCard) parent.SharedHoverCardLogRUMExtendedAction(d, currentShowHoverCardInstance, null, e, null);
        else LogRUMExtendedAction(d, currentShowHoverCardInstance, null, e, null);
        Boolean(ActiveSharedHoverCard) && ActiveUserField != b && HideSharedHoverCard();
        ActiveSharedHoverCard = a;
        ActiveUserField = b;
        a.style.display = "block";
        PositionSharedHoverCard(a, b);
        SPAnimationUtility.BasicAnimator.FadeIn(a);
        var c = a.firstChild,
            f = a.lastChild;
        c.style.visibility = "";
        c.style.display = "block";
        if (IsIFrameSharedHoverCard) {
            !SharedHoverCardDependenciesRegistered && RegisterSharedHoverCardDependencies();
            a.style.left = "0px";
            a.style.top = "0px";
            var g = b.getAttribute("sip"),
                h = b.getAttribute("userTitle");
            RenderSharedHoverCard(f, g, h)
        }
    }
}

function PositionSharedHoverCard(b, c) {
    if (c == null || b == null) return;
    var a = IMNGetPosition(c),
        d = IMNGetDocumentClientWidth(),
        f = IMNGetScrollX(),
        e = a.X + b.offsetWidth - f;
    if (e > d) a.X = a.X - (e - d) - 2;
    b.style.left = a.X + "px";
    b.style.top = String(a.Y + c.offsetHeight) + "px"
}

function IMNGetScrollX() {
    var b = 0,
        a = IMNGetSharepointWorkspace();
    if (Boolean(a)) b = a.scrollLeft;
    return b
}

function HideSharedHoverCard() {
    if (!IsIFrameSharedHoverCard && Boolean(ActiveSharedHoverCard)) {
        SPAnimationUtility.BasicAnimator.FadeOut(ActiveSharedHoverCard);
        ActiveSharedHoverCard.style.visibility = "hidden";
        ActiveSharedHoverCard.style.display = "none";
        ActiveSharedHoverCard = null;
        ActiveUserField = null;
        SharedHoverCardPending = null
    }
}

function GetUserField(a) {
    while (Boolean(a)) {
        if (a.getAttribute != null)
            if (a.getAttribute("name") == "SharedHoverCardMarker") break;
        a = a.parentNode
    }
    return a
}

function SetSharedHoverCardHideTimer() {
    SharedHoverCardHideTimer = setTimeout(function() {
        Boolean(ActiveSharedHoverCard) && HideSharedHoverCard()
    }, SharedHoverCardHideTime)
}

function HideSharedHoverCardHandler(a) {
    if (Boolean(a) && a.type == "mouseout") {
        var c = Boolean(a.relatedTarget) ? a.relatedTarget : a.toElement,
            b = a.currentTarget;
        if (!Boolean(c) || !Boolean(b)) return;
        if (!IMNIsDescendant(c, b)) {
            CancelSharedHoverCardDelayTimer();
            SetSharedHoverCardHideTimer()
        }
    } else {
        CancelSharedHoverCardDelayTimer();
        SetSharedHoverCardHideTimer()
    }
}

function CancelSharedHoverCardHideTimer() {
    Boolean(SharedHoverCardHideTimer) && clearTimeout(SharedHoverCardHideTimer)
}

function CancelSharedHoverCardDelayTimer() {
    if (Boolean(SharedHoverCardDelayTimer)) {
        SharedHoverCardDelayed = null;
        clearTimeout(SharedHoverCardDelayTimer)
    }
}

function IMNIsDescendant(a, b) {
    if (!Boolean(a) || !Boolean(b)) return false;
    while (Boolean(a) && a != b) a = a.parentNode;
    return a == b
}

function IsPeopleHoverCardEnabled() {
    return Flighting.VariantConfiguration.IsExpFeatureClientEnabled(0) && !FallbackToActiveX
}

function IMNGetPosition(a) {
    var b = {},
        d = 0,
        c = 0,
        e = IMNGetSharepointWorkspace();
    while (a != null && a != e) {
        d += a.offsetTop;
        c += a.offsetLeft;
        a = a.offsetParent
    }
    b.X = c;
    b.Y = d;
    return b
}

function IMNGetDocumentClientWidth() {
    var b = 0,
        a = IMNGetSharepointWorkspace();
    if (Boolean(a) && Boolean(a.clientWidth)) b = a.clientWidth;
    else if (Boolean(document.documentElement) && Boolean(document.documentElement.clientWidth)) b = document.documentElement.clientWidth;
    return b
}

function IMNGetSharepointWorkspace() {
    var a = null;
    if (typeof g_Workspace != "undefined") a = document.getElementById(g_Workspace);
    if (a == null) a = document.body;
    return a
}

function RenderSharedHoverCardContainer() {
    if (SharedHoverCardContainer == null) {
        SharedHoverCardContainer = CreateSharedHoverCardContainer();
        if (!IsIFrameSharedHoverCard) {
            SharedHoverCardIFrame = document.createElement("IFRAME");
            if (browseris.firefox3up) SharedHoverCardIFrame.setAttribute("src", GetPassThroughProxyRoot() + "/SHCIFrameContainer.html");
            else {
                SharedHoverCardIFrame.onload = function() {
                    SharedHoverCardIFrame.onload = function() {};
                    var a = SharedHoverCardIFrame.contentWindow.document;
                    a.open();
                    a.write(SharedHoverCardIFrameCode);
                    a.close()
                };
                SharedHoverCardIFrame.setAttribute("src", "about:blank")
            }
            SharedHoverCardIFrame.style.cssText = "min-height: 400px;min-width: 500px;";
            SharedHoverCardContainer.appendChild(SharedHoverCardIFrame);
            SharedHoverCardContainer.onmouseover = SharedHoverCardOnMouseOverHandler;
            SharedHoverCardContainer.onfocusin = SharedHoverCardOnMouseOverHandler;
            SharedHoverCardContainer.onmouseout = HideSharedHoverCardHandler;
            SharedHoverCardContainer.onfocusout = HideSharedHoverCardHandler
        }
        var a = IMNGetSharepointWorkspace();
        a.appendChild(SharedHoverCardContainer)
    }
}

function SharedHoverCardOnMouseOverHandler(b) {
    var a = GetCurrentEvent(b),
        c = GetEventTarget(a);
    Boolean(c) && CancelSharedHoverCardHideTimer()
}

function CreateSharedHoverCardContainer() {
    var a = document.createElement("div");
    if (IsIFrameSharedHoverCard) {
        a.style.cssText = "z-index: 1001;background-color: #FFFFFF;min-height: 98px;min-width: 481px;";
        a.style.position = "absolute";
        a.style.border = "0px";
        a.style.display = "none";
        a.style.visibility = "hidden";
        a.appendChild(CreateSpinningWheelContainer());
        a.appendChild(CreateSharedCardContainer())
    } else {
        a.style.cssText = "box-sizing: border-box;box-shadow: 0px 0px 7px rgba(0,0,0,0.4);z-index: 1001;background-color: #FFFFFF;min-height: 401px;min-width: 501px;";
        a.style.position = "absolute";
        a.style.border = "1px solid #DEDEDE";
        a.style.display = "none";
        a.style.visibility = "hidden"
    }
    return a
}

function CreateSpinningWheelContainer() {
    var a = document.createElement("div");
    a.style.display = "none";
    a.style.visibility = "hidden";
    var b = document.createElement("img");
    b.src = "/_layouts/15/images/gears_anv4.gif?rev=44";
    a.appendChild(b);
    return a
}

function CreateSharedCardContainer() {
    var a = document.createElement("div");
    a.style.display = "none";
    a.style.visibility = "hidden";
    return a
}

function RenderSharedHoverCard(b, a, c) {
    if (SharedHoverCardBootStrapped) typeof sharedHoverCardShim.createSharedHoverCard != "undefined" && sharedHoverCardShim.createSharedHoverCard(b, a, c, IMNGetPresence(a));
    else {
        SharedHoverCardPending = {};
        SharedHoverCardPending.TargetElement = b;
        SharedHoverCardPending.UserEmail = a;
        SharedHoverCardPending.UserTitle = c
    }
}

function IMNGetRelativeUrl() {
    if (IsIFrameSharedHoverCard && parent != window) {
        var b = parent;
        return b.IMNGetRelativeUrl()
    }
    var a = "";
    if (typeof _spPageContextInfo != "undefined" && typeof _spPageContextInfo.webServerRelativeUrl != "undefined") a = _spPageContextInfo.webServerRelativeUrl;
    else a = "/";
    if (a.lastIndexOf("/") != a.length - 1) a += "/";
    return a
}

function IMNGetExchangeServerVersion() {
    var a = "";
    if (typeof serverSettings != "undefined" && typeof serverSettings.version != "undefined") a = serverSettings.version;
    return a
}

function IMNGetScriptKey(c) {
    var a = c;
    if (a != null && a != "") {
        var b = a.lastIndexOf("/");
        if (b != -1) a = c.substring(b + 1)
    }
    return a
}

function SharedHoverCardRenderComplete() {
    function f(d) {
        var a = SharedHoverCardContainer.getElementsByClassName(d);
        if (a == null) return;
        for (var c = 0; c < a.length; c++) {
            var b = a[c];
            if (b != null) {
                b.style.minWidth = "0px";
                b.style.marginLeft = "0px"
            }
        }
    }

    function c() {
        f("o365button");
        var a = SharedHoverCardContainer.getElementsByClassName("image-personcard_event_mo-png");
        if (a != null)
            for (var c = 0; c < a.length; c++) {
                var b = a[c];
                if (b != null && b.parentNode != null) b.parentNode.style.display = "none"
            }
    }
    if (SharedHoverCardContainer != null) {
        var e = +new Date,
            d = currentShowHoverCardInstanceBootstrappedState ? "ShowHoverCardWithBootStrappedEnd" : "ShowHoverCardWithoutBootStrappedEnd";
        if (IsIFrameSharedHoverCard) parent.SharedHoverCardLogRUMExtendedAction(d, currentShowHoverCardInstance, null, e, null);
        else LogRUMExtendedAction(d, currentShowHoverCardInstance, null, e, null);
        var b = SharedHoverCardContainer.firstChild,
            a = SharedHoverCardContainer.lastChild;
        if (b != null && a != null) {
            if (typeof window.chrome != "undefined") a.addEventListener("DOMNodeInserted", c, false);
            else a.addEventListener("DOMAttrModified", c, false);
            b.style.display = "none";
            b.style.visibility = "hidden";
            a.style.display = "table";
            a.style.visibility = ""
        }
    }
}

function GetPassThroughProxyRoot() {
    return IMNGetRelativeUrl() + "_api/OWAWebService"
}

function GetLayoutsRoot() {
    if (IsIFrameSharedHoverCard && parent != window) {
        var b = parent;
        return b.GetLayoutsRoot()
    }
    var a = "_layouts/15/";
    if (typeof _spPageContextInfo != "undefined" && typeof _spPageContextInfo.layoutsUrl != "undefined") a = _spPageContextInfo.layoutsUrl;
    a = IMNGetRelativeUrl() + a;
    if (a.lastIndexOf("/") != a.length - 1) a += "/";
    return a
}

function bootStrapComplete() {
    SharedHoverCardBootStrapped = true;
    ActiveSharedHoverCard != null && ActiveUserField != null && SharedHoverCardPending != null && RenderSharedHoverCard(SharedHoverCardPending.TargetElement, SharedHoverCardPending.UserEmail, SharedHoverCardPending.UserTitle)
}

function GetOwaServiceURL() {
    return GetPassThroughProxyRoot() + "/service.svc?action={0}"
}

function GetGetPersonaPhotoURL() {
    return GetPassThroughProxyRoot() + "/service.svc/s/GetPersonaPhoto"
}

function RegisterSharedHoverCardDependencies() {
    var a = GetLayoutsRoot(),
        c = document.createElement("link");
    c.href = a + OwaRoot + "resources/themes/base/0/sharedhovercard.css";
    c.rel = "stylesheet";
    c.type = "text/css";
    document.getElementsByTagName("head")[0].appendChild(c);
    var b = document.createElement("script");
    b.text = 'var slabManifest = {"boot":{"Types":["IBasePersonaViewModelFactory"],"Configurations":[{"type":"ReadPersonCardComponent"},{"type":"SharedHoverCardComponent"}]}};var st = new Date();var sver = 0';
    document.getElementsByTagName("head")[0].appendChild(b);
    b = document.createElement("script");
    b.text = 'var serverSettings = {"version": "version","startTime": st,"cdnEndpoint": "","mapControlUrl": "","appDomainAppVirtualPath": "/owa","layout": "mouse","uiCulture": "en-US","uiTheme": "base","uiLang": "en","scriptsFolder": "' + a + '","resourcesFolder": "' + a + OwaRoot + 'resources","themedImagesFolderFormat": "' + a + OwaRoot + 'resources/themes/base/images/0","bootType": "SharedHoverCard","stylesLocale": "0","stylesFolderFormat": "' + a + OwaRoot + 'resources/themes/base/0"};';
    document.getElementsByTagName("head")[0].appendChild(b);
    EnsureScriptFunc(OwaSharedHoverCardJsKey, "SharedHoverCardShim", function() {
        EnsureScriptFunc(OwaSharedHoverCardStringsJsKey, "", function() {
            BootstrapHoverCard()
        })
    });
    SharedHoverCardDependenciesRegistered = true
}

function FallBackToActiveX() {
    FallbackToActiveX = true;
    HideSharedHoverCard();
    sharedHoverCardsCount = 0;
    RemoveSharedHoverCardHandlers();
    ProcessImn()
}

function OwaServiceRequestHeadersDelegate() {
    if (IsIFrameSharedHoverCard && parent != window) return parent.OwaServiceRequestHeadersDelegate();
    if (!fIsNullOrUndefined(window._spPageContextInfo) && !fIsNullOrUndefined(window._spFormDigestRefreshInterval) && !fIsNullOrUndefined(UpdateFormDigest)) {
        var c = window._spPageContextInfo;
        UpdateFormDigest(c.webServerRelativeUrl, window._spFormDigestRefreshInterval)
    }
    var a = {},
        b = document.getElementById("__REQUESTDIGEST");
    if (Boolean(b)) a["X-RequestDigest"] = b.value;
    return a
}

function BootstrapHoverCard() {
    function b(a) {
        if (fIsNullOrUndefined(a) || a == "" || fIsNullOrUndefined(IMNControlObj)) return;
        if (IsIFrameSharedHoverCard) parent.location.assign("IM:<sip:" + a + ">");
        else window.location.assign("IM:<sip:" + a + ">")
    }

    function c(a) {
        if (fIsNullOrUndefined(a) || a == "") return;
        if (IsIFrameSharedHoverCard) parent.location.assign("MailTo:<" + a + ">");
        else window.location.assign("MailTo:<" + a + ">")
    }
    SharedHoverCardDependenciesLoaded = true;
    if (sharedHoverCardShim == null) {
        if (typeof SharedHoverCardShimParameters != "undefined" && typeof SharedHoverCardShimParameters.prototype.set_serverSettings != "undefined" && typeof SharedHoverCardShimParameters.prototype.set_slabManifest != "undefined" && typeof SharedHoverCardShimParameters.prototype.set_cardCreatedCallBack != "undefined" && typeof SharedHoverCardShimParameters.prototype.set_bootStrapCallBack != "undefined" && typeof SharedHoverCardShimParameters.prototype.set_openImConversationCallBack != "undefined" && typeof SharedHoverCardShimParameters.prototype.set_openEmailComposeCallBack != "undefined" && typeof SharedHoverCardShimParameters.prototype.set_owaServiceUrl != "undefined" && typeof SharedHoverCardShimParameters.prototype.set_getOwaServiceRequestHeaders != "undefined" && typeof SharedHoverCardShimParameters.prototype.set_getCustomGetPhotoUrl != "undefined" && typeof SharedHoverCardShim != "undefined" && typeof SharedHoverCardShim.createInstance != "undefined") {
            sharedHoverCardShimParameters = new SharedHoverCardShimParameters;
            sharedHoverCardShimParameters.set_serverSettings(serverSettings);
            sharedHoverCardShimParameters.set_slabManifest(slabManifest);
            sharedHoverCardShimParameters.set_cardCreatedCallBack(SharedHoverCardRenderComplete);
            sharedHoverCardShimParameters.set_bootStrapCallBack(bootStrapComplete);
            sharedHoverCardShimParameters.set_openImConversationCallBack(b);
            sharedHoverCardShimParameters.set_openEmailComposeCallBack(c);
            sharedHoverCardShimParameters.set_owaServiceUrl(GetOwaServiceURL());
            sharedHoverCardShimParameters.set_getOwaServiceRequestHeaders(OwaServiceRequestHeadersDelegate);
            sharedHoverCardShimParameters.set_getCustomGetPhotoUrl(GetGetPersonaPhotoURL());
            sharedHoverCardShim = SharedHoverCardShim.createInstance(sharedHoverCardShimParameters)
        }
        if (sharedHoverCardShim == null && typeof SharedHoverCardShim != "undefined") {
            var a = {};
            a["X-RequestDigest"] = document.getElementById("__REQUESTDIGEST").value;
            sharedHoverCardShim = new SharedHoverCardShim(serverSettings, slabManifest, SharedHoverCardRenderComplete, bootStrapComplete, GetOwaServiceURL(), a, GetGetPersonaPhotoURL())
        }
        if (sharedHoverCardShim != null && typeof sharedHoverCardShim.bootStrapCard != "undefined") sharedHoverCardShim.bootStrapCard();
        else FallBackToActiveX()
    }
}

function RemoveSharedHoverCardHandlers() {
    for (var b = 0; b < sharedHoverCardMarkerBatchSize; ++b) {
        if (sharedHoverCardsCount == sharedHoverCardElementsCount) return;
        var a = sharedHoverCardElements[sharedHoverCardsCount];
        if (a != null && typeof a != "undefined") {
            a.onmouseover = null;
            a.onfocusin = null;
            a.onmouseout = null;
            a.onfocusout = null
        }
        sharedHoverCardsCount++
    }
    setTimeout("RemoveSharedHoverCardHandlers()", sharedHoverCardMarkerBatchDelay)
}

function IMNGetPresence(b) {
    var a = 0;
    if (b != "" && EnsureIMNControl()) try {
        a = IMNControlObj.GetStatus(b, "");
        a = IMNControlObj.GetStatus(b, "");
        a = MapIMNPresenceToOWAPresence(a)
    } catch (c) {}
    return a
}

function MapIMNPresenceToOWAPresence(b) {
    var a = 0;
    switch (b) {
        case 0:
        case 11:
            a = 2;
            break;
        case 1:
        case 12:
            a = 1;
            break;
        case 2:
        case 4:
        case 6:
        case 8:
        case 13:
        case 16:
        case 17:
            a = 3;
            break;
        case 3:
        case 5:
        case 7:
        case 10:
        case 14:
        case 19:
        case 20:
        case 21:
            a = 4;
            break;
        case 9:
        case 15:
            a = 6;
        case 18:
            a = 5;
            break;
        default:
            a = 0
    }
    return a
}

function IMN_RenderPresenceStatusText(c, a) {
    if (c != "" && a != "" && EnsureIMNControl()) {
        if (!Boolean(IMNDictionaryPresenceTextObj)) {
            IMNDictionaryPresenceTextObj = {};
            IMNNameDictionaryPresenceTextObj = {}
        }
        if (!IMNNameDictionaryPresenceTextObj[a]) IMNNameDictionaryPresenceTextObj[a] = c;
        if (typeof IMNDictionaryPresenceTextObj[a] == "undefined") IMNDictionaryPresenceTextObj[a] = 1;
        if (typeof g_presenceEnabled != "undefined" && g_presenceEnabled && IMNControlObj.PresenceEnabled) {
            var b = 1;
            if (typeof IMNControlObj.GetStatus != "undefined") b = IMNControlObj.GetStatus(c, a);
            if (IMNIsOnlineState(b)) {
                var d = document.getElementById(a);
                IMNUpdatePresenceText(d, b);
                IMNDictionaryPresenceTextObj[a] = b
            }
        }
    }
}

function IMNUpdatePresenceText(a, c) {
    if (typeof a != "undefined") {
        var b = IMNGetStatusImage(c, true);
        a.innerHTML = b.alt
    }
}
var _spBodyOnLoadFunctionNames, _spBodyOnLoadFunctions, _spBodyOnLoadCalled, _spOriginalFormAction, _spEscapedFormAction, _spFormOnSubmitCalled, _spBodyOnPageShowRegistered;

function _spBodyOnPageShow() {
    _spFormOnSubmitCalled = false
}

function _spResetFormOnSubmitCalledFlag() {
    _spFormOnSubmitCalled = false
}

function _ribbonReadyForInit() {
    return _spBodyOnLoadCalled
}

function _spBodyOnLoadWrapperInit() {
    ajaxNavigate.get_search().match(new RegExp("[?&]IsDlg=1")) == null && FixRibbonAndWorkspaceDimensions()
}

function _spBodyOnLoadWrapper() {
    if (_spBodyOnLoadCalled) return;
    _spBodyOnLoadCalled = true;
    _spBodyOnLoadWrapperInit();
    if (!_spBodyOnPageShowRegistered && typeof browseris != "undefined" && !browseris.ie && typeof window.addEventListener == "function") {
        window.addEventListener("pageshow", _spBodyOnPageShow, false);
        _spBodyOnPageShowRegistered = true
    }
    if (typeof Sys != "undefined" && typeof Sys.WebForms != "undefined" && typeof Sys.WebForms.PageRequestManager != "undefined") {
        var a = Sys.WebForms.PageRequestManager.getInstance();
        if (!_spPageLoadedRegistered && a != null) {
            a.add_pageLoaded(_spPageLoaded);
            _spPageLoadedRegistered = true
        }
    }!_spPageLoadedRegistered && _spPageLoaded();
    _spFormOnSubmitCalled = false;
    typeof Sys != "undefined" && typeof Sys.Net != "undefined" && typeof Sys.Net.WebRequestManager != "undefined" && Sys.Net.WebRequestManager.add_invokingRequest(_spResetFormOnSubmitCalledFlag);
    typeof NotifyBodyLoadedAndExecuteWaitingJobs != "undefined" && NotifyBodyLoadedAndExecuteWaitingJobs();
    ExecuteOrDelayUntilScriptLoaded(ProcessDefaultOnLoad, "core.js");
    if (typeof g_prefetch == "undefined" || g_prefetch == 1) {
        var c = new URI(window.location.href, {
                queryCaseInsensitive: true
            }),
            b = c.getQueryParameter("prefetch");
        b != String(0) && _spPreFetch()
    } else {
        EnsureScript("strings.js", TypeofFullName("Strings"), null);
        EnsureScript("core.js", TypeofFullName("UpdateAnimationUserControl"), null)
    }
}
var g_numberOfYields;

function _spDelayAfterAllScripts(a) {
    _spYield(a, g_numberOfYields)
}

function _spYield(b, a) {
    if (a > 0) window.setTimeout(function() {
        _spYield(b, a - 1)
    }, 0);
    else b()
}

function _spTrace() {}
var g_spPreFetchKeys;

function _spPreFetch() {
    _spDelayAfterAllScripts(function() {
        var b;
        if (Boolean(_v_dictSod)) {
            _spTrace("-----Starting prefetch-----");
            g_spPreFetchKeys.push("strings.js");
            g_spPreFetchKeys.push("core.js");
            typeof ribbon == "undefined" && typeof _ribbon != "undefined" && g_spPreFetchKeys.push("ribbon");
            for (var a = 0; a < g_spPreFetchKeys.length; a++) {
                var c = g_spPreFetchKeys[a];
                b = _v_dictSod[c];
                Boolean(b) && LoadSod(b)
            }
        }
    });
    typeof _ribbon != "undefined" && Boolean(_ribbon) && SP.SOD.get_ribbonImagePrefetchEnabled() && window.setTimeout(function() {
        if (Boolean(document.images) && typeof _spPageContextInfo != "undefined" && typeof _spPageContextInfo.currentLanguage != "undefined") {
            window.imgRibbon32x32 = new Image;
            var a = "/_layouts/15/" + String(_spPageContextInfo.currentLanguage) + "/images/formatmap32x32.png";
            window.imgRibbon32x32.src = GetImageUrlWithRevision(a);
            window.imgRibbon16x16 = new Image;
            a = "/_layouts/15/" + String(_spPageContextInfo.currentLanguage) + "/images/formatmap16x16.png";
            window.imgRibbon16x16.src = GetImageUrlWithRevision(a)
        }
    }, 0)
}
var _spSuppressFormOnSubmitWrapper;

function _spFormOnSubmitWrapper() {
    if (_spSuppressFormOnSubmitWrapper) return true;
    if (_spFormOnSubmitCalled) return false;
    if (typeof _spFormOnSubmit == "function") {
        var b = _spFormOnSubmit(),
            a = false;
        if (typeof b == typeof a && b == a) return false
    }
    if (typeof _startOnSubmitStatement == "function") return _startOnSubmitStatement();
    _spFormOnSubmitCalled = true;
    return true
}
var _inlineEditString, _spPageLoadedRegistered;

function _spPageLoaded() {
    _spOriginalFormAction = null;
    EscapeFormAction();
    RefreshInplViewState();
    RefreshHeroButtonState();
    InlineEditSetDefaultFocus()
}

function InlineEditSetDefaultFocus() {
    if (_inlineEditString != null) {
        var c = _inlineEditString.indexOf("#");
        if (c <= 0) return;
        for (var i = _inlineEditString.substring(0, c), d = document.getElementsByTagName("TR"), b = 0; b < d.length; b++)
            if (d[b].getAttribute("automode") == i) {
                for (var h = _inlineEditString.substring(c + 1), f = h.split(","), a = d[b], e = 0; e < f.length; e++) {
                    if (a == null) break;
                    a = a.firstChild;
                    for (var g = 0; g < f[e]; g++) {
                        if (a == null) break;
                        a = a.nextSibling
                    }
                }
                a != null && focusControl(a);
                break
            }
        _inlineEditString = null
    }
}

function focusControl(b) {
    if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
        var c, a = b;
        if (Boolean(a) && typeof a.contentEditable !== "undefined") {
            c = a.contentEditable;
            a.contentEditable = false
        } else a = null;
        try {
            b.focus()
        } catch (d) {}
        if (Boolean(a)) a.contentEditable = c
    } else b.focus()
}

function EscapeFormAction() {
    if (document.forms.length > 0 && !Boolean(_spOriginalFormAction)) {
        _spOriginalFormAction = document.forms[0].action;
        var a = _spOriginalFormAction,
            b = a.indexOf("://");
        if (b >= 0) {
            var c = a.substring(b + 3);
            b = c.indexOf("/");
            if (b >= 0) a = c.substring(b);
            if (a.length > 2 && a.charAt(0) == "/" && a.charAt(1) == "/") a = a.substring(1)
        }
        if (a.length > 0) {
            _spEscapedFormAction = escapeUrlForCallback(a);
            document.forms[0].action = _spEscapedFormAction;
            document.forms[0]._initialAction = document.forms[0].action
        }
    }
}

function RefreshHeroButtonState() {
    if (typeof _spWebPartComponents != "undefined")
        for (var d in _spWebPartComponents)
            if (d.length > 7) {
                var b = d.substr(7),
                    a = window["heroButtonWebPart" + b];
                if (typeof a != "undefined" && a != null && a == true) {
                    var c = document.getElementById("Hero-" + b);
                    if (c != null) c.style.display = ""
                }
            }
}

function RefreshInplViewState() {
    if (typeof window.ctx == "undefined") return;
    var a = window.ctx;
    if (a.clvp == null) {
        EnsureScript("inplview", typeof InitAllClvps, function() {
            a.clvp == null && InitAllClvps()
        });
        return
    }
    var c = a.clvp,
        b = c.tab;
    if (b == null || b != null && (b.parentNode == null || b.parentNode.innerHTML == null)) {
        FixDroppedOrPastedClvps();
        if (a.dictSel != null) {
            a.dictSel = [];
            a.CurrentSelectedItems = 0
        }
    }
}

function RestoreToOriginalFormAction() {
    if (_spOriginalFormAction != null) {
        if (_spEscapedFormAction == document.forms[0].action) {
            document.forms[0].action = _spOriginalFormAction;
            document.forms[0]._initialAction = document.forms[0].action
        }
        _spOriginalFormAction = null;
        _spEscapedFormAction = null
    }
}

function DefaultFocus() {
    if (typeof _spUseDefaultFocus != "undefined") {
        var a = document.getElementsByName("_spFocusHere"),
            c = null;
        if (a == null || a.length <= 0) c = document.getElementById("_spFocusHere");
        else if (a != null && a.length > 0) c = a[0];
        if (c != null) {
            var b = c.getElementsByTagName("a");
            if (b != null && b.length > 0)
                for (var d = 0; d < b.length; d++)
                    if (b[d].style.visibility != "hidden") {
                        try {
                            b[d].focus()
                        } catch (e) {}
                        break
                    }
        }
    }
}
var g_fAnimateListCSR;

function ProcessDefaultOnLoad() {
    ProcessPNGImages();
    UpdateAccessibilityUI();
    UpdateAnimationUserControl(false);
    window.setTimeout("ProcessImn()", 10);
    HandleDLPStatus();
    ProcessOnLoadFunctionNames(_spBodyOnLoadFunctionNames);
    ProcessOnLoadFunctions(_spBodyOnLoadFunctions);
    typeof _spUseDefaultFocus != "undefined" && DefaultFocus();
    ajaxNavigate.get_hash().indexOf("InplviewHash") != -1 && EnsureScriptParams("inplview", "inplview.RestoreAllClvpsNavigation");
    ProcessReliabilityLogs()
}

function ProcessOnLoadFunctionNames(onLoadFunctionNames) {
    if (onLoadFunctionNames != null) {
        for (var i = 0; i < onLoadFunctionNames.length; i++) {
            var expr = "if(typeof(" + onLoadFunctionNames[i] + ")=='function'){" + onLoadFunctionNames[i] + "();}";
            eval(expr)
        }
        onLoadFunctionNames = []
    }
}

function ProcessOnLoadFunctions(a) {
    for (var b = 0; b < a.length; b++) a[b]();
    a = []
}
var g_fAreAllSodsLoaded;

function ProcessReliabilityLogs() {
    if (!g_fAreAllSodsLoaded) {
        g_fAreAllSodsLoaded = AreAllSodsLoaded();
        window.setTimeout(ProcessReliabilityLogs, 10);
        return
    }
    SP.ReadyToUploadLogs()
}

function CoreInvoke(a) {
    var c = Array.prototype.slice.call(arguments, 1),
        b = function() {
            var b = window[a];
            b.apply(null, c)
        };
    EnsureScript("core.js", TypeofFullName(a), b);
    return false
}

function _bodyOnHashChangeHandler() {
    typeof _spBodyOnHashChange != "undefined" && _spBodyOnHashChange()
}
var DeveloperDashboard;

function ToggleDeveloperDashboard(b) {
    var a;
    if (!Boolean(b)) b = "";
    if (GetCookie("WSS_DeveloperDashboard") == "true") ddCloseWindow(DeveloperDashboard.wnd);
    else try {
        a = ddGetWindow();
        if (ddIsWndValid(a)) ddAttachToWindow(a);
        else ddOpenWindow(a, b)
    } catch (c) {
        ddFail(a)
    }
}

function ddFail(a) {
    Boolean(a) && a.close()
}

function ddIsWndValid(a) {
    if ("unknown" == typeof a.location.href) throw null;
    return "about:blank" !== a.location.href
}

function ddResetState() {
    DeveloperDashboard.wnd = null;
    SetCookieEx(DeveloperDashboard.cookie, false, true, window)
}

function ddCloseWindow(a) {
    null != a && a.close();
    ddResetState()
}

function ddOpenWindow(a, b) {
    SetCookieEx(DeveloperDashboard.cookie, true, true, window);
    DeveloperDashboard.wnd = a;
    ddAdoptWindow(a, b)
}

function ddAdoptWindow(a, b) {
    a.location.href = b + "/_layouts/15/devdash.aspx";
    if (browseris.chrome) window.setTimeout(function() {
        a.moveTo(screen.width / 2, 0)
    }, 100);
    else a.moveTo(screen.width / 2, 0)
}

function ddGetWindow() {
    var a, c, b;
    a = DeveloperDashboard.wnd;
    if (Boolean(a)) return a;
    c = screen.width;
    b = screen.height;
    a = window.open("", "devdash", "height=600,width=800,resizable=1,scrollbars=1,top=" + String(b) + ",left=" + String(c));
    return a
}

function ddAttachToWindow(a) {
    if (null != a) {
        ddHandshake(a);
        ddCScopeSet()
    } else {
        ddResetHandshake();
        ddCScopeReset()
    }
}

function ddHandshake(a) {
    var b, c = 0;
    b = setInterval(d, 20);

    function d() {
        var f, d;
        f = "DeveloperDashboard" in a && "Messaging" in a.DeveloperDashboard && "PostMsg" in a.DeveloperDashboard.Messaging;
        if (f) {
            DeveloperDashboard.PostMsg = function(d, b, c) {
                try {
                    a.DeveloperDashboard.Messaging.PostMsg(d, b, c)
                } catch (e) {}
            };
            clearInterval(b);
            if (null !== DeveloperDashboard.msgQueue)
                for (var e = 0, g = DeveloperDashboard.msgQueue.length; e < g; e++) {
                    d = DeveloperDashboard.msgQueue[e];
                    DeveloperDashboard.PostMsg(d.to, d.subject, d.msg)
                }
        } else if (100 == ++c) {
            clearInterval(b);
            ddAttachToWindow(null)
        }
    }
}

function ddResetHandshake() {
    DeveloperDashboard.msgQueue = null;
    DeveloperDashboard.PostMsg = function() {}
}

function ddInit() {
    var a, b = false;
    if (GetCookie("WSS_DeveloperDashboard") == "true") try {
        a = ddGetWindow();
        if (ddIsWndValid(a)) {
            DeveloperDashboard.wnd = a;
            ddHandshake(a);
            b = true
        } else a.close()
    } catch (c) {
        ddFail(a)
    }!b && ddResetHandshake()
}
var CScope;

function ddCScopeSet() {
    var d, b;
    d = typeof window.msWriteProfilerMark != "undefined";
    b = null;

    function c(a) {
        var b = +new Date;
        d && window.msWriteProfilerMark(a);
        return b
    }

    function a(b, a) {
        this.Name = b;
        this.Prefix = Boolean(a) ? a : "Script";
        this.Children = []
    }
    a.prototype = {
        Start: function() {
            a.Start(this);
            this.StartTimeUtc = c(this.Name)
        },
        Stop: function() {
            this.EndTimeUtc = c(this.Name);
            a.Stop(this)
        },
        Parent: null
    };
    a.Current = b;
    a.Start = function(b) {
        b.Parent = a.Current;
        Boolean(a.Current) && a.Current.Children.push(b);
        a.Current = b
    };
    a.Stop = function(b) {
        a.Current = b.Parent;
        if (null == a.Current) {
            b.Name = b.Prefix + " (" + b.Name + ")";
            "undefined" != typeof DeveloperDashboard.PostMsg && DeveloperDashboard.PostMsg("MS.Scenarios", "AddScenario", b)
        }
    };
    CScope = a
}

function ddCScopeReset() {
    var b = function() {};

    function a() {}
    a.prototype = {
        Start: b,
        Stop: b
    };
    CScope = a
}

function ddToggleCScope() {
    if (null != DeveloperDashboard.wnd) ddCScopeSet();
    else ddCScopeReset()
}
var flyoutsAllowed;

function enableFlyoutsAfterDelay() {
    setTimeout("flyoutsAllowed = true;", 25)
}

function overrideMenu_HoverStatic(b) {
    if (!flyoutsAllowed) setTimeout(delayMenu_HoverStatic(b), 50);
    else {
        var c = Menu_HoverRoot(b),
            a = Menu_GetData(b);
        if (!Boolean(a)) return;
        window.__disappearAfter = a.disappearAfter;
        Menu_Expand(c, a.horizontalOffset, a.verticalOffset)
    }
}

function delayMenu_HoverStatic(a) {
    return function() {
        overrideMenu_HoverStatic(a)
    }
}
var g_ExecuteOrWaitJobs;

function ExecuteOrDelayUntilEventNotified(b, c) {
    var d = false,
        a = g_ExecuteOrWaitJobs[c];
    if (a != null && a.notified) {
        if (a.args != null) b.apply(null, a.args);
        else b();
        return true
    } else {
        DelayUntilEventNotified(b, c);
        return false
    }
}

function DelayUntilEventNotified(c, b) {
    var a = g_ExecuteOrWaitJobs[b];
    if (a == null) {
        a = {};
        a.notified = false;
        a.jobs = [];
        a.args = null;
        g_ExecuteOrWaitJobs[b] = a
    }
    a.jobs.push(c)
}

function NotifyEventAndExecuteWaitingJobs(d, b) {
    if (!Boolean(g_ExecuteOrWaitJobs)) return;
    var a = g_ExecuteOrWaitJobs[d];
    if (a == null || typeof a == "undefined") {
        a = {};
        a.notified = true;
        a.jobs = [];
        a.args = b;
        g_ExecuteOrWaitJobs[d] = a
    } else {
        if (a.jobs != null)
            for (var c = 0; c < a.jobs.length; c++) {
                var e = a.jobs[c];
                if (b != null) e.apply(null, b);
                else e()
            }
        a.notified = true;
        a.jobs = [];
        a.args = b
    }
}

function ExecuteOrDelayUntilScriptLoaded(c, a) {
    a = a.toLowerCase();
    var b = "sp.scriptloaded-" + a;
    return ExecuteOrDelayUntilEventNotified(c, b)
}

function NotifyScriptLoadedAndExecuteWaitingJobs(a) {
    a = a.toLowerCase();
    if (typeof _v_dictSod != "undefined") {
        if (typeof _v_dictSod[a] == "undefined") switch (a) {
            case "ie55up.js":
                typeof _v_dictSod.browserScript == "undefined" && RegisterSod("browserScript", null);
                _v_dictSod["ie55up.js"] = _v_dictSod.browserScript;
                break;
            case "sp.ribbon.js":
                typeof _v_dictSod.ribbon == "undefined" && RegisterSod("ribbon", null);
                _v_dictSod["sp.ribbon.js"] = _v_dictSod.ribbon;
                break;
            case "inplview.js":
                typeof _v_dictSod.inplview == "undefined" && RegisterSod("inplview", null);
                _v_dictSod["inplview.js"] = _v_dictSod.inplview;
                break;
            default:
                RegisterSod(a, null)
        }
        _v_dictSod[a].state = 4
    }
    var g = "sp.scriptloaded-" + a;
    NotifyEventAndExecuteWaitingJobs(g);
    if (typeof g_MinimalDownload != "undefined" && Boolean(g_MinimalDownload) && typeof RegisterModuleInit != "undefined") {
        var d = a.lastIndexOf("/");
        if (-1 != d) a = a.substring(d + 1);
        var e = a.lastIndexOf("."),
            b = null;
        if (-1 == e) b = a;
        else b = a.substring(0, e);
        b = b.replace(/\./g, "_");
        var f = new RegExp("^[A-Za-z0-9_\\-$]+$");
        if (Boolean(f.exec(b))) {
            b = "$_global_" + b;
            var c = null;
            try {
                c = window[b]
            } catch (h) {}
            null != c && RegisterModuleInit(a, c)
        }
    }
}

function ExecuteOrDelayUntilBodyLoaded(b) {
    var a = "sp.bodyloaded";
    return ExecuteOrDelayUntilEventNotified(b, a)
}

function NotifyBodyLoadedAndExecuteWaitingJobs() {
    var a = "sp.bodyloaded";
    NotifyEventAndExecuteWaitingJobs(a)
}

function FFClick(b) {
    var a = document.createEvent("MouseEvents");
    a.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    b.dispatchEvent(a)
}

function _spOnSilverlightError(a, c, b) {
    b.errorType == "InitializeError" && _spSetSLErrorMessage(a, Strings.STS.L_ErrorMessage_InitializeError)
}

function _spSetSLPluginNotLoadedErrorMessage(a) {
    _spSetSLErrorMessage(a, Strings.STS.L_ErrorMessage_PluginNotLoadedError)
}

function _spSetSLErrorMessage(a, e) {
    var b = "SilverlightRuntimeErrorMessage_" + a,
        c = "WebPartDefaultConfigurationMessage_" + a,
        d = "SilverlightObjectDiv_" + a;
    document.getElementById(d).style.display = "none";
    document.getElementById(b).style.display = "block";
    document.getElementById(b).innerHTML = e;
    document.getElementById(c).style.display = "block"
}
var cuiKeyHash;

function _processKeyCodes(a) {
    return cuiKeyHash[a] ? cuiKeyHash[a] : a
}
var g_fhs;

function _ribbonScaleHeader(i, d) {
    var c = i.childNodes[1],
        g = 0;
    if (Boolean(c)) g = c.childNodes.length;
    var a = null,
        b = null;
    if (typeof d == "undefined") d = false;
    if (typeof g_fhs == "undefined")
        if (typeof _ribbonShouldFixRtlHeaders == "function") g_fhs = _ribbonShouldFixRtlHeaders(d);
        else g_fhs = false;
    for (var f = 0; f < g; f++) {
        var e = c.childNodes[f];
        if (e.className.indexOf("ms-cui-tts") != -1) a = e;
        else if (e.className.indexOf("ms-cui-TabRowRight") != -1) b = e
    }
    Boolean(a) && "undefined" == typeof a._widthAdded && g_fhs && _ribbonFixHeaderWidth(a);
    if (!Boolean(a) || !Boolean(b)) return;
    b.style.display = "block";
    var h = _ribbonNeedsHeaderScaling(c, a, b, d);
    if (h) {
        _ribbonHeaderScaleDown(a);
        _ribbonNeedsHeaderScaling(c, a, b, d) && _ribbonHeaderScaleDown(a)
    } else {
        if (_ribbonGetScaleStep(a) == 0) return;
        _ribbonHeaderScaleUp(a);
        if (_ribbonNeedsHeaderScaling(c, a, b, d)) {
            _ribbonHeaderScaleDown(a);
            return
        }
        if (_ribbonGetScaleStep(a) == 0) return;
        _ribbonHeaderScaleUp(a);
        _ribbonNeedsHeaderScaling(c, a, b, d) && _ribbonHeaderScaleDown(a)
    }
    if (_ribbonNeedsHeaderScaling(c, a, b, d)) b.style.display = "none"
}

function _ribbonNeedsHeaderScaling(d, c, b, a) {
    return c.offsetWidth > 0 && b.offsetWidth > 0 && _ribbonElementsWrap(c, b, a) ? true : !g_fhs && _ribbonChildNodesWrapped(b, a) ? true : _ribbonChildNodesWrapped(d, a) ? true : _ribbonChildNodesWrapped(c, a)
}

function _ribbonChildNodesWrapped(e, g) {
    if (e.offsetWidth == 0) return false;
    for (var c = [], f = e.childNodes.length, a, b = 0; b < f; b++) {
        a = e.childNodes[b];
        Boolean(a) && a.nodeName != "#text" && a.offsetWidth > 0 && a.offsetHeight > 0 && c.push(a)
    }
    f = c.length;
    for (b = 0; b < f; b++) {
        a = c[b];
        var d = c[b + 1];
        if (typeof d != "undefined" && Boolean(d) && _ribbonElementsWrap(a, d, g)) return true
    }
    return false
}

function _ribbonElementsWrap(b, a, c) {
    return !c && b.offsetLeft + b.offsetWidth > a.offsetLeft + 1 ? true : c && a.offsetLeft + a.offsetWidth > b.offsetLeft + 1 ? true : false
}

function _ribbonGetScaleStep(a) {
    if ("undefined" == typeof a._scaleStep) {
        a._scaleStep = 0;
        if (a.className.indexOf("ms-cui-tts-scale1") != -1) a._scaleStep = 1;
        else if (a.className.indexOf("ms-cui-tts-scale2") != -1) a._scaleStep = 2
    }
    return a._scaleStep
}

function _ribbonSetScaleStep(b, a) {
    b._scaleStep = a
}

function _ribbonHeaderScaleDown(a) {
    var b = _ribbonGetScaleStep(a);
    if (b == 0) _ribbonHeaderScaleIndex(a, 1);
    else(b == 1 || b == 2) && _ribbonHeaderScaleIndex(a, 2)
}

function _ribbonHeaderScaleUp(a) {
    var b = _ribbonGetScaleStep(a);
    if (b == 1) _ribbonHeaderScaleIndex(a, 0);
    else b == 2 && _ribbonHeaderScaleIndex(a, 1)
}
var g_ribbonHeaderScaleClass;

function _ribbonHeaderScaleIndex(a, b) {
    a.className = g_ribbonHeaderScaleClass[b];
    _ribbonSetScaleStep(a, b);
    _ribbonFixHeaderWidth(a)
}

function _ribbonFixHeaderWidth(a) {
    if (!g_fhs) return;
    var b = _ribbonCalculateWidth(a);
    a.style.width = String(b) + "px";
    a._widthAdded = true
}

function _ribbonCalculateWidth(g) {
    for (var a = 0, f = g.childNodes, h = f.length, d = 0; d < h; d++) {
        var b = f[d];
        if (Boolean(b) && b.nodeName == "LI" && b.offsetWidth > 0) {
            var c = b.childNodes[1];
            if (Boolean(c) && c.nodeName == "UL") {
                var e = _ribbonCalculateWidth(c);
                c.style.width = String(e) + "px";
                a = a + e + 4
            } else a = a + b.offsetWidth + 2
        }
    }
    return a
}

function SPRibbonInfo() {}

function _ribbonOnStartInit(b) {
    OnRibbonMinimizedChanged(b.initialTabId == "Ribbon.Read");
    var c = document.getElementById("Ribbon");
    if (!Boolean(c) || Boolean(b) && b.buildMinimized) return;
    var a = c.childNodes[2],
        d = Boolean(a) && a.className.indexOf("ms-cui-tabContainer") != -1;
    !d && b.initialTabId != "Ribbon.Read" && ExecuteOrDelayUntilScriptLoaded(function() {
        PrepareRibbonForAnimation(false, false);
        a = document.createElement("div");
        a.className = "ms-cui-tabContainer";
        var b = document.createElement("ul");
        b.id = "Ribbon.BlankTab";
        b.className = "ms-cui-tabBody";
        b.innerHTML = '<span class="ms-ribbontabswitchloading"><img src="/_layouts/15/images/loadingcirclests16.gif?rev=44" alt=""/><span>' + Strings.STS.L_Loading_Text + "</span></span>";
        a.appendChild(b);
        c.appendChild(a);
        AnimateRibbonMinimizedChanged(false)
    }, "core.js")
}
var StatusIdWithTopPriority, StatusColorWithTopPriority, StatusPriority, StatusBarClassNames;

function getStatusTitle(a) {
    switch (a) {
        case 4:
            return Strings.STS.L_StatusBarRed_Text;
        case 3:
            return Strings.STS.L_StatusBarYellow_Text;
        case 2:
            return Strings.STS.L_StatusBarGreen_Text;
        case 1:
            return Strings.STS.L_StatusBarBlue_Text;
        default:
            return ""
    }
}
var g_uniqueIndex;

function getUniqueIndex() {
    g_uniqueIndex++;
    return g_uniqueIndex
}

function addStatus(g, h, e, f) {
    var a = document.getElementById("pageStatusBar");
    if (a != null) {
        a.setAttribute("aria-live", "polite");
        a.setAttribute("aria-relevant", "all");
        var b = _createStatusMarkup(g, h, true, f);
        if (!e) a.appendChild(b);
        else {
            var c = a.getElementsByTagName("SPAN"),
                d = c.length > 0 ? c[0] : null;
            if (d != null) a.insertBefore(b, d);
            else a.appendChild(b)
        }
        if (a.childNodes.length == 1) {
            StatusIdWithTopPriority = b.id;
            StatusColorWithTopPriority = 1
        }
        a.style.display = "block";
        return b.id
    }
    return null
}

function appendStatus(f, d, e) {
    var c = document.getElementById("pageStatusBar"),
        a = document.getElementById(f);
    if (c != null && a != null) {
        var b = null;
        if (Boolean(a.lastChild) && a.lastChild.tagName == "BR") {
            a.removeChild(a.lastChild);
            b = _createStatusMarkup(d, e, true)
        } else b = _createStatusMarkup(d, e, false);
        if (a.nextSibling != null) c.insertBefore(b, a.nextSibling);
        else c.appendChild(b);
        return b.id
    }
    return null
}

function _createStatusMarkup(d, f, e, c) {
    var b = document.createElement("SPAN");
    b.id = "status_" + String(getUniqueIndex());
    b.className = "ms-status-status";
    var a = [];
    a.push("<span id='");
    a.push(b.id);
    a.push("_hiddenPriMsg' class='ms-accessible'>");
    a.push(getStatusTitle(1) + Strings.STS.L_Status_Text);
    a.push("</span>");
    !c && a.push('<span class="ms-status-iconSpan"><img class="ms-status-iconImg" src="/_layouts/15/images/spcommon.png" /></span>');
    if (d.length != 0) {
        a.push('<span class="ms-bold ms-status-title">');
        a.push(d);
        a.push("</span>")
    }
    a.push('<span class="ms-status-body" id=\'');
    a.push(b.id);
    a.push("_body");
    a.push("'>");
    a.push(f);
    a.push("</span>");
    e && !c && a.push("<br/>");
    b.innerHTML = a.join("");
    b.setAttribute("role", "alert");
    b.priorityColor = 1;
    b.tabIndex = 0;
    return b
}

function removeAllStatus(b) {
    var a = document.getElementById("pageStatusBar");
    if (a != null) {
        a.innerHTML = "";
        a.className = StatusBarClassNames[1];
        StatusColorWithTopPriority = null;
        StatusIdWithTopPriority = null;
        if (b) a.style.display = "none"
    }
}

function setStatusPriColor(b, d) {
    var a = document.getElementById(b);
    if (a != null && typeof d == "string") {
        if (d in StatusPriority) a.priorityColor = StatusPriority[d];
        else a.priorityColor = 1;
        var c = a.firstChild;
        if (c != null && c.id == b + "_hiddenPriMsg") c.innerHTML = getStatusTitle(a.priorityColor) + Strings.STS.L_Status_Text;
        if (b == StatusIdWithTopPriority)
            if (a.priorityColor >= StatusColorWithTopPriority) StatusColorWithTopPriority = a.priorityColor;
            else _selectStatusWithTopPriority();
        else if (a.priorityColor > StatusColorWithTopPriority) {
            StatusIdWithTopPriority = b;
            StatusColorWithTopPriority = a.priorityColor
        }
        var e = document.getElementById("pageStatusBar");
        if (Boolean(e)) e.className = StatusBarClassNames[StatusColorWithTopPriority]
    }
}

function _selectStatusWithTopPriority() {
    var f = document.getElementById("pageStatusBar");
    if (f != null) {
        for (var e = null, b = 1, d = f.childNodes, g = d.length, a = null, c = 0; c < g; c++) {
            a = d[c];
            if (typeof a.priorityColor != "undefined" && a.priorityColor > b) {
                b = a.priorityColor;
                e = a.id
            }
        }
        StatusIdWithTopPriority = e;
        StatusColorWithTopPriority = b
    }
}

function updateStatus(d, b) {
    var c = d + "_body",
        a = document.getElementById(c);
    if (Boolean(a)) a.innerHTML = b
}

function removeStatus(d) {
    var a = document.getElementById(d);
    if (a != null) {
        if (Boolean(a.lastChild) && a.lastChild.tagName == "BR") {
            var c = a.previousSibling;
            if (Boolean(c) && Boolean(c.lastChild) && c.lastChild.tagName != "BR") {
                var e = document.createElement("BR");
                c.appendChild(e)
            }
        }
        a.parentNode.removeChild(a);
        var b = document.getElementById("pageStatusBar");
        if (Boolean(b))
            if (b.getElementsByTagName("SPAN").length == 0) {
                b.className = StatusBarClassNames[1];
                StatusColorWithTopPriority = null;
                StatusIdWithTopPriority = null;
                b.style.display = "none"
            } else if (d == StatusIdWithTopPriority) {
            _selectStatusWithTopPriority();
            b.className = StatusBarClassNames[StatusColorWithTopPriority]
        }
    }
}
var g_dlgWndTop, g_spDlgLauncher, g_ModalDialogCount, g_overlayPopup, g_childDialog;

function _dlgWndTop() {
    if (Boolean(g_dlgWndTop)) return g_dlgWndTop;
    try {
        var a = window;
        while (a != null && a != a.parent) {
            a = a.parent;
            if (a != null && a.g_spDlgLauncher) g_dlgWndTop = a
        }
    } catch (b) {} finally {
        if (!Boolean(g_dlgWndTop)) g_dlgWndTop = window
    }
    return g_dlgWndTop
}

function commonShowModalDialog(n, b, c, m) {
    function r() {
        return []
    }

    function d(a, b, c) {
        a.push(b);
        a[b] = c
    }

    function q(b) {
        for (var c = [], a = 0; a < b.length; a++) c.push(b[a]);
        return c
    }
    if (document.getElementById("__spPickerHasReturnValue") != null) document.getElementById("__spPickerHasReturnValue").value = "";
    if (document.getElementById("__spPickerReturnValueHolder") != null) document.getElementById("__spPickerReturnValueHolder").value = "";
    commonModalDialogReturnValue.clear();
    var h;
    if (Boolean(window.showModalDialog)) {
        h = window.showModalDialog(n, m, b);
        Boolean(c) && invokeModalDialogCallback(c, h)
    } else {
        var l = 500,
            k = 550,
            p = "yes";
        if (!Boolean(b)) b = "width=" + String(l) + ",height=" + String(k);
        else {
            var a = r(),
                j, f;
            if (b.search(/^(\s*\w+\s*:\s*.+?\s*)(;\s*\s*\w+\s*:\s*.+?\s*)*(;\s*)?$/) != -1) {
                j = /^\s*(\w+)\s*:\s*(.+?)\s*$/;
                f = b.split(/\s*;\s*/)
            } else {
                j = /^\s*(\w+)\s*=\s*(.+?)\s*$/;
                f = b.split(/\s*,\s*/)
            }
            for (var s in f) {
                var g = j.exec(f[s]);
                Boolean(g) && g.length == 3 && d(a, g[1].toLowerCase(), g[2])
            }!Boolean(a.width) && d(a, "width", a.dialogwidth || Boolean(l));
            !Boolean(a.height) && d(a, "height", a.dialogheight || Boolean(k));
            !Boolean(a.scrollbars) && d(a, "scrollbars", a.scroll || Boolean(p));
            b = "";
            var i = q(a);
            for (var o in i) {
                if (Boolean(b)) b += ",";
                b += i[o] + "=" + a[i[o]]
            }
        }
        var e = window.open(n, "_blank", b + ",modal=yes,dialog=yes");
        e.dialogArguments = m;
        window.onfocus = function() {
            var a = document.getElementById("__spPickerHasReturnValue") != null && document.getElementById("__spPickerHasReturnValue").value == "1" || commonModalDialogReturnValue.isSet();
            if (Boolean(e) && !e.closed && !a) e.focus();
            else {
                window.onfocus = null;
                Boolean(c) && invokeModalDialogCallback(c, h)
            }
        };
        if (!browseris.ie)
            if (window.frameElement != null) window.fndlgClose = c
    }
    return h
}

function invokeModalDialogCallback(b, a) {
    if (typeof a != "undefined" && a != null) b(a);
    else if (commonModalDialogReturnValue.isSet()) {
        a = commonModalDialogReturnValue.get();
        b(a);
        commonModalDialogReturnValue.clear()
    } else if (document.getElementById("__spPickerHasReturnValue") != null && document.getElementById("__spPickerHasReturnValue").value == "1" && document.getElementById("__spPickerReturnValueHolder") != null) {
        a = document.getElementById("__spPickerReturnValueHolder").value;
        b(a)
    }
    return a
}

function setModalDialogReturnValue(a, b) {
    if (a.opener != null && typeof b == "string" && a.opener.document.getElementById("__spPickerHasReturnValue") != null && a.opener.document.getElementById("__spPickerReturnValueHolder") != null) {
        a.opener.document.getElementById("__spPickerHasReturnValue").value = "1";
        a.opener.document.getElementById("__spPickerReturnValueHolder").value = b
    } else setModalDialogObjectReturnValue(a, b);
    if (browseris.safari125up) a.opener != null && a.opener.fndlgClose != null && a.opener.fndlgClose(b)
}

function setModalDialogObjectReturnValue(a, b) {
    if (Boolean(a.showModalDialog)) a.returnValue = b;
    if (a.opener != null)
        if (typeof a.opener.commonModalDialogReturnValue != "undefined") {
            var c = a.opener.commonModalDialogReturnValue;
            c.set(b)
        }
}

function CommonGlobalDialogReturnValue_InitializePrototype() {
    CommonGlobalDialogReturnValue.prototype.hasRetVal = undefined;
    CommonGlobalDialogReturnValue.prototype.retVal = undefined;
    CommonGlobalDialogReturnValue.prototype.set = function(a) {
        if (typeof a != "undefined") {
            this.retVal = a;
            this.hasRetval = true
        }
    };
    CommonGlobalDialogReturnValue.prototype.isSet = function() {
        return this.hasRetval
    };
    CommonGlobalDialogReturnValue.prototype.get = function() {
        return this.hasRetval ? this.retVal : undefined
    };
    CommonGlobalDialogReturnValue.prototype.clear = function() {
        this.hasRetval = false;
        this.retVal = null
    }
}

function CommonGlobalDialogReturnValue() {}
var commonModalDialogReturnValue;

function commonModalDialogOpen(d, a, b, c) {
    a.url = d;
    a.dialogReturnValueCallback = b;
    a.args = c;
    EnsureScriptParams("SP.UI.Dialog.js", "SP.UI.ModalDialog.showModalDialog", a)
}

function commonModalDialogClose(c, d) {
    var a = null,
        b = _dlgWndTop();
    if (typeof b.g_childDialog != "undefined") a = b.g_childDialog;
    if (Boolean(a)) {
        a.set_returnValue(d);
        a.close(c)
    }
}

function commonModalDialogHide() {
    var a, b = _dlgWndTop();
    if (typeof b.g_childDialog != "undefined") a = b.g_childDialog;
    Boolean(a) && a.hide()
}

function commonModalDialogGetArguments() {
    var a, b = _dlgWndTop();
    if (typeof b.g_childDialog != "undefined") a = b.g_childDialog;
    return Boolean(a) && typeof a.get_args != "undefined" ? a.get_args() : null
}

function ShowPopupDialog(a) {
    ShowPopupDialogWithCallback(a, PopupDialogCallback)
}

function ShowPopupDialogWithCallback(a, b) {
    if (FV4UI()) {
        var c = {
            url: a,
            dialogReturnValueCallback: b
        };
        EnsureScriptParams("SP.UI.Dialog.js", "SP.UI.ModalDialog.showModalDialog", c)
    } else Nav.navigate(a)
}

function PopupDialogCallback(a) {
    a == 1 && Nav.navigate(_dlgWndTop().location.href)
}

function SelectField(b, a) {
    CoreInvoke("_SelectField", b, a)
}

function FilterField(d, b, a, c) {
    CoreInvoke("_FilterField", d, b, a, c)
}

function SetControlValue(a, b) {
    CoreInvoke("_SetControlValue", a, b)
}

function SubmitFormPost(c, b, a) {
    CoreInvoke("_SubmitFormPost", c, b, a)
}

function SuiteOnClick(a) {
    CoreInvoke("_SuiteOnClick", a)
}

function GoToPageRelative(a) {
    CoreInvoke("_GoToPageRelative", a)
}

function EnterFolder(a) {
    CoreInvoke("_EnterFolder", a)
}

function HandleFolder(o, n, p, e, a, d, i, g, m, k, b, h, j, f, c, l) {
    PreventDefaultNavigation();
    CoreInvoke("_HandleFolder", o, n, p, e, a, d, i, g, m, k, b, h, j, f, c, l)
}

function VerifyFolderHref(g, f, h, c, b, e, d, a) {
    CoreInvoke("_VerifyFolderHref", g, f, h, c, b, e, d, a)
}

function VerifyHref(e, d, b, c, a) {
    CoreInvoke("_VerifyHref", e, d, b, c, a)
}

function DispEx(o, n, e, a, d, i, g, m, k, b, h, j, f, c, l) {
    g_MDNav = function(a) {
        return a
    }();
    CoreInvoke("_DispEx", o, n, e, a, d, i, g, m, k, b, h, j, f, c, l);
    return g_MDNav
}

function EditItemWithCheckoutAlert(g, h, f, a, d, e, c, b) {
    CoreInvoke("_EditItemWithCheckoutAlert", g, h, f, a, d, e, c, b)
}

function STSNavigateWithCheckoutAlert(g, f, a, d, e, c, b) {
    CoreInvoke("_STSNavigateWithCheckoutAlert", g, f, a, d, e, c, b)
}

function NewItem2(a, b) {
    CoreInvoke("_NewItem2", a, b)
}

function NewItem(a) {
    CoreInvoke("_NewItem", a)
}

function EditItem2(a, b) {
    CoreInvoke("_EditItem2", a, b)
}

function EditItem(a) {
    CoreInvoke("_EditItem", a)
}

function RefreshPageTo(b, c, a) {
    CoreInvoke("_RefreshPageTo", b, c, a)
}

function AddGroupToCookie(a) {
    CoreInvoke("_AddGroupToCookie", a)
}

function RemoveGroupFromCookie(a) {
    CoreInvoke("_RemoveGroupFromCookie", a)
}

function ExpGroupBy(a) {
    CoreInvoke("_ExpGroupBy", a)
}

function DispDocItem(b, a) {
    CoreInvoke("_DispDocItem", b, a)
}

function DispDocItemExWithServerRedirect(h, g, d, a, c, f, e, b) {
    CoreInvoke("_DispDocItemExWithServerRedirect", h, g, d, a, c, f, e, b)
}

function DispDocItemEx(e, c, a, b, d) {
    CoreInvoke("_DispDocItemEx", e, c, a, b, d)
}

function PortalPinToMyPage(h, f, d, e, a, c, g, b) {
    CoreInvoke("_PortalPinToMyPage", h, f, d, e, a, c, g, b)
}

function MoveToViewDate(b, a, c) {
    CoreInvoke("_MoveToViewDate", b, a, c)
}

function MoveToDate(a, b) {
    CoreInvoke("_MoveToDate", a, b)
}

function ClickDay(a) {
    CoreInvoke("_ClickDay", a)
}

function GetMonthView(a) {
    CoreInvoke("_GetMonthView", a)
}

function OptLoseFocus(a) {
    CoreInvoke("_OptLoseFocus", a)
}

function SetCtrlFromOpt(a, b) {
    CoreInvoke("_SetCtrlFromOpt", a, b)
}

function ChangeLayoutMode(a, b) {
    CoreInvoke("_ChangeLayoutMode", a, b)
}

function MSOLayout_ChangeLayoutMode(a, b) {
    ChangeLayoutMode(a, b)
}

function WebPartMenuKeyboardClick(c, a, b, d) {
    CoreInvoke("_WebPartMenuKeyboardClick", c, a, b, d)
}

function ShowToolPane2Wrapper(a, b, c) {
    CoreInvoke("_ShowToolPane2Wrapper", a, b, c)
}

function EditInSPD(a, b) {
    CoreInvoke("_EditInSPD", a, b)
}

function SetupFixedWidthWebParts() {
    CoreInvoke("_SetupFixedWidthWebParts")
}

function ToggleAllItems(c, b, a) {
    CoreInvoke("_ToggleAllItems", c, b, a)
}

function CommandUIExecuteCommand(a) {
    CoreInvoke("_CommandUIExecuteCommand", a)
}

function PopMenuFromChevron(a) {
    CoreInvoke("_PopMenuFromChevron", a)
}

function ListHeaderMenu_OnMouseDown(a) {
    CoreInvoke("_ListHeaderMenu_OnMouseDown", a)
}

function NavigateToSubNewAspx(a, b) {
    CoreInvoke("_NavigateToSubNewAspx", a, b)
}

function NavigateToManagePermsPage(a, c, b) {
    CoreInvoke("_NavigateToManagePermsPage", a, c, b)
}

function DoNavigateToTemplateGallery(a, b) {
    CoreInvoke("_DoNavigateToTemplateGallery", a, b)
}

function RefreshPage(a) {
    CoreInvoke("_RefreshPage", a)
}

function OpenPopUpPage(d, a, c, b) {
    CoreInvoke("_OpenPopUpPage", d, a, c, b)
}

function GoToCreateNewPage() {
    CoreInvoke("_GoToCreateNewPage")
}

function OpenCreateWebPageDialog(a) {
    CoreInvoke("_OpenCreateWebPageDialog", a)
}

function EditLink2(b, a) {
    CoreInvoke("_EditLink2", b, a)
}

function GoBack(a) {
    CoreInvoke("_GoBack", a)
}

function ReplyItem(d, a, c, b) {
    CoreInvoke("_ReplyItem", d, a, c, b)
}

function ExportToDatabase(b, c, d, a) {
    CoreInvoke("_ExportToDatabase", b, c, d, a)
}

function ExportList(a) {
    CoreInvoke("_ExportList", a)
}

function ClearSearchTerm(a) {
    CoreInvoke("_ClearSearchTerm", a)
}

function SubmitSearchForView(a) {
    CoreInvoke("_SubmitSearchForView", a)
}

function SubmitSearchRedirect(a) {
    CoreInvoke("_SubmitSearchRedirect", a)
}

function AlertAndSetFocus(b, a) {
    CoreInvoke("_AlertAndSetFocus", b, a)
}

function AlertAndSetFocusForDropdown(b, a) {
    CoreInvoke("_AlertAndSetFocusForDropdown", b, a)
}

function AddSilverlightWebPart(c, b, a) {
    CoreInvoke("_AddSilverlightWebPart", c, b, a)
}

function UserSelectionOnClick(b, a) {
    CoreInvoke("_UserSelectionOnClick", b, a)
}

function OnIframeLoad() {
    CoreInvoke("_OnIframeLoad")
}

function OnFocusFilter(a) {
    CoreInvoke("_OnFocusFilter", a)
}

function TopHelpButtonClick(a, b) {
    cancelDefault(b);
    CoreInvoke("_TopHelpButtonClick", a)
}

function HelpWindowKey(a) {
    CoreInvoke("_HelpWindowKey", a)
}

function HelpWindowUrl(a) {
    CoreInvoke("_HelpWindowUrl", a)
}

function HelpWindow() {
    CoreInvoke("_HelpWindow")
}

function ToggleFullScreenMode() {
    CoreInvoke("_ToggleFullScreenMode")
}

function OnClickFilter(a, b) {
    return CoreInvoke("_OnClickFilter", a, b)
}

function GCActivateAndFocus(a) {
    CoreInvoke("_GCActivateAndFocus", a)
}

function GCNavigateToNonGridPage() {
    CoreInvoke("_GCNavigateToNonGridPage")
}

function _spBodyOnHashChange() {
    ajaxNavigate._raiseNavigate(ajaxNavigate)
}

function setInnerText(a, b) {
    var c = a.ownerDocument;
    if (Boolean(c.createTextNode)) {
        var d = c.createTextNode(b);
        a.innerHTML = "";
        a.appendChild(d)
    } else a.innerText = b
}
var Flighting, SPListView, getSharingHintHtml, onSharingHintClicked;

function RegisterSharedWithFieldRenderer() {
    if (typeof ComputedFieldWorker !== "undefined" && ComputedFieldWorker !== null) ComputedFieldWorker.SharedWith = b;

    function b(b) {
        if (b.CurrentItem.PrincipalCount == null) return "";
        var a = [];
        a.push('<span class="js-sharingHint-listViewWrapper" data-updatestatus="done">');
        a.push(getSharingHintHtml(b.CurrentItem, null));
        a.push("</span>");
        return a.join("")
    }
    getSharingHintHtml = function(d, e) {
        var f = d.PrincipalCount < 1 ? Strings.STS.L_SharedWithNone : Strings.STS.L_SharingHintShared,
            b = [];
        b.push('<a class="ms-subtleLink" href="#" onclick="onSharingHintClicked(this); return false;" aria-label=' + StAttrQuote(f) + ">");
        b.push(a(d));
        Flighting.VariantConfiguration.IsExpFeatureClientEnabled(144) && _spPageContextInfo.webUIVersion >= 15 && b.push(c(d, e));
        b.push("</a>");
        return b.join("")
    };
    var c = function(g, a) {
            var e = Strings.STS.L_SharedWithNone_Short,
                d = Number(g.PrincipalCount),
                c = Boolean(a) ? a : g.SharedWithUsers;
            if (d > 0 && !fIsNullOrUndefined(c) && c.length > 0) {
                var f = d - 1,
                    b = c[c.length - 1].value;
                if (Boolean(a) && !Boolean(b)) b = a[a.length - 1].get_lookupValue();
                e = f > 0 ? StringUtil.BuildParam(Strings.STS.L_UserFieldInlineAndMore, b, f) : b
            } else if (d > 0) e = Strings.STS.L_SharingHintShared_Short;
            var h = "<span class='js-sharingHintString ms-noWrap ms-imnSpan ms-displayInlineBlock' >" + Encoding.HtmlEncode(e) + "</span>";
            return h
        },
        a = function(d) {
            var a = "",
                b = "",
                c = Number(d.PrincipalCount);
            if (c < 1) {
                a = Strings.STS.L_SharedWithNone;
                b = "js-sharingHint-unshared"
            } else {
                b = "js-sharingHint-sharedDefault";
                a = Strings.STS.L_SharingHintShared
            }
            var e = '<span class="js-sharingHint-iconContainer ms-imnImg"><img class=' + StAttrQuote(b) + " title=" + StAttrQuote(a) + " alt=" + StAttrQuote(a) + " src=" + StAttrQuote(GetThemedImageUrl("spcommon.png")) + "></img></span>";
            return e
        };
    onSharingHintClicked = function(e) {
        var c = findIIDInAncestorNode(e),
            a = GetListItemByIID(c),
            d = GetCtxRgiidFromIid(c),
            b = d.ctx;
        _WriteDocEngagement("Documents_SharingIconClick", "OneDrive_SharingIconClick");
        SP.SOD.executeFunc("sharing.js", "DisplaySharedWithDialog", function() {
            var c = !permMaskContains(a.PermMask, 0, 33554432);
            DisplaySharedWithDialogCore(b.HttpRoot, b.listName, a.ID, c, null, a.FSObjType, a.HTML_x0020_File_x0020_Type, false, b.RealHttpRoot)
        })
    }
}

function CalloutRenderViewTemplate(a) {
    var b = "";
    b += a.RenderHeader(a);
    b += a.RenderBody(a);
    b += a.RenderFooter(a);
    return b
}

function CalloutRenderHeaderTemplate(a) {
    var c = GetCalloutElementIDFromRenderCtx(a),
        b = "";
    if (a.ListSchema.IsDocLib == "1") b = a.CurrentItem.FileLeafRef;
    else b = a.CurrentItem.Title;
    return Callout.GenerateDefaultHeader(c, Encoding.HtmlEncode(b), null, true)
}

function CalloutRenderFooterTemplate(a, b, d) {
    if (typeof b === "undefined" || b === null) b = CalloutOnPostRenderTemplate;
    if (typeof d === "undefined" || d === null) d = true;
    var e = GetCalloutElementIDFromRenderCtx(a);
    SPClientRenderer.AddPostRenderCallback(a, function() {
        var c = new CalloutActionMenu(e + "-actions");
        b(a, c);
        c.render()
    });
    var c = [];
    if (d) {
        c.push("<span id=" + Encoding.AttrQuote(e + "-ecbMenu") + ' class="js-callout-actions js-callout-ecbActionDownArrow">');
        c.push(RenderECBinline(a, a.CurrentItem, a.CurrentFieldSchema));
        c.push("</span>")
    }
    return Callout.GenerateDefaultFooter(e, c.join(""))
}

function CalloutRenderBodyTemplate(a) {
    var e = a.Templates.Item;
    if (e == null || e == {}) return "";
    var j = a.ListData,
        i = a.ListSchema,
        h = a.Templates.Header != "",
        c = a.Templates.Group;
    if (c == null || typeof RenderItemTemplateDefault != "undefined" && c == RenderItemTemplateDefault || typeof c != "function" && typeof c != "string") c = RenderGroupTemplate;
    else if (typeof c == "string") c = SPClientRenderer.ParseTemplateString(c, a);
    var b = a.Templates.Item;
    if (b == null || typeof RenderFieldTemplateDefault != "undefined" && b == RenderFieldTemplateDefault || typeof b != "function" && typeof b != "string") b = RenderItemTemplate;
    else if (typeof b == "string") b = SPClientRenderer.ParseTemplateString(b, a);
    var g = a.CurrentItem,
        f = g.ItemType,
        d = e[f];
    if (d == null || d == "") d = b;
    else if (typeof d == "string") {
        d = SPClientRenderer.ParseTemplateString(d, a);
        e[f] = d
    }
    return Callout.GenerateDefaultBody(GetCalloutElementIDFromRenderCtx(a), SPClientRenderer.CoreRender(d, a))
}

function CalloutRenderItemTemplate(a) {
    var b = [];
    a.ListSchema.IsDocLib && b.push(CalloutRenderFilePreview(a));
    b.push(CalloutRenderDlpNotificationPlaceholder(a));
    b.push(CalloutRenderLastModifiedInfo(a));
    b.push(CalloutRenderSharingStatus(a));
    b.push(CalloutRenderSourceUrl(a));
    return b.join("")
}
var RenderECBinline;

function _createNewDocumentCallout(a, e, c, d) {
    function b() {
        var h = a.wpq,
            f = Boolean(c) ? c : document.getElementById(ListModule.Util.addWPQtoId(c_newdocWOPIID + "Hero", h));
        if (Boolean(f)) {
            var b = CalloutManager.getFromLaunchPointIfExists(f);
            if (!Boolean(b) && Boolean(a.NewWOPIDocumentUrl)) {
                var g = a.NewWOPIDocumentUrl + "&Source=" + Nav.getSource(),
                    i = RenderNewDocumentCallout(a, g);
                b = CalloutManager.createNewIfNecessary({
                    launchPoint: f,
                    ID: ListModule.Util.addWPQtoId(c_newdocWOPIID, h),
                    title: Strings.STS.L_NewDocumentCalloutTitle,
                    content: i,
                    onOpeningCallback: function(b) {
                        NewDocumentCallout_OnOpeningCallback(a, g, b)
                    },
                    onOpenedCallback: function() {
                        NewDocumentCallout_OnOpenedCallback(a)
                    },
                    beakOrientation: "leftRight",
                    contentWidth: c_newDocCalloutWidth,
                    allowScroll: true,
                    boundingBox: document.getElementById("s4-workspace")
                });
                if (Boolean(b) && ListModule.Util.canUploadFile(a) && !e) {
                    var j = a.HttpRoot + "/_layouts/15/Upload.aspx?List=" + a.listName + "&RootFolder=" + a.rootFolder;
                    b.addAction(new CalloutAction({
                        text: Strings.STS.L_NewDocumentUploadFile,
                        onClickCallback: function(a) {
                            CalloutManager.closeAll();
                            NewItem2(a, j);
                            return false
                        }
                    }))
                }
            }
        }
        a.qcbNewButtonConfigured = true;
        typeof d == "function" && d()
    }
    EnsureScript("callout.js", typeof CalloutManager, function() {
        var c = g_ExecuteOrWaitJobs["sp.ribbon.js"];
        if (Boolean(window["toolbarData" + a.wpq]) || c === null || Boolean(_v_dictSod) && !Boolean(_v_dictSod.ribbon)) b();
        else ExecuteOrDelayUntilScriptLoaded(b, "sp.ribbon.js")
    })
}
var DisplaySharingDialogCore;

function DisplaySharingDialogForListItem(a, b, c) {
    var f = typeof b === "undefined",
        d = a.currentSelectedItems > 1,
        e = a.currentSelectedItems === 0 && !Boolean(a.ListData.FolderId);
    if (f && (d || e)) {
        WriteDebugLog("DocLib_DispShareDlgInvalidSelection", true, "Attempted to open sharing dialog for " + a.CurrentSelectedItems + " items. We only support sharing 1 at a time.");
        return
    }
    EnsureScriptFunc("sharing.js", "DisplaySharingDialogCore", function() {
        var e, f;
        if (typeof b === "undefined")
            if (a.CurrentSelectedItems == 1) {
                var h;
                for (h in a.dictSel) {
                    b = a.dictSel[h].id;
                    break
                }
            } else if (Boolean(a.ListData.FolderId)) {
            b = String(a.ListData.FolderId);
            e = 1;
            f = ""
        }
        if (Boolean(b)) {
            var d = null;
            if (Boolean(a.CurrentItem)) d = a.CurrentItem;
            else
                for (var i in a.ListData.Row) {
                    var g = a.ListData.Row[i];
                    if (Boolean(g) && g.ID == b) {
                        d = g;
                        break
                    }
                }
            if (Boolean(d) && !Boolean(e) && !Boolean(f)) {
                e = d.FSObjType;
                f = d.HTML_x0020_File_x0020_Type
            }
        }
        if (!Boolean(a.RealHttpRoot)) DisplaySharingDialogCore(a.HttpRoot, a.listName, b, !isNaN(c) ? c : 0, e, f, void 0, document.activeElement);
        else DisplaySharingDialogCore(a.HttpRoot, a.listName, b, 0, e, f, false, document.activeElement, a.RealHttpRoot)
    })
}
var CALLOUT_STR_ELLIPSIS, CALLOUT_ELLIPSIS_LENGTH, CALLOUT_CHARS_TO_TRUNCATE_PER_ITERATION;

function displayTruncatedString(a, c, e) {
    var b = a.offsetWidth;
    while (a.offsetWidth > e) {
        var d = a.innerHTML.length - CALLOUT_CHARS_TO_TRUNCATE_PER_ITERATION;
        a.innerHTML = safeTruncateString(a.innerHTML, d) + CALLOUT_STR_ELLIPSIS;
        if (a.offsetWidth === b) return a.innerHTML;
        b = a.offsetWidth
    }
    if (a.innerHTML.length < c.length) a.title = c;
    return a.innerHTML
}

function displayTruncatedLocation(a, d) {
    var b = 1 + CALLOUT_ELLIPSIS_LENGTH;
    while (a.offsetHeight > d) {
        var c = a.innerHTML.length - b;
        a.innerHTML = CALLOUT_STR_ELLIPSIS + safeTruncateStringFromStart(a.innerHTML, c)
    }
    return a.innerHTML
}

function displayTruncatedUrl(d, k, j, i) {
    var f = 4,
        a = new URI(k.getString());
    d.innerHTML = Encoding.HtmlEncode(a.getDecodedStringForDisplay());
    var h = d.offsetWidth;
    while (d.offsetWidth > j) {
        var c = a.getPath(),
            e = a.getAuthority(),
            b = a.getQuery(),
            g = c.indexOf("/", CALLOUT_ELLIPSIS_LENGTH + 2);
        if (g >= 0) {
            c = "/" + CALLOUT_STR_ELLIPSIS + c.substr(g);
            a.setPath(c)
        } else if (i && b.length > CALLOUT_CHARS_TO_TRUNCATE_PER_ITERATION) {
            b = safeTruncateString(b, b.length - CALLOUT_CHARS_TO_TRUNCATE_PER_ITERATION) + CALLOUT_STR_ELLIPSIS;
            a.setQuery(b)
        } else if (e.length > f + CALLOUT_ELLIPSIS_LENGTH) {
            e = safeTruncateString(e, f) + CALLOUT_STR_ELLIPSIS;
            a.setAuthority(e)
        } else if (c.length > CALLOUT_CHARS_TO_TRUNCATE_PER_ITERATION) {
            c = safeTruncateString(c, c.length - CALLOUT_CHARS_TO_TRUNCATE_PER_ITERATION) + CALLOUT_STR_ELLIPSIS;
            a.setPath(c)
        } else if (b.length > CALLOUT_CHARS_TO_TRUNCATE_PER_ITERATION) {
            b = safeTruncateString(b, b.length - CALLOUT_CHARS_TO_TRUNCATE_PER_ITERATION) + CALLOUT_STR_ELLIPSIS;
            a.setQuery(b)
        }
        d.innerHTML = Encoding.HtmlEncode(a.getDecodedStringForDisplay());
        if (d.offsetWidth === h) return d.innerHTML;
        h = d.offsetWidth
    }
    return d.innerHTML
}

function GetCalloutPolicyTipNotificationElementId(a) {
    return GetCalloutElementIDFromRenderCtx(a) + "-dlpNotificationArea"
}

function CalloutRenderDlpNotificationPlaceholder(a) {
    SPClientRenderer.AddPostRenderCallback(a, CalloutPostRenderPolicyTip);
    return '<div id="' + GetCalloutPolicyTipNotificationElementId(a) + '"></div>'
}

function EnsureECBAdapterOnCtx(b, a) {
    if (!Boolean(a.ecbAdapter)) {
        if (typeof SP == "undefined" || typeof SP.Utilities == "undefined" || typeof SP.Utilities.Internal == "undefined" || typeof SP.Utilities.Internal.ECBAdapter == "undefined") return false;
        a.ecbAdapter = new SP.Utilities.Internal.ECBAdapter(a, function() {
            b.qcb.Poll()
        }, "qcbPoll")
    }
    return true
}

function EnsureEcbAdapterCommandsStateInitialized(a) {
    IsECBCommandEnabled("ViewProperties", a)
}

function IsECBCommandEnabled(c, b) {
    if (typeof GetListContextFromContextNumber == "undefined") return false;
    var a = GetListContextFromContextNumber(b.ctxId);
    return !Boolean(a) ? false : !EnsureECBAdapterOnCtx(b, a) ? false : a.ecbAdapter.canHandleECBCommand(c)
}

function ExecuteECBCommand(a, b) {
    SP.SOD.executeFunc("core.js", "GetListContextFromContextNumber", function() {
        var c = GetListContextFromContextNumber(b.ctxId);
        if (!Boolean(c)) {
            WriteDebugLog("DocLibQCB_ExecECBCmdNoCtx", true, "Could not load a list context for the list when attempting to execute a command");
            return
        }
        SP.SOD.executeFunc("sp.core.js", "SP.Utilities.Internal.ECBAdapter", function() {
            EnsureECBAdapterOnCtx(b, c);
            if (!c.ecbAdapter.executeECBCommand(a)) {
                WriteDebugLog("DocLibQCB_ExecECBCmdFailed", true, "Execution of ECB command " + a + " failed.");
                return
            }
        })
    })
}

function _registerOnItemSelectionChangedHandlerForQCB(a) {
    ExecuteOrDelayUntilScriptLoaded(function() {
        var b = GetListContextFromContextNumber(a.ctxId);
        if (!Boolean(b)) return;
        RegisterOnItemSelectionChangedHandler(b, "qcbOnRefreshCommandUI" + a.wpq, function() {
            a.qcb.Poll()
        })
    }, "core.js")
}

function _unregisterOnItemSelectionChangedHandlerForQCB(a) {
    ExecuteOrDelayUntilScriptLoaded(function() {
        var b = GetListContextFromContextNumber(a.ctxId);
        if (!Boolean(b)) return;
        UnregisterOnItemSelectionChangedHandler(b, "qcbOnRefreshCommandUI" + a.wpq)
    }, "core.js")
}
var MountPointSiteIdFieldName, MountPointWebIdFieldName, MountPointItemUniqueIdFieldName;

function IsMountPoint(a) {
    return Flighting.VariantConfiguration.IsExpFeatureClientEnabled(134) && Boolean(a) && Boolean(a[MountPointSiteIdFieldName]) && Boolean(a[MountPointWebIdFieldName]) && Boolean(a[MountPointItemUniqueIdFieldName])
}

function InMountPoint(a) {
    return Boolean(a.RealHttpRoot)
}

function IsCurrentItemMountPoint(a) {
    return Boolean(a) && Boolean(a.CurrentItem) && IsMountPoint(a.CurrentItem)
}

function IsSelectedItemMountPoint(e) {
    if (Flighting.VariantConfiguration.IsExpFeatureClientEnabled(134)) {
        var a = Boolean(e) ? e : GetCurrentCtx();
        if (a == null || typeof a.dictSel == "undefined" || a.CurrentSelectedItems != 1) return false;
        for (var g in a.dictSel) {
            var d = g.split(",")[1];
            if (Boolean(d)) {
                var b = a.ListData.Row;
                if (Boolean(b))
                    for (var c = 0; c < b.length; c++) {
                        var f = b[c];
                        if (f.ID == d) return IsMountPoint(f)
                    }
            }
        }
    }
    return false
}
var MountPointInfo;

function RenderMountPointLink(b, a, f, c, e) {
    var d = MountPointInfo.createByListItem(c, b);
    a.push('<a onfocus="OnLink(this)" class="ms-listlink" href="');
    if (b.NoScriptEnabled && SupportAjaxFolderNav(b)) {
        a.push('"#" onclick="');
        a.push("EnterFolderAjax(event, '");
        a.push(URI_Encoding.encodeURIComponent(c.FileRef));
        a.push("', '");
        a.push(d.getMountPointUrl());
        a.push("', true);return false;\"");
        Flighting.VariantConfiguration.IsExpFeatureClientEnabled(169) && a.push(' aria-label="' + Encoding.HtmlEncode(Strings.STS.L_FieldType_SharedFolder) + '"');
        a.push(">")
    } else {
        a.push(e.PagePath);
        a.push("?");
        a.push(d.getMountPointUrl());
        if (Flighting.VariantConfiguration.IsExpFeatureClientEnabled(169)) a.push('" aria-label="' + Encoding.HtmlEncode(Strings.STS.L_FieldType_SharedFolder) + '">');
        else a.push('">')
    }
    a.push(Encoding.HtmlEncode(f));
    a.push("</a>")
}

function EnableCreateMountPointIfNeeded(b) {
    var a = new URI(ajaxNavigate.get_href()),
        e = a.getQueryParameter("MountSiteId"),
        f = a.getQueryParameter("MountWebId"),
        c = a.getQueryParameter("MountItemUniqueId"),
        d = a.getQueryParameter("MountItemTitle");
    if (Boolean(e) && Boolean(f) && Boolean(c) && Boolean(d)) {
        var g = createOneTimeCallback(function() {
            EnsureScriptParams("MountPoint.js", "ConfirmCreateMountPoint", d, e, f, c, b.listName, b.ListSchema.PagePath)
        });
        AddPostRenderCallback(b, g)
    }
}

function IsListItemFolder(a) {
    return Boolean(a) && a.FSObjType == "1" && (!Boolean(a.HTML_x0020_File_x0020_Type) || a.HTML_x0020_File_x0020_Type.indexOf("OneNote.Notebook") == -1)
}
var ShortcutLinkTargetUrlFieldName, ShortcutLinkSiteIdFieldName, ShortcutLinkWebIdFieldName, ShortcutLinkUniqueIdFieldName;

function IsShortcutLink(a) {
    return Boolean(a) && (a.File_x0020_Type == "url" || a.File_x0020_Type == "website")
}

function RetrieveShortcutLink(b) {
    if (window.XMLHttpRequest != null) {
        var c = _spPageContextInfo.webAbsoluteUrl + "/_api/SP.Utilities.ShortcutLink.GetShortcutLink('" + URI_Encoding.encodeURIComponent(b) + "')",
            a = new XMLHttpRequest;
        a.open("GET", c, true);
        a.setRequestHeader("Content-Type", "application/json");
        a.setRequestHeader("Accept", "application/json");
        a.onreadystatechange = function() {
            if (a.readyState != 4 || a.status != 200) return;
            var d = JSON.parse(a.responseText),
                c = document.getElementById("shortcut_" + b);
            if (c != null) {
                c.href = d.url;
                c.title = d.url
            }
        };
        a.send(null)
    }
}

function GenerateHref(b, e, g, d) {
    var a = "",
        f = "?";
    if (Boolean(b)) {
        var c = b.indexOf("?");
        if (c != -1) f = b.substring(c)
    }
    if (Boolean(d) && Boolean(g) && Boolean(e)) {
        a = _spPageContextInfo.webAbsoluteUrl + "/_layouts/15/ShortcutLink.aspx";
        a += f;
        a += "&siteid=" + URI_Encoding.encodeURIComponent(e);
        a += "&webid=" + URI_Encoding.encodeURIComponent(g);
        a += "&uniqueid=" + URI_Encoding.encodeURIComponent(d)
    } else if (Boolean(b)) a = b;
    return a
}

function RenderShortcutHrefStart(j, a, k, b, i, e) {
    var f = b[ShortcutLinkUniqueIdFieldName],
        h = b[ShortcutLinkWebIdFieldName],
        g = b[ShortcutLinkSiteIdFieldName],
        d = b[ShortcutLinkTargetUrlFieldName],
        c = GenerateHref(d, g, h, f);
    a.push('<a onfocus="OnLink(this)" class="ms-listlink" href="');
    if (c != "") {
        a.push(Encoding.HtmlEncode(c));
        a.push('" title="');
        a.push(Encoding.HtmlEncode(d))
    } else {
        c = _spPageContextInfo.webAbsoluteUrl + "/_layouts/15/ShortcutLink.aspx?shortcut=" + URI_Encoding.encodeURIComponent(b.FileRef);
        a.push(c);
        a.push('" title="');
        a.push(Encoding.HtmlEncode(Strings.STS.L_Shortcut_Processing));
        if (e) {
            a.push('" id="shortcut_');
            a.push(Encoding.HtmlEncode(b.FileRef));
            RetrieveShortcutLink(b.FileRef)
        }
    }
    a.push('" aria-label="');
    a.push(Encoding.HtmlEncode(Strings.STS.L_FieldType_File_Shortcut));
    a.push('">')
}

function RenderShortcutLink(d, a, b, e, c) {
    RenderShortcutHrefStart(d, a, b, e, c, true);
    a.push(Encoding.HtmlEncode(b));
    a.push("</a>")
}

function RenderShortcutLinkIcon(c, a, e, d, b) {
    RenderShortcutHrefStart(c, a, e, d, b, false);
    a.push('<img border="0" alt="');
    a.push(Encoding.HtmlEncode(Strings.STS.L_FieldType_File_Shortcut));
    a.push('" title="');
    a.push(Encoding.HtmlEncode(Strings.STS.L_FieldType_File_Shortcut));
    a.push('" src="');
    a.push(ListView.ImageBasePath + "/_layouts/15/images/icspgen.gif?rev=44");
    a.push('" />');
    a.push("</a>")
}

function SaveCurrentContextInfo(a) {
    var b = "ctx" + a.ctxId;
    window[b] = a;
    if (Boolean(g_ctxDict)) g_ctxDict[b] = a;
    if (Boolean(g_ViewIdToViewCounterMap) && Boolean(a.view)) g_ViewIdToViewCounterMap[a.view] = a.ctxId
}

function EnableHeroButton(a) {
    if (!Boolean(a.DisableHeroButton)) window["heroButtonWebPart" + a.wpq] = true
}

function SetupDragDrop(b) {
    var a = function() {
        SetDocItemDragDrop(b)
    };
    EnsureScriptFunc("DragDrop.js", "registerDragUpload", a)
}

function _canDragUploadFile(c) {
    var b = c.ListTemplateType,
        a = true;
    if (typeof g_uploadType != "undefined" && (g_uploadType == UploadType.ACTIVEXNA || g_uploadType == UploadType.NOT_SUPPORTED)) a = false;
    return a && !(b == 119 || b == 123)
}

function AjaxNavAddNavigate(a) {
    Nav.ajaxNavigate.add_navigate(a)
}

function GetInplviewHash(a) {
    return Nav.ajaxNavigate.getParam("InplviewHash" + a)
}

function SupportsFileUpload() {
    return true
}

function RenderEasyUploadInputFileElement(b) {
    var a = [];
    a.push('<input type="file" class="ms-hide"');
    Flighting.VariantConfiguration.IsExpFeatureClientEnabled(61) && a.push(' multiple="true"');
    a.push(' id="easyUploadFile');
    a.push(b.wpq);
    a.push('" onchange="HandleEasyUploadInputOnChange(event, this, &quot;');
    a.push(b.wpq);
    a.push('&quot;); return false;" />');
    return a.join("")
}

function IsEasyUploadEnabled(a) {
    return Boolean(a) && !a.inGridMode && a.ListTemplateType == 700 && typeof FormData != "undefined" && Flighting.VariantConfiguration.IsExpFeatureClientEnabled(172)
}

function IsInIframe() {
    try {
        return window.self !== window.top
    } catch (a) {
        return true
    }
}

function RenderProjectTaskListEditMode(a, b) {
    if (a.ListTemplateType == 171 && _spPageContextInfo.webTemplate == "6115")
        if (Boolean(a.bInitialRender) && (a.ListData.LastRow == null || a.ListData.LastRow == 0)) {
            a.inGridMode = true;
            b = function() {
                EnsureScriptParams("inplview", "InitGridFromView", a.view)
            };
            AddPostRenderCallbackUnique(a, b)
        }
}

function RenderGroupListEditMode(a, b) {
    if (a.SiteTemplateId == 64 && _spPageContextInfo.webTemplate == "64") {
        var d = new URI(ajaxNavigate.get_href()),
            c = d.getQueryParameter("ShowInGrid");
        if (!ctx.inGridMode && Boolean(c) && c != "false" && Boolean(a.bInitialRender) && (a.ListData.LastRow == null || a.ListData.LastRow == 0)) {
            a.inGridMode = true;
            b = function() {
                EnsureScriptParams("inplview", "InitGridFromView", a.view)
            };
            AddPostRenderCallbackUnique(a, b)
        }
    }
}

function WriteDebugLog(c, a, b) {
    SP.DebugLogger.Write(c, a ? SP.DebugLogger.LoggingLevel.Interesting : SP.DebugLogger.LoggingLevel.Boring, b)
}

function WriteEngagementLog(b, a) {
    SP.QoS.WriteUserEngagement(b, a)
}

function WriteDocEngagementLog(c, b, a) {
    _WriteDocEngagement(c, b, a)
}

function WriteStart(b, a) {
    SP.QoS.WriteStart(b, a)
}

function WriteSuccess(d, a, c, b) {
    SP.QoS.WriteSuccess(d, a, c, b)
}

function WriteFailure(d, a, c, b) {
    SP.QoS.WriteFailure(d, a, c, b)
}

function WriteStartDiagnostic(b, a) {
    SP.QoS.WriteStart(b, a, SP.QoS.LogType.Diagnostic, null)
}

function WriteSuccessDiagnostic(b, a) {
    SP.QoS.WriteSuccess(b, a, SP.QoS.LogType.Diagnostic, null)
}

function WriteFailureDiagnostic(b, a) {
    SP.QoS.WriteFailure(b, a, SP.QoS.LogType.Diagnostic, null)
}

function WriteListViewSuccessLog(a) {
    if (typeof performance != "undefined" && typeof performance.timing != "undefined") {
        var b = a.ListTemplateType > 0 ? a.ListTemplateType * 1e4 : 0;
        if (typeof a.BaseViewID == "number") b += a.BaseViewID;
        if (window.groupContextData != null) b = b * 10 + 1;
        var c = +new Date,
            i = "ListView",
            h = 0,
            f = false,
            g = false;
        if (Boolean(a.startTime)) {
            LogRUMExtendedAction("InplviewTime", b, null, c - a.startTime, 2);
            h = Number(a.startTime);
            g = true;
            a.startTime = null
        } else if (Flighting.VariantConfiguration.IsExpFeatureClientEnabled(192) || Flighting.VariantConfiguration.IsExpFeatureClientEnabled(511)) {
            var d = "ListRendered",
                e = window.applicationCache;
            if (Boolean(e) && e.UNCACHED != e.status) {
                d += "_FromAppCache";
                f = true;
                WriteSuccessDiagnostic(d)
            }
            LogRUMExtendedAction(d, b, null, c, 2)
        } else LogRUMExtendedAction("ListRendered", b, null, c, 2);
        EnsureScriptFunc("sp.core.js", "SP.SlapiInternal", function() {
            var a = IsNullOrUndefined(PerformanceLogger) ? null : PerformanceLogger.GetLogger();
            if (!IsNullOrUndefined(a)) {
                a.WriteScenarioId(String(b));
                a.WriteAppCache(f);
                a.WriteFolderNav(g);
                if (typeof PerformanceLogger.ControlPerformanceData == "function") {
                    var d = new PerformanceLogger.ControlPerformanceData(i, h, Number(c), ComputeListViewRenderTime, CheckListViewRenderTimeRequiredDataAvailable);
                    a.WriteControlPerformanceData(d)
                }
            }
        });
        if (typeof g_MinimalDownload == "undefined" || !g_MinimalDownload) typeof SP.Performance.UploadNonMDSPageLoadTime != "undefined" && SP.Performance.UploadNonMDSPageLoadTime(a.ListTemplateType, c)
    }
    typeof SP.ReadyToUploadLogs != "undefined" && SP.ReadyToUploadLogs()
}

function CheckListViewRenderTimeRequiredDataAvailable(a, f) {
    if (IsNullOrUndefined(a) || IsNullOrUndefined(f)) return false;
    var c = a.GetPerformanceDataPropertyValue("FolderNav");
    if (!IsNullOrUndefined(c) && c) return true;
    var b = a.GetPerformanceDataPropertyValue("PageTransitionType");
    if (IsNullOrUndefined(b)) return false;
    if (b === 1) {
        var e = a.GetPerformanceDataPropertyValue("MDSDownloadStart");
        if (IsNullOrUndefined(e)) return false
    } else {
        var d = a.GetPerformanceDataPropertyValue("W3cNavigationStart");
        if (IsNullOrUndefined(d)) return false
    }
    return true
}

function ComputeListViewRenderTime(b, a) {
    if (IsNullOrUndefined(b) || IsNullOrUndefined(a)) return 0;
    var f = b.GetPerformanceDataPropertyValue("FolderNav");
    if (!IsNullOrUndefined(f) && f) return Number(a.EndTime) - Number(a.StartTime);
    var c = b.GetPerformanceDataPropertyValue("PageTransitionType"),
        d = b.GetPerformanceDataPropertyValue("W3cNavigationStart"),
        e = b.GetPerformanceDataPropertyValue("MDSDownloadStart");
    return IsNullOrUndefined(a.ControlId) || IsNullOrUndefined(a.EndTime) || IsNullOrUndefined(c) ? 0 : c === 1 ? IsNullOrUndefined(e) ? 0 : Number(a.EndTime) - Number(e) : c > 1 && c <= 4 ? IsNullOrUndefined(d) ? 0 : Number(a.EndTime) - Number(d) : 0
}

function _EnsureJSClassOrNamespace(f, e) {
    for (var d = f.split("."), a, c = 0, g = d.length; c < g; c++) {
        var b = d[c];
        if (typeof a == "undefined") a = window;
        if (typeof a[b] == "undefined") a[b] = {};
        a = a[b];
        if (e) a.__namespace = true
    }
}

function _EnsureJSNamespace(a) {
    _EnsureJSClassOrNamespace(a, true)
}

function _EnsureJSClass(a) {
    _EnsureJSClassOrNamespace(a, false)
}
var g_prefetch, g_ribbonImagePrefetch, BaseLogger, CacheLogger;

function CacheLogger_module_def() {
    CacheLogger.DefaultUploader = function(e) {
        var a = null,
            c = false,
            b = function() {
                if (null != a) {
                    clearTimeout(Number(a));
                    a = null
                }
            },
            d = function() {
                b();
                e()
            };
        this.CanUpload = function() {
            return c
        };
        this.OnLog = function() {
            if (null == a) a = setTimeout(d, 5e3)
        };
        this.OnUpload = function() {
            b()
        };
        DOM.AddEventHandler(window, "onload", function() {
            c = true;
            d()
        })
    };
    CacheLogger.Logger = function(a, c, e) {
        if (!Boolean(a) || a.length == 0) a = "CacheLogger";
        if (!Boolean(c)) c = BaseLogger.GetLogger();
        if (!Boolean(e)) e = CacheLogger.DefaultUploader;
        var b = -1,
            d = "sessionID",
            g = function(c) {
                if (-1 == c) {
                    var b = BrowserStorage.session.getItem(a + "size");
                    if (!Boolean(b)) b = BrowserStorage.session.getItem(a + "Size");
                    if (!Boolean(b)) b = "0";
                    return parseInt(b, 10)
                }
                return c
            },
            h = function() {
                try {
                    var a = function(b) {
                        var a = "";
                        do a += Math.random().toString(16).substr(2, b - a.length); while (a.length < b);
                        return a
                    };
                    return a(8) + "-" + a(4) + "-4" + a(3) + "-" + a(4) + "-" + a(12)
                } catch (b) {
                    return ""
                }
            },
            i = function() {
                if (!f.CanUpload()) return;
                b = g(b);
                for (var j = false, e = 0; e < b; e++) {
                    var k = BrowserStorage.session.getItem(a + e.toString());
                    try {
                        var i = JSON.parse(k);
                        c.WriteLog(String(i.name), i.props);
                        j = true
                    } catch (l) {
                        continue
                    }
                }
                if (!j) return;
                if (typeof window[d] == "undefined")
                    if (typeof g_correlationId == "string" && g_correlationId != null) window[d] = g_correlationId;
                    else window[d] = h();
                c.SetCorrelationId(window[d]);
                c.UploadData();
                b = 0;
                BrowserStorage.session.removeItem(a + "Size");
                BrowserStorage.session.setItem(a + "size", 0);
                f.OnUpload()
            },
            f = new e(i);
        CacheLogger.GenerateGuid = function() {
            return h()
        };
        this.WriteLog = function(e, c, h) {
            if (!Boolean(e) || !Boolean(c)) return;
            if (!Boolean(c.ClientTime)) c.ClientTime = (new Date).valueOf();
            var j = {
                name: e,
                props: c
            };
            b = g(b);
            if (b >= 100) return;
            var d = "";
            try {
                d = JSON.stringify(j)
            } catch (k) {
                return
            }
            BrowserStorage.session.setItem(a + b.toString(), d);
            b++;
            BrowserStorage.session.setItem(a + "size", b);
            f.OnLog();
            Boolean(h) && setTimeout(i, 0)
        }
    };
    var a = null;
    CacheLogger.GetLogger = function() {
        if (null == a) a = new CacheLogger.Logger;
        return a
    }
}
var DebugLogger;

function DebugLogger_module_def() {
    var c = "ReliabilityLog",
        a = 5e3,
        d = 25;
    DebugLogger.Logger = function(g, d) {
        if (!Boolean(d)) d = CacheLogger.GetLogger();
        var f = new e(g);
        this.Write = function(e, i, b, g) {
            if (!Boolean(e) || e.length == 0) return;
            if (!Boolean(b)) b = "";
            if (!Boolean(g)) g = "";
            if (typeof b.stack == "string") b = b.stack;
            else if (typeof b.message == "string") b = b.message;
            else b = h(b);
            if (e.length > a || Number(b.length) > a || g.length > a) {
                e = e.substring(0, a);
                b = b.substring(0, a);
                g = b.substring(0, a)
            }
            var k = {
                Tag: e,
                Level: i,
                Message: b,
                Misc: g,
                UserAgent: navigator.userAgent
            };
            if (this.LoggingLevel.Boring == i) {
                f.Push(k);
                return
            }
            var j;
            while (Boolean(j = f.GetOldest())) d.WriteLog(c, j);
            d.WriteLog(c, k, true)
        };
        this.LoggingLevel = {
            Boring: 0,
            Interesting: 1
        };
        var b = [{
                func: "get_errorCode",
                name: "ErrorCode"
            }, {
                func: "get_errorTraceCorrelationId",
                name: "CorrelationId"
            }, {
                func: "get_errorTypeName",
                name: "ErrorType"
            }, {
                func: "get_message",
                name: "Message"
            }, {
                func: "get_stackTrace",
                name: "StackTrace"
            }],
            h = function(c) {
                for (var f = {}, e = false, a = 0; a < b.length; a++)
                    if (typeof c[b[a].func] == "function") {
                        var d = c[b[a].func].call(c);
                        if (d != null && d != "") {
                            f[b[a].name] = d;
                            e = true
                        }
                    }
                return e ? JSON.stringify(f) : String(c)
            }
    };
    var b = null;
    DebugLogger.GetLogger = function() {
        if (null == b) b = new DebugLogger.Logger(d);
        return b
    };
    var e = function(d) {
        var e = d,
            b = 0,
            c = -1,
            a = -1,
            f = new Array(d);
        this.Push = function(g) {
            c++;
            if (c == e) c = 0;
            if (a == -1 || c == a) {
                a++;
                if (a == e) a = 0
            }
            f[c] = g;
            b++;
            if (b > d) b = d
        };
        this.GetOldest = function() {
            if (b == 0) return null;
            var d = f[a];
            b--;
            if (b < 0) b = 0;
            if (b > 0) {
                a++;
                if (a == e) a = 0
            }
            if (b == 0) {
                a = -1;
                c = -1
            }
            return d
        }
    }
}
var QoSLogger;

function QoSLogger_module_def() {
    var b = "UserEngagement";
    QoSLogger.Logger = function(d, e) {
        if (!Boolean(d)) d = CacheLogger.GetLogger();
        var a = this;
        this.LogType = {
            Engagement: 0,
            Diagnostic: 1
        };
        var c = function(i, f, c, g) {
            var e = "";
            if (Boolean(f)) try {
                e = JSON.stringify(f)
            } catch (j) {}
            if (!Boolean(c)) c = a.LogType.Engagement;
            var h = {
                EngagementName: i,
                Properties: e,
                Duration: g,
                LogType: c
            };
            d.WriteLog(b, h)
        };
        this.WriteStart = function(e, a, d, b) {
            c(e, a, d, b)
        };
        this.WriteSuccess = function(e, a, d, b) {
            c(e, a, d, b)
        };
        this.WriteFailure = function(b, d, g, f, a) {
            c(b, d, g, f);
            Boolean(e) && Boolean(a) && e.Write(b, e.LoggingLevel.Interesting, a)
        };
        this.WriteUserEngagement = function(b, a) {
            c(b, a, this.LogType.Engagement, null)
        };
        this.ScenarioMonitor = function(z, y, w, j, u, s, b) {
            var e = false,
                l = null,
                g = null,
                f = null,
                i = null,
                h = null,
                d = false,
                c = false,
                k, o, p = false,
                x = function() {
                    a.WriteStart(y, s, b, null)
                },
                v = function(c) {
                    a.WriteSuccess(w, l, b, c)
                },
                r = function(c) {
                    a.WriteFailure(k, g, b, c, i)
                },
                q = function(c) {
                    a.WriteFailure(j, f, b, c, h)
                },
                t = function(c) {
                    a.WriteFailure(u, null, b, c)
                };
            this.Success = function(a) {
                if (e) return;
                e = true;
                l = a
            };
            this.ExpectedFailure = function(c, a, b) {
                if (d) return;
                d = true;
                g = a;
                i = b;
                k = c
            };
            this.UnexpectedFailure = function(a, b, d) {
                if (c) return;
                c = true;
                f = b;
                h = d;
                if (null != a) j = a
            };
            var m = function() {
                n()
            };
            this.Dispose = function() {
                n()
            };

            function n() {
                if (p) return;
                p = true;
                var a = Number(new Date) - o;
                if (d) r(a);
                else if (c) q(a);
                else if (e) v(a);
                else t(a);
                DOM.RemoveEventHandler(window, "onbeforeunload", m)
            }
            x();
            DOM.AddEventHandler(window, "onbeforeunload", m);
            o = Number(new Date)
        };
        this.ExecuteMonitoredCode = function(f, i, h, d, g, e, c, j) {
            var b = new a.ScenarioMonitor(f, i, h, d, g, c, j);
            try {
                e(b);
                b.Success(c)
            } catch (k) {
                b.UnexpectedFailure(d, c, k);
                throw k;
            } finally {
                b.Dispose()
            }
        };
        this.ExecuteMonitoredAsync = function(h, m, j, d, i, g, l, k, c, n) {
            var b = new a.ScenarioMonitor(h, m, j, d, i, c, n),
                f = function(a, e) {
                    try {
                        l(a, e, b);
                        b.Success(c)
                    } catch (f) {
                        b.UnexpectedFailure(d, c, f);
                        throw f;
                    } finally {
                        b.Dispose()
                    }
                },
                e = function(e, a) {
                    try {
                        k(e, a, b)
                    } catch (f) {
                        throw f;
                    } finally {
                        b.UnexpectedFailure(d, c, a);
                        b.Dispose()
                    }
                };
            try {
                g(f, e)
            } catch (o) {
                b.UnexpectedFailure(d, c, o);
                b.Dispose();
                throw o;
            }
        }
    };
    var a = null;
    QoSLogger.GetLogger = function() {
        if (null == a) a = new QoSLogger.Logger;
        return a
    }
}
var RUMDelta, PerformanceLogger;

function PerformanceLogger_module_def() {
    PerformanceLogger.ControlPerformanceData = function(c, d, e, b, a) {
        this.ControlId = c;
        this.StartTime = d;
        this.EndTime = e;
        this.RenderTimeCalculator = b;
        this.RenderTimeRequiredDataChecker = a
    };
    PerformanceLogger.ControlPerformanceData.prototype.RenderTime = 0;
    PerformanceLogger.PerformanceDataState = {
        Incomplete: 1,
        ReadyToUpload: 2,
        Uploaded: 3,
        TimeOut: 4
    };
    var a = PerformanceLogger.PerformanceDataState;
    PerformanceLogger.Logger = function(e) {
        this.PerformanceData = null;
        var d = new Array(0),
            c = a.Incomplete,
            f = null,
            K = 100,
            x = 3e4,
            s = ["ServerCorrelationId", "ServerRequestDuration", "EUPL", "ServerUrl", "ScenarioId", "PageTransitionType", "AppCache", "FolderNav", "W3cNavigationStart"],
            o = ["ListView"],
            w = Number(+new Date),
            g = false,
            h = false,
            i = false,
            p = false,
            k = false,
            r = false,
            l = false,
            n = false,
            j = false,
            m = false,
            b = this;
        if (IsNullOrUndefined(e)) e = CacheLogger.GetLogger();
        this.GetPerformanceData = function() {
            if (!IsNullOrUndefined(b.PerformanceData)) return b.PerformanceData;
            EnsureScriptFunc("sp.core.js", "SP.SlapiInternal", function() {
                if (IsNullOrUndefined(b.PerformanceData))
                    if (typeof SP === "object" && typeof SP.SlapiInternal === "object") {
                        var a = SP.SlapiInternal;
                        b.PerformanceData = new a.RUMOne
                    }
            });
            return b.PerformanceData
        };
        this.GetPerformanceData();

        function q() {
            f = setTimeout(B, K)
        }

        function u() {
            if (!IsNullOrUndefined(f)) {
                clearTimeout(f);
                f = null
            }
        }

        function B() {
            u();
            if (c === a.Uploaded || c === a.TimeOut) return;
            for (var f = true, e = new Array(0), d = 0; d < s.length; d++) {
                var g = b.GetPerformanceDataPropertyValue(s[d]);
                if (IsNullOrUndefined(g)) {
                    f = false;
                    e.push(s[d])
                }
            }
            c = f ? a.ReadyToUpload : a.Incomplete;
            if (c === a.Incomplete)
                if (Number(+new Date) - Number(w) > x) {
                    c = a.TimeOut;
                    v();
                    EnsureScriptFunc("sp.core.js", "SP.SlapiInternal", function() {
                        y("TimeOut", "Did not get key perf metrics in " + String(x) + " milliseconds. Missed metrics: " + e.join() + ".")
                    })
                } else {
                    b.WriteServerCorrelationId();
                    J();
                    G() && D()
                }
            else {
                try {
                    v()
                } catch (h) {
                    (function(a) {
                        typeof console != "undefined" && Boolean(console) && typeof console.error == "function" && console.error(String(a))
                    })("PerformanceLogger: error writing RUMOne data.")
                }
                c = a.Uploaded
            }
            q()
        }
        q();
        this.ResetPerformanceLogger = function() {
            w = +new Date;
            c = a.Incomplete;
            g = false;
            h = false;
            i = false;
            p = false;
            k = false;
            r = false;
            l = false;
            n = false;
            j = false;
            m = false;
            d = new Array(0);
            b.PerformanceData = null;
            b.GetPerformanceData();
            u();
            q()
        };
        this.LogPerformanceData = function(a, c) {
            if (IsNullOrUndefined(a)) return;
            EnsureScriptFunc("sp.core.js", "SP.SlapiInternal", function() {
                b.GetPerformanceData();
                if (!t(a)) return;
                b.PerformanceData[a] = c;
                F({
                    Name: a,
                    Value: c
                })
            })
        };
        this.GetPerformanceDataPropertyValue = function(a) {
            return IsNullOrUndefined(b.PerformanceData) || IsNullOrUndefined(a) || !t(a) ? null : b.PerformanceData[a]
        };

        function t(a) {
            var c = C(b.PerformanceData);
            return c.join().indexOf(a) != -1
        }

        function C(a) {
            var c = new Array(0),
                d = 0;
            if (!IsNullOrUndefined(a))
                for (var b in a)
                    if (a.hasOwnProperty(b)) c[d++] = b;
            return c
        }
        this.WriteServerCorrelationId = function(a) {
            if (g) return;
            if (!IsNullOrUndefined(a)) b.LogPerformanceData("ServerCorrelationId", a);
            else if (typeof g_correlationId === "string" && !IsNullOrUndefined(g_correlationId)) {
                b.LogPerformanceData("ServerCorrelationId", g_correlationId);
                g = true
            }
        };

        function J() {
            if (m) return;
            if (!IsNullOrUndefined(b.PerformanceData)) {
                b.LogPerformanceData("ServerUrl", window.location.href);
                m = true
            }
        }
        this.WriteServerSideLatency = function(c, a) {
            if (!IsNullOrUndefined(b.PerformanceData) && !i) {
                if (!IsNullOrUndefined(c)) {
                    b.LogPerformanceData("ServerRequestDuration", c);
                    i = true
                }!IsNullOrUndefined(a) && b.LogPerformanceData("IISLatency", a)
            }
        };
        this.WriteControlPerformanceData = function(a) {
            if (IsNullOrUndefined(a) || IsNullOrUndefined(d)) return;
            d.push(a)
        };

        function A(e) {
            if (IsNullOrUndefined(d) || IsNullOrUndefined(b.PerformanceData) || IsNullOrUndefined(e)) return;
            var c = e.ControlId,
                a = e.RenderTime;
            if (IsNullOrUndefined(b.GetPerformanceDataPropertyValue("Control1Id"))) {
                b.LogPerformanceData("Control1Id", c);
                b.LogPerformanceData("Control1RenderTime", a);
                return
            }
            if (IsNullOrUndefined(b.GetPerformanceDataPropertyValue("Control2Id"))) {
                b.LogPerformanceData("Control2Id", c);
                b.LogPerformanceData("Control2RenderTime", a);
                return
            }
            if (IsNullOrUndefined(b.GetPerformanceDataPropertyValue("Control3Id"))) {
                b.LogPerformanceData("Control3Id", c);
                b.LogPerformanceData("Control3RenderTime", a);
                return
            }
            if (IsNullOrUndefined(b.GetPerformanceDataPropertyValue("Control4Id"))) {
                b.LogPerformanceData("Control4Id", c);
                b.LogPerformanceData("Control4RenderTime", a);
                return
            }
        }

        function G() {
            var e = true;
            if (IsNullOrUndefined(o)) return false;
            for (var c = 0; c < o.length; c++) {
                var a = I(o[c], d);
                if (IsNullOrUndefined(a) || !a.RenderTimeRequiredDataChecker(b, a)) {
                    e = false;
                    break
                }
            }
            return e
        }

        function I(c, a) {
            if (IsNullOrUndefined(c) || IsNullOrUndefined(a)) return null;
            for (var b = 0; b < a.length; b++)
                if (c === a[b].ControlId) return a[b];
            return null
        }

        function D() {
            if (r) return;
            var e = 0;
            if (IsNullOrUndefined(d)) return;
            for (var c = 0; c < d.length; c++) {
                var a = d[c];
                a.RenderTime = a.RenderTimeCalculator(b, a);
                A(a);
                if (e < a.RenderTime) e = a.RenderTime
            }
            b.LogPerformanceData("EUPL", e);
            r = true
        }
        this.WriteAppCache = function(a) {
            if (p) return;
            b.LogPerformanceData("AppCache", a);
            p = true
        };
        this.WriteFolderNav = function(a) {
            if (k) return;
            b.LogPerformanceData("FolderNav", a);
            k = true
        };
        this.WritePageTransitionType = function(a) {
            if (h) return;
            if (IsNullOrUndefined(a) || a < 0 || a > 4) return;
            b.LogPerformanceData("PageTransitionType", a);
            h = true
        };
        this.WriteScenarioId = function(a) {
            if (j) return;
            if (IsNullOrUndefined(a)) return;
            b.LogPerformanceData("ScenarioId", a);
            j = true
        };
        this.WriteMDSTiming = function(c, d) {
            if (l) return;
            var a = E(c);
            if (!IsNullOrUndefined(a)) {
                b.LogPerformanceData(a, d);
                if (a === "MDSAnimationEnd") l = true
            }
        };
        this.CollectW3CPerfTimings = function() {
            if (n) return;
            var a = ["navigationStart", "unloadEventStart", "unloadEventEnd", "fetchStart", "redirectStart", "redirectEnd", "domainLookupStart", "domainLookupEnd", "connectStart", "secureConnectStart", "connectEnd", "requestStart", "responseStart", "responseEnd", "domLoading", "domComplete", "loadEventStart", "loadEventEnd"],
                d = z();
            if (IsNullOrUndefined(d)) return;
            for (var f = new Array(a.length), c = 0; c < a.length; c++) {
                var e = d[a[c]];
                if (IsNullOrUndefined(e)) continue;
                b.LogPerformanceData(H(a[c]), Number(e))
            }
            n = true
        };

        function H(a) {
            return "W3c" + a.charAt(0).toUpperCase() + a.slice(1)
        }

        function z() {
            var b = window.self.performance;
            if (IsNullOrUndefined(b)) return null;
            var a = b.timing;
            return IsNullOrUndefined(a) ? null : a
        }

        function E(a) {
            switch (a) {
                case 0:
                    return "MDSDownloadStart";
                case 1:
                case 2:
                    return "MDSParseDeltaStart";
                case 3:
                    return "MDSParseDeltaEnd";
                case 4:
                    return "MDSGCStart";
                case 5:
                    return "MDSGCEnd";
                case 6:
                case 7:
                case 8:
                    return "MDSCSSStart";
                case 9:
                    return "MDSCSSEnd";
                case 10:
                    return "MDSInnerHTMLStart";
                case 11:
                case 12:
                    return "MDSScriptLoaderStart";
                case 13:
                    return "MDSScriptLoaderEnd";
                case 14:
                    return "MDSAnimationStart";
                case 15:
                    return "MDSAnimationEnd";
                case 16:
                    return "MDSParallelDownloadStart";
                case 17:
                    return "MDSParallelDownloadEnd";
                default:
                    return null
            }
        }

        function F(d) {
            if (c === a.Uploaded || c === a.TimeOut) {
                var e = "Late Reported Data",
                    b = JSON.stringify(d);
                EnsureScriptFunc("sp.core.js", "SP.SlapiInternal", function() {
                    y(e, b)
                })
            }
        }

        function v() {
            if (IsNullOrUndefined(b.PerformanceData) || c != a.ReadyToUpload && c != a.TimeOut) return;
            if (IsNullOrUndefined(e)) return;
            e.WriteLog("RUMOne", b.GetPerformanceData(), true)
        }

        function y(d, c) {
            var b = SP.SlapiInternal,
                a = new b.RUMOneErrors;
            a.Reason = d;
            a.Message = c;
            if (IsNullOrUndefined(e)) return;
            e.WriteLog("RUMOneErrors", a)
        }
    };
    PerformanceLogger.GetLogger = function() {
        if (!Flighting.VariantConfiguration.IsExpFeatureClientEnabled(517)) return null;
        if (typeof g_RUMOneLogger == "undefined" || IsNullOrUndefined(g_RUMOneLogger))
            if (typeof SP == "object" && typeof SP.CacheLogger == "object" && !IsNullOrUndefined(SP.CacheLogger)) g_RUMOneLogger = new PerformanceLogger.Logger(SP.CacheLogger);
            else g_RUMOneLogger = new PerformanceLogger.Logger;
        return g_RUMOneLogger
    }
}
var SPRUMLogger;

function SPRUMLogger_module_def() {
    if (typeof SP.Performance == "undefined") SP.Performance = {};
    if (typeof SP.Performance.Log == "undefined") SP.Performance.Log = function(d) {
        var a = new RUMDelta.Logger(d),
            f = null;
        this.UploadNonMDSPageLoadTelemetry = function(f, g) {
            var d = b();
            if (Boolean(d)) {
                var h = g - d,
                    e = c(f);
                a.UploadRUMData(e, d, 0, 0, 0, h)
            }
        };
        var e = function(a) {
                if (typeof _spPageContextInfo != "undefined" && Boolean(_spPageContextInfo) && Boolean(_spPageContextInfo[a])) {
                    var b = _spPageContextInfo[a];
                    if (Boolean(b)) return b
                }
                return null
            },
            c = function(b) {
                return (RUMDelta.Application.SharePoint << 16) + b
            },
            b = function() {
                var a = 0;
                if (typeof performance != "undefined" && typeof performance.timing != "undefined") {
                    var b = performance.timing;
                    a = Number(b.navigationStart);
                    if (a == 0) a = Number(b.redirectStart);
                    if (a == 0) a = Number(b.fetchStart)
                }
                return a
            };
        this.UploadFileXferTelemetry = function(d, c, g, f) {
            var b = -1;
            if (d.toLowerCase() == "wacdownload") b = 1;
            else if (d.toLowerCase() == "download") b = 2;
            if (b != -1) {
                var h = typeof RUMDelta.Application.SharePointFileXfer != "undefined" ? RUMDelta.Application.SharePointFileXfer : 3,
                    e = (h << 16) + b;
                a.UploadRUMData(e, c, 0, 0, f, g - c)
            }
        }
    }
}
var SPLoggers;

function SPLoggers_module_def() {
    if (typeof SP.ReadyToUploadLogs != "undefined") return;
    SP.ReadyToUploadLogs = function() {};
    var e = function(b) {
            var a = null;
            this.CanUpload = function() {
                return null != a
            };
            this.OnLog = function() {
                null != a && a.OnLog()
            };
            this.OnUpload = function() {
                null != a && a.OnUpload()
            };
            SP.ReadyToUploadLogs = function() {
                if (null != a) return;
                a = new CacheLogger.DefaultUploader(b);
                setTimeout(b, 0)
            }
        },
        c = false;
    try {
        c = window.parent != null && typeof window.parent.SP == "object" && typeof window.parent.SP.CacheLogger == "object" && window.parent.location.protocol == window.location.protocol && window.parent.location.host == window.location.host
    } catch (f) {}
    if (c) {
        var b = window.parent;
        SP.DebugLogger = new DebugLogger.Logger(25, b.SP.CacheLogger);
        SP.QoS = new QoSLogger.Logger(b.SP.CacheLogger, SP.DebugLogger)
    } else {
        SP.CacheLogger = new CacheLogger.Logger("SPCacheLogger", BaseLogger.GetLogger(), e);
        SP.DebugLogger = new DebugLogger.Logger(25, SP.CacheLogger);
        SP.QoS = new QoSLogger.Logger(SP.CacheLogger, SP.DebugLogger)
    }
    var d = {
            WriteLog: function(b, a) {
                SP.CacheLogger.WriteLog(b, a, true)
            },
            UploadData: function() {}
        },
        a;
    SP.Performance.Log.GetLogger = function() {
        if (a == null) a = new SP.Performance.Log(d);
        return a
    }
}

function _WriteDocEngagement(d, c, b) {
    var a = window.ctx;
    if (a != null && (Boolean(a.RealSiteTemplateId) ? a.RealSiteTemplateId === 21 : a.SiteTemplateId === 21)) SP.QoS.WriteUserEngagement(c, b);
    else SP.QoS.WriteUserEngagement(d, b)
}

function _WriteDocDebugLog(e, d, b, c) {
    var a = window.ctx;
    if (a != null && (Boolean(a.RealSiteTemplateId) ? a.RealSiteTemplateId === 21 : a.SiteTemplateId === 21)) SP.DebugLogger.Write(d, b, c);
    else SP.DebugLogger.Write(e, b, c)
}

function _WriteDocStartTag(b, a) {
    _WriteDocEngagement(b, a)
}

function _WriteDocSuccessTag(b, a) {
    _WriteDocEngagement(b, a)
}

function _WriteDocFailureTag(b, a) {
    _WriteDocEngagement(b, a)
}

function WriteDebugLogWithEventArgs(b, a) {
    SP.DebugLogger.Write(b, SP.DebugLogger.LoggingLevel.Interesting, getLoggingInfo(a))
}
var getLoggingInfo, addToInfoIfExists, _TelemetryEndTime, UploadFileXferTelemetry;

function RumNonMDSHandler() {
    setTimeout(CollectRUMNonMDS, 0)
}
var SPThemeUtils;

function SPThemeUtils_module_def() {
    SPThemeUtils.ApplyCurrentTheme = cb;
    SPThemeUtils.ClearThemeCache = hb;
    SPThemeUtils.GetCurrentStyleSheetText = Q;
    SPThemeUtils.GetCurrentThemeCacheToken = O;
    SPThemeUtils.GetSiteThemedCssFolderUrl = t;
    SPThemeUtils.GetThemedStyleSheets = Y;
    SPThemeUtils.GetThemeColor = nb;
    SPThemeUtils.IsSiteThemed = I;
    SPThemeUtils.LoadThemableResources = x;
    SPThemeUtils.RegisterAllImages = db;
    SPThemeUtils.RegisterCssReferences = W;
    SPThemeUtils.ReplaceCssTextForElement = R;
    SPThemeUtils.SetThemeRetriever = eb;
    SPThemeUtils.Suspend = F;
    SPThemeUtils.UseCdnForCss = i;
    SPThemeUtils.UseClientSideTheming = c;
    SPThemeUtils.UseShellThemes = mb;
    SPThemeUtils.WhenThemeReady = o;
    SPThemeUtils.WithCurrentTheme = gb;
    SPThemeUtils.WithSiteTheme = p;
    var d = "undefined",
        A = "data-original-href",
        r = p;

    function qb(a) {
        typeof console !== d && typeof console.warn !== d && console.warn(a)
    }

    function F() {
        a().SuspendTheming()
    }

    function k() {
        return typeof Flighting !== d && typeof Flighting.VariantConfiguration !== d && typeof Flighting.VariantConfiguration.IsExpFeatureClientEnabled !== d
    }

    function c() {
        var a = k() && Flighting.VariantConfiguration.IsExpFeatureClientEnabled(104),
            b = a && typeof Theming !== d && !u();
        return b
    }

    function i() {
        return c() && Flighting.VariantConfiguration.IsExpFeatureClientEnabled(433)
    }

    function mb() {
        return c() && Flighting.VariantConfiguration.IsExpFeatureClientEnabled(107)
    }

    function a() {
        return Theming.GetPageManager()
    }

    function Q(b) {
        return a().GetCurrentStyleSheetText(b)
    }

    function Y() {
        return a().GetThemedStyleSheets()
    }

    function nb(b, c) {
        return a().GetColorFromPalette(b, c)
    }

    function C(b) {
        if (c()) a().WhenImagesThemed(b);
        else b()
    }

    function o(b) {
        if (c()) a().WhenReady(b);
        else b()
    }

    function D(b) {
        var a;
        try {
            a = b.responseText
        } catch (c) {}
        return a
    }

    function s(a) {
        return {
            PageCorrelation: window.g_correlationId,
            PageURL: Nav.ajaxNavigate.get_href(),
            IsAppWeb: b("isAppWeb"),
            XHR_Correlation: a.getResponseHeader("SPRequestGuid"),
            XHR_Status: a.status,
            WebTemplate: b("webTemplate")
        }
    }

    function H(a, b) {
        this.header = a;
        this.value = b
    }

    function S(f, d, b) {
        var a = new XMLHttpRequest;
        a.onreadystatechange = function() {
            if (a != null && a.readyState != 4) return;
            d(a);
            a = null
        };
        try {
            a.open("GET", f, true);
            if (b != null)
                for (var c = 0; c < b.length; c++) {
                    var e = b[c];
                    a.setRequestHeader(e.header, e.value)
                }
            a.send("")
        } catch (g) {
            d(a);
            a = null
        }
    }

    function E(e, d, a, c) {
        S(e, b, c);

        function b(b) {
            var c = null;
            if (b.status != 200 && Boolean(a)) a(b);
            else {
                if (b.status == 200) c = b.responseText;
                d(c)
            }
        }
    }

    function T(k, h, g, l, b, f, e, d, c) {
        if (!b) b = "WithUrlContents";
        if (!f) f = b + "_Start";
        if (!e) e = b + "_Success";
        if (!d) d = b + "_Failure";
        if (!c) c = b + "_NoResult";
        var a = new SP.QoS.ScenarioMonitor(b, f, e, d, c);
        E(k, i, j, q);

        function i(b) {
            h(b, a);
            if (a != null) {
                a.Success();
                a.Dispose()
            }
        }

        function j(b) {
            if (Boolean(g)) g(b, a);
            else if (a != null) {
                a.UnexpectedFailure();
                h(null, a);
                a.Dispose()
            }
        }
    }
    var q = [new H("Content-Type", "application/x-www-form-urlencoded"), new H("ACCEPT", "application/json; odata = verbose")];

    function V(h, b, a, c, g, f, e, d) {
        T(h, b, a, q, c, g, f, e, d)
    }

    function b(b) {
        var a = null;
        if (typeof _spPageContextInfo != "undefined") a = _spPageContextInfo[b];
        return a
    }

    function jb() {
        var a = Number(b("currentLanguage"));
        if (isNaN(a)) a = 1033;
        return a
    }

    function w() {
        return b("themeCacheToken")
    }

    function t() {
        return b("themedCssFolderUrl")
    }

    function U() {
        var a = b("webServerRelativeUrl");
        if (!Boolean(a)) a = "/";
        return a
    }

    function kb() {
        var c = -1,
            a = b("webTemplate");
        if (a != null) c = parseInt(a);
        return c
    }

    function Z() {
        var c = 65536,
            a = false;
        try {
            a = !Nav.isMDSUrl(window.location.href)
        } catch (d) {}
        return a && b("webPermMasks") != null && !ab(c)
    }

    function ab(a) {
        var c = b("webPermMasks"),
            d = c != null ? Number(c.Low) : 0,
            e = (d & a) == a;
        return e
    }

    function I() {
        return t() != null
    }

    function y(a) {
        var b;
        if (a != null) try {
            b = JSON.parse(a)
        } catch (c) {}
        return b
    }
    var m = "SPThemeCache",
        j = "SPThemeCacheToken";

    function hb() {
        BrowserStorage.local.removeItem(m);
        BrowserStorage.local.removeItem(j)
    }

    function ob(a, b) {
        try {
            if (b != null && JSON.parse(a) != null) {
                BrowserStorage.local.setItem(m, a);
                BrowserStorage.local.setItem(j, b)
            }
        } catch (c) {}
    }

    function ib() {
        var b = null,
            c = w(),
            a = BrowserStorage.local.getItem(j);
        if (Boolean(a) && a == c) b = BrowserStorage.local.getItem(m);
        return b
    }

    function O() {
        return a().GetCacheToken()
    }

    function P(c) {
        var b = null,
            a = y(c);
        if (a != null && a.d != null) b = a.d.GetContextWebThemeData;
        return b
    }

    function n(b) {
        var a = null,
            c = y(b);
        a = new Theming.ThemeInfo(c);
        return a
    }

    function eb(a) {
        r = a == null ? p : a
    }

    function gb(a, b) {
        r(a, b)
    }
    var l = "ThemeOverride";

    function p(a, j) {
        if (window.Theming == null || !j && !Theming.Utilities.CanRecolorImages()) {
            a(null);
            return
        }
        var b = Nav.getUrlKeyValue(l),
            d = Boolean(b),
            c = !d ? ib() : null;
        if (c == null && !Z()) {
            var g = Theming.Utilities.CombinePathFragments,
                h = d ? "&" + l + "=" + encodeURIComponent(b) : "",
                i = g(U(), "_api/SP.Web.GetContextWebThemeData?lcid=" + String(jb()) + h);
            V(i, e, f, "ClientSideTheming_FetchTheme", "ClientSideTheming_StartFetchTheme", "ClientSideTheming_SuccessFetchTheme", "ClientSideTheming_FailureFetchTheme")
        } else a(n(c));

        function e(c, d) {
            if (c !== null) {
                var b = P(c);
                if (!Boolean(b)) {
                    d.UnexpectedFailure("ClientSideTheming_FetchTheme_InvalidResponse");
                    qb("SPThemeUtils: Could not load theme data.");
                    b = null
                } else !Boolean(Nav.getUrlKeyValue(l)) && ob(b, w())
            }
            a(n(b))
        }

        function f(b, c) {
            var d = b.status;
            if (d == 401 || d == 403) c.ExpectedFailure("ClientSideTheming_FailureFetchTheme_Unauthorized", s(b), D(b));
            else c.UnexpectedFailure(null, s(b), D(b));
            c.Dispose();
            a(n(null))
        }
    }

    function M() {
        for (var e = document.getElementsByTagName("link"), g = e.length, d = 0; d < g; d++) {
            var b = e[d],
                c = b.href;
            if (c != null && c.toUpperCase().indexOf("/DEFAULTCSS.ASHX") >= 0) {
                var f = b.getAttribute(A);
                a().AddCssLink(c, f, b);
                break
            }
        }
    }

    function db(b) {
        c() && a().RegisterAllImages(b)
    }

    function bb(a) {
        return Theming.Utilities.MakeFixupCallbackForCssFile(a)
    }

    function W(b) {
        a().RegisterCssReferences(b, i() ? bb : null)
    }

    function L() {
        for (var d = document.getElementsByTagName("link"), e = d.length, b = 0; b < e; b++) {
            var a = d[b],
                c = a.getAttribute(A);
            if (Boolean(c) && a.rel != null && a.rel.toLowerCase() == "stylesheet") a.href = c
        }
    }

    function z(a) {
        if (a != null && a.parentNode != null) a = a.parentNode.removeChild(a);
        return a
    }

    function lb(a) {
        DOM.AddEventHandler(window, "onunload", a, false)
    }

    function v(b) {
        var a = 100;
        while (z(document.getElementById(b)) && --a >= 0);
    }

    function G(c, d) {
        var a = null;
        v(c);
        if (Boolean(d)) {
            a = document.createElement("style");
            a.type = "text/css";
            a.id = c;
            Theming.ReplaceCssTextForElement(a, d);
            var e = document.getElementsByTagName("head")[0];
            a = e.appendChild(a);
            lb(b);
            setTimeout(b, 7e3)
        }
        this.Remove = b;

        function b() {
            z(a);
            a = null
        }
    }

    function B(d, c) {
        var e = h(),
            b = false;
        this.cancel = function() {
            a(true)
        };
        this.success = function() {
            a(false)
        };

        function a(f) {
            if (!b) {
                b = true;
                var a = h() - e;
                if (!f) pb(d, a);
                else J(c, a)
            }
        }
    }
    var f, e, g;

    function X() {
        if (g != null) {
            clearTimeout(g);
            g = null
        }
        if (f != null) {
            f.cancel();
            f = null
        }
        if (e != null) {
            e.cancel();
            e = null
        }
    }

    function u() {
        var a = false,
            b = kb();
        switch (b) {
            case 64:
                a = !k() || !Flighting.VariantConfiguration.IsExpFeatureClientEnabled(338)
        }
        return a
    }

    function cb(d) {
        var b = "SPThemeHideForms";
        if (k() && Flighting.VariantConfiguration.IsExpFeatureClientEnabled(367) && u()) {
            v(b);
            i() && L();
            return
        }
        if (c()) {
            var l = new G(b, d ? "form {opacity:0 !important}" : ""),
                j = new G("SPThemeHideImages", "img {opacity:0 !important}");
            M();
            r(function(b) {
                if (b == null) b = new Theming.ThemeInfo(null);
                if (i()) b.IsDefault = false;
                if (!Theming.Utilities.CanRecolorImages()) b.NoImageRecoloring = true;
                X();
                F();
                o(l.Remove);
                C(j.Remove);
                if (!b.IsDefault) {
                    K("ClientSideTheming_StartTheme");
                    f = new B("ClientSideTheming_SuccessTheme", "ClientSideTheming_FailureTheme_Cancel");
                    a().WhenReady(f.success);
                    if (!b.NoImageRecoloring) {
                        K("ClientSideTheming_StartThemeImages");
                        e = new B("ClientSideTheming_SuccessThemeImages", "ClientSideTheming_FailureThemeImages_Cancel");
                        C(e.success)
                    }
                } else {
                    var d = h(),
                        c = g = setTimeout(function() {
                            J("ClientSideTheming_FailureApplyDefault", h() - d)
                        }, 1e3);
                    o(function() {
                        clearTimeout(c)
                    })
                }
                a().SetTheme(b)
            });
            I() && x()
        }
    }

    function x() {
        a().LoadThemableResources()
    }

    function K(a) {
        SP.QoS.WriteStart(a, null, SP.QoS.LogType.Diagnostic)
    }

    function pb(b, a) {
        SP.QoS.WriteSuccess(b, null, SP.QoS.LogType.Diagnostic, a)
    }

    function J(b, a) {
        SP.QoS.WriteFailure(b, null, SP.QoS.LogType.Diagnostic, a)
    }

    function h() {
        return +new Date
    }

    function fb(a) {
        while (a.lastChild != null) a.removeChild(a.lastChild)
    }

    function N(a, c) {
        var b = false;
        if (a != null) try {
            if (typeof a.styleSheet != "undefined" && a.styleSheet != null && typeof a.styleSheet.cssText != "undefined") {
                a.styleSheet.cssText = c;
                b = true
            }
        } catch (d) {}
        return b
    }

    function R(a, b) {
        var c = N(a, b);
        if (!c) {
            fb(a);
            a.appendChild(document.createTextNode(b))
        }
    }
}
var SuiteNavRendering;

function SuiteNavRendering_module_def() {
    var o = "javascript:",
        f = 2,
        g = false;
    h.prototype = {
        brandingLogo: "",
        brandingLogoLink: "",
        brandingLogoTitle: "",
        brandingText: "",
        culture: "",
        dataEndpoint: "",
        signInLink: "",
        top: "",
        version: f
    };

    function h() {}
    SuiteNavRendering.SuiteNavRenderingOptions = h;
    SuiteNavRendering.RenderSuiteNav = function(a) {
        var o = a.top,
            c = a.dataEndpoint,
            q = a.culture,
            r = a.signInLink,
            e = a.version;
        if (!(e > 0)) e = f;
        if (!!c && !!q) c += (c.indexOf("?") < 0 ? "?" : "&") + "v=" + String(e) + "&Locale=" + q;
        var d = "",
            g = null,
            h = window.SuiteNavTheming != null,
            m = SPThemeUtils.IsSiteThemed() || h && SuiteNavTheming.GetSuiteNavThemeColorsOverride() != null;
        m && h && SuiteNavTheming.WithSuiteThemingCss(function(a) {
            d = a;
            g != null && i(g)
        });
        t(function(a) {
            g = a;
            (!m || Boolean(d)) && i(a)
        }, c, e);

        function i(g) {
            var d = window.O365Shell;
            if (d == null) return;
            var c = SuiteNavCommon.ExtractSuiteNavBarData(g);
            j(c);
            l(c);
            n(c);
            s(c, a);
            var h = c.HelpLink;
            if (h != null && !Boolean(c.HelpLink.Text)) c.HelpLink.Text = b("L_SuiteNav_Help_Link_Text");
            if (Boolean(c.UserDisplayName)) c.IsAuthenticated = true;
            var e = null;
            if (!c.IsAuthenticated && Boolean(r)) e = {
                Text: b("L_SuiteNav_SignIn"),
                Url: r
            };
            c.ClientData = JSON.stringify({
                IsRTL: document.documentElement.getAttribute("dir") == "rtl",
                IsFallbackShell: true,
                SignInLink: e
            });
            p(c);
            d.SetData(c);
            var f = {
                top: o,
                layout: "Mouse"
            };
            d.RenderSync(f, u, v)
        }

        function v() {}

        function u() {
            try {
                w()
            } catch (a) {}
        }

        function s(a, b) {
            var e = b.brandingLogo,
                d = b.brandingLogoLink,
                c = b.brandingLogoTitle;
            a.StringsOverride = k(b.brandingText);
            if (e) {
                if (!c) c = "";
                a.HasTenantBranding = true;
                a.TenantLogoUrl = {
                    Title: c,
                    Url: e
                };
                if (d) a.LogoNavigationUrl = d
            }
        }

        function w() {
            var a = document.getElementById(o);
            CSSUtil.RemoveClass(a, "ms-TopBarBackground-bgColor");
            if (Boolean(d) && a != null) {
                var c = a.firstChild,
                    b = document.createElement("style");
                b.id = "SuiteNavThemeStyle";
                b.type = "text/css";
                SPThemeUtils.ReplaceCssTextForElement(b, d);
                if (c != null) a.insertBefore(b, c);
                else a.appendChild(b)
            }
        }
    };
    c.prototype.TargetWindow = "";
    c.prototype.Text = "";
    c.prototype.Url = "";

    function c() {}

    function b(b) {
        var a = typeof Strings != "undefined" && Strings.STS != null ? Strings.STS : {};
        return a[b]
    }
    var s = k();

    function k(a) {
        if (!a) a = b("L_SuiteNav_ProductName");
        return {
            l_ShellCore_App_Provision_Alt_Text: b("L_SuiteNav_App_Provision_Alt_Text"),
            l_ShellCore_App_Provision_Text: b("L_SuiteNav_App_Provision_Text"),
            l_ShellCore_ContextualTitleFormat_Text: b("L_SuiteNav_ContextualTitleFormat_Text"),
            l_ShellCore_Help_Title_Text: b("L_SuiteNav_Help_Title_Text"),
            l_ShellCore_MeTile_Title_Text: b("L_OpenMenu_Text"),
            l_ShellCore_NavMenu_MyApps_Text: b("L_SuiteNav_NavMenu_MyApps_Text"),
            l_ShellCore_NavMenu_Title_Text: b("L_SuiteNav_NavMenu_Title_Text"),
            l_ShellCore_O365_Text: a,
            l_ShellCore_O365_Title_Text: "",
            l_ShellCore_Settings_Title_Text: b("L_SuiteNav_Settings_Title_Text")
        }
    }
    a.prototype.AboutMeLink = null;
    a.prototype.ClientData = "";
    a.prototype.CurrentMainLinkElementID = "";
    a.prototype.CurrentWorkloadHelpSubLinks = [];
    a.prototype.CurrentWorkloadSettingsSubLinks = [];
    a.prototype.CurrentWorkloadUserSubLinks = [];
    a.prototype.HelpLink = null;
    a.prototype.IsAuthenticated = false;
    a.prototype.PinnedApps = null;
    a.prototype.SignOutLink = null;
    a.prototype.StringsOverride = s;
    a.prototype.UserDisplayName = null;
    a.prototype.WorkloadLinks = null;

    function a() {
        var a = this;
        a.CurrentWorkloadHelpSubLinks = [];
        a.CurrentWorkloadSettingsSubLinks = [];
        a.CurrentWorkloadUserSubLinks = [];
        a.HelpLink = new c;
        a.SignOutLink = new c
    }
    d.prototype.DoNotCache = false;
    d.prototype.NavBarData = null;
    d.prototype.SPSuiteVersion = f;

    function d() {
        this.NavBarData = new a
    }
    SuiteNavRendering.SuiteNavData = a;

    function r(a) {
        return a == null || !(a.length > 0)
    }

    function p(d) {
        for (var c = ["CurrentWorkloadHelpSubLinks", "CurrentWorkloadSettingsSubLinks", "CurrentWorkloadUserSubLinks", "PinnedApps", "WorkloadLinks"], e = c.length, a = 0; a < e; a++) {
            var b = c[a];
            if (r(d[b])) d[b] = null
        }
    }

    function e() {
        var a = new d;
        a.DoNotCache = true;
        return a
    }

    function q(a, b) {
        function c(f) {
            if (Boolean(a)) {
                var c = "/_api/" + a;
                if (typeof _spPageContextInfo != "undefined") {
                    var d = _spPageContextInfo.webServerRelativeUrl;
                    if (Boolean(d)) c = Nav.combineUrl(d, c)
                }
                RequestUtil.WithRestValue(function(g) {
                    var a;
                    try {
                        var d = JSON.parse(g);
                        a = d.d.GetSuiteNavData
                    } catch (h) {
                        b != null && b("ParseResponse")
                    }
                    if (!a) {
                        var c = e();
                        a = JSON.stringify(c)
                    }
                    f(a)
                }, c)
            } else f(JSON.stringify(e()))
        }
        return c
    }

    function t(d, c, g) {
        var a = "SuiteNavRendering_LoadData",
            b = new SP.QoS.ScenarioMonitor(a, a + "_Start", a + "_Success", a + "_Failure", a + "_NoResult"),
            f = q(c, function(c) {
                b.UnexpectedFailure(a + "_Fail" + c)
            });
        SuiteNavCommon.GetSuiteLinks(f, function(f) {
            var c = null;
            try {
                c = JSON.parse(f);
                if (c == null) c = e();
                b.Success()
            } catch (g) {
                b.UnexpectedFailure(a + "_FailParseData")
            }
            b.Dispose();
            d(c)
        }, g)
    }

    function i(menuElement, itemsContainer, linksData) {
        function UrlFromOnclick(a) {
            if (a == null) return a;
            else {
                a = a.replace(/^javascript:/i, "").replace(/return (true|false);?$/i, "");
                return o + "SuiteOnClick(" + Encoding.ScriptEncodeWithQuote(a) + ")"
            }
        }

        function MenuItemToLinkData(a) {
            return {
                Id: "SuiteMenu_" + a.id,
                MenuName: null,
                Sublinks: null,
                TargetWindow: null,
                Text: a.getAttribute("text"),
                Url: UrlFromOnclick(a.getAttribute("onmenuclick"))
            }
        }
        if (menuElement != null) {
            var menuItems = menuElement.getElementsByTagName("ie:menuitem");
            if (menuItems == null || menuItems.length == 0) menuItems = menuElement.getElementsByTagName("menuitem");
            for (var lMenuItems = menuItems.length, previousGroupId, iMenuItem = 0; iMenuItem < lMenuItems; iMenuItem++) {
                var menuItem = menuItems[iMenuItem],
                    hiddenScript = menuItem.getAttribute("hidden"),
                    itemHidden = hiddenScript != null && Boolean(eval(hiddenScript)),
                    itemType = menuItem.getAttribute("type");
                if (menuItem.id.indexOf("ID_PersonalInformation") > 0) {
                    g = true;
                    if (ExpFlighting.UseGU24()) itemHidden = itemHidden || linksData.AboutMeLink != null
                } else if (ExpFlighting.UseGU26() && menuItem.id.indexOf("ID_AboutMe") >= 0) {
                    if (linksData.AboutMeLink == null) linksData.AboutMeLink = MenuItemToLinkData(menuItem);
                    continue
                }
                if (!itemHidden && itemType == "option") {
                    var groupId = menuItem.getAttribute("menugroupid");
                    if (previousGroupId !== groupId) {
                        previousGroupId != null && itemsContainer.push(null);
                        previousGroupId = groupId
                    }
                    itemsContainer.push(MenuItemToLinkData(menuItem))
                }
            }
        }
    }
    SuiteNavRendering.AddMenuItemsFromDOM = j;

    function j(a) {
        if (a.UserDisplayName == null) {
            var f = document.getElementById("SuiteNavUserName");
            if (f != null && Boolean(f.innerHTML)) a.UserDisplayName = f.innerHTML
        }
        var k = "\\U002F",
            p = {
                welcomeItems: [],
                settingsItems: []
            },
            l = document.getElementById("suiteMenuData");
        if (l == null) return;
        var m = l.getElementsByTagName("menu"),
            r = p.welcomeItems,
            q = m.length;
        g = false;
        for (var j = 0; j < q; j++) {
            var c = m[j];
            if (c.id.indexOf("PersonalActionMenu") >= 0) {
                if (a.CurrentWorkloadUserSubLinks == null) a.CurrentWorkloadUserSubLinks = [];
                var n = a.CurrentWorkloadUserSubLinks,
                    d = [];
                i(c, d, a);
                for (var o = d.length, h = 0; h < o; h++) {
                    var b = d[h],
                        e = "";
                    if (b != null && Boolean(b)) e = b.Url.toUpperCase();
                    if (e.indexOf(k + "SIGNOUT.ASPX") >= 0) {
                        if (a.SignOutLink != null) {
                            a.SignOutLink.Url = b.Url;
                            if (!Boolean(a.SignOutLink.Text)) a.SignOutLink.Text = b.Text
                        }
                    } else if (ExpFlighting.UseGU26() && e.indexOf(k + "PERSON.ASPX") >= 0) {
                        if (a.AboutMeLink == null) a.AboutMeLink = b
                    } else n.push(b)
                }
            } else if (c.id.indexOf("SiteActionsMenu") >= 0) {
                if (a.CurrentWorkloadSettingsSubLinks == null) a.CurrentWorkloadSettingsSubLinks = [];
                i(c, a.CurrentWorkloadSettingsSubLinks, a)
            }
        }
        if (ExpFlighting.UseGU30())
            if (Boolean(a.AboutMeLink) && Boolean(window._spPageContextInfo) && !Boolean(_spPageContextInfo.ProfileUrl)) _spPageContextInfo.ProfileUrl = a.AboutMeLink.Url;
        if (!g) a.AboutMeLink = null
    }
    SuiteNavRendering.UpdateHelpLink = n;

    function n(a) {
        var b = typeof g_navBarHelpDefaultKey == "undefined" ? "HelpHome" : g_navBarHelpDefaultKey;
        if (a.HelpLink != null) {
            a.HelpLink.Url = o + "TopHelpButtonClick(" + Encoding.ScriptEncodeWithQuote(b) + ")";
            a.HelpLink.TargetWindow = ""
        }
    }
    SuiteNavRendering.GetWebTemplate = m;

    function m() {
        var a = -1;
        if (typeof _spPageContextInfo != "undefined") a = parseInt(_spPageContextInfo.webTemplate);
        return a
    }
    SuiteNavRendering.UpdateActiveLink = l;

    function l(a) {
        var c = "ShellDocuments",
            e = "ShellSites",
            q = "ShellSharepoint",
            j = 54,
            i = 21,
            o = 64,
            s = "ShellAdmin",
            f = "ShellNewsfeed",
            n = /^(?:Shell)?Newsfeed$/i,
            r = "ShellProject",
            t = "ShellVideo",
            l = 16,
            k = 6221,
            h = 700,
            p = 65;
        if (a == null) return;
        var g = function() {
                for (var d = a.WorkloadLinks || [], b = 0; b < d.length; b++)
                    if (d[b].Id === f) return f;
                if (ExpFlighting.UseGU27()) {
                    var c = a.PinnedApps || [];
                    for (b = 0; b < c.length; b++)
                        if (n.test(c[b].Id)) return f
                }
                return e
            }(),
            u = m(),
            d, b;
        switch (u) {
            case l:
                a.CurrentMainLinkElementID = s;
                break;
            case j:
                a.CurrentMainLinkElementID = g;
                d = new URI(Nav.ajaxNavigate.get_href());
                b = d.getPath(true);
                if (Boolean(b))
                    if (b.toLowerCase().endsWith("/mybraryfirstrun.aspx")) a.CurrentMainLinkElementID = c;
                break;
            case k:
                a.CurrentMainLinkElementID = r;
                break;
            case p:
                if (document.getElementById("O365VideoPage") != null) a.CurrentMainLinkElementID = t;
                else a.CurrentMainLinkElementID = e;
                break;
            case i:
                if (typeof g_wsaListTemplateId != "undefined" && g_wsaListTemplateId == h) a.CurrentMainLinkElementID = c;
                else {
                    a.CurrentMainLinkElementID = g;
                    d = new URI(Nav.ajaxNavigate.get_href());
                    b = d.getPath(true);
                    if (Boolean(b)) {
                        b = b.toLowerCase();
                        if (b.endsWith("/social/followedcontent.aspx")) a.CurrentMainLinkElementID = c;
                        else if (b.endsWith("/social/sites.aspx")) a.CurrentMainLinkElementID = e;
                        else if (b.endsWith("/social/sitesdocuments.aspx")) a.CurrentMainLinkElementID = c;
                        else if (b.endsWith("/mybraryfirstrun.aspx")) a.CurrentMainLinkElementID = c;
                        else if (b.endsWith("/groupdocuments.aspx")) a.CurrentMainLinkElementID = c
                    }
                }
                break;
            case o:
                d = new URI(Nav.ajaxNavigate.get_href());
                b = d.getPath(true);
                if (Boolean(b) && b.toLowerCase().endsWith("/groupsdocuments.aspx")) a.CurrentMainLinkElementID = c;
                else a.CurrentMainLinkElementID = q;
                break;
            default:
                a.CurrentMainLinkElementID = e
        }
    }
}
var ModuleLink;

function ModuleLink_module_def() {
    var a = {},
        b = false;
    ModuleLink.loadManifest = function(f, e, g) {
        if (typeof e === "function") {
            g = e;
            e = void 0
        } else if (typeof g !== "function") g = function() {};
        c(function() {});
        if (!Boolean(a[f])) a[f] = new d(f);
        var h = a[f];
        h.getManifestInfo(function(a) {
            c(function() {
                if (!b) {
                    var f = new Function(a.d.RequireJsScriptBlock);
                    f.call(this);
                    b = true
                }
                if (Boolean(e))
                    for (var d = a.d.ScenarioMapping.results, c = 0; c < d.length; c++)
                        if (d[c].Key === e) {
                            var h = d[c].Value.split(",");
                            require(h)
                        }
                g.call(this, a)
            })
        })
    };

    function c(a) {
        if (Boolean(window.requirejs)) a();
        else typeof EnsureScriptFunc !== "undefined" && EnsureScriptFunc("require.js", "requirejs", function() {
            a()
        })
    }
    var d = function(d) {
        var b, a, c = [];
        this.getManifestInfo = function(a) {
            if (g()) a(b);
            else {
                c.push(a);
                !f() && e()
            }
        };

        function e() {
            var e = "/_api/web/GetResourceManifestInformation(manifestName='";
            e += encodeURIComponent(d);
            e += "')";
            a = new XMLHttpRequest;
            a.open("GET", e, true);
            a.setRequestHeader("Content-Type", "application/json;odata=verbose");
            a.setRequestHeader("Accept", "application/json;odata=verbose");
            a.onload = function() {
                b = JSON.parse(a.responseText);
                c.forEach(function(a) {
                    a(b)
                });
                c = [];
                a = void 0
            };
            a.send()
        }

        function g() {
            return Boolean(b)
        }

        function f() {
            return Boolean(a)
        }
    }
}

function AllowCSSFiltersOnIE8() {
    if (browseris.ie8down) {
        CSSUtil.AddClass(document.body, "ms-core-needIEFilter");
        var a = document.getElementById("ms-hcTest");
        if (Boolean(a) && Boolean(a.currentStyle))
            if (a.currentStyle.borderColor != "#f00") {
                var b = document.getElementById("s4-workspace");
                if (Boolean(b)) b.style.filter = ""
            }
    } else CSSUtil.AddClass(document.body, "ms-backgroundImage")
}

function notifyScriptsLoadedAndExecuteWaitingJobs(a) {
    typeof Sys != "undefined" && Boolean(Sys) && Boolean(Sys.Application) && Sys.Application.notifyScriptLoaded();
    NotifyScriptLoadedAndExecuteWaitingJobs(a)
}
var initJsLoaded;
$_global_init();