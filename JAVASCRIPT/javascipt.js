function openRegisterModal() {
    var registerModal = document.getElementById("registerModal");
        registerModal.style.display = "block";
  
}
function openLoginModal() {
    var loginModal = document.getElementById("loginModal");
    loginModal.style.display = "block";
  
}


function goBackRegister() {
    var registerModal = document.getElementById("registerModal");
    registerModal.style.display = "none";
}

function goBackLogin() {
    var loginModal = document.getElementById("loginModal");
    loginModal.style.display = "none";
}
function goBackOrder() {
    var orderModal = document.getElementById("orderModal");
    orderModal.style.display = "none";
}

function transferLogin() {
    var loginModal = document.getElementById("loginModal");
    var registerModal = document.getElementById("registerModal");
    registerModal.style.display = "none";
    loginModal.style.display = "block";
}

function transferRegister() {
    var loginModal = document.getElementById("loginModal");
    var registerModal = document.getElementById("registerModal");
    registerModal.style.display = "block";
    loginModal.style.display = "none";
}

function transferPage(orderClicked) {
    window.location.href = "page1.html";
}
function openOrderModal() {
    var orderModal = document.getElementById("orderModal");
    orderModal.style.display = "block";
  
}




function validateRegister() {
    var fullName = document.querySelector('#registerModal #fullname').value.trim();
    var username = document.querySelector('#registerModal #nickname').value.trim();
    var password = document.querySelector('#registerModal #password').value.trim();
    var confirmPassword = document.querySelector('#registerModal #confirmPassword').value.trim();
    var errorMessage = ''; 
    var isValid = false; // Biến kiểm tra xem form đăng ký có hợp lệ không

    var errorMessageElement = document.querySelector('#registerModal .error-message');
    errorMessageElement.innerText = '';

    if (fullName === '' || username === '' || password === '' || confirmPassword === '') {
        errorMessage = 'Vui lòng điền đầy đủ thông tin.';
    } else if (!/[A-Z]/.test(username)) {
        errorMessage = 'Tên tài khoản phải chứa ít nhất một kí tự hoa.';
    } else if (password.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        errorMessage = 'Mật khẩu phải chứa ít nhất 8 ký tự và một ký tự đặc biệt.';
    } else if (password !== confirmPassword) {
        errorMessage = 'Mật khẩu xác nhận không khớp.';
    } else {
        // Nếu không có lỗi, đặt isValid thành true
        isValid = true;
        alert('Đăng ký thành công!');
    }

    if (errorMessage !== '') {
        errorMessageElement.innerText = errorMessage;
    }

    if (isValid) {
        hideLoginAndRegisterItems(); // Chỉ ẩn các thành phần đăng nhập và đăng ký nếu không có lỗi
    }
}



function validateLogin() {
    document.getElementById('loginModal').addEventListener('submit', function(event) {
        event.preventDefault(); // Ngăn chặn form gửi dữ liệu mặc định
    
        var username = document.querySelector('#nicknameLogin').value.trim();
        var password = document.querySelector('#passwordLogin').value.trim();
        var errorMessageElement = document.querySelector('.auth-form .error-message');
    
        // Xóa bỏ thông báo lỗi cũ
        errorMessageElement.innerText = '';
    
        // Kiểm tra xem tất cả các trường đã được điền chưa
        if (username === '' || password === '') {
            errorMessageElement.innerText = 'Vui lòng điền đầy đủ thông tin.';
        } else {
            // Xử lý đăng nhập ở đây
            alert('Đăng nhập thành công!');
        }
    });
    
}

function validateOrder() {
    var fullName = document.querySelector('#orderModal #nameorder').value.trim();
    var phoneNumber = document.querySelector('#orderModal #phoneorder').value.trim();
    var address = document.querySelector('#orderModal #adressorder').value.trim();
    var errorMessageElement = document.querySelector('#orderModal .error-message-order'); // Đảm bảo selector này đúng
    var errorMessage = '';

    errorMessageElement.innerText = ''; // Xóa thông báo lỗi trước đó

    // Kiểm tra dữ liệu nhập vào
    if (!fullName || !phoneNumber || !address) {
        errorMessage = 'Vui lòng điền đầy đủ thông tin.';
        errorMessageElement.innerText = errorMessage;
        return; // Thoát hàm nếu có lỗi
    }

    // Nếu không có lỗi, xử lý tiếp
    CompletedModal()  // Gọi hàm xử lý đơn hàng hoàn tất
}
function CompletedModal() {
    var completedModal = document.getElementById("completedModal");
    var orderModal = document.getElementById("orderModal");
    completedModal.style.display = "none";
    completedModal.style.display = "block"; 
}
// tiếp tục mua hàng
function goBackhome() {
    var completedModal = document.getElementById("completedModal");
    var orderModal = document.getElementById("orderModal");
    completedModal.style.display = "none";
    orderModal.style.display = "none";
   
}


document.addEventListener('DOMContentLoaded', function() {
    var userElement = document.querySelector('.header-navbar-item.header-navbar-user');
    if (userElement) {
        userElement.style.display = 'none';
    }
});
 

