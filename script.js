//I am Vincent
// 定义一个空数组用于存储用户信息  
var users = [];  
  
// 页面初始化函数，假设有相应的页面元素  
function init() {  
    // 隐藏所有页面  
    var pages = document.querySelectorAll('.page');  
    for (var i = 0; i < pages.length; i++) {  
        pages[i].style.display = 'none';  
    }  
      
    // 显示创建用户页面  
    showPage('createUserPage');  
}  
  
/**  
 * 显示指定ID的页面，并隐藏其他所有页面  
 *  
 * @param {string} pageId - 要显示的页面的ID  
 */  
function showPage(pageId) {  
    // 隐藏所有页面  
    var pages = document.querySelectorAll('.page');  
    for (var i = 0; i < pages.length; i++) {  
        pages[i].style.display = 'none';  
    }  
    // 显示指定ID的页面  
    document.getElementById(pageId).style.display = 'block';  
}  
  
/**  
 * 创建新用户并添加到用户数组中，然后跳转到登录页面  
 */  
function createUser() {  
    // 获取用户名和密码输入框的值  
    var username = document.getElementById("username").value;  
    var password = document.getElementById("password").value;  
    // 将新用户信息添加到用户数组中  
    users.push({ username: username, password: password });  
    // 显示成功创建用户的提示  
    alert('User ' + username + ' created!');  
    // 跳转到登录页面  
    showPage('loginPage');  
}  
  
/**  
 * 验证登录信息，如果正确则跳转到购物页面，否则返回创建用户页面  
 */  
function login() {  
    // 获取登录页面上的用户名和密码输入框的值  
    var loginUsername = document.getElementById("loginUsername").value;  
    var loginPassword = document.getElementById("loginPassword").value;  
    var found = false; // 标记是否找到了匹配的用户  
    // 遍历用户数组以查找匹配的用户名和密码  
    for (var i = 0; i < users.length; i++) {  
        if (users[i].username === loginUsername && users[i].password === loginPassword) {  
            found = true; // 找到了匹配的用户，设置标记为true  
            break; // 跳出循环  
        }  
    }  
    // 如果找到了匹配的用户，则跳转到购物页面  
    if (found) {  
      alert('User ' + loginUsername + ' logged in!');
        showPage('shoppingPage');  
    } else {  
        // 如果没有找到匹配的用户，则返回创建用户页面  
        showPage('createUserPage');  
        // 显示错误消息（如果需要）  
        alert("Invalid username or password. Please try again.");  
    }  
}  
  
// 假设页面加载完成后执行init函数  
window.onload = init;  
  
/**  
 * 计算购物车中的商品总价，并显示在页面上  
 */  
var cart = {}; // 购物车对象  
  
  function addToCart(productId) {  
      if (!cart[productId]) {  
          cart[productId] = { quantity: 1, price: parseFloat(document.getElementsByClassName('unit-price' + productId)[0].innerText) };  
      } else {  
          cart[productId].quantity++;  
      }  
      updateQuantityDisplay(productId);  
      updateTotal();  
  }  
    
  function removeFromCart(productId) {  
      if (cart[productId] && cart[productId].quantity > 1) {  
          cart[productId].quantity--;  
      } else if (cart[productId]) {  
          delete cart[productId];  
      }  
      updateQuantityDisplay(productId);  
      updateTotal();  
  }  
    
  function updateQuantityDisplay(productId) {  
      var quantityElement = document.getElementById('quantity' + productId);  
      var summaryQuantityElement = document.getElementById('summaryQuantity' + productId);  
      if (cart[productId]) {  
          quantityElement.innerText = cart[productId].quantity;  
          summaryQuantityElement.innerText = cart[productId].quantity;  
      } else {  
          quantityElement.innerText = 0;  
          summaryQuantityElement.innerText = 0;  
      }  
  }  
    
  function updateTotal() {  
      var total = 0;  
      for (var id in cart) {  
          if (cart.hasOwnProperty(id)) {  
              var quantity = cart[id].quantity;  
              var unitPrice = cart[id].price;  
              total += quantity * unitPrice;  
              document.getElementById('subtotal' + id).innerText = '$' + (quantity * unitPrice).toFixed(2);  
          }  
      }  
      document.getElementById('total').innerText = '$' + total.toFixed(2);  
  }  
    
  function checkout() {  
      // 结账逻辑  
      // ...  
      alert('You have already checked out!');  
  }  
    
  function clearCart() {  
      cart = {}; // 清空购物车对象  
      updateDisplay(); // 更新页面显示  
  }  
    
  function updateDisplay() {  
      // 更新页面显示所有产品的数量和购物车总价  
      for (var i = 1; i <= 2; i++) { // 假设只有两个产品  
          updateQuantityDisplay(i);  
      }  
      updateTotal();  
  }  
    
  // 初始化页面显示  
  updateDisplay();  