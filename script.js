// 搜索按钮仅在输入内容时显示
document.addEventListener('DOMContentLoaded', function() {
  const input = document.getElementById('search-input');
  const btn = document.getElementById('search-btn');
  input.addEventListener('input', function() {
    if (input.value.trim() !== "") {
      btn.style.display = "";
    } else {
      btn.style.display = "none";
    }
  });
});
