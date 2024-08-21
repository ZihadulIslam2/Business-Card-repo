import React from 'react'
import { useState } from 'react'
import './App.css'
import myimg from './assets/myimg.jpg'
import InfoText from './components/InfoText'
import SocialButtons from './components/SocialButtons'
import AboutText from './components/AboutText'
import StateHook from './components/StateHook'
import OutputingList from './components/OutputingList'
import Futter from './components/Futter'
import UseStateHook from './components/UseStateHook'

function App() {
  return (
    <div className="bg-slate-700 f-screen flex flex-col items-center m-0 p-0">
      <div className="bg-gray-800 flex flex-col justify-center items-center p-8">
        <img src={myimg} className="w-80 " alt="My Image" />
        <InfoText />
        <SocialButtons />
        <AboutText />
        <StateHook />
        <OutputingList />
        <Futter />
        <UseStateHook />
      </div>
    </div>
  )
}

export default App
