import React from 'react'
import Header from './components/Header'
import Search from './components/Search'
import WeatherCard from './components/WeatherCard'
import Footer from './components/Footer'
import { useState } from 'react'
import './App.css'


const App = () => {

  const[weatherDeatils, setWeatherDeatils] = useState(null)
  // console.log(watherDeatils)
  return (
    <div className='app'>
      <div className='app-container'>

   <Header/>
   <Search setWeatherDeatils={setWeatherDeatils}/>
   {weatherDeatils && <WeatherCard weatherDeatils ={weatherDeatils}/>}
   
   <Footer/>
      </div>
    </div>
  )
}

export default App
