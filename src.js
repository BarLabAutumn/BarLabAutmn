let page = 1; // Trang hiện tại

// Kiểm tra vị trí cuộn
window.onscroll = function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        loadMoreProducts(); // Gọi hàm để tải thêm sản phẩm
    }
};

// Hàm tải thêm sản phẩm
function loadMoreProducts() {
    const loading = document.getElementById("loading");
    loading.style.display = "block"; // Hiển thị loader

    // Giả lập yêu cầu tải sản phẩm mới (có thể thay thế bằng yêu cầu AJAX/Fetch)
    setTimeout(() => {
        page++;
        const productList = document.getElementById("product-list");

        // Giả lập thêm sản phẩm mới
        for (let i = 0; i < 5; i++) {
            const product = document.createElement("div");
            product.className = "product";
            product.innerHTML = `Sản phẩm ${page * 5 + i}`;
            productList.appendChild(product);
        }

        loading.style.display = "none"; // Ẩn loader
    }, 1000); // Giả lập độ trễ tải dữ liệu
}
