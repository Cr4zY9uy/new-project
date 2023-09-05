
document.getElementById(`find`).addEventListener('click', function () {
    var inputCity = document.getElementsByTagName(`input`)[0].value;
    var errorLine = document.getElementsByClassName(`error_text`)[0];
    errorLine.innerText = '';
    var listItem = document.getElementById(`forecast_list`);
    listItem.innerHTML = '';
    if (inputCity === null) {
        console.log('Input value is null or empty. Fetch request not made.');
        const controller = new AbortController();
        controller.abort();
    }
    else {
        var url = `https://api.openweathermap.org/data/2.5/forecast?q=${inputCity}&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`;
        fetch(url).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
            .then(data => {
                const itemList = data.list;
                for (let i = 0; i < itemList.length; i++) {
                    listItem.innerHTML += `
                    <div class="item col-3 id${itemList[i].weather[0].id}">
                        <figure class="detail-item">
                            <h5>${itemList[i].dt_txt}</h5>
                            <h3>${itemList[i].main.temp}<sup>o</sup><span>C</span></h3>
                            <h6>${itemList[i].weather[0].description}</h6>
                        </figure>
                        <img src="https://openweathermap.org/img/wn/${itemList[i].weather[0].icon}@2x.png
                        " alt="">
                    </div>
                `;
                }
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                errorLine.innerText = 'Fail to convert input to parameter';
            });
    }
})

var stopSwitch = function (e) {
    return e.preventDefault();
}
var formElement = document.querySelector('form');
formElement.addEventListener('submit', stopSwitch);