document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  // Reset lỗi
  emailError.textContent = "";
  passwordError.textContent = "";

  let isValid = true;

  // Kiểm tra email
  if (email === "") {
    emailError.textContent = "Vui lòng nhập email.";
    isValid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    emailError.textContent = "Email không hợp lệ.";
    isValid = false;
  }

  // Kiểm tra mật khẩu
  if (password === "") {
    passwordError.textContent = "Vui lòng nhập mật khẩu.";
    isValid = false;
  }

  if (isValid) {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(user => user.email === email && user.password === password);

    if (foundUser) {
      alert("Đăng nhập thành công!");
      window.location.href = "home.html";
    } else {
      passwordError.textContent = "Email hoặc mật khẩu không đúng!";
    }
  }
});
