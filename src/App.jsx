import styled, { ThemeProvider } from 'styled-components'
import {darkTheme} from './utils/Themes'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Event from './pages/Event'
import Contacts from './pages/Contacts'
import Home from './pages/Home'



function App() {

  return (
    <>
     <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path="/events" element={<Event />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
     </ThemeProvider>
    </>
  )
}

export default App
