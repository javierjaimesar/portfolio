import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import { NextUIProvider } from "@nextui-org/react";

import './App.css'
import 'atropos/css'

function App() {

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <NextUIProvider>
      <Header />
      <Main />
      <Footer />
    </NextUIProvider>
  )
}

export default App
