import React from 'react'
import Hero from '../components/Hero'
import FetchData from '../components/FetchData'


export default function Home() {
  return (
    <div style={{minHeight:"100vh"}}>
      <Hero/>
      <FetchData/>
    </div>
  )
}