function hideLoginAndRegisterItems() {
    var loginItem = document.querySelector('.header-navbar-item-strong[onclick="openLoginModal()"]');
    var registerItem = document.querySelector('.header-navbar-item-strong[onclick="openRegisterModal()"]');
    var userItem = document.querySelector('.header-navbar-user');
    var registerModal = document.getElementById("registerModal");
    var nicknameInput = document.getElementById('nickname');
    var userNameElement = document.querySelector('.header-navbar-user-name');

    // Lắng nghe sự kiện input để cập nhật nội dung vào phần tử .header-navbar-user-name
    nicknameInput.addEventListener('input', function() {
        var username = nicknameInput.value;
        if (userNameElement) {
            userNameElement.textContent = username;
        }
    });

    // Ẩn thẻ li đăng nhập
    if (loginItem) {
        loginItem.style.display = 'none';
    }

    // Ẩn thẻ li đăng ký
    if (registerItem) {
        registerItem.style.display = 'none';
    }
    if(registerModal){
        registerModal.style.display = "none";
    }

    // Hiển thị thẻ li chứa tên người dùng
    if (userItem) {
        userItem.style.display = 'block';
    }

  
    if (userNameElement) {
        userItem.classList.remove('hidden');
    }

    // Lấy tên tài khoản đã nhập và hiển thị trong phần tử .header-navbar-user-name
    var nicknameInput = document.getElementById('nickname');
    var userNameElement = document.querySelector('.header-navbar-user-name');
    if (nicknameInput && userNameElement) {
        var nickname = nicknameInput.value;
        userNameElement.textContent = nickname;
    }
}


function logout() {
    var loginItem = document.querySelector('.header-navbar-item-strong[onclick="openLoginModal()"]');
    var registerItem = document.querySelector('.header-navbar-item-strong[onclick="openRegisterModal()"]');
    var userItem = document.querySelector('.header-navbar-user');
    //registerItem.style.display = 'block';
    userItem.style.display = 'none';
   // loginItem.style.display = 'block';
    registerItem.style.display = 'flex';
    loginItem.style.display = 'flex';
}


// Hàm giảm số lượng
function decreaseQuantity() {
    var parentElement = document.querySelector('.quantity-wrapper, .quantity-add-cart-wrapper');
    var inputField = document.querySelector('.quantity-input, .quantity-input-cart');
    var currentValue = parseInt(inputField.value);
    if (!isNaN(currentValue) && currentValue > 1) {
        inputField.value = currentValue - 1;
    }
}

// Hàm tăng số lượng
function increaseQuantity() {
    var parentElement = document.querySelector('.quantity-wrapper, .quantity-add-cart-wrapper');
    var inputField = document.querySelector('.quantity-input, .quantity-input-cart');
    var currentValue = parseInt(inputField.value);
    if (!isNaN(currentValue)) {
        inputField.value = currentValue + 1;
    } else {
        inputField.value = 1;
    }
}

function updateTotalCost() {
    var quantity = parseInt(document.querySelector('.quantity-input-cart').value);
    var pricePerItem = document.querySelector('.add-cart-price').textContent;
    // Loại bỏ các dấu chấm và "đ" từ giá sản phẩm
    pricePerItem = parseInt(pricePerItem.replace(/\.|đ/g, ''));
    
    var totalPrice = quantity * pricePerItem;

    // Định dạng lại số để hiển thị dấu phân cách hàng nghìn và thêm "đ"
    var formattedTotal = new Intl.NumberFormat('vi-VN').format(totalPrice) + 'đ';
    document.querySelector('.total-price').textContent = formattedTotal;
}

function decreaseQuantitycart() {
    var inputField = document.querySelector('.quantity-input-cart');
    var currentValue = parseInt(inputField.value);
    if (!isNaN(currentValue) && currentValue > 1) {
        inputField.value = currentValue - 1;
        updateTotalCost();
    }
}

function increaseQuantitycart() {
    var inputField = document.querySelector('.quantity-input-cart');
    var currentValue = parseInt(inputField.value);
    if (!isNaN(currentValue)) {
        inputField.value = currentValue + 1;
        updateTotalCost();
    } else {
        inputField.value = 1;
    }
}

//đặt hàng


// ẩn
function hidePages() {
    // Lấy tất cả các phần tử có class là "grid__column-10" và page từ 2 đến 4
    const pagesToHide = document.querySelectorAll('.page-2, .page-3, .page-4');
    // Ẩn các phần tử đã chọn
    pagesToHide.forEach(page => {
        page.style.display = 'none';
    });

}
document.addEventListener('DOMContentLoaded', function() {
    hidePages();
});

// chuyển trang
function transferToPage1() {
 
var pageElements = document.querySelectorAll('.grid__column-10');
pageElements.forEach(function(element) {
    element.style.display = 'none';
});

var page1Elements = document.querySelector('.page-1');
page1Elements.style.display = 'block';

}

