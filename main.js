var modal = document.getElementById("searchModal");

// Lấy thanh tìm kiếm để mở modal
var searchBar = document.getElementById("search");

// Lấy phần <span> đóng modal
var span = document.getElementsByClassName("close")[0];

// Khi nhấn vào thanh tìm kiếm, mở modal
searchBar.onclick = function () {
    modal.style.display = "flex";
}

// Khi nhấn vào <span> (x), đóng modal
span.onclick = function () {
    modal.style.display = "none";
}

// Khi nhấn ra ngoài modal, đóng modal
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}