
const emailInput = document.getElementById('emailInput');
const submitBtn = document.getElementById('submitBtn');
const errorMessage = document.getElementById('errorMessage');
const emailFormContainer = document.getElementById('emailFormContainer');
const personalInfoContainer = document.getElementById('personalInfoContainer');

// Hàm kiểm tra định dạng email
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}

// Xử lý sự kiện khi nhấn nút xác nhận
submitBtn.addEventListener('click', function() {
    const email = emailInput.value.trim();

    // Kiểm tra nếu email hợp lệ
    if (!validateEmail(email)) {
        errorMessage.classList.remove('hide'); // Hiển thị lỗi
    } else {
        errorMessage.classList.add('hide'); // Ẩn thông báo lỗi
        emailFormContainer.classList.add('hide'); // Ẩn form nhập email
        personalInfoContainer.classList.remove('hide'); // Hiển thị thông tin cá nhân
    }
});

