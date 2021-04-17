import './style/App.css';
import Main from './components/Main';
import './style/Search.css'
import { useState } from 'react';
import Error from './components/Error';

const { REACT_APP_API_KEY, REACT_APP_API_BASE } = process.env

const api = {
  key: REACT_APP_API_KEY,
  base: REACT_APP_API_BASE,
}

function App() {
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState()
  const [loading, setLoading] = useState(false)

  const search = evt => {
    if (evt.key === 'Enter' && query !== '') {
      setLoading(true)
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result)
          setQuery('')
          setLoading(false)
        })
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"]

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear()

    return `${day}, ${date} ${month} ${year}`
  }

  return (
    <div>
      <div className={typeof weather != "undefined" && typeof weather.weather != "undefined" ? loading === true ? `app ${weather.weather[0].main} Loading` : `app ${weather.weather[0].main}` : `app Main`}>
        <div className="search-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather != "undefined" && typeof weather.weather != "undefined" ? (
          <div className="main-container">
            <Main weather={weather.weather[0].main} temprature={Math.round(weather.main.temp)} region={`${weather.name}, ${weather.sys.country}`} date={dateBuilder(new Date())} />
            <div className={loading ? "loading" : ""}></div>
          </div>
        ) : (
          <div className="error-container">
            <Error />
            <div className={loading ? "loading" : ""}></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;