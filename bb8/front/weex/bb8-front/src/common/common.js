exports.isstartwith = function(str, prefix) {
    var index = str.indexOf(prefix);
    console.log('startIndex:' + index);
    return index == 0; //index为0则表明str以prefix开头;若不包含prefix则index为-1
}
exports.isendwith = function(str, suffix) {
    var index = str.indexOf(suffix);
    console.log('endIndex:' + index);
    return index == str.length - suffix.length;
}

exports.showFormat = function(millsecords, format) {
    if (!format) {
        format = "yyyy-MM-dd HH:mm:ss";
    }
    return new Date(millsecords).pattern(format);
}