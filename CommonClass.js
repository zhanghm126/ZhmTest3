function request(par1,par2,par3,callback) {
    var xhr = new XMLHttpRequest();
    //第二步：建立与服务器端的连接
    xhr.open(par1, 'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/' + par2);
    //   设置头信息，让数据以表单的形式传递给服务器
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    //    第三步：发送请求
    xhr.send(par3);
    //    第四步：接受服务端返回的数据
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var res = JSON.parse(xhr.responseText);
            var str = res.data;
            callback(str);
        }
    }
}