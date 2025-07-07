document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
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
  } else if (password.length < 6) {
    passwordError.textContent = "Mật khẩu phải có ít nhất 6 ký tự.";
    isValid = false;
  } else if (/\s/.test(password)) {
    passwordError.textContent = "Mật khẩu không được chứa khoảng trắng.";
    isValid = false;
  }

  if (isValid) {
    // Lấy danh sách tài khoản cũ (nếu có)
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Kiểm tra email đã tồn tại
    const emailExists = users.some(user => user.email === email);
    if (emailExists) {
      emailError.textContent = "Email đã được đăng ký!";
      return;
    }

    // Thêm người dùng mới
    users.push({ email, password });

    // Lưu lại vào localStorage
    localStorage.setItem("users", JSON.stringify(users));

    alert("Đăng ký thành công!");
    window.location.href = "signin.html"; // Chuyển về trang đăng nhập
  }
});
