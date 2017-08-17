/**
 * Created by LiuZG on 2017/6/16 0016.
 */
/**
 * 数字不够10,就在前面加一个"0"
 * @param n
 * @returns {string}
 */
function addZero(n) {
  return n < 10 ? "0" + n : n;
}


/**
 * 根据表格数据动态生成表格到对应的节点中
 * @param element 表格要创建到哪个节点中去
 * @param data 给过来的表格数据
 * 数据样本:
 * //数据，后台给JSON
 var result = {
    "header": ["姓名", "性别", "年龄", "工资"],
    "datas": [
      {"name": "黄瑞", "gender": "女", "age": 18, "salary": 30000},
      {"name": "婷婷", "gender": "男", "age": 19, "salary": 31000},
      {"name": "聪聪", "gender": "男", "age": 17, "salary": 7000},
      {"name": "聪聪", "gender": "男", "age": 18, "salary": 7000},
      {"name": "聪聪", "gender": "男", "age": 19, "salary": 7000},
      {"name": "聪聪", "gender": "男", "age": 20, "salary": 7000}
    ]
  };
 */
function createTable(element, data) {
  
  //1. 创建table，添加到body中
  var table = document.createElement("table");
  element.appendChild(table);
  table.className = "leo_table"
  
  //2. 创建thead，添加到table中
  //2.1 创建tr，添加到thead中
  //2.2 创建th，添加到tr中， th需要设置内容
  var thead = document.createElement("thead");
  table.appendChild(thead);
  
  var tr = document.createElement("tr");
  thead.appendChild(tr);
  
  //根据result.headers 创建th
  var header = data.header;
  for (var i = 0; i < header.length; i++) {
    var th = document.createElement("th");
    tr.appendChild(th);
    //th添加内容
    th.innerHTML = header[i];
  }
  //添加删除操作标题:
  //表格数据里没有,可以手动添加
  var th = document.createElement("th");
  tr.appendChild(th);
  th.innerHTML = "操作";
  
  //3. 创建tbody,添加到table
  var tbody = document.createElement("tbody");
  table.appendChild(tbody);
  
  //3.1 创建tr，添加到tbody中
  var datas = data.datas;
  for (var j = 0; j < datas.length; j++) {
    var tr = document.createElement("tr");
    tbody.appendChild(tr);
    
    //3.2 遍历datas[j]对象,创建td，添加到tr中， td需要设置内容
    for (var k in datas[j]) {
      var td = document.createElement("td");
      tr.appendChild(td);
      td.innerHTML = datas[j][k]
    }
    //下面的每行添加删除按钮:
    //表格数据里没有,可以手动添加
    var td = document.createElement("td");
    tr.appendChild(td);
    var button = document.createElement("button");
    td.appendChild(button);
    button.innerHTML = "删除";
    button.onclick = function () {
      //tbody中删除这个button对应的tr
      tbody.removeChild(this.parentNode.parentNode);
    }
  }
}


/**
 * 按格式获取系统当前时间
 * @returns {string}
 */
function getTime() {
  var date = new Date();
  var year = date.getFullYear();
  var month = addZero(date.getMonth() + 1);  //月份从0-11，要加1
  var day = addZero(date.getDate());
  var hour = addZero(date.getHours());
  var minute = addZero(date.getMinutes());
  var second = addZero(date.getSeconds());
  //var week = getWeek(date.getDay());
  
  var str = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
  //console.log(str);
  //console.log(week);
  return str;
}



/**
 * 得到星期几
 * @param {number} week 0-6
 * @returns {*}
 */
function getWeek(week) {
  switch (week) {
    case 0:
      return "星期天";
    case 1:
      return "星期一";
    case 2:
      return "星期二";
    case 3:
      return "星期三";
    case 4:
      return "星期四";
    case 5:
      return "星期五";
    case 6:
      return "星期六";
  }
}



/**
 * 获取innerText 兼容性问题解决
 * @param element
 * @returns {*}
 */
function getInnerText(element) {
  if(typeof element.innerText == "string") {
    //说明支持innerText
    return element.innerText;
  }else {
    return element.textContent;
  }
}


/**
 * 设置innerText 兼容性问题解决
 * @param element
 * @param value
 */
function setInnerText(element, value) {
  if (typeof element.innerText == "string") {
    //说明支持innerText
    element.innerText = value;
  } else {
    element.textContent = value;
  }
}

// 查找兄弟元素属性兼容IE //来自MDN
// Source: https://github.com/Alhadis/Snippets/blob/master/js/polyfills/IE8-child-elements.js
if(!("nextElementSibling" in document.documentElement)){
  Object.defineProperty(Element.prototype, "nextElementSibling", {
    get: function(){
      var e = this.nextSibling;
      while(e && 1 !== e.nodeType)
        e = e.nextSibling;
      return e;
    }
  });
}

// 查找兄弟元素属性兼容IE //来自MDN
// Source: https://github.com/Alhadis/Snippets/blob/master/js/polyfills/IE8-child-elements.js
if(!("previousElementSibling" in document.documentElement)){
  Object.defineProperty(Element.prototype, "previousElementSibling", {
    get: function(){
      var e = this.previousSibling;
      while(e && 1 !== e.nodeType)
        e = e.previousSibling;
      return e;
    }
  });
}

/**
 * 获取浏览器当前窗口可视区的宽高
 * @returns {Number|number}
 */
function getClientWidth() {
  return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0;
}

function getClientHeight() {
  window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight ||0
}

/**
 * 获取被浏览器滚轮滚去的高度和宽度
 * @returns {Number|number}
 */
function getScrollTop() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}

function getScrollLeft() {
  return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
}

function getScroll() {
  return {
    scrollTop:window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
    scrollLeft:window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
  }
}


/**
 * 鼠标事件中
 * 获取事件对象event的 pageX 和 pageY 值
 * @param e
 * @returns {{x: *, y: *}}
 */
function getPage(e) {
  return {
    x: e.pageX || document.documentElement.scrollLeft + e.clientX,
    y: e.pageY || document.documentElement.scrollTop + e.clientY
  };
}

/**
 * 获取任意元素的任意样式
 * @param element
 * @param attr
 * @returns {*}
 */
function getStyle(element, attr) {
  if(window.getComputedStyle) { //如果这个方法存在(浏览器支持 - 能力检测)
    return window.getComputedStyle(element, null)[attr];
  }else {
    return element.currentStyle[attr];
  }
}