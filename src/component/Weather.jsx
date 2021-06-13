import React, { useEffect, useState } from 'react';

const Weather = () => {

    const [city, setCity] = useState(null);

    const [search, setSearch] = useState("Mumbai");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a74f8d5437b55147d3c1ae7b05cd8173`;
            const response = await fetch(url)
            const resjson = await response.json()
            setCity(resjson.main)
            console.log(resjson.main)
        }

        fetchApi();
    }, [search])

    return (
        <div className="container">
            <div className="weatherWrapper">
                <div className="searchBoxWrapper">
                    <input type="search" className="searchInput" value={search} placeholder="Search City Name" onChange={(event) => { setSearch(event.target.value) }} />
                </div>

                {!city ? (<p style={{ textAlign: 'center' }}>No Data Found</p>)
                    : (
                        <>
                            <div className="weatherInfo">
                                <h3 className="cityName">
                                    <i className="fas fa-street-view"></i> {search}
                                </h3>

                                <h4 className="temperature">
                                    {city.temp}° cel
                                </h4>

                                <p className="minMax">
                                    <span className="min">Min : {city.temp_min}° cel</span>
                                    <span className="seperator">|</span>
                                    <span className="max">Max : {city.temp_max}° cel</span>
                                </p>
                            </div>

                            <div className="wave one"></div>
                            <div className="wave two"></div>
                            <div className="wave three"></div>
                        </>
                    )

                }
            </div>
        </div>
    )
}

export default Weather;