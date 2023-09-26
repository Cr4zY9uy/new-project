import "./interface.css"
import Item from "./item";
import { useEffect, useState } from 'react';
function Interface() {
    
    const [city, setCity] = useState("");
    const handleCity = (e) => {
        e.preventDefault();
        const cityName = document.getElementById("floatingInputGrid").value;
        setCity(cityName);
    }
    const [weather, setWeather] = useState([]);
    const loadWeather = (city) => {
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setWeather(data.list);
            })
            .catch(error => console.error(error))
    }

    useEffect(() => {
        if (city) {
            loadWeather(city);
        }
    }, [city]);
    return (
        <div className="App">
            <section>
                <div className="container">
                    <form>
                        <div className="row g-3">
                            <div className="col-md">
                                <input type="text" className="form-control" id="floatingInputGrid" placeholder="Type a city name" />
                            </div>
                            <div className="col-md">
                                <button type="submit" className="btn btn-secondary" onClick={handleCity}>Find</button>
                            </div>
                            <div className="col-md error_text">
                            </div>
                        </div>
                    </form>
                    <div id="forecast_list" className="row">
                        {weather.length > 0 && (
                            weather.map((item, index) => <Item key={index} weather={item} />)
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Interface;