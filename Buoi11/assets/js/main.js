// var data = `{
//     "coord":{
//         "lon":105.8412,"lat":21.0245
//     },
//     "weather":[
//         {
//         "id":500,
//         "main":"Rain",
//         "description":"light rain",
//         "icon":"10n"}
//     ],
//     "base":"stations",
//     "main":{
//         "temp":29,
//         "feels_like":36,
//         "temp_min":29,
//         "temp_max":29,
//         "pressure":1005,
//         "humidity":88,
//         "sea_level":1005,
//         "grnd_level":1003},
//     "visibility":10000,
//     "wind":{
//         "speed":2.41,
//         "deg":302,
//         "gust":3.97},
//     "rain":{
//         "1h":0.65},
//     "clouds":{
//         "all":72},
//     "dt":1692880646,
//     "sys":{
//         "type":1,
//         "id":9308,
//         "country":"VN",
//         "sunrise":1692830288,
//         "sunset":1692876040},
//     "timezone":25200,
//     "id":1581130,
//     "name":"Hanoi",
//     "cod":200}`;
var url = `https://api.openweathermap.org/data/2.5/weather?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric
`
fetch(url).then(data => data.json()).then(
    data => {

        document.getElementById('temp').innerText = data.main.temp;
        console.log(data.main.temp);
        document.getElementById(`hum`).innerText = data.main.humidity;
        document.getElementById(`press`).innerText = data.main.pressure;
        var weatherStatus = Object.assign({}, ...data.weather);
        document.getElementById(`des`).innerText = weatherStatus.main;
        document.getElementById(`city`).innerText = data.name;
        document.getElementsByTagName(`img`)[0].src = `https://openweathermap.org/img/wn/${weatherStatus.icon}@2x.png`

    }
)

var dataJson = `{
    "id": 1,
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 549,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "images": ["https://i.dummyjson.com/data/products/1/1.jpg", "https://i.dummyjson.com/data/products/1/2.jpg", "https://i.dummyjson.com/data/products/1/3.jpg", "https://i.dummyjson.com/data/products/1/4.jpg", "https://i.dummyjson.com/data/products/1/thumbnail.jpg"]
}`
var url1 = `https://dummyjson.com/products/1`;
fetch(url1).then(dataConvert => dataConvert.json())
    .then(dataConvert => {
        document.getElementsByClassName(`card-img-top`)[0].src = dataConvert.thumbnail;
        document.getElementsByClassName(`card-title`)[0].innerText = dataConvert.title;
        document.getElementsByClassName(`card-text`)[0].innerText = dataConvert.description;
        document.getElementsByClassName(`card-price`)[0].innerText = dataConvert.price;

        var parentElement = document.getElementById(`img-group`);
        for (let i = 0; i < dataConvert.images.length; i++) {
            var childElement = document.createElement(`img`);
            childElement.src = dataConvert.images[i];
            childElement.width = 40;
            childElement.height = 40;
            parentElement.appendChild(childElement);
        }
    })
