function ULSaKF() {
    var o = new Object;
    o.ULSTeamName = "Microsoft SharePoint Foundation";
    o.ULSFileName = "SP.UI.Dialog.js";
    return o;
}
if ("undefined" == typeof g_all_modules) g_all_modules = {};
g_all_modules["sp.ui.dialog.js"] = {
    version: {
        rmj: 16,
        rmm: 0,
        rup: 5611,
        rpr: 1207
    }
};
typeof spWriteProfilerMark == "function" && spWriteProfilerMark("perfMarkBegin_sp.ui.dialog.js");
Type.registerNamespace("SP.UI");
SP.UI.DialogResult = function () { };
SP.UI.DialogResult.prototype = {
    invalid: -1,
    cancel: 0,
    OK: 1
};
SP.UI.DialogResult.registerEnum("SP.UI.DialogResult", false);
SP.UI.DialogOptions = function () { };
SP.UI.LightboxOptions = function () { };
SP.UI.MediaLightboxOptions = function () { };
SP.UI.Dialog = function (a) {
    ULSaKF:; this.$$d_$2o_0 = Function.createDelegate(this, this.$2o_0); this.$$d_$1u_0 = Function.createDelegate(this, this.$1u_0); this.$$d_autoSizeSuppressScrollbar = Function.createDelegate(this, this.autoSizeSuppressScrollbar); this.$$d_autoSize = Function.createDelegate(this, this.autoSize); this.$$d_$2E_0 = Function.createDelegate(this, this.$2E_0); this.$$d_$2d_0 = Function.createDelegate(this, this.$2d_0); this.$$d_$2D_0 = Function.createDelegate(this, this.$2D_0); this.$$d_$1e_0 = Function.createDelegate(this, this.$1e_0); this.$$d_$2f_0 = Function.createDelegate(this, this.$2f_0); this.$$d_$1g_0 = Function.createDelegate(this, this.$1g_0); this.$$d_$2H_0 = Function.createDelegate(this, this.$2H_0); this.$$d_$2V_0 = Function.createDelegate(this, this.$2V_0); this.$$d_$2W_0 = Function.createDelegate(this, this.$2W_0); this.$$d_$2B_0 = Function.createDelegate(this, this.$2B_0); this.$$d_$2C_0 = Function.createDelegate(this, this.$2C_0); this.$$d_$1w_0 = Function.createDelegate(this, this.$1w_0); this.$$d_$2p_0 = Function.createDelegate(this, this.$2p_0); this.$$d_$2g_0 = Function.createDelegate(this, this.$2g_0); this.$$d_$2K_0 = Function.createDelegate(this, this.$2K_0);
    if (a.delayAppearance && SP.ScriptUtility.isNullOrEmptyString(a.url)) throw Error.notImplemented(SP.Res.delayedAppearanceForHTMLDialogNotImplemented); this.$2_0 = a; this.$1C_0 = a.args; this.$Y_0 = a.width;
    if (this.$Y_0 < 0) this.$Y_0 = null;
    if (SP.ScriptUtility.isNullOrUndefined(this.$Y_0)) this.$Y_0 = parseInt(SP.Res.defaultDialogWidth); this.$S_0 = a.height;
    if (this.$S_0 < 0) this.$S_0 = null;
    if (SP.ScriptUtility.isNullOrUndefined(this.$S_0)) this.$S_0 = parseInt(SP.Res.defaultDialogHeight); this.$x_0 = a.autoSize;
    if (SP.ScriptUtility.isNullOrUndefined(this.$x_0)) this.$x_0 = true; this.$d_0 = a.dialogReturnValueCallback; this.$o_0 = a.url; this.$p_0 = a.x;
    if (this.$p_0 < 0) this.$p_0 = null; this.$q_0 = a.y;
    if (this.$q_0 < 0) this.$q_0 = null; this.$L_0 = a.html; this.$Q_0 = a.title;
    if (SP.ScriptUtility.isNullOrUndefined(a.allowMaximize)) this.$h_0 = false;
    else this.$h_0 = a.allowMaximize;
    if (SP.ScriptUtility.isNullOrUndefined(a.showMaximized)) this.$1O_0 = false;
    else this.$1O_0 = a.showMaximized;
    if (SP.ScriptUtility.isNullOrUndefined(a.showClose)) this.$15_0 = true;
    else this.$15_0 = a.showClose; this.$1M_0 = 13; this.$14_0 = 19; this.$12_0 = 10; this.$13_0 = 19; this.$5_0 = 10; this.$1b_0 = SP.ScriptUtility.isNullOrUndefined(a.$1Q_0) ? true : a.$1Q_0
};
SP.UI.Dialog.get_$3 = function () {
    ULSaKF:;
    return window.self._dlgWndTop()
};
SP.UI.Dialog.$1j = function () {
    ULSaKF:;
    if (!SP.UI.Dialog.$l) {
        var b = document.createElement("p");
        b.style.width = "100%";
        b.style.height = "100px";
        var a = document.createElement("div");
        a.style.position = "absolute";
        a.style.visibility = "hidden";
        a.style.width = "100px";
        a.style.height = "50px";
        a.appendChild(b);
        document.body.appendChild(a);
        a.style.overflow = "hidden";
        var d = b.offsetWidth;
        a.style.overflow = "scroll";
        var c = b.offsetWidth;
        if (d === c) c = a.clientWidth;
        document.body.removeChild(a);
        SP.UI.Dialog.$l = d - c;
        if (!SP.UI.Dialog.$l) SP.UI.Dialog.$l = 17
    }
    return SP.UI.Dialog.$l
};
SP.UI.Dialog.$1l = function (b) {
    ULSaKF:;
    var a; a = b.document.documentElement.clientWidth;
    if (SP.ScriptUtility.isNullOrUndefined(a) || a <= 0) a = b.innerWidth;
    if (SP.ScriptUtility.isNullOrUndefined(a) || a <= 0) a = b.document.body.clientWidth;
    return a
};
SP.UI.Dialog.$1k = function (b) {
    ULSaKF:;
    var a; a = b.document.documentElement.clientHeight;
    if (SP.ScriptUtility.isNullOrUndefined(a) || a <= 0) a = b.innerHeight;
    if (SP.ScriptUtility.isNullOrUndefined(a) || a <= 0) a = b.document.body.clientHeight;
    return a
};
SP.UI.Dialog.$1W = function (a) {
    ULSaKF:;
    var b = 0;
    if (!SP.ScriptUtility.isNullOrUndefined(a.documentElement) && !SP.ScriptUtility.isNullOrUndefined(a.documentElement.scrollWidth) && !SP.ScriptUtility.isNullOrUndefined(a.documentElement.offsetWidth)) b = Math.max(a.documentElement.scrollWidth, a.documentElement.offsetWidth);
    return Math.max(a.body.scrollWidth, a.body.offsetWidth, b)
};
SP.UI.Dialog.$1V = function (a) {
    ULSaKF:;
    var b = 0;
    if (!SP.ScriptUtility.isNullOrUndefined(a.documentElement) && !SP.ScriptUtility.isNullOrUndefined(a.documentElement.scrollHeight) && !SP.ScriptUtility.isNullOrUndefined(a.documentElement.offsetHeight)) b = Math.max(a.documentElement.scrollHeight, a.documentElement.offsetHeight);
    return Math.max(a.body.scrollHeight, a.body.offsetHeight, b)
};
SP.UI.Dialog.$2Q = function (a) {
    ULSaKF:;
    var b = a.pageXOffset;
    return !SP.ScriptUtility.isNullOrUndefined(b) ? b : !(Sys.Browser.agent === Sys.Browser.InternetExplorer && Sys.Browser.version === 7) && !SP.ScriptUtility.isNullOrUndefined(a.document.documentElement) && !SP.ScriptUtility.isNullOrUndefined(a.document.documentElement.scrollLeft) ? a.document.documentElement.scrollLeft : a.document.body.scrollLeft
};
SP.UI.Dialog.$2U = function (a) {
    ULSaKF:;
    var b = a.pageYOffset;
    return !SP.ScriptUtility.isNullOrUndefined(b) ? b : !SP.ScriptUtility.isNullOrUndefined(a.document.documentElement) && !SP.ScriptUtility.isNullOrUndefined(a.document.documentElement.scrollTop) ? a.document.documentElement.scrollTop : a.document.body.scrollTop
};
SP.UI.Dialog.$29 = function (a) {
    ULSaKF:;
    if (a.length > 2040) a = a.substr(0, 2040);
    if (a.indexOf("?") < 0) a = a + "?IsDlg=1";
    else {
        if (!a.endsWith("&")) a = a + "&";
        a = a + "IsDlg=1"
    }
    return a
};
SP.UI.Dialog.$23 = function (f) {
    ULSaKF:;
    if (!SP.UI.Dialog.$1N) SP.UI.Dialog.$1N = SP.UI.Dialog.$2n;
    for (var d = ["click", "dblclick", "mouseout", "mouseover", "mousedown", "mouseenter", "mouseleave"], b = d, c = b.length, a = 0; a < c; ++a) {
        var e = b[a];
        $addHandler(f, e, SP.UI.Dialog.$1N)
    }
};
SP.UI.Dialog.$1z = function (a) {
    ULSaKF:; a.setAttribute("href", "javascript:;")
};
SP.UI.Dialog.get_$r = function () {
    ULSaKF:;
    var a = SP.UI.Dialog.get_$3().g_overlayPopup;
    return SP.ScriptUtility.isNullOrUndefined(a) ? null : a
};
SP.UI.Dialog.set_$r = function (a) {
    ULSaKF:; SP.UI.Dialog.get_$3().g_overlayPopup = a;
    return a
};
SP.UI.Dialog.$2n = function (a) {
    ULSaKF:; a.stopPropagation()
};
SP.UI.Dialog.$2q = function () {
    ULSaKF:;
    var b = SP.UI.Dialog.get_$r();
    if (b) {
        SP.UI.UIUtility.removeNode(b);
        SP.UI.Dialog.get_$3().setTimeout(SP.UI.Dialog.$2r, 20)
    }
    var a = SP.UI.ModalDialog.get_childDialog();
    while (a) {
        a.$2h_0();
        a = a.$z_1
    }
};
SP.UI.Dialog.$2r = function () {
    ULSaKF:; SP.UI.Dialog.$X && $removeHandler(SP.UI.Dialog.get_$3(), "resize", SP.UI.Dialog.$X);
    var a = SP.UI.Dialog.get_$r();
    if (a) {
        var b = SP.UI.Dialog.$1W(SP.UI.Dialog.get_$3().document);
        a.style.width = b.toString() + "px";
        var c = SP.UI.Dialog.$1V(SP.UI.Dialog.get_$3().document);
        a.style.height = c.toString() + "px";
        SP.UI.Dialog.get_$3().document.body.appendChild(SP.UI.Dialog.get_$r())
    }
    SP.UI.Dialog.$X && $addHandler(SP.UI.Dialog.get_$3(), "resize", SP.UI.Dialog.$X)
};
SP.UI.Dialog.prototype = {
    $W_0: null,
    $I_0: null,
    $7_0: null,
    $0_0: null,
    $g_0: null,
    $4_0: null,
    $1H_0: null,
    $1Z_0: null,
    $K_0: null,
    $d_0: null,
    $o_0: null,
    $p_0: 0,
    $q_0: 0,
    $Y_0: 0,
    $S_0: 0,
    $1F_0: 0,
    $1G_0: -1,
    $2_0: null,
    $a_0: false,
    $P_0: 0,
    $b_0: 0,
    $F_0: 0,
    $E_0: 0,
    $T_0: false,
    $1O_0: false,
    $D_0: null,
    $9_0: null,
    $6_0: null,
    $R_0: false,
    $m_0: null,
    $x_0: false,
    $y_0: null,
    $1Y_0: false,
    $1f_0: 88,
    $H_0: null,
    $G_0: null,
    $O_0: null,
    get_firstTabStop: function () {
        ULSaKF:;
        return this.$O_0
    },
    $M_0: null,
    get_lastTabStop: function () {
        ULSaKF:; !this.$M_0 && this.$2R_0();
        return this.$M_0 ? this.$M_0 : null
    },
    get_url: function () {
        ULSaKF:;
        return this.$o_0
    },
    $L_0: null,
    get_html: function () {
        ULSaKF:;
        return this.$L_0
    },
    $Q_0: null,
    get_title: function () {
        ULSaKF:;
        return this.$Q_0
    },
    set_title: function (a) {
        ULSaKF:;
        if (this.$W_0) {
            SP.UI.UIUtility.setInnerText(this.$W_0, a);
            this.$W_0.title = a
        }
        this.$Q_0 = a;
        return a
    },
    $1C_0: null,
    get_args: function () {
        ULSaKF:;
        return this.$1C_0
    },
    $h_0: false,
    get_allowMaximize: function () {
        ULSaKF:;
        return this.$h_0
    },
    $15_0: false,
    get_showClose: function () {
        ULSaKF:;
        return this.$15_0
    },
    $k_0: null,
    get_returnValue: function () {
        ULSaKF:;
        return this.$k_0
    },
    set_returnValue: function (a) {
        ULSaKF:; this.$k_0 = a;
        return a
    },
    get_$19_0: function () {
        ULSaKF:;
        return this.$x_0 && (SP.ScriptUtility.isNullOrUndefined(this.$2_0.width) || SP.ScriptUtility.isNullOrUndefined(this.$2_0.height)) ? true : false
    },
    get_$s_0: function () {
        ULSaKF:;
        return !SP.ScriptUtility.isNullOrUndefined(this.$2_0.delayAppearance) && this.$2_0.delayAppearance
    },
    get_$2X_0: function () {
        ULSaKF:;
        return SP.ScriptUtility.isNullOrUndefined(this.$2_0.includeScrollBarPadding) || this.$2_0.includeScrollBarPadding
    },
    get_$24_0: function () {
        ULSaKF:;
        return this.$2S_0(this.$I_0, "offsetHeight")
    },
    $1M_0: 0,
    $14_0: 0,
    $12_0: 0,
    $13_0: 0,
    $5_0: 0,
    $1b_0: false,
    $2S_0: function (a, b) {
        ULSaKF:;
        return !SP.ScriptUtility.isNullOrUndefined(a) && !SP.ScriptUtility.isNullOrUndefined(a[b]) ? a[b] : 0
    },
    $1p_0: function () {
        ULSaKF:; this.$2G_0(); this.$N_0 > 0 && this.$1b_0 && this.$2k_0(this.$N_0 - 1);
        if (this.get_$19_0() && this.$0_0) {
            var a = this;
            window.setTimeout(function () {
                ULSaKF:;
                if (!a.$a_0 && !a.$R_0) a.$y_0 = SP.UI.ModalDialog.$2l()
            }, 1e3);
            window.setTimeout(this.$$d_$2K_0, 3e4);
            this.$1R_0(false)
        } else this.$1R_0(!this.get_$s_0())
    },
    $1o_0: function () {
        ULSaKF:;
        if (!this.$D_0) {
            this.$D_0 = new SP.Application.UI.DragBehavior(this.$4_0, this.$I_0);
            this.$D_0.$28_2(this.$7_0);
            this.$D_0.$2F_2(this.$0_0);
            this.$D_0.initialize()
        }
    },
    $2J_0: function () {
        ULSaKF:;
        if (this.$D_0) {
            this.$D_0.dispose();
            this.$D_0 = null
        }
    },
    $2B_0: function (a) {
        ULSaKF:; this.close(0); a.preventDefault()
    },
    $2V_0: function () {
        ULSaKF:;
        if (this.$O_0) try {
            this.$O_0.focus()
        } catch (a) { }
    },
    $2W_0: function () {
        ULSaKF:;
        if (this.get_lastTabStop()) try {
            this.get_lastTabStop().focus()
        } catch (a) { } else if (this.$O_0) try {
            this.$O_0.focus()
        } catch (b) { }
    },
    $2C_0: function (a) {
        ULSaKF:; a.stopPropagation()
    },
    $2p_0: function () {
        ULSaKF:; this.$I_0.style.cursor = "move"
    },
    $1w_0: function (a) {
        ULSaKF:;
        if (this.$T_0) {
            if (this.$6_0) {
                this.$6_0.innerHTML = '<span style="padding:8px;height:16px;width:16px;display:inline-block"><span style="height:16px;width:16px;position:relative;display:inline-block;overflow:hidden;" class="s4-clust"><img src="/_layouts/15/images/fgimg.png?rev=44" alt=\'{0}\' style="left:-0px !important;top:-661px !important;position:absolute;" class=\'ms-dlgCloseBtnImg\' /></span></span>';
                this.$6_0.setAttribute("title", SP.Res.maximize)
            }
            this.$Z_0(this.$F_0, this.$E_0);
            this.$18_0(this.$P_0, this.$b_0)
        } else {
            this.$P_0 = this.$4_0.offsetLeft;
            this.$b_0 = this.$4_0.offsetTop;
            if (this.$0_0) {
                this.$F_0 = this.$0_0.offsetWidth;
                this.$E_0 = this.$0_0.offsetHeight
            } else {
                this.$F_0 = this.$K_0.offsetWidth;
                this.$E_0 = this.$K_0.offsetHeight
            }
            if (this.$6_0) {
                this.$6_0.innerHTML = String.format('<span style="padding:8px;height:16px;width:16px;display:inline-block"><span style="height:16px;width:16px;position:relative;display:inline-block;overflow:hidden;" class="s4-clust"><img src="/_layouts/15/images/fgimg.png?rev=44" alt=\'{0}\' style="left:-0px !important;top:-677px !important;position:absolute;" class=\'ms-dlgCloseBtnImg\' /></span></span>', SP.Res.restore);
                this.$6_0.setAttribute("title", SP.Res.restore)
            }
            this.$1d_0()
        }
        this.$T_0 = !this.$T_0;
        if (this.$T_0) this.$2J_0();
        else this.$1o_0(); a && a.preventDefault(); this.$6_0 && SP.UI.Dialog.get_$3().setTimeout(this.$$d_$2g_0, 0)
    },
    $2g_0: function () {
        ULSaKF:; this.$6_0.focus()
    },
    $2H_0: function () {
        ULSaKF:;
        if (this.$0_0) this.$0_0.contentWindow && this.$0_0.contentWindow.focus()
    },
    $1d_0: function () {
        ULSaKF:;
        var a = this.$1i_0(),
            b = SP.ScriptUtility.isNullOrUndefined(this.$2_0.$1P_0) ? this.$5_0 : this.$5_0 + this.$2_0.$1P_0; this.$18_0(this.$5_0, b); this.$Z_0(a[0], a[1])
    },
    $2h_0: function () {
        ULSaKF:; this.$T_0 && this.$1d_0()
    },
    $18_0: function (a, b) {
        ULSaKF:; this.$7_0.style.left = a + "px"; this.$7_0.style.top = b + "px"; this.$4_0.style.left = a + "px"; this.$4_0.style.top = b + "px"
    },
    $Z_0: function (d, e) {
        ULSaKF:;
        if (d <= 0 || e <= 0 || this.$R_0) return;
        var f = e + this.get_$24_0(),
            a;
        if (!SP.ScriptUtility.isNullOrUndefined(this.$2_0.$8_0) && this.$2_0.$8_0) a = 0;
        else a = 2;
        var b;
        if (!SP.ScriptUtility.isNullOrUndefined(this.$2_0.$8_0) && this.$2_0.$8_0) b = d;
        else b = d + this.$14_0 + this.$13_0;
        var c;
        if (!SP.ScriptUtility.isNullOrUndefined(this.$2_0.$8_0) && this.$2_0.$8_0) c = f;
        else c = f + this.$12_0; this.$1H_0.style.width = b + "px"; this.$1H_0.style.height = c + "px"; this.$4_0.style.width = b + a + "px"; this.$4_0.style.height = c + a + "px";
        if (this.$0_0) {
            this.$0_0.style.width = d.toString() + "px";
            this.$0_0.style.height = e.toString() + "px"
        } else {
            this.$K_0.style.width = d.toString() + "px";
            this.$K_0.style.height = e.toString() + "px"
        }
        this.$20_0();
        var g = 2; this.$7_0.style.width = b + a + g + "px"; this.$7_0.style.height = c + a + g + "px"
    },
    $2Z_0: function () {
        ULSaKF:;
        var f = this.$1i_0(),
            b = f[0],
            c = f[1],
            d = window.browseris.ipad,
            a = false;
        if (this.$F_0 > b) {
            this.$F_0 = b;
            a = true
        }
        if (this.$E_0 > c && !d) {
            this.$E_0 = c;
            a = true
        }
        a && !d && this.$Z_0(this.$F_0, this.$E_0); a = false;
        var e = this.$4_0.offsetWidth,
            g = this.$4_0.offsetLeft;
        if (d && g < 0) {
            if (e < b + 2 * this.$5_0) this.$P_0 = (b + 2 * this.$5_0 - e) / 2;
            else this.$P_0 = this.$5_0;
            a = true
        }
        if (g + e > b + 2 * this.$5_0) {
            this.$P_0 = this.$5_0;
            a = true
        }
        if (this.$4_0.offsetTop + this.$4_0.offsetHeight > c + 2 * this.$5_0) {
            this.$b_0 = this.$5_0;
            a = true
        }
        a && this.$18_0(this.$P_0, this.$b_0)
    },
    $1i_0: function () {
        ULSaKF:;
        var d = SP.UI.Dialog.get_$3(),
            b = SP.UI.Dialog.$1l(d) - 2,
            a = SP.UI.Dialog.$1k(d) - 2;
        if (b > this.$5_0 * 2) b = b - this.$5_0 * 2; a = a - this.get_$24_0();
        if (a > this.$5_0 * 2) a = a - this.$5_0 * 2;
        var c = new Array(2);
        if (this.$2_0.$8_0) {
            c[0] = b;
            c[1] = a
        } else {
            c[0] = b - this.$13_0 - this.$14_0;
            c[1] = a - this.$1M_0 - this.$12_0
        }
        return c
    },
    $21_0: function (a, b) {
        ULSaKF:;
        if (this.$0_0) {
            var c = this.$0_0.contentWindow.document;
            if (b) Sys.UI.DomElement.addCssClass(a, "ms-hideOverflow");
            else Sys.UI.DomElement.removeCssClass(a, "ms-hideOverflow")
        }
    },
    autoSizeSuppressScrollbar: function (d) {
        ULSaKF:;
        if (this.$0_0) {
            var c = this.$0_0.contentWindow.document,
                a = c.getElementById("s4-workspace"),
                b = false;
            if (!a) a = c.getElementById("ms-error");
            if (a) {
                b = a.clientHeight < a.scrollHeight;
                !b && this.$21_0(a, true);
                d();
                this.autoSize();
                if (!b) {
                    var e = this;
                    window.setTimeout(function () {
                        ULSaKF:; e.$21_0(a, false)
                    }, 100)
                }
            }
        }
    },
    autoSize: function () {
        ULSaKF:;
        if (this.$R_0) return;
        var a = 0,
            b = 0,
            h = SP.ScriptUtility.isNullOrUndefined(this.$2_0.autoSizeStartWidth) ? 575 : this.$2_0.autoSizeStartWidth; this.$Z_0(SP.ScriptUtility.isNullOrUndefined(this.$2_0.width) ? h : this.$2_0.width, SP.ScriptUtility.isNullOrUndefined(this.$2_0.height) ? 20 : this.$2_0.height);
        if (this.$0_0) try {
            var g = this.$0_0.contentWindow.document,
                e = g.getElementById("s4-ribbonrow"),
                f = g.getElementById("s4-workspace");
            if (e && f) {
                var c = f.style,
                    d = e.style,
                    i = c.width,
                    j = c.height,
                    k = d.width,
                    l = d.height;
                c.width = "";
                c.height = "";
                d.width = "";
                d.height = "";
                a = Math.max(e.offsetWidth, f.scrollWidth);
                b = e.offsetHeight + f.scrollHeight;
                c.width = i;
                c.height = j;
                d.width = k;
                d.height = l
            } else {
                var m = g.getElementById("ms-notdlgautosize");
                if (m) {
                    a = parseInt(SP.Res.defaultDialogWidth);
                    b = parseInt(SP.Res.defaultDialogHeight)
                } else {
                    a = this.$0_0.contentWindow.document.body.scrollWidth;
                    b = this.$0_0.contentWindow.document.body.scrollHeight
                }
            }
        } catch (n) { } else if (this.$L_0) {
            a = this.$L_0.scrollWidth;
            b = this.$L_0.scrollHeight
        }
        if (this.get_$2X_0()) {
            a += SP.UI.Dialog.$1j();
            b += SP.UI.Dialog.$1j()
        }
        if (a < 50) a = SP.ScriptUtility.isNullOrUndefined(this.$2_0.autoSizeStartWidth) ? parseInt(SP.Res.defaultDialogWidth) : this.$2_0.autoSizeStartWidth;
        if (b < 20) b = parseInt(SP.Res.defaultDialogHeight);
        if (SP.ScriptUtility.isNullOrUndefined(this.$2_0.height)) this.$E_0 = b;
        if (SP.ScriptUtility.isNullOrUndefined(this.$2_0.width)) this.$F_0 = a; this.$Z_0(this.$F_0, this.$E_0); this.$1T_0(true)
    },
    $1q_0: function (b) {
        ULSaKF:;
        var a = this;
        return function (d) {
            ULSaKF:;
            var c = d.target,
                e = "";
            while (c && !c.getAttribute("href")) c = c.parentNode;
            if (c && c.getAttribute("href")) {
                e = c.getAttribute("href").toString();
                d.preventDefault();
                d.stopPropagation();
                d.rawEvent.returnValue = false;
                if (b) SP.Utilities.HttpUtility.navigateTo(e);
                else if (a.$0_0) {
                    var f = a.$0_0.contentWindow.STSNavigate;
                    f.call(a.$0_0.contentWindow, e)
                }
            }
        }
    },
    $1n_0: function (k) {
        ULSaKF:;
        for (var f = 0, l = k.length; f < l; f++) {
            var b = k[f],
                c = b.getAttribute("target"),
                m = b.getAttribute("onclick"),
                d = b.getAttribute("rel"),
                a = b.getAttribute("href"),
                e = "";
            if (a) {
                var h = a.toString(),
                    i = h.indexOf("?");
                if (i !== -1) {
                    var n = h.substr(i + 1),
                        g = n.match(new RegExp("DialogLink=[^&]*"));
                    if (g && g.length > 0) {
                        var o = g[0],
                            j = o.split("=");
                        if (j.length > 1) e = j[1]
                    }
                }
            }
            if ((!c || c.toString() === "" || c.toString() === "_self") && !m)
                if ((!d || d.toString() === "sp_DialogLinkExternal") && (e === "" || e === "External") && (!c || c.toString() === "")) a && a.toString().indexOf("javascript:") === -1 && b.setAttribute("target", "_blank");
                else if (d && d.toString() === "sp_DialogLinkInternal" || e === "Internal") {
                    if (this.$0_0) a && a.toString().indexOf("javascript:") === -1 && $addHandler(b, "click", this.$1q_0(false))
                } else if ((d && d.toString() === "sp_DialogLinkNavigate" || e === "Navigate") && (!c || c.toString() === "")) a && a.toString().indexOf("javascript:") === -1 && $addHandler(b, "click", this.$1q_0(true))
        }
    },
    $1g_0: function () {
        ULSaKF:; !this.get_$s_0() && this.$1v_0()
    },
    $2K_0: function () {
        ULSaKF:; !this.$a_0 && this.$1g_0(null)
    },
    $1v_0: function () {
        ULSaKF:; this.$a_0 = true;
        if (this.$W_0 && this.$0_0) {
            var b = null;
            try {
                if (this.$0_0.contentWindow) b = this.$0_0.contentWindow.document;
                else if (this.$0_0.contentDocument) b = this.$0_0.contentDocument
            } catch (g) { }
            if (b) {
                this.$g_0 = b;
                var c = SP.Res.defaultDialogTitle;
                try {
                    c = b.title
                } catch (h) { }
                SP.ScriptUtility.isNullOrEmptyString(this.$Q_0) && this.set_title(c);
                var d = this.$0_0.contentWindow,
                    e = new SP.UI.DialogHostedWindow(this, d);
                e.initialize();
                var f = this.$g_0.getElementsByTagName("a");
                this.$1n_0(f)
            } else SP.ScriptUtility.isNullOrEmptyString(this.$Q_0) && this.set_title(SP.Res.defaultDialogTitle);
            if (this.get_$19_0()) {
                this.$1R_0(true);
                this.$1S_0()
            }
            var a = this;
            window.setTimeout(function () {
                ULSaKF:;
                try {
                    a.$0_0.contentWindow.NotifyBrowserOfAsyncUpdate();
                    a.$0_0.contentWindow.EnsureScriptParams("core.js", "FixRibbonAndWorkspaceDimensions");
                    a.$0_0.contentWindow.AddEvtHandler(a.$0_0.contentWindow, "onresize", a.$0_0.contentWindow.FixRibbonAndWorkspaceDimensionsForResize)
                } catch (b) { }
            }, 0)
        }
    },
    $1S_0: function () {
        ULSaKF:;
        if (this.$y_0) {
            this.$y_0.close(0);
            this.$y_0 = null
        }
    },
    $2R_0: function () {
        ULSaKF:;
        if (this.$g_0) try {
            this.$M_0 = this.$1X_0(this.$g_0.body)
        } catch (a) {
            this.$M_0 = null
        } else if (this.$L_0) try {
            this.$M_0 = this.$1X_0(this.$L_0)
        } catch (b) {
            this.$M_0 = null
        } else this.$M_0 = null
    },
    $1X_0: function (b) {
        ULSaKF:;
        if (b.nodeType === 1) {
            for (var d = b.childNodes, c = d.length - 1; c >= 0; c--) {
                var a = d[c];
                if (SP.ScriptUtility.isNullOrUndefined(a.tagName) || a.tagName === "SCRIPT") continue;
                var f = window.self.GetCurrentEltStyle(a, "display");
                if (a.nodeType === 1 && f === "none") continue;
                var e = this.$1X_0(a);
                if (e) return e
            }
            return this.$2Y_0(b) ? b : null
        } else return null
    },
    $2Y_0: function (a) {
        ULSaKF:;
        if (a.tagName === "A" || a.tagName === "INPUT" || a.tagName === "AREA" || a.tagName === "BUTTON" || a.tagName === "SELECT" || a.tagName === "TEXTAREA" || a.tagName === "OBJECT") {
            if (a.tabIndex === -1) return false;
            if (a.disabled || a.getAttribute("disabled") === "true") return false;
            if (a.tagName === "INPUT") {
                var b = a;
                if (b.type === "hidden" || b.style.display === "none") return false
            }
            return true
        }
        return false
    },
    $2G_0: function () {
        ULSaKF:;
        var a = this.$A_0("div"); this.$4_0 = a;
        if (!SP.ScriptUtility.isNullOrUndefined(this.$2_0.$8_0) && this.$2_0.$8_0) a.className = "ms-dlgContentNoBorder";
        else a.className = "ms-dlgContent"; a.setAttribute("role", "dialog"); a.setAttribute("aria-labelledby", "dialogTitleSpan"); a.setAttribute("tabindex", "-1");
        if (this.$N_0) a.style.zIndex = this.$N_0;
        if (this.get_$w_0()) {
            SP.UI.Dialog.get_$3().document.body.appendChild(a);
            SP.UI.Dialog.$23(a)
        } else document.body.appendChild(a);
        var c = this.$A_0("div"); this.$1H_0 = c; c.className = "ms-dlgBorder"; a.appendChild(c); this.$H_0 = this.$A_0("input"); this.$H_0.type = "button"; this.$H_0.value = SP.Res.hiddenButtonValueBeforeDialog; this.$H_0.className = "ms-accessible"; c.appendChild(this.$H_0);
        var d = this.$A_0("div"); d.className = "ms-dlgTitle";
        if (!SP.ScriptUtility.isNullOrUndefined(this.$2_0.$8_0) && this.$2_0.$8_0) d.className = "ms-dlgTitleNoPadding"; $addHandler(d, "mousedown", this.$$d_$2p_0);
        var b = this.$A_0("h1");
        if (SP.ScriptUtility.isNullOrEmptyString(this.$Q_0))
            if (this.$o_0) {
                SP.UI.UIUtility.setInnerText(b, SP.Res.dialogLoading15);
                b.title = SP.Res.dialogLoading15
            } else {
                SP.UI.UIUtility.setInnerText(b, SP.Res.defaultDialogTitle);
                b.title = SP.Res.defaultDialogTitle
            }
        else {
            SP.UI.UIUtility.setInnerText(b, this.$Q_0);
            b.title = this.$Q_0
        }
        if (!SP.ScriptUtility.isNullOrUndefined(this.$2_0.$c_0) && this.$2_0.$c_0) d.className = "ms-hidden"; b.className = "ms-dlgTitleText ms-accentText ms-dlg-heading"; b.id = "dialogTitleSpan"; this.$W_0 = b; this.$I_0 = d;
        var e = this.$A_0("span"); e.id = "dlgTitleBtns"; e.className = "ms-dlgTitleBtns";
        if (this.$h_0) {
            this.$6_0 = this.$A_0("a");
            this.$6_0.id = "DlgResize" + SP.Guid.newGuid().toString();
            this.$6_0.className = "ms-dlgCloseBtn";
            this.$6_0.setAttribute("title", SP.Res.maximize);
            SP.UI.Dialog.$1z(this.$6_0);
            this.$6_0.innerHTML = String.format('<span style="padding:8px;height:16px;width:16px;display:inline-block"><span style="height:16px;width:16px;position:relative;display:inline-block;overflow:hidden;" class="s4-clust"><img src="/_layouts/15/images/fgimg.png?rev=44" alt=\'{0}\' style="left:-0px !important;top:-661px !important;position:absolute;" class=\'ms-dlgCloseBtnImg\' /></span></span>', SP.Res.maximize);
            this.$m_0 = this.$$d_$1w_0;
            $addHandler(this.$I_0, "dblclick", this.$m_0);
            $addHandler(this.$6_0, "click", this.$$d_$1w_0);
            $addHandler(this.$6_0, "mousedown", this.$$d_$2C_0);
            $addHandler(this.$6_0, "mouseup", this.$$d_$2C_0);
            e.appendChild(this.$6_0)
        }
        if (this.$15_0) {
            this.$9_0 = this.$A_0("a");
            this.$9_0.id = "DlgClose" + SP.Guid.newGuid().toString();
            this.$9_0.className = "ms-dlgCloseBtn";
            this.$9_0.setAttribute("title", SP.Res.close15);
            SP.UI.Dialog.$1z(this.$9_0);
            this.$9_0.setAttribute("accesskey", SP.Res.dialogCancelAK);
            this.$9_0.innerHTML = String.format('<span style="padding:8px;height:16px;width:16px;display:inline-block"><span style="height:16px;width:16px;position:relative;display:inline-block;overflow:hidden;" class="s4-clust"><img src="/_layouts/15/images/fgimg.png?rev=44" alt=\'{0}\' style="left:-0px !important;top:-645px !important;position:absolute;" class=\'ms-dlgCloseBtnImg\' /></span></span>', SP.Res.close15);
            $addHandler(this.$9_0, "click", this.$$d_$2B_0);
            $addHandler(this.$9_0, "mousedown", this.$$d_$2C_0);
            $addHandler(this.$9_0, "mouseup", this.$$d_$2C_0);
            e.appendChild(this.$9_0)
        }
        if (this.$h_0) this.$O_0 = this.$6_0;
        else this.$O_0 = this.$9_0; d.appendChild(e); c.appendChild(d); d.appendChild(b);
        if (this.$o_0) {
            var i = this.$o_0;
            i = SP.UI.Dialog.$29(i);
            var f = this.$A_0("div");
            this.$1Z_0 = f;
            f.className = "ms-dlgFrameContainer";
            if (!SP.ScriptUtility.isNullOrUndefined(this.$2_0.$8_0) && this.$2_0.$8_0) f.className = "ms-dlgFrameContainerNoPadding";
            c.appendChild(f);
            var g = this.$A_0("iframe");
            this.$0_0 = g;
            this.$0_0.id = "DlgFrame" + SP.Guid.newGuid().toString();
            g.className = "ms-dlgFrame";
            g.setAttribute("src", i);
            g.setAttribute("frameBorder", "0");
            f.appendChild(g)
        } else {
            var h = this.$A_0("div");
            this.$1Z_0 = h;
            h.className = "ms-dlgFrameContainer";
            if (!SP.ScriptUtility.isNullOrUndefined(this.$2_0.$8_0) && this.$2_0.$8_0) h.className = "ms-dlgFrameContainerNoPadding";
            c.appendChild(h);
            var k = this.$L_0.getElementsByTagName("a");
            this.$1n_0(k);
            this.$K_0 = this.$A_0("div");
            this.$K_0.appendChild(this.$L_0);
            h.appendChild(this.$K_0)
        }
        this.$G_0 = this.$A_0("input"); this.$G_0.type = "button"; this.$G_0.value = SP.Res.hiddenButtonValueAfterDialog; this.$G_0.className = "ms-accessible"; c.appendChild(this.$G_0); $addHandler(this.$H_0, "focus", this.$$d_$2W_0); $addHandler(this.$H_0, "click", this.$$d_$2W_0); $addHandler(this.$G_0, "focus", this.$$d_$2V_0); $addHandler(this.$G_0, "click", this.$$d_$2V_0); this.$7_0 = this.$A_0("iframe"); this.$7_0.style.border = "none"; this.$7_0.style.position = "absolute"; this.$7_0.setAttribute("frameBorder", "0"); this.$7_0.style.zIndex = this.$4_0.style.zIndex - 1;
        var j = window.browseris.ipad;
        if (j && document.documentElement.dir === "rtl") this.$7_0.style.height = this.$7_0.style.width = "0px";
        if (this.get_$w_0()) SP.UI.Dialog.get_$3().document.body.insertBefore(this.$7_0, this.$4_0);
        else document.body.insertBefore(this.$7_0, this.$4_0); $addHandler(this.$4_0, "click", this.$$d_$2H_0); this.$0_0 && $addHandler(this.$0_0, "load", this.$$d_$1g_0); this.$2j_0(); $addHandler(window, "message", this.$$d_$2f_0)
    },
    $1u_0: function () {
        ULSaKF:;
        if (!this.get_$s_0()) throw Error.invalidOperation();
        if (this.$a_0) throw Error.invalidOperation(); this.$1v_0(); this.$1S_0(); !this.get_$19_0() && this.$1R_0(true)
    },
    $2j_0: function () {
        ULSaKF:;
        if (this.$0_0) {
            this.$0_0.cancelPopUp = this.$$d_$1e_0;
            this.$0_0.commitPopup = this.$$d_$2D_0;
            this.$0_0.overrideDialogResult = this.$$d_$2d_0;
            this.$0_0.navigateParent = SP.Utilities.HttpUtility.navigateTo;
            this.$0_0.commonModalDialogClose = this.$$d_$2E_0;
            this.$0_0.dialogArgs = this.$1C_0;
            this.$0_0.autoSize = this.$$d_autoSize;
            this.$0_0.autoSizeSuppressScrollbar = this.$$d_autoSizeSuppressScrollbar;
            if (this.get_$s_0()) this.$0_0.makeVisible = this.$$d_$1u_0
        }
    },
    $1e_0: function () {
        ULSaKF:; this.close(0)
    },
    $2D_0: function (a) {
        ULSaKF:; this.$k_0 = a; this.close(1)
    },
    $2E_0: function (a, b) {
        ULSaKF:; this.$k_0 = b; this.close(a)
    },
    $2d_0: function (a) {
        ULSaKF:; this.$1G_0 = a
    },
    $2f_0: function (k) {
        ULSaKF:;
        var a = k.rawEvent.data;
        if (a)
            if (a === "CloseDialog") this.$1e_0();
            else if (a === "MakePageVisible" && this.get_$s_0() && !this.$a_0) this.$1u_0();
            else if (a.indexOf("NavigateParent") !== -1) {
                var g = a.split("=");
                if (g.length === 2) {
                    var l = this;
                    EnsureScriptFunc("core.js", "IsSafeHref", function () {
                        ULSaKF:;
                        var a = g[1],
                            b = window.self.IsSafeHref(a);
                        if (b) SP.UI.Dialog.get_$3().location.href = a;
                        else throw Error.create(String.format("Invalid web URL: {0}", a));
                    })
                }
            } else {
                var h = a.split(";");
                if (h.length === 2) {
                    for (var c = -1, d = -1, f = h, i = f.length, e = 0; e < i; ++e) {
                        var j = f[e],
                            b = j.split("=");
                        if (b.length === 2)
                            if (b[0] === "PageWidth") c = parseInt(b[1]);
                            else if (b[0] === "PageHeight") d = parseInt(b[1])
                    }
                    if (c !== -1 && d !== -1) {
                        this.$1Y_0 = true;
                        this.$Y_0 = c;
                        this.$S_0 = d;
                        if (this.$a_0) {
                            this.$Z_0(c, d);
                            this.$1T_0(true)
                        }
                    }
                }
            }
    },
    $1R_0: function (a) {
        ULSaKF:; window.IsFullNameDefined("CUI.PMetrics.perfMark") && CUI.PMetrics.perfMark(7706); this.$4_0.style.display = "block"; this.$Z_0(this.$Y_0, this.$S_0);
        if (this.$0_0) {
            this.$E_0 = this.$0_0.offsetHeight;
            this.$F_0 = this.$0_0.offsetWidth
        } else {
            this.$E_0 = this.$K_0.offsetHeight;
            this.$F_0 = this.$K_0.offsetWidth
        }
        if (this.get_$19_0() && a && !this.$1Y_0) this.autoSize();
        else {
            this.$Z_0(this.$F_0, this.$E_0);
            this.$1T_0(a)
        }
    },
    $1T_0: function (g) {
        ULSaKF:;
        var a, b, c = SP.UI.Dialog.$2Q(SP.UI.Dialog.get_$3()),
            d = SP.UI.Dialog.$2U(SP.UI.Dialog.get_$3());
        if (!SP.ScriptUtility.isNullOrUndefined(this.$p_0)) a = this.$p_0;
        else if (this.get_$w_0()) {
            a = (SP.UI.Dialog.$1l(SP.UI.Dialog.get_$3()) - this.$4_0.offsetWidth) / 2 + c;
            if (a < c + this.$5_0) a = c + this.$5_0
        } else {
            a = (SP.UI.Dialog.$1W(this.$4_0.ownerDocument) - this.$4_0.offsetWidth) / 2;
            if (a < this.$5_0) a = this.$5_0
        }
        if (!SP.ScriptUtility.isNullOrUndefined(this.$q_0)) b = this.$q_0;
        else if (this.get_$w_0()) {
            b = (SP.UI.Dialog.$1k(SP.UI.Dialog.get_$3()) - this.$4_0.offsetHeight) / 2 + d;
            if (b < d + this.$5_0) b = d + this.$5_0
        } else {
            b = (SP.UI.Dialog.$1V(this.$4_0.ownerDocument) - this.$4_0.offsetHeight) / 2;
            if (b < this.$5_0) b = this.$5_0
        }
        this.$P_0 = a; this.$b_0 = b;
        if (g) {
            this.$18_0(this.$P_0, this.$b_0);
            this.$20_0();
            this.$2Z_0();
            this.$1o_0();
            if (this.$T_0) this.$1d_0();
            else this.$1O_0 && this.$1w_0(null)
        } else {
            var e = document.documentElement.dir === "rtl" ? 1e4 : -1e4,
                f = -1e4;
            this.$18_0(e, f)
        }
    },
    $20_0: function () {
        ULSaKF:; this.$W_0.style.width = Math.max(this.$I_0.offsetWidth - this.$1f_0, 0) + "px"
    },
    hide: function () {
        ULSaKF:; this.$N_0 > 0 && this.$1m_0();
        if (this.$4_0) this.$4_0.style.display = "none";
        if (this.$7_0) this.$7_0.style.display = "none"
    },
    close: function (a) {
        ULSaKF:; this.$1S_0();
        if (this.$R_0) return;
        if (this.$D_0) {
            this.$D_0.dispose();
            this.$D_0 = null
        }
        if (this.$4_0) {
            this.$4_0.style.display = "none";
            $clearHandlers(this.$4_0)
        }
        if (this.$m_0) {
            $removeHandler(this.$I_0, "dblclick", this.$m_0);
            this.$m_0 = null
        }
        this.$W_0 = null;
        if (this.$I_0) {
            $clearHandlers(this.$I_0);
            this.$I_0 = null
        }
        if (this.$0_0) {
            $clearHandlers(this.$0_0);
            this.$0_0.setAttribute("src", "/_layouts/" + 15 + "/blank.htm");
            this.$0_0 = null
        }
        this.$g_0 = null;
        if (this.$9_0) {
            $clearHandlers(this.$9_0);
            this.$9_0 = null
        }
        if (this.$H_0) {
            $clearHandlers(this.$H_0);
            this.$H_0 = null
        }
        if (this.$G_0) {
            $clearHandlers(this.$G_0);
            this.$G_0 = null
        }
        this.$M_0 = null; this.$O_0 = null;
        if (this.$6_0) {
            $clearHandlers(this.$6_0);
            this.$6_0 = null
        }
        this.$N_0 > 0 && this.$1m_0();
        if (this.$1G_0 === -1) this.$1F_0 = a;
        else this.$1F_0 = this.$1G_0; $removeHandler(window, "message", this.$$d_$2f_0); this.$d_0 && SP.UI.Dialog.get_$3().setTimeout(this.$$d_$2o_0, 0);
        if (this.$4_0) {
            SP.UI.UIUtility.removeNode(this.$4_0);
            this.$4_0 = null
        }
        if (this.$7_0) {
            SP.UI.UIUtility.removeNode(this.$7_0);
            this.$7_0 = null
        }
        this.$R_0 = true; window.IsFullNameDefined("CUI.PMetrics.perfMark") && CUI.PMetrics.perfMark(7707)
    },
    get_closed: function () {
        ULSaKF:;
        return this.$R_0
    },
    get_frameElement: function () {
        ULSaKF:;
        return this.$0_0
    },
    get_dialogElement: function () {
        ULSaKF:;
        return this.$4_0
    },
    get_isMaximized: function () {
        ULSaKF:;
        return this.$T_0
    },
    $N_0: 0,
    $2o_0: function () {
        ULSaKF:;
        if (this.$d_0) {
            this.$d_0(this.$1F_0, this.$k_0);
            this.$d_0 = null
        }
    },
    $10_0: 0,
    $2k_0: function (e) {
        ULSaKF:;
        var a = SP.UI.Dialog.get_$r();
        if (!a) {
            a = SP.UI.Dialog.get_$3().document.createElement("div");
            a.className = "ms-dlgOverlay";
            SP.UI.Dialog.get_$3().document.body.appendChild(a);
            SP.UI.Dialog.set_$r(a);
            SP.UI.Dialog.$23(a);
            if (!SP.UI.Dialog.$X) SP.UI.Dialog.$X = SP.UI.Dialog.$2q;
            $addHandler(SP.UI.Dialog.get_$3(), "resize", SP.UI.Dialog.$X)
        }
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer)
            for (var d = document.getElementsByTagName("object"), c = 0; c < d.length; c++) {
                var b = d[c];
                if (b.className.indexOf("ms-dlgDisable") !== -1 && b.style.visibility !== "hidden") {
                    b.dialogDisabled = true;
                    b.style.visibility = "hidden"
                }
            }
        this.$10_0 = a.style.zIndex; a.style.display = "block"; a.style.zIndex = e; a.style.width = SP.UI.Dialog.$1W(SP.UI.Dialog.get_$3().document) + "px"; a.style.height = SP.UI.Dialog.$1V(SP.UI.Dialog.get_$3().document) + "px"; !SP.ScriptUtility.isNullOrUndefined(this.$2_0.$1A_0) && this.$2_0.$1A_0 && $addHandler(a, "click", this.$$d_$2B_0)
    },
    $1m_0: function () {
        ULSaKF:;
        var b = SP.UI.Dialog.get_$r();
        if (b) {
            if (SP.ScriptUtility.isNullOrUndefined(this.$10_0) || this.$10_0 <= 0) {
                b.style.display = "none";
                if (Sys.Browser.agent === Sys.Browser.InternetExplorer)
                    for (var d = document.getElementsByTagName("object"), c = 0; c < d.length; c++) {
                        var a = d[c];
                        if (a.className.indexOf("ms-dlgDisable") !== -1 && a.style.visibility === "hidden" && a.dialogDisabled) {
                            a.dialogDisabled = false;
                            a.style.visibility = "visible"
                        }
                    }
            }
            b.style.zIndex = this.$10_0
        }
    },
    $A_0: function (a) {
        ULSaKF:;
        return this.get_$w_0() ? SP.UI.Dialog.get_$3().document.createElement(a) : document.createElement(a)
    },
    get_$w_0: function () {
        ULSaKF:;
        return this.$N_0 > 0
    }
};
SP.UI.DialogHostedWindow = function (a, b) {
    ULSaKF:; this.$e_0 = a; this.$16_0 = b
};
SP.UI.DialogHostedWindow.prototype = {
    $e_0: null,
    $16_0: null,
    initialize: function () {
        ULSaKF:;
        try {
            if (this.$16_0.document && this.$16_0.document.body) this.$16_0.document.body.tabIndex = -1
        } catch (a) { }
    },
    dispose: function () { }
};
SP.UI.Lightbox = function (b) {
    ULSaKF:;
    var a = new SP.UI.DialogOptions; a.url = b.url; a.html = b.html; a.title = b.title; a.width = b.width; a.height = b.height; a.autoSize = b.autoSize; a.$1A_0 = true; this.$e_0 = new SP.UI.ModalDialog(a); this.$e_0.$1p_0()
};
SP.UI.Lightbox.showLightbox = function (a) {
    ULSaKF:;
    return new SP.UI.Lightbox(a)
};
SP.UI.Lightbox.prototype = {
    $e_0: null,
    close: function () {
        ULSaKF:; this.$e_0.close(1)
    }
};
SP.UI.MediaLightbox = function (c) {
    ULSaKF:; this.$$d_$2s_0 = Function.createDelegate(this, this.$2s_0);
    var a = new SP.UI.DialogOptions; a.x = 0;
    var b = SP.UI.MediaLightbox.$2T(); a.y = b; a.$1P_0 = b; a.showMaximized = true; a.url = c.lightboxUrl; a.$8_0 = true; a.$c_0 = true; a.$1Q_0 = false; this.$C_0 = new SP.UI.Dialog(a); this.$C_0.$1M_0 = 0; this.$C_0.$14_0 = 0; this.$C_0.$12_0 = 0; this.$C_0.$13_0 = 0; this.$C_0.$5_0 = 0; this.$C_0.$N_0 = 1002; this.$C_0.$1p_0(); $addHandler(window.self, "resize", this.$$d_$2s_0)
};
SP.UI.MediaLightbox.$2T = function () {
    ULSaKF:;
    var a = $get("O365_NavHeader") || $get("suiteBar");
    return a ? a.clientHeight : 0
};
SP.UI.MediaLightbox.show = function (a) {
    ULSaKF:;
    return new SP.UI.MediaLightbox(a)
};
SP.UI.MediaLightbox.prototype = {
    $C_0: null,
    $2s_0: function () {
        ULSaKF:;
        if (this.$C_0.$R_0) {
            $removeHandler(window.self, "resize", this.$$d_$2s_0);
            return
        }
        this.$C_0.autoSize()
    },
    close: function () {
        ULSaKF:; $removeHandler(window.self, "resize", this.$$d_$2s_0); this.$C_0.close(1)
    }
};
SP.UI.ModalDialog = function (a) {
    ULSaKF:; SP.UI.ModalDialog.initializeBase(this, [a])
};
SP.UI.ModalDialog.get_$17 = function () {
    ULSaKF:;
    var a = 0,
        b = SP.UI.Dialog.get_$3().g_ModalDialogCount;
    if (!SP.ScriptUtility.isNullOrUndefined(b)) a = b;
    return a
};
SP.UI.ModalDialog.set_$17 = function (a) {
    ULSaKF:; SP.UI.Dialog.get_$3().g_ModalDialogCount = a;
    return a
};
SP.UI.ModalDialog.get_childDialog = function () {
    ULSaKF:;
    var a = SP.UI.Dialog.get_$3().g_childDialog;
    return SP.ScriptUtility.isNullOrUndefined(a) ? null : a
};
SP.UI.ModalDialog.$1y = function (a) {
    ULSaKF:; SP.UI.Dialog.get_$3().g_childDialog = a
};
SP.UI.ModalDialog.showModalDialog = function (b) {
    ULSaKF:;
    var a = new SP.UI.ModalDialog(b); a.$1p_0();
    return a
};
SP.UI.ModalDialog.showPlatformFirstRunDialog = function (c, b) {
    ULSaKF:;
    var a = new SP.UI.DialogOptions; a.includeScrollBarPadding = false; a.url = c; a.showClose = false; a.allowMaximize = false; a.$c_0 = true; a.$8_0 = true; a.dialogReturnValueCallback = b;
    return SP.UI.ModalDialog.showModalDialog(a)
};
SP.UI.ModalDialog.showErrorDialog = function (i, c, h, g) {
    ULSaKF:;
    var d = "ms-core-form-OKButton",
        e = g ? c : "<div>" + c + "</div>"; e += "<div class='ms-core-form-bottomButtonBox'><button id='" + d + "'>" + SP.Utilities.HttpUtility.htmlEncode(window.self.Strings.STS.L_CloseButtonCaption) + "</button></div>";
    var f = SP.UI.Dialog.get_$3().document.createElement("DIV"); f.innerHTML = e;
    var a = new SP.UI.DialogOptions; a.html = f; a.title = i; a.dialogReturnValueCallback = h;
    var j = SP.UI.ModalDialog.showModalDialog(a),
        b = SP.UI.Dialog.get_$3().document.getElementById(d);
    if (!SP.ScriptUtility.isNullOrUndefined(b)) {
        $addHandler(b, "click", SP.UI.ModalDialog.$2I);
        b.focus()
    }
    return j
};
SP.UI.ModalDialog.$2I = function () {
    ULSaKF:;
    var a = SP.UI.ModalDialog.get_childDialog(); !SP.ScriptUtility.isNullOrUndefined(a) && a.close(1)
};
SP.UI.ModalDialog.$2l = function () {
    ULSaKF:;
    return SP.UI.ModalDialog.showWaitScreenWithNoClose(SP.Res.dialogLoading15)
};
SP.UI.ModalDialog.showWaitScreenWithNoClose = function (c, a, b, d) {
    ULSaKF:;
    return SP.UI.ModalDialog.$22(c, a, false, true, null, b, d, null, 1)
};
SP.UI.ModalDialog.showWaitScreenSize = function (d, b, a, c, e) {
    ULSaKF:;
    return SP.UI.ModalDialog.$22(d, b, true, true, a, c, e, null, 1)
};
SP.UI.ModalDialog.$2e = function (b) {
    ULSaKF:;
    var a = b.target; Sys.UI.DomElement.addCssClass(a.parentNode, "ms-hide")
};
SP.UI.ModalDialog.$22 = function (r, l, p, s, t, q, g, h, m) {
    ULSaKF:;
    if (SP.ScriptUtility.isNullOrUndefined(q) && SP.ScriptUtility.isNullOrUndefined(g) && SP.ScriptUtility.isNullOrUndefined(h)) h = "39px 0px 30px"; l = l || "";
    var d = SP.UI.Dialog.get_$3().document.createElement("INPUT"),
        b = SP.UI.Dialog.get_$3().document.createElement("DIV"); b.style.padding = SP.ScriptUtility.isNullOrUndefined(h) ? "10px" : h;
    var e = SP.UI.Dialog.get_$3().document.createElement("DIV"),
        f = SP.UI.Dialog.get_$3().document.createElement("SPAN");
    if (m === 1) f.style.paddingTop = "6px"; f.style.paddingRight = "10px";
    var c = SP.UI.Dialog.get_$3().document.createElement("IMG");
    if (m === 1) c.src = GetImageUrlWithRevision("/_layouts/" + 15 + "/images/gears_anv4.gif");
    else if (!m) c.src = GetImageUrlWithRevision("/_layouts/" + 15 + "/images/loadingcirclests16.gif"); c.title = window.self.Strings.STS.L_SPClientPeoplePickerWaitImgAlt; $addHandler(c, "click", SP.UI.ModalDialog.$2e); f.appendChild(c);
    var i = SP.UI.Dialog.get_$3().document.createElement("SPAN"); i.className = "ms-core-pageTitle ms-accentText"; i.innerHTML = r; e.className = "ms-dlgLoadingTextDiv ms-alignCenter"; e.appendChild(f); e.appendChild(i); b.appendChild(e);
    var j = SP.UI.Dialog.get_$3().document.createElement("DIV"); j.className = "ms-textXLarge ms-alignCenter"; j.innerHTML = l; b.appendChild(j);
    if (p) {
        var k = SP.UI.Dialog.get_$3().document.createElement("DIV");
        k.className = "ms-floatRight";
        d.type = "Button";
        d.value = SP.Res.createWaitScreenCancel;
        k.appendChild(d);
        b.appendChild(k);
        var o = SP.UI.Dialog.get_$3().document.createElement("DIV");
        o.className = "ms-clear";
        b.appendChild(o)
    }
    var a = new SP.UI.DialogOptions; a.includeScrollBarPadding = false; a.html = b; a.width = g; a.height = q; a.showClose = p; a.autoSizeStartWidth = !SP.ScriptUtility.isNullOrUndefined(g) ? g : 327; a.allowMaximize = s; a.title = ""; a.$c_0 = true; a.dialogReturnValueCallback = t;
    var n = SP.UI.ModalDialog.showModalDialog(a); $addHandler(d, "click", n.$$d_$2B_0);
    return n
};
SP.UI.ModalDialog.OpenPopUpPage = function (d, a, c, b) {
    ULSaKF:; OpenPopUpPage(d, a, c, b)
};
SP.UI.ModalDialog.ShowPopupDialog = function (a) {
    ULSaKF:; ShowPopupDialog(a)
};
SP.UI.ModalDialog.commonModalDialogOpen = function (d, b, a, c) {
    ULSaKF:; commonModalDialogOpen(d, b, a, c)
};
SP.UI.ModalDialog.commonModalDialogClose = function (a, b) {
    ULSaKF:; commonModalDialogClose(a, b)
};
SP.UI.ModalDialog.RefreshPage = function (a) {
    ULSaKF:; RefreshPage(a)
};
SP.UI.ModalDialog.prototype = {
    $1a_1: false,
    $z_1: null,
    $1p_0: function () {
        ULSaKF:;
        var a;
        (a = SP.UI.ModalDialog).set_$17(a.get_$17() + 1); this.$N_0 = SP.UI.ModalDialog.get_$17() * 5 + 1500; SP.UI.Dialog.prototype.$1p_0.call(this); this.$z_1 = SP.UI.ModalDialog.get_childDialog(); SP.UI.ModalDialog.$1y(this)
    },
    close: function (b) {
        ULSaKF:;
        if (this.$1a_1) return; this.$1a_1 = true;
        var a;
        (a = SP.UI.ModalDialog).set_$17(a.get_$17() - 1); SP.UI.ModalDialog.$1y(this.$z_1); this.$z_1 = null; SP.UI.Dialog.prototype.close.call(this, b)
    }
};
Type.registerNamespace("SP.Application.UI");
SP.Application.UI.DragBehavior = function (a, b) {
    ULSaKF:; this.$$d_$2c_2 = Function.createDelegate(this, this.$2c_2); this.$$d_$2b_2 = Function.createDelegate(this, this.$2b_2); this.$$d_$2a_2 = Function.createDelegate(this, this.$2a_2); SP.Application.UI.DragBehavior.initializeBase(this, [a]); this.$U_2 = new SP.Application.UI.MouseTrackerBehavior(b); this.$f_2 = []; this.$B_2 = null
};
SP.Application.UI.DragBehavior.prototype = {
    $U_2: null,
    $f_2: null,
    $B_2: null,
    $28_2: function (a) {
        ULSaKF:; this.$f_2[this.$f_2.length] = a
    },
    $2F_2: function (a) {
        ULSaKF:;
        if (Sys.Browser.agent === Sys.Browser.Firefox || Sys.Browser.agent === Sys.Browser.Safari || Sys.Browser.agent === Sys.Browser.AppleWebKit) {
            if (!a) return;
            this.$B_2 = document.createElement("div");
            this.$B_2.style.position = "absolute";
            this.$B_2.style.cursor = "move";
            this.$B_2.style.zIndex = a.style.zIndex + 1;
            this.$B_2.style.width = a.offsetWidth + "px";
            this.$B_2.style.height = a.offsetHeight + "px";
            this.$B_2.style.top = a.offsetTop + "px";
            this.$B_2.style.left = a.offsetLeft + "px"
        }
    },
    initialize: function () {
        ULSaKF:; Sys.UI.Behavior.prototype.initialize.call(this); this.$U_2.initialize(); this.$U_2.add_$2A_2(this.$$d_$2a_2); this.$U_2.add_$2L_2(this.$$d_$2b_2); this.$U_2.add_$2m_2(this.$$d_$2c_2)
    },
    $1D_2: 0,
    $1E_2: 0,
    $1J_2: 0,
    $1I_2: 0,
    $2a_2: function (g, b) {
        ULSaKF:;
        var c = b.$j_1.x,
            d = b.$j_1.y,
            e = this.get_element().offsetLeft,
            f = this.get_element().offsetTop; this.$1D_2 = c - e; this.$1E_2 = d - f;
        var a = window.self._dlgWndTop(); this.$1J_2 = a.document.body.clientWidth; this.$1I_2 = a.document.body.clientHeight; this.$B_2 && this.get_element().appendChild(this.$B_2)
    },
    $2b_2: function (g, e) {
        ULSaKF:;
        var a = e.$j_1.x,
            b = e.$j_1.y;
        if (a < 16) a = 16;
        else if (a > this.$1J_2 - 16) a = this.$1J_2 - 16;
        if (b < 16) b = 16;
        else if (b > this.$1I_2 - 16) b = this.$1I_2 - 16; this.get_element().style.left = a - this.$1D_2 + "px"; this.get_element().style.top = b - this.$1E_2 + "px";
        for (var c = 0, f = this.$f_2.length; c < f; c++) {
            var d = this.$f_2[c];
            d.style.left = a - this.$1D_2 + "px";
            d.style.top = b - this.$1E_2 + "px"
        }
    },
    $2c_2: function () {
        ULSaKF:; this.$B_2 && this.get_element().removeChild(this.$B_2)
    },
    dispose: function () {
        ULSaKF:;
        try {
            this.$U_2 && this.$U_2.dispose()
        } finally {
            Sys.UI.Behavior.prototype.dispose.call(this)
        }
    }
};
SP.Application.UI.MouseTrackerEventArgs = function (a, b, c, d) {
    ULSaKF:; SP.Application.UI.MouseTrackerEventArgs.initializeBase(this); this.$1t_1 = d; this.$j_1 = a; this.$1s_1 = b; this.$1r_1 = c
};
SP.Application.UI.MouseTrackerEventArgs.prototype = {
    $j_1: null,
    $1s_1: null,
    $1r_1: null,
    $1t_1: null
};
SP.Application.UI.MouseTrackerBehavior = function (a) {
    ULSaKF:; this.$$d_$2O_2 = Function.createDelegate(this, this.$2O_2); this.$$d_$2N_2 = Function.createDelegate(this, this.$2N_2); this.$$d_$2M_2 = Function.createDelegate(this, this.$2M_2); SP.Application.UI.MouseTrackerBehavior.initializeBase(this, [a]); this.$11_2 = this.$$d_$2M_2; this.$i_2 = this.$$d_$2N_2; this.$V_2 = this.$$d_$2O_2
};
SP.Application.UI.MouseTrackerBehavior.$1c = function (b) {
    ULSaKF:;
    if (b.rawEvent.pageX) return new Sys.UI.Point(b.rawEvent.pageX, b.rawEvent.pageY);
    var c = b.clientX + document.body.scrollLeft - document.body.clientLeft,
        d = b.clientY + document.body.scrollTop - document.body.clientTop,
        a = document.body.parentNode;
    if (a && a.clientLeft) {
        c += a.scrollLeft - a.clientLeft;
        d += a.scrollTop - a.clientTop
    }
    return new Sys.UI.Point(c, d)
};
SP.Application.UI.MouseTrackerBehavior.prototype = {
    $11_2: null,
    $i_2: null,
    $V_2: null,
    $n_2: false,
    initialize: function () {
        ULSaKF:; Sys.UI.Behavior.prototype.initialize.call(this); this.$n_2 = false; $addHandler(this.get_element(), "mousedown", this.$11_2)
    },
    $1K_2: 0,
    $1L_2: 0,
    add_$2A_2: function (a) {
        ULSaKF:; this.get_events().addHandler("begindrag", a)
    },
    add_$2m_2: function (a) {
        ULSaKF:; this.get_events().addHandler("stopdrag", a)
    },
    add_$2L_2: function (a) {
        ULSaKF:; this.get_events().addHandler("dragging", a)
    },
    $2M_2: function (a) {
        ULSaKF:;
        if (this.$n_2 || a.button) return; this.$n_2 = true; this.$1K_2 = a.clientX; this.$1L_2 = a.clientY;
        if (this.get_element().ownerDocument.addEventListener) {
            $addHandler(this.get_element().ownerDocument, "mousemove", this.$i_2);
            $addHandler(this.get_element().ownerDocument, "mouseup", this.$V_2)
        } else {
            this.get_element().setCapture();
            $addHandler(this.get_element(), "mousemove", this.$i_2);
            $addHandler(this.get_element(), "mouseup", this.$V_2);
            $addHandler(this.get_element(), "losecapture", this.$V_2)
        }
        a.preventDefault(); a.stopPropagation();
        var b = this.get_events().getHandler("begindrag");
        if (b) {
            var c = new Sys.UI.Point(a.clientX, a.clientY),
                d = new Sys.UI.Point(0, 0),
                e = SP.Application.UI.MouseTrackerBehavior.$1c(a),
                f = new SP.Application.UI.MouseTrackerEventArgs(c, d, e, a.target);
            b(this, f)
        }
    },
    $2N_2: function (a) {
        ULSaKF:;
        if (!this.$n_2) return; a.stopPropagation();
        var b = this.get_events().getHandler("dragging");
        if (b) {
            var c = new Sys.UI.Point(a.clientX, a.clientY),
                d = new Sys.UI.Point(a.clientX - this.$1K_2, a.clientY - this.$1L_2),
                e = SP.Application.UI.MouseTrackerBehavior.$1c(a),
                f = new SP.Application.UI.MouseTrackerEventArgs(c, d, e, a.target);
            b(this, f)
        }
    },
    $2O_2: function (a) {
        ULSaKF:; this.$n_2 = false;
        if (this.get_element().ownerDocument.removeEventListener) {
            $removeHandler(this.get_element().ownerDocument, "mouseup", this.$V_2);
            $removeHandler(this.get_element().ownerDocument, "mousemove", this.$i_2)
        } else {
            $removeHandler(this.get_element(), "losecapture", this.$V_2);
            $removeHandler(this.get_element(), "mouseup", this.$V_2);
            $removeHandler(this.get_element(), "mousemove", this.$i_2);
            this.get_element().releaseCapture()
        }
        a.stopPropagation();
        var b = this.get_events().getHandler("stopdrag");
        if (b) {
            var c = new Sys.UI.Point(a.clientX, a.clientY),
                d = new Sys.UI.Point(a.clientX - this.$1K_2, a.clientY - this.$1L_2),
                e = SP.Application.UI.MouseTrackerBehavior.$1c(a),
                f = new SP.Application.UI.MouseTrackerEventArgs(c, d, e, a.target);
            b(this, f)
        }
    },
    dispose: function () {
        ULSaKF:;
        try {
            if (this.$11_2) this.get_element() && $removeHandler(this.get_element(), "mousedown", this.$11_2)
        } finally {
            Sys.UI.Behavior.prototype.dispose.call(this)
        }
    }
};
SP.UI.DialogOptions.registerClass("SP.UI.DialogOptions");
SP.UI.LightboxOptions.registerClass("SP.UI.LightboxOptions");
SP.UI.MediaLightboxOptions.registerClass("SP.UI.MediaLightboxOptions");
SP.UI.Dialog.registerClass("SP.UI.Dialog");
SP.UI.DialogHostedWindow.registerClass("SP.UI.DialogHostedWindow", null, Sys.IDisposable);
SP.UI.Lightbox.registerClass("SP.UI.Lightbox");
SP.UI.MediaLightbox.registerClass("SP.UI.MediaLightbox");
SP.UI.ModalDialog.registerClass("SP.UI.ModalDialog", SP.UI.Dialog);
SP.Application.UI.DragBehavior.registerClass("SP.Application.UI.DragBehavior", Sys.UI.Behavior);
SP.Application.UI.MouseTrackerEventArgs.registerClass("SP.Application.UI.MouseTrackerEventArgs", Sys.EventArgs);
SP.Application.UI.MouseTrackerBehavior.registerClass("SP.Application.UI.MouseTrackerBehavior", Sys.UI.Behavior);

function sp_ui_dialog_initialize() {
    ULSaKF:; SP.UI.Dialog.$X = null; SP.UI.Dialog.$1N = null; SP.UI.Dialog.$l = 0; SP.UI.ModalDialog.zIndexStep = 5; SP.UI.ModalDialog.zIndexStart = 1500
}
sp_ui_dialog_initialize();
if (!SP.UI.$create_DialogOptions) SP.UI.$create_DialogOptions = function () {
    ULSaKF:;
    return new SP.UI.DialogOptions
};
RegisterModuleInit("sp.ui.dialog.js", sp_ui_dialog_initialize);
typeof Sys != "undefined" && Sys && Sys.Application && Sys.Application.notifyScriptLoaded();
NotifyScriptLoadedAndExecuteWaitingJobs("sp.ui.dialog.js");
typeof spWriteProfilerMark == "function" && spWriteProfilerMark("perfMarkEnd_sp.ui.dialog.js");