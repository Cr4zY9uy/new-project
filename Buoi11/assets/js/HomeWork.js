const url = `https://dummyjson.com/products?limit=8
`;
fetch(url).then(data => data.json())
    .then(data => {
        const imgCarousel = document.getElementsByClassName(`d-block`);
        const product = data.products;
        for (let i = 0; i < 3; i++) {
            imgCarousel[i].src = product[i].thumbnail;
        }
        const ratings = [], categories = [], brands = [];
        for (let i = 0; i < product.length; i++) {
            ratings.push(product[i].rating);
            categories.push(product[i].category);
            brands.push(product[i].brand);
        }
        const uniqueBrand = [...new Set(brands)],
            uniqueCate = [...new Set(categories)];
        const parent = document.getElementById(`products`);
        const parentBrand = document.getElementById(`brand-nav`);
        const parentCate = document.getElementById(`type`);
        for (let i = 0; i < product.length; i++) {
            parent.innerHTML += `
            <div class="col-3 item">
            <img src=${product[i].thumbnail} alt=${product[i].title} 
            class="img-item" width="100%" height="250px">
            <div class="sales"><span>${product[i].discountPercentage}</span></div>
            <figure class="des">
            <h4>${product[i].title}</h4>
            <h6>${product[i].description}</h6>
            <h5>${product[i].price}</h5>
            <div class="stars-outer">
        <div class=" stars-inner"></div>
    </div>
            </figure>
            </div>`;
        }
        for (let j = 0; j < uniqueBrand.length; j++) {
            parentBrand.innerHTML += `<a href="">${uniqueBrand[j]}</a>`;
        }
        for (let i = 0; i < uniqueCate.length; i++) {
            parentCate.innerHTML += `<a href="">${uniqueCate[i]}</a>`;
        }
        const starsTotal = 5;
        // Run getRatings when DOM loads
        // Get ratings
        for (let rating in ratings) {
            // Get percentage
            const starPercentage = (ratings[rating] / starsTotal) * 100;
            console.log(rating);
            // Round to nearest 10
            const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

            // Set width of stars-inner to percentage
            document.querySelectorAll(`.stars-inner`)[rating].style.width = starPercentageRounded;

        }

    })
