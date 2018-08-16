/*var stream = weex.requireModule('stream');
var modal = weex.requireModole('modal');*/

var apiURL = {

    //测试本机地址
    //baseurl: 'http://192.168.3.118:8888/web/',
    //开发地址
    baseurl: 'https://www.51bb8.com/web/',

    //路径地址
    basepath: 'http://192.168.3.178:8080/dist/',

    //开发地区获取地址(包括测试)
    basishost: 'http://192.168.1.235:8085',

    //生产地区获取地址
    //basishost: 'http://www.awakenpay.com/',

    //开发图片上传下载地址(包括测试)
    basisimg: 'http://192.168.1.235:8000',

    //生产图片上传下载地址
    //basisimg: 'http://www.awakenpay.com/',
    webSocketUrl: ''
};

export {
    apiURL
};


function getHostPort() {
    // var hostname = typeof CURRENT_IP === 'string' ? CURRENT_IP : location.hostname
    // if (location) {
    //     var protocol = location.protocol + '//'
    //     var port = location.port ? ':' + location.port : ''
    //         //TODO
    //     port = ':8888'
    //     var url = protocol + hostname + port
    // } else {
    //     var url = 'http://' + hostname + ':8888'
    //     return url
    // }

    //生产地址
    // return 'www.awakenpay.com'

    //测试本机地址
    return '192.168.3.158:8888'

}
exports.getParameterByName = function(name, url) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function getBaseUrl(bundleUrl, isnav, images) {

    var rootpath = images;
    if (!rootpath) {
        rootpath = "dist"
            // rootpath = "merchant/dist"
    }
    bundleUrl = new String(bundleUrl);
    var nativeBase;
    var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;

    var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
    if (isAndroidAssets) {
        nativeBase = 'file://assets/dist/';
    } else if (isiOSAssets) {
        nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
    } else {
        var host = getHostPort();
        var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
        console.log(matches);
        if (matches && matches.length >= 2) {
            host = matches[1];
        }
        console.log("host:" + host);
        //此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
        if (typeof window === 'object' && isnav) {
            nativeBase = 'http://' + host + '/index.html?page=./dist/';
        } else {
            nativeBase = 'http://' + host + '/' + rootpath + '/';
        }
    }

    return nativeBase;
}

exports.getBaseUrl = function(bundleUrl, isnav, images) {
    return getBaseUrl(bundleUrl, isnav, images);
};
exports.getImagesBaseUrl = function(config) {
    var bundleUrl = config.bundleUrl;
    var base = getBaseUrl(bundleUrl, false, 'images');
    return base
}
exports.getBaseImg = function() {
    var baseImgUrl = apiURL.basisimg;
    return baseImgUrl
}

function getHostPort() {
    // var hostname = typeof CURRENT_IP === 'string' ? CURRENT_IP : location.hostname
    // if (location) {
    //     var protocol = location.protocol + '//'
    //     var port = location.port ? ':' + location.port : ''
    //         //TODO
    //     port = ':8888'
    //     var url = protocol + hostname + port
    // } else {
    //     var url = 'http://' + hostname + ':8888'
    //     return url
    // }

    //生产地址
    // return 'www.awakenpay.com'

    //测试本机地址
    return '192.168.3.158:8888'

}
exports.getParameterByName = function(name, url) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function getBaseUrl(bundleUrl, isnav, images) {

    var rootpath = images;
    if (!rootpath) {
        rootpath = "dist"
            // rootpath = "merchant/dist"
    }
    bundleUrl = new String(bundleUrl);
    var nativeBase;
    var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;

    var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
    if (isAndroidAssets) {
        nativeBase = 'file://assets/dist/';
    } else if (isiOSAssets) {
        nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
    } else {
        var host = getHostPort();
        var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
        console.log(matches);
        if (matches && matches.length >= 2) {
            host = matches[1];
        }
        console.log("host:" + host);
        //此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
        if (typeof window === 'object' && isnav) {
            nativeBase = 'http://' + host + '/index.html?page=./dist/';
        } else {
            nativeBase = 'http://' + host + '/' + rootpath + '/';
        }
    }

    return nativeBase;
}

