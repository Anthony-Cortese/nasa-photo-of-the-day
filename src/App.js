import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios"
import Header from "./Components/Header"
import { BASE_URL, API_KEY } from "./Constants/index"

function App() {
  const [photo, setPhoto] = useState({});
  useEffect(() => {
    const getPic = () => {
      axios
      .get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        setPhoto(res.data);
      }) 
      .catch(err => {

      })
    }
    getPic()
  }, []);
  return (

 <Header /> 
<>
 <img src={photo.url}/>
  <h2>{photo.title}</h2>
  <h3>{photo.copyright}</h3>
  <h4>{photo.date}</h4>
  <p>{photo.explanation}</p>  
</>
  );


export default App;
