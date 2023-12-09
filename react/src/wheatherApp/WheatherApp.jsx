// import { useState } from "react";
import styles from './styles.css'
export const WheatherApp = () => {
  // const [city, setCity] = useState("");
  // const [data, setData] = useState(null);
  // const handleChange = (e) => {
  //   setCity(e.target.value);
  // };
  // const urlBase = "https://api.openweathermap.org/data/2.5/weather";
  // const API_KEY = "8f995cbba8e7825d6c1a11137c7013a3";
  // const difKelvin = 273.15;
  // const fetchClima = async () => {
  //   try {
  //     const response = await fetch(`${urlBase}?q=${city}&appid=${API_KEY}`);
  //     const datas = await response.json();
  //     setData(datas);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (city.length > 0) fetchClima();
  // };
  return (
    <>
      <nav >
        <h1>Logo</h1>
        <div>
          <ul id="navbar">
            <li>
              <a className='' href="index.html">home</a>
            </li>
            <li>
              <a className='active' href="index.html">shop</a>
            </li>
            <li>
              <a href="index.html">Blog</a>
            </li>
            <li>
              <a href="index.html">About</a>
            </li>
            <li>
              <a href="index.html">Content</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
    // <div className="container">
    //   <h1>WheatherApp</h1>
    //   <form onSubmit={handleSubmit}>
    //     <input type="text" value={city} onChange={handleChange} />

    //     <button type="submit">buscar</button>
    //   </form>
    //   {data && (
    //     <div>
    //       <h2>{data.name}</h2>
    //       <p>Tempreatura: {parseInt(data?.main?.temp - difKelvin)}°C</p>
    //       <p>Condición meterológica: {data.weather[0].description}</p>
    //       <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}/>
    //     </div>
    //   )}
    // </div>
  );
};