exports.getBaseUrl = function(bundleUrl, isnav, images) {
    return getBaseUrl(bundleUrl, isnav, images);
};

function toParams(obj) {
    var param = ""
    for (const name in obj) {
        if (typeof obj[name] != 'function') {
            param += "&" + name + "=" + encodeURI(obj[name])
        }
    }
    return param.substring(1)
}


function getData(url, callback) {
    var stream = weex.requireModule('stream');
    var modal = weex.requireModule('modal');
    stream.fetch({
        method: 'GET',
        url: url,
        type: 'json'
    }, function(ret) {
        if (!ret.ok) {
            modal.toast({ message: '网络有问题，连不上', duration: 1 });
            console.log("request failed");
        } else {
            callback(ret.data);
        }
    });
}

function postData(url, data, callback) {
    //comm.onLoadingStart();
    var stream = weex.requireModule('stream');
    var modal = weex.requireModule('modal');
    stream.fetch({
        method: 'POST',
        url: url,
        type: 'json',
        body: data,
        headers: { 'Content-Type': 'application/json' },
    }, function(ret) {
        if (!ret.ok) {
            modal.toast({ message: '网络有问题，连不上', duration: 1 });
            //modal.toast({ message: ret.status + ret.statusText, duration: 1 });
            console.log("request failed");
        } else {
            callback(ret.data);
        }
    });
}

//新闻资讯列表
exports.requireNewsList = function(data, callback) {
    postData(apiURL.baseurl + 'api/news/list', data, callback);
};

//热门新闻
exports.requireHotNewsList = function(data, callback) {
    postData(apiURL.baseurl + 'api/news/hotnews', data, callback);
};

//聚合页面列表
exports.requireAlertFocusList = function(data, callback) {
    postData(apiURL.baseurl + 'api/member/list', data, callback);
};

//聚合页面简介
exports.requireAlertFocusDesc = function(data, callback) {
    postData(apiURL.baseurl + 'api/member/info', data, callback);
};

//新闻搜索
exports.requireSearchNews = function(data, callback) {
    postData(apiURL.baseurl + 'api/news/q', data, callback);
};

//关注
exports.requireFollow = function(data, callback) {
    postData(apiURL.baseurl + 'api/subscribe/subscribeMember', data, callback);
};

//关注列表
exports.requireFollowList = function(data, callback) {
    postData(apiURL.baseurl + 'api/subscribe/subscribeMemberList', data, callback);
};

//登录
exports.requireLogin = function(data, callback) {
    postData(apiURL.baseurl + 'api/user/login', data, callback);
};
//退出
exports.requireLogout = function(callback) {
    getData(apiURL.baseurl + 'api/user/logout', callback);
};
//发送验证码
exports.requireSignUpValidate = function(data, callback) {
    postData(apiURL.baseurl + 'api/user/signUpValidate', data, callback);
};
//注册
exports.requireSignUp = function(data, callback) {
    postData(apiURL.baseurl + 'api/user/signUp', data, callback);
};
//个人中心
exports.requireUserInfo = function(data, callback) {
    postData(apiURL.baseurl + 'api/user/info', data, callback);
};
//发送修改密码验证码
exports.requireSendModifyPwdCode = function(data, callback) {
    postData(apiURL.baseurl + 'api/user/sendModifyPwdCode', data, callback);
};
//个人中心
exports.requireModifyPwd = function(data, callback) {
    postData(apiURL.baseurl + 'api/user/modifyPwd', data, callback);
};

//文章内容界面
exports.requireArticalContent = function(data, callback) {
    postData(apiURL.baseurl + 'api/news/viewNews', data, callback);
};
//翻译
exports.requireTranslate = function(data, callback) {
    postData(apiURL.baseurl + 'api/news/translate', data, callback);
};
//修改用户名
exports.requireModifyInfo = function(data, callback) {
    postData(apiURL.baseurl + 'api/user/modifyInfo', data, callback);
};

//糖果 空投 注册邀请
exports.requireActivityList = function(data, callback) {
    postData(apiURL.baseurl + 'api/activity/list', data, callback);
};