let stream = weex.requireModule('stream');
var navigator = weex.requireModule('navigator');

import util from '../common/util';
export default {
    data() {
        return {
            rpx: 1,
            apiDomain: '',
            android: weex.config.env.platform.toLowerCase() == 'android',
            ios: weex.config.env.platform.toLowerCase() == 'ios',
            web: weex.config.env.platform.toLowerCase() == 'web'
        }
    },
    created() {
        let self = this;
        let env = weex.config.env;
        let rWidth = env.deviceWidth;
        env.deviceWidth > 828 && (rWidth = env.deviceWidth / 3 * 2);
        self.rpx = 750 / rWidth;
        //self.apiDomain='http://xiazhou.me/example/xiazhou-weex';
        if (!self.web) {
            self.apiDomain = 'http://192.168.31.241:8080'; //替换成你电脑的IP，并保证手机能访问到电脑(连同一个wifi就好啦)
        }
    },
    methods: {
        jumpBack() {
            if (this.$router) {
                this.$router.back(-1);
            }
        },
        jump(to) {
            console.log("jump>>" + to);
            if (this.$router) {
                this.$router.push(to)
            }
        },
        jumpWeb(_url) {
            const url = util.setBundleUrl(weex.config.bundleUrl, 'page/webview.js?weburl=' + _url);

            console.log("jumpweb>>" + url);
            navigator.push({
                url: url,
                animated: "true"
            });
        },
        //children router 
        jumpUrl(_url, params) {
            let bundleUrl = weex.config.bundleUrl
            var url = bundleUrl.substring(0, bundleUrl.lastIndexOf('?'));

            console.log("jumpUrl>>" + url);
            if (params) {
                url = url + "?" + params
            }
            url += "#" + _url
                // const modal = weex.requireModule('modal');
                // modal.toast({ message: url, duration: 10 })
            navigator.push({
                url: url,
                animated: "true"
            }, event => {
                // modal.toast({ message: 'callback: ' + event })
            });
        },
        getParamsByJson(json) {
            var str = ""
            for (var val in json) {
                str += "&" + val + "=" + json[val]
            }
            return str.substring(1)
        },
        getParams() {
            var str = weex.config.bundleUrl
            str = str.substring(str.lastIndexOf('?') + 1, str.lastIndexOf('#'));
            let temp = {};
            if (!str) {
                return temp;
            }
            if (str.indexOf('=') < 0) {
                temp[str] = "";
                return temp;
            }
            let arr = str.split('&');
            arr.forEach(function(item) {
                let w = item.match(/([^=]*)=(.*)/);
                temp[w[1]] = w[2];
            });
            return temp;
        },
        getParameterByName(name, url) {
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        },

        isIpx() {
            return weex && (weex.config.env.deviceModel === 'iPhone10,3' || weex.config.env.deviceModel === 'iPhone10,6');
        },
        get_img_path(img_name) {
            let self = this;
            let img_path = ''

            if (self.web) {
                img_path = `./assets/images/${img_name}`
            } else if (self.android) {
                img_name = img_name.substr(0, img_name.lastIndexOf('.'));
                img_path = `local:///${img_name}`
            } else {
                //img_path = `../images/${img_name}`
                img_path = `assets://${img_name}`
            }

            return img_path
        },
        GET(api, callback) {
            stream.sendHttp({
                method: 'GET',
                url: url
            }, function(ret) {
                var retdata = JSON.parse(ret);
                callback(retdata);
            });
        },
        POST(url, data, callback) {
            stream.fetch({
                method: 'POST',
                url: url,
                type: 'json',
                body: data,
                headers: { 'Content-Type': 'application/json' }
            }, function(ret) {
                console.log(ret)
                if (!ret.ok) {
                    modal.toast({ message: '网络有问题，连不上', duration: 1 })
                        // modal.toast({ message: 'callback: ' + event })
                    console.log("request failed")
                        // callback("0");
                } else {
                    if (ret.data.response.ok) {
                        callback(ret.data);
                    } else {
                        modal.toast({ message: ret.data.response.message, duration: 1 })
                        console.log(ret.data)
                            // callback("0");
                    }
                }
            });
        },

        getiPhonexFringeHeight: function(deviceHeight) {
            return (88 * deviceHeight) / 1624;
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
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
                }
            }
            return fmt;
        },

        formatDate: function(time) {
            var date = new Date(time);
            return this.formatDatePattern(date, "yyyy-MM-dd hh:mm");
        },

        timeAgo: function(time) {
            const between = (Date.now() - Number(time)) / 1000;
            if (between < 2 * 60) {
                return '刚刚';
            } else if (between < 3600) {
                return this.pluralize(~~(between / 60), ' 分钟');
            } else if (between < 86400) {
                return this.pluralize(~~(between / 3600), ' 小时');
            } else if (between < 30 * 86400) {
                return this.pluralize(~~(between / 86400), ' 天');
            } else {
                return this.pluralize(~~(between / 86400), ' 天');
            }
        },

        pluralize: function(time, label) {
            if (time === 1) {
                return time + label
            }
            return time + label + '前'
        },

        gethref(url) {
            if (!url) {
                return url;
            }
            if (url.indexOf("http") == 0) {
                return url;
            } else {
                return 'http://www.51bb8.com/bfile/dfile' + url;
            }
        },

    }
}