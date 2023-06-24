// 获取传入的app版本信息
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
    var context = "";
    if (r != null)
        context = decodeURIComponent(r[2]);
    reg = null;
    r = null;
    return context == null || context == "" || context == "undefined" ? "" : context;
}

function update(appV,latestV,appN,UInfo){
  if(appV<latestV){
    alert("发现新版"+appN+"\n版本号："+latestV+"\n更新内容:"+UInfo);
  } 
  else{
    alert("你使用的是最新版"+appN+"\n版本号："+latestV);
  }
}

// 创建一个新的 XMLHttpRequest 对象
const xhr = new XMLHttpRequest();

// 设置请求方法和 URL
xhr.open('GET', 'appInfo.json', true);

// 设置请求完成后的回调函数
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      // 解析 JSON 文件
      const data = JSON.parse(xhr.response);

      // 使用解析后的数据
      var latestV = data.version;
      var appName = data.name;
      var updateInfo= data.updateInfo;
      // 获取当前版本
      
      var appVersion=0;
      var tempV=GetQueryString("v");
      if(tempV != null){
        appVersion = tempV;
      }
      tempV=null;
      update(appVersion,latestV,appName,updateInfo)
      // ...
    } else {
      console.error('Failed to get JSON data');
    }
  }
};

// 发送请求
xhr.send();