function transferToPage2() {
    var pageElements = document.querySelectorAll('.grid__column-10');
pageElements.forEach(function(element) {
    element.style.display = 'none';
});

var page2Elements = document.querySelector('.page-2');
page2Elements.style.display = 'block';
}
function transferToPage3() {
    var pageElements = document.querySelectorAll('.grid__column-10');
    pageElements.forEach(function(element) {
        element.style.display = 'none';
    });
     
    var page3Elements = document.querySelector('.page-3');
    page3Elements.style.display = 'block';
}
function transferToPage4() {
    var pageElements = document.querySelectorAll('.grid__column-10');
    pageElements.forEach(function(element) {
        element.style.display = 'none';
    });
    
    var page4Elements = document.querySelector('.page-4');
    page4Elements.style.display = 'block';
}

// show product

function showProduct(clickedElement) {

    var showproduct = document.getElementById("showproduct");
    var homeBanners = document.getElementById("homeBanners");
    var appContainer = document.getElementById("appContainer");
    var pageCartGrid = document.querySelector('#pagecartproduct');
    var footer = document.querySelector(".footer");
   
  
    pageCartGrid.style.display = "none";
    footer.style.display = 'block';
    homeBanners .style.display = "none";
    appContainer.style.display = "none";
    showproduct.style.display = "block";

    var showProductLeftDiv = document.querySelector('.show-product-left');
    var showProductRightNameDiv = document.querySelector('.show-product-right-name');
    var showProductRightPriceDiv = document.querySelector('.show-product-right-price');
    showProductLeftDiv.innerHTML = '';
    showProductRightNameDiv.innerHTML = '';
    showProductRightPriceDiv.innerHTML = '';

        // Lấy phần tử hình ảnh từ phần tử được nhấp vào
       
        var imgElement = clickedElement.querySelector('.home-product-item__img');
        var nameElement  = clickedElement.querySelector('.home-product-item__name');
        var priceElement = clickedElement.querySelector('.home-product-item__price');
            
        // Tạo một bản sao của phần tử hình ảnh và thêm vào phần hiển thị sản phẩm
        var imgClone = imgElement.cloneNode(true);
        var nameClone = nameElement.cloneNode(true);
        var priceClone = priceElement.cloneNode(true);


        showProductLeftDiv.appendChild(imgClone);
        showProductRightNameDiv.appendChild(nameClone);
        showProductRightPriceDiv.appendChild(priceClone);
      
   
}
function goBackshow() {
    var showproduct = document.getElementById("showproduct");
    var homeBanners = document.getElementById("homeBanners");
    var appContainer = document.getElementById("appContainer");
    var addproduct = document.getElementById("addcartModal");
    addproduct.style.display = "none";
    homeBanners .style.display = "block";
    appContainer.style.display = "block";
    showproduct.style.display = "none";
   
}
// THÊM VÀO GIỎ HÀNG

function addCart(event) {

    var addproduct = document.getElementById("addcartModal");
    addproduct.style.display = "block";

    var addProductLeftDiv = document.querySelector('.add-cart-img');
    var addProductLeftNameDiv = document.querySelector('.add-cart-name');
    var addProductRightPriceDiv = document.querySelector('.add-cart-price');

    addProductLeftDiv.innerHTML = '';
    addProductLeftNameDiv.innerHTML = '';
    addProductRightPriceDiv.innerHTML = '';

    var quantityInput = document.querySelector('.quantity-input-cart');
    if (quantityInput) {
        quantityInput.value = 0; // Đặt lại giá trị số lượng về 0
    }

    var totalPrice = document.querySelector('.total-price');
    if (totalPrice) {
        totalPrice.textContent = '0đ'; // Đặt lại tổng tiền về 0đ
    }

    // Tìm phần tử cha gần nhất có class là 'home-product-item', từ phần tử được nhấp
    var productItem = event.target.closest('.home-product-item');

    // Lấy các phần tử hình ảnh, tên, và giá từ sản phẩm đó
    var imgElement = productItem.querySelector('.home-product-item__img');
    var nameElement = productItem.querySelector('.home-product-item__name');
    var priceElement = productItem.querySelector('.home-product-item__price-current');
    
    // Tạo một bản sao của các phần tử và thêm vào phần hiển thị sản phẩm trong modal
    var imgClone = imgElement.cloneNode(true);
    var nameClone = nameElement.cloneNode(true);
    var priceClone = priceElement.cloneNode(true);

    addProductLeftDiv.appendChild(imgClone);
    addProductLeftNameDiv.appendChild(nameClone);
    addProductRightPriceDiv.appendChild(priceClone);

    
}
function closePageCart() {
    var pageCartGrid = document.querySelector('#pagecartproduct');
    var footer = document.querySelector(".footer");
    var showproduct = document.getElementById("showproduct");
    var homeBanners = document.getElementById("homeBanners");
    var appContainer = document.getElementById("appContainer");
    var addproduct = document.getElementById("addcartModal");

    addproduct.style.display = "none";
    homeBanners .style.display = "block";
    appContainer.style.display = "block";
    showproduct.style.display = "none";
    pageCartGrid.style.display = "none";
    footer.style.display = 'block';
   
}

function addpageCart() {
    var pageCartGrid = document.querySelector('#pagecartproduct .wrap-page-cart');
    var cartForm = document.querySelector('.auth-form-add-cart-form');
    var pageCartGrid = document.querySelector('#pagecartproduct');
    var showproduct = document.getElementById("showproduct");
    var addproduct = document.getElementById("addcartModal");
    var footer = document.querySelector(".footer");

   

   
    var cartClone = cartForm.cloneNode(true);
    pageCartGrid.appendChild(cartClone);
    pageCartGrid.style.display = "block";
    addproduct.style.display = "none";
    showproduct.style.display = "none";
    footer.style.display = 'none';
}




