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
      console.log('Version:', data.version);
      console.log('Version:', data.name);
      console.log('updateInfo:', data.updateInfo);
      // ...
    } else {
      console.error('Failed to get JSON data');
    }
  }
};

// 发送请求
xhr.send();
