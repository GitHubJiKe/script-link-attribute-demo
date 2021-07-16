(function () {
  console.log("开始执行脚本");
  const ele = document.createElement("h1");
  ele.innerHTML = "I am " + document.title;
  ele.className = "title";
  console.log("document.body:::", document.body);
  document.body.appendChild(ele);
})();