function goBackpage() {
    location.reload(); 
}

 // bột béo
 function botbeo() {
    // Ẩn các cột
    var gridColumns = document.querySelectorAll('.grid__column-10');
    gridColumns.forEach(gridColumn => {
        gridColumn.style.display = 'none';
    });


    var pageElements  = document.querySelectorAll('.page');
    pageElements.forEach(pageElement => {
        pageElement.style.display = 'block';
    });
    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    gridRowPages.forEach(gridRowPage => {
    gridRowPage.innerHTML = '';
    });

    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    var bbElements = document.querySelectorAll('.bb');
    gridRowPages.forEach(gridRowPage => {
        bbElements.forEach(bbElement => {
            gridRowPage.appendChild(bbElement.cloneNode(true));
        });
    });
}

function botbeoFrima(){
    // Ẩn các cột
    var gridColumns = document.querySelectorAll('.grid__column-10');
    gridColumns.forEach(gridColumn => {
        gridColumn.style.display = 'none';
    });


    var pageElements  = document.querySelectorAll('.page');
    pageElements.forEach(pageElement => {
        pageElement.style.display = 'block';
    });
    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    gridRowPages.forEach(gridRowPage => {
    gridRowPage.innerHTML = '';
    });
    var gridRowPages = document.querySelector('.grid__row.grid__row-page');
    var bbElements = document.querySelector('.bb-frima');  
    gridRowPages.appendChild(bbElements.cloneNode(true));

}
function botbeoBone(){
    // Ẩn các cột

    var gridColumns = document.querySelectorAll('.grid__column-10');
    gridColumns.forEach(gridColumn => {
        gridColumn.style.display = 'none';
    });


    var pageElements  = document.querySelectorAll('.page');
    pageElements.forEach(pageElement => {
        pageElement.style.display = 'block';
    });
    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    gridRowPages.forEach(gridRowPage => {
    gridRowPage.innerHTML = '';
    });
    var gridRowPages = document.querySelector('.grid__row.grid__row-page');
    var bbElements = document.querySelector('.bb-bone');  
    gridRowPages.appendChild(bbElements.cloneNode(true));
   
}
function botbeoMT35(){
    // Ẩn các cột

    var gridColumns = document.querySelectorAll('.grid__column-10');
    gridColumns.forEach(gridColumn => {
        gridColumn.style.display = 'none';
    });


    var pageElements  = document.querySelectorAll('.page');
    pageElements.forEach(pageElement => {
        pageElement.style.display = 'block';
    });
    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    gridRowPages.forEach(gridRowPage => {
    gridRowPage.innerHTML = '';
    });
    var gridRowPages = document.querySelector('.grid__row.grid__row-page');
    var bbElements = document.querySelector('.bb-MT35');  
    gridRowPages.appendChild(bbElements.cloneNode(true));
   
}

function botbeoIndo(){
    // Ẩn các cột
   
    var gridColumns = document.querySelectorAll('.grid__column-10');
    gridColumns.forEach(gridColumn => {
        gridColumn.style.display = 'none';
    });


    var pageElements  = document.querySelectorAll('.page');
    pageElements.forEach(pageElement => {
        pageElement.style.display = 'block';
    });
    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    gridRowPages.forEach(gridRowPage => {
    gridRowPage.innerHTML = '';
    });
    var gridRowPages = document.querySelector('.grid__row.grid__row-page');
    var bbElements = document.querySelector('.bb-indo');  
    gridRowPages.appendChild(bbElements.cloneNode(true));
   
}

//bột pudding
function pudding() {
    // Ẩn các cột
    var gridColumns = document.querySelectorAll('.grid__column-10');
    gridColumns.forEach(gridColumn => {
        gridColumn.style.display = 'none';
    });

    // Hiển thị các page
    var pageElements = document.querySelectorAll('.page');
    pageElements.forEach(pageElement => {
        pageElement.style.display = 'block';
    });
    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    gridRowPages.forEach(gridRowPage => {
    gridRowPage.innerHTML = '';
    });
    
    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    var puddingElements = document.querySelectorAll('.pudding');
    gridRowPages.forEach(gridRowPage => {
        puddingElements.forEach(puddingElement => {
            gridRowPage.appendChild(puddingElement.cloneNode(true));
        });
    });
}
// trà


