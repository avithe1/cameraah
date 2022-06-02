import classes from './weathercard.module.css';


const WeatherCard = ({ data, date }) => {

    return (
        <div className={classes.card}>
            <div className="container1">
                <h5>{date}</h5>
                <ul className="list-group">
                {
                    data.map((ele, index) => {
                        return (
                                <li key={index}>{ele.time}
                                    <span className="badge">{ele.temperature} &#8451;</span>
                                </li>
                        )
                    })
                }
                 </ul>
            </div>

            <style jsx>{`
        
          
          .container1 {
            padding: 2px 16px;
          }

          .list-group {
            list-style: none;
            margin: 0;
            padding: 0;
            border: 1px solid #ccc;
            border-radius: .5em;
            width: 20em;
        }

        .list-group li {
            border-top: 1px solid #ccc;
            padding: .5em;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .list-group li:first-child {
            border-top: 0;
        }

        .list-group .badge {
            background-color: rebeccapurple;
            color: #fff;
            font-weight: bold;
            font-size: 80%;
            border-radius: 10em;
            min-width: 1.5em;
            padding: .25em;
            text-align: center
        }
        `}</style>
        </div>)
}

export default WeatherCard;