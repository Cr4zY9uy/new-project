const url = `https://dummyjson.com/products`;

var itemPerPage = 8;
var currentPage = 1;
var start = 0;
var end = itemPerPage;
const totalPage = (Math.floor(32 / itemPerPage));
var storage = localStorage.getItem("cart");
if (storage == null) {
    storage = [];
}
else {
    storage = JSON.parse(storage);
}
var cart = storage;
document.getElementById("cart_number").innerText = cart.length;

function getItem() {
    fetch(url + '?limit=32')
        .then(respone => respone.json())
        .then(data => {
            displayCarousel(data.products);
            displayProducts(data.products, '#products');
            changePage();
            displayBrand(data.products, "#brand-nav");
            displayCategory(data.products, "#type");
            setStarRatings(data.products);
        })
}

document.getElementById(`search-icon`).addEventListener('click', function () {
    let nameSearch = document.getElementById("item-name").value;
    if (nameSearch === null) {
        console.log('Input value is null or empty. Fetch request not made.');
        const controller = new AbortController();
        controller.abort();
    }
    else {
        fetch(url + `/search?q=${nameSearch}`)
            .then(respone => respone.json())
            .then(data => {
                displayProducts(data.products, '#products');
                setStarRatings(data.products);
            })
            .catch(error => {
                console.log(error);
            })
    }
})
document.querySelector(`form`).addEventListener('submit', function (e) {
    return e.preventDefault();
})
function displayCarousel(data) {
    const imgCarousel = document.getElementsByClassName(`d-block`);
    for (let i = 0; i < 3; i++) {
        imgCarousel[i].src = data[i].thumbnail;
    }
}
function getCurrentPage(currentPage) {
    start = (currentPage - 1) * itemPerPage;
    end = currentPage * itemPerPage;
}
function displayProducts(data, parentSelector) {
    const parent = document.querySelector(parentSelector);
    parent.innerHTML = '';
    data.map((product, index) => {
        if (index >= start && index < end) {
            parent.innerHTML += `
            <div class="col-3 item">
                <img src=${product.thumbnail} alt=${product.title} 
                    class="img-item" width="100%" height="250px">
                <div class="sales"><span>${product.discountPercentage}</span></div>
                <figure class="des">
                    <h4>${product.title}</h4>
                    <h5>${product.price}</h5>
                </figure>
                <div class="stars-outer">
                        <div class=" stars-inner"></div>
                    </div>
                <div class="action">
                    <button class="btn btn-primary addCart" onclick="addToCart(${product.id})">Add to cart</button></div>
                </div>`;
        }
    });
}
function addToCart(id) {
    let check = false;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == id) {
            check = true;
            cart[i].qty++;
            localStorage.setItem("cart", JSON.stringify(cart));
            break;
        }
    }
    if (check == false) {
        fetch(url + `/${id}`)
            .then(response => response.json())
            .then(data => {
                data.qty = 1;
                cart.push(data);
                document.getElementById("cart_number").innerText = cart.length;
                localStorage.setItem("cart", JSON.stringify(cart));
            })
    }

}
function setStarRatings(data) {
    const ratings = data.map(product => product.rating);
    const starsTotal = 5;
    ratings.forEach((rating, index) => {
        // Get percentage
        const starPercentage = (rating / starsTotal) * 100;
        // Round to nearest 10
        const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
        // Set width of stars-inner to percentage
        document.querySelectorAll('.stars-inner')[index].style.width = starPercentageRounded;
    });
}
function displayCategory(data, parentSelector) {
    const parent = document.querySelectorAll(parentSelector)[0];
    const uniqueCate = [...new Set(
        data.reduce((acc, product) => {
            acc.push(product.category);
            return acc;
        }, [])
    )];

    uniqueCate.forEach(category => {
        parent.innerHTML += `<a href="">${category}</a>`;
    });
}
function displayBrand(data, parentSelector) {
    const parent = document.querySelectorAll(parentSelector)[0];
    const uniqueBrand = [...new Set(
        data.reduce((acc, product) => {
            acc.push(product.brand);
            return acc;
        }, [])
    )];

    uniqueBrand.forEach(brand => {
        parent.innerHTML += `<a href="">${brand}</a>`;
    });
}
function renderPageList() {
    var html = document.getElementsByClassName('numberPage')[0];
    html.innerHTML = '';
    for (let i = 1; i <= totalPage; i++) {
        if (i === 1) {
            html.innerHTML += `<a href="javascript:void(0)" class="number active">${i}</a>`;
        }
        else {
            html.innerHTML += `<a href="javascript:void(0)" class="number">${i}</a>`;
        }
    }
}
function changePage() {
    const currentPageElements = document.getElementsByClassName('number');

    for (let i = 0; i < totalPage; i++) {
        currentPageElements[i].addEventListener('click', () => {
            console.log('Clicked element index:', i);

            let value = i + 1;
            currentPage = value;

            for (let j = 0; j < totalPage; j++) {
                if (j === i) {
                    currentPageElements[i].classList.add('active');
                } else {
                    currentPageElements[j].classList.remove('active');
                }
            }
            getCurrentPage(currentPage);
            getItem();
        });
    }
}

document.querySelector('.next').addEventListener('click', () => {
    currentPage++;
    if (currentPage > totalPage) {
        currentPage = totalPage;
    }
    getCurrentPage(currentPage);
    getItem();
})
document.querySelector('.prev').addEventListener('click', () => {
    currentPage--;
    if (currentPage < 1) {
        currentPage = 1;
    }
    getCurrentPage(currentPage);
    getItem();
})
let mybutton = document.getElementById("scrollTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}