function tea() {
    // Ẩn các cột
    var gridColumns = document.querySelectorAll('.grid__column-10');
    gridColumns.forEach(gridColumn => {
        gridColumn.style.display = 'none';
    });


    var pageElements  = document.querySelectorAll('.page');
    pageElements.forEach(pageElement => {
        pageElement.style.display = 'block';
    });
    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    gridRowPages.forEach(gridRowPage => {
    gridRowPage.innerHTML = '';
    });

    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    var bbElements = document.querySelectorAll('.tea');
    gridRowPages.forEach(gridRowPage => {
        bbElements.forEach(bbElement => {
            gridRowPage.appendChild(bbElement.cloneNode(true));
        });
    });
}
function teaD(){
    // Ẩn các cột
   
    var gridColumns = document.querySelectorAll('.grid__column-10');
    gridColumns.forEach(gridColumn => {
        gridColumn.style.display = 'none';
    });


    var pageElements  = document.querySelectorAll('.page');
    pageElements.forEach(pageElement => {
        pageElement.style.display = 'block';
    });
    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    gridRowPages.forEach(gridRowPage => {
    gridRowPage.innerHTML = '';
    });
    var gridRowPages = document.querySelector('.grid__row.grid__row-page');
    var bbElements = document.querySelector('.teaD');  
    gridRowPages.appendChild(bbElements.cloneNode(true));
   
}
function teaHT(){
    // Ẩn các cột
   
    var gridColumns = document.querySelectorAll('.grid__column-10');
    gridColumns.forEach(gridColumn => {
        gridColumn.style.display = 'none';
    });


    var pageElements  = document.querySelectorAll('.page');
    pageElements.forEach(pageElement => {
        pageElement.style.display = 'block';
    });
    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    gridRowPages.forEach(gridRowPage => {
    gridRowPage.innerHTML = '';
    });
    var gridRowPages = document.querySelector('.grid__row.grid__row-page');
    var bbElements = document.querySelector('.teaHT');  
    gridRowPages.appendChild(bbElements.cloneNode(true));
   
}
function teaTL(){
    // Ẩn các cột
   
    var gridColumns = document.querySelectorAll('.grid__column-10');
    gridColumns.forEach(gridColumn => {
        gridColumn.style.display = 'none';
    });


    var pageElements  = document.querySelectorAll('.page');
    pageElements.forEach(pageElement => {
        pageElement.style.display = 'block';
    });
    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    gridRowPages.forEach(gridRowPage => {
    gridRowPage.innerHTML = '';
    });
    var gridRowPages = document.querySelector('.grid__row.grid__row-page');
    var bbElements = document.querySelector('.teaTL');  
    gridRowPages.appendChild(bbElements.cloneNode(true));
   
}
function teaTX(){
    // Ẩn các cột
   
    var gridColumns = document.querySelectorAll('.grid__column-10');
    gridColumns.forEach(gridColumn => {
        gridColumn.style.display = 'none';
    });


    var pageElements  = document.querySelectorAll('.page');
    pageElements.forEach(pageElement => {
        pageElement.style.display = 'block';
    });
    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    gridRowPages.forEach(gridRowPage => {
    gridRowPage.innerHTML = '';
    });
    var gridRowPages = document.querySelector('.grid__row.grid__row-page');
    var bbElements = document.querySelector('.teaTX');  
    gridRowPages.appendChild(bbElements.cloneNode(true));
   
}
function teaTD(){
    // Ẩn các cột
   
    var gridColumns = document.querySelectorAll('.grid__column-10');
    gridColumns.forEach(gridColumn => {
        gridColumn.style.display = 'none';
    });


    var pageElements  = document.querySelectorAll('.page');
    pageElements.forEach(pageElement => {
        pageElement.style.display = 'block';
    });
    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    gridRowPages.forEach(gridRowPage => {
    gridRowPage.innerHTML = '';
    });
    var gridRowPages = document.querySelector('.grid__row.grid__row-page');
    var bbElements = document.querySelector('.teaTD');  
    gridRowPages.appendChild(bbElements.cloneNode(true));
   
}

function syrup() {
    // Ẩn các cột
    var gridColumns = document.querySelectorAll('.grid__column-10');
    gridColumns.forEach(gridColumn => {
        gridColumn.style.display = 'none';
    });


    var pageElements  = document.querySelectorAll('.page');
    pageElements.forEach(pageElement => {
        pageElement.style.display = 'block';
    });
    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    gridRowPages.forEach(gridRowPage => {
    gridRowPage.innerHTML = '';
    });

    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    var bbElements = document.querySelectorAll('.syrup');
    gridRowPages.forEach(gridRowPage => {
        bbElements.forEach(bbElement => {
            gridRowPage.appendChild(bbElement.cloneNode(true));
        });
    });
}
function syrupD(){
    // Ẩn các cột
   
    var gridColumns = document.querySelectorAll('.grid__column-10');
    gridColumns.forEach(gridColumn => {
        gridColumn.style.display = 'none';
    });


    var pageElements  = document.querySelectorAll('.page');
    pageElements.forEach(pageElement => {
        pageElement.style.display = 'block';
    });
    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    gridRowPages.forEach(gridRowPage => {
    gridRowPage.innerHTML = '';
    });
    var gridRowPages = document.querySelector('.grid__row.grid__row-page');
    var bbElements = document.querySelector('.syrupD');  
    gridRowPages.appendChild(bbElements.cloneNode(true));
   
}
function syrupBH(){
    // Ẩn các cột
   
    var gridColumns = document.querySelectorAll('.grid__column-10');
    gridColumns.forEach(gridColumn => {
        gridColumn.style.display = 'none';
    });


    var pageElements  = document.querySelectorAll('.page');
    pageElements.forEach(pageElement => {
        pageElement.style.display = 'block';
    });
    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    gridRowPages.forEach(gridRowPage => {
    gridRowPage.innerHTML = '';
    });
    var gridRowPages = document.querySelector('.grid__row.grid__row-page');
    var bbElements = document.querySelector('.syrupBH');  
    gridRowPages.appendChild(bbElements.cloneNode(true));
   
}

