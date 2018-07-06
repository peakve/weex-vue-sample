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
            const url = util.setBundleUrl(this.$getConfig().bundleUrl, 'page/webview.js?weburl=' + _url);

            console.log("jumpweb>>" + url);
            navigator.push({
                url: url,
                animated: true
            });
        },
        jumpUrl(_url) {
            const url = util.setBundleUrl(this.$getConfig().bundleUrl, _url);
            console.log("jumpUrl>>" + url);
            navigator.push({
                url: url,
                animated: true
            });
        },
        isIpx() {
            return weex && (weex.config.env.deviceModel === 'iPhone10,3' || weex.config.env.deviceModel === 'iPhone10,6');
        },
        get_img_path(img_name) {
            let self = this;
            let img_path = ''

            if (self.web) {
                img_path = `./${img_name}`
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