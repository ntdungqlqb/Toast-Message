function toast({
    icon = "",
    title = "",
    message = "",
    type = "info",
    duration = 5000,
}) {
    const main = document.getElementById("toast");
    if (main) {
        const toast = document.createElement("div");

        // Remove toast when clicked
        toast.onclick = function (e) {
            if (e.target.closest(".toast__close")) {
                main.removeChild(toast);
            }
        };

        const delay = (duration / 1000).toFixed(2);
        toast.classList.add("toast", `toast--${type}`);
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;
        toast.innerHTML = `
                            <div class="toast__icon">
                                <i class="${icon}"></i>
                            </div>
                            <div class="toast__body">
                                <h3 class="toast__title">${title}</h3>
                                <p class="toast__msg">${message}</p>
                            </div>
                            <div class="toast__close">
                                <i class="fas fa-times"></i>
                            </div>
                        `;
        main.appendChild(toast);

        // Auto remove toast
        setTimeout(function () {
            main.removeChild(toast);
        }, duration + 1000);
    }
}

function showSuccessToast() {
    toast({
        icon: "fas fa-check-circle",
        title: "Thành công!",
        message: "Bạn đã đăng ký làm người yêu mình thành công.",
        type: "success",
        duration: 5000,
    });
}

function showErrorToast() {
    toast({
        icon: "fas fa-exclamation-circle",
        title: "Thất bại!",
        message: "Huhu chọn lại đi mà, năn nỉ á!",
        type: "error",
        duration: 5000,
    });
}
