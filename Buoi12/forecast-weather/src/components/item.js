import React from 'react';

const Item = (props) => {
    const weather = props.weather;

    return (
        <div className="item col-3">
            <figure className="detail-item">
                <h5>{weather.dt_txt}</h5>
                <h3>{weather.main.temp}<sup>o</sup><span>C</span></h3>
                <h6>{weather.weather[0].description}</h6>
            </figure>
            <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="Weather Icon"
            />
        </div>
    );
};

export default Item;
