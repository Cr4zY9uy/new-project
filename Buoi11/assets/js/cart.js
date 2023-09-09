var storage = localStorage.getItem("cart");
if (storage == null) {
    storage = [];
}
else {
    storage = JSON.parse(storage);
}
var cart = storage;
document.getElementById("cart_number").innerText = cart.length;

function getCart() {

    let products = document.getElementById("productShop");

    products.inneHTMLr = '';
    cart.forEach(product => {
        products.innerHTML += `<tr id="${product.id}">
        <th scope="row"><button class="btn btn-light" onclick="Delete(${product.id})">X</button></th>
        <td><img src='${product.thumbnail}' width="70px" height="100px"></td>
        <td>${product.title}</td>
        <td>${product.price} $</td>
        <td>${product.qty}</td>
        <td>${product.price * product.qty} $</td>
      </tr>`

    })
    invoice()
}
function invoice() {
    let subTotal = document.getElementById('subtotal');
    subTotal.innerText = '';
    let shipping = document.getElementById('shipping');
    shipping.innerText = '';
    let total = document.getElementById('total');
    total.innerText = '';
    let totalSub = 0;
    let shippingCost = 0;
    cart.forEach(product => {
        totalSub += product.price * product.qty
        subTotal.innerText = `${totalSub}`;
        shipping.innerText = `free ship`;
        total.innerText = `${totalSub + shippingCost}`
    })

}
function Delete(idDel) {
    const productIndex = cart.findIndex(product => product.id === idDel);

    if (productIndex !== -1) {
        // Xóa sản phẩm khỏi giỏ hàng
        cart.splice(productIndex, 1);

        // Cập nhật Local Storage
        localStorage.setItem("cart", JSON.stringify(cart));

        // Xóa sản phẩm khỏi giao diện người dùng
        const productRow = document.getElementById(idDel);
        if (productRow) {
            productRow.remove();
        }

        // Cập nhật số lượng sản phẩm trong giỏ hàng
        document.getElementById("cart_number").innerText = cart.length;
        invoice();
    }

}
function DeleteAll() {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    const productRows = document.querySelectorAll("#productShop tr");
    productRows.forEach(row => row.remove());
    document.getElementById("cart_number").innerText = cart.length;
    invoice();
}