function syrupTX(){
    // Ẩn các cột
   
    var gridColumns = document.querySelectorAll('.grid__column-10');
    gridColumns.forEach(gridColumn => {
        gridColumn.style.display = 'none';
    });


    var pageElements  = document.querySelectorAll('.page');
    pageElements.forEach(pageElement => {
        pageElement.style.display = 'block';
    });
    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    gridRowPages.forEach(gridRowPage => {
    gridRowPage.innerHTML = '';
    });
    var gridRowPages = document.querySelector('.grid__row.grid__row-page');
    var bbElements = document.querySelector('.syrupTX');  
    gridRowPages.appendChild(bbElements.cloneNode(true));
   
}
function syrupVQ(){
    // Ẩn các cột
   
    var gridColumns = document.querySelectorAll('.grid__column-10');
    gridColumns.forEach(gridColumn => {
        gridColumn.style.display = 'none';
    });


    var pageElements  = document.querySelectorAll('.page');
    pageElements.forEach(pageElement => {
        pageElement.style.display = 'block';
    });
    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    gridRowPages.forEach(gridRowPage => {
    gridRowPage.innerHTML = '';
    });
    var gridRowPages = document.querySelector('.grid__row.grid__row-page');
    var bbElements = document.querySelector('.syrupVQ');  
    gridRowPages.appendChild(bbElements.cloneNode(true));
   
}

function thach() {
    // Ẩn các cột
    var gridColumns = document.querySelectorAll('.grid__column-10');
    gridColumns.forEach(gridColumn => {
        gridColumn.style.display = 'none';
    });


    var pageElements  = document.querySelectorAll('.page');
    pageElements.forEach(pageElement => {
        pageElement.style.display = 'block';
    });
    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    gridRowPages.forEach(gridRowPage => {
    gridRowPage.innerHTML = '';
    });

    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    var bbElements = document.querySelectorAll('.thach');
    gridRowPages.forEach(gridRowPage => {
        bbElements.forEach(bbElement => {
            gridRowPage.appendChild(bbElement.cloneNode(true));
        });
    });
}
function thachdeo(){
    // Ẩn các cột
   
    var gridColumns = document.querySelectorAll('.grid__column-10');
    gridColumns.forEach(gridColumn => {
        gridColumn.style.display = 'none';
    });


    var pageElements  = document.querySelectorAll('.page');
    pageElements.forEach(pageElement => {
        pageElement.style.display = 'block';
    });
    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    gridRowPages.forEach(gridRowPage => {
    gridRowPage.innerHTML = '';
    });
    var gridRowPages = document.querySelector('.grid__row.grid__row-page');
    var bbElements = document.querySelector('.thachdeo');  
    gridRowPages.appendChild(bbElements.cloneNode(true));
   
}
function thachgion(){
    // Ẩn các cột
   
    var gridColumns = document.querySelectorAll('.grid__column-10');
    gridColumns.forEach(gridColumn => {
        gridColumn.style.display = 'none';
    });


    var pageElements  = document.querySelectorAll('.page');
    pageElements.forEach(pageElement => {
        pageElement.style.display = 'block';
    });
    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    gridRowPages.forEach(gridRowPage => {
    gridRowPage.innerHTML = '';
    });
    var gridRowPages = document.querySelector('.grid__row.grid__row-page');
    var bbElements = document.querySelector('.thachgion');  
    gridRowPages.appendChild(bbElements.cloneNode(true));
   
}
function suongsao(){
    // Ẩn các cột
   
    var gridColumns = document.querySelectorAll('.grid__column-10');
    gridColumns.forEach(gridColumn => {
        gridColumn.style.display = 'none';
    });


    var pageElements  = document.querySelectorAll('.page');
    pageElements.forEach(pageElement => {
        pageElement.style.display = 'block';
    });
    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    gridRowPages.forEach(gridRowPage => {
    gridRowPage.innerHTML = '';
    });
    var gridRowPages = document.querySelector('.grid__row.grid__row-page');
    var bbElements = document.querySelector('.suongsao');  
    gridRowPages.appendChild(bbElements.cloneNode(true));
   
}

