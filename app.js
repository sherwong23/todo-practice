const textarea = document.getElementById("note");
const saveBtn = document.getElementById("saveBtn");
const status = document.getElementById("status");

// 页面加载时，从 localStorage 中恢复内容
window.onload = function () {
  const savedNote = localStorage.getItem("myNote");
  if (savedNote) {
    textarea.value = savedNote;
  }
};

// 保存按钮点击时
saveBtn.onclick = function () {
  const content = textarea.value;
  localStorage.setItem("myNote", content);  // 本地存储
  status.textContent = "保存しました！";

  // 2秒后清除提示
  setTimeout(() => {
    status.textContent = "";
  }, 2000);
};
