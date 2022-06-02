import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Forecast from "../../components/UI/Forecast";
import classes from './weather.module.css';

const Weather = () => {

    const [result, setResult] = useState(null);
    const [currentCity,setCurrentCity] = useState("")
    const [city, setCity] = useState("");
    const [error, setError] = useState(null);
    const [showForcast, toggleShowForecast] = useState(false);

    const inputElement = useRef();

    const focusInput = () => {
        inputElement.current.focus();
    };

    useEffect(() => {
        focusInput();
    }, [])

    const reset = () => {
        setResult(null);
        setCity("");
        setError(null);
        toggleShowForecast(false)
        focusInput();
        setCurrentCity("");
    }
    

    const handleCity = () => {
        setCurrentCity(city);
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${process.env.NEXT_PUBLIC_WEATHERKEY}`)
            .then(res => res.json())
            .then(res => {
                if (res.cod == '404') {
                    setResult(null);
                    setError(res.message);
                } else {
                    let data = {
                        city: res.name,
                        currentTemperature: res.main.temp,
                    }
                    if (res.weather) {
                        data.weather = res.weather[0].main;
                        data.icon = "https://openweathermap.org/img/wn/" + res.weather[0].icon + "@2x.png";
                        data.icontooltip = res.weather[0].description;
                    }
                    setError(null);
                    setResult(data);
                }

            })
            .catch(e => {
                console.log(e.message);
                setError(e.message);
                setResult(null);
            });
    }

    return (
        <div className="main">
            <div><h1>Weather API</h1></div>

            <div className={classes.inputsection}>
                <input className="weatherinput" type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter name of a city" ref={inputElement} />
                <button className={city.length ? "weatherbutton" : "weatherbutton--disabled"} onClick={handleCity} disabled={!city.length}>Get weather</button>
            </div>

            {
                result ?
                    <div className={classes.result1}>
                        <div><h2>{result.city}</h2></div>
                        <div className="temperature">{result.currentTemperature} <b>&#8451;</b></div>
                        <div className="weathericon">
                            <p>{result.weather ? result.weather : null}</p>
                            <Image src={result.icon} width="50" height="50" tooltip={result.icontooltip} alt={result.icontooltip} />
                        </div>
                        <div className="forecast" onClick={() => toggleShowForecast(prev => !prev)}>{showForcast ? "Hide Forecast" : "5 Day Forecast"}</div>
                        <div className="reset" onClick={reset}>Reset</div>
                    </div> : <div className="result">⛅ 🌤️ 🌧️  ☀️ </div>
            }

            {
                showForcast ? <Forecast city={currentCity} />: null
            }

            {
                error ? <div className="error">
                    <div>OOPS! {error}</div>
                    <div className="reset" onClick={reset}>Reset</div>
                </div> : null
            }


            <style jsx>{`

       

        .weathericon {
          display: flex;
          justify-content: start;
          align-items: center;
        }

        .result{
            margin:20px 20px;;
            background-color:cyan;
            padding:10px;
            border-radius:5px;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            min-width:300px;
            animation:slidein 0.5s;
        }

        .main {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 0px 20px;
         }

        .error {
            margin:20px 20px;;
            background-color:red;
            color:white;
            padding:10px;
            border-radius:5px;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
        }

        .weatherinput {
            width: 250px;
            padding: 12px 20px;
            margin: 8px 0;
            box-sizing: border-box;
            margin-right: 10px;
        }

        .weatherbutton {
            background-color: #4CAF50; /* Green */
            border: none;
            color: white;
            padding: 12px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            cursor:pointer;
          }

          .weatherbutton--disabled{
            background-color: #4CAF50; /* Green */
            border: none;
            color: white;
            padding: 12px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            cursor:not-allowed;
            opacity:50%;
          }

          .forecast {
            margin-top:10px;
            cursor:pointer;
            color:blue;
        }

          .reset {
              margin-top:10px;
              cursor:pointer;
              color:blue;
          }

          .temperature {
              font-size:22px;
          }


        `}</style>
        </div>
    )

}

export default Weather;