function tranchau() {
    // Ẩn các cột
    var gridColumns = document.querySelectorAll('.grid__column-10');
    gridColumns.forEach(gridColumn => {
        gridColumn.style.display = 'none';
    });


    var pageElements  = document.querySelectorAll('.page');
    pageElements.forEach(pageElement => {
        pageElement.style.display = 'block';
    });
    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    gridRowPages.forEach(gridRowPage => {
    gridRowPage.innerHTML = '';
    });

    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    var bbElements = document.querySelectorAll('.tranchau');
    gridRowPages.forEach(gridRowPage => {
        bbElements.forEach(bbElement => {
            gridRowPage.appendChild(bbElement.cloneNode(true));
        });
    });
}
function tranchauden(){
    // Ẩn các cột
   
    var gridColumns = document.querySelectorAll('.grid__column-10');
    gridColumns.forEach(gridColumn => {
        gridColumn.style.display = 'none';
    });


    var pageElements  = document.querySelectorAll('.page');
    pageElements.forEach(pageElement => {
        pageElement.style.display = 'block';
    });
    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    gridRowPages.forEach(gridRowPage => {
    gridRowPage.innerHTML = '';
    });
    var gridRowPages = document.querySelector('.grid__row.grid__row-page');
    var bbElements = document.querySelector('.tranchauden');  
    gridRowPages.appendChild(bbElements.cloneNode(true));
   
}
function tranchautrang(){
    // Ẩn các cột
   
    var gridColumns = document.querySelectorAll('.grid__column-10');
    gridColumns.forEach(gridColumn => {
        gridColumn.style.display = 'none';
    });


    var pageElements  = document.querySelectorAll('.page');
    pageElements.forEach(pageElement => {
        pageElement.style.display = 'block';
    });
    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    gridRowPages.forEach(gridRowPage => {
    gridRowPage.innerHTML = '';
    });
    var gridRowPages = document.querySelector('.grid__row.grid__row-page');
    var bbElements = document.querySelector('.tranchautrang');  
    gridRowPages.appendChild(bbElements.cloneNode(true));
   
}
function tranchauhoangkim(){
    // Ẩn các cột
   
    var gridColumns = document.querySelectorAll('.grid__column-10');
    gridColumns.forEach(gridColumn => {
        gridColumn.style.display = 'none';
    });


    var pageElements  = document.querySelectorAll('.page');
    pageElements.forEach(pageElement => {
        pageElement.style.display = 'block';
    });
    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    gridRowPages.forEach(gridRowPage => {
    gridRowPage.innerHTML = '';
    });
    var gridRowPages = document.querySelector('.grid__row.grid__row-page');
    var bbElements = document.querySelector('.tranchauhoangkim');  
    gridRowPages.appendChild(bbElements.cloneNode(true));
   
}
function tranchau3q(){
    // Ẩn các cột
   
    var gridColumns = document.querySelectorAll('.grid__column-10');
    gridColumns.forEach(gridColumn => {
        gridColumn.style.display = 'none';
    });


    var pageElements  = document.querySelectorAll('.page');
    pageElements.forEach(pageElement => {
        pageElement.style.display = 'block';
    });
    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    gridRowPages.forEach(gridRowPage => {
    gridRowPage.innerHTML = '';
    });
    var gridRowPages = document.querySelector('.grid__row.grid__row-page');
    var bbElements = document.querySelector('.tranchau3q');  
    gridRowPages.appendChild(bbElements.cloneNode(true));
   
}
function sugar() {
    // Ẩn các cột
    var gridColumns = document.querySelectorAll('.grid__column-10');
    gridColumns.forEach(gridColumn => {
        gridColumn.style.display = 'none';
    });


    var pageElements  = document.querySelectorAll('.page');
    pageElements.forEach(pageElement => {
        pageElement.style.display = 'block';
    });
    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    gridRowPages.forEach(gridRowPage => {
    gridRowPage.innerHTML = '';
    });

    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    var bbElements = document.querySelectorAll('.sugar');
    gridRowPages.forEach(gridRowPage => {
        bbElements.forEach(bbElement => {
            gridRowPage.appendChild(bbElement.cloneNode(true));
        });
    });
}
function sugarblack(){
    // Ẩn các cột
   
    var gridColumns = document.querySelectorAll('.grid__column-10');
    gridColumns.forEach(gridColumn => {
        gridColumn.style.display = 'none';
    });


    var pageElements  = document.querySelectorAll('.page');
    pageElements.forEach(pageElement => {
        pageElement.style.display = 'block';
    });
    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    gridRowPages.forEach(gridRowPage => {
    gridRowPage.innerHTML = '';
    });
    var gridRowPages = document.querySelector('.grid__row.grid__row-page');
    var bbElements = document.querySelector('.sugarblack');  
    gridRowPages.appendChild(bbElements.cloneNode(true));
   
}
function sugarwhite(){
    // Ẩn các cột
   
    var gridColumns = document.querySelectorAll('.grid__column-10');
    gridColumns.forEach(gridColumn => {
        gridColumn.style.display = 'none';
    });


    var pageElements  = document.querySelectorAll('.page');
    pageElements.forEach(pageElement => {
        pageElement.style.display = 'block';
    });
    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    gridRowPages.forEach(gridRowPage => {
    gridRowPage.innerHTML = '';
    });
    var gridRowPages = document.querySelector('.grid__row.grid__row-page');
    var bbElements = document.querySelector('.sugarwhite');  
    gridRowPages.appendChild(bbElements.cloneNode(true));
   
}
function sugarp(){
    // Ẩn các cột
   
    var gridColumns = document.querySelectorAll('.grid__column-10');
    gridColumns.forEach(gridColumn => {
        gridColumn.style.display = 'none';
    });


    var pageElements  = document.querySelectorAll('.page');
    pageElements.forEach(pageElement => {
        pageElement.style.display = 'block';
    });
    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    gridRowPages.forEach(gridRowPage => {
    gridRowPage.innerHTML = '';
    });
    var gridRowPages = document.querySelector('.grid__row.grid__row-page');
    var bbElements = document.querySelector('.sugarp');  
    gridRowPages.appendChild(bbElements.cloneNode(true));
   
}

