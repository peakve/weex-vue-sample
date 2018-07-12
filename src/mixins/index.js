let stream = weex.requireModule('stream');
var navigator = weex.requireModule('navigator')
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
        }
    }
}