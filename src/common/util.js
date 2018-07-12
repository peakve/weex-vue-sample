var navigator = weex.requireModule('navigator')
import UrlParser from 'url-parse';

const Utils = {
    UrlParser: UrlParser,

    initIconFont() {
        let domModule = weex.requireModule('dom');
        // domModule.addRule('fontFace', {
        //     'fontFamily': "iconfont",
        //     'src': "url('http://at.alicdn.com/t/font_404010_f29c7wlkludz33di.ttf')"
        // });
    },
    getNameSpance(url) {
        const modal = weex.requireModule('modal')
        const bundleUrl = url;
        let host = '';
        let path = '';
        let nativeBase;
        const isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/') >= 0;
        const isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
        if (isAndroidAssets) {
            nativeBase = 'file://assets/dist';
        } else if (isiOSAssets) {
            // file:///var/mobile/Containers/Bundle/Application/{id}/WeexDemo.app/
            // file:///Users/{user}/Library/Developer/CoreSimulator/Devices/{id}/data/Containers/Bundle/Application/{id}/WeexDemo.app/
            nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
        } else {
            const matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
            const matchFirstPath = /\/\/[^\/]+\/([^\s]+)\//.exec(bundleUrl);
            if (matches && matches.length >= 2) {
                host = matches[1];
            }
            if (matchFirstPath && matchFirstPath.length >= 2) {
                path = matchFirstPath[1];
            }
            nativeBase = 'http://' + host + '/';
            // modal.toast({ message: path + '//--', duration: 1 })
            // console.log(nativeBase);
        }

        // in Native
        // let base = nativeBase + (!!path ? path + '/' : '');
        // return base
        //for test
        return nativeBase;
    },
    setBundleUrl(url, jsFile, isweb) {
        const modal = weex.requireModule('modal')
        const bundleUrl = url;
        let host = '';
        let path = '';
        let nativeBase;
        const isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;
        const isiOSAssets = bundleUrl.indexOf('.app') > 0;
        if (isAndroidAssets) {
            nativeBase = 'file://assets/dist';
        } else if (isiOSAssets) {
            //路由
            nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/index') + 1);
        } else {
            const matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
            const matchFirstPath = /\/\/[^\/]+\/([^\s]+)\//.exec(bundleUrl);
            if (matches && matches.length >= 2) {
                host = matches[1];
            }
            if (matchFirstPath && matchFirstPath.length >= 2) {
                path = matchFirstPath[1];
            }
            nativeBase = 'http://' + host + '/';
            // modal.toast({ message: path + '//--', duration: 1 })
            // console.log(nativeBase);
        }
        const h5Base = 'index.html?page=';
        // in Native
        let base = nativeBase;
        if (isweb) {
            if (path === 'web' || path === 'dist') {
                base = nativeBase + h5Base + '/dist/';
            } else {
                base = nativeBase + h5Base + '';
            }
            // console.log(base);
        } else if (typeof navigator !== 'undefined' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko')) {
            // check if in weexpack project
            if (path === 'web' || path === 'dist') {
                base = h5Base + '/dist/';
            } else {
                base = h5Base + '';
            }
        } else {
            base = nativeBase + (!!path ? path + '/' : '');
        }

        const newUrl = base + jsFile;
        modal.toast({ message: newUrl + '--', duration: 1 })
        return newUrl;
    },
    getUrlSearch(url, name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = url.slice(url.indexOf('?') + 1).match(reg);
        if (r != null) {
            try {
                return decodeURIComponent(r[2]);
            } catch (_e) {
                return null;
            }
        }
        return null;
    },

    jump(to) {
        if (this.$router) {
            this.$router.push(to)
        }
    },
    jumpWeb(bundleUrl, _url) {
        const url = this.setBundleUrl(bundleUrl, '../webview.js?weburl=' + _url);

        console.log("jumpweb>>" + url);
        navigator.push({
            url: url,
            animated: true
        });
    },
    jumpUrl(bundleUrl, _url) {
        const url = this.setBundleUrl(bundleUrl, _url);
        console.log("jumpUrl>>" + url);
        navigator.push({
            url: url,
            animated: true
        });
    },

    _typeof(obj) {
        return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
    },
    isPlainObject(obj) {
        return Utils._typeof(obj) === 'object';
    },
    isString(obj) {
        return typeof(obj) === 'string';
    },
    isNonEmptyArray(obj = []) {
        return obj && obj.length > 0 && Array.isArray(obj) && typeof obj !== 'undefined';
    },
    isObject(item) {
        return (item && typeof item === 'object' && !Array.isArray(item));
    },
    isEmptyObject(obj) {
        return Object.keys(obj).length === 0 && obj.constructor === Object;
    },
    decodeIconFont(text) {
        // 正则匹配 图标和文字混排 eg: 我去上学校&#xe600;,天天不&#xe600;迟到
        const regExp = /&#x[a-z|0-9]{4,5};?/g;
        if (regExp.test(text)) {
            return text.replace(new RegExp(regExp, 'g'), function(iconText) {
                const replace = iconText.replace(/&#x/, '0x').replace(/;$/, '');
                return String.fromCharCode(replace);
            });
        } else {
            return text;
        }
    },
    mergeDeep(target, ...sources) {
        if (!sources.length) return target;
        const source = sources.shift();
        if (Utils.isObject(target) && Utils.isObject(source)) {
            for (const key in source) {
                if (Utils.isObject(source[key])) {
                    if (!target[key]) {
                        Object.assign(target, {
                            [key]: {}
                        });
                    }
                    Utils.mergeDeep(target[key], source[key]);
                } else {
                    Object.assign(target, {
                        [key]: source[key]
                    });
                }
            }
        }
        return Utils.mergeDeep(target, ...sources);
    },
    appendProtocol(url) {
        if (/^\/\//.test(url)) {
            const {
                bundleUrl
            } = weex.config;
            return `http${/^https:/.test(bundleUrl) ? 's' : ''}:${url}`;
        }
        return url;
    },
    encodeURLParams(url) {
        const parsedUrl = new UrlParser(url, true);
        return parsedUrl.toString();
    },
    goToH5Page(jumpUrl, animated = false, callback = null) {
        const Navigator = weex.requireModule('navigator');
        const jumpUrlObj = new Utils.UrlParser(jumpUrl, true);
        const url = Utils.appendProtocol(jumpUrlObj.toString());
        Navigator.push({
            url: Utils.encodeURLParams(url),
            animated: animated.toString()
        }, callback);
    },
    env: {
        isTaobao() {
            const { appName } = weex.config.env;
            return /(tb|taobao|淘宝)/i.test(appName);
        },
        isTrip() {
            const { appName } = weex.config.env;
            return appName === 'LX';
        },
        isBoat() {
            const { appName } = weex.config.env;
            return appName === 'Boat' || appName === 'BoatPlayground';
        },
        isWeb() {
            const { platform } = weex.config.env;
            return typeof(window) === 'object' && platform.toLowerCase() === 'web';
        },
        isIOS() {
            const { platform } = weex.config.env;
            return platform.toLowerCase() === 'ios';
        },
        /**
         * 是否为 iPhone X
         * @returns {boolean}
         */
        isIPhoneX() {
            const { deviceHeight } = weex.config.env;
            if (Utils.env.isWeb()) {
                return typeof window !== undefined && window.screen && window.screen.width && window.screen.height && (parseInt(window.screen.width, 10) === 375) && (parseInt(window.screen.height, 10) === 812);
            }
            return Utils.env.isIOS() && deviceHeight === 2436;
        },
        isAndroid() {
            const { platform } = weex.config.env;
            return platform.toLowerCase() === 'android';
        },
        isAlipay() {
            const { appName } = weex.config.env;
            return appName === 'AP';
        },
        isTmall() {
            const { appName } = weex.config.env;
            return /(tm|tmall|天猫)/i.test(appName);
        },
        isAliWeex() {
            return Utils.env.isTmall() || Utils.env.isTrip() || Utils.env.isTaobao();
        },
        supportsEB() {
            const weexVersion = weex.config.env.weexVersion || '0';
            const isHighWeex = Utils.compareVersion(weexVersion, '0.10.1.4') && (Utils.env.isIOS() || Utils.env.isAndroid());
            const expressionBinding = weex.requireModule('expressionBinding');
            return expressionBinding && expressionBinding.enableBinding && isHighWeex;
        },

        /**
         * 判断Android容器是否支持是否支持expressionBinding(处理方式很不一致)
         * @returns {boolean}
         */
        supportsEBForAndroid() {
            return (Utils.env.isAndroid()) && Utils.env.supportsEB();
        },

        /**
         * 判断IOS容器是否支持是否支持expressionBinding
         * @returns {boolean}
         */
        supportsEBForIos() {
            return (Utils.env.isIOS()) && Utils.env.supportsEB();
        },

        /**
         * 获取weex屏幕真实的设置高度，需要减去导航栏高度
         * @returns {Number}
         */
        getPageHeight() {
            const { env } = weex.config;
            const navHeight = Utils.env.isWeb() ? 0 : (Utils.env.isIPhoneX() ? 176 : 132);
            return env.deviceHeight / env.deviceWidth * 750 - navHeight;
        }
    },

    /**
     * 版本号比较
     * @memberOf Utils
     * @param currVer {string}
     * @param promoteVer {string}
     * @returns {boolean}
     * @example
     *
     * const { Utils } = require('@ali/wx-bridge');
     * const { compareVersion } = Utils;
     * console.log(compareVersion('0.1.100', '0.1.11')); // 'true'
     */
    compareVersion(currVer = '0.0.0', promoteVer = '0.0.0') {
        if (currVer === promoteVer) return true;
        const currVerArr = currVer.split('.');
        const promoteVerArr = promoteVer.split('.');
        const len = Math.max(currVerArr.length, promoteVerArr.length);
        for (let i = 0; i < len; i++) {
            const proVal = ~~promoteVerArr[i];
            const curVal = ~~currVerArr[i];
            if (proVal < curVal) {
                return true;
            } else if (proVal > curVal) {
                return false;
            }
        }
        return false;
    },
    /**
     * 分割数组
     * @param arr 被分割数组
     * @param size 分割数组的长度
     * @returns {Array}
     */
    arrayChunk(arr = [], size = 4) {
        let groups = [];
        if (arr && arr.length > 0) {
            groups = arr.map((e, i) => {
                return i % size === 0 ? arr.slice(i, i + size) : null;
            }).filter(e => {
                return e;
            });
        }
        return groups;
    },
    truncateString(str, len, hasDot = true) {
        let newLength = 0;
        let newStr = '';
        let singleChar = '';
        const chineseRegex = /[^\x00-\xff]/g;
        const strLength = str.replace(chineseRegex, '**').length;
        for (let i = 0; i < strLength; i++) {
            singleChar = str.charAt(i).toString();
            if (singleChar.match(chineseRegex) !== null) {
                newLength += 2;
            } else {
                newLength++;
            }
            if (newLength > len) {
                break;
            }
            newStr += singleChar;
        }

        if (hasDot && strLength > len) {
            newStr += '...';
        }
        return newStr;
    },
    //获取cookie、
    getCookie(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return (arr[2]);
        else
            return null;
    },
    //设置cookie,增加到vue实例方便全局调用
    setCookie(c_name, value, expiredays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
    },
    //删除cookie
    delCookie(name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = getCookie(name);
        if (cval != null)
            document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    },
    formatDate: function(time) {
        var date = new Date(time);
        return this.formatDatePattern(date, "yyyy-MM-dd hh:mm:ss");
    },

    formatDatePattern: function(date, fmt) {
        if (!date) {
            return;
        }

        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        let o = {
            'M+': date.getMonth() + 1,
            'd+': date.getDate(),
            'h+': date.getHours(),
            'm+': date.getMinutes(),
            's+': date.getSeconds()
        };
        for (let k in o) {
            if (new RegExp(`(${k})`).test(fmt)) {
                let str = o[k] + '';
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : this.padLeftZero(str));
            }
        }
        return fmt;
    },
    padLeftZero(str) {
        return ('00' + str).substr(str.length);
    },
};

export default Utils;