function cafe() {
    // Ẩn các cột
    var gridColumns = document.querySelectorAll('.grid__column-10');
    gridColumns.forEach(gridColumn => {
        gridColumn.style.display = 'none';
    });


    var pageElements  = document.querySelectorAll('.page');
    pageElements.forEach(pageElement => {
        pageElement.style.display = 'block';
    });
    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    gridRowPages.forEach(gridRowPage => {
    gridRowPage.innerHTML = '';
    });

    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    var bbElements = document.querySelectorAll('.cafe');
    gridRowPages.forEach(gridRowPage => {
        bbElements.forEach(bbElement => {
            gridRowPage.appendChild(bbElement.cloneNode(true));
        });
    });
}

function set() {
    // Ẩn các cột
    var gridColumns = document.querySelectorAll('.grid__column-10');
    gridColumns.forEach(gridColumn => {
        gridColumn.style.display = 'none';
    });


    var pageElements  = document.querySelectorAll('.page');
    pageElements.forEach(pageElement => {
        pageElement.style.display = 'block';
    });
    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    gridRowPages.forEach(gridRowPage => {
    gridRowPage.innerHTML = '';
    });

    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    var bbElements = document.querySelectorAll('.set');
    gridRowPages.forEach(gridRowPage => {
        bbElements.forEach(bbElement => {
            gridRowPage.appendChild(bbElement.cloneNode(true));
        });
    });
}
function milk() {
    // Ẩn các cột
    var gridColumns = document.querySelectorAll('.grid__column-10');
    gridColumns.forEach(gridColumn => {
        gridColumn.style.display = 'none';
    });


    var pageElements  = document.querySelectorAll('.page');
    pageElements.forEach(pageElement => {
        pageElement.style.display = 'block';
    });
    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    gridRowPages.forEach(gridRowPage => {
    gridRowPage.innerHTML = '';
    });

    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    var bbElements = document.querySelectorAll('.milk');
    gridRowPages.forEach(gridRowPage => {
        bbElements.forEach(bbElement => {
            gridRowPage.appendChild(bbElement.cloneNode(true));
        });
    });
}
function milkNSPN(){
    // Ẩn các cột
   
    var gridColumns = document.querySelectorAll('.grid__column-10');
    gridColumns.forEach(gridColumn => {
        gridColumn.style.display = 'none';
    });


    var pageElements  = document.querySelectorAll('.page');
    pageElements.forEach(pageElement => {
        pageElement.style.display = 'block';
    });
    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    gridRowPages.forEach(gridRowPage => {
    gridRowPage.innerHTML = '';
    });
    var gridRowPages = document.querySelector('.grid__row.grid__row-page');
    var bbElements = document.querySelector('.milkNSPN');  
    gridRowPages.appendChild(bbElements.cloneNode(true));
   
}
function milkOT(){
    // Ẩn các cột
   
    var gridColumns = document.querySelectorAll('.grid__column-10');
    gridColumns.forEach(gridColumn => {
        gridColumn.style.display = 'none';
    });


    var pageElements  = document.querySelectorAll('.page');
    pageElements.forEach(pageElement => {
        pageElement.style.display = 'block';
    });
    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    gridRowPages.forEach(gridRowPage => {
    gridRowPage.innerHTML = '';
    });
    var gridRowPages = document.querySelector('.grid__row.grid__row-page');
    var bbElements = document.querySelector('.milkOT');  
    gridRowPages.appendChild(bbElements.cloneNode(true));
   
}
function milkTL(){
    // Ẩn các cột
   
    var gridColumns = document.querySelectorAll('.grid__column-10');
    gridColumns.forEach(gridColumn => {
        gridColumn.style.display = 'none';
    });


    var pageElements  = document.querySelectorAll('.page');
    pageElements.forEach(pageElement => {
        pageElement.style.display = 'block';
    });
    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    gridRowPages.forEach(gridRowPage => {
    gridRowPage.innerHTML = '';
    });
    var gridRowPages = document.querySelector('.grid__row.grid__row-page');
    var bbElements = document.querySelector('.milkTL');  
    gridRowPages.appendChild(bbElements.cloneNode(true));
   
}
function milkLa(){
    // Ẩn các cột
   
    var gridColumns = document.querySelectorAll('.grid__column-10');
    gridColumns.forEach(gridColumn => {
        gridColumn.style.display = 'none';
    });


    var pageElements  = document.querySelectorAll('.page');
    pageElements.forEach(pageElement => {
        pageElement.style.display = 'block';
    });
    var gridRowPages = document.querySelectorAll('.grid__row.grid__row-page');
    gridRowPages.forEach(gridRowPage => {
    gridRowPage.innerHTML = '';
    });
    var gridRowPages = document.querySelector('.grid__row.grid__row-page');
    var bbElements = document.querySelector('.milkLa');  
    gridRowPages.appendChild(bbElements.cloneNode(true));
   
}