import { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";

const Forecast = ({ city }) => {

    const [result, setResult] = useState(null);
    const [error, setError] = useState(null)


    useEffect(() => {
        handleCity()
    }, [city]);

    const d = function getFormattedDate(date) {
        let dd = new Date(date);
        let year = dd.getFullYear();
        let month = (1 + dd.getMonth()).toString().padStart(2, '0');
        let day = dd.getDate().toString().padStart(2, '0');

        return day + '-' + month + '-' + year;
    }

    const handleCity = () => {
        //api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=eb3dda6cd7b142c7155cd16eae583c97`)
            .then(res => res.json())
            .then(res => {
                //console.log(res);
                if (res.cod == '404') {
                    setResult(null);
                    setError(res.message);
                } else {
                    let data = {};

                    if (res.list) {
                        for (let i = 0; i < res.list.length; i++) {
                            let element = res.list[i];
                            let date = element.dt_txt.split(" ")[0];
                            if (data.hasOwnProperty(date)) {
                                data[date].list.push({ time: element.dt_txt.split(" ")[1], temperature: element.main.temp });
                            } else {
                                data[date] = { list: [{ time: res.list[i].dt_txt.split(" ")[1], temperature: res.list[i].main.temp }] };
                            }
                        }

                    }
                    setError(null);

                    let arr = [];
                    Object.keys(data).forEach(date => {
                        arr.push({ date: d(date), data: data[date].list })
                    })
                    setResult(arr);
                }

            })
            .catch(e => {
                console.log(e.message);
                setError(e.message);
                setResult(null);
            });
    }

    return (
        <div className="grid">

            {
                result ?
                    result.map((element, index) => {
                        return <WeatherCard key={index} data={element.data} date={element.date} />
                    })
                    : null
            }

            <style jsx>{`

        .grid {
            display:flex;
            flex-wrap:wrap;
            gap:20px;
            align-items:center;
            justify-content:center;
            margin: 20px 20px;
        }

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
        }

        .main {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
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
              color:red;
          }

          .temperature {
              font-size:22px;
          }

        `}</style>
        </div>
    )
}

export default Forecast;