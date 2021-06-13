/**
 * options包含了 method url data callback isAsynchronous 
 * @param {Object} options 
 */
function ajax(options){
    var method = options.method,
        url = options.url,
        data = options.data,
        callback = options.callback,
        isAsynchronous = options.isAsynchronous;
    var xhr = null;
    if(window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else{
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    };
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4) {
            if(xhr.status === 200) {
                callback(JSON.parse(xhr.response));
            }
        }
    }
    var dataStr = '';
    var dataTemp = [];
    if(typeof data === 'object') {
        for(var prop in data) {
            dataTemp.push(String.prototype.concat(prop, '=', data[prop]));
        }
    } else{
        dataStr = data.toString();
    }
    dataStr = dataTemp.join('&');
    method = method.toUpperCase();
    if(method === 'GET') {
        xhr.open('GET', url + '?' + dataStr, isAsynchronous);
        xhr.send();
    } else{
        xhr.open(method, url, isAsynchronous);
        //设置编码格式
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
        xhr.send(dataStr);
    }
}