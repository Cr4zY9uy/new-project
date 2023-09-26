import Products from "./Products";

function Category(props) {
    const cate = props.category;
    const pr = [{
        name: "Iphone 1",
        price: "300$",
        sale: "200$",
        img: "/assets/images/iphone1.png"
    },
    {
        name: "Iphone 2",
        price: "500$",
        sale: "200$",
        img: "/assets/images/iphone2.png"
    },
    {
        name: "Iphone 3",
        price: "300$",
        sale: "200$",
        img: "/assets/images/iphone3.png"
    },
    {
        name: "Iphone 4",
        price: "300$",
        sale: 0,
        img: "/assets/images/iphone4.png"
    },
    {
        name: "Iphone 5",
        price: "600$",
        sale: "100$",
        img: "/assets/images/iphone5.png"
    },
    {
        name: "Iphone 6",
        price: "700$",
        sale: 0,
        img: "/assets/images/iphone6.png"
    }
    ]
    return (
        <div className='row'>
            <h1>{cate.name}</h1>
            <h2>{cate.count > 0 ? `Remain:${cate.count}` : 0}</h2>
            <Products product={pr[0]} />
            <Products product={pr[1]} />
            <Products product={pr[2]} />
            <Products product={pr[3]} />
            <Products product={pr[4]} />
            <Products product={pr[5]} />
        </div>
    );
}
export default Category;